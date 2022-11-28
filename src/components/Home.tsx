import { FaMotorcycle, FaPeopleCarry } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <h2 className="font-bold text-center text-xl mb-4">
        Olá! Seja bem-vindo a um jogo sobre análise e conscientização do
        trânsito.
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          Ainda é um <span className="font-bold">protótipo</span>, por isso, ele
          funciona de uma maneira <span className="font-bold">bem simples</span>
          .
        </p>
        <p>
          Você vai ter alguns{' '}
          <span className="font-bold">casos de incidentes/acidentes</span> no
          trânsito que envolvem sempre um{' '}
          <span className="font-bold">motoqueiro</span>{' '}
          <FaMotorcycle className="inline" /> e um{' '}
          <span className="font-bold">motorista</span>{' '}
          <AiFillCar className="inline" />.
        </p>
        <p>
          Sua <span className="font-bold">missão</span> é dizer{' '}
          <span className="font-bold">quem está errado</span> em cada situação:
          o <span className="font-bold">motoqueiro</span>{' '}
          <FaMotorcycle className="inline" />, o{' '}
          <span className="font-bold">motorista</span>{' '}
          <AiFillCar className="inline" /> ou{' '}
          <span className="font-bold">ambos</span>{' '}
          <FaPeopleCarry className="inline" />.
        </p>
        <p>
          <span className="font-bold">
            Todos os casos foram julgados previamente por um profissional da
            área.
          </span>
        </p>
        <p>
          <span className="font-bold">Após cada resposta</span>, aparecerá uma{' '}
          <span className="font-bold">breve explicação sobre o caso</span>,
          informando quem foi o
          <span className="font-bold">"culpado" pelo incidente/acidente</span>.
        </p>
      </div>
    </div>
  );
}
