import Container from './Container';

export default function Footer() {
  return (
    <div className="font-bold text-primary-blue shadow-inverted py-4">
      <Container>
        <p className="text-center flex flex-col items-center justify-center gap-1 mm:flex-row">
          <span className="whitespace-nowrap">&copy; 2022 IHC&trade;.</span>
          <span className="whitespace-nowrap">
            Todos os direitos reservados.
          </span>
        </p>
      </Container>
    </div>
  );
}
