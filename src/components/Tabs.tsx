import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dropdown from './Dropdown';

import { filterContinent } from '../redux/actions';

const useStyles = makeStyles(() => ({
  mytabcontainer: {
    backgroundColor: '#f4f4fb',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  alltabs: {
    textTransform: 'none',
    fontSize: '1rem',
    borderRadius: '6% 22% 0% 10% / 10% 88% 10% 0% ',
    border: '1px solid #c4c3bd',
    backgroundColor: '#fafaff',
    padding: 0
  },
  activetab: {
    color: '#3B3AA4',
    backgroundColor: '#fff'
  }
}));

const TabItems = () => {
  const disptach = useDispatch();
  const [activeTab, setActiveTab] = useState('allcountries');

  const activeTabHandler = (e: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    disptach(filterContinent(newValue));
  };

  const classes = useStyles();

  return (
    <div className={classes.mytabcontainer}>
      <Tabs
        value={activeTab}
        onChange={activeTabHandler}
        indicatorColor='primary'
      >
        <Tab
          label='All countries'
          value={'allcountries'}
          className={`${classes.alltabs} ${
            activeTab === `allcountries` && classes.activetab
          }`}
        />
        <Tab
          label='Africa'
          value={'africa'}
          className={`${classes.alltabs} ${
            activeTab === `africa` && classes.activetab
          }`}
        />
        <Tab
          label='Asia'
          value={'asia'}
          className={`${classes.alltabs} ${
            activeTab === `asia` && classes.activetab
          }`}
        />
        <Tab
          label='America'
          value={'americas'}
          className={`${classes.alltabs} ${
            activeTab === `americas` && classes.activetab
          }`}
        />
        <Tab
          label='Oceania'
          value={'oceania'}
          className={`${classes.alltabs} ${
            activeTab === `oceania` && classes.activetab
          }`}
        />
        <Tab
          label='Europe'
          value={'europe'}
          className={`${classes.alltabs} ${
            activeTab === `europe` && classes.activetab
          }`}
        />
      </Tabs>
      <Dropdown />
    </div>
  );
};

export default TabItems;
