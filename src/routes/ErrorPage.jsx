import { Link } from 'react-router-dom';
import '../assets/styles/error-page.scss';
import { Slide } from '@mui/material';

export default function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-message">
                <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit>
                    <p>
                        404, page not found.
                    </p>
                </Slide>
            </div>
            <Link className="error-link" to="/">Go to Home</Link>
        </div>
    );
}