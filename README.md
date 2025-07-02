# QuickBill – Invoice Generator

QuickBill is a full-stack web application for creating, customizing, and managing invoices. It features a modern React frontend with multiple invoice templates and a robust Java Spring Boot backend for secure data management and email delivery.

## Features

- User-friendly invoice creation and preview
- Multiple professional invoice templates
- PDF generation and download
- Cloudinary integration for asset uploads
- User authentication (Clerk)
- Email invoice delivery (SMTP)
- MongoDB for data storage

## Tech Stack

**Frontend:**  
- React (Vite)
- JavaScript, JSX, CSS

**Backend:**  
- Java, Spring Boot
- MongoDB
- Spring Security
- Clerk authentication
- SMTP (Brevo) for email

## Project Structure

```
invoice-generator-v2/      # React frontend
  src/
    components/            # UI components
    templates/             # Invoice templates
    service/               # API and cloud services
    utils/                 # Utility functions
    pages/                 # Main and landing pages

invoicegeneratorapi/       # Spring Boot backend
  src/main/java/           # Java source code
    controller/            # REST controllers
    service/               # Business logic
    repository/            # Data access
    entity/                # Data models
    security/              # Security config
  src/main/resources/
    application.properties # App configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Java 17+
- Maven
- MongoDB

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/quickbill.git
cd quickbill
```

#### 2. Frontend

```sh
cd invoice-generator-v2
npm install
npm run dev
```

#### 3. Backend

```sh
cd invoicegeneratorapi
mvn spring-boot:run
```

#### 4. Configuration

- Update `application.properties` for MongoDB, Clerk, and SMTP credentials as needed.

## Usage

- Access the frontend at `http://localhost:5173` (default Vite port).
- The backend API runs at `http://localhost:8080` (default Spring Boot port).
- Register/login, create invoices, preview, download as PDF, or send via email.

## License

This project is licensed under the MIT License.

---
