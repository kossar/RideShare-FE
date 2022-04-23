import { Box, Grid, Typography } from "@mui/material";

export default function CardPriceText(props: {
  name: string;
  content: string;
}) {
  return (
    <Box
      component={"div"}
      sx={{
        display: { xs: "flex" },
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: 'flex-end' }
      }}
    >
      <Typography variant="body2" component={"p"} mr={1}>
        {props.name}
      </Typography>
      <Typography variant="h4" component={"p"}>
        {props.content}
      </Typography>
    </Box>
  );
}
