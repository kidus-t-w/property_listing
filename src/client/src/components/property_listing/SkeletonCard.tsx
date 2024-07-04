import { Skeleton } from "@/components/ui/skeleton";

export default function PropertySkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-60 w-80 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
