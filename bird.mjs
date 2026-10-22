import { readFileSync, statSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const MAX_BYTES = 65536;
function exact(obj, keys) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
    && Object.keys(obj).length === keys.length
    && keys.every(k => Object.hasOwn(obj, k));
}
const str = s => typeof s === 'string' && s.trim().length > 0 && s.length <= 4000;

export function validate(m, recipient, now = Date.now()) {
  if (!str(recipient)) return ['Expected recipient is required'];
  if (!Number.isFinite(now)) return ['Invalid validation time'];
  if (!exact(m, ['version','id','sender','recipient','purpose','expires_at','consent','content']))
    return ['Invalid top-level fields'];
  if (m.version !== '0.1') return ['Unsupported version'];
  if (!['id','sender','recipient','purpose','expires_at'].every(k => str(m[k])))
    return ['Invalid text field'];
  if (m.recipient !== recipient) return ['Recipient mismatch'];
  const t = Date.parse(m.expires_at);
  if (!Number.isFinite(t) || new Date(t).toISOString() !== m.expires_at || t <= now)
    return ['Invalid or expired timestamp'];
  if (!exact(m.consent, ['approved','scope','allow_training'])
      || m.consent.approved !== true || m.consent.scope !== 'single-handoff'
      || m.consent.allow_training !== false) return ['Explicit scoped consent required'];
  if (!Array.isArray(m.content) || m.content.length < 1 || m.content.length > 20)
    return ['Content must contain 1 to 20 items'];
  for (const c of m.content) {
    if (!exact(c, ['kind','text','provenance'])
        || !['human-summary','original-demo'].includes(c.kind)
        || !str(c.text) || c.provenance !== 'sender-authored')
      return ['Invalid content or provenance'];
  }
  return [];
}

export function parseAndValidate(text, recipient, now = Date.now()) {
  if (Buffer.byteLength(text, 'utf8') > MAX_BYTES) return ['File exceeds 64 KiB'];
  let message;
  try { message = JSON.parse(text); } catch { return ['Invalid JSON']; }
  return validate(message, recipient, now);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  let errors;
  if (args.length !== 3 || args[1] !== '--recipient') {
    errors = ['Usage: node bird.mjs FILE --recipient RECIPIENT'];
  } else {
    try {
      if (statSync(args[0]).size > MAX_BYTES) errors = ['File exceeds 64 KiB'];
      else errors = parseAndValidate(readFileSync(args[0], 'utf8'), args[2]);
    } catch { errors = ['Unable to read handoff file']; }
  }
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else console.log('Valid handoff');
}
