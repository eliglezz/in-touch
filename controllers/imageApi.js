const cloudinary = require("cloudinary").v2;
require("dotenv").config;

//Timestamp needed (secs)
const timestamp = Math.round((new Date).getTime()/1000);

console.log("Timestamp:", timestamp);

// signature with node.js With SDK api_sign_request
const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    eager: 'w_400,h_300,c_pad|w_260,h_200,c_corp',
    public_id: 'sample_image'}, process.env.API_SECRET);

console.log('Signature:', signature);

//with timestamp and signature we can make the upload url

//upload 
const curl_command = 'curl -d "file=' + file + '&api_key=' + process.env.API_KEY + '&eager=w_400,h_300,c_pad|w_260,h_200,c_corp&public_id=sample_image' + 
'$timestamp=' + timestamp +
'&signature=' + signature +
'" -X POST http://api.cloudinary.com/v1_1/carl/image/upload';

console.log('curl command:', curl_command);

cloudinary.uploader.upload("my_picture.jpg", function(error, result) { console.log(result) });
