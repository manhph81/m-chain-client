import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Products from '../Products/Products';
import FormProduct from '../Form/FormProduct';

import { getProducts } from '../../actions/products';
import { getPosts } from '../../actions/posts'

const Manufacturer = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getPosts())
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container spacing={2} >
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Products setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormProduct currentId={currentId} setCurrentId={setCurrentId}  />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Manufacturer;
