## Summary
Update the /cases list so each item shows date + project metadata on a single row without contract amount tags, and add the newly supplied 2025-10-18 case entry.

## Motivation
The marketing team needs the Success Cases page to focus on qualitative project info instead of monetary values, and the SIPUMTECH sales log now includes a new magnetic stirring system project that must be published.

## Scope
- Remove the amount tag/column from each case entry and restyle the card into a unified row layout that remains responsive across breakpoints.
- Display project name and project number inline beside the date/title content per design guidance.
- Append the 2025-10-18 "一次性磁力搅拌系统" case with project number 251028_RK3576 to both zh/en locales and data sources.
- Keep loading/error states, routing, and async wrappers unchanged.

## Non-Goals
- No API integration; the page will continue to use the local static dataset for now.
- No changes to other website sections or admin console assets.
