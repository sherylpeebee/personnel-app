angular.module("Personnel", ["firebase"])

.controller("PersonnelCtrl", ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://personnel.firebaseio.com/");
  $scope.personnel = $firebaseArray(ref);

  console.log($scope.personnel);
//   $scope.personnel =
// [
// {id: 1, firstName: 'Bob', lastName:'Smith', phone:'222-222-2222', email:'bob@bob.com', notes:[
//    {note: 'Hard worker.', date: ''},
//    {note: 'someother stuff.', date: ''},
//    {note: 'Turkey Legs.', date: ''}
//  ]},
// {id: 2, firstName: 'Sue', lastName:'Jones', phone:'444-545-6533', email:'sue@sue.com', notes : []},
// {id: 3, firstName: 'Tom', lastName:'Brown', phone:'444-334-4353', email:'tom@tom.com', notes: []},
// {id: 4, firstName: 'Jim', lastName:'James', phone:'455-555-6767', email:'jim@jim.com', notes: []}
// ];
//   $scope.personnelCount=$scope.personnel.length;


  $scope.submitEmployee = function(employee){
    $scope.personnel.$add(employee);
    $('#myModal').modal('hide');
  };

   $scope.displayNotes = function(employee){

     $scope.currentEmployee = employee;
   };

   $scope.addNote = function(){
     $scope.newNote.date = new Date();
     $scope.currentEmployee.notes.push($scope.newNote);
     console.log($scope.currentEmployee.notes);
     $scope.newNote = '';
   };

   $scope.isCurrentEmployee = function(employee){
     if($scope.currentEmployee){
       return $scope.currentEmployee.id === employee.id;
     } else return false;
   };

   $scope.keywordSearch = function(word){
     $filter(word)(array, expression, comparator)
   };

   // $scope.hasNoNotes = function(employee){
   // return employee.notes.length === 0
    //help!!

   // };

   // $scope.numberOfNotes = function(){
   //   $scope.personnel.forEach(function(employee){
   //   })

   // };
   // $scope.numberOfNotes();


}]);
