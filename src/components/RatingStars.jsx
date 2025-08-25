import React from "react";

export default function RatingStars({ value = 0, onChange, size = "md", readOnly = false, idPrefix = "star" }) {
  const stars = [1, 2, 3, 4, 5];
  const s = size === "sm" ? 18 : 24;
  return (
    <div className="stars" role={readOnly ? undefined : "radiogroup"} aria-label="Rating">
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? "is-on" : ""} ${readOnly ? "is-readonly" : ""}`}
          onClick={() => !readOnly && onChange?.(n)}
          onMouseEnter={(e) => e.currentTarget.classList.add("is-hover")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("is-hover")}
          aria-checked={n === value}
          role={readOnly ? undefined : "radio"}
          title={`${n} star${n>1?"s":""}`}
          id={`${idPrefix}-${n}`}
        >
          <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2l2.97 6.02 6.65.97-4.81 4.69 1.14 6.64L12 17.77 6.05 20.32l1.14-6.64L2.38 9l6.65-.97L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
}