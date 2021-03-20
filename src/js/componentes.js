import '../css/componentes.css';

export const saludar = ( name ) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1'),
          h4 = document.createElement('h4');
    h1.innerText = `Webpack starter`;
    h4.innerText = `By ${name}`;

    document.body.append(h1);
    document.body.append(h4);
}