const Attendance = require('../models/attendances');

module.exports= app => {
    app.get('/attendance',(__, res) => {
        Attendance.list(res);
    } );

    app.get('/attendance/:id',(req, res) => {
        const id = parseInt(req.params.id);
        Attendance.findById(id, res);
    } );

    app.post('/attendance', (req, res) => {
      
        const attendance = req.body;
        Attendance.add(attendance, res);        
    } );

    app.patch('/attendance/:id', (req, res) => {
        const id = parseInt(req.params.id);

        const values = req.body;
        Attendance.update(id, values, res);        
    } );
}