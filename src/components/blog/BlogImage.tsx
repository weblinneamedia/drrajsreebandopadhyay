import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function BlogImage({
  src,
  alt,
  className,
  containerClassName,
  priority,
  sizes,
}: BlogImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
      />
    </div>
  );
}
