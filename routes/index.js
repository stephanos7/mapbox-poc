var express = require('express');
var router = express.Router();
var MapboxClient = require('mapbox/lib/services/geocoding');
var client = new MapboxClient('pk.eyJ1Ijoic3RlcGhvcyIsImEiOiJjajUwMDZ0a2owZnVoMndyc3RmMThmaXQzIn0.UAmYMHUVPUHH0B1--7G4JQ');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Welcome to Mapbox PoC" });
});

////////////

client.geocodeForward('Paris, France', function(err, res) {
  if(err){
    return next(err);
  }
   console.log("SUCCESS HIT!");
});


/////////////


module.exports = router;
