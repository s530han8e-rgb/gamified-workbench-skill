# Architecture choices

## Choose the smallest shape that satisfies access needs

| Need | Suitable shape | Important limit |
|---|---|---|
| One computer, private use | Local web server plus JSON or SQLite | Unavailable when that computer is off |
| Installable, same-device offline reading | PWA with cached application shell | Cache is not cross-device storage |
| Phone and computer share data | Hosted HTTPS app plus authenticated database | Requires identity, migrations, backups, and conflict policy |
| Large private attachments | Object storage plus metadata database | Do not place secrets or private files in the client bundle |

Keep the browser client unaware of filesystem paths and server secrets. Put validation and authorization on the server even when the client also validates.

## Interface composition

- Primary scene: spatial overview and main navigation.
- Rooms: one durable area per project or responsibility.
- In-world objects: reports, calendar, sources, assistant handoff, settings, and play.
- Reading surface: modal, drawer, book, or room overlay for dense content.
- Guide: discoverability layer for hotspots; it must reflect actual registered interactions.

Use stable semantic action identifiers beneath the visual hotspots. Visual coordinates may change without changing the action or stored data.

## Time-aware presentation

Derive day phases from an explicit timezone. Change lighting, sky, ambient animation, and optional greetings without changing the underlying data. Always provide a manual theme override.

## PWA boundary

A PWA needs a manifest, icons, HTTPS or localhost, a service worker, and a responsive layout. Cache versioned static assets. Keep API requests network-first and do not cache private write responses as application-shell assets.
