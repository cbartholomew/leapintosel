function drawFingers(canvas)
{
	var c = canvas.getContext('2d');
	c.clearRect( 0, 0, $(canvas).width(),  $(canvas).height() );
	for( var i=0; i < frame.hands.length; i++ ){

	    var hand = frame.hands[i];

	    // Getting our hand position
	    var handPos = leapToScene( frame , hand.palmPosition, canvas );


	    for( var j = 0; j < hand.fingers.length; j++ ){

	      var finger = hand.fingers[j];

	      // Getting our finger position
	      var fingerPos = leapToScene( frame , finger.tipPosition, canvas );

	      // Setting up the style for the stroke
	      c.strokeStyle = "#39AECF";
	      c.lineWidth = 1;

	      // Draw a circle
	      c.beginPath();
	      c.arc(fingerPos[0], fingerPos[1], 6, 0, Math.PI*2); 
	      c.closePath();
	      c.stroke();
	    }
	}
}



