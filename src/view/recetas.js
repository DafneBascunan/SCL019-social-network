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
          <span class='ingresaPost'></span>
  </form>
  <div class="flex"><button type="button" id="btn-publicar" class="btn" value="publicar">publicar</button></div>
  </div>
  <div id="recetas-container"></div>
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
printRecetas.then((arrayReceta)=>{
  const containerRecetas = divRecetas.querySelector('#recetas-container')
  arrayReceta.forEach(element =>{
     console.log(element.receta)
     containerRecetas.innerHTML += `${element.receta}`
  })   

})
return divRecetas;
};


