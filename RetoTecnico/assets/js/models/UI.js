
export class UI {
  constructor() {}

  

  /**
   *
   * @param {string} title pregunta renderizada
   */
  mostrarPregunta(pregunta) {
    const tituloPregunta = document.getElementById("pregunta");
    tituloPregunta.innerHTML = pregunta;
  }

  /**
   *
   * @param {string[]} opciones paso de opciones de selección
   */
  mostrarOpciones(opciones, callback) {
    const listaOpciones = document.getElementById("opciones");
    listaOpciones.innerHTML = "";

    for (let i = 0; i < opciones.length; i++) {
      const button = document.createElement("button");
      button.innerText = opciones[i];
      button.className = "button";
      button.addEventListener("click", () => callback(opciones[i]));

      listaOpciones.append(button);
    }
  }

  /**
   *
   * @param {number} puntos respuestas correctas
   */
  mostrarPuntaje(puntos) {
    const feeback = `
            <h1>Resultado</h1>
            <h2>Tu puntaje es:${puntos}</h2>
        `;
    const element = document.getElementById("preguntas");
    element.innerHTML = feeback;
  }

  

  /**
   *
   * @param {number} posicion posición de la pregunta
   * @param {number} total total de preguntas
   */
  mostrarProgreso(posicion, total) {
    const element = document.getElementById("progreso");
    element.innerHTML = `Pregunta ${posicion} de ${total}`;
  }
   
  mostrarPuntajeEnRegistro1(puntos){
    const n1 = document.getElementById("nivel1");
    const p1 = document.getElementById("puntos")
    n1.innerHTML = puntos;
    p1.innerHTML = puntos * 50;
  }
  mostrarPuntajeEnRegistro2(puntos){
    const n2 = document.getElementById("nivel2");
    n2.innerHTML = puntos;
  }
  mostrarPuntajeEnRegistro3(puntos){
    const n3 = document.getElementById("nivel3");
    n3.innerHTML = puntos;
  }
  mostrarPuntajeEnRegistro4(puntos){
    const n4 = document.getElementById("nivel4");
    n4.innerHTML = puntos;
  }
  mostrarPuntajeEnRegistro5(puntos){
    const n5 = document.getElementById("nivel5");
    n5.innerHTML = puntos;
  }
}
