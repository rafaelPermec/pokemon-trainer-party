import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './configs/swagger.json';
import fetchRandomPokemon from './helpers/fetch.API';

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/pokemon', fetchRandomPokemon);

export default app;
