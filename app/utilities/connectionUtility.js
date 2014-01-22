function getConnectionDefinition( connection ) {
	var connectionDefinition = {
			"local" : { 
			host: "127.0.0.1", port:"6437", 
			enableGestures: true, frameEventType: "animationFrame"}					
	};
	return connectionDefinition[connection];
}
function setConnect( element ) {
	$(element).removeClass("btn-warning");
	$(element).addClass("btn-success");
	$(element).text("Ready");
}

function setDisconnect( element ) {
	$(element).removeClass("btn-success");
	$(element).addClass("btn-warning");
	$(element).text("Not Ready");
}
function setLabel( element, message ) {
	$(element).text(message);
}
