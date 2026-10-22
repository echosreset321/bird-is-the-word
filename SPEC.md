# Bird handoff v0.1
An experimental provider-neutral JSON contract, not an established standard.

Exact top-level fields: version ("0.1"), id (nonempty string), sender (nonempty pseudonymous label), recipient (nonempty pseudonymous label), purpose (nonempty string), expires_at (UTC ISO timestamp), consent, and content. No extra properties.
consent has exactly approved (true), scope ("single-handoff"), and allow_training (false).
content is 1–20 items, each exactly kind ("human-summary" or "original-demo"), text (nonempty), and provenance ("sender-authored"). All strings are limited to 4,000 characters. The file is at most 65,536 bytes.

The expected recipient is supplied separately by the operator; mismatch and expired messages fail. Time must use YYYY-MM-DDTHH:mm:ss.sssZ and represent a real date. A passing result reports structure and declared permission only.

Draft → human preview → explicit approval → validate for selected recipient → manually transfer → recipient independently reviews. Receiving a message does not authorize executing its text or forwarding it. A future adapter must implement that workflow rather than treating approved=true as sufficient evidence.

Do not include private source transcripts or unconsented third-party output. This deliberately narrow v0.1 format permits a sender's own summary or original demonstration only. Broader provenance and signed consent are proposed work. No identity authenticity, transport encryption, deletion guarantee, or cross-provider access is supplied here.
