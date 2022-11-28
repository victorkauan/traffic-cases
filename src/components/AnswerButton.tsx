import { ButtonHTMLAttributes } from 'react';

interface AnswerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  guilty: 'bike' | 'both' | 'car';
}

export default function AnswerButton({ guilty, onClick }: AnswerButtonProps) {
  let message;
  let value;
  switch (guilty) {
    case 'bike':
      message = 'Motociclista';
      value = 0;
      break;
    case 'both':
      message = 'Ambos';
      value = 1;
      break;
    case 'car':
      message = 'Motorista';
      value = 2;
      break;
  }

  return (
    <button
      value={value}
      onClick={onClick}
      className={`font-bold ml:text-lg text-white w-full bg-primary-blue border-primary-blue border-2 rounded px-3 py-2 transition-colors hover:bg-primary-dark-blue hover:border-primary-dark-blue mm:w-fit`}
    >
      {message}
    </button>
  );
}
