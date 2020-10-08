window.BENCHMARK_DATA = {
  "lastUpdate": 1602195831460,
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
          "id": "f4e7bcc01645d20c951c6021f1b49ce4d367c5a4",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/f4e7bcc01645d20c951c6021f1b49ce4d367c5a4"
        },
        "date": 1602195827387,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33403,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78767,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 294,
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
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}