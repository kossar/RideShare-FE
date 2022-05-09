import { useContext, useState } from "react";
import { AppContext, IAppState } from "../../context/AppContext";
import { BaseService } from "../../services/BaseService";
import { IMessages } from "../../types/IMessages";
import { IAuth } from "../../types/IAuth";
import { ILoginInfo } from "../../dto/ILoginInfo";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Box,
  TextField,
  Divider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

export interface ILoginProps {
  values: ILoginInfo;
  handleChange: (target: HTMLInputElement | HTMLTextAreaElement) => void;
  login: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const initialLoginValues: ILoginInfo = {
  email: "",
  password: "",
};

const Login = () => {
  const appState = useContext(AppContext);
  const [loginValues, setFormValues] = useState(initialLoginValues);
  const navigation = useNavigate();
  // const goToPreviousPath = () => {
  //     history.goBack()
  // }

  const goToHome = () => {
    navigation("/");
  };

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let result = await BaseService.post<IAuth | IMessages>(
      loginValues,
      "Account/Login"
    );

    if (result.ok && result.data) {
      const newState: IAuth = result.data as IAuth;
      appState.setState(newState);

      console.log(appState);
      goToHome();
    }
  };

  return (
    <Container maxWidth="sm" component="div">
    <Card sx={{ my: 6 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom px={2}>
          Logi sisse
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          px={2}
          sx={{
            "& .MuiTextField-root": { my: 1 },
          }}
        >
          <TextField
            required
            id="login-email"
            label="E-mail"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={loginValues.email}
            onChange={(e) => setFormValues({...loginValues, email: e.target.value})}
          />
          <TextField
            required
            id="login-password"
            label="Parool"
            type="password"
            autoComplete="current-password"
            aria-labelledby="Parool"
            aria-target="login-password"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={loginValues.password}
            onChange={(e) => setFormValues({...loginValues, password: e.target.value})}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                id="stay-loggedIn"
                  defaultChecked
                />
              }
              label="Jäta mind meelde"
            />
          </FormGroup>
          <Button
            title="Logi sisse"
            variant="contained"
            size="large"
            sx={{ my: 2 }}
            aria-describedby="Logi sisse nupp"
            fullWidth
            onClick={(e) => login(e)}
          >
            Logi sisse
          </Button>
          <Box>
            <Divider />

            <Typography
              variant="h6"
              gutterBottom
              component="p"
              my={2}
            >
              Kontot veel ei ole?
            </Typography>
            <Button
              title="Logi sisse"
              variant="contained"
              size="medium"
              href="/identity/register"
            >
              Registreeru
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Container>
    // <LoginView values={loginValues} handleChange={} login={login} />
  );
};

export default Login;
