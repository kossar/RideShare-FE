import { Box, TextField, Typography } from "@mui/material";

const LocationCreateEdit = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      px={2}
      sx={{
        "& .MuiTextField-root": { my: 1 },
      }}
    >
      <Typography variant="caption" component={"p"}>
          Tärniga tähistatud väljad on kohustuslikud.
      </Typography>
      <TextField
        required
        id="country"
        label="Riik"
        aria-describedby="Alguskoha riik"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value="Eesti"
      />
      <TextField
        id="Province"
        label="Maakond"
        type="text"
        autoComplete="current-province"
        aria-describedby="Maakond"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
      <TextField
        required
        id="city"
        label="Linn"
        type="text"
        autoComplete="current-city"
        aria-describedby="Linn"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
      <TextField
        required
        id="address"
        label="Aadress"
        type="text"
        autoComplete="current-address"
        aria-describedby="Aadress"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
      <TextField
        id="description"
        label="Kirjeldus"
        type="text"
        autoComplete="current-address"
        aria-describedby="Kirjeldus"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
    </Box>
  );
};

export default LocationCreateEdit;
