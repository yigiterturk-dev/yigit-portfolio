# Yigit Erturk — Portfolio

An evidence-led personal portfolio for AI product development and full-stack product engineering.

## Featured work

- [ClinEntra](https://github.com/moriana55/clinentra) — evidence-first clinical-trial intelligence pilot
- [VoiceOps Studio](https://github.com/moriana55/voiceops-studio) — multilingual voice-operations prototype
- [Engineering Skills](https://github.com/moriana55/engineering-skills) — fourteen evidence-first Codex skills
- [ProofRepo](https://github.com/moriana55/proofrepo) — repository showcase audit with bounded evidence claims
- [LLM Output Contract](https://github.com/moriana55/llm-output-contract) — provider-independent JSON extraction and schema validation for model output
- [SecretProof](https://github.com/moriana55/secretproof) — local-first Git secret scanning with redacted findings and SARIF output

## Run locally

```sh
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173>.

## Evidence boundary

Numbers shown on the site were reproduced locally on 2026-08-15 and 2026-08-16:

- ClinEntra: complete `npm run ci`, including 19 named verification flows and the production build
- VoiceOps Studio: 27 passing tests, TypeScript check, and production build
- Engineering Skills: 19 passing unit tests
- ProofRepo: 3 passing tests, TypeScript check, production build, and public GitHub CI
- LLM Output Contract: 9 passing tests across the library and CLI, TypeScript check, production build, and public GitHub CI
- SecretProof: 8 passing tests across worktree, staged, history, allowlist, SARIF, init, and CLI behavior; TypeScript check, production build, and public GitHub CI

The products are portfolio projects and bounded pilots. The site does not claim production scale, compliance certification, revenue, or customer adoption.
