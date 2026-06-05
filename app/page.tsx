import GptAdSlot from '@/components/GptAdSlot'

const AD_UNIT_PATH = '/your-network-code/your-ad-unit'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">GAM HTML5 Tester</h1>

      <section className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500">300 x 250</p>
        <div className="bg-white shadow">
          <GptAdSlot
            adUnitPath={AD_UNIT_PATH}
            size={[300, 250]}
            divId="div-gpt-ad-300x250"
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500">728 x 90</p>
        <div className="bg-white shadow">
          <GptAdSlot
            adUnitPath={AD_UNIT_PATH}
            size={[728, 90]}
            divId="div-gpt-ad-728x90"
          />
        </div>
      </section>
    </main>
  )
}
