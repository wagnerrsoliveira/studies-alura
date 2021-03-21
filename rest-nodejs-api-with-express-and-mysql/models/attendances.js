const moment = require('moment');
const connection = require('../infrastructure/connection');

class Attendance{

    add(attendance, res){

        const dateCreate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

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

    list(res){
        const sql = `SELECT * FROM attendances`;

        connection.query(sql, (error, result) =>{

            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(result)
            }

        });
    }

    findById(id, res){
        const sql = `SELECT * FROM attendances WHERE id=${id}`;

        connection.query(sql, (error, result) =>{
            const attendace = result[0];

            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(attendace)
            }

        });
    }
}

module.exports = new Attendance;