import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { removeFavorite } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { Country } from '../redux/Types/countryType';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }
}));

type PropType = {
  open: boolean;
  onSetClose: () => void;
};
const Draw = ({ open, onSetClose }: PropType) => {
  const { favorite } = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();
  const classes = useStyles();

  const deleteHandler = (country: Country) => dispatch(removeFavorite(country));

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='right'
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onSetClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <List>
        {favorite.map((item) => (
          <ListItem key={item.name}>
            <ListItemIcon>
              <IconButton onClick={() => deleteHandler(item)}>
                {' '}
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemAvatar>
              <Avatar
                src={item.flag}
                alt='flag'
                variant='square'
                sizes='small'
              />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Draw;
