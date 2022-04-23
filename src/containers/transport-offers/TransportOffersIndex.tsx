import { Box, Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import AdPageHeading from "../../components/AdPageHeading";
import CardContainer from "../../components/card/CardContainer";
import { AppContext } from "../../context/AppContext";

const TransportOffersIndex = () => {
  const appState = useContext(AppContext);

  // const [transportNeeds, setTransportNeeds] = useState([] as ITransportNeed[]);

  // const loadData = async () => {
  //     let result = await BaseService.getAll<ITransportNeed>('TransportNeeds');
  //     console.log(result);

  //     if (result.ok && result.data) {
  //         setTransportNeeds(result.data)
  //     }
  // }

  // useEffect(() => {
  //     loadData();
  // }, []);

  console.log(appState);

  return (
    <Container maxWidth="sm" component="div">
      <AdPageHeading
        title="Pakkumised"
        buttonName="Lisa pakkumine"
        uri="//transportoffers/create"
      />
      <CardContainer />
    </Container>
  );
};

export default TransportOffersIndex;
