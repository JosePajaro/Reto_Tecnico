# Reto_Tecnico
Juego de preguntas

Ejecutar:
- Clonar la carpeta RetoTecnico y abrir con el navegador el archivo index.html

Estructura de archivos:

   - Principales:
      -- El archivo app.js carga la aplicación que se renderiza en pantall atraves de los modelos de la clase UI.
      -- En el archivo de index.html es donde se muestra finalmente la aplicación, este arcrivo contiene las etiquetas como esquelo que nos facilita la extracción de              elementos.
   
   - Estilos:
      -- En la carpeta css se encuentra un archivo style.css que es el que controla la vista del juego.
   
   - Datos: 
      -- En la carpeta data se encuentran los archivos model_data y pregunta_data.
         --- En preguntas_data se encuentran los objetos por distintos niveles con las preguntas. 
         --- data_model es la que se encarga de tomar los objetos de preguntas_data y los pasa por preguntas_model, manteniendo el paso de parametro de la                             programación orientada a objetos. 
   
   - Modelos:
      -- En la carpeta model tenemos el modelamiento del juego, contando con control_estado, preguntas_model y UI. En los modelos principalmente coloque anotaciones              para tratar de mantener visible la sintaxis coherente con lo que se pide.
   
   - Registro:
      -- En la carpeta de registro se encuentra el archivo encargado de pasar al usuario y el puntaje optenide surante una pregunta.
    

