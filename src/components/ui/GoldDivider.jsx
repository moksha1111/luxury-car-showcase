export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px bg-gold flex-1 max-w-12 opacity-60" />
      <div className="w-1.5 h-1.5 bg-gold rotate-45" />
      <div className="h-px bg-gold flex-1 max-w-12 opacity-60" />
    </div>
  );
}
