import mongoose from 'mongoose';

const dbUser = {
  name: 'admin',
  password: 'admin0112358'
}
const dbUrl = `mongodb://${dbUser.name}:${dbUser.password}@ds239009.mlab.com:39009/billy-app`;

export const database = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbUrl, {
    useNewUrlParser: true
  });
  mongoose.connection
    .once('open', () => console.log(`mongoDb running on ${dbUrl}`))
    .on('error', err => console.error(err))
}