/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = /* GraphQL */ `
  mutation CreatePerson($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
      token
      name
      email
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson($input: UpdatePersonInput!) {
    updatePerson(input: $input) {
      id
      token
      name
      email
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson($input: DeletePersonInput!) {
    deletePerson(input: $input) {
      id
      token
      name
      email
    }
  }
`;
export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
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
export const updateFeedback = /* GraphQL */ `
  mutation UpdateFeedback($input: UpdateFeedbackInput!) {
    updateFeedback(input: $input) {
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
export const deleteFeedback = /* GraphQL */ `
  mutation DeleteFeedback($input: DeleteFeedbackInput!) {
    deleteFeedback(input: $input) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(input: $input) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeam(input: $input) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam($input: DeleteTeamInput!) {
    deleteTeam(input: $input) {
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
export const createPractice = /* GraphQL */ `
  mutation CreatePractice($input: CreatePracticeInput!) {
    createPractice(input: $input) {
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
export const updatePractice = /* GraphQL */ `
  mutation UpdatePractice($input: UpdatePracticeInput!) {
    updatePractice(input: $input) {
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
export const deletePractice = /* GraphQL */ `
  mutation DeletePractice($input: DeletePracticeInput!) {
    deletePractice(input: $input) {
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
export const createDiary = /* GraphQL */ `
  mutation CreateDiary($input: CreateDiaryInput!) {
    createDiary(input: $input) {
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
export const updateDiary = /* GraphQL */ `
  mutation UpdateDiary($input: UpdateDiaryInput!) {
    updateDiary(input: $input) {
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
export const deleteDiary = /* GraphQL */ `
  mutation DeleteDiary($input: DeleteDiaryInput!) {
    deleteDiary(input: $input) {
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
