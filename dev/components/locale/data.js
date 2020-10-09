window.BENCHMARK_DATA = {
  "lastUpdate": 1602205009785,
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
          "id": "c30c2721f5f196c39ee118419fa76b831a2a4d6a",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/c30c2721f5f196c39ee118419fa76b831a2a4d6a"
        },
        "date": 1602205007394,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30009,
            "range": "± 2048",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 70153,
            "range": "± 4171",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 273,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 126,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 80,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}