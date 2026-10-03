---
name: GitHub authorization boundaries
description: Distinguishes Replit native Git authentication from the GitHub API connector and how to assess organization access.
---

Replit's Git-pane provider authorization and the GitHub App API connector are separate. A working API connection does not refresh native Git credentials, and native Git authentication cannot be inferred from the API connector state. When verifying organization access, inspect both the authenticated organization list and token scopes; an empty organization list does not mean the token lacks organization-capable scopes.

**Why:** A connected GitHub API token can have `read:org` and `repo` scopes while returning no currently accessible organizations.

**How to apply:** Identify which connection a requested operation uses, report scope and resource visibility separately, and don't claim no potential organization access based only on an empty listing.