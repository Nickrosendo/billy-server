import mongoose from 'mongoose';

const dbUser = {
  name: 'admin',
  password: 'admin0112358'
}
const dbUrl = `mongodb+srv://${dbUser.name}:${dbUser.password}@cluster0.syhbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const database = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
    .once('open', () => console.log(`mongoDb running on ${dbUrl}`))
    .on('error', err => console.error(err))
}
