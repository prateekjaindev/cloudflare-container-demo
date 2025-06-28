# Cloudflare Container Demo

A Node.js application demonstrating container deployment on Cloudflare Workers with Docker.

## Features

- Simple REST API with health check endpoint
- Containerized with Docker for easy deployment
- Pre-configured for Cloudflare Workers
- Development and production environment support

## Prerequisites

- [Docker](https://www.docker.com/get-started) (for containerized deployment)
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for Cloudflare deployment)

## Project Structure

```
.
├── .dockerignore     # Specifies files to exclude from Docker builds
├── .gitignore        # Specifies files to exclude from version control
├── Dockerfile        # Docker configuration for containerization
├── README.md        # This file
├── index.js         # Main application entry point
├── package.json     # Project dependencies and scripts
└── wrangler.toml    # Cloudflare Workers configuration
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cloudflare-container-demo.git
   cd cloudflare-container-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Access the API at http://localhost:3000/health
   - Should return: `{"status":"ok"}`

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t cloudflare-container-demo .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 -d cloudflare-container-demo
   ```

3. Access the API:
   - Health check: http://localhost:3000/health
   - Should return: `{"status":"ok"}`

## Deployment

### Deploying to Cloudflare Workers

1. Make sure you have Wrangler CLI installed and authenticated:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. Deploy your worker:
   ```bash
   wrangler deploy
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=3000
# Add other environment variables as needed
```

## Ignored Files

- `.gitignore`: Excludes development and system files from version control
- `.dockerignore`: Optimizes Docker builds by excluding unnecessary files

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
