const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger documentation setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API Documentation',
      version: '1.0.0',
      description: 'API information',
      contact: {
        name: 'Developer',
      },
      servers: ['http://34.172.161.189:3000']
    }
  },
  apis: ['./routes/*.js'], // Path to your JSDoc comments
};

// Swagger docs in JSON format
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Example API route
app.get('/api/v1/resource', (req, res) => {
  res.json({ message: 'API Resource' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
