import { Grid, Typography } from "@mui/material";

export default function CardText(props: {name: string, content: string}) {
  return (
    <Grid container my={1}>
      <Grid item xs={4}>
        <Typography variant="body2" component={'p'}>
            {props.name}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="subtitle2" component={'p'}>
            {props.content}
        </Typography>
      </Grid>
    </Grid>
  );
}
