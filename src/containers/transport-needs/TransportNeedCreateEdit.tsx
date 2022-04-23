import { Card, CardContent, Container } from "@mui/material";
import AddStepper from "../../components/stepper/AddStepper";

const TransportNeedCreateEdit = () => {
  return (
    <Container maxWidth="sm" component="div">
      <Card sx={{ my: 6 }}>
        <CardContent>
            <AddStepper/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TransportNeedCreateEdit;
