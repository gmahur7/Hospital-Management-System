// Typography.types.ts
import {
  AriaAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

// Typography variants
export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "overline";

// Font weights
export type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "normal"
  | "bold"
  | "bolder"
  | "lighter";

// Text alignment options
export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";

// Color variants
export type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "disabled"
  | "inverse"
  | string; // Allow custom color values

// HTML elements that can be rendered
export type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label"
  | "legend"
  | "caption"
  | "figcaption"
  | "blockquote"
  | "cite"
  | "code"
  | "pre"
  | "kbd"
  | "samp"
  | "var"
  | "abbr"
  | "dfn"
  | "time"
  | "mark"
  | "small"
  | "sub"
  | "sup"
  | "strong"
  | "em"
  | "b"
  | "i"
  | "u"
  | "s"
  | "del"
  | "ins";

// Base typography props interface
export interface TypographyProps
  extends
    Omit<HTMLAttributes<HTMLElement>, "color" | "dir">,
    Pick<
      AriaAttributes,
      "aria-label" | "aria-describedby" | "aria-labelledby"
    > {
  /**
   * Typography variant that determines the base styling
   * @default 'body'
   */
  variant?: TypographyVariant;

  /**
   * HTML element to render
   * @default Determined by variant
   */
  element?: TypographyElement;

  /**
   * Font weight override
   */
  weight?: FontWeight;

  /**
   * Text color variant or custom color value
   * @default 'primary'
   */
  color?: TextColor;

  /**
   * Text alignment
   * @default 'left'
   */
  align?: TextAlign;

  /**
   * Enable single-line text truncation with ellipsis
   * @default false
   */
  truncate?: boolean;

  /**
   * Maximum number of lines before truncation (requires modern browser support)
   */
  maxLines?: number;

  /**
   * Custom font family
   */
  fontFamily?: string;

  /**
   * Loading state for the typography component
   * @default false
   */
  isLoading?: boolean;

  /**
   * Text direction for RTL support
   * @default 'ltr'
   */
  dir?: "ltr" | "rtl";

  /**
   * Content to render
   */
  children?: ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: CSSProperties;

  /**
   * Test ID for testing purposes
   */
  testId?: string;

  /**
   * Click handler for interactive typography
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /**
   * Keyboard event handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;

  /**
   * Tab index for focus management
   */
  tabIndex?: number;

  /**
   * ARIA role
   */
  role?: string;
}

// Typography component ref type
export type TypographyRef = HTMLElement;

// Font loading state
export interface FontLoadingState {
  isLoading: boolean;
  hasError: boolean;
  fontFamily?: string;
}

// Typography theme configuration
export interface TypographyTheme {
  fontFamilies: {
    primary: string;
    secondary: string;
    monospace: string;
  };
  fontScales: Record<
    TypographyVariant,
    {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
      letterSpacing?: string;
    }
  >;
  colors: Record<string, string>;
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Typography context for theme provider
export interface TypographyContextValue {
  theme: TypographyTheme;
  updateTheme: (theme: Partial<TypographyTheme>) => void;
  fontLoadingStates: Record<string, FontLoadingState>;
  registerFont: (fontFamily: string) => void;
}

// Utility types for component composition
export type TypographyVariantProps<T extends TypographyVariant> = Omit<
  TypographyProps,
  "variant"
> & {
  variant?: T;
};

// Heading component props
export type HeadingProps = TypographyVariantProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

// Body text component props
export type BodyTextProps = TypographyVariantProps<"body">;

// Caption component props
export type CaptionProps = TypographyVariantProps<"caption">;

// Overline component props
export type OverlineProps = TypographyVariantProps<"overline">;

// Error boundary props
export interface TypographyErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

// Storybook args type
export interface TypographyStoryArgs extends TypographyProps {
  text: string;
}

// Performance monitoring
export interface TypographyPerformanceMetrics {
  renderTime: number;
  fontLoadTime?: number;
  layoutShiftScore?: number;
}

// Accessibility audit results
export interface TypographyAccessibilityAudit {
  contrastRatio: number;
  wcagLevel: "AA" | "AAA" | "fail";
  hasProperHeadingHierarchy: boolean;
  hasAccessibleFocus: boolean;
  hasProperARIA: boolean;
}
