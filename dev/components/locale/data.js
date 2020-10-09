window.BENCHMARK_DATA = {
  "lastUpdate": 1602202818154,
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
          "id": "fc41c0ba1a93745506d0d8fc03088788728d421a",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/fc41c0ba1a93745506d0d8fc03088788728d421a"
        },
        "date": 1602202816238,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33176,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78646,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 297,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 90,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}