const database = require('../libs/database')
const bcrypt = require('bcrypt')

class User{
    constructor(data){
        this.id = data.id,
        this.name = data.name,
        this.email = data.email,
        this.username = data.username,
        this.birthday = data.birthday,
        this.password = data.password,
        this.data = data
    }

    async listar(){
        try{
            const result = await database.query("SELECT * FROM users");
            return {
                success: true,
                result,
                message: "lista obtenida"
            }
        }catch(error){
            return {
                success: false,
                message: "lista NO obtenida"
            }
        }
    }
    validate(){
        if(!(this.name && this.email && this.birthday && this.username && this.password)){
            return {
                message: 'Debes completar todos los campos',
                validated: false
            }
        }
        if(this.username.length < 3 ){
            return {
                message: 'el nombre de usuario debe tener más de tres caracteres',
                validated: false
            }
        }
        return {
            message: 'Datos correctos',
            validated: true
        }
    }
    async save(){
        const data = {
            name:this.name,
            email:this.email,
            password: await this.encrypt(this.password),
            username:this.username,
            birthday:this.birthday
        }
        try{
            const result = await database.query(
                "INSERT INTO users(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            //console.log(result)

            delete data.password
            data.id =  result.insertId

            return {
                user:data,
                success:true,
                message:"Usuario registrado correctamente"
            }
        }catch(error){
            return error
        }
       
    }
    async encrypt(string){
        const salt =  await bcrypt.genSalt(10)//valor por defecto ya es 10
        const hash = await bcrypt.hash(string,salt)

        return hash
    }
    async compare(string,hash){
        return await bcrypt.compare(string,hash)
    }

}

module.exports = User