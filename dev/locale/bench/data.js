window.BENCHMARK_DATA = {
  "lastUpdate": 1596692061990,
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
          "id": "e45add6413c8ed99140993e127708ffba6f82323",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/e45add6413c8ed99140993e127708ffba6f82323"
        },
        "date": 1596692060149,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 668,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1341,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2125,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2161,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2252,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2173,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3260,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5179,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2368,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3355,
            "range": "± 172",
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
            "value": 3480,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6516,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 310,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 120,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 112,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 249,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}