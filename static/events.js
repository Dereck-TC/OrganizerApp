// window.addEventListener('load', function(){
//     if(document.querySelector('#add-event')){
//         let formEvent = document.querySelector("#add-event");
//         formEvent.onsubmit = function(e){
//             e.preventDefault();
//             let title = document.querySelector('#ename').value;
//             let description = document.querySelector("#edate").value;
//             let datestart = document.querySelector("#edesc").value;
//             let color = document.querySelector("#ecolor").value;
//             let icon = document.querySelector("#eicon").value;

//             if(title == '' || description == '' || datestart == '' || color == '' || icon == '' )
//             {
//                 alert("Todos los campos son obligatorios.");
//                 return false;
//             }
//             //divLoading.style.display = "flex";
//             //tinyMCE.triggerSave();
//             let request = (window.XMLHttpRequest) ? 
//                             new XMLHttpRequest() : 
//                             new ActiveXObject('Microsoft.XMLHTTP');
//             let ajaxUrl = 'http://localhost:4000/addEvent'; 
//             let formData = new FormData(formEvent);
//             request.open("POST",ajaxUrl,true);
//             request.send(formData);
//             request.onreadystatechange = function(){
//                 if(request.readyState == 4 && request.status == 200){
//                     let objData = JSON.parse(request.responseText);
//                     if(objData.status)
//                     {
//                         alert("se guardo correctamente")
//                         //document.querySelector("#idServicio").value = objData.idservicio;
//                         //document.querySelector("#containerGallery").classList.remove("notblock");
                        
//                     }else{
//                         alert("Error");
//                     }
//                 }
//                 // divLoading.style.display = "none";
//                 return false;
//             }

//         }
//     }
// }, false)

const signup = document.getElementById("add-event")
signup.onsubmit = function(event){
    event.preventDefault()

    fetch("/addEvent",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:signup.ename.value,
            description:signup.edesc.value,
            datestart:signup.edate.value,
            color:signup.ecolor.value,
            icon:signup.eicon.value
        })
    }).then(function(result){
        console.log(result)
        return result.json() // Devuelve un promesa
    })
    .then(function(data){
        
        if(data.error){
            message.innerText = data.message
        }else{
            const event = data.event
            message.innerText = ""
            // Guardar data en el navegador
            localStorage.setItem("title",event.title)
            localStorage.setItem("description",event.description)
            localStorage.setItem("datestart",event.datestart)
            localStorage.setItem("color",event.color)
            localStorage.setItem("icon",event.icon)
            // Redirección
            location.href = "/"
        }

        
    })
    .catch(function(error){
        console.log(error)
    })
}