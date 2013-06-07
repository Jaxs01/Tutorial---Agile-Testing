angular.module('test', []).
  directive('quiz', function(){
    return {
      restrict: 'C',
      link: function(){
        console.log('asdfdsf');
      }
    }
  });