import './style.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {
    Outlet
} from 'react-router-dom'

export default function Template() {

    return (
        <div>
            {/* Affiche le Header sur toutes les pages qui ont cette base */}
            <Header />
            {/* Le Outlet est remplacé par le contenu de la page ciblé via l'URL */}
            <Outlet />
            {/* Affiche le Footer sur toutes les pages qui ont cette base */}
             <Footer /> 
        </div>
    )
}