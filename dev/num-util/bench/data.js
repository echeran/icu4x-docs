window.BENCHMARK_DATA = {
  "lastUpdate": 1596733471695,
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
          "id": "54ebaa330438072724a3eb88d83682dad040a8b2",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/54ebaa330438072724a3eb88d83682dad040a8b2"
        },
        "date": 1596693821814,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 35801,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 85463,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 306,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 148,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "54ebaa330438072724a3eb88d83682dad040a8b2",
          "message": "Testing PR to test GH Actions CI for runtime perf benchmarking",
          "timestamp": "2020-07-27T21:18:27Z",
          "url": "https://github.com/echeran/icu4x/pull/4/commits/54ebaa330438072724a3eb88d83682dad040a8b2"
        },
        "date": 1596733469597,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 36436,
            "range": "± 2233",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 80476,
            "range": "± 11759",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 281,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 136,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}