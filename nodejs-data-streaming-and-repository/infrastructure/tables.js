class Tables{
    init(connection){
        this.connection = connection;
        this.createAttendances();
        this.createPet();
    }

    createAttendances(){
        const sql = `CREATE TABLE IF NOT EXISTS attendances (
            id int NOT NULL AUTO_INCREMENT, 
            customer varchar(50) NOT NULL, 
            pet varchar(20), 
            service varchar(20) NOT NULL, 
            date datetime NOT NULL, 
            dateCreate datetime NOT NULL, 
            status varchar(20) NOT NULL, 
            observation text, 
            PRIMARY KEY(id)
            )`;
                this.connection.query(sql, (error) => {
            if(error){
                console.log(error);
            }else{
                console.log('attendances table created with successful')
            }
        });
    }

    createPet(){
        const sql = `CREATE TABLE IF NOT EXISTS pets (
            id int NOT NULL AUTO_INCREMENT, 
            name varchar(50) NOT NULL, 
            image varchar(200), 
            PRIMARY KEY(id)
            )`;

            this.connection.query(sql, (error) => {
                if(error){
                    console.log(error);
                }else{
                    console.log('pets table created with successful')
                }
            });
    }
}

module.exports = new Tables