window.BENCHMARK_DATA = {
  "lastUpdate": 1596692352906,
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
          "id": "e45add6413c8ed99140993e127708ffba6f82323",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/e45add6413c8ed99140993e127708ffba6f82323"
        },
        "date": 1596692351196,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 25790,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 62052,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 222,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 107,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}