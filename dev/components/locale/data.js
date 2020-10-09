window.BENCHMARK_DATA = {
  "lastUpdate": 1602204007605,
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
          "id": "71ae8af2ab10d6819b02e6d73e3043e776b860f3",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/71ae8af2ab10d6819b02e6d73e3043e776b860f3"
        },
        "date": 1602204005344,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32035,
            "range": "± 2595",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74739,
            "range": "± 4649",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 257,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 134,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 83,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}