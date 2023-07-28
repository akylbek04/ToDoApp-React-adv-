import React from 'react'
import './List.css'

export default class List extends React.Component{

    constructor(){
        super();
        this.state = {
            inputEditVal: '',
            editId: null,
            isEditable: false
        }
    }

    // handleChange = (e) => {
    //     this.setState(prevState => {
    //         return({
    //             ...prevState,
    //             inputEditVal: e.target.value
    //         })
    //     })
    // }

    // handleComplete = () => {

    //     const {handleToDoEdit}  = this.props
    //     const {inputEditVal} = this.state

    //     this.setState(prevState => {
    //         return({
    //             ...prevState,
    //             editId: null
    //         })
    //     })

    //     handleToDoEdit( inputEditVal )
    // }

    handleEdit = () => {
        this.setState(prevState => {
            return({
                ...prevState,
                // editId: id,
                // inputEditVal: name,
                isEditable: !this.state.isEditable
            })
        })
    }


    render(){
        console.log(this.props);

        const {name, id, handleDelete} = this.props
        const { isEditable } = this.state
        const {handleComplete, handleEdit, handleChange} = this

        return(
            <li className='List'>
        
                <p  contentEditable={isEditable ? true : false}>{name}</p>
    
                <div className='todo-actions'>
                    <button onClick={() => handleDelete(id)}>
                        <i className="fa fa-trash" style={{ fontSize: "16px" }}></i>
                    </button>

                    <button  onClick={handleEdit}>
                        <i className={isEditable ? "fa fa-check" : "fa fa-pencil"} style={{ fontSize: "16px" }}></i>
                    </button>
                </div>
                
                {/* { editId !== null && editId === id ? (
                    <input 
                        type='text' 
                        value={inputEditVal} 
                        onChange={handleChange}
                    />
                ) : (
                    <p>{name}</p>
                )}
    
                <button onClick={() => handleDelete(id)}>
                    <i className="fa fa-trash" style={{ fontSize: "16px" }}></i>
                </button>

                { editId !== null && editId === id ? (
                    <button onClick={() => handleComplete(name, id)}>
                        <i className="fa fa-check" style={{ fontSize: "16px" }}></i>
                    </button>
                ) : (
                    <button onClick={() => handleEdit(id, name)}>
                        <i className="fa fa-pencil" style={{ fontSize: "16px" }}></i>
                    </button> 
                )} */}
            </li>
        )

    }
}