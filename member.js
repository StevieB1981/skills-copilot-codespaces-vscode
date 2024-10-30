function skillsMember() {
  return {
    name: "skillsMember",
    restrict: "E",
    templateUrl: "app/member/skills-member.html",
    controller: function($scope) {
      $scope.skills = [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 75 },
        { name: "JavaScript", level: 55 },
        { name: "AngularJS", level: 45 },
        { name: "ReactJS", level: 30 },
        { name: "NodeJS", level: 30 }
      ];
    }
  };
}