'use client'
import { useEffect, useRef } from "react"

export default function IntroVideo() {

    const videoEl = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoEl) {
            videoEl.current?.play()
        }
    }, [])

    return (
        <video className="w-full object-cover h-screen" muted loop autoPlay preload="none" ref={videoEl}>
            <source type="video/mp4" src='/videos/entryVid.mp4' />
        </video>
    )
}