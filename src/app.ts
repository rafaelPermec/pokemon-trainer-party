import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './configs/swagger.json';
import PokemonRoutes from './routes/pokemon.routes';
import errorMiddleware from './errors/error.middleware';

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', PokemonRoutes);

app.use(errorMiddleware);

export default app;
