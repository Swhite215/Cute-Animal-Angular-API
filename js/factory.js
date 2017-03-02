var app = angular.module("myModule");

//Factory for performing HTTP request and obtaining information.
app.factory("myRedditFactory", function($http) {
  var obj = {};

  //Include $http request here and save that information as obj*
  return {
    requestInfo: function(userInput) {
      console.log(userInput);
      console.log(typeof userInput);
      $http({
        url: "https://www.reddit.com/r/aww/search/.json?q=" + userInput + "&restrict_sr=on",
        method: 'GET'
      }).then(function successfulCallback(response) {
        //set Factory object equal to array of responses.
        obj = response.data.data.children;
        console.log(obj);
      }, function(error) {
        console.log(error);
      });
    },
    getInfo: function() {
      console.log(obj);
      return obj;
    }
  }

});
