import { cva } from '@license-auth/styled-system/css'
import * as React from 'react'

import { Icon, type IconSize, type IconName, type IconColor } from '@/icons/Icon/Icon'

/**
 * Styles
 */
const iconButtonStyles = cva({
  base: {
    cursor: 'pointer',
  },
  variants: {
    hover: {
      true: {
        '&:hover': {
          backgroundColor: '#EDEDED',
        },
        borderRadius: '50%',
        transition: '0.2s ease-in-out',
      },
    },
    size: {
      xs: { padding: '4px' },
      sm: { padding: '6px' },
      md: { padding: '8px' },
      lg: { padding: '10px' },
      xl: { padding: '12px' },
      '2xl': { padding: '14px' },
      '3xl': { padding: '16px' },
    },
  },
})

/**
 * Types
 */
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** arial-labelに指定する代替テキスト */
  ariaLabel?: string
  /** 表示するアイコン名 */
  iconName: IconName
  /** アイコンのサイズ */
  size?: IconSize
  /** アイコンの色 */
  color?: IconColor
  /** hover時の背景色を変更するか */
  hover?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, size = 'md', color, hover = true, ariaLabel = 'button', ...props }, ref) => {
    return (
      <button
        aria-label={ariaLabel}
        ref={ref}
        type="button"
        {...props}
        className={iconButtonStyles({ hover, size })}
      >
        <Icon color={color} iconName={iconName} size={size} />
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

export { IconButton }
