import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import CardText from "../../components/card/CardText";
import CardPriceText from "../../components/card/CardPriceText";
import CardLogin from "../../components/card/CardLogin";
import Welcome from "../../components/home/Welcome";
import CardContainer from "../../components/card/CardContainer";

const HomeIndex = () => {
  const appState = useContext(AppContext);

  const navigate = useNavigate();
  // const [transportNeeds, setTransportNeeds] = useState([] as ITransportNeed[]);

  // const loadData = async () => {
  //     let result = await BaseService.getAll<ITransportNeed>('TransportNeeds');
  //     console.log(result);

  //     if (result.ok && result.data) {
  //         setTransportNeeds(result.data);
  //     }
  // }

  // useEffect(() => {
  //     loadData();
  // }, []);

  console.log(appState);

  return (
    <>
      {appState.auth.token === null ? <Welcome /> : null}
      <Container maxWidth="sm" component="div">
        <Typography variant="h4" component="h1" mt={2}>
          Viimased kuulutused
        </Typography>
        <CardContainer />
      </Container>
    </>
    // <div className="home">
    //     <h1 className="text-center">Tere</h1>
    //     <h1 className="text-center">Tere</h1>
    //     <div className="row d-flex justify-content-around m-5">
    //         <div>
    //             <input
    //                 disabled={appState.auth.token === null}
    //                 type="button"
    //                 value="Ask transport"
    //                 className="btn btn-info p-4"
    //                 onClick={() => navigate("/transportneeds/create")} />
    //         </div>
    //         <div>
    //             <input
    //                 disabled={appState.auth.token === null}
    //                 type="button"
    //                 value="Offer transport"
    //                 className="btn btn-info p-4"
    //                 onClick={() => navigate("/transportoffers/create")} />
    //         </div>
    //     </div>

    // </div>
  );
};

export default HomeIndex;
