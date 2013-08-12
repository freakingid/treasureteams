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

// maps code is supposed to go here, how?
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