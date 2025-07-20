import TarotBackground from "@/components/TarotBackground";
import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white gap-3.5">
      <BeatLoader color="#ffe58a" size={32}/>
      <p>Carregando..</p>
    </div>
  );
}
