import { api } from "@/api/services";
import { CardData } from "@/types/api";
import { useState } from "react";

export default function useDrawCard() {
  const [card, setCard] = useState<CardData>({
    name: "",
    type: "",
    description: "",
    reversedDescription: "",
  });

  const drawCard = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa estar logado para puxar uma carta.");
        return;
      }

      const { data } = await api.get("/draw_card");
      const drawnCard = data.cards[0];

      setCard({
        name: drawnCard.name,
        type: drawnCard.type,
        description: drawnCard.meaning_up,
        reversedDescription: drawnCard.meaning_rev,
      });
    } catch (error) {
      console.error("Erro ao puxar a carta:", error);
    }
  };

  const resetCard = () => {
    setCard({
      name: "",
      type: "",
      description: "",
      reversedDescription: "",
    });
  };

  return { card, drawCard, resetCard };
}
