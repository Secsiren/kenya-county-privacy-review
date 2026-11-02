# Review checklist and legal basis

Each county website was scored out of 10. One point per check.

| # | Check | What counts as "yes" | Legal or regulatory basis |
|---|---|---|---|
| 1 | Site reachable | The official county site loads over HTTPS on 2 Nov 2026 | Access to public services; Data Protection Act 2019, s.41 (data protection by design) |
| 2 | Linked from homepage | A working link to a privacy notice from the homepage | s.29 duty to notify "before collecting" personal data |
| 3 | Complete and county specific | Real county text, no unfilled placeholders, no default CMS template | s.29 |
| 4 | Cites the Data Protection Act 2019 | Notice names the Act | s.25 principles, s.29 |
| 5 | Privacy or DPO contact | A named office, DPO or dedicated privacy email for data requests | s.24 (DPO for public bodies), s.29(e) contacts |
| 6 | Explains rights | Access, correction, deletion or objection rights explained | s.26 rights of a data subject, s.29(a) |
| 7 | States purposes | Why personal data is collected | s.25(c), s.29(c) |
| 8 | States retention | How long data is kept | s.39 limitation to retention |
| 9 | Third party sharing | Who receives the data and safeguards | s.29(d) |
| 10 | ODPC complaint route | Tells people they can complain to the Data Protection Commissioner | s.56 complaints to the Data Commissioner |

Registration with the Office of the Data Protection Commissioner (ODPC) is reported separately and is not part of the score.

* Data Protection Act 2019, s.18: no person shall act as a data controller or processor unless registered.
* Data Protection (Registration of Data Controllers and Data Processors) Regulations 2021, reg. 6(1): a county department shall register on behalf of its entities. Second Schedule: public entities offering government functions register regardless of size or turnover.

## How the checks were run

1. The list of 47 counties and their official websites was taken from the Council of Governors page "The 47 Counties" (cog.go.ke). Broken or wrong directory links were replaced with the county's current .go.ke domain and recorded in the notes.
2. Each homepage was opened in a real browser (Chrome) and a script (`scripts/browser_probe.js`) listed every link containing "privacy", "data protection" or "cookie policy". Where no link existed, common paths such as `/privacy-policy/` were tried.
3. Any privacy page found was downloaded and searched for the items in the table above.
4. Every published notice was then read manually to confirm the automated result. This caught one notice (Siaya) that matched most keywords but still contained template placeholders such as "[Insert Name/Office]".
5. Three sites that would not load in the browser (Kiambu, Kakamega, Kitui) were checked by text fetch only. They are marked "medium" confidence.
6. The ODPC public register of data handlers (19,079 entries on 2 Nov 2026) was searched for county governments, county departments, public service boards and municipalities.

## Limitations

* Only the main county website was reviewed. E-service portals (revenue, health, licensing) may carry their own notices.
* Name matching on the ODPC register is imperfect. A county may be registered under a name this search did not catch, so "no match found" means not found, not proven unregistered.
* Websites change. All results are a snapshot taken on 2 November 2026.
