window.BENCHMARK_DATA = {
  "lastUpdate": 1602406261385,
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
          "id": "bc797a4f5f90557d0513fabbfe955bc79232a7c2",
          "message": "Test PR #2 on personal fork for API docs / CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/12/commits/bc797a4f5f90557d0513fabbfe955bc79232a7c2"
        },
        "date": 1602223276006,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32055,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 75672,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 292,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 134,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 89,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b8128322d70aeedd765d24ea96de1c62b3e2b8e",
          "message": "Merge pull request #12 from echeran/api-docs-ci-dash-test-v2\n\nTest PR #2 on personal fork for API docs / CI dashboard",
          "timestamp": "2020-10-09T00:00:41-07:00",
          "tree_id": "1b1b78e573f054b8f35a4290fe9055f9d1e1ce4c",
          "url": "https://github.com/echeran/icu4x/commit/7b8128322d70aeedd765d24ea96de1c62b3e2b8e"
        },
        "date": 1602227373225,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 34566,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 83858,
            "range": "± 4790",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 298,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 137,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 94,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f9af945d26a668ff3898b44db74a35fa44a1280",
          "message": "Use testdata everywhere (#311)\n\n* Use testdata everywhere\r\n\r\n* Use icu_testdata\r\n\r\n* Apply feedback\r\n\r\n* Fix missing semicolon\r\n\r\n* Fix fs-data-provider test",
          "timestamp": "2020-10-09T13:10:47-07:00",
          "tree_id": "c2a3953a0a719bee0d4c840804618a9febff96f2",
          "url": "https://github.com/echeran/icu4x/commit/5f9af945d26a668ff3898b44db74a35fa44a1280"
        },
        "date": 1602283121097,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33455,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 79565,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 289,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 91,
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
          "id": "6d808e68b5e55ad0edbf18842a4150347af36755",
          "message": "Testing PR - personal fork - test fix to CI benchmark command & dashboard",
          "timestamp": "2020-10-09T22:23:52Z",
          "url": "https://github.com/echeran/icu4x/pull/13/commits/6d808e68b5e55ad0edbf18842a4150347af36755"
        },
        "date": 1602404444244,
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
          "id": "ae2e370e304aa97717688e258d4005f260057630",
          "message": "Testing PR - personal fork - test fix to CI benchmark command & dashboard",
          "timestamp": "2020-10-09T22:23:52Z",
          "url": "https://github.com/echeran/icu4x/pull/13/commits/ae2e370e304aa97717688e258d4005f260057630"
        },
        "date": 1602405273191,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 11,
            "range": "± 3",
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
          "id": "0dc0299e4766367ac3cc86ecc46689793a233bd3",
          "message": "Testing PR - personal fork - test fix to CI benchmark command & dashboard",
          "timestamp": "2020-10-09T22:23:52Z",
          "url": "https://github.com/echeran/icu4x/pull/13/commits/0dc0299e4766367ac3cc86ecc46689793a233bd3"
        },
        "date": 1602406258978,
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
            "value": 12,
            "range": "± 1",
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}