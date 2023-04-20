import React , { useRef }  from 'react'
import '../App.css';
// import { AiFillFacebook } from "react-icons/ai";
import { SocialIcon } from 'react-social-icons';
import {Link} from "react-router-dom";
import emailjs from'@emailjs/browser'/*yetsab w zada sob email"voir dependecies"*/


function Login() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dk2wlkb', 'template_vb0ffmc',form.current, 'iIuZvhltmv_PFgG24')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='main'>
    <div className="navbar">
      <div className="icon">
        <h4 className="logo">
          By Alaa Ben Mohamed
        </h4>
      </div>
      <div className="menu">
    
              <ul>
              
                  <li><a href="https://www.google.com">Home</a></li> 
                  <li> <Link to="/about">ABOUT</Link>
                  </li>
                  <li> <Link to="/Service">SERVICE</Link>
                  </li>

                  <li><Link to="/Design">DESIGN</Link>
                  </li>
                  <li><Link to="/Contact">CONTACT</Link>
                  </li>
                 
              </ul>
       {/* <div> <Route path="/about" element={<About/>} /> </div> */}

          </div>
          <div className="search">
              <input type="search" placeholder="Type to text" name="" className="srch" />
              <a href="#">
                  <button className="btn">
                      search
                  </button>
              </a>
          </div>
      </div>
      <div className="content">
          <h1>Web & <br/><span>Development</span><br/>Course</h1>
          <h2 className="par">Salut, je souhaite que vous avez bien.<br/>C'est une petite application de "routage".
          <br/>De plus lorque on click sur button "login". <br/>
          les information sera envoyes a mon propre addresse email <br/>
          avec une structure que je le deja preparer.
          </h2>
              {/* <button  className="cn"><a href="#">Join us</a></button> */}
           
              <form ref={form} onSubmit={sendEmail}>
              <div className="form">
                  <h2>Login Here</h2>
                  <input type="email" name="from_name" placeholder="Enter Email Here"/>
                  <input type="password" name="message" placeholder="Enter Password Here"/>
                  <button className="btnn"><a href="#">Login</a></button>

                  <p className="link">Don't have an account<br/>
                  <a href="#">Sign up </a> here</p>
                  <p className="liw">Log in with</p>

                  <div className="icons">
                      {/* <a href="#"><AiFillFacebook/></a> */}
                      <a href="#"><SocialIcon url="https://facebook.com/jaketrent" /></a>
                      <a href="#"><SocialIcon url="https://twitter.com/jaketrent" /></a>
                      <a href="#"><SocialIcon url="https://linkedin.com/jaketrent" /></a>
                      <a href="#"><SocialIcon url="https://instagram.com/jaketrent" /></a>
                      <a href="#"><SocialIcon url="https://whatsapp.com/jaketrent" /></a>
      
                  </div>

              </div>
              </form>
                  </div>
    </div>
  )
}

export default Login