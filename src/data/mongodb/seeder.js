import { Seeder } from "mongo-seeding";

const ERROR_MESSAGES = {
  MISSING_DATABASE_CONFIG: "missing database connection-string",
  MISSING_COLLECTIONS_TO_IMPORT: "missing collections argument",
};

export default class MongodbSeeder {
  constructor(config) {
    if (!config.database) {
      throw new Error(ERROR_MESSAGES.MISSING_DATABASE_CONFIG);
    }
    this.config = config;
    this.seeder = new Seeder(this.config);
  }

  async import_collections(collections = []) {
    try {
      if (!collections) {
        throw new Error(ERROR_MESSAGES.MISSING_COLLECTIONS_TO_IMPORT);
      }
      await this.seeder.import(collections);
    } catch (err) {
      throw new Error(err);
    }
  }
}
