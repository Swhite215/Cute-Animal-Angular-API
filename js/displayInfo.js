var app = angular.module("myModule");

app.controller("displayController", function($scope, myRedditFactory, $timeout) {
  //empty array that will store the data.
  $scope.info = [];

  //ca// factory function to perform information request.
  $scope.makeAction = function() {
      myRedditFactory.requestInfo($scope.userInput);
      $timeout( function(){
         $scope.setInfo();
       }, 500);
  }

  //function to set my requested info, in the form of an array, to a scope accessible array.
  $scope.setInfo = function() {
    $scope.info = myRedditFactory.getInfo();
    console.log($scope.info);
    //confirmation of all the values I am seeking in each object.
    // console.log($scope.info[0].data.author);
    // console.log($scope.info[0].data.title);
    // console.log($scope.info[0].data.url);
    // console.log($scope.info[0].data.preview.images[0].source.url);
  }

});
