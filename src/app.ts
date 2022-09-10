import express from 'express';
import errorsHandlingMiddleware from './middleware/errosHandling.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorsHandlingMiddleware);

export default app;
