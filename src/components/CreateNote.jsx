import React, {useState} from "react"
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateNote(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    })

    const [cursorIn, setCursorIn] = useState(false)
    console.log(cursorIn)

    function handleChange(event){
        const {name, value} = event.target
        setNote((prevValue) => {
            return {
                ...prevValue, 
                [name]: value
            }
        });
    }

    return (
        <div>
            <form className="create-note">
             {cursorIn && (
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title}></input>
             )}
                <textarea onChange={handleChange} onClick={()=>{setCursorIn(true)}} name="content" placeholder="Take a note..." rows={cursorIn ? "4" : "1"} value={note.content}></textarea>
                <Zoom in={cursorIn}>
                    <Fab 
                        onClick={ (event) => {
                        event.preventDefault()
                        props.onAdd(note)
    //                    console.log(note)
                        setNote({
                                    title:"",
                                    content:""
                                })
                        setCursorIn(false)
                    }}
                    ><AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateNote 