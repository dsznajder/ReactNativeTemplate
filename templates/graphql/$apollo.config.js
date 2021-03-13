module.exports = {
  client: {
    includes: ['./src/queries/*.ts'],
    service: {
      name: '<%- project.name %>',
      localSchemaFile: 'src/types/graphql.schema.json',
    },
  },
};
