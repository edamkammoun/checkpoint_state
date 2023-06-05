import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          fullName: "Edam Kammoun",
          bio: "Hey! I'm learning web development",
          imgSrc:
            "https://media.gqmagazine.fr/photos/5d8b6763c7191e00083ebdb9/1:1/w_1068,h_1068,c_limit/reussite.jpg",
          profession: "Student",
          show: false,
        },
        {
          fullName: "Mohammed Kammoun",
          bio: "Hey ! I'm learning web development",
          imgSrc: "https://dishekimi.com/wp-content/uploads/2023/02/suu.jpg",
          profession: "Business Man",
          show: false,
        },
        {
          fullName: "Nejah Yengui",
          bio: "Hey ! I'm teaching web development",
          imgSrc:
            "https://media.licdn.com/dms/image/D4D03AQHN6xkqyvDC3w/profile-displayphoto-shrink_800_800/0/1665140073110?e=2147483647&v=beta&t=lzfszYaFQ0Si5ji7ejY1Ah_7A1Jv425kippKRHQ3LN8",
          profession: "DevOps engineer",
          show: false,
        },
      ],
      mountedTime: null,
      intervalId: null,
    };
  }

  componentDidMount() {
    this.setState({
      mountedTime: new Date().toLocaleTimeString(),
      intervalId: setInterval(() => {
        this.setState({ mountedTime: new Date().toLocaleTimeString() });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  showProfile = (i) => {
    this.setState((prevState) => {
      const updatedPersons = prevState.persons.map((person, idx) => {
        if (idx === i) {
          return { ...person, show: !person.show };
        }
        return person;
      });

      return { persons: updatedPersons };
    });
  };

  render() {
    const { persons, mountedTime } = this.state;

    return (
      <div>
        {persons.map((person, i) => (
          <div key={i}>
            <h2>{person.fullName}</h2>
            <button onClick={() => this.showProfile(i)}>
              Show Profile
            </button>
            {person.show && (
              <div>
                <p>{person.bio}</p>
                <img src={person.imgSrc} alt="Profile" style={{ height: "300px", width: "300px" }}/>
                <p>{person.profession}</p>
              </div>
            )}
          </div>
        ))}
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p>Component mounted at: {mountedTime}</p>
      </div>
    );
  }
}

export default App;
