export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="12" fill="#1a2040" />
      <circle cx="50" cy="45" r="22" stroke="#c9a227" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="50" cy="45" r="13" stroke="#c9a227" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="3 3" />
      <circle cx="50" cy="45" r="3" fill="#c9a227" opacity="0.7" />
      <text x="50" y="84" fill="#c9a227" fontFamily="serif" fontStyle="italic" fontSize="11" textAnchor="middle" opacity="0.5">saudade</text>
    </svg>
  );
}
