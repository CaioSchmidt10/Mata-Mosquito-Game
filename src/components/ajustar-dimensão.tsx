let altura = 0;
let largura = 0;

export function AjustarDimensaoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
    return { largura, altura };
}
