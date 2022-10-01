import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './configs/swagger.json';

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
