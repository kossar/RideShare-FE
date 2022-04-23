import { Box, Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import AdPageHeading from "../../components/AdPageHeading";
import CardContainer from "../../components/card/CardContainer";
import { AppContext } from "../../context/AppContext";

const TransportNeedsIndex = () => {
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
      <AdPageHeading title="Soovid" buttonName="Lisa soov" uri="/transportneeds/create" />
      <CardContainer />
    </Container>
  );
};

export default TransportNeedsIndex;
