/* eslint-disable default-case */
// eslint-disable-next-line import/no-unresolved
import { home } from './home.js';
import { recetas} from './recetas.js';

export const rutas = (hash) => {
  const root = document.getElementById('root');
  switch (hash) {
    case '#/': 
    document.getElementById('root').innerHTML='';
      root.appendChild(home());
      break;
    case '#/recetas':
      document.getElementById('root').innerHTML='';
      root.appendChild(recetas());
      break;

    default:
      root.innerHTML = 'mantenimiento'
  }
};

/*export const showRutas = (hash) => {
  if ( hash == '#/' ) { 
    return rutas(hash)
  }

 if (hash == '#/recetas' ){
   return rutas(hash)
 }
}*/
