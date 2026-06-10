'use client'

import GptAdSlot from '@/components/GptAdSlot'

const AD_UNIT_PATH = '/23300104091/test_spencer_yang/test_html_ad_unit'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">GAM HTML5 Tester</h1>

      <section className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500">1024 x 768</p>
        <div className="bg-white shadow">
          <GptAdSlot
            adUnitPath={AD_UNIT_PATH}
            size={[1024, 768]}
            divId="div-gpt-ad-1024x768"
          />
        </div>
      </section>
    </main>
  )
}
