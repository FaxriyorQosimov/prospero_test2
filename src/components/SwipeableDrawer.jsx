import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [lists, setLists] = React.useState([
    {id: 1, listItem: 'NEWS'},
    {id: 2, listItem: 'OPINION'},
    {id: 3, listItem: 'SCIENCE'},
    {id: 4, listItem: 'LIFE'},
    {id: 5, listItem: 'TRAVEL'},
    {id: 6, listItem: 'MONEYS'},
    {id: 7, listItem: 'ART & DESIGN'},
    {id: 8, listItem: 'SPORTS'},
    {id: 9, listItem: 'PEOPLE'},
    {id: 10, listItem: 'HEALTH'},
    {id: 11, listItem: 'EDUCATION'}
  ])
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
      <List>
        {['All mail'].map((text, index) => (
          <ListItem button key={text} className="d_flex_between" >
                <div className="navbar_logo" style={{marginRight: '200px'}}>
                    <img src="../../../Images/logo.svg" alt=""/>
                </div>
                <div onClick={toggleDrawer(anchor, false)}>
                  <GrClose />
                </div>
          </ListItem>
        ))}
      </List>
      {
        lists.map(list => 
          <List key={list.id}>
            {['All mail'].map((text, index) => (
              <ListItem button key={text}>
                  <div style={{fontWeight: '700', fontSize: '18px'}} className="navbar_nav_item" onClick={toggleDrawer(anchor, false)}>{list.listItem}</div>
              </ListItem>
            ))}
          </List>
        )
      }
      
    </Box>
);
const [InnerWidth, setInnerWidth] = React.useState(window.innerWidth)
React.useEffect(() => {
  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }
  window.addEventListener('resize', handleResize)
},[])
  return (
    <div>
       
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={ toggleDrawer(anchor, (InnerWidth < 700) && true)}>                                
            <img src="../../Magazine/Hamburger menu.png" alt=""/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            elevation={16}
            transitionDuration={{enter: 1000, exit: 1000}}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
