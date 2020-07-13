import { useState, useRef } from 'react';
import { TextField, IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import { Fab, makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { addTodo, addTodoSubmit } from '../../styles/home.module.scss';
import DoneIcon from '@material-ui/icons/Done'


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '100%'
  },
  backdrop: {
    position: 'absolute',
  },
  addTodoSubmit: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
  }
}));

export default function AddTodo(props) {
  const classes = useStyles(useTheme());
  let ref = useRef(null);
  let [date, setDate] = useState(new Date());
  let [name, setName] = useState("");
  let handleDateChange = date => setDate(date);
  let handleNameChange = e => setName(e.target.value)

  return (

        <Drawer
          anchor="bottom"
          open={props.isOpen}
          ModalProps={{disablePortal: true,
            BackdropProps: {classes: {root: classes.backdrop}}
            }}
          PaperProps={{ classes:{root: classes.paper} }}
          style={{position: "absolute"}}
          >
            <div className={addTodo}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <form>
                <TextField id="todo-name" label="Todo" fullWidth onChange={handleNameChange} value={name} />
                <KeyboardDatePicker
                    disableToolbar
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={date}
                    onChange={handleDateChange}
                    id="date-picker-inline"
                    label="Date picker inline"
                  />
                <Fab disabled={name===""} classes={{root: classes.addTodoSubmit}} color="primary" onClick={props.onAction.bind(null, true)}>
                  <DoneIcon />
                </Fab>
              </form>
              </MuiPickersUtilsProvider>
            </div>
        </Drawer>
  )
}