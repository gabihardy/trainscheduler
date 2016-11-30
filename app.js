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
	
	var tname = $("#trainName").val().trim();
	var destination = $("#trainDestination").val().trim();
	var firstTrainTime = $("#firstTrainTime").val().trim();
	var frequency = $("#frequency").val().trim();

	var newTrain = {
		name: tname,
		destination: destination,
		firstTrain: firstTrainTime,
		frequency: frequency
	}

	trainData.ref().push(newTrain);

	console.log(tname);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(frequency);

	alert("Train added");
	
	$("#trainName").val("");
	$("#trainDestination").val("");
	$("#firstTrainTime").val("");
	$("#frequency").val("");

	// Determine when the next train arrives.
	return false;
});

