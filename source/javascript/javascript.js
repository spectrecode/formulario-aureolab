var phone=  document.getElementById('phone');
phone.addEventListener('input',function(){
  if (this.value.length > 11)
     this.value = this.value.slice(0,11);
})

function thanks(){
  $('.business').hide();
  $('.thanks').fadeIn();
  $('.box-button').addClass("active");
  $('.question').text('¡Solicitud enviada con éxito!').addClass('exito');
}

// validacion

$.validator.setDefaults({
  submitHandler: function() {
    thanks();
  }
});
$().ready(function() {
  $("#company").validate({
    errorPlacement: function(error, element) {
			$( element )
				.closest( "form" )
					.find( "label[for='" + element.attr( "id" ) + "']" )
            .append( error );
      $(".complete").show();
		},
    rules: {
      nombre: "required",
      phone: "required",
      empresa: "required",
      detalles: "required",
      nombre: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 11
      },
      email: {
        required: true,
        email: true
      },
      detalles: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      nombre: {
        required: "",
        minlength: ""
      },
      phone: "",
      email: "",
      empresa: "",
      employees: "",
      detalles: "",
      presupuesto: "",
    }
  });
});


$.validator.setDefaults({
  submitHandler: function() {
    thanks();
  }
});
$().ready(function() {
  $("#person").validate({
    errorPlacement: function(error, element) {
			$( element )
				.closest( "form" )
					.find( "label[for='" + element.attr( "id" ) + "']" )
            .append( error );
      $(".complete").show();
		},
    rules: {
      nombre: "required",
      phone: "required",
      detalles: "required",
      nombre: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 11
      },
      email: {
        required: true,
        email: true
      },
      detalles: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      nombre: {
        required: "",
        minlength: ""
      },
      phone: "",
      email: "",
      detalles: "",
      presupuesto: "",
    }
  });
});