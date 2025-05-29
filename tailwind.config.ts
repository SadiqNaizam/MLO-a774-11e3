import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // PRD specific color names for direct use as Tailwind classes
        'primary-text': '#333333',       // PRD colorPalette.primaryText
        'secondary-text': '#737373',     // PRD colorPalette.secondaryText
        'accent-blue': '#3B82F6',        // PRD colorPalette.accentBlue
        'accent-red': '#EF4444',         // PRD colorPalette.accentRed
        'accent-orange': '#F59E0B',      // PRD colorPalette.accentOrange
        'accent-purple': '#8B5CF6',      // PRD colorPalette.accentPurple
        'accent-teal': '#2DD4BF',        // PRD colorPalette.accentTeal
        // Direct references to PRD structural colors, if needed alongside semantic ones
        'prd-background': '#F3F4F6',    // PRD colorPalette.background
        'prd-surface': '#FFFFFF',       // PRD colorPalette.surface
        'prd-sidebar': '#E5E7EB',       // PRD colorPalette.sidebar (same as sidebar.DEFAULT via CSS var)
        'prd-border': '#E5E7EB'         // PRD colorPalette.border (same as border via CSS var)
			},
			borderRadius: {
        // Values will use the updated --radius (0.375rem)
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)', // Effectively 0.375rem - 2px (approx 0.25rem or 4px)
				sm: 'calc(var(--radius) - 4px)'  // Effectively 0.375rem - 4px (approx 0.125rem or 2px)
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
