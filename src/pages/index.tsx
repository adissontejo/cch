import { Navbar } from '~/components';
import Card from "../components/Card";

import { Container } from './styles';

const Home = () => {
  const card_exemplo = {
    text:'Aqui vai a ______ incompleta',
    type:'question', 
    size:'sm', 
    autor:'Petrola', 
    baralho:'Tandaiola', 
    create_at:'hoje né'
  }

  return(
    <Container>
      <Navbar />
      <Card data={card_exemplo}/>
      <h1>cch</h1>
    </Container>
  )

}
  


export default Home;
