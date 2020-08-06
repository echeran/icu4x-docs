window.BENCHMARK_DATA = {
  "lastUpdate": 1596693500897,
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
          "id": "54ebaa330438072724a3eb88d83682dad040a8b2",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/54ebaa330438072724a3eb88d83682dad040a8b2"
        },
        "date": 1596693498970,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 735,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1261,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2216,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2212,
            "range": "± 71",
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
            "value": 2383,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2363,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3597,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5287,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2297,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3081,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 124,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3276,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6428,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 346,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 123,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 273,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}