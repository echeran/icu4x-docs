window.BENCHMARK_DATA = {
  "lastUpdate": 1602283046241,
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
        "date": 1602223300946,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31537,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74987,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 278,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 141,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 81,
            "range": "± 4",
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
        "date": 1602227363278,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31839,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74019,
            "range": "± 5424",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 282,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 138,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 91,
            "range": "± 6",
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
        "date": 1602283043964,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 28123,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 66006,
            "range": "± 5150",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 250,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 120,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 76,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}