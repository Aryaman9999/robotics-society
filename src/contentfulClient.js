import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.contentful.com/content/v1/spaces/0z1ck6ir8wrt';

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer KedyVo0s5FOqHnj8XG1CHmk8eXTsrmsPh36LDmX6hS4`,
  },
});

export default client;
