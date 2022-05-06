export const Button =(props)=>{
    return <div className='button' onClick={props.onClick}>
        <span className='button_up'>{props.up}</span>
        <span className='button_down'>{props.down}</span>
    </div>

}