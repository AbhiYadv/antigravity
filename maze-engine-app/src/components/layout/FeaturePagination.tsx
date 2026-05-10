import Link from "next/link";
import { featuresData } from "@/data/features";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturePagination({ currentSlug }: { currentSlug: string }) {
  const currentIndex = featuresData.findIndex((f) => f.slug === currentSlug);
  const prev = currentIndex > 0 ? featuresData[currentIndex - 1] : null;
  const next = currentIndex < featuresData.length - 1 ? featuresData[currentIndex + 1] : null;

  return (
    <section className="border-t border-border-color bg-bg-alt/30">
      <div className="container mx-auto px-8 max-w-5xl py-8">
        <div className="flex items-stretch justify-between gap-4">
          {prev ? (
            <Link
              href={`/features/${prev.slug}`}
              className="group flex-1 flex items-center gap-4 glass-card rounded-xl border border-border-color p-5 hover:border-accent-1/50 transition-all hover:-translate-x-1"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-accent-1 transition-colors shrink-0" />
              <div className="text-right flex-1 min-w-0">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Previous</div>
                <div className="text-white font-bold text-sm truncate group-hover:text-accent-1 transition-colors">{prev.title}</div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/features/${next.slug}`}
              className="group flex-1 flex items-center gap-4 glass-card rounded-xl border border-border-color p-5 hover:border-accent-1/50 transition-all hover:translate-x-1"
            >
              <div className="text-left flex-1 min-w-0">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Next</div>
                <div className="text-white font-bold text-sm truncate group-hover:text-accent-1 transition-colors">{next.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-accent-1 transition-colors shrink-0" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
