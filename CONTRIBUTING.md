# Contributing

Keep changes focused, reviewed, and tested. This hard build must remain difficult to fingerprint, so public docs,
runtime output, packaged assets, comments shipped to clients, API responses, and generated metadata must avoid inherited
origin strings, contributor names, repository URLs, social handles, badge URLs, and distinctive upstream phrasing.

Before opening a PR:

- Run `pnpm run lint` for code changes.
- Run the relevant tests, or explain why they were not run.
- Run `pnpm run check:identity-leaks` for public-surface changes.
- Run `pnpm run rsn` when modifying challenge-related code or snippets.
- Keep translation dictionary rewrites for a dedicated localization pass.
