import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use(helmet());
app.use(express.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`This app is running on http://localhost:${PORT}`));

export default app;
