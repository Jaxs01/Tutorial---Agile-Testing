angular.module('ng').
  directive('screencast', function () {
    return {
      restrict: 'E',
      scope: { vimeo: '@', title: '@', byline: '@', length: '@'},
      controller: ['$scope', function ($scope) {
        $scope.play = function () {
          alert('Yes, this is a video playing from vimeo/' + $scope.vimeo + ': ' + $scope.title);
        }
      }],
      replace: true,
      template: "<div>" +
          "<h1>{{title}}</h1>" +
          "<p>{{byline}}</p>" +
          "<img class='diagram' src='img/playbutton.jpg' width='488' height='413' ng-click='play()' />" +
        "<p align='center'>({{length}} minutes)</p>" +
        "</div>"
    }
  })
  .directive('voicescript', function(){
    return {
      restrict: 'EAC',
      scope: { heading: '@', btnTitle: '@'},
      replace: true,
      transclude: true,
      priority: 0,
      template: '' +
        '<div align="right">' +
          '<button type="button" ng-hide="visible" ng-click="visible = true" class="btn btn-primary">{{btnTitle || \'Show Script\'}}</button>' +
          '<button type="button" ng-show="visible" ng-click="visible = false" class="btn btn-primary">{{btnTitle || \'Hide Script\'}}</button>' +
          '<div class="diagram fade in" align="left" ng-show="visible">' +
            '<h3>Script: {{heading}}</h3>' +
            '<pre ng-transclude></pre>' +
          '</div>' +
        '</div>'
    }
  })
  .directive('dialog', function factory() {
    var tpl = '<div style="display: {{visible && \'block\' || \'none\'}}" class="modal">' +
      '<div class="modal-dialog">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<button type="button" data-dismiss="modal" aria-hidden="true" ng-click="onCancel()" class="close close">&times;</button>' +
            '<h4 class="modal-title">{{dialogTitle}}</h4>' +
          '</div>' +
          '<div ng-transclude="ng-transclude" class="modal-body">' +
          '</div>' +
          '<div class="modal-footer">' +
           '<button type="button" data-dismiss="modal" ng-click="onCancel()" class="btn btn-default">{{dialogCancel || \'Cancel\'}}</button>' +
           '<button type="button" ng-click="onOk()" class="btn btn-primary">{{dialogOk || \'Ok\'}}</button>' +
          '</div>' +
        '</div>' +
        '</div>' +
          '<div ng-show="visible" class="modal-backdrop fade in">' +
        '</div>' +
      '</div>';

    return {
      transclude: true,
      scope: {
        dialogTitle: '@title',
        dialogOk: '@ok',
        dialogCancel: '@cancel',
        onOk: '&',
        onCancel: '&',
        visible: '='
      },
      template: tpl,
      restrict: 'E',
      replace: true
    };
  });
;
