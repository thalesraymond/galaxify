import app from './app';
import { connect } from '../../infrastructure/db';

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
