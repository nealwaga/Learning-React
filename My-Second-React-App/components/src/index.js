import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

/// COMPOSING COMPONENTS
// Navbar Component
const Navbar = () => 
{
  return <h1>This is the NavBar</h1>
}

// Sidebar Component
const Sidebar = () =>
{
  return <h1>This is the SideBar</h1>
}

// Article List Component
const ArticleList = () =>
{
  return <h1>This is the Article List</h1>
}

// App Component
const App = () =>
{
  return(
    <div>
      <Navbar />
      <Sidebar />
      <ArticleList />
    </div>
  );
}


/// DECOMPOSING COMPONENTS
// Input Component
const Input = () =>
{
  return(
    <div>
      <input type="text" placeholder='Enter text here...'/>
      <br/>
      <br/>
    </div>
  );
}

// Button Component
const Button = () =>
{
  return <button type="submit">Submit</button>
}

// Form Component
const Form = () =>
{
  return(
    <div>
      <Input />
      <Input />
      <Input />
      <Button />
    </div>
  );
}

ReactDOM.render(
  // <App />,
  <Form />,
  document.getElementById('root')
)