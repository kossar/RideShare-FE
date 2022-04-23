import { Box, TextField, Typography } from "@mui/material";

const VehicleCreateEdit = () => {
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
        id="make"
        label="Mark"
        aria-describedby="Auto mark"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
      <TextField
        id="model"
        label="Mudel"
        type="text"
        autoComplete="current-model"
        aria-describedby="Auto mudel"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
      <TextField
        required
        id="car-number"
        label="Reg number"
        type="text"
        autoComplete="current-regNr"
        aria-describedby="Auto registreermise number"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
      />
    </Box>
  );
};

export default VehicleCreateEdit;
