const Attendance = require('../models/attendances');

module.exports= app => {
    app.get('/attendance',(req, res) => res.send("Your are on attendance route, and calling a GET") );

    app.post('/attendance', (req, res) => {
      
        const attendance = req.body;
        Attendance.add(attendance);
        res.send("Your are on attendance route, and calling a POST")
        
    } );
}