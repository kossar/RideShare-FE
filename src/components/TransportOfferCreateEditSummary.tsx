import {
  List,
} from "@mui/material";
import { ITransportNeed } from "../dto/ITransportNeed";
import { ToTextHelper } from "../helpers/ToTextHelper";
import SummaryLine from "./SummaryLine";
import { format } from 'date-fns'
import { ITransportOffer } from "../dto/ITransportOffer";

const TransportOfferCreateEditSummary = (props: {
  transportOffer: ITransportOffer;
}) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <SummaryLine
        itemName="Alguskoht:"
        mainText={ToTextHelper.locationToText(
          props.transportOffer.startLocation
        )}
        subText={props.transportOffer.startLocation.description}
      />
      <SummaryLine
        itemName="Sihtkoht:"
        mainText={ToTextHelper.locationToText(
          props.transportOffer.destinationLocation
        )}
        subText={props.transportOffer.destinationLocation.description}
      />
      <SummaryLine
        itemName="Sõiduk:"
        mainText={ToTextHelper.vehicleToText(
          props.transportOffer.vehicle
        )}
      />
      <SummaryLine
        itemName="Aeg:"
        mainText={format(props.transportOffer.startAt!, 'MM.dd.yyyy hh:MM')}
      />
       <SummaryLine
        itemName="Vabu kohti:"
        mainText={props.transportOffer.availableSeatCount.toString()}
      />
      <SummaryLine
        itemName="Hind:"
        mainText={props.transportOffer.price?.toString()}
      />
      <SummaryLine
        itemName="Kommentaar:"
        mainText={props.transportOffer.description}
      />
    </List>
  );
};

export default TransportOfferCreateEditSummary;
