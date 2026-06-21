# k6 Performance Testing Project

Performance testing suite covering load, stress, and spike testing against both REST and GraphQL APIs, built using [k6](https://k6.io).

## What this project tests

| Target | Type | Tests run |
|--------|------|-----------|
| [test.k6.io](https://test.k6.io) | REST | Load, Stress, Spike |
| [Fake Store API](https://fakestoreapi.com) | REST | Load |
| [Countries GraphQL API](https://countries.trevorblades.com) | GraphQL | Load, Light vs Heavy Query Comparison |

**Note on scope:** Stress and spike testing (high VU counts, 200-300+ users) are only run against `test.k6.io`, since it's a site specifically built by Grafana to absorb heavy testing traffic. 
Fake Store API and the Countries GraphQL API are free community-run services, so only moderate load tests are run against them out of respect for their infrastructure.

## Project structure

scripts/
├── rest/
│   ├── load-test-k6io.js
│   ├── load-test-fakestore.js
│   ├── stress-test.js
│   └── spike-test.js
└── graphql/
├── load-test.js
└── light-vs-heavy-comparison.js
results/
├── rest/
└── graphql/


## How to run

Install k6 first: https://k6.io/docs/getting-started/installation/

```bash
k6 run scripts/rest/load-test-k6io.js
k6 run scripts/rest/load-test-fakestore.js
k6 run scripts/rest/stress-test.js
k6 run scripts/rest/spike-test.js
k6 run scripts/graphql/load-test.js
k6 run scripts/graphql/light-vs-heavy-comparison.js
```

## Test types explained

- **Load test** — simulates expected normal traffic to verify the system handles it within acceptable response times
- **Stress test** — gradually increases load beyond normal levels to find the system's breaking point
- **Spike test** — suddenly jumps to a very high load to test how the system handles unexpected traffic surges and whether it recovers

## Findings

See [FINDINGS.md](./FINDINGS.md) for the full analysis and comparison of results across all test runs.
