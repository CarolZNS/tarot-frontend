import { FieldError, UseFormRegister } from "react-hook-form";

interface TarotInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;
  errors: FieldError | undefined;
  id: "email" | "password";
  helperText?: string;
}

export default function TarotInput({
  label,
  register,
  errors,
  id,
  className,
  helperText,
  ...props
}: TarotInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        {...props}
        {...register(id)}
        className={`w-full p-2 rounded bg-white/20 ${
          errors && "border-rose-400 border"
        } ${className}`}
      />
      {helperText && (
        <p className="text-xs font-thin text-gray-400 min-h-[20px]">{helperText}</p>
      )}
      {errors && <p className="text-rose-400 text-sm min-h-[20px]">{errors.message}</p>}
    </div>
  );
}
