import Card from './components/Card';
import placeholder from './images/placeholder-person-square.png';
import varsith from './images/varsith.png';
import navya from './images/navya.png';
import matthew from './images/matthew.png';

function Team() {
    return (
      <>
        <div className='team'>
          <Card>
            <div className='img-container'>
              <img src={varsith} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Varsith Reddy Legala</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={matthew} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Matthew Clendenning</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={placeholder} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Naveen</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={navya} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Navya Charitha Bavirisetti</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card>
          <Card>
            <div className='img-container'>
              <img src={placeholder} alt='Varsith'/>
            </div>
            <div className='teammate-info'>
              <h1>Sagar Badgujar</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card>
        </div>
      </>
    )
}

export default Team