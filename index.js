var knox = require('knox');

function uploadImage(image, name, client, cb) {
	var headers = {'Content-Length': image.length,'Content-Type': 'image/jpg'};
	client.putBuffer(image, name, headers, cb);
}

module.exports = function(image, name, s3Config, cb){
	uploadImage(image, name, knox.createClient(s3Config), cb);
};