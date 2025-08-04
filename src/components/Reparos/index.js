import { MdOutlineWatchLater } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

import './style.css'

function ReparosPage(){
    return (
        <>

           <div className="top">
            <h1>Assistencia técnica</h1>

            <h3>Conte com os especialistas</h3>

            <p>Solucoes rápidas e confiaveis para seu smarthphone</p>

            <button>solicitar reparo </button>
            

            <FaHammer />

            <MdOutlineWatchLater />

            <LiaCertificateSolid />

           </div>



        </>
        
    )
}

export default ReparosPage;