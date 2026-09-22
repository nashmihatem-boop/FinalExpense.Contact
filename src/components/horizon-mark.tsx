type HorizonMarkProps = {
  className?: string;
};

/** The site's signature mark: two chevrons moving forward together — comparing, then deciding, fast. */
export function HorizonMark({ className }: HorizonMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13 11 L25 24 L13 37"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-harbor"
      />
      <path
        d="M23 11 L35 24 L23 37"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brass"
      />
    </svg>
  );
}
