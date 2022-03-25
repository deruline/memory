// import React,{ Component } from "react"

// export default class Todo extends Component {
//     render() {
//         // 데이터 초기화
//         const todo = {
//             name: "cleaning",
//             done:false,
//             description:"cleaning my room on wekends"
//         }
//         //HTML 템플릿 => JSX문법
//         return (
//             <>
//             <h3>name : {todo.name}</h3>
//             <h4>done : {todo.done ? "finished":"ongoing"}</h4>
//             <p>description: {todo.description}</p>
//             </>
//         )
//     }
// }

// import React,{ Component } from "react"
// export default class Todo extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name: "cleaning",
//             done:false,
//             description:"cleaning my room on wekends"
//         }
//     }
//         // 이벤트 핸들러 함수
//         changeName = () => {
//             this.setState({name:"learning react"})
//         }
//         render(){
//             const{name,done,description}=this.state
//             return (
//                 <>
//                 <h3>name : {name}</h3>
//                 <h4>done : {done ? "finished":"ongoing"}</h4>
//                 <p>description: {description}</p>
//                 <button type = "button" onClick={this.changeName}>이름 변경하기</button>
//                 </>
//             )
//         }
//     }
    
import React, { Component } from 'react';
import'./Todo.css'

function Todo({ user, name, done, description }){
	return (
    	<>
        	<h2>user: {user}</h2>
            	<h3>name: {name}</h3>
                <h4>done: {done? "finished": "ongoing"}</h4>
                <p> description: {description}</p>
                <h2>{user}</h2>
        </>
    )
}

export default Todo;

