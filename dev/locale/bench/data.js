window.BENCHMARK_DATA = {
  "lastUpdate": 1596601431397,
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
          "id": "208ed2c4ebae12fd1c1cf4b60db0ab245afc5b5b",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/208ed2c4ebae12fd1c1cf4b60db0ab245afc5b5b"
        },
        "date": 1596601429352,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 675,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1126,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1978,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2525,
            "range": "± 105",
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
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2230,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2200,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3401,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5268,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2287,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3202,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 114,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3600,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6961,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 335,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 119,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 122,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 248,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}