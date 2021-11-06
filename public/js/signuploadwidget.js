// const express = require('express');
// const router = express.Router();
// const signature = require('../../modules/signuploadwidget');
// require('../js/config');

// const cloudinary = require('cloudinary').v2
// const cloudName = cloudinary.config().cloud_name;
// const apiKey = cloudinary.config().api_key;

// // using this API should require authentication
// router.get('/', function (req, res, next) {
//   const sig = signature.signuploadwidget()
//   res.json({
//     signature: sig.signature,
//     timestamp: sig.timestamp,
//     cloudname: cloudName,
//     apikey: apiKey
//   })
// })

// module.exports = router
var generateSignature = function(callback, params_to_sign){
  $.ajax({
   url     : “https://www.my-domain.com/my_generate_signature",
   type    : "GET",
   dataType: "text",
   data    : { data: params_to_sign},
   complete: function() {console.log("complete")},
   success : function(signature, textStatus, xhr) { callback(signature); },
   error   : function(xhr, status, error) { console.log(xhr, status, error); }
  });
}

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'my_cloud_name', 
  uploadPreset: 'my_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);

