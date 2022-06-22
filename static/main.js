jQuery(document).ready(function () {
    jQuery(".datetimepicker").datepicker({
      dateFormat: 'yyyy-mm-dd',
      timepicker: false,
      language: "en",
      range: true,
      multipleDates: true,
      multipleDatesSeparator: " - ",
      // es: { // Spanish
      //           months: [
      //             "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      //           ],
      //           dayOfWeekShort: [
      //             "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
      //           ],
      //           dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
      //         },
    });
    jQuery("#add-event").submit(function () {
      alert("Submitted");
      var values = {};
      $.each($("#add-event").serializeArray(), function (i, field) {
        values[field.name] = field.value;
      });
      console.log(values);
    });
  });

  (function () {
    "use strict";
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
    jQuery(function () {
      // fetch("/activitys",{
      //   method:"GET",
      //   headers:{
      //       "Content-Type":"application/json"
      //   },
      // }).then(function(result){
      //   console.log(result)
      //   return result.json() // Devuelve un promesa
      // }).then(function(data){
      //   if(data.error){
      //     message.innerText = data.message
      //   }else{
      //       const event = data.event
      //       message.innerText = ""
      //       // Guardar data en el navegador
      //       var title = localStorage.setItem("title",event.title)
      //       var description = localStorage.setItem("description",event.description)
      //       var datestart = localStorage.setItem("datestart",event.datestart)
      //       var color = localStorage.setItem("color",event.color)
      //       var icon = localStorage.setItem("icon",event.icon)
      //       // Redirección
      //       location.href = "/"
      //       console.log(title);
      //   }
      // }).catch(function(error){
      //      console.log(error)
      // });//Resultado fallido
      
      jQuery("#calendar").fullCalendar({
        themeSystem: "bootstrap4",
        // emphasizes business hours
        businessHours: false,
        defaultView: "month",
        // event dragging & resizing
        editable: true,
        // header
        header: {
          left: "title",
          center: "month,agendaWeek,agendaDay",
          right: "today prev,next"
        },
        events: [
          // {
          //   title: title,
          //   description: description,
          //   start: datestart,
          //   end: "2022-05-23",
          //   className: color,
          //   icon: icon
          // },
          {
            title: "Flight Paris",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",
            start: "2022-05-23T14:00:00",
            end: "2022-05-23T20:00:00",
            className: "fc-bg-deepskyblue",
            icon: "cog",
            allDay: false
          }
        ],
        eventRender: function (event, element) {
          if (event.icon) {
            element
              .find(".fc-title")
              .prepend("<i class='fa fa-" + event.icon + "'></i>");
          }
        },
        dayClick: function () {
          jQuery("#modal-view-event-add").modal();
        },
        eventClick: function (event, jsEvent, view) {
          jQuery(".event-icon").html("<i class='fa fa-" + event.icon + "'></i>");
          jQuery(".event-title").html(event.title);
          jQuery(".event-body").html(event.description);
          jQuery(".eventUrl").attr("href", event.url);
          jQuery("#modal-view-event").modal();
        }
      });
    });
  })(jQuery);
  