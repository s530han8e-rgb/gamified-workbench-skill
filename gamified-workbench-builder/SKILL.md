---
name: gamified-workbench-builder
description: Design, build, or refactor a game-like personal workbench that combines projects, daily records, reports, interactive rooms, autosave, and installable web access. Use when the interface should feel like a living game world rather than a conventional dashboard; do not use for ordinary admin dashboards or isolated mini-games.
---

# Gamified Workbench Builder

Build one coherent workbench whose visual world, data model, and real workflows reinforce each other.

## Start from the operating model

Before styling, establish:

- the recurring daily workflow;
- persistent project areas;
- dated reports and source material;
- actions that require external tools;
- what must work locally, offline, or across devices.

Do not invent a second task system when an existing report, automation, or project record can be referenced or imported. Keep one canonical record and expose it through multiple views.

Read [references/architecture.md](references/architecture.md) when choosing the application shape. Read [references/data-contract.md](references/data-contract.md) before adding persistence, report import, or cloud sync.

## Make the world functional

Treat the illustrated scene as the primary navigation surface. Map meaningful objects to actions: a desk can open project progress, a noticeboard can show reports, a lamp can reveal a daily ritual, and a device can open an approved external handoff.

Avoid adding a second dashboard below the scene that repeats the same functions. Use an in-world object, room, drawer, book, calendar, or modal when content needs more space. Provide an optional guide that lists every interactive object and its effect.

Animation should communicate state or make the world feel alive. Prefer a few calm loops—water, light, weather, breathing, walking—over simultaneous high-saturation motion. Respect reduced-motion settings and preserve keyboard/touch access.

## Separate three kinds of state

1. **Daily records:** dated priorities, notes, sources, attachments, reports, and review.
2. **Project records:** persistent tasks, resources, progress, decisions, and status.
3. **Experience state:** theme, motion preference, unlocked cosmetics, and harmless game progress.

Never hide authoritative project data inside cosmetic game state. Completing a real task may award a reversible or append-only reward, but rewards must not become the only record that work happened.

## Preserve data by default

Use revision checks, atomic writes, backups, and a local recovery draft. An autosave indicator must distinguish pending, saving, saved, and conflict states. On conflict, preserve both versions and ask for explicit reconciliation; do not silently overwrite.

For report ingestion, require a source date, title, complete body, provenance, and verification status. Reject truncated material, hash bodies for deduplication, and keep incoming revisions separate when the displayed copy was user-edited.

Read [references/safety-and-handoffs.md](references/safety-and-handoffs.md) for privacy boundaries, external AI handoffs, and deployment rules.

## Support progressive delivery

Deliver in working layers:

1. content model and data contract;
2. functional scene navigation;
3. editing and autosave;
4. report history and source validation;
5. meaningful interactions and rewards;
6. PWA installation and responsive behavior;
7. authenticated cloud persistence when cross-device access is required.

Localhost plus a service worker is installable on the same computer but is not cloud sync. A phone that must work while the computer is off needs a hosted HTTPS application, authenticated user identity, server-side storage, and conflict handling.

## Verify the real behavior

Test the running interface, not only source syntax. At minimum verify:

- every visible hotspot opens the intended target;
- touch and keyboard paths work;
- autosave and recovery survive reloads;
- duplicate report import does not duplicate data;
- edited records are not overwritten by imports;
- day/night and reduced-motion modes remain readable;
- mobile layouts preserve access to core actions;
- hosted writes are authorized per user.

Read [references/review-checklist.md](references/review-checklist.md) before declaring the workbench complete.
