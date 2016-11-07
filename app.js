// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC26CP_onGfzKk1mrtzCZ51-Riy-4tnTX8",
    authDomain: "trainscheduler-71fbd.firebaseapp.com",
    databaseURL: "https://trainscheduler-71fbd.firebaseio.com",
    storageBucket: "trainscheduler-71fbd.appspot.com",
    messagingSenderId: "596479524434"
  };
  firebase.initializeApp(config);
var database = firebase.database();

$("#addTrain").on("click", function(){
	//Initial values
	var tname = $("#trainName").val().trim();
	var destination = $("#trainDestination").val().trim();
	var firstTrainTime = $("#firstTrainTime").val().trim();
	var frequency = $("#frequency").val().trim();

	console.log(tname);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(frequency);

	dataRef.ref().push({
		name : tname,
		role : destination,
		start : firstTrainTime,
		rate : frequency
	});

	return false;
});

