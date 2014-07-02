$(document).ready(function(){  
	var galleries = $('.ad-gallery').adGallery();
	var latlng = new google.maps.LatLng(12.974615,77.607116);
    var myOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        title:"Hotel Shelton Grand"
    });
    
    // To add the marker to the map, call setMap();
    marker.setMap(map); 
});  