export default function Container({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`max-w-screen-sm mx-auto px-6 ${className ?? ''}`}>
      {children}
    </div>
  );
}
