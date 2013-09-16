angular.module('ng')
  .directive('resetWorkspace', function () {
    return {
      scope: { step: '@'},
      replace: true,
      restrict: 'A',
      template: "<div>" +
        "<a ng-hide='visible' ng-click='visible = true'>Workspace Reset Instructions ➤</a>" +
        "<ol ng-show='visible'>" +
        "<li>" +
        "<p>Reset the workspace to step {{step}}.</p>" +
        "<pre>git checkout -f step-{{step}}</pre>" +
        "</li>" +
        "</ol>" +
        "<a ng-show='visible' ng-click='visible = false'>← Hide</a>" +
        "</div>"
    }
  });