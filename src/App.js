// import React, { Component } from 'react'
// // import Animal from './Animal'
// // import Todo from './Todo'
// import Person from './Person'

// class App extends Component {
//   render() {
//     return (
//       <Person name="sunrise" age ={299}></Person>
//     )
//   }
// }
// export default App

import React, { Component } from 'react';
// import Todo from './Todo';
import Person from './Person'

class App extends Component {
  render() {
    return (
    <>
    <Person name= 'victoria' age={13} city= 'seoul'></Person>
    <Person name= 'sun' age= {34} city= 'busan'></Person>
    <Person name= 'johseb' age= {25} city= 'busan'></Person>
    <Person name= 'syleemomo' age= { 9} city= 'seoul'></Person>
    <Person name= 'hannah' age= {41} city= 'daegu'></Person>
    <Person name= 'shara' age= {37} city= 'seoul'></Person>
    <Person name= 'martin' age= {28} city= 'daegu'></Person>
    <Person name= 'gorgia' age= {39} city= 'seoul'></Person>
    <Person name= 'nana' age= {24} city= 'busan'></Person>
    <Person name= 'dannel' age= {19} city= 'seoul'></Person>
    </>
    )
  }
}
export default App


// class App extends Component {
//   render() {
//     return <Todo user="syleemomo" name="cleaning" done="false" description="cleaning my room on weekends"></Todo>
//   }
// }

// export default App;