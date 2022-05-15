import { Box, TextField, Typography } from "@mui/material";
import { ILocationCreateEditProps } from "../types/ILocationCreateEdtiProps";

const LocationCreateEdit = (props: ILocationCreateEditProps) => {
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
        id="country"
        label="Riik"
        helperText="Tühjaks jätmisel määratakse riigiks Eesti"
        aria-describedby="Alguskoha riik"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.location.country}
        onChange={(e) =>
          props.setLocation({ ...props.location, country: e.target.value })
        }
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
        value={props.location.province}
        onChange={(e) =>
          props.setLocation({ ...props.location, province: e.target.value })
        }
      />
      <TextField
        required
        id="city"
        label="Linn"
        type="text"
        error={props.locationErrors.cityError}
        aria-errormessage={props.locationErrors.cityErrorText}
        helperText={
          props.locationErrors.cityError
            ? props.locationErrors.cityErrorText
            : null
        }
        autoComplete="current-city"
        aria-describedby="Linn"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.location.city}
        onChange={(e) =>
          props.setLocation({ ...props.location, city: e.target.value })
        }
      />
      <TextField
        required
        id="address"
        label="Aadress"
        type="text"
        error={props.locationErrors.addressError}
        aria-errormessage={props.locationErrors.addressErrorText}
        helperText={
          props.locationErrors.addressError
            ? props.locationErrors.addressErrorText
            : null
        }
        autoComplete="current-address"
        aria-describedby="Aadress"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.location.address}
        onChange={(e) =>
          props.setLocation({ ...props.location, address: e.target.value })
        }
      />
      <TextField
        id="description"
        label="Kirjeldus"
        type="text"
        autoComplete="current-description"
        aria-describedby="Kirjeldus"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.location.description}
        onChange={(e) =>
          props.setLocation({ ...props.location, description: e.target.value })
        }
      />
    </Box>
  );
};

export default LocationCreateEdit;
