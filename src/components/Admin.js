import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';


const Admin = () => {
    // const [currentId, setCurrentId] = useState(0);
    // const dispatch = useDispatch();

    // useEffect(() => {
    // }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        ADMIN
                        {/* <Posts setCurrentId={setCurrentId} /> */}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        ADMIN
                        {/* <FormGarden currentId={currentId} setCurrentId={setCurrentId} /> */}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Admin;
