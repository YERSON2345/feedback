import Header from "./componetes/Header";
import FeedbackItem from "./componetes/FeedbackItem";
function App(){
    //objeto de estilos
    const HeaderStyles ={
        backgroundColor:'blue',
        color:'red'
    }

    return(
        <div className="container">  
            {/*props: atributos de etiqueta de un componente*/ }      
            <Header
            color ={HeaderStyles.color}/>
            <FeedbackItem/>  
            <FeedbackItem/>  
            <FeedbackItem/>  
            <FeedbackItem/>                                           
            
        </div>

    )
}

export default App;