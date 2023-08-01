// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CountryEnum = {
  "INDIA": "INDIA",
  "US": "US",
  "CANADA": "CANADA",
  "UK": "UK",
  "AUSTRALIA": "AUSTRALIA",
  "MALAYSIA": "MALAYSIA",
  "SINGAPORE": "SINGAPORE"
};

const { Event } = initSchema(schema);

export {
  Event,
  CountryEnum
};