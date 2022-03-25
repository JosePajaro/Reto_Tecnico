import { pregunta_model } from "../models/preguntas_model.js";
import {
  faciles,
  intermedias,
  dificiles,
  muy_dificiles,
  extremas,
} from "./preguntas_data.js";

const PreguntasFaciles = faciles.map(
  (preguntasFaciles) =>
    new pregunta_model(
      preguntasFaciles.pregunta,
      preguntasFaciles.opciones,
      preguntasFaciles.respuesta,
      preguntasFaciles.nivel,
      preguntasFaciles.premio
    )
);
const PreguntasIntermedias = intermedias.map(
  (preguntasIntermedias) =>
    new pregunta_model(
      preguntasIntermedias.pregunta,
      preguntasIntermedias.opciones,
      preguntasIntermedias.respuesta,
      preguntasIntermedias.nivel,
      preguntasIntermedias.premio
    )
);
const PreguntasDificiles = dificiles.map(
  (preguntasDificiles) =>
    new pregunta_model(
      preguntasDificiles.pregunta,
      preguntasDificiles.opciones,
      preguntasDificiles.respuesta,
      preguntasDificiles.nivel,
      preguntasDificiles.premio
    )
);
const PreguntasMuyDificiles = muy_dificiles.map(
  (preguntasMuyDificiles) =>
    new pregunta_model(
      preguntasMuyDificiles.pregunta,
      preguntasMuyDificiles.opciones,
      preguntasMuyDificiles.respuesta,
      preguntasMuyDificiles.nivel,
      preguntasMuyDificiles.premio
    )
);
const PreguntasExtremas = extremas.map(
  (preguntasExtremas) =>
    new pregunta_model(
      preguntasExtremas.pregunta,
      preguntasExtremas.opciones,
      preguntasExtremas.respuesta,
      preguntasExtremas.nivel,
      preguntasExtremas.premio
    )
);

export {
  PreguntasFaciles,
  PreguntasIntermedias,
  PreguntasDificiles,
  PreguntasMuyDificiles,
  PreguntasExtremas,
};
