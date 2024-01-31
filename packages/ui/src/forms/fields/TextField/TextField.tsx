import { cva, css } from '@license-auth/styled-system/css'
import * as React from 'react'

import { IconButton } from '@/buttons'
import { Icon, type IconName } from '@/icons'

/**
 * Styles
 */
const textFieldStyle = cva({
  base: {
    padding: '4px 12px',
  },
  variants: {
    borderless: {
      false: {
        borderRadius: '4px',
        borderColor: 'primary',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
    },
    iconName: {},
    iconPlacement: {
      left: {
        paddingLeft: '24px',
      },
      right: {
        paddingRight: '24px',
      },
    },
  },
  defaultVariants: {
    borderless: false,
  },
})

const iconStyles = cva({
  base: {
    position: 'absolute',
    display: 'inline-flex',
  },
  variants: {
    iconPlacement: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
})

/**
 * Types
 */
type TextFieldIconPlacement = 'left' | 'right'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** arial-labelに指定する代替テキスト */
  ariaLabel?: string
  /** 枠線無しにするか */
  borderless?: boolean
  /** アイコン名 */
  iconName?: IconName
  /** アイコンの配置 */
  iconPlacement?: TextFieldIconPlacement
  /** アイコンクリック時のイベント */
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      type = 'text',
      borderless,
      iconName,
      iconPlacement = 'left',
      ariaLabel = 'textfield',
      onIconClick,
      ...props
    },
    ref
  ) => {
    return (
      <span className={css({ position: 'relative', display: 'inline-flex', alignItems: 'center' })}>
        <input
          aria-label={ariaLabel}
          className={textFieldStyle({
            borderless,
            iconPlacement: iconName ? iconPlacement : undefined,
          })}
          ref={ref}
          type={type}
          {...props}
        />

        {iconName ? (
          <span className={iconStyles({ iconPlacement })}>
            {onIconClick ? (
              <IconButton
                color="secondary"
                hover={false}
                iconName={iconName}
                onClick={onIconClick}
                size="xs"
              />
            ) : (
              <span className={css({ padding: '4px' })}>
                <Icon color="secondary" iconName={iconName} size="xs" />
              </span>
            )}
          </span>
        ) : null}
      </span>
    )
  }
)

TextField.displayName = 'TextField'

export { TextField }
