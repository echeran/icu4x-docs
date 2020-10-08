window.BENCHMARK_DATA = {
  "lastUpdate": 1598407407439,
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
          "id": "440f143f829dbb4d4383163267f5f520e8510324",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/440f143f829dbb4d4383163267f5f520e8510324"
        },
        "date": 1598404133046,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 8,
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
          "id": "440f143f829dbb4d4383163267f5f520e8510324",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/440f143f829dbb4d4383163267f5f520e8510324"
        },
        "date": 1598404205433,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32357,
            "range": "± 1374",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74600,
            "range": "± 4331",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 278,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 136,
            "range": "± 14",
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
          "id": "440f143f829dbb4d4383163267f5f520e8510324",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/440f143f829dbb4d4383163267f5f520e8510324"
        },
        "date": 1598404396902,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 762,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1267,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2176,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2190,
            "range": "± 113",
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
            "value": 2387,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2398,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3590,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5282,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2361,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3192,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3246,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6427,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 6",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 274,
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
          "id": "a92186b6c83046cc1c352bd32dc1d7adc5ff61f1",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/a92186b6c83046cc1c352bd32dc1d7adc5ff61f1"
        },
        "date": 1598404754733,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 11,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 11,
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
          "id": "a92186b6c83046cc1c352bd32dc1d7adc5ff61f1",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/a92186b6c83046cc1c352bd32dc1d7adc5ff61f1"
        },
        "date": 1598404763833,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 24538,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 60553,
            "range": "± 3239",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 206,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 103,
            "range": "± 4",
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
          "id": "a92186b6c83046cc1c352bd32dc1d7adc5ff61f1",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/a92186b6c83046cc1c352bd32dc1d7adc5ff61f1"
        },
        "date": 1598404987770,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 644,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1082,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1909,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2023,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2235,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2171,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3243,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4960,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2182,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3030,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 108,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3207,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6669,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 299,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 115,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 111,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 246,
            "range": "± 12",
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
          "id": "3bc3d70eec91c7e6f40502285eef6d22c950c42c",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/3bc3d70eec91c7e6f40502285eef6d22c950c42c"
        },
        "date": 1598407147251,
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
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 9,
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
          "id": "3bc3d70eec91c7e6f40502285eef6d22c950c42c",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/3bc3d70eec91c7e6f40502285eef6d22c950c42c"
        },
        "date": 1598407198994,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32833,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78495,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 278,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 166,
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
          "id": "3bc3d70eec91c7e6f40502285eef6d22c950c42c",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-08-19T00:33:20Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/3bc3d70eec91c7e6f40502285eef6d22c950c42c"
        },
        "date": 1598407405501,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 745,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1236,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2122,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2128,
            "range": "± 15",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2332,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2372,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3637,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5332,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2365,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3171,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 122,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3204,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6389,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 337,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 130,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 264,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}