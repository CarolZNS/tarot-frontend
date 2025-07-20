import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-1.5">
      <h2 className="text-5xl">404 - Not Found</h2>
      <div>
        <p>Página não encontrada</p>
        <Link href="/" className="hover:underline hover:underline-offset-2">
          Voltar para a home
        </Link>
      </div>
    </section>
  );
}
