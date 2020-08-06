window.BENCHMARK_DATA = {
  "lastUpdate": 1596690996221,
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
          "id": "844fe20a37943ebbe61a981a366880d8bd8e44da",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/844fe20a37943ebbe61a981a366880d8bd8e44da"
        },
        "date": 1596690994314,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33846,
            "range": "± 3510",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 88700,
            "range": "± 4112",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 294,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 157,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}