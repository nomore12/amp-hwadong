// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ImagePostType = {
  "WCO": "WCO",
  "ETC": "ETC"
};

const Type = {
  "NOTICE": "NOTICE",
  "REPORT": "REPORT"
};

const { ImagePost, Posts } = initSchema(schema);

export {
  ImagePost,
  Posts,
  ImagePostType,
  Type
};