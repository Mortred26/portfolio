import '../style/Footer.css'
import '../style/main.css'
import '../style/Media.css'
import React from 'react'


function Footer(){

    return (
        <footer class="contacts">
        <div class="container">
          <div class="contacts-title">
            <h2 class="title-1">Contants</h2>
          </div>
    
          <div class="contacts-content" data-aos="fade-down">
            <p>Want to know more or just chat? 
              <br/>You are welcome!</p>
          </div>  
    
          <div class="contacts-button" data-aos="fade-down">
                <a class="btn" href="#!">Send message</a>
          </div>
    
          <div class="contacts-social" data-aos="zoom-in"> 
            <a href="#!"><img src="/img/svgfile/LinkedIn.svg" alt="LinkedIn" /></a>
            <a href="#!"><img src="/img/svgfile/surface1 6.svg" alt="Instagram" /></a>
            <a href="#!"><img src="/img/svgfile/behance.svg" alt="Behance" /></a>
            <a href="#!"><img src="/img/svgfile/surface1 7.svg" alt="Dribble" /></a>
          </div>
    
          <div class="contacts-footer" data-aos="fade-up">
            <p> Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
          </div>
        </div>
        
      </footer>
        )
}
export default Footer;