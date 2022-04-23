import React, { useState } from 'react';
import logo from './logo.svg';
import { initialAppState, AppContextProvider } from './context/AppContext';
import { IAuth } from './types/IAuth';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomeIndex from './containers/home/HomeIndex';
import Login from './containers/identity/Login';
import Page404 from './containers/Page404';
import Register from './containers/identity/Register';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import TransportNeedsIndex from './containers/transport-needs/TransportNeedsIndex';
import TransportOffersIndex from './containers/transport-offers/TransportOffersIndex';
import TransportNeedCreateEdit from './containers/transport-needs/TransportNeedCreateEdit';
import TransportOfferCreateEdit from './containers/transport-offers/TransportOffferCreateEdit';

const theme = createTheme({
    palette:{
        primary: {
            main: teal[700]
        },
        background: {
            default: "#F2F2F2"
          }
    }
});
function App() {
  const setState = (auth: IAuth): void => {
      setAppState({...appState, auth});
  }
  const [appState, setAppState] = useState({...initialAppState, setState});

  return (
    <>
            <AppContextProvider value={appState}>
                <ResponsiveAppBar/>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <main role="main" className="pb-3" style={{minHeight: '90%'}}>
                    <Routes>
                        <Route path='/' element={<HomeIndex/>} />
                        <Route path="/identity/login" element={<Login/>} />
                        <Route path="/identity/register" element={<Register/>} />

                        <Route path="/transportneeds/create" element={<TransportNeedCreateEdit />} />
                        <Route path="/transportneeds" element={<TransportNeedsIndex/>} />

                        <Route path="/transportoffers/create" element={<TransportOfferCreateEdit/>} />
                        <Route path="/transportoffers" element={<TransportOffersIndex/>} />
                            {/* <Route path='/' element={<App/>}>
                                <Route index element={<HomeIndex/>} />
                                <Route path="/identity/login" element={<Login/>} />
                                <Route path="/identity/register" element={<Register/>} />
                            </Route> */}
                            

                            {/* <Route path="/transportneeds/create" component={TransportNeedCreate} />
                            <Route path="/transportneeds/edit/:id" component={TransportNeedEdit} />
                            <Route path="/transportneeds/delete/:id" component={TransportNeedDelete} />
                            <Route path="/transportneeds/:id" component={TransportNeedDetail} />
                            <Route path="/transportneeds" component={TransportNeedsIndex} />
                            
                            <Route path="/transportoffers/create" component={TransportOfferCreate} />
                            <Route path="/transportoffers/:id" component={TransportOfferDetail} />
                            <Route path="/transportoffers" component={TransportOffersIndex} />

                            <Route path="/transports/create-need/:id" component={TransportCreateNeed} />
                            <Route path="/transports/create-offer/:id" component={TransportCreateOffer} />
                            <Route path="/transports/edit/:id" component={TransportEdit} />
                            <Route path="/transports/:id" component={TransportDetails} /> */}
                            {/* <Route path="/transports" component={TransportIndex} /> */}

                            <Route element={<Page404/>} />
                        </Routes>
                    </main>
                    </ThemeProvider>
                <Footer /> 
            </AppContextProvider>
        </>
  );
}

export default App;
