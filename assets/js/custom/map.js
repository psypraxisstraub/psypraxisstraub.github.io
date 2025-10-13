(function (L) {
   var map = L.map('map', {
       dragging: !L.Browser.mobile,
       tap: !L.Browser.mobile
   }).setView([48.51936535443323, 14.613704089483294], 5);

   // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   // }).addTo(map);

   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1,
       scrollWheelZoom: false,
       accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
   }).addTo(map);
   map.scrollWheelZoom.disable();


   var marker = L.marker([48.515137, 14.493681]).addTo(map)
       .bindPopup('<b>Praxis Sofia Straub</b><br/>Sonnbergstraße 27<br/>4240 Freistadt'
           + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/search?query=Sonnbergstra%C3%9Fe+27%2C+4240+Freistadt&zoom=19&minlon=14.49063688516617&minlat=48.51430524272826&maxlon=14.495786726474764&maxlat=48.5158865556798#map=19/48.515096/14.493681">Route (via OpenStreetMap)</a>'
           + '<br/><a target="_blank" href="https://www.google.at/maps/place/Sonnbergstra%C3%9Fe+27,+4240+Freistadt/@48.5151007,14.4910935,747m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47730b76c90a4559:0x4d4024ceeb5f9487!8m2!3d48.5150972!4d14.4936684!16s%2Fg%2F11csf80zrg?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D">Route (via Google Maps)</a>');

   marker.openPopup();
   // var popup = L.popup()
   //     .setLatLng([48.36936535443323, 14.513704089483294])
   //     .setContent("Softwarepark Hagenberg")
   //     .openOn(map);

   map.setZoom(9);
})(L);