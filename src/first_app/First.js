function First(){
    const name = "React";

    const ulStyle = {
        color:"orange",
        border: "1px solid blue"
    }
    return(
        <div className="container"
             style={{color:"red" , background : "skyblue"}}
        >
            <div>First {name}</div>
            <ul style={ulStyle}>
                <li>apple</li>
                <li>pineApple</li>
                <li>banana</li>
            </ul>
        </div>

    )
}

export default First;

/*

React
html ()
js {} >> 쓰고싶으면 무조건 {}안에 쓴다
!!!!!!!컴포넌트 : 첫글자 !!!!대문자 ~~~~~ (파일명도 첫글자 대문자여야 함 ~~~~)
 */