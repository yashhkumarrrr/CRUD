import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .required('Name is Required'),
    number: yup
        .number('Enter a valid Number'),
    suggestion: yup
        .string('Enter your Feedback')
        .required('Feedback is Required'),
});

function Feedback() {

    const Root = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            suggestion: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            axios.post('https://64869defbeba6297278ef763.mockapi.io/PortfolioFeedback', {
                Name: formik.values.name,
                Number: formik.values.number,
                Suggestion: formik.values.suggestion,
            });
            Root('/greetings');
        },
    });

    return (
        <>
            <div className='feedback-body'>

                <form onSubmit={formik.handleSubmit} className='feedback-form' >

                    <div className='feedback-heading'>
                        Feedback
                    </div>

                    <div className='feedback-section'>
                        <TextField
                            name='name'
                            variant='standard'
                            id='feedback-input'
                            label='Enter Your Name *'
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            helperText={formik.touched.name && formik.errors.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                        />
                    </div>

                    <div className='feedback-section'>
                        <TextField
                            name='number'
                            type='number'
                            variant='standard'
                            id='feedback-input'
                            onBlur={formik.handleBlur}
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            label='Enter Your Number'
                            helperText={formik.touched.number && formik.errors.number}
                            error={formik.touched.number && Boolean(formik.errors.number)}
                        />
                    </div>

                    <div className='feedback-section'>
                        <TextField
                            rows={6}
                            multiline
                            name='suggestion'
                            variant='standard'
                            id='feedback-input'
                            label='Provide Feedback *'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.suggestion}
                            helperText={formik.touched.suggestion && formik.errors.suggestion}
                            error={formik.touched.suggestion && Boolean(formik.errors.suggestion)}
                        />
                    </div>

                    <div>
                        <Button
                            type='submit'
                            variant='contained'
                            id='feedback-btn'
                        >
                            Submit
                        </Button>
                    </div>

                </form>

            </div>
        </>
    );
}

export default Feedback;