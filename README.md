# NestJS RabbitMQ Integration Example

This project demonstrates how to integrate RabbitMQ into a NestJS application to build a message-driven architecture. It includes:

- **OrderController**: Acts as a producer, sending messages to RabbitMQ.
- **OrderConsumerController**: Acts as a consumer, receiving and processing messages from RabbitMQ.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/).
- **NestJS CLI**: Install globally using `npm install -g @nestjs/cli`.
- **Docker**: For running RabbitMQ locally. [Install Docker](https://www.docker.com/get-started).

## Getting Started

### 1. Clone the Repository

```
git clone git@github.com:leedeen01/NestOrderProcessor.git
```

### 2. Install Dependencies

```
npm i
```

### 3. Start RabbitMQ (Docker)

```
docker run -it --name rabbitmq -p 5672:5672 rabbitmq:3-management
```

### 4. Run the Application

```
npm run start
```

### 5. Testing with Postman

**Endpoint:** POST http://localhost:3000/order

**Body**
```
{
  "id": 1,
  "expiry": "15-06-01",
  "item": "Sample Product",
  "quantity": 2
}
```

**Expected Response**\
Received order:  { id: 1, expiry: '15-06-01', item: 'Sample Product', quantity: 2 }

