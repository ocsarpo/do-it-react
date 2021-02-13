import './App.css';
import React from 'react';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';

class App extends React.Component {
  render() {

    // const array = [1, 2, 3];
    // const obj = { name: '제목', age: 30 };
    // const node = <h1>노드</h1>;
    // const func = () => { console.log('메시지') };

    return (
      // <ChildComponent 
      //   boolValue={true}
      //   numValue={1}
      //   arrayValue={array}
      //   objValue={obj}
      //   nodeValue={ node }
      //   funcValue={ func }
      // />
      <div>
        <div><b>지루할 때: </b><BooleanComponent bored /></div>
        <div><b>즐거울 때: </b><BooleanComponent /></div>
      </div>
    );
  }
}

export default App;
