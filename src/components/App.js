import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={events:[]}
  }

  componentDidMount(){
    fetch(`https://assessments.bzzhr.net/calendar/?format=json`)
    .then(response=>response.json())
    .then(json=>console.log(json.results))
    .catch(err=>console.log(err))
  }

  render(){
    return (
      <div>
        React App
      </div>
    )
  }
}

export default App;
