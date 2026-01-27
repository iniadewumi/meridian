import { appText } from '@/appText'

export default function TrustedBy() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Proof language */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-[#888] leading-relaxed">
            {appText.home.trustedBy.text}
          </p>
        </div>
      </div>
    </section>
  )
}
