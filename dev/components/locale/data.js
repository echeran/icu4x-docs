window.BENCHMARK_DATA = {
  "lastUpdate": 1602196368007,
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
          "id": "7e9af8b8e59dfa99a8d8ff21317f1557fcb7f3f4",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/7e9af8b8e59dfa99a8d8ff21317f1557fcb7f3f4"
        },
        "date": 1602196365581,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 34785,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 80843,
            "range": "± 5124",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 293,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 140,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 88,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}