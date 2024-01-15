import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <div className='footer-body'>

                <div className='footer-txt'>
                    &copy; yashhkumarrrr
                </div>

                <div className='footer-images'>
                    
                    <div>
                        <Link
                            to='mailto:yashhkumarrrr@gmail.com'
                            target='_blank'
                        >
                            <IconButton>
                                <MailIcon
                                    color='primary'
                                    id='footer-img'
                                />
                            </IconButton>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='http://www.linkedin.com/in/yashhkumarrrr'
                            target='_blank'
                        >
                            <IconButton>
                                <LinkedInIcon
                                    color='primary'
                                    id='footer-img'
                                />
                            </IconButton>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='http://www.github.com/yashhkumarrrr'
                            target='_blank'
                        >
                            <IconButton>
                                <GitHubIcon
                                    color='primary'
                                    id='footer-img'
                                />
                            </IconButton>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Footer;