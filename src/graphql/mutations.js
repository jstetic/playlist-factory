/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const createSongChart = /* GraphQL */ `
  mutation CreateSongChart(
    $input: CreateSongChartInput!
    $condition: ModelSongChartConditionInput
  ) {
    createSongChart(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateSongChart = /* GraphQL */ `
  mutation UpdateSongChart(
    $input: UpdateSongChartInput!
    $condition: ModelSongChartConditionInput
  ) {
    updateSongChart(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteSongChart = /* GraphQL */ `
  mutation DeleteSongChart(
    $input: DeleteSongChartInput!
    $condition: ModelSongChartConditionInput
  ) {
    deleteSongChart(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;