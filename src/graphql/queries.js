/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const getSongChart = /* GraphQL */ `
  query GetSongChart($id: ID!) {
    getSongChart(id: $id) {
      id
      name
      description
    }
  }
`;
export const listSongCharts = /* GraphQL */ `
  query ListSongCharts(
    $filter: ModelSongChartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongCharts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
