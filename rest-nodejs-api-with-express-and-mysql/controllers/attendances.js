module.exports= app => {
    app.get('/attendance',(req, res) => res.send("Your are on attendance route, and calling a GET") );

    app.post('/attendance', (req, res) => {
        console.log(req.body);

        res.send("Your are on attendance route, and calling a POST")
        
    } );
}