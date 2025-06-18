import { Link } from "react-router-dom"


export default function Footer(){



    return <>
    <footer style={{backgroundColor:'rgb(35, 31, 32)', height:'50vh' ,padding:'5% 15% 0 15%',}}>
        <div style={{width:'100%', display:'flex', justifyContent:'center', textAlign:'center'}}> 
            <div style={{display:'flex', flexDirection:'column', width:'33%'}}>
                <h6 style={{color:'white', marginBottom:'10%'}}>A propos de Pizza Hut</h6>
                <p style={{color:'white'}}>Magasins</p>
                <p style={{color:'white'}}>La marque Pizza Hut</p>
                <p style={{color:'white'}}>Emplois</p>
            </div>
            <div style={{width:'33%'}}>
                <h6 style={{color:'white', marginBottom:'10%'}}>Commandez en ligne</h6>
                <p style={{color:'white'}}>Magasins</p>
                <p style={{color:'white'}}>La marque Pizza Hut</p>
                <p style={{color:'white'}}>Emplois</p>
            </div>
            <div style={{width:'33%'}}>
                <h6 style={{color:'white', marginBottom:'10%'}}>Contact</h6>
                <p style={{color:'white'}}>Magasins</p>
                <p style={{color:'white'}}>La marque Pizza Hut</p>
                <p style={{color:'white'}}>Emplois</p>
            </div>
        </div>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </footer>
    </>
}