import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTeams } from '../graphql/queries';
import { createTeam } from '../graphql/mutations'
//import { useState, useEffect } from 'react';

/*
const [teams, setTeams] = useState([]);

useEffect(() => {
    fetchTeams()
}, [])
*/


const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default class Teams extends Component {

  state = {
    teams: [],
    dataIsReturned: false
  }

  async componentDidMount() {
    try {
      // const teamData = API.graphql(graphqlOperation(listTeams));
      const teamData = await API.graphql({query: listTeams, authMode: 'AMAZON_COGNITO_USER_POOLS'});
      const teamList = teamData.data.listTeams.items;
      console.log('team list', teamList);
      this.setState({teams: teamList, dataIsReturned: true});
    } catch (error) {
      console.log('error on fetching teams', error);
    }
  }

  render() {
    if (this.state.dataIsReturned === true) {
      return (
        <div>
          <h1>My Teams</h1>
          <div>
            {this.state.teams.map(team => (
              <div key={team.name} className="team">
                {team.name}
              </div>
              ))}
          </div>
          <div style={styles.container}>
            <h2>TrainingTracker</h2>
{ /*
                <input
                  onChange={event => setInput('name', event.target.value)}
                  style={styles.input}
                  value={formState.name}
                  placeholder="Name"
                />
                <input
                  onChange={event => setInput('description', event.target.value)}
                  style={styles.input}
                  value={formState.description}
                  placeholder="Description"
                />
                <button style={styles.button} onClick={addTodo}>Create Todo</button>
                {
                  todos.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} style={styles.todo}>
                      <p style={styles.todoName}>{todo.name}</p>
                      <p style={styles.todoEmail}>{todo.email}</p>
                      <p style={styles.todoId}>{todo.id}</p>
                      <p style={styles.todoToken}>{todo.token}</p>
                    </div>
                  ))
                }
*/}
          </div>
        </div>)
    } else {
      return (<h1> Loading ...</h1>)
    }
  }
}
