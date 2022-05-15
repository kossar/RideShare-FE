import { Box, TextField, Typography } from "@mui/material";
import { IVehicleCreateEditProps } from "../types/IVehicleCreateEdtiProps";

const VehicleCreateEdit = (props: IVehicleCreateEditProps) => {
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
        value={props.vehicle.make}
        onChange={(e) =>
          props.setVehicle({ ...props.vehicle, make: e.target.value })
        }
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
        value={props.vehicle.model}
        onChange={(e) =>
          props.setVehicle({ ...props.vehicle, model: e.target.value })
        }
      />
      <TextField
        required
        id="car-number"
        label="Reg number"
        type="text"
        error={props.vehicleErrors.numberError}
        aria-errormessage={props.vehicleErrors.numberErrorText}
        helperText={
          props.vehicleErrors.numberError
            ? props.vehicleErrors.numberErrorText
            : null
        }
        autoComplete="current-regNr"
        aria-describedby="Auto registreermise number"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.vehicle.number}
        onChange={(e) =>
          props.setVehicle({ ...props.vehicle, number: e.target.value })
        }
      />
    </Box>
  );
};

export default VehicleCreateEdit;
