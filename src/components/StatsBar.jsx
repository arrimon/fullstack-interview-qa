import { statItems } from '../lib/topicMeta'

function StatsBar() {
  return (
    <section className="flex flex-wrap justify-center border-b border-app-border">
      {statItems.map((item, index) => (
        <div
          key={item.key}
          className={`min-w-[100px] flex-1 px-4 py-[18px] text-center sm:min-w-[120px] sm:px-6 ${
            index !== statItems.length - 1 ? 'border-r border-app-border' : ''
          }`}
        >
          <div className="mb-1 text-[26px] leading-none font-extrabold" style={{ color: item.color }}>
            {item.value}
          </div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-app-muted">{item.label}</div>
        </div>
      ))}
    </section>
  )
}

export default StatsBar
