import axios from 'axios';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';

const Create = () => {
    const [name, setName] = useState('');
    const [marks, setMarks] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64869defbeba6297278ef763.mockapi.io/StudentDatabase', {
            name: name,
            marks: marks,
        })
            .then(() => {
                history('/');
            });
    };

    return (
        <>
            <div className='create-body'>

                <div className='create-section'>
                    <div className='create-heading'>
                        Create Database
                    </div>

                    <div className='create-form'>
                        <div className='create-input'>
                            <TextField
                                required
                                label='Enter Name'
                                variant='standard'
                                id='create-input-area'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='create-input'>
                            <TextField
                                required
                                label='Enter Marks'
                                type='number'
                                variant='standard'
                                id='create-input-area'
                                onChange={(e) => setMarks(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='create-btn'>
                        <Button
                            id='create-submit-btn'
                            type='submit'
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;