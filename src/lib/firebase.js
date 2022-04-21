/*eslint-disable*/
import { getFirestore, collection, addDoc , getDocs , query} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
// import { recetas } from '../view/recetas.js';
import { app } from '../lib/configuracion.js';


const db = getFirestore(app);

//enviar datos
export const guardarPost = async (receta) => {
  //console.log('variable', recetasData);
  const docRef = await addDoc(collection(db, 'LibroRecetas'), {
  receta: receta,
  });
  console.log('Document written with ID: ', docRef.id);
};


// leer dato
export const traerPost = async () => { 
  const receta = []
  const postRef = collection(db, 'LibroRecetas');

  // console.log(postRef)
  const querySnapshot = await getDocs(postRef);
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    receta.push({ ...doc.data(), id: doc.id }
    )
   console.log(doc.id);
 });
console.log(receta)
 return receta
}





//  const querySnapshot = await getDocs(collection(db, 'LibroRecetas'));
// querySnapshot.forEach((doc) => {
//  doc.data() is never undefined for query doc snapshots
//  console.log(doc.id, " => ", doc.data());
// // });

// const newContainer = dataPost.querySelector('#tasks-container')
// const newAllPost = async () => {
//   onSnapshot(collection(db, "post"), (querySnapshot) => {
//     let html = ''
//     querySnapshot.forEach(doc => {
//       const commentPost = doc.data();
//       html += `
//           <div class= "postPublicado"> 
//             <h3 class="titlePost">${commentPost.titulo}</h3>
//             <textarea class="commentDone" readonly>${commentPost.comentario}</textarea>
//             <h3 class="nombreUsuario">${commentPost.email}</h3> 
//             <h4 class="fecha">${commentPost.date}</h4>
//             <div class="icono">
//             <img class="iconoImg" src="../Imagenes/mano1.png">
//             <img class="imgIcono" src="../Imagenes/Editars.png">
//             <img class="imgIcono" src="../Imagenes/Papelera.png">
//             </div>
//           </div>`;
//     })
//     newContainer.innerHTML = html
//   })
// }
// newAllPost()



// return dataPost
