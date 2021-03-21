const fs = require('fs');

fs.readFile('./assets/dachshund.jpg',(error, buffer)=>{
    console.log('buffered image');
    console.log(buffer);

    fs.writeFile('./assets/dachshund2.jpg', buffer, (error) => {
        console.log('image was written');
    })
});