exports.route = function route(socket) {
	
	
	socket.on('my other event', function (data) {
		console.log(data);
	});
	socket.on('broadcast', function () {
		socket.broadcast.emit('bcast', {msg : "WARNING!!"});
	})
	socket.on('pos', function (data) {
		socket.broadcast.emit('positionupdate', data);
		console.log(data);
	});
};
	