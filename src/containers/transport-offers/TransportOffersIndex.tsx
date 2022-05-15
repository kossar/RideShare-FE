import { Box, Button, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AdPageHeading from "../../components/AdPageHeading";
import CardContainer from "../../components/card/CardContainer";
import { CTransportOffers } from "../../configuration";
import { AppContext } from "../../context/AppContext";
import { ITransportAdListItem } from "../../dto/ITransportAdListModel";
import { BaseService } from "../../services/BaseService";

const TransportOffersIndex = () => {
  const appState = useContext(AppContext);

  const [transportOffers, setTransportOffers] = useState(
    [] as ITransportAdListItem[]
  );

  const loadData = async () => {
    let result = await BaseService.getAll<ITransportAdListItem>(
      CTransportOffers,
      appState.auth.token
    );
    console.log(result);

    if (result.ok && result.data) {
      setTransportOffers(result.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(appState);

  return (
    <Container maxWidth="sm" component="div">
      <AdPageHeading
        title="Pakkumised"
        buttonName="Paku küüti"
        uri="/transportoffers/create"
      />
      <>
        {transportOffers.map((transportOffer) => (
          <CardContainer key={transportOffer.id} transportAd={transportOffer} />
        ))}
      </>
    </Container>
  );
};

export default TransportOffersIndex;
