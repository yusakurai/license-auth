import * as React from 'react'
import { useState } from 'react'

import { TextField } from '../TextField/TextField'

/**
 * Types
 */
type PassWordFieldProps = Omit<
  React.ComponentPropsWithRef<typeof TextField>,
  'type' | 'iconName' | 'iconPlacement' | 'onIconClick'
>

const PasswordField = React.forwardRef<HTMLInputElement, PassWordFieldProps>(
  ({ ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <TextField
        ref={ref}
        {...props}
        iconName={isPasswordVisible ? 'EyeSlash' : 'Eye'}
        iconPlacement="right"
        onIconClick={() => {
          setIsPasswordVisible(!isPasswordVisible)
        }}
        type={isPasswordVisible ? 'text' : 'password'}
      />
    )
  }
)

PasswordField.displayName = 'PasswordField'

export { PasswordField }
