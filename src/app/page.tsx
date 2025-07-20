"use client";

import CardDisplay from "@/components/CardDisplay";
import { TarotButton } from "@/components/TarotButton";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import useDrawCard from "@/hooks/useDrawCard";
import useLogin from "@/hooks/useLogin";

export default function Home() {
  const router = useRouter();
  const { card, drawCard, resetCard } = useDrawCard();
  const { logout } = useLogin();
  const [globalLoading, setGlobalLoading] = useState(true);

  const handleSubmit = async () => {
    await drawCard();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      }
      setGlobalLoading(false);
    }
  }, []);

  if (globalLoading) {
    return <Loading />;
  }

  return (
    <div className="relative min-w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-8 left-8 group cursor-pointer">
        <button
          onClick={logout}
          className="text-white hover:text-yellow-300 cursor-pointer"
        >
          <LogOut size={24} />
        </button>
        <span className="absolute left-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1">
          Deslogar
        </span>
      </div>

      <main className="flex flex-col items-center justify-center w-full text-center gap-[32px]">
        <h1 className="text-4xl font-bold">Leitura de cartas</h1>

        {card.name && <CardDisplay card={card} />}

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Puxar uma carta?</p>
          <TarotButton onClick={handleSubmit}>
            {card.name ? "Puxar outra carta" : "Puxar uma carta"}
          </TarotButton>
          {card.name && (
            <TarotButton onClick={resetCard}>Remover carta</TarotButton>
          )}
        </div>
      </main>
    </div>
  );
}
