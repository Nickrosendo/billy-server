import bodyParser from 'body-parser';
import morgan from 'morgan';

export const middlewares = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(morgan('dev'));
}