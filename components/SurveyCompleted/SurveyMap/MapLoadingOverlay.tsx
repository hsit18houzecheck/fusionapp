import { cn } from "@/lib/utils";
import Image from "next/image";
import { LoaderOne } from "@/components/ui/loader";

export default function MapLoadingOverlay({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#F7DE8C]",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src="/assets/images/map-loading.png"
        alt="Map Loading Background"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* Marker Icon - Positioned relative to the background design */}
      <div className="absolute top-[0] left-[0]">
        <Image
          src="/assets/images/map-loading-path.png"
          alt="Map Marker"
          width={650}
          height={650}
          className="drop-shadow-lg w-[350px] h-auto md:w-[650px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 mt-10">
        <LoaderOne />

        <p className="font-freight text-6 text-yellow-900 font-medium tracking-wide leading-6 md:leading-7">
          Pulling job history data...
        </p>
      </div>
    </div>
  );
}
