import React from 'react';
import ReactDOM from 'react-dom';

// Component
class ExampleClass extends React.Component{
  render() {
    return(
      <div>
        <h1>{this.props.names.map(
          function namesIterator(item, i) {
            return(
              "Athlete " + (i + 1) + ": " + item + ((i != 2) ? ', ' : '\n')
            )
          }
        )}</h1>
      </div>
    );
  }
}

// Default props for ExampleClass component
ExampleClass.defaultProps = {
  title: "Neal",
  names: ["Lionel Messi", "LeBron James", "Steph Curry"]
}


ReactDOM.render(
  <ExampleClass />,
  document.getElementById("root")
)