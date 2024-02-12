
# AI Prompts Sharing Platform

## Overview

This platform is a Next.js web application deployed on Vercel, designed to facilitate the sharing of AI prompts with associated hashtags. Users can log in, create, share, and copy AI prompts for their use. The platform allows for filtering by hashtags or specific keywords and visiting other users' profiles. It serves as a collaborative space for AI enthusiasts, researchers, and developers to share and discover prompts for various AI applications.

## Features

- **User Authentication:** Secure login mechanism for users to access their accounts.
- **Prompt Creation:** Users can create AI prompts with associated hashtags for categorization.
- **Prompt Browsing and Filtering:** Allows users to filter prompts by hashtags or specific keywords.
- **Profile Visitation:** Users can visit profiles of other users to view their shared prompts.
- **Copy Functionality:** Facilitates easy copying of prompts for external use.

## Getting Started

### Prerequisites

- Node.js (version 20.10.0 or later)
- A Vercel account for deployment

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/TheRealDealveloper/promptoai.git
```

2. Navigate to the project directory:

```bash
cd promptoai
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env.local` file for environment variables such as API keys and database connection strings.

5. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

### Deployment

To deploy your project on Vercel, follow these steps:

1. Push your code to a GitHub repository.
2. Log in to your Vercel account and import your project.
3. Connect your GitHub repository and follow the prompts to deploy your Next.js application.

## Usage

After logging in, users can create new AI prompts by navigating to the "Create Prompt" section and entering the prompt details and associated hashtags. Users can browse existing prompts on the homepage and use the search functionality to filter prompts based on specific criteria.

## To-Do List / Future Enhancements

- **Hugging Face AI:** Implement functionality to quickly test prompts.
- **Social Sharing Options:** Implement functionality to share prompts on social media platforms.
- **User Feedback System:** Introduce a rating or feedback system for users to rate prompts.
- **Advanced Search Capabilities:** Enhance the search functionality with advanced filters and sorting options.
- **Mobile Optimization:** Ensure the platform is fully optimized for mobile users.
- **Performance Optimization:** Continuous improvements to load times and responsiveness.

## License

Distributed under the MIT License. See `LICENSE` for more information.
