function onGesture( gesture ) {
	resetSize();
	var type = gesture.type;

	switch( type ){
		  case "circle":
		    onCircle( gesture );
		    break;
    
		  case "swipe":
		    onSwipe( gesture );
		    break;

		  case "screenTap":
		    onScreenTap( gesture );
		    break;

		  case "keyTap":
		    onKeyTap( gesture );
		    break;

	}
}

function onCircle( gesture ) {
	if(gesture.state == "update")
	{
		Gallery.navigate(getClockDirection(gesture));
	}
}

function onSwipe( gesture ) {
	if(gesture.state == "stop")
	{
		Gallery.navigate(getSwipeDirection(gesture));
	}
}

function onScreenTap( gesture ) {
	
}

function onKeyTap( gesture ) {
	console.log(gesture);
	enchanceSize(gesture);
	
}


