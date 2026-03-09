// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // blue-500 — buttons, rings, active states
          hover: "#2563eb", // blue-600 — button hover
          dark: "#1d4ed8", // blue-700 — deep hover
        },
        danger: {
          DEFAULT: "#ef4444", // red-500 — delete button
          hover: "#b91c1c", // red-700
        },
        success: {
          DEFAULT: "#16a34a", // green-600 — save button
          hover: "#166534", // green-800
        },
        muted: {
          DEFAULT: "#9ca3af", // gray-400 — cancel, empty state
          hover: "#4b5563", // gray-600
        },
        surface: "#f3f4f6", // gray-100 — card backgrounds
        border: "#E0E0E0", // gray-300 — table borders
      },
      text: {
        DEFAULT: "#374151", // gray-700 — default text
        emphasized: "#1f2937", // gray-800 — emphasized text
        secondary: "#6b7280", // gray-500 — secondary text
      },
      borderRadius: {
        card: "1rem", // rounded-2xl — all cards
        input: "0.5rem", // rounded-lg — all inputs
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05)", // shadow-sm — card shadow
      },
    },
  },
  plugins: [],
};
