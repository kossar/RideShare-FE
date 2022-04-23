import {
  Container,
  FormHelperText,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { IMessages } from "../types/IMessages";

const Errors = (props: IMessages) => {
  console.log(props.messages);
  return (
    <List>
      {props.messages.map((message) => (
        <ListItem key={message} button={false} component="li">
          <Typography textAlign="center" variant="body1" color='error'>{message}</Typography>
          {/* <FormHelperText color="error">{message}</FormHelperText> */}
        </ListItem>
      ))}
    </List>
  );
};

export default Errors;
