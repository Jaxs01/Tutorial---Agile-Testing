basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'js/**/*.js',
  'test/unit/**/*.js'
];

preprocessors = {
  'js/**/*.js': 'coverage'
};

reporters = ['coverage'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}

autoWatch = true;

browsers = ['Chrome'];