import { api } from "@/api/services";
import { UserCredentials } from "@/types/userData";
import { useRouter } from "next/navigation";


export default function useRegisterUser() {
  const router = useRouter();

  const registerUser = async (data: UserCredentials) => {
    try {
      await api.post("/auth/register", data);
      router.push('/login');
    } catch (error: any) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return { registerUser };
}
