/**
 * Created by Administrator on 1/13/2016.
 */

var gulp = require('gulp');
var exec = require('child_process').exec;
var change = require('gulp-change');
//https://www.npmjs.com/package/gulp-change
function performChange(content) {
  var s='<style>';
  s+="\n"+'body{background-color:#000!important;}';
  s+="\n"+'.fraction{background-color:#111;color:#888;}';
  s+="\n"+'.high, .cline-yes{background:rgba(230,245,208,0.1);}';
  s+="\n"+'cline-yes{background:rgba(0,145,0,0.2);}';
  s+="\n"+'.medium{background:rgba(0,0,100,0.5);}';
  s+="\n"+'.coverage-summary td{color:#aaa;;}';
  s+="\n"+'.coverage-summary{border-color:#444;}';
  s+="\n"+'.coverage-summary tbody{border:1px solid #444;}';
  s+="\n"+'.coverage-summary tr{border-bottom:1px solid #444;}';
  s+="\n"+'.coverage-summary td{border-right:1px solid #444;}';
  s+="\n"+'span.cline-neutral{background:#111;}';
  s+="\n"+'table.coverage td span.cline-any{color:#666;}';
  s+="\n"+'.kwd{color:#00369E;}';
  s+="\n"+'.pln{color:#888;}';
  s+="\n"+'.cstat-no, .fstat-no, .cbranch-no, .cbranch-no{background:#270000;}';
  s+="\n"+'.low, .cline-no{background:#270000;}';
  s+="\n"+'</style>';

  return content.replace(/<\/head>/g, s+"\n"+'</head>');
}

gulp.task('coverage',function(cb){
  console.log('xxx');
  //findw -name "*.html" -type f
  //ping localhost
  return gulp.src('output/testing/karma/coverage/**/*.html',{ base: "./" })
    .pipe(change(performChange))
    .pipe(gulp.dest('.'));
  // exec('"C:\\Program Files (x86)\\GnuWin32\\bin\\findw.exe" -name "*.html" -type f', function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });
});
gulp.task('watch',function(){
  gulp.watch("output/testing/karma/coverage/**/*",['coverage']);
});

//248 361 9500
//al zara
