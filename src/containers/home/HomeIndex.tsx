import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
} from "@mui/material";
import Welcome from "../../components/home/Welcome";
import CardContainer from "../../components/card/CardContainer";
import { ITransportAdListItem } from "../../dto/ITransportAdListModel";
import { BaseService } from "../../services/BaseService";
import { CTransportAds } from "../../configuration";

const HomeIndex = () => {
  const appState = useContext(AppContext);

  const [items, setItems] = useState([] as ITransportAdListItem[]);
  const navigate = useNavigate();

  const loadData = async () => {
    let result = await BaseService.getAll<ITransportAdListItem>(
      `${CTransportAds}${10}`,
      appState.auth.token
    );

    if (result.ok && result.data) {
      console.log(result.data);
      setItems(result.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {appState.auth.token === null ? <Welcome /> : null}
      <Container maxWidth="sm" component="div">
        <Typography variant="h4" component="h1" mt={2}>
          Viimased kuulutused
        </Typography>
        <>
          {items.map((item) => (
            <CardContainer key={item.id} transportAd={item} />
          ))}
        </>
      </Container>
    </>
  );
};

export default HomeIndex;
