window.BENCHMARK_DATA = {
  "lastUpdate": 1596692665263,
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
        "date": 1596692661033,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
            "range": "± 1",
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}