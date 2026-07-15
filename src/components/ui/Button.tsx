import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  whatsapp: "btn-whatsapp",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(variants[variant], className, disabled && "opacity-50 pointer-events-none");

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
