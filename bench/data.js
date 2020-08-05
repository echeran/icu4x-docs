window.BENCHMARK_DATA = {
  "lastUpdate": 1596597878456,
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
          "id": "83373a8bc06d15c1b7bf2d481f4168f48e6f5286",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/83373a8bc06d15c1b7bf2d481f4168f48e6f5286"
        },
        "date": 1596597876622,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 702,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1192,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2066,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2072,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2292,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2274,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3979,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5105,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2374,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3325,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 119,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3541,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6744,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 328,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 129,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 257,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}