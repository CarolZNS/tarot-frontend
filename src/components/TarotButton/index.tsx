import { FadeLoader, MoonLoader } from "react-spinners";

interface TarotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}
export function TarotButton({
  children,
  fullWidth = false,
  className,
  loading,
  ...props
}: TarotButtonProps) {
  return (
    <button
      {...props}
      className={`bg-golden text-[#1e2328] font-bold uppercase py-2 rounded hover:bg-yellow-600 active:bg-yellow-700 flex justify-center ${
        fullWidth ? "w-full" : "px-4"
      } 
      ${(loading || props.disabled) ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
      disabled={loading || props.disabled}
    >
      {loading ? <MoonLoader color="#1e2328" size={16} /> : children}
    </button>
  );
}
