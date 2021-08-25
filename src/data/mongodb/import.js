import { dbUrl } from '../../server/config';

import MongodbSeeder from './seeder';
import { restaurants } from './collections';

(async () => {
  console.log('setting up mondodb collection...');
  const seeder = new MongodbSeeder({ database: dbUrl });

  console.log('setting mock restaurants collection to mongodb...');
  await seeder.import_collections(restaurants);
})()

