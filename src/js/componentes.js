import '../css/componentes.css';

export const saludar = ( name ) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}`;

    document.body.append(h1);
}