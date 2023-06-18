import React, {useState} from 'react'
// 랜덤한 번호

const Third = () => {

    const names = ['kim','park','hong'] ; //0,1,2
    const [name, setName] = useState(names[num]);
    const [num,setNum] = useState(Math.random())
    const numHandle = ()=>{
        const redomNum = Math.floor(Math.random()*3);
        setNum(redomNum);
        setName(names[redomNum]);
    }
    return (
        <div>
            <div className="box">
                {num}{name}
                </div>
            <button onClick={numHandle}>click</button>
        </div>
    )
    
  
}

export default Third