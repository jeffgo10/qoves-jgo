export function FaqPlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`size-5 ${className ?? ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaqMinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`size-5 ${className ?? ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaqCloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`size-4 shrink-0 ${className ?? ""}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
