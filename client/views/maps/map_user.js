// From meteor-leaflet-demo
window.resize = function(t) {
  var c, h, m, top, w;
  /*
  // this won't work because outercontainer is not part of 'this' (current template portion in map_user.html)
  w = t.find('#outercontainer').width;
  h = t.find('#outercontainer').height;
  */
  w = window.innerWidth;
  h = window.innerHeight;
  top = t.find('#map').offsetTop;
  c = w - 40;
  m = (h - top) - 65;
  /*
  // stop resizing these things
  t.find('#container').style.width = "" + c + "px";
  return t.find('#map').style.height = "" + m + "px";
  */
};

// =======================================================
// Global for the "location found" of the user?
// Probably should be in Session variable also / or instead


/*
  * Ask user for permission to get location info
  * Then tell the map to center on their resolved location
// From http://stackoverflow.com/questions/10563789/how-to-locate-user-with-leaflet-locate
*/
function locateUser() {
  var userLocation = this.map.locate({setView : true});
}

/*
  * Ask user for permission to get location info
  * Then move the map to that location
  * Then add a marker to that location
*/
function markUser() {
  // make sure we update where the user really is
  locateUser();
  // now drop a marker there
  
}

// Events for this template
Template.mapUser.events({
  // event for clicking the Find Me link
  'click #findMe': function(e) {
    e.preventDefault();
    locateUser();
  }
});

// .rendered means to put script in AFTER it is ready for the browser
Template.mapUser.rendered = function() {
  var query,
    _this = this;
  window.resize(this);
  $(window).resize(function() {
    return window.resize(_this);
  });
  // We copied images from the package to our public/images directory
  L.Icon.Default.imagePath = 'images';
  // Here comes the map code
  window.map = L.map('map', {
    doubleClickZoom: false
  }).setView([49.25044, -123.137], 13);
  L.tileLayer("http://{s}.tile.cloudmade.com/0f9d9af84f7c4d60a25649cf3b250af6/997/256/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(window.map);
  // add marker on double-click
  window.map.on('dblclick', function(e) {
    return Markers.insert({
      latlng: e.latlng
    });
  });
  // setup reactive data source from Markers collection
  query = Markers.find({});
  return query.observe({
    added: function(mark) {
      var marker;
      return marker = L.marker(mark.latlng).addTo(window.map).on('click', function(e) {
        return Markers.remove({
          latlng: this._latlng
        });
      });
    },
    removed: function(mark) {
      var key, layers, val, _results;
      layers = window.map._layers;
      _results = [];
      for (key in layers) {
        val = layers[key];
        if (!val._latlng) {

        } else {
          if (val._latlng.lat === mark.latlng.lat && val._latlng.lng === mark.latlng.lng) {
            _results.push(window.map.removeLayer(val));
          } else {
            _results.push(void 0);
          }
        }
      }
      return _results;
    }
  });
};