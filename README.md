# ex314.ai - Catholic Theological AI Assistant

![ex314.ai Logo](public/chi-ro.png)

## Overview

ex314.ai is a Catholic theological AI assistant guided by Exodus 3:14 ("I AM WHO I AM"). This project combines advanced AI technology with Catholic theological teachings to provide users with accurate, faithful responses to theological inquiries. The application features a modern, responsive interface with a landing page and specialized sections for resources, prayers, and a liturgical calendar.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technical Architecture](#technical-architecture)
  - [Application Architecture](#application-architecture)
  - [AI Integration](#ai-integration)
  - [Data Flow](#data-flow)
  - [State Management](#state-management)
  - [Authentication](#authentication)
  - [Deployment Architecture](#deployment-architecture)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Landing Page**: Introduces users to ex314.ai with an elegant, animated interface
- **AI Chat Interface**: Provides theological answers guided by Catholic teaching
- **Resources Section**: Curated collection of theological resources and references
- **Prayers Section**: Traditional Catholic prayers with expandable content
- **Liturgical Calendar**: Interactive calendar showing feast days and liturgical seasons
- **Responsive Design**: Fully responsive layout that works on all devices
- **Animated UI Elements**: Subtle animations enhance the user experience
- **Accessibility**: Designed with accessibility in mind

## Project Structure

ex314.ai/
├── app/
│   ├── chat/                  # Chat interface
│   │   └── page.tsx           # Main chat page
│   ├── resources/             # Resources section
│   │   └── page.tsx           # Resources page
│   ├── prayers/               # Prayers section
│   │   └── page.tsx           # Prayers page
│   ├── calendar/              # Liturgical calendar
│   │   └── page.tsx           # Calendar page
│   ├── components/            # Shared components
│   │   ├── layout/            # Layout components
│   │   │   ├── site-header.tsx
│   │   │   ├── site-footer.tsx
│   │   │   └── navigation.tsx
│   │   └── ui/                # UI components
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── client-layout.tsx      # Client-side layout wrapper
│   └── page.tsx               # Landing page
├── public/                    # Static assets
│   └── chi-ro.png             # Chi-Rho symbol
├── lib/                       # Utility functions
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation

```plaintext

## Technical Architecture

### Application Architecture

ex314.ai follows a modern web application architecture based on Next.js App Router, leveraging React Server Components for improved performance and SEO.

```

┌─────────────────────────────────────────────────────────┐
│                      Client Browser                      │
└───────────────────────────┬─────────────────────────────┘
│
┌───────────────────────────▼─────────────────────────────┐
│                     Next.js Frontend                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │ React Server│  │   Client    │  │   Static Site   │  │
│  │ Components  │◄─┤ Components  │  │   Generation    │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└───────────────────────────┬─────────────────────────────┘
│
┌───────────────────────────▼─────────────────────────────┐
│                    Backend Services                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  AI Service │  │  Auth API   │  │   Data Storage  │  │
│  │ Integration │  │             │  │                 │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘

```plaintext

The application is structured using the following architectural patterns:

1. **App Router Architecture**: Leverages Next.js 13+ App Router for file-based routing
2. **Hybrid Rendering**: Uses a mix of:
   - Server Components for data-fetching and SEO-critical content
   - Client Components for interactive elements
   - Static Generation for content that rarely changes
3. **Component-Based Design**: Modular components with clear separation of concerns
4. **Responsive Design System**: Mobile-first approach with Tailwind CSS


### AI Integration

The AI integration follows a secure, scalable architecture:

```

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Client Request │    │  Server-Side    │    │   AI Provider   │
│                 │───►│  Processing     │───►│                 │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│                      ▲                      │
│                      │                      │
│                      │                      │
│              ┌───────┴───────┐              │
└──────────────►  Response     │◄─────────────┘
│  Processing   │
└───────────────┘

```plaintext

1. **Secure Token Handling**: API keys are stored server-side only
2. **Request Validation**: All user inputs are validated and sanitized
3. **Prompt Engineering**: Specialized prompts ensure theological accuracy
4. **Response Processing**: AI responses are processed to ensure alignment with Catholic teaching
5. **Caching Layer**: Frequently asked questions are cached for performance
6. **Fallback Mechanisms**: Graceful degradation if AI service is unavailable


### Data Flow

The application follows a unidirectional data flow pattern:

```

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Actions   │────►│    State    │────►│    View     │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
▲                                       │
│                                       │
└───────────────────────────────────────┘
User Interaction

```plaintext


1. **User Input**: Captured through UI components
2. **State Updates**: Managed through React hooks or context
3. **Server Actions**: Used for server-side mutations
4. **UI Updates**: React components re-render based on state changes


### State Management


The application uses a combination of state management approaches:

1. **Local Component State**: For UI-specific state using React's `useState`
2. **React Context**: For shared state across component trees
3. **Server State**: For data fetched from the server
4. **URL State**: For state that should be reflected in the URL


### Authentication

The authentication flow follows industry best practices:

```

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  User Login │────►│ Auth Service│────►│  JWT Token  │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
│
▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Protected  │◄────│  Auth Check │◄────│ Token Store │
│  Resources  │     │  Middleware │     │             │
└─────────────┘     └─────────────┘     └─────────────┘

```plaintext


1. **JWT-Based Authentication**: Secure, stateless authentication
2. **HTTP-Only Cookies**: For secure token storage
3. **Middleware Protection**: Routes protected via Next.js middleware
4. **Role-Based Access**: Different access levels for users and administrators


### Deployment Architecture


The application is deployed on Vercel with the following architecture:

```

┌─────────────────────────────────────────────────────────┐
│                    Vercel Platform                       │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Edge      │  │ Serverless  │  │   Static File   │  │
│  │  Network    │  │  Functions  │  │     Hosting     │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
│               │                │
▼               ▼                ▼
┌─────────────┐    ┌──────────────┐   ┌────────────────┐
│ CDN Caching │    │ API Endpoints│   │ Static Assets  │
│             │    │              │   │                │
└─────────────┘    └──────────────┘   └────────────────┘


```plaintext

1. **Edge Network**: Global CDN for fast content delivery
2. **Serverless Functions**: For API routes and server components
3. **Static Generation**: Pre-rendered content for optimal performance
4. **Environment Isolation**: Separate preview and production environments
5. **Continuous Deployment**: Automatic deployments from Git

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, consistent icons
- **Vercel**: Deployment and hosting platform
- **AI Integration**: Custom AI model for theological responses

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ex314.ai.git
   cd ex314.ai
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Set up environment variables (see [Environment Variables](#environment-variables) section)
4. Start the development server:

```shellscript
npm run dev
# or
yarn dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser


### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
# AI API Keys (replace with your actual keys)
OPENAI_API_KEY=your_openai_api_key

# Authentication (if applicable)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Other configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Development

### Running Locally

```shellscript
npm run dev
# or
yarn dev
```

This starts the development server on [http://localhost:3000](http://localhost:3000).

### Building for Production

```shellscript
npm run build
# or
yarn build
```

To test the production build locally:

```shellscript
npm run start
# or
yarn start
```

## Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy


For other platforms, build the project and deploy the `.next` directory according to the platform's documentation.

## Customization

### Styling

The project uses Tailwind CSS for styling. Main color variables are defined in:

- `app/globals.css`: CSS variables
- `tailwind.config.js`: Tailwind theme configuration


Key color variables:

```css
--dark-bg: #1e1e1e;
--card-bg: #252525;
--input-bg: #2d2d2d;
--accent-gold: #ffd700;
--accent-purple: #800080;
--purple-hover: #9c27b0;
--border-color: #383838;
--border-color-light: #404040;
```

### Content

- **Landing Page**: Edit `app/page.tsx` to modify the main content
- **Resources**: Update `app/resources/page.tsx` to change resource links
- **Prayers**: Modify the prayers array in `app/prayers/page.tsx`
- **Calendar**: Adjust liturgical calculations in `app/calendar/page.tsx`


### Adding New Pages

1. Create a new directory in the `app` folder
2. Add a `page.tsx` file with your content
3. Update navigation in `app/components/layout/navigation.tsx`


## Troubleshooting

### Common Issues

#### "Failed to initialize v0" Error

This error typically occurs when there's an issue with the AI integration:

1. Check that your API keys are correctly set in environment variables
2. Verify that the AI service is available and responding
3. Check for JavaScript errors in the browser console


#### Styling Issues

If styles aren't applying correctly:

1. Make sure Tailwind CSS is properly configured
2. Check for class name conflicts
3. Verify that the Cinzel font is loading correctly


#### Navigation Problems

If navigation between pages isn't working:

1. Check that all routes are correctly defined
2. Verify that Next.js Link components are properly implemented
3. Check for any client-side routing issues in the browser console


## Contributing

We welcome contributions to improve ex314.ai! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions, suggestions, or feedback, please contact:

- Email: [notapharisee@ex314.ai](mailto:notapharisee@ex314.ai)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)


---

*"I AM WHO I AM" - Exodus 3:14*

*ex314.ai is an independent Catholic initiative committed to truth and human dignity.*

```plaintext

```
