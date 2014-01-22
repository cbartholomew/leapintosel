// type of controller
var CONTROLLER_TYPE = "local";
var CONNECT_BUTTON_ELEMENT = $("#connect");
var CONNECT_MESSAGE_ELEMENT = $("#connect_msg");
var MESSAGE_WEB_CONNECT = "Web socket connect.";
var MESSAGE_WEB_DISCONNECT = "Web socket disconnect";
var MESSAGE_DEVICE_CONNECT = "Leap device connected.";
var MESSAGE_DEVICE_DISCONNECT = "Leap device disconnected.";
var MESSAGE_READY = "Ready 2 Leap!";

// initialize new controller object
var controller = new Leap.Controller(getConnectionDefinition(CONTROLLER_TYPE));

function onControllerConnect() {	
	setDisconnect(CONNECT_BUTTON_ELEMENT);
	setLabel(CONNECT_MESSAGE_ELEMENT,MESSAGE_WEB_CONNECT);
}

function onControllerDisconnect() {
	setDisconnect(CONNECT_BUTTON_ELEMENT);
	setLabel(CONNECT_MESSAGE_ELEMENT,MESSAGE_WEB_DISCONNECT);
}

function onDeviceConnected(){ 
	setConnect(CONNECT_BUTTON_ELEMENT);
	setLabel(CONNECT_MESSAGE_ELEMENT,MESSAGE_DEVICE_CONNECT);
}

function onDeviceDisconnected() {	
	setDisconnect(CONNECT_BUTTON_ELEMENT);
	setLabel(CONNECT_MESSAGE_ELEMENT,MESSAGE_DEVICE_DISCONNECT);
}

function onReady() {
	setConnect(CONNECT_BUTTON_ELEMENT);
	setLabel(CONNECT_MESSAGE_ELEMENT,MESSAGE_DEVICE_CONNECT);
}

function onFrame( frame ) {
	// init the canvas
}

function leapToScene( frame , leapPos , canvas) {
	var iBox = frame.interactionBox;

  	var top  = iBox.center[1] + iBox.size[1]/2;
  	var left = iBox.center[0] - iBox.size[0]/2;

	var x = leapPos[0] - left;
  	var y = leapPos[1] - top;

	x /= iBox.size[0];
  	y /= iBox.size[1];

  	x *= canvas.width;
  	y *= canvas.height;

  	return [ x , -y ];
}


// assign events to controller
controller.on('connect', onControllerConnect);
controller.on('disconnect', onControllerDisconnect);
controller.on('deviceConnected', onDeviceConnected);
controller.on('deviceDisconnected', onDeviceDisconnected);
controller.on('animationFrame', onFrame);
controller.on('ready',onReady);

controller.connect();
