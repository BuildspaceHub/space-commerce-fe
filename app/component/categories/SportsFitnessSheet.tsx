import { ChevronRight } from "lucide-react";

type SportsFitnessSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

const sportsCategories = [
  "Running",
  "Football",
  "Basketball",
  "Skating",
  "Fitness",
  "Cycling",
  "Tennis",
];

function SportsFitnessSheet({
  isOpen,
  onClose,
}: SportsFitnessSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">

      {/* ================= BACKDROP ================= */}
      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/30
          backdrop-blur-[2px]
        "
      />

      {/* ================= BOTTOM SHEET ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[40vh]
          rounded-t-[20px]
          bg-white
          px-3
          pt-3
          shadow-2xl
          animate-slide-up
        "
      >

        {/* Handle */}
        <div className="mx-auto mb-3 h-[2px] w-12 rounded-full bg-gray-400" />

        {/* Title */}
        <div className="border-b border-gray-200 pb-2">
          <h2 className="text-[13px] font-medium text-left text-gray-900">
            Sports & Fitness
          </h2>
        </div>

        {/* Subcategories */}
        <div>
          {sportsCategories.map((category) => (
            <button
              key={category}
              className="
                flex
                h-[25px]
                w-full
                items-center
                justify-between
                border-b
                border-gray-100
                text-left
              "
            >
              <span className="text-[10px] text-gray-800">
                {category}
              </span>

              <ChevronRight
                size={13}
                strokeWidth={1.5}
                className="text-gray-600"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default SportsFitnessSheet;