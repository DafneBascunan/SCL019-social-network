export const recetas = () => {
    const divRecetas = document.createElement('div');
    const viewRecetas =  `<h1>Recetas</h1>
     
    <label for="Receta"></label>
    <br>
    <textarea name="Recetas" id="cajarecetas" class="boxrecetas" cols="30" rows="10" placeholder="escribe aqui tu receta"></textarea>
    <br>
    <button type="button" id="btn-boxrecipe" class="btn" value="publicar">publicar</button>
    <br>
    <textarea name="recetas2" id="cajarecetas2" class"boxrecetas2" cols="30" rows="10" </textarea> 



`;

 divRecetas.innerHTML = viewRecetas

 

 //evento para el boton

 divRecetas.querySelector("#btn-boxrecipe").addEventListener('click', () => {
     let texto=document.getElementById("cajarecetas").value;
    // document.getElementById("cajarecetas2").value=texto;
     sessionStorage.setItem("lastname", texto);
    
     document.getElementById("cajarecetas2").innerHTML = sessionStorage.getItem("lastname");
     
 })




 return divRecetas;


}
