import Image from "next/image";
export default function SlashScreen() {
  return (
    <div className="w-full h-screen bg-brand flex flex-col items-center justify-center">
      <div className="relative w-54.25 h-50.25 ">
        <Image
          src="/Frame-472.png"
          alt="splash-logo"
          fill
          className="object-cover"
        />
      </div>
      <div className=" text-center">
      <h2 className="font-bold text-[#FFFFFF] text-2xl tracking-wide mb-2">Space Commerce</h2>
      <p className="text-[#FFFFFF] text-caption font-medium leading-none">SHOP BEYOND LIMITS</p>
      </div>
    </div>
  );
}
