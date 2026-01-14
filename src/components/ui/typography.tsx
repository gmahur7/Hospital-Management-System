// components/ui/typography.tsx
import React from "react";
import type { JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyScale = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
};

// Typography variants using CVA (Class Variance Authority)
const typographyVariants = cva(
  // Base styles
  "font-sans",
  {
    variants: {
      variant: {
        // Display variants
        "display-2xl":
          "font-poppins font-black text-7xl tracking-tighter leading-none",
        "display-xl":
          "font-poppins font-extrabold text-6xl tracking-tight leading-tight",
        "display-lg":
          "font-poppins font-bold text-5xl tracking-tight leading-tight",
        "display-md":
          "font-poppins font-bold text-4xl tracking-tight leading-tight",
        "display-sm":
          "font-poppins font-semibold text-3xl tracking-normal leading-snug",
        "display-xs":
          "font-poppins font-semibold text-2xl tracking-normal leading-snug",

        // Headings
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        h5: "scroll-m-20 text-lg font-semibold tracking-tight",
        h6: "scroll-m-20 text-base font-semibold tracking-tight",

        // Body text
        p: "leading-7",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",

        // Body variants
        "body-lg":
          "font-merriweather font-normal text-lg tracking-normal leading-relaxed",
        "body-base":
          "font-merriweather font-normal text-base tracking-normal leading-relaxed",
        "body-sm":
          "font-merriweather font-normal text-sm tracking-normal leading-relaxed",

        // Special variants
        blockquote: "mt-6 border-l-2 pl-6 italic",
        code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",

        // List variants
        list: "my-6 ml-6 list-disc [&>li]:mt-2",
        inlineCode:
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",

        // Caption Variants
        "caption-base":
          "font-roboto-mono font-normal text-sm tracking-wide leading-normal",
        "caption-sm":
          "font-roboto-mono font-medium text-xs tracking-wide leading-none",

        // Code Variants
        "code-base":
          "font-roboto-mono font-normal text-base tracking-normal leading-normal",
        "code-sm":
          "font-roboto-mono font-normal text-sm tracking-normal leading-normal",
      },

      // Size variants (can override variant sizes)
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
      },

      // Weight variants
      weight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },

      // Color variants
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        accent: "text-accent-foreground",
        destructive: "text-destructive",
        success: "text-green-600 dark:text-green-400",
        warning: "text-yellow-600 dark:text-yellow-400",
        info: "text-blue-600 dark:text-blue-400",
      },

      // Alignment variants
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },

      // Transform variants
      transform: {
        none: "normal-case",
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },

      // Truncation (new feature)
      truncate: {
        true: "truncate",
        false: "",
      },

      // Max lines (modern browser support)
      maxLines: {
        1: "line-clamp-1",
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4",
        5: "line-clamp-5",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
      align: "left",
      transform: "none",
      truncate: false,
    },
  }
);

// Define the element mapping for semantic HTML
const elementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  blockquote: "blockquote",
  code: "code",
  list: "ul",
  inlineCode: "code",
} as const;

// TypeScript interfaces
export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  /** Test ID for testing purposes */
  testId?: string;
  /** Loading state for the typography component */
  isLoading?: boolean;
  /** Text direction for RTL support */
  dir?: "ltr" | "rtl";
}

// Main Typography component
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = "p",
      size,
      weight,
      color,
      align,
      transform,
      truncate,
      maxLines,
      as,
      children,
      testId,
      isLoading,
      dir,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element to render
    const Component =
      as ||
      (variant && elementMapping[variant as keyof typeof elementMapping]) ||
      "p";

    if (isLoading) {
      return (
        <div
          className={cn("bg-muted animate-pulse rounded", className)}
          style={{
            height: "1em",
            width: size ? typographyScale[size] : "100%",
          }}
          data-testid={testId ? `${testId}-loading` : undefined}
        />
      );
    }

    return React.createElement(
      Component,
      {
        className: cn(
          typographyVariants({
            variant,
            size,
            weight,
            color,
            align,
            transform,
            truncate,
            maxLines,
          }),
          className
        ),
        ref,
        "data-testid": testId,
        dir,
        ...props,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

// Utility type for variant prop
export type TypographyVariant = VariantProps<
  typeof typographyVariants
>["variant"];
