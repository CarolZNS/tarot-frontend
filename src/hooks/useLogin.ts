import { api } from "@/api/services";
import { UserCredentials } from "@/types/userData";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  const login = async (values: UserCredentials) => {
    try {
      const { data } = await api.post("/auth/login", values);
      const { access_token } = data;

      await localStorage.setItem("token", access_token);

      router.push("/");
    } catch {
      alert("Email ou senha incorretos");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return { login, logout };
}
