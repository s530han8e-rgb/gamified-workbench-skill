# Data contract

Use a versioned schema. The field names below are illustrative; preserve an existing compatible schema instead of forcing a rewrite.

## Daily record

```json
{
  "schema_version": 1,
  "date": "YYYY-MM-DD",
  "timezone": "Area/City",
  "priorities": [],
  "workflow": [],
  "notes": {},
  "sources": [],
  "attachments": [],
  "reports": {},
  "review": {},
  "revision": 0,
  "updated_at": "ISO-8601"
}
```

## Persistent project record

Each project area should hold a stable ID, label, status, focus, tasks, resources, progress entries, and decisions. Daily notes may reference a project ID but should not duplicate the whole project.

## Report record

Store at least:

- `title`
- `body`
- `source_date`
- `origin`
- `verification`
- `status`
- `content_hash`
- `imported_at`

Identical hashes are no-ops. If the current report has a user-edited status, retain it and place the imported revision in a review queue.

## Write invariants

- Validate dates and payload size server-side.
- Compare the submitted revision with the stored revision.
- Write through a lock or transaction.
- Create a recoverable backup before replacement.
- Write to a temporary file and atomically rename, or use a database transaction.
- Return the new revision to the client.
- Never treat local browser cache as the authoritative cross-device record.
