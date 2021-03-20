const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');

connection.connect(error => {
    if(error){
        console.log(error);
    }else{
        console.log("database connected");
        const app = customExpress();

        app.listen(3000,() => console.log("server run at port 3000"));
    }
});

