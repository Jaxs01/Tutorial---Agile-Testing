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
  })
  .controller('TestingZoo', function ($scope) {
    $scope.title = "How does agile change things?";
    $scope.options = { a: "Waterfall", b: "Agile" };
    $scope.questions = [
      { answer: "a", question: "Testing should be done after all the development is done", hint: "In waterfall, testing is started after development is complete."},
      { answer: "a", question: "Testing does not need a requirements document", hint: "Both waterfall and agile needs requirements - waterfall has then all upfront whereas agile has then fully for only that small piece of development"},
      { answer: "b", question: "Testing occurs in small timeframes within development cycles", hint: "Testing is squeezed into small cycles such that testing and development work together"},
      { answer: "b", question: "Test-infected developers, collaboration between testers and developers", hint: "Testing avoids being done in isolation. Testers know what was the intended functionality because they helped with the design."}
    ];
  })
  /*
   * Opportunity to ask questions early
   * Collaborate with developers and business
   * Fewer bugs
   * Better quality product
   */
  .controller('Zealandia', function ($scope) {
    $scope.title = "How does agile change things?";
    $scope.options = { a: "Waterfall", b: "Agile" };
    $scope.questions = [
      { answer: "b", question: "There is opportunity to ask questions early", hint: "In waterfall, testing is started after development is complete."},
      { answer: "b", question: "Test-infected developers, collaboration between testers and developers", hint: "Testing avoids being done in isolation. Testers know what was the intended functionality because they helped with the design."},
      { answer: "a", question: "Loads of bugs!", hint: "Both waterfall and agile have bugs - but usually in agile we are working together, getting feedback so the cost to fix is much lower - really, in agile we tend to see much lower levels of bugs overall and especially going out to the customer."},
      { answer: "b", question: "Better quality product", hint: "If the person wanting the software is working with you throughout and providing feedback and there's testing and discussion, it's just got to be better. Don't you think?"}

    ];
  });
