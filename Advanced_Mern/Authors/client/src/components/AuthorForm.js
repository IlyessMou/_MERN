import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthorForm = ({ submitHandler, name, setName, errors }) => {
    const navigate = useNavigate();

    return (
        <Box
            component="form"
            onSubmit={submitHandler}
            sx={{margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '50%',}}>
            {errors.map((err, i) => (
                <p key={i} style={{ color: 'red' }}>{err}</p>
            ))}
            <TextField label="Author Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth sx={{ marginBottom: '20px' }}/>
            <Box sx={{ display: 'flex'}}>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <Button type="button" variant="contained" color="secondary" onClick={() => navigate('/authors')} style={{marginLeft:'20px'}}>
                    Cancel
                </Button>
            </Box>
        </Box>
    );
};

export default AuthorForm;
