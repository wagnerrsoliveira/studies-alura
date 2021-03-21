const fs = require('fs');

fs.createReadStream('./assets/dachshund.jpg')
    .pipe(fs.createWriteStream('./assets/dachshund-stream.jpg'))
    .on('finish', () => console.log('Image was written successfully'));