export default function Logo() {
  return (
    <svg
      viewBox="0 0 340 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="none" />

      {/* Shopping bag icon with gradient */}
      <g>
        <rect x="10" y="20" width="60" height="60" rx="10" ry="10" fill="url(#grad1)" />
        <path d="M 20 40 Q 30 20, 40 40" stroke="#fff" strokeWidth="3" fill="none" />
        <line x1="30" y1="20" x2="50" y2="20" stroke="#fff" strokeWidth="3" />
      </g>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff7e5f', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#feb47b', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Store name text */}
      <text x="80" y="60" fontFamily="Verdana, sans-serif" fontSize="35" fill="#ff7e5f" fontWeight="bold">
        Aliana Store
      </text>
    </svg>
  );
}
