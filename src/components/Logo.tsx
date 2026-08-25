type LogoProps = {
  light?: boolean;
  className?: string;
};

export function Logo({ light = false, className = "h-10 w-auto" }: LogoProps) {
  const wordmark = light ? "#F7F3EC" : "#1A4B6E";
  const accent = "#C4A574";

  return (
    <svg
      viewBox="0 0 268 52"
      className={className}
      role="img"
      aria-label="Realizzare Viagens"
    >
      <path
        d="M8 28h18l8-10 4 10 18 3-18 3-4 10-8-10H8l4-3z"
        fill={accent}
      />
      <text
        x="56"
        y="28"
        fill={wordmark}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="24"
        fontStyle="italic"
        fontWeight="600"
      >
        realizzare
      </text>
      <text
        x="58"
        y="44"
        fill={light ? "#C4A574" : "#1A4B6E"}
        fontFamily="system-ui, sans-serif"
        fontSize="8.5"
        letterSpacing="4.4"
        fontWeight="500"
      >
        VIAGENS
      </text>
    </svg>
  );
}
