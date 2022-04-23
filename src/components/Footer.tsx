import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function Footer(){
    return <footer>
        <Box sx={{ bgcolor: blue[700]}} p={{xs:0, sm:1}}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign={'center'}>
                        <Typography variant="subtitle1" gutterBottom component="div" color='white'>
                            RideShare &reg; {new Date().getFullYear()}
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign={'center'}>
                        <Typography variant="subtitle1" gutterBottom component="div" color='white'>
                            rideshare@info.ee
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
}