# AI-Powered PDF Chat Application

Welcome to the AI-Powered PDF Chat Application! This SaaS project leverages advanced AI technologies to enable users to interact with PDF documents through natural language queries, allowing them to gain information without reading the entire document. This innovative application answers questions accurately based on the content of the PDF.

## Features

- **Chat with PDF**: Ask questions and get accurate answers based on the PDF content.
- **User Authentication**: Secure user authentication using Clerk Auth.
- **Payments**: Seamless payment integration with Stripe.
- **Storage**: Store and manage PDF files using AWS S3.
- **Database**: Efficient data management with DrizzleORM and NeonDb.
- **AI Stack**: Powerful AI capabilities with Pinecone Db, Langchain, Vercel AI SDK, and OpenAI.
- **Edge Runtime**: Enhanced performance with edge computing.
- **Retrieval Augmented Generation**: Advanced techniques for accurate and context-aware responses.

## Tech Stack

### Frontend
- **Next.js**: Framework for building the application.

### Backend
- **Pinecone Db**: Vector database for handling embeddings.
- **Langchain**: Framework for building language models.
- **Vercel AI SDK**: Tools for deploying AI models.
- **OpenAI**: Provider of state-of-the-art AI models.
- **Edge Runtime**: Improves performance and reduces latency.

### Authentication
- **Clerk Auth**: Secure and seamless user authentication.

### Database
- **DrizzleORM**: ORM for interacting with the database.
- **NeonDb**: Scalable and efficient database solution.

### Payments
- **Stripe**: Payment processing for subscription and transactions.

### Storage
- **AWS S3**: Secure and scalable storage for PDF files.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/anonymous096/PDFTalks.git
   cd PDFTalks

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a **.env** file and add the required environment variables for Clerk Auth, Stripe, AWS S3, Pinecone Db, Langchain, Vercel AI SDK, and OpenAI.

4. Run the development server:
    ```bash
    npm run dev
    ```

### Deployment
The application can be deployed on Vercel for seamless integration with Next.js. Ensure all environment variables are set up in Vercel as well.

### Usage

1. **Upload PDF:** Users can upload their PDF files to the platform.
2. **Ask Questions:** Users can interact with the PDF through a chat interface, asking questions and receiving accurate answers.
3. **Manage Account:** Users can manage their profile and subscription through the account settings.

### Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.

2. Create a new branch:
    ```bash
    git checkout -b feature/YourFeature
    ```

3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch
    ```bash
    git push origin feature/YourFeature
    ```

5. Create a pull request

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

We would like to thank the following technologies and platforms that made this project possible:

- [Next.js](https://nextjs.org/): A React framework for building server-side rendering and static web applications.
- [Clerk Auth](https://clerk.dev/): An easy-to-integrate authentication service.
- [DrizzleORM](https://github.com/drizzle-team/drizzle-orm): A TypeScript ORM for SQL databases.
- [NeonDb](https://neon.tech/): A scalable and efficient database solution.
- [Stripe](https://stripe.com/): A payment processing platform.
- [AWS S3](https://aws.amazon.com/s3/): A scalable object storage service.
- [Pinecone](https://www.pinecone.io/): A vector database for handling embeddings.
- [Langchain](https://www.langchain.com/): A framework for building language models.
- [Vercel](https://vercel.com/): A platform for frontend developers, providing tools for serverless functions and static site hosting.
- [OpenAI](https://openai.com/): Provider of state-of-the-art AI models.

