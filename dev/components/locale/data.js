window.BENCHMARK_DATA = {
  "lastUpdate": 1602189999593,
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
          "id": "ceeef6434b2e531607d4e8217b7633d3a98cd191",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/ceeef6434b2e531607d4e8217b7633d3a98cd191"
        },
        "date": 1602189997797,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 27243,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 72238,
            "range": "± 4476",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 272,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 123,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 74,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}