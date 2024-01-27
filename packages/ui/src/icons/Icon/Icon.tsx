import { cva } from '@license-auth/styled-system/css'
import * as icons from '@repo/icon'

/** Types */
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
type IconColor = 'primary' | 'secondary'
type IconName = keyof typeof icons

interface IconProps {
  name: IconName
  color?: IconColor
  size?: IconSize
}

/** Styles */
const iconStyles = cva({
  variants: {
    size: {
      xs: { w: '16px', h: '16px' },
      sm: { w: '24px', h: '24px' },
      md: { w: '32px', h: '32px' },
      lg: { w: '40px', h: '40px' },
      xl: { w: '48px', h: '48px' },
      '2xl': { w: '56px', h: '56px' },
      '3xl': { w: '64px', h: '64px' },
    },
    color: {
      primary: { fill: 'primary' },
      secondary: { fill: 'secondary' },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

export function Icon({ name, color, size }: IconProps): JSX.Element {
  const IconComponent = icons[name]

  return <IconComponent className={iconStyles({ color, size })} />
}
