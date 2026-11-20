import Image from "next/image";

export function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3 font-bold tracking-tight">
      <Image src="/mh-logo.svg" alt="" width={40} height={40} unoptimized />
      <span>Mohamed Haytham</span>
    </a>
  );
}
