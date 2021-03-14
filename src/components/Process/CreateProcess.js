import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getProcess } from '../../actions/process';

import FormProcess from '../Form/FormProcess'
import Process from './Process';

const CreateProcess = (location) => {
    const dispatch = useDispatch();

    const productId = useState(location.match.params.id)

    useEffect(() => {
        dispatch(getProcess());
    }, [productId, dispatch]);
    return (
       
        <Grow in>
            <Container>
                <Grid container spacing={2} >
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Process productId={productId[0]} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormProcess productId={productId[0]} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default CreateProcess;
