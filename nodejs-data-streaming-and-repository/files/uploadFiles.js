const fs = require('fs');
const path = require('path');

module.exports = (pathName, fileName, callbackCreatedImage) => {
    
    const typeValid = ['jpg', 'png', 'jpeg'];
    const type = path.extname(pathName);
    const isTypeInValid = typeValid.indexOf(type.substring(1)) === -1;
    const newPath = `./assets/images/${fileName}${type}`;

    if(isTypeInValid){
        const error = 'Invalid type';
        console.log('Error! Invalid type');
        callbackCreatedImage(error);
    }else{
        fs.createReadStream(pathName)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage('', newPath));
    }
};
