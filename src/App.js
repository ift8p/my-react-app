import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>This is ReceiptsBook</h2>
}

/* const Field = () => {
  const holder = 'Add a receipt';
  const styledField = {
    width: '300px'
  };
  return <input
            placeholder={holder}
            type="text"
            style={styledField}/>
} */

class Field extends Component {
  render() {
    const holder = 'Add a receipt';
    const styledField = {
      width: '300px'
    };

    return <input
    placeholder={holder}
    type="text"
    style={styledField}/>
  }
}

function Btn() {
  const text = 'Submit';
  const wasSubmitted = false;
/*   const res = () => {
    return 'Submit';
  } */
//  const p = <p>Submit</p>
  return <button>{wasSubmitted ? 'Thank you' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}
export {Header};
export default App;
