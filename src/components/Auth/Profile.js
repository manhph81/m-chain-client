import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import FormProfile from '../Form/FormProfile';

const Profile = () => {

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormProfile />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Profile;
