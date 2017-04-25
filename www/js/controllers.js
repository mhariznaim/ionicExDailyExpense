angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('addNewExpensesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {

 //$("#expDate").datepicker({ defaultDate: new Date() });
 
 
 
 $("#addNewExpenses-button1").click( function(){ 
		
		var strExpname = $("#expName").val();
		var fltPrice = $("#expPrice").val();
		var strDate = $("#expDate").val();
		var strTime =$("#expTime").val();
		
		
		
		var strSqlSave = "insert into expenses(exp_name,exp_price,exp_date,exp_time) values (?,?,?,?)";
		
		myDB.transaction(function(transaction){
		transaction.executeSql(strSqlSave,[strExpname,fltPrice,strDate,strTime], function(tx,result ){
			alert("You have spend RM" + fltPrice +" for "+ strExpname + " on "+strDate + " " + strTime);
		},
		  function(error){
		  alert("Noooo! Cannot Save!.."+ error);
		  });
		});
 });

}])
   
.controller('listOfExpensesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {




}])
 