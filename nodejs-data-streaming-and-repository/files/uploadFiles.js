const fs = require('fs');
const path = require('path');

module.exports = (pathName, fileName, callbackCreatedImage) => {
    
    const typeValid = ['jpg', 'png', 'jpeg'];
    const type = path.extname(pathName);
    const isTypeValid = typeValid.indexOf(type.substring(1));
    const newPath = `./assets/images/${fileName}${type}`;

    if(isTypeValid === -1){
        console.log('Error! Invalid type');
    }else{
        fs.createReadStream(pathName)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage(newPath));
    }
};
