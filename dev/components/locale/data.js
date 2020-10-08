window.BENCHMARK_DATA = {
  "lastUpdate": 1602188642713,
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
          "id": "d0c0ff75ba818e0380cb356ccfdf445bb369d793",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/d0c0ff75ba818e0380cb356ccfdf445bb369d793"
        },
        "date": 1602188640307,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29156,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 67689,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 263,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 126,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}