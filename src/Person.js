import React, { Component } from "react" // 라이브러리 호출 

function Person(props) {
  return(
    <>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.city}</h3>
    </>
  )

}
export default Person

// 비구조화 할당 => 객체의 프로퍼티 값들을 변수에 풀어서 복사해준다.
// const Person=({name, age}) => {
//   return (
//     <>
//       <h3>{name}</h3>
//       <h4>{age}</h4>
//     </>
//   )
// }
// export default Person

// class Person extends Component {
//   render(){ // 메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드
//     //컴포넌트에 필요한 데이터 
//     const name = "syleemomo"
//     const age = 3

//     //HTML 템플릿
//     return(
//       <React.Fragment>
//         <h3>{name}</h3>
//         <h4>{age}</h4>
//       </React.Fragment>
//     )
//   }
// }
// export default Person