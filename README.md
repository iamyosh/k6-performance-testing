# k6-performance-testing

# k6 Performance Testing Project

Performance testing suite covering load, stress, and spike testing against both REST and GraphQL APIs, built using [k6](https://k6.io).

## What this project tests

| Target | Type | Tests run |
|--------|------|-----------|
| [test.k6.io](https://test.k6.io) | REST | Load, Stress, Spike |
| [Fake Store API](https://fakestoreapi.com) | REST | Load |
| [Countries GraphQL API](https://countries.trevorblades.com) | GraphQL | Load, Light vs Heavy Query Comparison |

**Note on scope:** Stress and spike testing (high VU counts, 200-300+ users) are only run against `test.k6.io`, since it's a site specifically built by Grafana to absorb heavy testing traffic. Fake Store API and the Countries GraphQL API are free community-run services, so only moderate load tests are run against them out of respect for their infrastructure.

## Project structure