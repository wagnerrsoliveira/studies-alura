const moment = require('moment');
const connection = require('../infrastructure/connection');

class Attendance{

    add(attendance){

        const dateCreate = moment().format('YYYY-MM-DD HH:MM:SS');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const attendanceDated = {...attendance, dateCreate, date};

        const sql = 'INSERT INTO attendances SET ?';

        connection.query(sql, attendanceDated, (error, result) =>{
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }

        })
    }
}

module.exports = new Attendance;