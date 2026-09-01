import Image from "next/image";

export function PromoBanner() {
  return (
    <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[1328/400] sm:aspect-[1328/360]">
      <Image
        src="/images/banner.png"
        alt="Engineered for Awesome Dads"
        fill
        priority
        sizes="(max-width: 1328px) 100vw, 1328px"
        className="object-cover w-full h-full"
      />
    </div>
  );
}