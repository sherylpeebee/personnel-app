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

   $scope.addNote = function(note){
    var newNote = {
      note: note,
      date: new Date().getTime()
      //to give firebase time in UnixTime (milliseconds since 1970-sumthin)
    };
       if ($scope.currentEmployee.notes) {
       $scope.currentEmployee.notes.push(newNote);
     } else {
       $scope.currentEmployee.notes = [];
       $scope.currentEmployee.notes.push(newNote);
     }
     $scope.personnel.$save($scope.currentEmployee);
     $scope.note = '';
     // ^^ review this!! ^^

    // //  console.log($scope.currentEmployee);
    //  $scope.newNote.note=note;
    //  console.log($scope.newNote);
    // //  debugger;
    //  $scope.newNote.date = new Date();
    //  $scope.notes.push($scope.newNote);
    // //  $scope.currentEmployee.notes=$scope.notes;
    //  $scope.personnel.$add($scope.notes);
   };

   $scope.displayNotes = function(employee){
     $scope.currentEmployee = employee;
   };

   $scope.isCurrentEmployee = function(employee){
     if($scope.currentEmployee){
       return $scope.currentEmployee=== employee;
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
