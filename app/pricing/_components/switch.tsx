import { type ChangeEventHandler, useId } from 'react'
import clsx from 'clsx/lite'

interface Properties {
  isYearly: boolean
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export default function Switch({ isYearly, handleChange }: Properties) {
  const id = useId()

  return (
    <div
      className={'flex items-center justify-center gap-x-8 text-lg font-bold'}
    >
      <label
        className={clsx('transition-opacity', isYearly && 'opacity-50')}
        htmlFor={id}
      >
        Monthly
      </label>
      <label className="h-8 w-16 rounded-full bg-gray p-1">
        <input
          className={clsx(
            'size-6 appearance-none rounded-full bg-black',
            'transition-transform checked:translate-x-8'
          )}
          type="checkbox"
          id={id}
          checked={isYearly}
          onChange={handleChange}
        />
      </label>
      <label
        className={clsx('transition-opacity', !isYearly && 'opacity-50')}
        htmlFor={id}
      >
        Yearly
      </label>
    </div>
  )
}
