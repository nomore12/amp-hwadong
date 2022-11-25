// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Type = {
  "NOTICE": "NOTICE",
  "REPORT": "REPORT"
};

const { Posts } = initSchema(schema);

export {
  Posts,
  Type
};