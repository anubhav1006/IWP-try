
      function initMap() {
        var place = {lat:20.5937, lng: 78.9629};
        var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 4,
          center: place
        });
      }

      function addMumbai(){

       var loc = new google.maps.LatLng(19.0760, 72.8777);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }

      function addDelhi(){

       var loc = new google.maps.LatLng(28.7041, 77.1025);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }

      function addBangalore(){

       var loc = new google.maps.LatLng(12.9716, 77.5946);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }

      function addHimachal(){

       var loc = new google.maps.LatLng(31.1048, 77.1734);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }

      function addChennai(){

       var loc = new google.maps.LatLng(13.0827, 80.2707);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }

      function addGoa(){

       var loc = new google.maps.LatLng(15.2993, 74.1240);
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: loc
        });
       var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }
