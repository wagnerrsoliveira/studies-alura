const connection = require('../infrastructure/connection');

class Attendance{

    add(attendance){
        const sql = 'INSERT INTO attendances SET ?';

        connection.query(sql, attendance, (error, result) =>{
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }

        })
    }
}

module.exports = new Attendance;