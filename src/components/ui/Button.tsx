'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-button-primary-bg text-text-primary hover:bg-primary-light focus:ring-accent-orange',
        secondary: 'bg-button-secondary-bg text-text-primary hover:bg-background-highlight focus:ring-border-subtle',
        outline: 'border-2 border-border-primary text-text-primary bg-transparent hover:bg-background-subtle focus:ring-border-primary',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  border_border?: string;
  effect_box_shadow?: string;
  
  // Optional parameters
  fill_background?: string;
  // layout_width?: string;
  padding?: string;
  position?: string;
  // layout_gap?: string;
  margin?: string;
  
  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = "Subscribe",
  text_font_size = "text-xs",
  text_font_family = "Sk-Modernist",
  text_font_weight = "font-normal",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-text-primary",
  fill_background_color = "bg-background-overlay",
  border_border_radius = "rounded-xs",
  border_border = "0 solid border-border-primary",
  effect_box_shadow = "shadow-[0px_4px_14px_#888888ff]",
  
  // Optional parameters (no defaults)
  fill_background,
  // layout_width,
  padding,
  position,
  // layout_gap,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidFillBackground = fill_background && typeof fill_background === 'string' && fill_background.trim() !== ''
  // const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''
  // const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''

  const optionalClasses = [
    hasValidFillBackground ? fill_background : '',
    // hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    // hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    ...(text_text_align && text_text_align !== 'left' && text_text_align !== 'center' && text_text_align !== 'right' && { textAlign: text_text_align as any }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size, 
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'left' ? 'text-left' : text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : '',
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    !variant && border_border ? `border-[${border_border.replace('solid', '').trim()}]` : '',
    border_border_radius,
    effect_box_shadow,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button