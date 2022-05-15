import { ListItem, Grid, Typography, Divider } from "@mui/material";

const SummaryLine = (props: {
  itemName: string;
  mainText: string | undefined;
  subText?: string | undefined;
}) => {
  return (
    <>
      <ListItem>
        <Grid container my={1}>
          <Grid item xs={3}>
            <Typography variant="body1" component={"p"}>
              {props.itemName}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2" component={"p"}>
              {props.mainText}
            </Typography>
            {(props.subText && props.subText.length > 0) && (
              <Typography variant="subtitle2" component={"p"}>
                {props.subText}
              </Typography>
            )}
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default SummaryLine;
