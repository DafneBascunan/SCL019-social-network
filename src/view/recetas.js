/*eslint-disable*/
 // import { guardarPost } from '../lib/firebase.js';
import { guardarPost, traerPost } from '../lib/firebase.js';
import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

export const recetas = () => {
  const divRecetas = document.createElement('div');
  divRecetas.className = 'div-recetas';
  const viewRecetas = `<h1>Recetas</h1>

  <div id="form-container">

  <form id="task-form">
          <label for="Receta"></label>
          <textarea name="Recetas" id="cajarecetas" class="boxrecetas" cols="30" rows="10" placeholder="escribe aqui tu receta"></textarea>
          <button type="button" id="btn-publicar" class="btn" value="publicar">publicar</button>
          <span class='ingresaPost'></span>
  </form>
  </div>
  <div id="receta-creada"></div>
  `;

  divRecetas.innerHTML = viewRecetas;

  const cajaRecetas = divRecetas.querySelector('#cajarecetas');
  const ingresaPost = divRecetas.querySelector('.ingresaPost');
  const boton = divRecetas.querySelector('#btn-publicar');
  const printRecetas = traerPost() 
  console.log(printRecetas)
  boton.addEventListener('click', () => {
    if (cajaRecetas.value === '') {
      ingresaPost.innerHTML = 'ingresa receta';
    } else {
      const textoRecetas = divRecetas.querySelector('.boxrecetas').value;
      guardarPost(textoRecetas);
      // traerPost();
      document.querySelector('#cajarecetas').value = '';
    }
  });

  // const recetaCreada = divRecetas.querySelector('#receta-creada');

  // const nuevaReceta = async () => {
  //   await onSnapshot(obtenerRecetas, (querySnapshot) => {
  //     let recetasContainer = "";
  //     querySnapshot.forEach((doc) => {
  //       const receta = doc.data();

  //         recetaCreada.innerHTML = recetasContainer;
  //       });
  //     });
  //   };
     

  return divRecetas;
};

