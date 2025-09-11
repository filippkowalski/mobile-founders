# 🚀 Mobile Founders

A modern landing page and knowledge base for the **Mobile Founders** Slack community - connecting mobile app founders, developers, and entrepreneurs building the next generation of mobile products.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black)](https://nextjs.org/)
[![Powered by Vercel](https://img.shields.io/badge/Powered%20by-Vercel-black)](https://vercel.com/)

## ✨ Features

- 📝 **Community Application Form** - Streamlined application process with Slack integration
- 📚 **Knowledge Base** - Curated insights on ASO, Meta Ads, and mobile marketing
- 🎨 **Rich Twitter Previews** - Dynamic tweet content fetching with authentic styling
- 🌙 **Dark/Light Mode** - Automatic theme switching based on user preference  
- 📱 **Mobile-First Design** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Static site generation with edge deployment
- 🔍 **SEO Optimized** - Complete meta tags, structured data, and social sharing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict mode
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Static export compatible with Vercel, Netlify, Cloudflare Pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mobile-founders.git
   cd mobile-founders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your Slack webhook URL:
   ```env
   NEXT_PUBLIC_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR_WORKSPACE_ID/YOUR_CHANNEL_ID/YOUR_WEBHOOK_TOKEN
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mobile-founders/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── knowledge/          # Knowledge base articles
│   │   ├── globals.css         # Global styles and CSS variables
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/ui/          # Reusable UI components
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── CLAUDE.md                 # Development guidance for Claude
└── README.md                 # You are here!
```

## 🎨 Key Components

### Application Form
- Native form handling with Slack webhook integration
- Auto-formatting of social media handles
- CORS proxy for client-side submissions
- Success/error state management

### Knowledge Base
- ASO insights and A/B testing strategies
- Meta Ads marketing resources collection
- Rich link previews with platform-specific styling
- SEO-optimized article pages

### Link Preview System
- Dynamic Twitter content fetching via oEmbed API
- Fallback to curated static content
- Authentic social media styling
- Support for multiple platforms (Twitter, LinkedIn, YouTube, Reddit)

## 🌐 Deployment

### Static Export
The project is configured for static export and works with any static hosting provider:

```bash
npm run build
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/mobile-founders)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/mobile-founders)

### Deploy to Cloudflare Pages
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set build output directory: `out`
4. Add environment variable: `NEXT_PUBLIC_SLACK_WEBHOOK_URL`

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SLACK_WEBHOOK_URL` | Slack webhook URL for form submissions | Yes |

Get your Slack webhook URL:
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create a new app or select existing
3. Navigate to "Incoming Webhooks"
4. Copy the webhook URL

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with static export
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint for code quality checks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Acknowledgments

- Built by [Filip Kowalski](https://twitter.com/filippkowalski) for the Mobile Founders community
- Enhanced with [Claude Code](https://claude.ai/code) assistance
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 🔗 Links

- **Live Site**: [mobile-founders.com](https://mobile-founders.com)
- **Community**: [Join Mobile Founders Slack](https://mobile-founders.com)
- **Creator**: [@filippkowalski](https://twitter.com/filippkowalski)

---

<p align="center">Made with ❤️ for the mobile development community</p>