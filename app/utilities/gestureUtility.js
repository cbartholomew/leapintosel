var X_AXIS = 0;
var Y_AXIS = 1;
var Z_AXIS = 2;

var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";
var ZOOM_SIZE = 1;

function getSwipeDirection( gesture ) {
	
	var x_current = gesture.direction[X_AXIS];	
	var x_start   = gesture.startPosition[X_AXIS];
	
	if(x_current > x_start)
		return DIRECTION_RIGHT;
	else
		return DIRECTION_LEFT;

}

function getClockDirection( gesture ){
	return  (gesture.normal[2] <= 0) 
			? DIRECTION_RIGHT : DIRECTION_LEFT;
}

function enchanceSize( gesture ){	
	var height     = $(".dicom").height();
	var width  	   = $(".dicom").width();
	ZOOM_SIZE  	   *= 2;
	
	$(".dicom").height(height * ZOOM_SIZE);
	$(".dicom").width(width * ZOOM_SIZE);
}

function resetSize() {
	ZOOM_SIZE = 1;
}