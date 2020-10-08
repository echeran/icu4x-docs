window.BENCHMARK_DATA = {
  "lastUpdate": 1602193110257,
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
          "id": "6441a7b298b28578602136d657e4fe12b327b10f",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/6441a7b298b28578602136d657e4fe12b327b10f"
        },
        "date": 1602193107866,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29856,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 86253,
            "range": "± 6458",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 286,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 142,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 86,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}