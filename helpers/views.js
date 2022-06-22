const path = require('path')
function view(htmlFileName, res) { // función que recive el nombre del archivo y devuelve una respuesta
    return res.sendFile(path.join(__dirname,"..","views", htmlFileName))
}
//__dirname sirve para dirigirnos a la dirección de la carpeta general, a la raíz del proyecto

module.exports = {
    view
}