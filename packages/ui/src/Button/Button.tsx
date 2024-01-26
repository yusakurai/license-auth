import type { RecipeVariantProps } from '@license-auth/styled-system/css'
import { cva } from '@license-auth/styled-system/css'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

/**
 * Styles
 */
const buttonStyle = cva({
  base: {
    borderRadius: '4px',
    cursor: 'pointer',
  },
  variants: {
    size: {
      sm: { py: '6px', px: '12px', fontSize: '14px' },
      md: { py: '8px', px: '16px', fontSize: '16px' },
      lg: { py: '10px', px: '20px', fontSize: '18px' },
    },
    variant: {
      solid: {
        '&:hover': {
          opacity: 0.8,
        },
      },
      outline: {
        borderWidth: '1px',
      },
      ghost: {},
    },
    // NOTE: ButtonHTMLAttributes<HTMLButtonElement> には color が含まれているため、colors として定義
    colors: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      colors: 'primary',
      css: {
        bg: 'primary',
        color: 'white',
      },
    },
    {
      variant: 'solid',
      colors: 'secondary',
      css: {
        bg: 'secondary',
        color: 'white',
      },
    },
    {
      variant: 'outline',
      colors: 'primary',
      css: {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          bg: 'primary',
          color: 'white',
        },
      },
    },
    {
      variant: 'outline',
      colors: 'secondary',
      css: {
        borderColor: 'secondary',
        color: 'secondary',
        '&:hover': {
          bg: 'secondary',
          color: 'white',
        },
      },
    },
    {
      variant: 'ghost',
      css: {
        color: 'primary',
        '&:hover': {
          bg: 'primary',
          color: 'white',
        },
      },
    },
    {
      variant: 'ghost',
      colors: 'secondary',
      css: {
        color: 'secondary',
        '&:hover': {
          bg: 'secondary',
          color: 'white',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    colors: 'primary',
  },
})

/**
 * Types
 */
export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colors, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return <Component className={buttonStyle({ variant, size, colors })} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'

export { Button }
