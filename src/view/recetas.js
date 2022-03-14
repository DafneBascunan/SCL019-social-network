export const recetas = () => {
    const divRecetas = document.createElement('div');
    const viewRecetas =  `<h1>Recetas</h1>
    <div>
    <img src="image vegan/plato1.jpg" height="300px" alt="plato1">
    <p>garbanzos, tomates, zanahoria</p>
    <img src="image vegan/plato2.jpg" height="250px" alt="plato2">
    <p>pan, palta, tomate cherry semillas</p>
    <img src="image vegan/plato3.jpg" height="300px" alt="plato3">
    <p>pizza espinaca queso aceituna tomate cherry</p>
  </div>`;

 divRecetas.innerHTML = viewRecetas
 return divRecetas;


}
    