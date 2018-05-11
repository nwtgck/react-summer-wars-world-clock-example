import React from 'react'
import WorldClock from 'react-summer-wars-world-clock'
import ReactDOM   from 'react-dom';


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <WorldClock />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
