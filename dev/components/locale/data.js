window.BENCHMARK_DATA = {
  "lastUpdate": 1602193796726,
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
          "id": "362cae959b115ccf9ff493ade0c41bd929a58538",
          "message": "Test PR on personal fork - API docs/CI dashboard",
          "timestamp": "2020-10-06T19:21:31Z",
          "url": "https://github.com/echeran/icu4x/pull/10/commits/362cae959b115ccf9ff493ade0c41bd929a58538"
        },
        "date": 1602193792652,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30671,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 75295,
            "range": "± 2946",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 269,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 130,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 87,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}