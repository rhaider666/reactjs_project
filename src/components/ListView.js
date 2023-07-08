import React, { useEffect, useState } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ListView = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
        // let l=['a','b','c','d']
        // setList(l)
    }, [])

    useEffect(() => {
        console.log(list)
    }, [list])

    //this provided link does not give proper reponse
    const fetchData = async () => {
        try {
            const response = await fetch('https://hisocars.techinnsoft.com/api/Booking/get-listings');
            const data = await response.json();
            //console.log(data.ClassName)
            let l = []
            l.push(data)
            setList(l);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <List>
            {list.map(item => (
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary={item.ClassName} secondary={item.Message} />
                    </ListItemButton>

                </ListItem>
            ))}
        </List>
    )
}

export default ListView