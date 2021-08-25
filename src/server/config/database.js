import mongoose from "mongoose";

const dbUser = {
  name: "admin",
  password: "admin0112358",
};

export const dbUrl = `mongodb+srv://${dbUser.name}:${dbUser.password}@cluster0.syhbj.mongodb.net/billy-dev?retryWrites=true&w=majority`;

export const database = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => console.log(`mongoDb running`))
    .on("error", (err) => console.error(err));
};
