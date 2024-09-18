import { useEffect, useState } from 'react';
import { AjustarDimensaoJogo } from './components/ajustar-dimensão';
import coracaoCheio from './assets/imagens/coracao_cheio.png';
import coracaoVazio from './assets/imagens/coracao_vazio.png';
import gameOverImage from './assets/imagens/game_over.png';
import gameImage from './assets/imagens/game.png';
import { AjustarMosquitoRandom } from './components/mosquito-random';

function App() {
  const [vidas, setVidas] = useState(3);
  const [mosquitoClicado, setMosquitoClicado] = useState(false);
  const [jogoAtivo, setJogoAtivo] = useState(false); // Estado inicial para o jogo
  const [cronometro, setCronometro] = useState(15);

  // Função para iniciar o jogo
  const iniciarJogo = () => {
    setJogoAtivo(true); // Começa o jogo
    setVidas(3); // Reseta as vidas
    setCronometro(15); // Reseta o cronômetro
  };

  useEffect(() => {
    AjustarDimensaoJogo();

    if (jogoAtivo) {
      const cronometroId = setInterval(() => {
        setCronometro((prev) => {
          if (prev <= 0) {
            clearInterval(cronometroId);
            setJogoAtivo(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const intervalId = setInterval(() => {
        if (!mosquitoClicado && vidas > 0) {
          setVidas((prev) => prev - 1);
        }

        if (vidas <= 1) {
          setJogoAtivo(false);
        } else {
          AjustarMosquitoRandom(setMosquitoClicado);
        }
      }, 2000);

      return () => {
        clearInterval(cronometroId);
        clearInterval(intervalId);
      };
    }
  }, [mosquitoClicado, vidas, jogoAtivo]);

  const hearts = Array.from({ length: 3 }, (_, i) => (
    <img
      key={i}
      id={`v${i + 1}`}
      src={i < vidas ? coracaoCheio : coracaoVazio}
      alt='coração'
    />
  ));

  return (
    <div className='h-screen bg-[url(./assets/imagens/bg.jpg)] bg-no-repeat bg-cover bg-center'>
      {!jogoAtivo ? (
        // Tela Inicial
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <img src={gameImage} alt="Game" className="mb-4" />
          <button type='button'
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={iniciarJogo}
          >
            Start
          </button>
        </div>
      ) : (
        // Jogo Ativo
        <div className='flex flex-col absolute w-[190px] p-[10px] bottom-0 border-t border-solid border-white bg-white opacity-70'>
          <div className='float-left flex'>
            {hearts}
          </div>
          <div className='float-left text-xl font-bold'>
            Tempo Restante: {cronometro} segundos
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
