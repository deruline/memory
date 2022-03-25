import React from "react"

class Animal extends React.Component{
    state={
        type:'고양이',
        name:'나비',
        size:'매우큼',
        sound:'매우큼',
        appearence:'귀염'
    }
    render(){
        const{type,name,size,sound,appearence} = this.state
        return(
            <>
                
                <h1>동물 정보</h1>
                <h3>종류 - {type}</h3>
                <h3>이름 - {name}</h3>
                <h3>크기 - {size}</h3>
                <h3>소리 - {sound}</h3>
                <h3>생김새 - {appearence}</h3>
            </>
        )
    }
}
export default Animal