// function initialize() {
// 	var myOptions = {
// 		zoom: 15,
// 		center: new google.maps.LatLng(51.488966, -0.096777), //change the coordinates
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		scrollwheel: false,
// 		mapTypeControl: false,
// 		zoomControl: false,
// 		streetViewControl: false
// 	};
// 	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
// 	var marker = new google.maps.Marker({
// 		map: map,
// 		position: new google.maps.LatLng(51.488966, -0.096777) //change the coordinates
// 	});
// 	google.maps.event.addListener(marker, "click", function() {
// 		infowindow.open(map, marker);
// 	});
// }
// google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {
	var myOptions = {
		zoom: 15,
		center: new google.maps.LatLng(26.912491, 75.787210), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(26.912491, 75.787210) //change the coordinates
	});
 var infowindow = new google.maps.InfoWindow({
  content: '<p>Anantpura Main Rd, Rampura Dabri, Rajasthan 303704</p>'
 });

 google.maps.event.addListener(marker , "mouseover",function(){
  infowindow.open(map,marker)
 });

 google.maps.event.addListener(marker , "mouseout",function(){
  infowindow.close()
 });
 
	google.maps.event.addListener(marker, "click", function() {
  window.open("https://www.google.com/maps?q=Shree Sadar Machines, 4PFV+567, Anantpura Main Rd, Jaitpura, Jaipur, Rajasthan 303704", "_blank"); //to open map with current address

	});
}
google.maps.event.addDomListener(window, 'load', initialize);
