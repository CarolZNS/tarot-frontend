interface TarotBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function TarotBackground({ children, className }: TarotBackgroundProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 to-black text-white ${className}`}>
      {children}
    </div>
  );
}
