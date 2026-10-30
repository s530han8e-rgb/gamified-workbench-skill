# Safety, privacy, and external handoffs

## Privacy boundary

Keep personal notes, research material, project names, chat identifiers, local paths, credentials, and source documents out of reusable templates and public repositories. Use neutral examples and placeholders. Run a targeted secret and identity scan before publication.

Private data belongs in ignored local storage or authenticated server-side storage. Do not deploy a populated data directory as static assets.

## AI handoff

A browser page cannot assume it may send records to an AI service. Use an approval surface that shows the exact payload. Support one or more explicit actions:

- copy the prepared context;
- open the selected AI product;
- record the returned answer after the user pastes or approves it;
- save the accepted result as a project progress entry or decision.

Do not claim a direct integration when the implementation only opens a link or copies text.

## External application links

Prefer supported deep links only when they are stable and user-authorized. Otherwise open an official web destination and describe the limitation. Never embed credentials in a URL.

## Deployment

For a personal cloud workbench, default to owner-private access. Authorize every read and write using the authenticated user ID. Keep runtime secrets server-side. Migrate seed data separately from schema migrations, and verify the deployed audience before uploading private records.
