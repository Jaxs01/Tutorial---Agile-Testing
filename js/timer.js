angular.module('ng')
  .directive('countdown', function ($compile) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        time: '@'
      },
      controller: function ($scope) {
        $scope.timerRunning = false;

        $scope.getTime = function () {
          $scope.time;
        }

        $scope.startTimer = function () {
          $scope.$broadcast('timer-start');
          $scope.timerRunning = true;
        };

        $scope.stopTimer = function () {
          $scope.$broadcast('timer-stop');
          $scope.timerRunning = false;
        };

      },
      link: function (scope, elem, attrs) {
        var tpl = angular.element('<div class="countdown">' +
          '<timer interval="1000" countdown="' + scope.time + '" autostart="false">' +
            '<div class="timer">{{minutes}}:{{seconds | pad}}</div>' +
          '</timer>' +
          '<button class="btn btn-primary" ng-click="startTimer()" ng-hide="timerRunning">Start</button>' +
          '<button class="btn btn-primary" ng-click="stopTimer()" ng-show="timerRunning">Stop</button>' +
          '</div>');
        elem.append(tpl);
        $compile(tpl)(scope);
      }
    }
  })
  .filter('pad', function () {
    return function (num) {
      return (num < 10) ? "0" + num : num;
    }
  })
  .directive('timer', function ($timeout, $compile) {
    return  {
      restrict: 'E',
      replace: true,
      scope: {
        interval: '@',
        autostart: '@',
        countdownattr: '=countdown'
      },
      controller: function ($scope, $element) {
        if ($element.html().trim().length === 0) {
          $element.append($compile('<span>{{millis}}</span>')($scope));
        }

        $scope.startTime = null;
        $scope.timeoutId = null;
        $scope.countdown = $scope.countdownattr && parseInt($scope.countdownattr, 10) > 0 ? parseInt($scope.countdownattr, 10) + 1 : undefined;
        $scope.isRunning = false;

        $scope.$on('timer-start', function () {
          $scope.start();
        });

        $scope.$on('timer-resume', function () {
          $scope.resume();
        });

        $scope.$on('timer-stop', function () {
          $scope.stop();
        });

        function resetTimeout() {
          if ($scope.timeoutId) {
            $timeout.cancel($scope.timeoutId);
          }
        }

        $scope.start = $element[0].start = function () {
          $scope.startTime = new Date();
          resetTimeout();
          tick();
        };

        $scope.resume = $element[0].resume = function () {
          resetTimeout();
          $scope.startTime = new Date() - ($scope.stoppedTime - $scope.startTime);
          tick();
        };

        $scope.stop = $element[0].stop = function () {
          $scope.stoppedTime = new Date();
          $timeout.cancel($scope.timeoutId);
          $scope.timeoutId = null;
        };

        $element.bind('$destroy', function () {
          $timeout.cancel($scope.timeoutId);
        });

        var tick = function () {

          if ($scope.countdown > 0) {
            $scope.countdown--;
          }
          else if ($scope.countdown <= 0) {
            $scope.stop();
          }

          $scope.millis = new Date() - $scope.startTime;

          if ($scope.countdown > 0) {
            $scope.millis = $scope.countdown * 1000
          }

          $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
          $scope.minutes = Math.floor((($scope.millis / (1000 * 60)) % 60));
          $scope.hours = Math.floor((($scope.millis / (1000 * 60 * 60)) % 24));
          $scope.timeoutId = $timeout(function () {
            tick();
          }, $scope.interval);

          $scope.$emit('timer-tick', {timeoutId: $scope.timeoutId, millis: $scope.millis});
        };

        $scope.start();
        if ($scope.autostart !== true) $scope.stop();
      }
    };
  });
