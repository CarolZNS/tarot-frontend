"use client";
import { TarotButton } from "@/components/TarotButton";
import TarotInput from "@/components/TarotInput";
import useRegisterUser from "@/hooks/useRegisterUser";
import { UserCredentials } from "@/types/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default function Register() {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const router = useRouter();

  const onSubmit = async (data: UserCredentials) => {
    setLoading(true);
    await registerUser(data);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl mb-6 font-bold">Registre-se</h1>
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
          helperText="A senha deve ter no mínimo 6 caracteres."
        />
        <TarotButton fullWidth loading={loading}>Registrar</TarotButton>
        <p>
          Já possui cadastro?{" "}
          <Link
            href={"/"}
            className="text-golden hover:text-yellow-600 hover:underline hover:underline-offset-2"
          >
            Faça login.
          </Link>
        </p>
      </form>
    </>
  );
}
