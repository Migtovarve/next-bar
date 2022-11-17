# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2022-05-17

### Changed

- Update dependencies
- Remove husky

## [2.1.0] - 2021-08-17

### Changed

- Update dependencies

## [2.0.0] - 2021-07-05

### Added

- Add support for Dockers deployment

## [1.9.0] - 2021-06-25

### Added

- New sentry integration with the `@sentry/nextjs` sdk
- _npm_ script to configure sentry vars
- Updated to `next.js` `v11`
- Added `eslint-config-next`

### Changed

- Update dependencies
- NProgress implementation based on new `next/router` events

### Remove

- Old sentry integration and it's dependencies

## [1.8.0] - 2021-03-11

### Added

- Added support for webpack 5

### Changed

- Update dependencies
- Rewrite sentry implementation

### Removed

- Volta

## [1.7.0] - 2021-03-11

### Added

- Added `framer-motion`, `avilatek-utils` and `nanoid` as dependencies
- Volta config to `package.json` to pin `node >= 14` and `npm >= 7`

### Changed

- Update dependencies
- Fix a bug on `tailwind.config.js`
- Remove unnecessary extension from `.vscode/extensions.json`
- Move to `npm@^7` to use `package-lock.json v2`
- Update `README.md`

### Removed

- Remove the container implementation (`.devcontainer/**`) since it hasn't been used

## [1.6.0] - 2020-12-12

### Added

- Husky `pre-commit` and `pre-push` hooks for linting our code before pushing to gitlab or github.
- npm-run-all for simpler npm-scripts with husky

### Changed

- update dependencies

---

## [1.5.0] - 2020-11-19

### Changed

- Fix `tailwindcss v2` upgrade
- Remove `@tailwindcss/ui`
- Update npm dependencies

---

## [1.4.0] - 2020-11-19

### Added

- Update `tailwindcss` to `v2`

### Changed

- Update npm dependencies

---

## [1.3.0] - 2020-11-03

### Added

- Add sentry integration
- Update to Next.js v10
- Update npm dependencies
- Primary and Secondary color to `tailwind.config.js`

### Changed

- Change some vscode settings
- Update README

### Removed
