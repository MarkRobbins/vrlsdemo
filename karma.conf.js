// Karma configuration
// Generated on Thu Jan 14 2016 01:38:40 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','requirejs'],
    //frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      {pattern: 'app/**/*.js', included: false},
      {pattern: 'tests/**/*-spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      'app/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js':['webpack'],
      'app/*.js':['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'output/testing/karma/coverage/'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','growler','DHTML','coverage'],

    dhtmlReporter: {
      'outputFile' : '/output/testing/karma/DHTML/report.html',
      'exclusiveSections': false,
      'openReportInBrowser': false
    },

    webpack:{
      module:{
        loaders:[
          {test: /\.jsx?$/,exclude:/node_modules/, loader:'babel-loader'}
        ]
      },
      watch: true
    },
    webpackServer:{
      noInfo:true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
