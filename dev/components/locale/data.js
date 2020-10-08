window.BENCHMARK_DATA = {
  "lastUpdate": 1602195096953,
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
          "id": "770677ce0972631332744d423513593604b86a11",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/770677ce0972631332744d423513593604b86a11"
        },
        "date": 1602195095242,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 28094,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 66572,
            "range": "± 2167",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 249,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 119,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 75,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}