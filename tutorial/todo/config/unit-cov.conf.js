basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/angular/angular.js',
  'lib/angular-mocks/angular-mocks.js',
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