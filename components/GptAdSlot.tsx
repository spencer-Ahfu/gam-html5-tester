'use client'

import { useEffect, useRef } from 'react'

interface GptAdSlotProps {
  adUnitPath: string
  size: googletag.GeneralSize
  divId: string
}

export default function GptAdSlot({ adUnitPath, size, divId }: GptAdSlotProps) {
  const registered = useRef(false)

  useEffect(() => {
    if (registered.current) return
    registered.current = true

    window.googletag = window.googletag || { cmd: [] }
    window.googletag.cmd.push(() => {
      window.googletag
        .defineSlot(adUnitPath, size, divId)
        ?.addService(window.googletag.pubads())
      window.googletag.pubads().enableSingleRequest()
      window.googletag.enableServices()
      window.googletag.display(divId)
    })
  }, [adUnitPath, size, divId])

  return <div id={divId} />
}
