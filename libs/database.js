const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin123456',
    database: 'organizerapp'
})

function query(sql,data){
    const miPromesa = new Promise(function(resolve, reject){
        connection.query(sql, data, function(err, res, fields){
            if(err!=null){
                return reject({
                    err:true,
                    message: err.sqlMessage
                })
            }else{
                return resolve(res)
            }
        })
    })
    return miPromesa
}

//exportaciones
module.exports = {
    connection,
    query
}