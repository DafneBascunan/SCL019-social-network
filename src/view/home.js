export const home = () => {
  const homeUno = document.createElement('div');
  const viewHome = ` <h1>veggie</h1>
   
   <div class="botones">
   <button type="button" id="ingresar">INGRESAR</button>
   <button type="button" id="registrate">REGISTRATE</button>
   </div>
 
 
   <div class="grid-container">
     <a href="#/recetas">RECETAS </a>
     <a href="#/nutricion">NUTRICION</a>
     <a href="">LiSTADO DE ALIMENTOS</a>
     <a href="">MAPA</a>
     <a href="">PRODUCTOS</a>
   </div>

   <hr>
    <div class="welcome">
   <P>
         Plataforma donde podras encontrar recetas, tips,
        restaurantes y mucho mas. 
        Te invita a incursionar en el mundo de la alimentacion 
        vegana vegetariana de una manera interactiva donde  
        podras  compartir con otras personas de distintas partes 
        diferentes formas de llevar este estilo de vida
        saluable.
     </P>
    </div>
     <img src="image vegan/vegetariano.png" id="imagehome" alt="verduras" height="300px">
 
 
   <footer class= "footer" id = "footer"> copyrigth social network - Dafne Bascuñán 2022</footer>`;

  homeUno.innerHTML = viewHome;

  return homeUno;
};
