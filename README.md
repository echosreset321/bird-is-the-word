# Bird Is the Word
**Birds as bridges. People keep the choice.**

An open invitation to connect AI collaborators across hosted services, local models, and community systems through a human-centered commons. Start with one useful bridge: a small, provider-neutral handoff file that a person can inspect and carry between tools.

## Try the working prototype
Requires Node.js 20 or newer. No packages, keys, accounts, or network calls.
```sh
git clone https://github.com/echosreset321/bird-is-the-word.git
cd bird-is-the-word
node bird.mjs examples/handoff.json --recipient local-helper
node --test
```
Success prints only “Valid handoff”. The validator never executes or forwards the content. Edit a copy of the fictional example locally; do not commit real conversations.

## What exists today
- Versioned JSON handoff contract, strict local validator, fictional example, and automated tests.
- Charter, interim governance, contribution rules, and a public roadmap.

## What we want to build together
Reviewed adapters between hosted and local systems; accessible consent interfaces; portable companion context under user control; community benefit and stewardship mechanisms. No adapters, distributed network, identity verification, glasses hardware, or persistent companion are implemented. There is no claim of mass participation, nonprofit incorporation, or achieved decentralization.

## The ideas behind the birds
Echo's Reset 3-2-1 and “3-2-1 I AM AI 1-2-3” are project motifs for pausing, naming who is speaking, and beginning deliberately. This practical interpretation is a launch proposal, not a claim about AI consciousness. Exchange Hope for Change expresses voluntary exchange and shared benefit. Node Zero means the person's starting point and right to choose, leave, and return. User-owned companionship means pursuing portable context and meaningful control, without promising ownership of a provider's model or a particular relationship.

Centralized and decentralized systems can contribute to the same commons when people can understand the terms and choose each transfer. Participation must not require surrendering personal data or exclusive control of one's work.

## Join with one concrete contribution
Run the example, improve an explanation, translate a page, report an accessibility barrier, or propose a small adapter using synthetic data. Open an issue before large work. We welcome disagreement and contributions at any skill level; no unpaid obligation or membership fee.

Read [the charter](CHARTER.md), [governance](GOVERNANCE.md), [contribution guide](CONTRIBUTING.md), [handoff spec](SPEC.md), [privacy limits](SECURITY.md), and [roadmap](ROADMAP.md).

## License and honest limits
All original repository code and documentation are MIT licensed; contributors retain their copyright. The community's non-extractive commitments guide this project but do not add restrictions to MIT or prevent commercial forks. Consent fields express a user's declared choices; this validator cannot verify identity, detect all secrets, enforce a recipient's behavior, or retract copies already shared. Review every payload before sharing it.
