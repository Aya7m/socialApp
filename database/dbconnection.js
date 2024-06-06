
import mysqle from "mysql2"

export const dbconnection=()=>{
   const conn= mysqle.createConnection('mysql://ur0flit0onbgcuxn:c30jtpLHqX8XiyZx0FKr@bm3gu5efmmvn9qfhygdx-mysql.services.clever-cloud.com:3306/bm3gu5efmmvn9qfhygdx')
    conn.connect((err)=>{
        if(err) return console.log('database error');
        console.log('database connect successfully');
    })
return conn
}