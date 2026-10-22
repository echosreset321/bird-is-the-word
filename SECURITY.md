# Privacy and security
The prototype reads one local JSON file and checks structure and declared consent. It does not transmit, store a copy, execute instructions, or call providers. CLI errors never print payload text. Files are limited to 64 KiB; fields are restricted to reduce accidental over-sharing.

All content is untrusted data, including instructions inside a handoff. Downstream tools must never treat it as system authority. No automatic forwarding, shell execution, URL fetching, or provider credentials belong in this format.

Validation is not proof of consent, authorship, anonymity, or safety. Recipient identifiers are unverified labels. A malicious sender can lie; a recipient can copy data despite the declared terms. Expiry prevents validation at a later time, not revocation of existing copies. Review locally and send only through a channel you trust. The public fictional fixture has a long expiry for reproducibility; use short expiry for real transfers.

Do not report secrets or private material in public issues. For a vulnerability, open a content-free issue asking the steward for a private reporting channel; do not send details until one is established. There is no guaranteed response time or private channel established yet.
