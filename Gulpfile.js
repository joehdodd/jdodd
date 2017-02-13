var gulp = require('gulp');
var responsive = require('gulp-responsive-images');

gulp.task('default', function() {
    return gulp.src('img_src/**/*')
        .pipe(responsive({
            '**/*.*': [{
            width: 1600,
            suffix: '_large',
            quality: 80
          },{
            width: 760,
            suffix: '_med',
            quality: 75
          },{
            width: 480,
            suffix: '_small',
            quality: 75
          }]

        }))
        .pipe(gulp.dest('img'));
});

/*STEPS, MOFO!--------------------------------------
----------------------------------------------------------
0.5. You need to have Node.js AND npm installed GLOBALLY (urs/local/lib/bin)
   You've already got HomeBrew and GraphicsMagick
   Make sure all of those are installed on THIS machine.
   See YouTube below.

1. You have to install npm in your project parent directory using
   (Node is already installed GLOBALLY, but the "node_modules"
   directory needs to be in project directory)

    npm init

2. That step creates the "package.json" file. Now you need to
   install Grunt in the directory.

    npm install --save-dev gulp

3. Create "Gulpfile.js". Run...

    touch Gulpfile.js

4. Copy this code into that file. Then run...

    npm install --save-dev gulp-responsive-images


    4b. GraphicsMagick is already installed via HomeBrew--it does the heavy lifting.

5. Make sure your code in the script above is the way you want it.

    1. width, suffix, quality? (SEE BELOW!)
    2. set gulp.source to your SOURCE folder (the images you want to compress)
    3. set gulp.dest to your DEST folder (folder where rezied copies will live)

6. Run command in Terminal...

    gulp

7. If you did everything correctly, it should run the script and batch
   the images.

/*OPTIONS--------------------
-----------------------------

      crop: false,
      format: null,
      gravity: 'Center',
      height: 100,
      overwrite: true,
      quality: 100,
      rename: null,
      percentage: false,
      sharpen: false,
      suffix: '-100'
      upscale: false,
      width: 100


THIS: https://www.npmjs.com/package/gulp-responsive-images
THIS: https://github.com/mahnunchik/gulp-responsive
THIS: https://github.com/mahnunchik/gulp-responsive/blob/master/examples/gulp-responsive-config.md
THIS: http://stackoverflow.com/questions/33488404/batch-resizing-in-gulp
THIS: https://github.com/dcgauld/gulp-responsive-images
THIS: https://youtu.be/Zj5GV32JpcU
*/