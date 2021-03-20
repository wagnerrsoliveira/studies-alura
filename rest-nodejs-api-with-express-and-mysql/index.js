const customExpress = require('./config/customExpress')

const app = customExpress();

app.listen(3000,() => console.log("server run at port 3000"));

