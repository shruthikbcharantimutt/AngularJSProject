<script>
$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})
</script


<script>
function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>



<script>
 var geocoder;
  var map;
  var address ="San Diego, CA";
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                { content: '<b>'+address+'</b>',
                  size: new google.maps.Size(150,50)
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }
</script>



















<table bgcolor="aliceblue" cellpadding="5" cellspacing="0" border="2" width="350px" height="100px" align="center" border="2">

<tbody>

<tr>
<br>
<center>
<input type="button"  value="Clear " id="reset" onclick="reset()">&nbsp;&nbsp;
<br><br>

<input type="button" onclick="rL();" value="Remove Last Blue Marker">&nbsp;&nbsp;
<br><br>

<input type="button" value="Center Red Marker" id="reset1" onclick="reset1()">
<br>

<hr>

<h3>Show Point from Latitude and Longitude</h3>



  <p><i>When you click on the map, move the marker or enter an address the latitude and longitude coordinates of the point are inserted in the boxes below.</i></p>

<table width=100%>
<tbody>
<tr>
<center>
<td>Latitude:</td>
<td colspan="3">
<input size="15" type="text" id="latbox" name="lat" value=""></td></tr>
<br>
<br>

<tr>
<td>Longitude:</td>
<td colspan="3">
<input size="15" type="text" id="lonbox" name="lon" value=""></td></tr>
<tr>
<td colspan="4"><br><hr></td>
</tr>
</center>
<br>
<br>