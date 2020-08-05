window.BENCHMARK_DATA = {
  "lastUpdate": 1596595087755,
  "repoUrl": "https://github.com/echeran/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "name": "echeran",
            "username": "echeran"
          },
          "committer": {
            "name": "echeran",
            "username": "echeran"
          },
          "id": "e377912caa670ca36f7731eb1f5bc94debd4bb2b",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/e377912caa670ca36f7731eb1f5bc94debd4bb2b"
        },
        "date": 1596595086087,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 557,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 941,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1550,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1548,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 1891,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 1878,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 2588,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 3836,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 1732,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 2365,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 101,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 2385,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 4766,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 257,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 84,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 93,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 203,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}