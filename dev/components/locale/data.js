window.BENCHMARK_DATA = {
  "lastUpdate": 1602184722899,
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
          "id": "ea3f590b7f470dfe897e352a1fe87d5587d0d762",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/ea3f590b7f470dfe897e352a1fe87d5587d0d762"
        },
        "date": 1602184720915,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32286,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 76638,
            "range": "± 2787",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 278,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 136,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 88,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}