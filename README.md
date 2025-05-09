# Ex314.ai Homepage

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ex314/v0-ex314-ai-redesign)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/iGlGuDqAo8c)


# ex314.ai - Catholic Theological AI Assistant

![ex314.ai Logo](public/chi-ro.png)

## Overview

ex314.ai is a Catholic theological AI assistant guided by Exodus 3:14 ("I AM WHO I AM"). This project combines advanced AI technology with Catholic theological teachings to provide users with accurate, faithful responses to theological inquiries. The application features a modern, responsive interface with a landing page and specialized sections for resources, prayers, and a liturgical calendar.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
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

