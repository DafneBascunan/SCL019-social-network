export const recetas = () => {
    const divRecetas = document.createElement('div');
    const viewRecetas =  `<h1>Recetas</h1>
     
    <label for="Receta"></label>
    <br>
    <textarea name="Recetas" id="cajarecetas" class="boxrecetas" cols="30" rows="10" placeholder="escribe aqui tu receta"></textarea>
    <br>
    <button type="button" id="btn-boxrecipe" class="btn" value="publicar">publicar</button>



`;

 divRecetas.innerHTML = viewRecetas

 divRecetas.querySelector("#btn-boxrecipe").addEventListener('click', () => {
    
console.log ('hola dafne')
 })


 return divRecetas;


}
