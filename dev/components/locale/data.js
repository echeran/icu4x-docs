window.BENCHMARK_DATA = {
  "lastUpdate": 1602192045662,
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
        "date": 1602192043039,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33396,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 79024,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 299,
            "range": "± 0",
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
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}