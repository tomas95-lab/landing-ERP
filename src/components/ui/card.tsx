import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Variantes de estilo para la tarjeta
const cardVariants = cva(
  "rounded-xl border bg-white text-gray-900 shadow-sm transition-all flex flex-col",
  {
    variants: {
      size: {
        sm: "p-4 gap-4",
        md: "p-6 gap-6",
        lg: "p-8 gap-8"
      },
      variant: {
        default: "hover:shadow-md hover:scale-[1.02]",
        flat: "shadow-none",
        elevated: "shadow-lg hover:shadow-xl hover:scale-[1.03]",
        outline: "shadow-none border-2 hover:border-gray-300"
      },
      interactive: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      interactive: false
    }
  }
)

interface CardProps extends 
  React.ComponentPropsWithoutRef<"div">,
  VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size, variant, interactive, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "div"
    return (
      <Comp
        ref={ref}
        data-slot="card"
        className={cardVariants({ size, variant, interactive, className })}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={`flex flex-col gap-1.5 ${className}`}
    {...props}
  >
    {children}
  </div>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={`text-xl font-semibold tracking-tight ${className}`}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={`py-2 ${className}`}
    {...props}
  >
    {children}
  </div>
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={`flex items-center justify-end pt-2 mt-auto ${className}`}
    {...props}
  >
    {children}
  </div>
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
}