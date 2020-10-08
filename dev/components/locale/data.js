window.BENCHMARK_DATA = {
  "lastUpdate": 1602196200621,
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
          "id": "aafbc4e60d4762b88ae8c9285fa5a2ff90d5bd24",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/aafbc4e60d4762b88ae8c9285fa5a2ff90d5bd24"
        },
        "date": 1602196198106,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32770,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 77975,
            "range": "± 2446",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 315,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 141,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 90,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}