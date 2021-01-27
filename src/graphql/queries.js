/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeamsForPlayer = /* GraphQL */ `
  query GetTeamsForPlayer($player: ID!) {
    getTeamsForPlayer(player: $player) {
      id
      name
      description
      scale
      coaches {
        id
        token
        name
        email
      }
      players {
        id
        token
        name
        email
      }
    }
  }
`;
export const getTeamsForCoach = /* GraphQL */ `
  query GetTeamsForCoach($coach: ID!) {
    getTeamsForCoach(coach: $coach) {
      id
      name
      description
      scale
      coaches {
        id
        token
        name
        email
      }
      players {
        id
        token
        name
        email
      }
    }
  }
`;
export const getOpenFeedback = /* GraphQL */ `
  query GetOpenFeedback($player: ID!) {
    getOpenFeedback(player: $player) {
      id
      practice {
        id
        date
        duration
        content
        load
      }
      player {
        id
        token
        name
        email
      }
      load
      muscularState
      mood
      sleepQuality
      finished
      attended
      reasonNotAttended
    }
  }
`;
export const getOpenDiary = /* GraphQL */ `
  query GetOpenDiary($player: ID!) {
    getOpenDiary(player: $player) {
      id
      practice {
        id
        date
        duration
        content
        load
      }
      player {
        id
        token
        name
        email
      }
      load
      muscularState
      mood
      sleepQuality
      finished
      attended
      reasonNotAttended
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!, $name: String!) {
    getPerson(id: $id, name: $name) {
      id
      token
      name
      email
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: TablePersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
        name
        email
      }
      nextToken
    }
  }
`;
export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!, $finished: Boolean!) {
    getFeedback(id: $id, finished: $finished) {
      id
      practice {
        id
        date
        duration
        content
        load
      }
      player {
        id
        token
        name
        email
      }
      load
      muscularState
      mood
      sleepQuality
      finished
      attended
      reasonNotAttended
    }
  }
`;
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: TableFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        load
        muscularState
        mood
        sleepQuality
        finished
        attended
        reasonNotAttended
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!, $name: String!) {
    getTeam(id: $id, name: $name) {
      id
      name
      description
      scale
      coaches {
        id
        token
        name
        email
      }
      players {
        id
        token
        name
        email
      }
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: TableTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        scale
      }
      nextToken
    }
  }
`;
export const getPractice = /* GraphQL */ `
  query GetPractice($id: ID!) {
    getPractice(id: $id) {
      id
      date
      duration
      content
      load
      team {
        id
        name
        description
        scale
      }
    }
  }
`;
export const listPractices = /* GraphQL */ `
  query ListPractices(
    $filter: TablePracticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPractices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        duration
        content
        load
      }
      nextToken
    }
  }
`;
export const getDiary = /* GraphQL */ `
  query GetDiary($id: ID!, $date: AWSDate!) {
    getDiary(id: $id, date: $date) {
      id
      date
      player {
        id
        token
        name
        email
      }
      temperature
      cough
      soreThroat
      coryza
      dyspnea
      dysgeusia
      dyarrhea
    }
  }
`;
export const listDiaries = /* GraphQL */ `
  query ListDiaries(
    $filter: TableDiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        temperature
        cough
        soreThroat
        coryza
        dyspnea
        dysgeusia
        dyarrhea
      }
      nextToken
    }
  }
`;
