import { Container, Row } from "react-bootstrap";
import AccordionHome from "../components/componentsHome/accordionHome";

import CardsHome from "../components/componentsHome/cardsHome";

export default function home() {
    return(
            <Container className="py-3 text-center">
                <h1>
                    Deseja entender como funcionam <span className="text-warning">criptomoedas</span>?
                   
                </h1>
                <h4 className="">
                    Aqui você pode entender o que são e como usá-las     
                </h4>

                <CardsHome/>
                    
                
                <AccordionHome/>
            </Container>
     
            
            
       
        



    )
}