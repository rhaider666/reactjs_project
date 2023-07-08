import React from 'react'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/Action';

const Counter = () => {
    const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

    return (
        <div>
            <Typography style={{ textAlign: 'center',marginTop:15 }} variant='h2'>Count: {count}</Typography>
            <div style={{textAlign:'center',marginTop:10}}>
                <Button onClick={handleIncrement} variant="contained">+</Button>
                <Button onClick={handleDecrement} style={{marginLeft:50}} variant="contained">--</Button>
            </div>
        </div>

    )
}

export default Counter
