import mongoose from "mongoose";

const dbUser = {
  name: "admin",
  password: "admin0112358",
  defaultDB: "billy-dev",
};

export const dbUrl = `mongodb://${dbUser.name}:${dbUser.password}@cluster0-shard-00-00.syhbj.mongodb.net:27017,cluster0-shard-00-01.syhbj.mongodb.net:27017,cluster0-shard-00-02.syhbj.mongodb.net:27017/${dbUser.defaultDB}?ssl=true&replicaSet=atlas-oj0tdj-shard-0&authSource=admin&retryWrites=true&w=majority`;

export const database = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => console.log(`mongoDb running`))
    .on("error", (err) => console.error(err));
};
