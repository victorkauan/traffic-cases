import Container from './Container';

export default function Footer() {
  return (
    <div className="font-bold text-primary-blue shadow-inverted py-4">
      <Container>
        <p className="flex items-center justify-center whitespace-nowrap">
          &copy; 2022 IHC&trade;. Todos os direitos reservados.
        </p>
      </Container>
    </div>
  );
}
