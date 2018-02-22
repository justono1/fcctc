var options = {
	id: 201008939,
	color: '#dd2d39'
};

var player = new Vimeo.Player('vimeo-player', options);

player.setVolume(50);

player.on('play', function() {
	console.log('played the video!');
});
