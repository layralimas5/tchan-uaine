import { useEffect } from "react";
import { X } from "lucide-react";

export type Restaurant = {
  name: string;
  city: string;
  description: string;
  longDescription: string;
  cover: string;
  gallery: string[];
  logo?: string;
};

export function RestaurantModal({
  restaurant,
  onClose,
}: {
  restaurant: Restaurant | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!restaurant) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [restaurant, onClose]);

  if (!restaurant) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4 md:p-8 bg-[oklch(0.08_0.04_18/0.85)] backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[var(--cream)] text-[var(--wine)] animate-reveal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 grid place-items-center h-10 w-10 bg-[var(--wine)] text-[var(--cream)] hover:bg-[var(--accent)] hover:text-[var(--wine)] transition-colors"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={restaurant.cover}
            alt={restaurant.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.06_18/0.7)] to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="eyebrow text-[var(--accent)]">{restaurant.city}</p>
            <h3
              className="mt-3 text-4xl md:text-6xl text-[var(--cream)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {restaurant.name}
            </h3>
          </div>
        </div>

        <div className="p-8 md:p-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">A Experiência</p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--wine)]/85">
              {restaurant.longDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {restaurant.gallery.map((g, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
              >
                <img src={g} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
