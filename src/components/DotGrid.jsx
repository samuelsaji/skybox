'use client'
import { useEffect, useMemo, useState } from 'react'

const DotGrid = ({
  dotSize = 5,
  gap = 22,
  baseColor = '#121212',
  activeColor = '#ff6b1a',
  proximity = 110,
  className = '',
  style
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateSize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const handleMove = (event) => {
      setPointer({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  const dots = useMemo(() => {
    if (!dimensions.width || !dimensions.height) return []

    const cols = Math.max(1, Math.floor((dimensions.width + gap) / (dotSize + gap)))
    const rows = Math.max(1, Math.floor((dimensions.height + gap) / (dotSize + gap)))
    const cell = dotSize + gap

    const gridW = cell * cols - gap
    const gridH = cell * rows - gap
    const extraX = dimensions.width - gridW
    const extraY = dimensions.height - gridH
    const startX = extraX / 2 + dotSize / 2
    const startY = extraY / 2 + dotSize / 2

    const items = []

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const left = startX + x * cell
        const top = startY + y * cell
        const dx = left - pointer.x
        const dy = top - pointer.y
        const distance = Math.hypot(dx, dy)
        const active = distance < proximity
        const offsetX = active ? (dx / Math.max(distance, 1)) * 7 : 0
        const offsetY = active ? (dy / Math.max(distance, 1)) * 7 : 0

        items.push({
          left,
          top,
          active,
          offsetX,
          offsetY,
          opacity: active ? 1 : 0.35,
          scale: active ? 1.35 : 1,
        })
      }
    }

    return items
  }, [dimensions, pointer, dotSize, gap, proximity])

  return (
    <section
      className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}
      style={{ ...style, background: 'transparent' }}
    >
      <div className="relative h-full w-full">
        {dots.map((dot, index) => (
          <span
            key={`${dot.left}-${dot.top}-${index}`}
            className="absolute rounded-full transition-all duration-200 ease-out"
            style={{
              width: dotSize,
              height: dotSize,
              left: dot.left,
              top: dot.top,
              backgroundColor: dot.active ? activeColor : baseColor,
              opacity: dot.opacity,
              transform: `translate(${dot.offsetX}px, ${dot.offsetY}px) scale(${dot.scale})`,
              boxShadow: dot.active ? `0 0 0 1px ${activeColor}22` : 'none',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default DotGrid

