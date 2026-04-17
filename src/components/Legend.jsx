import { legendItems } from '../lib/topicMeta'

function Legend() {
  return (
    <section className="flex flex-wrap justify-center gap-3 border-b border-app-border px-4 py-[18px] sm:gap-4 sm:px-6">
      {legendItems.map((item) => (
        <div key={item.key} className="flex items-center gap-[7px] font-mono text-[12px] text-app-muted">
          <span className="h-[10px] w-[10px] rounded-full" style={{ background: item.dot }} />
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  )
}

export default Legend
