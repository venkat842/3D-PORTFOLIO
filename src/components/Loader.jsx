export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050812] flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-5">
        {/* Dual counter-rotating rings */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-500 animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '0.7s' }}
          />
          <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>
        <p
          className="font-mono text-xs tracking-[0.25em] text-slate-500 animate-pulse"
          aria-live="polite"
        >
          LOADING
        </p>
      </div>
    </div>
  )
}
