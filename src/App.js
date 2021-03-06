import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.jpg'

const App = () => {
  return (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Memories</Typography>
              <img src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form />
              </Grid>
            </Grid>
        </Grow>
    </Container>
  );
}

export default App;
