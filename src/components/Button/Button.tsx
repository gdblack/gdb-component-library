import React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  hoverTransition?: boolean
}
const baseStyles = 'font-semibold'
const transitionStyles =
  'transition ease-in-out duration-300 hover:scale-110 hover:-translate-y-1'
const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
}

const sizeStyles = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const radiusStyles = {
  none: 'rounded-none',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
}

const cn = (...c: Array<string | undefined | false>) =>
  c.filter(Boolean).join(' ')

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      radius = 'md',
      hoverTransition = true,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          radiusStyles[radius],
          hoverTransition ? transitionStyles : '',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
