var phone=document.getElementById("phone");function thanks(){$(".business").hide(),$(".thanks").fadeIn(),$(".box-button").addClass("active"),$(".question").text("¡Solicitud enviada con éxito!").addClass("exito")}phone.addEventListener("input",function(){11<this.value.length&&(this.value=this.value.slice(0,11))}),$.validator.setDefaults({submitHandler:function(){thanks()}}),$().ready(function(){$("#company").validate({errorPlacement:function(e,n){$(n).closest("form").find("label[for='"+n.attr("id")+"']").append(e),$(".complete").show()},rules:{nombre:{required:!0,minlength:2},phone:{required:!0,minlength:11},empresa:"required",detalles:{required:!0,minlength:2},email:{required:!0,email:!0}},messages:{nombre:{required:"",minlength:""},phone:"",email:"",empresa:"",employees:"",detalles:"",presupuesto:""}})}),$.validator.setDefaults({submitHandler:function(){thanks()}}),$().ready(function(){$("#person").validate({errorPlacement:function(e,n){$(n).closest("form").find("label[for='"+n.attr("id")+"']").append(e),$(".complete").show()},rules:{nombre:{required:!0,minlength:2},phone:{required:!0,minlength:11},detalles:{required:!0,minlength:2},email:{required:!0,email:!0}},messages:{nombre:{required:"",minlength:""},phone:"",email:"",detalles:"",presupuesto:""}})});