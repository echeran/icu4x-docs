window.BENCHMARK_DATA = {
  "lastUpdate": 1598402317187,
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
          "id": "0155b011d5868948ab8edbab9ebee1ea2bd7ad0e",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/0155b011d5868948ab8edbab9ebee1ea2bd7ad0e"
        },
        "date": 1598396135973,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 25080,
            "range": "± 1238",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 59738,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 223,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 128,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0155b011d5868948ab8edbab9ebee1ea2bd7ad0e",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/0155b011d5868948ab8edbab9ebee1ea2bd7ad0e"
        },
        "date": 1598396143892,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0155b011d5868948ab8edbab9ebee1ea2bd7ad0e",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/0155b011d5868948ab8edbab9ebee1ea2bd7ad0e"
        },
        "date": 1598396386324,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 766,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1264,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2163,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2170,
            "range": "± 94",
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
            "value": 2375,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2376,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3615,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5259,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2355,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3196,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3230,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6442,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 344,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 113,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 131,
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
      },
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
          "id": "2eefd859ce472bfe2840be749dd785cf71306e7f",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/2eefd859ce472bfe2840be749dd785cf71306e7f"
        },
        "date": 1598402112501,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2eefd859ce472bfe2840be749dd785cf71306e7f",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/2eefd859ce472bfe2840be749dd785cf71306e7f"
        },
        "date": 1598402163153,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32516,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 76533,
            "range": "± 5607",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 280,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 137,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2eefd859ce472bfe2840be749dd785cf71306e7f",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/2eefd859ce472bfe2840be749dd785cf71306e7f"
        },
        "date": 1598402314901,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 603,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1002,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1628,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1658,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 14,
            "range": "± 1",
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
            "value": 1863,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 1805,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 2795,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4396,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2152,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 2471,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 99,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 2589,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 5201,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 341,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 113,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 125,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 269,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}