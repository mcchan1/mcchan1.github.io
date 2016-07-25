console.log('loading map..');

    var markers = [
	{	
		"title": 'Melwani & Chan LLP',
		"date": '2012 to Present',
		"lat": '40.773609', 
		"lng": '-73.989434',
		"position":'Partner',
		"description":'Legal eagle'
	},
	{	
		"title": 'Magnum Water Technolgy Ltd',
		"date": '2011',
		"lat": '31.222000', 
		"lng": '121.493232',
		"position":'Chief Operating Officer',
		"description":'Organize Stuff. Legal/Compliance. '
	},
		{	
		"title": 'East West Bank',
		"date": '2009-2010',
		"lat": '37.794590', 
		"lng": '-122.403342',
		"position":'Corporate Counsel',
		"description":'Legal eagle'
	}
	
// 		{
// 		"title": 'Law Office of Michael Chan',
// 		"date": '2008-2009',
// 		"lat": '40.764528', 
// 		"lng": '-73.979632',
// 		"position":'Solo',
// 		"description":'Legal eagle'
// 	},
// 	{
// 		"title": 'Anthony Arther & Associates',
// 		"date": '2006-2007',
// 		"lat": '40.759568', 
// 		"lng": '-73.981960',
// 		"position":'Associate',
// 		"description":'Legal eagle'
// 	}
];
    window.onload = function () {
        initMap();
    }
    function initMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[2].lat, markers[2].lng),
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("jobMap"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title + " " +"(click for more info)",
                optimized: false  
                //needed to set to false for tooltip to work in firefox
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e){
                    //map zooms in to location
                    map.setZoom(15);
                    
                    //Wrap infoWindow inside a div
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.title +"</br>" + data.date +"</br>" + data.position +"</br>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);//(marker,data) loads function
        //close info window, reload to original map
           google.maps.event.addListener(infoWindow,'closeclick',function(){
           //reload the map function
           	initMap();
           	});
            
        }
    }
