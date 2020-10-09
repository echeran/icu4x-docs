window.BENCHMARK_DATA = {
  "lastUpdate": 1602207204355,
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
          "id": "b0ed8f7b1c4461b1d6a2ec43897ba061da6c916c",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/b0ed8f7b1c4461b1d6a2ec43897ba061da6c916c"
        },
        "date": 1602207200311,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33010,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78621,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 296,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 90,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}