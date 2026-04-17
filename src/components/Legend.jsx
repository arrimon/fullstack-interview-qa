import { legendItems } from '../lib/topicMeta'

function Legend() {
  return (
    <section className="flex flex-wrap justify-center gap-4 border-b border-app-border px-6 py-[18px]">
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
