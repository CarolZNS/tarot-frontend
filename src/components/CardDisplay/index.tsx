import { CardData } from "@/types/api";

interface CardDisplayProps {
  card: CardData;
}
export default function CardDisplay({ card }: CardDisplayProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-2xl p-4 rounded-lg shadow-md gap-2 bg-white/10">
      <h4 className="text-xl">{card.name}</h4>
      <p>Tipo: {card.type}</p>
      <p>Descrição: {card.description}</p>
      <p>Invertida: {card.reversedDescription}</p>
    </section>
  );
}
