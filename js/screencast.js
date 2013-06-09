angular.module('ng').
  directive('screencast', function () {
    return {
      restrict: 'E',
      scope: { vimeo: '@', title: '@'},
      controller: ['$scope', function ($scope) {
        $scope.play = function () {
          alert('Yes, this is a video playing from vimeo/' + $scope.vimeo + ': ' + $scope.title);
        }
      }],
      replace: true,
      template: "<img class='diagram' src='img/playVideo.jpg' width='488' height='413' ng-click='play()'>"
    }
  })
;