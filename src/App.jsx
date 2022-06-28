import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css'
import { add, remove } from './features/todoReducer';



function App() {

const todos = useSelector((state)=> state.todos)
const dispatch = useDispatch()
const [text, setText] = useState('')

const handleAdd = () =>{
  dispatch(add(text))
  setText("")
}
const handleDelete = (index) =>{
dispatch(remove(index))
}

  return (
    <div className={styles.app}> 

      <input value={text} onChange={(e)=> setText(e.target.value) }/>
      <button onClick={handleAdd}>➕</button>
      {todos.map((item,index)=>{
        return (
<div>
  {item}
  <button key={index}  onClick={() => handleDelete(index)}>удалить</button>
  <input type="checkbox"/>
</div>
        )
      })}

    </div>
  );
}

export default App;
