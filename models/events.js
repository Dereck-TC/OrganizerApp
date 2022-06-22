const database = require('../libs/database')

class Event{
    constructor(data){
        this.id = data.id,
        this.title = data.title,
        this.description = data.description,
        this.datestart = data.datestart,
        this.dateend = data.dateend,
        this.color = data.color,
        this.icon = data.icon,
        this.iduser = data.iduser,
        this.data=data
    }
    async addevent(){
        const data = {
            title:this.title,
            description: this.description,
            datestart:this.datestart,
            //dateend:this.dateend,
            color:this.color,
            icon:this.icon,
            //iduser:this.iduser
        }
        try{
            const result = await database.query(
                "INSERT INTO eventos(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            //console.log(result)

            data.id =  result.insertId

            return {
                event:data,
                success:true,
                message:"Evento registrado correctamente"
            }
        }catch(error){
            return error
        }
       
    }
    async listarevent(){
        try{
            const result = await database.query("SELECT * FROM eventos");
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
}

module.exports = Event