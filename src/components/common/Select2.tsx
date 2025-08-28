'use client'
import React, { useState, useRef, useEffect } from 'react'

interface Option {
  id: string | number
  label: string
  avatar?: string
  initials?: string
}

interface SelectProps {
  options: Option[]
  placeholder?: string
  icon?: React.ReactNode
}

export default function Select({ options, placeholder, icon }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  )

  // Single select toggle: select clicked item
  const selectItem = (id: string | number) => {
    setSelected(id)
    setOpen(false) // close dropdown on select
  }

  return (
    <div className="relative w-35" ref={containerRef}>
      {/* Select input */}
      <div
        className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer select-none bg-white"
        onClick={() => setOpen((o) => !o)}>
        {icon}
        <div className="flex flex-wrap gap-1">
          {selected === null ? (
            <span className="text-gray-500 text-sm">
              {placeholder || 'Select an option'}
            </span>
          ) : (
            options.find((o) => o.id === selected)?.label
          )}
        </div>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown list */}
      {open && (
        <div className="absolute z-10 mt-1 py-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {/* Search input */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder={`Search TC`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Options */}
          <ul className="p-2 overflow-auto">
            {filtered.length === 0 && (
              <li className="px-4 py-2 text-gray-500 text-sm text-center">
                No results found
              </li>
            )}
            {filtered.map((opt) => (
              <li
                key={opt.id}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected === opt.id ? 'bg-gray-200' : ''
                }`}
                onClick={() => selectItem(opt.id)}>
                <input
                  type="checkbox"
                  checked={selected === opt.id}
                  onChange={() => selectItem(opt.id)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                />
                {opt.avatar ? (
                  <img
                    src={opt.avatar}
                    alt={opt.label}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {opt.initials}
                  </div>
                )}
                <span className="text-gray-900 text-sm">{opt.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
