import { Box, FormControl, InputLabel, NativeSelect, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { ITransportNeedCreateEditProps } from "../types/ITransportNeedCreateEditProps";
import { DateTimePicker } from "@mui/x-date-pickers";
import { ITransportOfferCreateEditProps } from "../types/ITransportOfferCreateEditProps";

const TransportOfferMainCreateEdit = (props: ITransportOfferCreateEditProps) => {
  return (
    <Box
      component="form"
      autoComplete="off"
      px={2}
      sx={{
        "& .MuiTextField-root": { my: 1 },
      }}
    >
      <Typography variant="caption" component={"p"} my={2} color='palette.info'>
          Tärniga tähistatud väljad on kohustuslikud*
      </Typography>
      <TextField
        required
        id="seat-count"
        label="Vabu kohti"
        type={'number'}
        aria-describedby="Inimeste arv"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.transportOffer.availableSeatCount}
        onChange={(e) => props.setTransportOffer({...props.transportOffer, availableSeatCount: Number(e.target.value)})}
      />
      <TextField
        id="price"
        label="Hind"
        type="number"
        autoComplete="current-price"
        aria-describedby="Hind"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.transportOffer.price}
        onChange={(e) => props.setTransportOffer({...props.transportOffer, price: Number(e.target.value)})}
      />
      <TextField
        required
        id="comment"
        label="Kommentaar"
        type="text"
        autoComplete="current-comment"
        aria-describedby="Kommentaar"
        variant="standard"
        fullWidth
        sx={{ my: 1 }}
        value={props.transportOffer.description}
        onChange={(e) => props.setTransportOffer({...props.transportOffer, description: e.target.value})}
      />
      {/* <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <DatePicker
        label="Basic example"
        value={props.transportNeed.startAt}
        onChange={(newValue) => {
          props.setTransportNeed({...props.transportNeed, startAt: newValue})
        }}
        renderInput={(params) => <TextField {...params} variant='standard'/>}
      /> */}
      <DateTimePicker
        label="Basic example"
        value={props.transportOffer.startAt}
        onChange={(newValue) => {
          props.setTransportOffer({...props.transportOffer, startAt: newValue})
        }}
        renderInput={(params) => <TextField {...params} variant='standard'/>}
      />
    </LocalizationProvider>
    </Box>
  );
};

export default TransportOfferMainCreateEdit;

