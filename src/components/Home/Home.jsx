import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <div style={{textAlign: 'center'}}>
            <h1 className="p-4">Product Management System</h1>
            <Button as={Link} to="/products" variant="primary" size="lg" >Go to products page →</Button>
        </div>
        </>
    );
}
export default Home;