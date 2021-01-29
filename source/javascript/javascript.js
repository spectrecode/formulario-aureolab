var phone=  document.getElementById('phone');
phone.addEventListener('input',function(){
  if (this.value.length > 9)
     this.value = this.value.slice(0,9);
})

$('#submitCompany').click(function(){
  $('.company').hide();
  $('.thanks').fadeIn();
});
$('#submitPerson').click(function(){
  $('.person').hide();
  $('.thanks').fadeIn();
});

// validacion

// $('#submitCompany').click(function(){
//   var nombre = $("#nombre").val();
//   var phone = $("#phone").val();
//   var email = $("#email").val();
//   var numero = $("#numero").val();
//   var estimate = $("#estimate").val();
//   var comment = $("#comment").val();
//   if(nombre === ""){
//     $("#nombre").addClass("class-error")
//     }else{
//       $("#nombre").removeClass("class-error")
//   }
//   if(phone === ""){
//     $("#phone").addClass("class-error")
//     }else{
//       $("#phone").removeClass("class-error")
//   }
//   if(email === ""){
//     $("#email").addClass("class-error")
//     }else{
//       $("#email").removeClass("class-error")
//   }
//   if(numero === ""){
//     $("#numero").addClass("class-error")
//     }else{
//       $("#numero").removeClass("class-error")
//   }
//   if(estimate === ""){
//     $("#estimate").addClass("class-error")
//     }else{
//       $("#estimate").removeClass("class-error")
//   }
//   if(comment === ""){
//     $("#comment").addClass("class-error")
//     }else{
//       $("#comment").removeClass("class-error")
//   }
// });