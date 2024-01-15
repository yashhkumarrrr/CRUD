import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Greetings() {
    return (
        <>
            <div className='greetings-body'>

                <div className='greetings-section'>

                    <div className='greetings-txt-1'>
                        Thankyou for your Valuable Feedback 😊
                    </div>

                    <div className='greetings-txt-2'>
                        Your feedback is important to me.
                    </div>

                    <div className='greetings-txt-2'>
                        I will carefully consider your suggestions and use them to improve my website.
                    </div>

                    <div className='greetings-btn'>
                        <Link to='/'>
                            <Button
                                color='primary'
                                id='greetings-btn'
                                variant='contained'
                            >
                                Go Back to Home Page
                            </Button>
                        </Link>
                    </div>

                </div>
                
            </div>
        </>
    );
}

export default Greetings;