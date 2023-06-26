import { useState } from "react";
import "./MyComponet.css";
function Contact() {
    const password = "test";
    const [authorized, setAuthorized] = useState(false);
  
  
  
    function handleSubmit(e) {
      const enteredPassword = e.target.querySelector(
        'input[type="password"]'
      ).value;
  
  
      const auth = enteredPassword === password;
      setAuthorized(auth);
    }
  
  
  
    let login = (
      <form action='#' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre' />
        <input type='password' placeholder='Password' />
        <input type='submit' />
      </form>
    );
  
  
  
  
    let contactInfo = (
      <div className='grid'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-Vd1DrN8Uc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4SX7aXb5vfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kLTI9o5R5pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <nav class="menu"> 
        <a href="Extras.html">Imagenes Ineditas</a> 
      </nav>
    </div>
    
    );
  
  
  
    return (
      <div id='authorization'>
        {authorized ? <h1>Contenido Exclusivo</h1> : <h1>Contenido Exclusivo Ingresa la Contraseña</h1>}
        {authorized ? contactInfo : login}
      </div>
    );
  }
  
  export default Contact;
  
