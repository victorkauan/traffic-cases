export default function Container({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`max-w-screen-2xl mx-auto px-6 ${className ?? ''}`}>
      {children}
    </div>
  );
}
