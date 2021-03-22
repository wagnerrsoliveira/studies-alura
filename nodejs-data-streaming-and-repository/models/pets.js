const connection = require('../infrastructure/connection');
const uploadFile = require('../files/uploadFiles');
class Pet{

    add(pet, res){
        const sql = 'INSERT INTO pets SET ?';

        uploadFile(pet.image, pet.name, (newPath) => {
            const newPet = { name: pet.name, image: newPath };

            connection.query(sql, newPet, (error)=>{
                if(error){
                    console.log(error);
                    res.status(400).json(error)
                }else{
                    res.status(200).json(pet);
                }
            });
        });

        
    }
}

module.exports = new Pet;