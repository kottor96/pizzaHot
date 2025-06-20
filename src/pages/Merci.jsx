import '../App.css'

export default function Merci(){

    return(
        <>
            <div id='merci'>
                <div id='commande'>
                    <span style={{display:'flex',}}>
                        <p style={{fontSize:'65px', color:'green', fontWeight:'bolder'}}>✓</p>
                        <p id='p2'>Merci d'avoir passé commande !</p>
                    </span>
                    <span id='question'>
                        <p id='infos'>Une question? N'hésitez pas à contacter notre service à : 
                            <a href="#">infos@pizzahot.be</a></p>
                    </span>
                </div>
            </div>
        </>
    )
}