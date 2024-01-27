import { cva } from '@license-auth/styled-system/css'
import * as icons from '@repo/icon'

/** Types */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type IconColor = 'primary' | 'secondary'
export type IconName = keyof typeof icons

interface IconProps {
  /** アイコン名 */
  iconName: IconName
  /** アイコンの色 */
  color?: IconColor
  /** アイコンのサイズ */
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

export function Icon({ iconName, color, size }: IconProps): React.ReactElement {
  const IconComponent = icons[iconName]

  return <IconComponent className={iconStyles({ color, size })} />
}
