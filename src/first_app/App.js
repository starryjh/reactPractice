import First from "./First";
import Scd from "./Scd";

import Third from "./Third";
import Hder from "./components/Hder"
import Section from "./components/Section"
import Footer from "./components/Footer"
import './App.css' ;

//한줄
/* 여러줄주석 js 
<img src="path" id="img" class="img" />
//attribute
*/

function App(){
    const logo = "KOREAIT";
    const menus = ['오특','신상','랭킹'];
    const consolePrint =()=>{
        console.log('print');
    }
    return(
        <div>
            <Hder 
            logo={"jemicom"} 
            menus={menus} 
            consolePrint={consolePrint}
            />

            <Section />
            <Footer> 내용이 있으면 쌍으로 이루어진 태그</Footer>

        </div>
    )
}

export default App;