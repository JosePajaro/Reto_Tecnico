export class pregunta_model {
  /**
   *
   * @param {string} pregunta |Aquí va el texto de la pregunta
   * @param {string[]} opciones |Estas serán las opciones a diche pregunta
   * @param {string} respuesta |Esta es la opciones corrceta
   * @param {string} nivel |Este es el nivel de la prueba
   * @param {number} premio |Esta es la puntuación de la pregunta
   */

  constructor(pregunta, opciones, respuesta, nivel, premio) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuesta = respuesta;
    this.nivel = nivel;
    this.premio = premio;
  }

  /**
   *
   * @param {string} resp | recibe la respuesta selccionada
   * @returns {boolean} | retorna true si es la respuesta correcta
   */
  respuestaCorrecta(resp) {
    return resp === this.respuesta;
  }
}

//console.log(new pregunta_model("Tipo de sangre", ['a+', 'b+','c'], 'c', "facil", 50));
