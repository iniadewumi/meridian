'use client'

import { useEffect, useRef } from 'react'

export default function DynamicGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    // Create grid cells dynamically
    const createGrid = () => {
      const cellSize = 100 // Size of each grid cell in pixels
      const cols = Math.ceil(window.innerWidth / cellSize) + 1
      const rows = Math.ceil(window.innerHeight / cellSize) + 1
      
      grid.innerHTML = ''
      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
      grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`

      // Create cells
      let highlightedCount = 0
      for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement('div')
        cell.className = 'grid-cell'
        cell.style.setProperty('--cell-index', String(i))
        
        // Randomly highlight some cells (like compliance badges in delve.co)
        // Limit to about 5-8 highlighted cells
        if (Math.random() < 0.03 && highlightedCount < 8) {
          cell.classList.add('highlighted')
          highlightedCount++
        }
        
        // Add subtle hover effect
        cell.addEventListener('mouseenter', () => {
          if (!cell.classList.contains('highlighted')) {
            cell.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            cell.style.background = 'rgba(255, 255, 255, 0.01)'
          }
        })
        
        cell.addEventListener('mouseleave', () => {
          if (!cell.classList.contains('highlighted')) {
            cell.style.borderColor = ''
            cell.style.background = ''
          }
        })
        
        grid.appendChild(cell)
      }
    }

    createGrid()
    
    // Recreate grid on resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        createGrid()
      }, 150)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <>
      {/* Gradient background - similar to delve.co */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-black/50 to-orange-900/30"
        aria-hidden="true"
      />
      
      {/* Additional gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"
        aria-hidden="true"
      />
      
      {/* Dynamic grid overlay */}
      <div
        ref={gridRef}
        className="dynamic-grid absolute inset-0"
        aria-hidden="true"
      />
    </>
  )
}
