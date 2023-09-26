import "../style/Body.css"
import '../style/main.css'
import '../style/Media.css'

function Body(props){
    return (
        <div>
    <section class="services">
      <div class="container">
        <div class="service-row">

          <div class="service-card" data-aos="fade-up">
            <img class="service-card-img" src="./img/svgfile/graphic 1.svg" alt="" />
            <h3 class="service-card-title">UI/UX Design</h3>
            <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
          </div>

          <div class="service-card" data-aos="fade-up">
            <img class="service-card-img" src="./img/svgfile/graphic 1.svg" alt="" />
            <h3 class="service-card-title">Development</h3>
            <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
          </div>

          <div class="service-card" data-aos="fade-up">
            <img class="service-card-img" src="./img/svgfile/graphic 1.svg" alt="" />
            <h3 class="service-card-title">software testing</h3>
            <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
          </div>

        </div>

      </div>
    </section>

    <section class="portfolio">
      <div class="container">
        <div class="portfolio-title">
          <h2 class="title-1">Portfolio</h2>
        </div>

        <div class="project" data-aos="flip-up">
          <img class="project-img" src="./img/Слой 8.jpg" alt="" />
          <h3 class="project-title"><a href="#!">Online fashion store - Homepage</a></h3>
        </div>

        <div class="project" data-aos="flip-up">
          <img class="project-img" src="./img/reebok_web.jpg" alt="" />
          <h3 class="project-title"><a href="#!">Reebok Store - Concept</a></h3>
        </div>

        <div class="project" data-aos="flip-up">
          <img class="project-img" src="./img/reebok_web.png" alt="" />
          <h3 class="project-title"><a href="#!">Braun Landing Page - Concept</a></h3>
        </div>

      </div>
    </section>
        </div>
    )
}

export default Body;