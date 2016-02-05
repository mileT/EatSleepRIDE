'use strict';

angular.module('myApp.card', [])
    .controller('CardCtrl',['$scope', function($scope) {
        console.log("here");
    }])
    .directive('mapCard', function() {
        return {
            scope: {
              data: "="
            },
            restrict: "E",
            templateUrl: "components/card/card-directive-layout.html",
            link: function($scope, $element){
                //var cardContainer = $element[0].getElementsByClassName('cardContainer');
                //angular.element(cardContainer).text("abc");
            },
            controller: 'CardCtrl'
        };
    });
