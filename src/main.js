// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './view/home.js';
import {rutas} from './view/rutas.js';

/*import { showRutas } from './view/rutas.js';*/

myFunction();

// a window location le estas dando el hash con la dirección que quieres que salga en la url y luego se lo entragas 
// a la funcion ruta como argumento.
const iniciar = () => {
    document.getElementById('root').appendChild(home())


}

window.addEventListener('hashchange', () => {
    rutas(window.location.hash);
  });
  

window.addEventListener('load', iniciar)