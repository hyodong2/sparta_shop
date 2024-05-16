// /schemas/index.js

import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      'mongodb+srv://idonghyo2:<donghyo2143!>@naebae-mongo.jrfvihp.mongodb.net/?retryWrites=true&w=majority&appName=naebae-mongo',
      {
        dbName: 'spa_shopping'
      },
    )
    .catch((err) => console.log(err))
    .then(() => console.log('몽고디비 연결 성공'));
};

mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

export default connect;
