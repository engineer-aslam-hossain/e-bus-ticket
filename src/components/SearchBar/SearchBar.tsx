import React, { useContext, useEffect, useState } from 'react';
import 'date-fns';
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { BookingContext } from '../../App';
import Swal from 'sweetalert2';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchBar: React.FC = () => {
  const classes = useStyles();
  const [journeyDate, setJourneyDate] = React.useState<Date | null>(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [place, setPlace] = React.useState({
    from: '',
    to: '',
    journeyDate,
    selectedDate,
  });
  const [districts, setDistricts] = useState([]);
  const { makeSearch } = useContext(BookingContext);

  console.log(place);

  const handleChange = (event: any) => {
    const name = event.target.name;
    setPlace({
      ...place,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    fetch(
      'https://api.allorigins.win/raw?url=https://bdapis.herokuapp.com/api/v1.0/districts'
    )
      .then((res) => res.json())
      .then((data) => setDistricts(data.data));
    //  .catch((err ) => Swal.fire('Something went wrong!', '', 'error'));
  }, []);
  // console.log(districts);

  const handleJourneyDateChange = (date: Date | null) => {
    setJourneyDate(date);
  };
  {
    console.log(journeyDate);
  }
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  {
    console.log(selectedDate);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlace({
      ...place,
      journeyDate: journeyDate,
      selectedDate: selectedDate,
    });
    makeSearch(place);
  };

  return (
    <Card className='p-5 '>
      <form className='d-flex align-items-center justify-content-around w-100'>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>From</InputLabel>
          <Select
            native
            value={place.from}
            onChange={handleChange}
            label='From'
            inputProps={{
              name: 'from',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label='None' value='' />
            {districts.map((d: any) => (
              <option key={d._id} value={d.district}>
                {d.district}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>To</InputLabel>
          <Select
            native
            value={place.to}
            onChange={handleChange}
            label='To'
            inputProps={{
              name: 'to',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label='None' value='' />
            {districts.map((d: any) => (
              <option key={d._id} value={d.district}>
                {d.district}
              </option>
            ))}
          </Select>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            justify='space-around'
            className='w-auto justify-content-around'
          >
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Journey Date'
              value={journeyDate}
              onChange={handleJourneyDateChange}
              className='mx-3'
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Return Date (Optional)'
              value={selectedDate}
              onChange={handleDateChange}
              className='mx-3'
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          onClick={handleSubmit}
        >
          Search Buses
        </Button>
      </form>
    </Card>
  );
};

export default SearchBar;
