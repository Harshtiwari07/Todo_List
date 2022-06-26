import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import  "../App.css";



import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


  












const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);};








  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Enter a task...."
        value={input}
        required
        onChange={onInputChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} >
      <Stack spacing={3}>
        <DesktopDatePicker
          
          inputFormat="MM/dd/yyyy"
          value={value}
          
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{
              backgroundColor:"white",
              borderRadius:"5px"

          }} {...params} />}
        />
         </Stack>
    </LocalizationProvider>
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
