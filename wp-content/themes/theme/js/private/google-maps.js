function initialize() {
	var styles = [
		// {
		//     "featureType": "administrative",
		//     "elementType": "labels.text.fill",
		//     "stylers": [
		//         {
		//             "color": "#444444"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "landscape",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "color": "#f2f2f2"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "poi",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "visibility": "off"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "poi.park",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "color": "#bfecaa"
		//         },
		//         {
		//             "visibility": "on"
		//         },
		//         {
		//             "lightness": "33"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "road",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "saturation": -100
		//         },
		//         {
		//             "lightness": 45
		//         }
		//     ]
		// },
		// {
		//     "featureType": "road.highway",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "visibility": "simplified"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "road.highway",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "color": "#f9e555"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "road.arterial",
		//     "elementType": "labels.icon",
		//     "stylers": [
		//         {
		//             "visibility": "off"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "road.local",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "color": "#f9e1b6"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "transit",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "visibility": "off"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "transit.line",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "color": "#ffcff9"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "transit.station",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "color": "#c2b8b8"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "water",
		//     "elementType": "all",
		//     "stylers": [
		//         {
		//             "color": "#46bcec"
		//         },
		//         {
		//             "visibility": "on"
		//         }
		//     ]
		// },
		// {
		//     "featureType": "water",
		//     "elementType": "geometry",
		//     "stylers": [
		//         {
		//             "lightness": "70"
		//         },
		//         {
		//             "saturation": "-49"
		//         }
		//     ]
		// }
	];

	var styledMap = new google.maps.StyledMapType(styles, { name: 'Styled Map' });

	var mapOptions = {
		center: new google.maps.LatLng(44.7245123, -85.6507366),
		disableDefaultUI: true,
		scrollwheel: false,
		zoom: 17,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		position: map.getCenter(),
		// icon: "http://sweet-temptations.com/wp-content/themes/sweettemptations/img/mapMarker.png",
		map: map
	});

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	map.panBy(-200, 0);
}

google.maps.event.addDomListener(window, 'load', initialize);

var options = {
	id: 201008939,
	color: '#dd2d39'
};

var player = new Vimeo.Player('vimeo-player', options);

player.setVolume(50);

player.on('play', function() {
	console.log('played the video!');
});
