function onGesture( gesture ) {
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
	console.log(gesture);
}

function onSwipe( gesture ) {
	console.log(gesture);
}

function onScreenTap( gesture ) {
	
}

function onKeyTap( gesture ) {
	
}

