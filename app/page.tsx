'use client'

import GptAdSlot from '@/components/GptAdSlot'

const AD_UNIT_PATH = '/23300104091/test_spencer_yang/test_html_ad_unit'
const SLOT_WIDTH = 970
const SLOT_HEIGHT = 250

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">GAM HTML5 Tester</h1>

      <section className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500">
          {SLOT_WIDTH} x {SLOT_HEIGHT}
        </p>
        <div className="bg-white shadow">
          <GptAdSlot
            adUnitPath={AD_UNIT_PATH}
            size={[SLOT_WIDTH, SLOT_HEIGHT]}
            divId={`div-gpt-ad-${SLOT_WIDTH}x${SLOT_HEIGHT}`}
          />
        </div>
      </section>
    </main>
  )
}
