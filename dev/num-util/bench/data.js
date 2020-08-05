window.BENCHMARK_DATA = {
  "lastUpdate": 1596605915307,
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
          "id": "01e705cc5bce4572ec8be8973afdd73b8412a0dd",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/01e705cc5bce4572ec8be8973afdd73b8412a0dd"
        },
        "date": 1596605913361,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32619,
            "range": "± 2492",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78417,
            "range": "± 4009",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 289,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 144,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}