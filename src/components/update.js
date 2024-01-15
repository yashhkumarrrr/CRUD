import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [marks, setMarks] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setMarks(localStorage.getItem('marks'));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://64869defbeba6297278ef763.mockapi.io/StudentDatabase/${id}`, {
                name: name,
                marks: marks,
            })
            .then(() => {
                navigate('/');
            });
    };

    return (
        <>
            <div className='update-body'>

                <div className='update-section'>
                    <div className='update-heading'>Update Database</div>

                    <div className='update-input'>
                        <TextField
                            id='update-input-area'
                            required
                            value={name}
                            variant='standard'
                            label='Edit Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='update-input'>
                        <TextField
                            id='update-input-area'
                            required
                            value={marks}
                            variant='standard'
                            label='Edit Marks'
                            onChange={(e) => setMarks(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button
                            id='update-btn'
                            variant='contained'
                            type='submit'
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Update;