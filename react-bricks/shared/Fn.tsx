import React from 'react'
import { highlightTextColors } from '../shared/colors'

export function getClassName(any, type: string) {
  let className: string

  let index = 0
  for (const [key, value] of Object.entries(highlightTextColors)) {
    if (any.color === value.value.color) {
      if (index === 0)
        return type === 'textColor'
          ? (className = 'text-gray-500 dark:text-white')
          : type === 'border'
          ? 'border-t-gray-500'
          : type === 'tag'
          ? 'bg-gray-500'
          : 'border-gray-500 hover:bg-gray-500'
      if (index === 1)
        return type === 'textColor'
          ? (className = 'text-red-500 dark:text-red-400')
          : type === 'border'
          ? 'border-t-red-500'
          : type === 'tag'
          ? 'bg-red-500'
          : 'border-red-500 hover:bg-red-500'
      if (index === 2)
        return type === 'textColor'
          ? (className = 'text-orange-500 dark:text-white')
          : type === 'border'
          ? 'border-t-orange-500'
          : type === 'tag'
          ? 'bg-orange-500'
          : 'border-orange-500 hover:bg-orange-500'
      if (index === 3)
        return type === 'textColor'
          ? (className = 'text-amber-500 dark:text-white')
          : type === 'border'
          ? 'border-t-amber-500'
          : type === 'tag'
          ? 'bg-amber-500'
          : 'border-amber-500 hover:bg-amber-500'
      if (index === 4)
        return type === 'textColor'
          ? (className = 'text-yellow-500 dark:text-yellow')
          : type === 'border'
          ? 'border-t-yellow-500'
          : type === 'tag'
          ? 'bg-yellow-500'
          : 'border-yellow-500 hover:bg-yellow-500'
      if (index === 5)
        return type === 'textColor'
          ? (className = 'text-lime-500 dark:text-lime')
          : type === 'border'
          ? 'border-t-lime-500'
          : type === 'tag'
          ? 'bg-lime-500'
          : 'border-lime-500 hover:bg-lime-500'
      if (index === 6)
        return type === 'textColor'
          ? (className = 'text-green-500 dark:text-green')
          : type === 'border'
          ? 'border-t-green-500'
          : type === 'tag'
          ? 'bg-green-500'
          : 'border-green-500 hover:bg-green-500'
      if (index === 7)
        return type === 'textColor'
          ? (className = 'text-emerald-500 dark:text-emerald')
          : type === 'border'
          ? 'border-t-emerald-500'
          : type === 'tag'
          ? 'bg-emerald-500'
          : 'border-emerald-500 hover:bg-emerald-500'
      if (index === 8)
        return type === 'textColor'
          ? (className = 'text-teal-500 dark:text-teal')
          : type === 'border'
          ? 'border-t-teal-500'
          : type === 'tag'
          ? 'bg-teal-500'
          : 'border-teal-500 hover:bg-teal-500'
      if (index === 9) return (className = 'text-cyan-500 dark:text-cyan-400')
      if (index === 10) return (className = 'text-sky-500 dark:text-sky-400')
      if (index === 11) return (className = 'text-blue-500 dark:text-blue-400')
      if (index === 12)
        return (className = 'text-indigo-500 dark:text-indigo-400')
      if (index === 13)
        return (className = 'text-violet-500 dark:text-violet-400')
      if (index === 14)
        return (className = 'text-purple-500 dark:text-purple-400')
      if (index === 15)
        return (className = 'text-fuchsia-500 dark:text-fuchsia-400')
      if (index === 16) return (className = 'text-pink-500 dark:text-pink-400')
      if (index === 17) return (className = 'text-rose-500 dark:text-rose-400')
      if (index === 18)
        return (className = 'text-black-500 dark:text-white-500')
    }

    index++
  }

  console.log(any)
  return className
}
