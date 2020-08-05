window.BENCHMARK_DATA = {
  "lastUpdate": 1596596813594,
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
          "id": "10b652277f6373eae761a15345d55cf0c487fb76",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/10b652277f6373eae761a15345d55cf0c487fb76"
        },
        "date": 1596596811366,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 782,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1254,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2020,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2013,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2287,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2294,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3823,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5186,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2370,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3206,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 118,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3233,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6611,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 341,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 112,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 128,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 274,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}