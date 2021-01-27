/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson(
    $id: ID
    $token: String
    $name: String
    $email: String
  ) {
    onCreatePerson(id: $id, token: $token, name: $name, email: $email) {
      id
      token
      name
      email
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson(
    $id: ID
    $token: String
    $name: String
    $email: String
  ) {
    onUpdatePerson(id: $id, token: $token, name: $name, email: $email) {
      id
      token
      name
      email
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson(
    $id: ID
    $token: String
    $name: String
    $email: String
  ) {
    onDeletePerson(id: $id, token: $token, name: $name, email: $email) {
      id
      token
      name
      email
    }
  }
`;
export const onCreateFeedback = /* GraphQL */ `
  subscription OnCreateFeedback(
    $id: ID
    $load: Int
    $muscularState: Int
    $mood: Int
    $sleepQuality: Int
  ) {
    onCreateFeedback(
      id: $id
      load: $load
      muscularState: $muscularState
      mood: $mood
      sleepQuality: $sleepQuality
    ) {
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
export const onUpdateFeedback = /* GraphQL */ `
  subscription OnUpdateFeedback(
    $id: ID
    $load: Int
    $muscularState: Int
    $mood: Int
    $sleepQuality: Int
  ) {
    onUpdateFeedback(
      id: $id
      load: $load
      muscularState: $muscularState
      mood: $mood
      sleepQuality: $sleepQuality
    ) {
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
export const onDeleteFeedback = /* GraphQL */ `
  subscription OnDeleteFeedback(
    $id: ID
    $load: Int
    $muscularState: Int
    $mood: Int
    $sleepQuality: Int
  ) {
    onDeleteFeedback(
      id: $id
      load: $load
      muscularState: $muscularState
      mood: $mood
      sleepQuality: $sleepQuality
    ) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam(
    $id: ID
    $name: String
    $description: String
    $scale: Int
  ) {
    onCreateTeam(
      id: $id
      name: $name
      description: $description
      scale: $scale
    ) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam(
    $id: ID
    $name: String
    $description: String
    $scale: Int
  ) {
    onUpdateTeam(
      id: $id
      name: $name
      description: $description
      scale: $scale
    ) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam(
    $id: ID
    $name: String
    $description: String
    $scale: Int
  ) {
    onDeleteTeam(
      id: $id
      name: $name
      description: $description
      scale: $scale
    ) {
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
export const onCreatePractice = /* GraphQL */ `
  subscription OnCreatePractice(
    $id: ID
    $date: AWSDateTime
    $duration: Int
    $content: String
    $load: Int
  ) {
    onCreatePractice(
      id: $id
      date: $date
      duration: $duration
      content: $content
      load: $load
    ) {
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
export const onUpdatePractice = /* GraphQL */ `
  subscription OnUpdatePractice(
    $id: ID
    $date: AWSDateTime
    $duration: Int
    $content: String
    $load: Int
  ) {
    onUpdatePractice(
      id: $id
      date: $date
      duration: $duration
      content: $content
      load: $load
    ) {
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
export const onDeletePractice = /* GraphQL */ `
  subscription OnDeletePractice(
    $id: ID
    $date: AWSDateTime
    $duration: Int
    $content: String
    $load: Int
  ) {
    onDeletePractice(
      id: $id
      date: $date
      duration: $duration
      content: $content
      load: $load
    ) {
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
export const onCreateDiary = /* GraphQL */ `
  subscription OnCreateDiary(
    $id: ID
    $date: AWSDate
    $temperature: Int
    $cough: Boolean
    $soreThroat: Boolean
  ) {
    onCreateDiary(
      id: $id
      date: $date
      temperature: $temperature
      cough: $cough
      soreThroat: $soreThroat
    ) {
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
export const onUpdateDiary = /* GraphQL */ `
  subscription OnUpdateDiary(
    $id: ID
    $date: AWSDate
    $temperature: Int
    $cough: Boolean
    $soreThroat: Boolean
  ) {
    onUpdateDiary(
      id: $id
      date: $date
      temperature: $temperature
      cough: $cough
      soreThroat: $soreThroat
    ) {
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
export const onDeleteDiary = /* GraphQL */ `
  subscription OnDeleteDiary(
    $id: ID
    $date: AWSDate
    $temperature: Int
    $cough: Boolean
    $soreThroat: Boolean
  ) {
    onDeleteDiary(
      id: $id
      date: $date
      temperature: $temperature
      cough: $cough
      soreThroat: $soreThroat
    ) {
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
