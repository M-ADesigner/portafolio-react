import Spinner from 'react-bootstrap/Spinner';
import "./repository.css"

function LoaderFetch() {
  return (
    <div className='containerLoader text-center'>
        <Spinner animation="border" className='m-5' />
    </div>
      )
}

export default LoaderFetch;