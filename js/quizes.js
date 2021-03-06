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
    .controller('TestingCoin', function ($scope) {
      $scope.title = "Do the practices require more or less whole-team approach?";
      $scope.options = { a: "More", b: "Less" };
      $scope.questions = [
        { answer: "b", question: "Manual testing", hint: "It depends but in practice it is likely that manual testing is usually done as a phase after development and done by testers"},
        { answer: "b", question: "Record and replay tools", hint: "This is mostly done in a manual testing mindset but with the goal of acceleration (that rarely works)."},
        { answer: "b", question: "Unit tests", hint: "Perhaps surprisingly, unit tests don't often create more of a whole-team approach on their own. Often developers will say that they have done their testing because they are focused on the technology-facing tests."},
        { answer: "b", question: "Integration or component tests", hint: "Often these tests are not separated out from unit tests - so the same as unit tests."},
        { answer: "a", question: "Acceptance tests", hint: "These are our best chance of a whole-team approach. It requires us think about business-facing tests. You will just about always need to think about scenarios and test-data setup and teardown. This usually means solving the problems as a team."},
        { answer: "a", question: "Exploratory testing", hint: "Exploratory testing that isn't a regression test requires that the automated suite is in place."},
        { answer: "a", question: "Test-infected developers and testers", hint: "Asking are we building the right system? and is the system build right? (and keeping the questions separate) is hard. It requires lots of communication and collaboration! Try and get coding and testing in one phase where possible."}
      ];
    })
    .controller('TestingZoo', function ($scope) {
      $scope.title = "How does agile change things?";
      $scope.options = { a: "Waterfall", b: "Agile" };
      $scope.questions = [
        { answer: "a", question: "Testing should be done after all the development is done", hint: "In waterfall, testing is started after development is complete."},
        { answer: "a", question: "Requirements are the only interaction with the business", hint: "In agile, the product owner is involved as the 'voice of the business'"},
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
        { answer: "b", question: "Fewer bugs", hint: "Both waterfall and agile have bugs - but usually in agile we are working together, getting feedback so the cost to fix is much lower - really, in agile we tend to see much lower levels of bugs overall and especially going out to the customer."},
        { answer: "b", question: "Better quality product", hint: "If the person wanting the software is working with you throughout and providing feedback and there's testing and discussion, it's just got to be better. Don't you think?"}

      ];
    })

    .controller('NonFunctional', function ($scope) {
      $scope.title = "Non-functional testing?";
      $scope.options = { a: "Yes", b: "No" };
      $scope.questions = [
        { answer: "b", question: "We should use test sprints for non-functional testing", hint: "Developers and testers should work together on the same stories"},
        { answer: "a", question: "We can do non-functional testing without requirements", hint: "Testing can discover requirements when determining what will be acceptable to the product owner"},
        { answer: "b", question: "Testers should prioritise non-functional testing", hint: "The product owner has responsibility for determining priority"},
        { answer: "a", question: "Mind maps can show non-functional requirements in a graphical way", hint: "Mind maps can be stuck to Visual Management Boards"}

      ];
    });