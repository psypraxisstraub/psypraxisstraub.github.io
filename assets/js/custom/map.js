(function (L) {
   var map = L.map('map', {
       dragging: !L.Browser.mobile,
       tap: !L.Browser.mobile
   }).setView([48.36936535443323, 14.513704089483294], 5);

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


   var marker = L.marker([48.304732, 14.284464056011316]).addTo(map)
       .bindPopup('<b>Praxis Sofia Straub</b><br/>Altstadt 22<br/>Wohnung 5<br/>4020 Linz'
           + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.304776%2C14.284474#map=19/48.304764/14.284126">Route (via OpenStreetMap)</a>'
           + '<br/><a target="_blank" href="https://www.google.at/maps/place/Altstadt+22,+4020+Linz/@48.3046669,14.2816891,729m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47739783bf26b2ff:0x96e52eec858d4630!8m2!3d48.3046634!4d14.284264!16s%2Fg%2F11c5b7m3pn?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Route (via Google Maps)</a>');

   marker.openPopup();
   // var popup = L.popup()
   //     .setLatLng([48.36936535443323, 14.513704089483294])
   //     .setContent("Softwarepark Hagenberg")
   //     .openOn(map);

   map.setZoom(9);
})(L);