import Card from '../components/Card.jsx';
import naveen from '../assets/images/naveen.JPG';
import varsith from '../assets/images/varsith.png';
import navya from '../assets/images/navya.png';
import matthew from '../assets/images/matthew.png';
import sagar from '../assets/images/Sagar.png'
function Team() {
    return (
      <>
        <h2 className='section-title'>The Team</h2>
        <div className='team'>
          <Card>
            <div className='img-container'>
              <img src={varsith} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Varsith Reddy Legala</h1>
              <p>Varsith is a graduate study at Saint Louis University in this project he mainly worked as a content Validator and aloso contributed for the development of the website and making the sidebar responsive.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={matthew} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Matthew Clendenning</h1>
              <p>Matthew is an undergraduate student studying at Saint Louis University. Focused mainly on the design and development of the website.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={naveen} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Naveen</h1>
              <p>Naveen is a graduate student at Saint Louis University He was responsible for co-ordinating with the group and also worked on the content on the survey.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={navya} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Navya Charitha Bavirisetti</h1>
              <p>Navya is a graduate student at Saint Louis University she helped varsith with the content in the survey </p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={sagar} alt='Sagar Badgujar'/>
            </div>
            <div className='teammate-info'>
              <h1>Sagar Badgujar</h1>
              <p>Sagar is a graduate student at Saint Louis University he helped in finding different resources and also helped in survey paper</p>
            </div>
          </Card>
        </div>
      </>
    )
}
export default Team