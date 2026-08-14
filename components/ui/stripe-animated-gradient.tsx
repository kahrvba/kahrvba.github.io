"use client"

import React, { useEffect, useRef } from "react"

import { Gradient } from "@/components/ui/stripe-shader"

interface GradientInstance {
  initGradient: (canvas: HTMLCanvasElement | string) => void
  angle?: number
  amp?: number
  seed?: number
  freqX?: number
  freqY?: number
  freqDelta?: number
  height?: number
  conf?: {
    density?: number[]
  }
}

interface AnimatedGradientProps {
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  angle?: number
  amp?: number
  seed?: number
  freqX?: number
  freqY?: number
  freqDelta?: number
  height?: number
  density?: number[]
  className?: string
  style?: React.CSSProperties
}

export function AnimatedGradient({
  color1 = "#a960ee",
  color2 = "#ff333d",
  color3 = "#90e0ff",
  color4 = "#ffcb57",
  angle,
  amp,
  seed,
  freqX,
  freqY,
  freqDelta,
  height,
  density,
  className,
  style,
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const gradient = new (Gradient as unknown as { new (): GradientInstance })()
    if (angle !== undefined) gradient.angle = angle
    if (amp !== undefined) gradient.amp = amp
    if (seed !== undefined) gradient.seed = seed
    if (freqX !== undefined) gradient.freqX = freqX
    if (freqY !== undefined) gradient.freqY = freqY
    if (freqDelta !== undefined) gradient.freqDelta = freqDelta
    if (height !== undefined) gradient.height = height
    if (canvasRef.current) {
      gradient.initGradient(canvasRef.current)
      if (density !== undefined && gradient.conf) {
        gradient.conf.density = density
      }
    }
  }, [
    color1,
    color2,
    color3,
    color4,
    angle,
    amp,
    seed,
    freqX,
    freqY,
    freqDelta,
    height,
    density,
  ])

  return (
    <canvas
      ref={canvasRef}
      style={
        {
          "--gradient-color-1": color1,
          "--gradient-color-2": color2,
          "--gradient-color-3": color3,
          "--gradient-color-4": color4,
          ...style,
        } as React.CSSProperties
      }
      className={`absolute inset-0 z-0 h-full w-full rounded-[inherit]${
        className ? ` ${className}` : ""
      }`}
    />
  )
}
