window.BENCHMARK_DATA = {
  "lastUpdate": 1596599517395,
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
          "id": "2b7fa3e8ca43c6110737a107632396889f7cf680",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/2b7fa3e8ca43c6110737a107632396889f7cf680"
        },
        "date": 1596599515537,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 693,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1227,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2011,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1956,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2247,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2252,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3340,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5082,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2350,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3131,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 120,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3211,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6634,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 341,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 112,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 274,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}