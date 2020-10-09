window.BENCHMARK_DATA = {
  "lastUpdate": 1602209868908,
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
          "id": "403b88a442006abb204600fcf68983a711768fda",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/403b88a442006abb204600fcf68983a711768fda"
        },
        "date": 1602209866936,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31255,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 73022,
            "range": "± 3325",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 285,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 132,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}