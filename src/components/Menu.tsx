import DifficultyButton from './DifficultyButton';

export default function Menu() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Dificuldades:</h2>
      <ul className="flex flex-col items-center justify-center gap-2 mml:flex-row">
        <li className="w-full mml:w-fit">
          <DifficultyButton difficulty="easy" />
        </li>
        <li className="w-full mml:w-fit">
          <DifficultyButton difficulty="medium" />
        </li>
        <li className="w-full mml:w-fit">
          <DifficultyButton difficulty="hard" />
        </li>
      </ul>
      <div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Explicação das dificuldades:</h3>
          <p>
            O nível de dificuldade define quantos casos você precisa analisar e
            dar sua opinião, ao final das análises, você receberá uma pontuação
            correspondente ao seu desempenho.
          </p>
          <p className="font-bold text-center italic">
            Lembre-se de sempre ler as explicações dos casos após respondê-los!
          </p>
        </div>
        <ul className="list-disc ml-4 mt-4">
          <li>
            <strong>Fácil:</strong> 3 (três) casos;
          </li>
          <li>
            <strong>Intermediário:</strong> 5 (cinco) casos;
          </li>
          <li>
            <strong>Difícil:</strong> 10 (dez) casos.
          </li>
        </ul>
      </div>
    </div>
  );
}
