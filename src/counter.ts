export function setupCounter(element: HTMLButtonElement) {
    let counter = 0;
    const setCounter = (count: number) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}

/* vanilla componente

1 un componente una function 
2 define un selector
3 define un templete (string)
4 renderiza el templete con el selector
     -innerHTML (Estilo ANGULAR)
     - outerHtml (estilo REACT)
5 Agrega lógica (eventos, etc)

*/


