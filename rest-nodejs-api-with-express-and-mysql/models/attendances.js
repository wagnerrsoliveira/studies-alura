const moment = require('moment');
const connection = require('../infrastructure/connection');

class Attendance{

    add(attendance, res){

        const dateCreate = moment().format('YYYY-MM-DD HH:MM:SS');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const dateIsValid = moment(date).isSameOrAfter(dateCreate);
        
        const attendanceDated = {...attendance, dateCreate, date};
        const customerIsValid= attendance.customer.length >= 5;

        const validations = [
            { 
                name: 'date', 
                isValid: dateIsValid,
                message:'Date must to be greater than or equal to the current date'
            },
            { 
                name: 'customer', 
                isValid: customerIsValid,
                message:'Customer must have more than five characters'
            },
        ];

        const errors = validations.filter(field => !field.isValid);
        const hasErrors = errors.length;

        if(hasErrors){
            res.status(400).json(errors)
        }else{
            const sql = 'INSERT INTO attendances SET ?';
    
            connection.query(sql, attendanceDated, (error, result) =>{
                if(error){
                    res.status(400).json(error)
                }else{
                    res.status(201).json(result)
                }    
            });
        }

    }
}

module.exports = new Attendance;