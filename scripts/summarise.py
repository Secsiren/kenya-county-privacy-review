"""Summarise the county website privacy review dataset.

Usage: python scripts/summarise.py data/county_websites_2026-11-02.csv
"""
import csv
import sys
from collections import Counter

path = sys.argv[1] if len(sys.argv) > 1 else "data/county_websites_2026-11-02.csv"
rows = list(csv.DictReader(open(path, encoding="utf-8")))

print(f"Counties reviewed: {len(rows)}")
print(f"Websites reachable: {sum(r['site_reachable'] == 'yes' for r in rows)}")
print("\nPrivacy notice status:")
for status, n in Counter(r["privacy_notice"] for r in rows).most_common():
    print(f"  {status:<24}{n}")

checks = ["linked_from_homepage", "complete_county_specific", "cites_dpa_2019",
          "privacy_or_dpo_contact", "explains_rights", "states_purposes",
          "states_retention", "third_party_sharing", "odpc_complaint_route"]
print("\nCounties meeting each check:")
for c in checks:
    print(f"  {c:<26}{sum(r[c] == '1' for r in rows)}")

reg = Counter(r["odpc_register"].split(":")[0] for r in rows)
print("\nODPC register (county executive bodies or departments):")
for k, n in reg.most_common():
    print(f"  {k:<24}{n}")

print("\nTop website scores:")
for r in sorted(rows, key=lambda r: -int(r["website_score_out_of_10"]))[:5]:
    print(f"  {r['county']:<16}{r['website_score_out_of_10']}/10")
