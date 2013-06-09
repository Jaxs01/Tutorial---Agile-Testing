angular.module('ng').
  controller('AgileVsWaterfall', function ($scope) {
    $scope.title = "How does agile change things?";
    $scope.options = { a: "Waterfall", b: "Agile" };
    $scope.questions = [
      { answer: "b", question: "Whole-team approach", hint: "Work together please."},
      { answer: "b", question: "Coding and testing are one process"},
      { answer: "b", question: "Feedback, collaboration key"},
      { answer: "b", question: "Test-infected developers, better tools, better-designed tests"}
    ];
  });
