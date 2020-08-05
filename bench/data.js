window.BENCHMARK_DATA = {
  "lastUpdate": 1596598631088,
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
          "id": "8894ed2f009151cd3125b8102e3d681d27d77392",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/8894ed2f009151cd3125b8102e3d681d27d77392"
        },
        "date": 1596598626756,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 748,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1282,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2104,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2103,
            "range": "± 53",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2364,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2353,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3473,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5677,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2340,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3167,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 135,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3233,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6401,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 111,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 125,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 272,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}