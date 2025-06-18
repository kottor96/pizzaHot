import { useSelector } from "react-redux";


export default function Home() {

const listPizza = useSelector((state)=> state.pizza.listPizza)

    return(

    <>
        <div style={{width:'100%', height:'80vh', padding:'0 10% 0 10%', display:'flex', backgroundColor:'rgb(245, 247, 249)'}}>
            <div style={{width:'66%', backgroundColor:'wheat', height:'100%'}}>
                {listPizza.map((element,index)=>
                    <li key={index}>
                        {element.name}
                    </li>
                )}
            </div>
            <div style={{width:'33%', height:'100%', display:'flex',padding:'2% 0 0 2%'}}>
                <div style={{backgroundColor:'white', height: '600px', width:'370px'}}>

                </div>
            </div>
        </div>
    </>)
}