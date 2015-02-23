# Tessel Camera S3 Module

I found uploading images from the tessel camera kind of annoying, so I a made a wrapper to simplify the process.
This module wraps the knox client, and makes use of its putBuffer call.

It adds a larger footprint than I would have liked (~1.8mb), so I might swap out the library in the future.

I am very open to suggestions on improving this. Maybe a smaller library or some clarifying?  I don't know.

## Installing:

```
npm install tessel-camera-s3
```

## Pre-requisites:

An Amazon AWS account with an s3 key, secret, and bucket.

## Example Usage:

```javascript
var uploadPicture = require('tessel-camera-s3');

camera.takePicture(function(err, image) {
    if (err) {
        return console.log('error taking image', err);
    }
    var s3Config = {
        key:'XXXXXXXXXXXXXXX',
        secret:'yyyyyyyyyyyyyyyyyyyyyyy',
        bucket:'zzzzzzzzzzzz'
    };

    uploadPicture(image, 'test.jpg', s3Config, function(err, res) {
        if (err) {
            return console.log('There was an error :( ');
        }
        console.log('image was successfully uploaded!');
    });
});
```