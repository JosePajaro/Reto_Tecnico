// @ts-nocheck
import { control_preguntas } from "../js/models/control_estado.js";
import { UI } from "../js/models/UI.js";
import 
{
  PreguntasFaciles,
  PreguntasIntermedias,
  PreguntasDificiles,
  PreguntasMuyDificiles,
  PreguntasExtremas,
} 
from "../js/data/data_model.js";
  
$(function(){
  $("#preguntas").hide()
  $("#resultados").hide()

  $("#cambio").click(function() {
    $("#registros").hide()
    $("#preguntas").show()
  })

  $(".finalizar").click(function () {
    $("#preguntas").hide(5000)
    $("#resultados").show(5000)
  })

  $(".volver").click(function(){
    $("#registros").show(3000)
    $("#resultados").hide()
    $("#preguntas").hide()
  })
})


/**
 *
 * @param {Preguntas} pruebaFacil Set de preguntas faciles
 * @param {UI} ui Interfaz de usuario
 */

const recaragarPaginaFacil = (pruebaFacil, ui) => {
  
  if (pruebaFacil.isEnded()) {
    ui.mostrarPuntajeEnRegistro1(pruebaFacil.puntos,pruebaFacil.premio)
    $(function () {
      ui.mostrarPuntaje(pruebaFacil.puntos)
      $("#preguntas").hide(5000)
      $("#resultados").show(5000)
    })
  } else {
    ui.mostrarPregunta(pruebaFacil.getPreguntasIndex().pregunta);
    ui.mostrarOpciones(
      pruebaFacil.getPreguntasIndex().opciones,
      (respuestaActual) => {
        pruebaFacil.pasoRespuesta(respuestaActual);
        recaragarPaginaFacil(pruebaFacil, ui);
      }
    );
    ui.mostrarProgreso(pruebaFacil.preguntaIndex + 1, pruebaFacil.preguntas.length);
  }
};

const recaragarPaginaIntermedia = (pruebaIntermedia, ui) => {
  
  if (pruebaIntermedia.isEnded()) {
    ui.mostrarPuntajeEnRegistro2(pruebaIntermedia.puntos)
    $(function () {
      ui.mostrarPuntaje(pruebaIntermedia.puntos)
      $("#preguntas").hide(5000)
      $("#resultados").show(5000)
    })
  } else {
    ui.mostrarPregunta(pruebaIntermedia.getPreguntasIndex().pregunta);
    ui.mostrarOpciones(
      pruebaIntermedia.getPreguntasIndex().opciones,
      (respuestaActual) => {
        pruebaIntermedia.pasoRespuesta(respuestaActual);
        recaragarPaginaIntermedia(pruebaIntermedia, ui);
      }
    );
    ui.mostrarProgreso(pruebaIntermedia.preguntaIndex + 1, pruebaIntermedia.preguntas.length);
  }
};

const recaragarPaginaDifil = (pruebaDificil, ui) => {
  
  if (pruebaDificil.isEnded()) {
    ui.mostrarPuntajeEnRegistro3(pruebaDificil.puntos)
    $(function () {
      ui.mostrarPuntaje(pruebaDificil.puntos)
      $("#preguntas").hide(5000)
      $("#resultados").show(5000)
    })
  } else {
    ui.mostrarPregunta(pruebaDificil.getPreguntasIndex().pregunta);
    ui.mostrarOpciones(
      pruebaDificil.getPreguntasIndex().opciones,
      (respuestaActual) => {
        pruebaDificil.pasoRespuesta(respuestaActual);
        recaragarPaginaDifil(pruebaDificil, ui);
      }
    );
    ui.mostrarProgreso(pruebaDificil.preguntaIndex + 1, pruebaDificil.preguntas.length);
  }
};

const recaragarPaginaMuyDificil = (pruebaMuyDificil, ui) => {
  
  if (pruebaMuyDificil.isEnded()) {
    ui.mostrarPuntajeEnRegistro4(pruebaMuyDificil.puntos)
    $(function () {
      ui.mostrarPuntaje(pruebaMuyDificil.puntos)
      $("#preguntas").hide(5000)
      $("#resultados").show(5000)
    })
  } else {
    ui.mostrarPregunta(pruebaMuyDificil.getPreguntasIndex().pregunta);
    ui.mostrarOpciones(
      pruebaMuyDificil.getPreguntasIndex().opciones,
      (respuestaActual) => {
        pruebaMuyDificil.pasoRespuesta(respuestaActual);
        recaragarPaginaMuyDificil(pruebaMuyDificil, ui);
      }
    );
    ui.mostrarProgreso(pruebaMuyDificil.preguntaIndex + 1, pruebaMuyDificil.preguntas.length);
  }
};

const recaragarPaginaExtrema = (pruebaExtrema, ui) => {
  
  if (pruebaExtrema.isEnded()) {
    ui.mostrarPuntajeEnRegistro5(pruebaExtrema.puntos)
    $(function () {
      ui.mostrarPuntaje(pruebaExtrema.puntos)
      $("#preguntas").hide(5000)
      $("#resultados").show(5000)
    })
  } else {
    ui.mostrarPregunta(pruebaExtrema.getPreguntasIndex().pregunta);
    ui.mostrarOpciones(
      pruebaExtrema.getPreguntasIndex().opciones,
      (respuestaActual) => {
        pruebaExtrema.pasoRespuesta(respuestaActual);
        recaragarPaginaExtrema(pruebaExtrema, ui);
      }
    );
    ui.mostrarProgreso(pruebaExtrema.preguntaIndex + 1, pruebaExtrema.preguntas.length);
  }
};

function main() {
  const pruebaFacil = new control_preguntas(PreguntasFaciles);
  const pruebaIntermedia = new control_preguntas(PreguntasIntermedias);
  const pruebaDificil = new control_preguntas(PreguntasDificiles);
  const pruebaMuyDificil = new control_preguntas(PreguntasMuyDificiles);
  const pruebaExtrema = new control_preguntas(PreguntasExtremas);

  const ui = new UI();

  recaragarPaginaFacil(pruebaFacil, ui)
  //recaragarPaginaIntermedia(pruebaIntermedia, ui);
  //recaragarPaginaDifil(pruebaDificil, ui);
  //recaragarPaginaMuyDificil(pruebaMuyDificil, ui);
  //recaragarPaginaExtrema(pruebaExtrema, ui);
}
  
main();





//console.log(PreguntasFaciles);
//console.log(PreguntasIntermedias);
//console.log(PreguntasDificiles);
//console.log(PreguntasMuyDificiles);
//console.log(PreguntasExtremas);
