
import { StatusBar } from 'expo-status-bar';



//Components
import Home from "./components/HomePage"


//Styles Components
import { Container } from "./styles/appStyles";


export default function App() {
  return (
    <Container>
      <Home/>
      <StatusBar style="dark" />
    </Container>
  );
}
