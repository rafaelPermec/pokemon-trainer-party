import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './configs/swagger.json';
import fetchRandomPokemon from './helpers/pokemon.fetch.API';
import fetchRandomItem from './helpers/item.fetch.API';
import errorMiddleware from './errors/error.middleware';

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/pokemon', fetchRandomPokemon);
app.get('/item', fetchRandomItem);

app.use(errorMiddleware);

export default app;
