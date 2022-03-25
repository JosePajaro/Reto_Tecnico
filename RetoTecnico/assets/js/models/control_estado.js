//@ts-check
import { pregunta_model } from "./preguntas_model.js";

export class control_preguntas {
  preguntaIndex = 0;
  puntos = 0;

  /**
   *
   * @param {pregunta_model[]} preguntas |recibe el objeto de pregunta
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  /**
   *
   * @returns {pregunta_model}| Este metodo devuelve un objeto con la respuesta
   */
  getPreguntasIndex() {
    return this.preguntas[this.preguntaIndex];
  }

  isEnded() {
    return this.preguntas.length === this.preguntaIndex;
  }

  /**
   *
   * @param {string} respuesta |respuesta correcta
   */
  pasoRespuesta(respuesta) {
    console.log(respuesta);
    if (this.getPreguntasIndex().respuestaCorrecta(respuesta)) {
      this.puntos++;
    }

    this.preguntaIndex++;
  }
}
