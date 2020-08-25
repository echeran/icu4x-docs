window.BENCHMARK_DATA = {
  "lastUpdate": 1598396146359,
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
      }
    ]
  }
}