import './home.css';
import axios from 'axios';
import * as yup from 'yup';
import * as React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .required('Name is Required'),
    number: yup
        .number('Enter Contact Number')
        .required('Contact Number is Required'),
    message: yup
        .string('Enter your Message')
        .required('Message is Required'),
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 61,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#E0E0E0',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#77589B' : '#ff2c2c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ff0000' : '#616161',
        borderRadius: 20 / 2,
    },
}));

function Home(props) {

    const [snackbarContent, setSnackbarContent] = useState('')
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [successSnackbar, setSuccessSnackbar] = useState(true)

    const openSnackbar = () => {
        setIsSnackbarOpen(true)
    };

    const closeSnackbar = (reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setIsSnackbarOpen(false)
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            try {
                axios.post('https://64869defbeba6297278ef763.mockapi.io/PortfolioFeedback', {
                    Name: formik.values.name,
                    Number: formik.values.number,
                    Message: formik.values.message,
                });
                setSuccessSnackbar(true);
                openSnackbar();
                formik.resetForm();
            }
            catch (e) {
                setSuccessSnackbar(false);
                openSnackbar();
            }
        },
    });

    const logo = require('./images/logo.webp');

    return (
        <>
            <div className={`body-${props.isDark ? 'dark' : 'light'}`}>

                {/* Home Page */}

                <div className='homepage'>
                    <div className={`header-${props.isDark ? 'dark' : 'light'}`}>
                        <div className='header-img'>
                            <a
                                href='#home'
                                aria-label="Home"
                            >
                                <img
                                    alt='Logo'
                                    src={logo}
                                    className='header-logo'
                                />
                            </a>
                        </div>

                        <div className='header-btns'>
                            <div className='feedback-icon-div'>
                                <ErrorOutlineOutlinedIcon sx={{ fontSize: 36 }} />
                            </div>

                            <div className='feedback-icon-div'>
                                <FormControlLabel
                                    id='header-toggle-mode-btn'
                                    control={<MaterialUISwitch
                                        checked={props.isDark}
                                        aria-label='Toggle Mode'
                                        onChange={props.toggleTheme}
                                    />}
                                />
                            </div>
                        </div>
                    </div>

                    <div id='home'>
                    </div>
                </div>

                {/* Contact */}

                <div className='report'>
                    <form onSubmit={formik.handleSubmit} className='report-form'>
                        <div>
                            <div className='report-form-input-div'>
                                <input
                                    name='name'
                                    autoComplete='off'
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                    className={`report-form-input-${props.isDark ? 'dark' : 'light'}`}
                                    onChange={formik.handleChange}
                                    placeholder='Enter Your Name *'
                                />
                                {formik.touched.name &&
                                    <div className='report-form-error'>{formik.errors.name}</div>
                                }
                            </div>

                            <div className='report-form-input-div'>
                                <input
                                    name='number'
                                    type='number'
                                    autoComplete='off'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number}
                                    className={`report-form-input-${props.isDark ? 'dark' : 'light'}`}
                                    onChange={formik.handleChange}
                                    placeholder='Enter Contact Number *'
                                />
                                {formik.touched.number &&
                                    <div className='report-form-error'>{formik.errors.number}</div>
                                }
                            </div>

                            <div className='report-form-input-div'>
                                <textarea
                                    rows={6}
                                    name='message'
                                    autoComplete='off'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className={`report-form-input-${props.isDark ? 'dark' : 'light'}`}
                                    onChange={formik.handleChange}
                                    placeholder='Type your Message *'
                                />
                                {formik.touched.message &&
                                    <div className='report-form-error'>{formik.errors.message}</div>
                                }
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='report-form-btn'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer */}

                <div className='footer'>
                    Developed by -&nbsp;
                    <Link
                        target='_blank'
                        id='footer-link'
                        to='https://yashhkumarrrr.netlify.app'
                    >
                        Yash
                    </Link>
                </div>

                <Snackbar open={isSnackbarOpen} autoHideDuration={1500} onClose={closeSnackbar}>
                    <Alert onClose={closeSnackbar} severity={(successSnackbar) ? 'success' : 'error'} sx={{ width: '100%', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '300' }}>
                        {snackbarContent}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Home;