function Pill({ children, className = '' }) {
  return (
    <span
      className={`rounded-full border px-4 py-1.5 font-mono text-[12px] font-semibold tracking-[0.05em] ${className}`}
    >
      {children}
    </span>
  )
}

export default Pill
