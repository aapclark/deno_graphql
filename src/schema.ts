import {
  buildSchema,
} from "https://cdn.pika.dev/graphql/^15.0.0";

const Schema = buildSchema(`
  schema {
    query: Query
  }

  type Query {
    info: String
  }
`);

export default Schema;
