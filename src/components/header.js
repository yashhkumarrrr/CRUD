import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header() {
    const logo = require('./images/logo.png');
    return (
        <>
            <div className='header-body'>

                <div>
                    <Link
                        to='http://yashhkumarrrr.netlify.app'
                        target='_blank'
                    >
                        <img
                            alt=''
                            src={logo}
                            title='Yash Kumar'
                            className='header-img'
                        />
                    </Link>
                </div>

                <div className='header-txt'>
                    
                    <div>
                        <Link to='/'>
                            <Button id='header-links'>
                                Home
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link to='/feedback'>
                            <Button id='header-links'>
                                Feedback
                            </Button>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Header;