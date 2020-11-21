require('browserify')({
  standalone: 'WebTorrent',
  builtins: {
    ...require('browserify/lib/builtins'),
    _process: require.resolve('process-fast')
  }
}).add('.').bundle().pipe(process.stdout)
