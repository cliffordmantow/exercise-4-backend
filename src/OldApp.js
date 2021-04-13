import { Component } from 'react';

class List extends Component {
  state = {
    SubTitle: "Cek",
  }
  render() {
    return (
      <div>
        <h1>{this.state.SubTitle}</h1>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.students.map((person)=> {
            return <li>{person}</li>
          })}
        </ul>
        
        <button onClick={() => this.setState({SubTitle: "Selamat Datang"})}> Test </button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const people = ["Clifford", "Aldio", "Chester", "Arter", "Timothy"];
    const people1 = ["Janggo", "Atlas", "Xiamon", "Rex", "Tio"];

    return (
      <div>
        <List title="Student" students={people}/>
        <List title="Student Lain" students={people1}/>
      </div>
    )
  }
}

export default App;