import { useState } from "react";

const Feedbackitem = () =>{

    const [ rating,setRating ]= useState(2)
    const [ text, setText] = useState("Mejorar cursos, mejorares recursos")

    const addNota=()=>{
        //cambiar estado a rating
        //parametro para valor anterior
        setRating((prev)=>{
            return prev + 1
        })
    }
    const resNota=()=>{
        //cambiar estado a rating
        //parametro para valor anterior
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-dislay">
               {text} 
            </div>
            <button className="btn"onClick={addNota}>
                Subir nota
            </button>
            <br></br><br />
            <button className="btn" onClick={resNota}>
                Restar nota
            </button>
        </div>
    )
}

export default Feedbackitem;
