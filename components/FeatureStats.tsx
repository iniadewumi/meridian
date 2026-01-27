interface StatProps {
  value: string
  label: string
  description: string
}

const stats: StatProps[] = [
  {
    value: '100%',
    label: 'Uptime',
    description: 'Powering mission-critical applications with zero downtime',
  },
  {
    value: '2.5s',
    label: 'LCP',
    description: 'Optimized for Core Web Vitals and exceptional performance',
  },
  {
    value: '10x',
    label: 'Faster',
    description: 'Development velocity compared to traditional approaches',
  },
]

function StatCard({ value, label, description }: StatProps) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-lg p-8 hover:border-[#666] transition-all duration-300">
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-extrabold tracking-tighter">
            {value}
          </span>
          <span className="text-xl text-[#888] font-medium">
            {label}
          </span>
        </div>
        <p className="text-[#888] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function FeatureStats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-[#888] max-w-2xl mx-auto">
            Real-world results from teams shipping production applications
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
