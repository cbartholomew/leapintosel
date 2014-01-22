// abstracted then modified from http://js.leapmotion.com/start
 
// where the device is located
var HOST 			= "127.0.0.1";
// default port
var PORT 			= "6437";
// if gestures are used
var ENABLE_GESTURES = true;
// animation frames run at 60fps, best for browsers
var FRAME_EVENT_TYPE = "animationFrame"; 

// enable controller options
var controllerOptions = {
	host: HOST,
	port: PORT,
	enableGestures: ENABLE_GESTURES,
	frameEventType: FRAME_EVENT_TYPE
};

// initialize new controller object
var controller = new Leap.Controller(controllerOptions);

controller.on('connect', function() {
  console.log("Daemon has successfully connected.");
});

controller.on('disconnect', function() {
  console.log("Daemon has disconnected.");
});

controller.on('deviceConnected', function() {
  console.log("A Leap device has been connected.");
});

controller.on('deviceDisconnected', function() {
  console.log("A Leap device has been disconnected.");
});

controller.on('ready', function() {
  console.log("Leap is ready.");
});

controller.on('animationFrame', function() {
  // your code here
});



controller.connect();


