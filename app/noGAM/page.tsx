'use client'

const IFRAME_URL =
  'https://www.viverse.com/LpcA8dm?full3d=&no-cookie=&autoplay=1&controls=0&utm_campaign=bloxdio_noGAM'
const CLICK_URL = 'https://www.viverse.com/LpcA8dm'
const SLOT_WIDTH = 970
const SLOT_HEIGHT = 250

export default function NoGam() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">
        No GAM (Direct iframe)
      </h1>

      <section className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500">
          {SLOT_WIDTH} x {SLOT_HEIGHT}
        </p>
        <div
          className="relative bg-white shadow"
          style={{ width: SLOT_WIDTH, height: SLOT_HEIGHT }}
        >
          <iframe
            src={IFRAME_URL}
            width={1024}
            height={768}
            style={{ border: 'none', display: 'block' }}
            allowFullScreen
            title="GTA"
          />
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => window.open(CLICK_URL, '_blank')}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 break-all max-w-3xl text-center">
          {IFRAME_URL}
        </p>
      </section>
    </main>
  )
}
