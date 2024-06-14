
import { useState } from 'react';
import './App.css';

function App() {
  const [Value, setvalue] = useState('')

 
  return (
    <>
      <div className="container w-100 h-100vh d-flex align-items-center justify-content-center mt-2">
        <div className="calculator border p-4 "> 
          
          <form>
            
            <div className='input mt-5'>
              <input width={"500px"} type="text" value={Value} />
            </div>
            <br />
            <div className='btns '>
             
              <input type="button" onClick={e=>setvalue('')}  className='btn' value="C" />
              <input type="button" onClick={e=>setvalue(Value.slice(0,-1))}  className='btn' value="DE" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="%" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="/" />
            </div>
            <div>
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="7" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="8" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="9" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="*" />
            </div>
            <div>
             
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="4" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="5" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="6" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="-" />
            </div>
            <div>
              
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="1" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="2" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="3" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="+" />
            </div>
            <div>
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="0" />
              <input type="button" onClick={e=>setvalue(Value + e.target.value)}  className='btn' value="." />
              <input type="button" onClick={e=>setvalue(eval(Value))} style={{ width: "100px" }} className='btn' value="=" />
            </div>
      
          </form>
        </div>
     </div>
    </>
  );
}

export default App;
