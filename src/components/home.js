import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {

    const [data, setData] = useState([]);

    function getData() {
        axios
            .get('https://64869defbeba6297278ef763.mockapi.io/StudentDatabase')
            .then((res) => {
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios
            .delete(`https://64869defbeba6297278ef763.mockapi.io/StudentDatabase/${id}`)
            .then(() => {
                getData();
            });
    }

    const setToLocalStorage = (id, name, marks) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('marks', marks);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='home-body'>

                <div className='home-heading'>
                    Student Database
                </div>

                <div>
                    <table className='home-table'>

                        <thead className='home-thead'>
                            <tr>
                                <th className='home-th'>Name</th>
                                <th className='home-th'>Marks</th>
                                <th className='home-th' id='home-edit'></th>
                                <th className='home-th' id='home-del'></th>
                            </tr>
                        </thead>

                        {data.map((eachData) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td className='home-td'>{eachData.name}</td>
                                            <td className='home-td'>{eachData.marks}</td>
                                            <td className='home-td'>
                                                <Link to='/update'>
                                                    <IconButton
                                                        variant='contained'
                                                        color='success'
                                                        onClick={() =>
                                                            setToLocalStorage(
                                                                eachData.id,
                                                                eachData.name,
                                                                eachData.marks
                                                            )
                                                        }
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>
                                            </td>
                                            <td className='home-td'>
                                                <IconButton
                                                    variant='contained'
                                                    color='error'
                                                    onClick={() => handleDelete(eachData.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })}
                    </table>
                    <div className='home-new-btn'>
                        <Link to='/create'>
                            <Button id='home-create-btn' variant='contained'>Create New</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;