import { Container, Card, CardContent, Typography, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Errors from "../../components/Errors";
import { CRegister } from "../../configuration";
import { AppContext, IAppState } from "../../context/AppContext";
import { IRegisterInfo } from "../../dto/IRegisterInfo";
import { ValidationInitializer } from "../../helpers/ValidationInitializer";
import { AccountService } from "../../services/AccountService";
import { BaseService } from "../../services/BaseService";
import { IAuth } from "../../types/IAuth";
import { IMessages } from "../../types/IMessages";


export interface IRegisterProps {
    values: IRegisterInfo;
    confirmPassword: string;
    displayPwMatchError: string;
    handleChange: (
        target: HTMLInputElement
    ) => void;
    register: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const initialRegisterValues: IRegisterInfo = {
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: ""
};

const Register = () => {
    const appState = useContext(AppContext);
    const [registerValues, setFormValues] = useState(initialRegisterValues);

    //var validationState = ValidationInitializer.initialRegisterValidationState()
    const [confirmPw, setConfirmPassword] = useState('');
    const [registerErrors, setRegisterErrors] = useState(ValidationInitializer.initialRegisterValidationState())
    const [displayBackEndErrors, setDisplayBackEndErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState(ValidationInitializer.initMessages());
    const navigate = useNavigate();

    
    const goToHome = () => {
        navigate('/');
    }

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(registerValues);
        setRegisterErrors({...AccountService.validateRegister(registerValues)});
        console.log(registerErrors);
        if (registerErrors.anyError) {
            return;
        }
        let result = await BaseService.post<IAuth | IMessages>(registerValues, CRegister);
        if (result.ok && result.data) {
            const newState: IAuth = result.data as IAuth;
            appState.setState(newState);
            goToHome();
        }else {
            console.log(result.messages);
            let newMessages = [...errorMessages.messages, ...result.messages as string[]];
            setDisplayBackEndErrors(true);
            setErrorMessages({...errorMessages, messages: newMessages});
            console.log(errorMessages);
        }
    }

    return (<Container maxWidth="sm" component="div">
    <Card sx={{ my: 6 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom px={2}>
          Registreeru
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
            error={registerErrors.firstNameError}
            aria-errormessage="Eesnimi on kohustuslik"
            helperText={registerErrors.firstNameError ? registerErrors.firstNameErrorText : null}
            id="register-firstName"
            label="Eesnimi"
            aria-describedby="Eesnimi registreerimiseks"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.firstname}
            onChange={(e) => setFormValues({...registerValues, firstname: e.target.value})}
          />
          <TextField
            required
            id="register-LastName"
            label="Perekonnanimi"
            aria-describedby="Perekonnanimi registreerimiseks"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.lastname}
            onChange={(e) => setFormValues({...registerValues, lastname: e.target.value})}
            error={registerErrors.lastNameError}
            aria-errormessage={registerErrors.lastNameErrorText}
            helperText={registerErrors.lastNameError ? registerErrors.lastNameErrorText : null}
          />
          <TextField
            required
            id="phone-number"
            label="Telefon"
            aria-describedby="Telefoni number registreerimiseks"
            type={'tel'}
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.phoneNumber}
            onChange={(e) => setFormValues({...registerValues, phoneNumber: e.target.value})}
            error={registerErrors.phoneError}
            aria-errormessage={registerErrors.phoneErrorText}
            helperText={registerErrors.phoneError ? registerErrors.phoneErrorText : null}
          />
          <TextField
            required
            id="register-email"
            label="E-mail"
            aria-describedby="E-mail registreerimiseks"
            type={'email'}
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.email}
            onChange={(e) => setFormValues({...registerValues, email: e.target.value})}
            error={registerErrors.emailError}
            aria-errormessage={registerErrors.emailErrorText}
            helperText={registerErrors.emailError ? registerErrors.emailErrorText : null}
          />
          <TextField
            required
            id="register-password"
            label="Parool"
            type="password"
            autoComplete="current-password"
            aria-describedby="Parool sisselogimiseks"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.password}
            onChange={(e) => setFormValues({...registerValues, password: e.target.value})}
            error={registerErrors.passwordError}
            aria-errormessage={registerErrors.passwordErrorText}
            helperText={registerErrors.passwordErrorText}
          />
          <TextField
            required
            id="register-password-confirmation"
            label="Parooli kinnitus"
            type="password"
            autoComplete="current-password"
            aria-describedby="Parooli kinnitus registreerimiseks"
            variant="standard"
            fullWidth
            sx={{ my: 1 }}
            value={registerValues.passwordConfirmation}
            onChange={(e) => setFormValues({...registerValues, passwordConfirmation: e.target.value})}
            error={registerErrors.passwordConfirmationError}
            aria-errormessage={registerErrors.passwordConfirmationErrorText}
            helperText={registerErrors.passwordConfirmationErrorText}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  aria-describedby="Jää sisselogituks"
                />
              }
              label="Jäta mind meelde"
            />
          </FormGroup>
          {displayBackEndErrors 
            ? <Errors messages={errorMessages.messages}/> : null }
          <Button
            title="Registreeru"
            variant="contained"
            type="submit"
            size="large"
            sx={{ my: 2 }}
            aria-describedby="Registreeru nupp"
            fullWidth
            onClick={(e) => register(e)}
          >
            Registreeru
          </Button>
          <Box>
            <Divider />

            <Typography
              variant="h6"
              gutterBottom
              component="p"
              my={2}
            >
              Konto juba olemas?
            </Typography>
            <Button
              title="Logi sisse"
              variant="contained"
              size="medium"
              href="/identity/login"
            >
              Logi sisse
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Container>);
        
}

export default Register;

