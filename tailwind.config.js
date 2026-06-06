/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  
  theme: {
    extend: {
      colors: {
        // ──────────────────────────────────────────────
        // BRAND
        // ──────────────────────────────────────────────
        brand: {
          DEFAULT: "#0F766E",
          hover: "#115E59",
          light: "#14B8A6",
          muted: "rgba(15,118,110,0.10)",
          border: "rgba(15,118,110,0.20)",
          glow: "rgba(15,118,110,0.15)",
        },

        // ──────────────────────────────────────────────
        // SURFACE
        // ──────────────────────────────────────────────
        surface: {
          base: "#F8FAFC",
          raised: "#FFFFFF",
          card: "#F1F5F9",
          overlay: "rgba(248,250,252,0.90)",
          glass: "rgba(255,255,255,0.70)",
          border: "rgba(15,23,42,0.08)",
        },

        // ──────────────────────────────────────────────
        // TEXT
        // ──────────────────────────────────────────────
        ink: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
          disabled: "#94A3B8",
        },

        // Optional status colors
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      // ──────────────────────────────────────────────
      // TYPOGRAPHY
      // ──────────────────────────────────────────────
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        nav: ["0.8125rem", { lineHeight: "1.2" }],
      },

      // ──────────────────────────────────────────────
      // BORDER RADIUS
      // ──────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "2rem",
      },

      // ──────────────────────────────────────────────
      // SHADOWS
      // ──────────────────────────────────────────────
      boxShadow: {
        card:
          "0 4px 12px rgba(15,23,42,0.06), 0 12px 32px rgba(15,23,42,0.08)",

        "glow-sm":
          "0 0 20px rgba(15,118,110,0.10)",

        glow:
          "0 0 40px rgba(15,118,110,0.15)",

        "glow-lg":
          "0 0 80px rgba(15,118,110,0.20)",
      },

      // ──────────────────────────────────────────────
      // TRANSITIONS
      // ──────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: "250ms",
        "400": "400ms",
        "600": "600ms",
      },

      // ──────────────────────────────────────────────
      // ANIMATIONS
      // ──────────────────────────────────────────────
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow":
          "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },

      // ──────────────────────────────────────────────
      // BACKGROUND GRADIENTS
      // ──────────────────────────────────────────────
      backgroundImage: {
        hero:
          "linear-gradient(135deg, #F8FAFC 0%, #ECFEFF 50%, #F0FDFA 100%)",

        section:
          "linear-gradient(to bottom, #FFFFFF, #F8FAFC)",

        accent:
          "linear-gradient(135deg, #0F766E, #14B8A6)",
      },
    },
  },
  plugins: [],
}