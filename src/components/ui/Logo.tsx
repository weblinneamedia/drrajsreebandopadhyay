import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  name?: string;
  title?: string;
  className?: string;
  href?: string;
  invertText?: boolean;
}

const sizes = {
  sm: 36,
  md: 44,
  lg: 56,
};

export function Logo({
  size = "md",
  showText = true,
  name,
  title,
  className,
  href = "/",
  invertText = false,
}: LogoProps) {
  const dimension = sizes[size];

  const content = (
    <>
      <Image
        src="/images/logo.png"
        alt="Dr. Rajsree logo"
        width={dimension}
        height={dimension}
        className="rounded-full shrink-0"
        priority
      />
      {showText && name && (
        <div className="hidden sm:block">
          <p
            className={cn(
              "font-heading font-bold text-lg leading-tight",
              invertText ? "text-white" : "text-navy"
            )}
          >
            {name}
          </p>
          {title && (
            <p
              className={cn(
                "text-xs",
                invertText ? "text-slate-300" : "text-slate-500"
              )}
            >
              {title}
            </p>
          )}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("flex items-center gap-3", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn("flex items-center gap-3", className)}>{content}</div>;
}
