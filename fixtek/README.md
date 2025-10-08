# FixTek React App

A modern React application built with Vite and styled with Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔥 **Hot Module Replacement** - Instant updates during development
- 📱 **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
fixtek/
├── public/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - CSS framework
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## License

MIT
