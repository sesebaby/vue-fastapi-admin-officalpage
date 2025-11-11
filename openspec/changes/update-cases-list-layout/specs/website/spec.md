## ADDED Requirements
### Requirement: Cases list shows inline metadata without monetary tags
The Success Cases (/cases) view MUST render each case entry as a single inline row containing the date, title, project name, and project number, and it MUST NOT display any contract amount badges.

#### Scenario: Inline row without amount
- **GIVEN** a visitor opens /cases
- **WHEN** case entries load
- **THEN** the date tag, title, project name, and project number appear within one horizontal row (wrapping on smaller screens)
- **AND** no amount badge or currency value is rendered

### Requirement: Success Cases include the Oct 18 2025 magnetic stirring system project
The localized cases dataset MUST list the 2025-10-18 "一次性磁力搅拌系统" project with project number 251028_RK3576, ensuring both zh-CN and en-US locales have matching translations.

#### Scenario: New case entry present
- **GIVEN** translations are loaded in either Chinese or English
- **WHEN** the cases collection is displayed
- **THEN** an entry dated 2025-10-18 appears with the provided project name and number
