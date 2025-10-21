<!--
Sync Impact Report:
Version change: 1.1.0 -> 1.2.0
List of modified principles: None
Added sections: None
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: TODO(RATIFICATION_DATE)
-->
# Project Constitution

## 1. Core Principles

- **Simplicity**: Prefer simple, straightforward solutions.
- **Developer Experience**: Prioritize a smooth and efficient development workflow.
- **Modularity**: Build decoupled components.
- **No Package Downgrades**: The project MUST never downgrade packages. Instead, breaking changes in newer versions MUST be addressed by implementing fixes or adapting to new standards.

## 2. Technology Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: Vite, React, TypeScript
- **Package Manager**: pnpm
- **Testing**: Vitest

## 3. Code Quality

- All code must be linted.
- All new features must have corresponding tests.

## 4. Architectural Principles

- **Vertical Slice Architecture**: All features must be implemented using vertical slice architecture to allow for fast-paced delivery and minimum overhead.

## 5. Governance

- **Constitution Version**: 1.2.0
- **Ratification Date**: TODO(RATIFICATION_DATE)
- **Last Amended Date**: 2025-10-20
- **Amendment Procedure**: Amendments to this constitution require consensus from the core development team.
- **Versioning Policy**: This constitution follows Semantic Versioning (Major.Minor.Patch).
  - MAJOR: Backward incompatible governance/principle removals or redefinitions.
  - MINOR: New principle/section added or materially expanded guidance.
  - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
