"use client";
import { TarotButton } from "@/components/TarotButton";
import TarotInput from "@/components/TarotInput";
import useLogin from "@/hooks/useLogin";
import { UserCredentials } from "@/types/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.email("Email inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: UserCredentials) => {
    setLoading(true);
    await login(data)
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl mb-6 font-bold">Login Tarot</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white/10 p-6 rounded shadow w-90"
      >
        <TarotInput
          label="Email"
          register={register}
          errors={errors.email}
          id="email"
          type="email"
          placeholder="Email"
        />

        <TarotInput
          label={"Senha"}
          register={register}
          errors={errors.password}
          id="password"
          type="password"
          placeholder="Senha"
        />

        <TarotButton type="submit" fullWidth loading={loading}>
          Entrar
        </TarotButton>
        <p>
          Ainda não possui cadastro?{" "}
          <Link
            href={"/register"}
            className="text-golden hover:text-yellow-600 hover:underline hover:underline-offset-2"
          >
            Cadastre-se aqui.
          </Link>
        </p>
      </form>
    </>
  );
}
