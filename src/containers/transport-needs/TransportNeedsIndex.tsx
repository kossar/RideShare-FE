import { Box, Button, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AdPageHeading from "../../components/AdPageHeading";
import CardContainer from "../../components/card/CardContainer";
import { CTransportNeeds } from "../../configuration";
import { AppContext } from "../../context/AppContext";
import { ITransportAdListItem } from "../../dto/ITransportAdListModel";
import { BaseService } from "../../services/BaseService";

const TransportNeedsIndex = () => {
  const appState = useContext(AppContext);

  const [transportNeeds, setTransportNeeds] = useState(
    [] as ITransportAdListItem[]
  );

  const loadData = async () => {
    let result = await BaseService.getAll<ITransportAdListItem>(
      CTransportNeeds,
      appState.auth.token
    );
    console.log(result);

    if (result.ok && result.data) {
      setTransportNeeds(result.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(appState);

  return (
    <Container maxWidth="sm" component="div">
      <AdPageHeading
        title="Soovid"
        buttonName="Tahan küüti"
        uri="/transportneeds/create"
      />
      <>
        {transportNeeds.map((transportNeed) => (
          <CardContainer key={transportNeed.id} transportAd={transportNeed} />
        ))}
      </>
    </Container>
  );
};

export default TransportNeedsIndex;
