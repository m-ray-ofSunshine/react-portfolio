

function AboutPage() {

    return (
        <div className=" d-flex justify-content-center" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
          
            borderRadius: "10px",
            marginTop: "20vh",
            marginBottom: "5vh",
            marginLeft: "10vw",
            marginRight: "10vw"
           

        }}>
            <div 
            > 
              <h3 style={{
                  marginTop:"15vh",
                  marginBottom:"15vh",
                  marginLeft:"9vw",
                  marginRight:"9vw",
                  fontFamily: "Libre Baskerville, serif",
                  fontWeight: "550",
                  fontSize: "30px",
              }}><span style={{
                fontFamily: "Impact, Charcoal, sans-serif",
                fontSize: "50px",
                wordSpacing: "3px",
              }}>Hi I'm Matt Ray.</span> I am a full-stack web developer based out of the Twin Cities area in MN. I have experience in front end technologies such as Bootstrap and React and experience in back end technologies such as Node.js and Express. I am also familiar with mySQL and mongoDB. I am looking to further my skills by pursuing my passion for web development.</h3>
            </div>
        </div>
        
       
    )
}
export default AboutPage;