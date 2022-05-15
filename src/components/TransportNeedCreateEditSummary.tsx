import {
  List,
} from "@mui/material";
import { ITransportNeed } from "../dto/ITransportNeed";
import { ToTextHelper } from "../helpers/ToTextHelper";
import SummaryLine from "./SummaryLine";
import { format } from 'date-fns'

const TransportNeedCreateEditSummary = (props: {
  transportNeed: ITransportNeed;
}) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <SummaryLine
        itemName="Alguskoht"
        mainText={ToTextHelper.locationToText(
          props.transportNeed.startLocation
        )}
        subText={props.transportNeed.startLocation.description}
      />
      <SummaryLine
        itemName="Sihtkoht"
        mainText={ToTextHelper.locationToText(
          props.transportNeed.destinationLocation
        )}
        subText={props.transportNeed.destinationLocation.description}
      />
      <SummaryLine
        itemName="Aeg"
        mainText={format(props.transportNeed.startAt!, 'dd.MM.yyyy hh:MM')}
      />
       <SummaryLine
        itemName="Inimeste arv"
        mainText={props.transportNeed.personCount.toString()}
      />
      <SummaryLine
        itemName="Piirhind"
        mainText={props.transportNeed.price?.toString()}
      />
      <SummaryLine
        itemName="Kommentaar"
        mainText={props.transportNeed.description}
      />
    </List>
  );
};

export default TransportNeedCreateEditSummary;
