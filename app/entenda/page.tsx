import { Container } from "react-bootstrap";
import AccordionEntenda from "../../components/componentsEntenda/accordionEntenda";

const entenda=()=>{
    return(
        <Container className="py-3">
            <h1>Como funciona?</h1>
            <AccordionEntenda></AccordionEntenda>
            
        </Container>
        
    )

}

export default entenda;