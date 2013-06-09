angular.module('ng').
  directive('multichoice', function () {
    return {
      controller: ['$scope', function ($scope) {

        $scope.checkAnswers = function () {
          $scope.answers = $scope.hasCompleted() ?
            "Well done, I suppose" :
            "Hey, you haven't answered them all yet.";

          $scope.isAnswered = true;
        }

        $scope.answer = function (question, value) {
          question.answered = true;
          question.isCorrect = question.answer == value;
        }

        $scope.showHint = function () {
          $scope.hint = "You have " + $scope.numberCorrect() +" out of " + $scope.questions.length + " correct";
          $scope.isHint = true;
        }

        $scope.hasCompleted = function () {
          var answered = true;
          angular.forEach($scope.questions, function (question) {
            if (!question.answered) answered = false;
          })
          return answered
        }

        $scope.numberCorrect = function(){
          var correct = 0;
          angular.forEach($scope.questions, function (question) {
            if (question.isCorrect) correct++;
          })
          return correct;
        }
      }],
      transclude: true,
      template: "<h1>Quiz: {{title}}</h1>" +
        "<table ng-class='multichoice'>" +
        "<tbody>" +
        "<tr>" +
        "<td ng-repeat=\"option in options\">{{option}}</td>" +
        "<td colspan='2'>" +
        "</tr>" +
        "<tr ng-repeat='q in questions' ng-init='i = $index' >" +
        "<td ng-repeat='(key, value) in options' class='question-response'><input type='radio' name='{{i + q.answer}}' ng-click='answer(q, key)'></td>" +
        "<td class='question-number'>{{$index+1}}.</td>" +
        "<td class='question-text'>" +
        "{{q.question}}" +
        "<p class='info' ng-show='isAnswered'>{{q.hint}}</p>" +
        "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "<p ng-show='isHint'>Hint: {{hint}}</p>" +
        "<p ng-show='isAnswered'>{{answers}}</p>" +
        "<ul class='btn-group tutorial-nav'>" +
        "<li class='btn btn-primary' ng-click='checkAnswers()'><a>Check Answers</a></li>" +
        "<li class='btn btn-primary' ng-click='showHint()'><a>Show Hint</a></li>" +
        "</ul>"
    }
  })
  .controller('AgileVsWaterfallQuiz', function ($scope) {
    $scope.title = "How does agile change things?";
    $scope.options = { a: "Waterfall", b: "Agile" };
    $scope.questions = [
      { answer: "b", question: "Whole-team approach", hint: "Work together please."},
      { answer: "b", question: "Coding and testing are one process"},
      { answer: "b", question: "Feedback, collaboration key"},
      { answer: "b", question: "Test-infected developers, better tools, better-designed tests"}
    ];
  });