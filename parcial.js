const boton = document.getElementById("submit");

boton.addEventListener("click", function () {
  var nombre = document.getElementsByName("txt_nombres");
  var apellido = document.getElementsByName("txt_apellidos");
  var telefono = document.getElementsByName("txt_telefono");
  var correo = document.getElementsByName("txt_correo");
  var fechaNacimiento = document.getElementsByName("txt_fn");
  var mensaje = document.getElementsByName("txt_mensaje");

  alert(
    nombre[0].value +
      "\n" +
      apellido[0].value +
      "\n" +
      telefono[0].value +
      "\n" +
      correo[0].value +
      "\n" +
      fechaNacimiento[0].value +
      "\n" +
      mensaje[0].value
  );
});
