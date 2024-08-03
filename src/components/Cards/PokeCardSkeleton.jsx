import { Skeleton } from "@/components/ui/skeleton";

export default function PokeCardSkeleton() {
  //array of 20 elements
  const arr = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="grid grid-flow-row auto-rows-max gap-4 grid-cols-card mt-[2.5rem]">
      {arr.map((_, i) => (
        <Skeleton key={`skeleton-${i}`} className="w-full h-[14.6rem]" />
      ))}
    </div>
  );
}
