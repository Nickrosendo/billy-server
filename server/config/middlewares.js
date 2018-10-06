import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const middlewares = app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(morgan('dev'));
}