import React, { useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ProductDetail from '../Products/Product/ProductDetail';
import FormFind from '../Form/FormFind';


const Home = () => {
    const transaction = useSelector((state) => state?.transaction);
    // const transaction = useSelector((state) => state);
    // console.log(transaction)

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        {!transaction.length ? <ProductDetail transaction={transaction} /> : null}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormFind/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
