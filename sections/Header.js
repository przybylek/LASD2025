import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 pt-5 mb-0' style={{backgroundColor: '#f0f0f5'}}>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
	  <Image src="/Sopot.jpg" alt='Sopot' fluid />
        </div>
        <div className="col-md-6">
          <h1 className='h1 text-center anchor font-weight-bold'>LASD@<a className='u' href='https://isd2024.ug.edu.pl/'>ISD'24</a></h1>
          <h2 className='text-center h3 py-3'>Track on <strong>Lean and Agile Software Development</strong></h2>
          <h3 className='text-center h4 pb-3'><small>at the 32nd International Conference on Information Systems Development</small></h3>
          <h4 className='text-center h5'>August 26 – 28, 2024</h4>
          <h4 className='text-center h5 pb-3'>Sopot, Poland</h4>
        </div>
      </div>
    </Container>

  </Jumbotron>
)

export default Header