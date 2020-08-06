window.BENCHMARK_DATA = {
  "lastUpdate": 1596690678540,
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
          "id": "844fe20a37943ebbe61a981a366880d8bd8e44da",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/844fe20a37943ebbe61a981a366880d8bd8e44da"
        },
        "date": 1596690676617,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 687,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1211,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2108,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2098,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2274,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2231,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3300,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5134,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2236,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3004,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3233,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6427,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 120,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 271,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}