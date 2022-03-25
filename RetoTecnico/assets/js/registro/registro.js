function llenarTabla() {
  var nombre = $("#nombre").val();

  if (nombre == "") {
    alert("Debes llenar el nombre");
      $("#nombre").focus();
    return; 
  }

  $("#resultado").append(
    $(
      "<tr><td id='nombre'>" +
        nombre +
        "</td><td id='nivel1'>" +
        
        "</td><td id='nivel2'>" +
        
        "</td><td id='nivel3'>" +
       
        "</td><td id='nivel4'>" +
        
        "</td><td id='nivel5'>" +
        
        "</td><td id='puntos'>" +
        
        "</td></tr>"
    )
  );

  $("#FormRegistros").trigger("reset");
}

function letras(string) {
  //Solo letras
  var out = "";
  var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; //Caracteres validos

  //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos
  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1)
      //Se añaden a la salida los caracteres validos
      out += string.charAt(i);

  //Retornar valor filtrado
  return out;
}
