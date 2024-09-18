import { AjustarDimensaoJogo } from './ajustar-dimensão';
import mosquitoImage from '../assets/imagens/mosca.png';
import { TamanhoAleatorio } from './ajustar-tamanho';

export function AjustarMosquitoRandom(setMosquitoClicado: (clicado: boolean) => void) {
    const { altura, largura } = AjustarDimensaoJogo();
    const { classe, side } = TamanhoAleatorio();

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(`Posição X: ${posicaoX}, Posição Y: ${posicaoY}`);

    // Remove o mosquito existente antes de criar um novo
    const existingMosquito = document.querySelector('.mosquito');
    if (existingMosquito) {
        existingMosquito.remove();
    }

    // Cria um novo mosquito
    const mosquito = document.createElement('img');
    mosquito.src = mosquitoImage;
    mosquito.className = `mosquito ${classe} ${side}`;

    mosquito.style.position = 'absolute';
    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px`;

    mosquito.onclick = () => {
        mosquito.remove();
        setMosquitoClicado(true); // Mosquito foi clicado
    };

    document.body.appendChild(mosquito);

    setMosquitoClicado(false);
}
