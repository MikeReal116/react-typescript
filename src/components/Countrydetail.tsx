import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useCountry from '../custom-hooks/useCountry';
import { ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 700,
    margin: 'auto'
  },
  avatar: {
    backgroundColor: red[500]
  },
  image: {
    width: '100%'
  }
}));

type CountryNameParam = {
  countryname: string;
};
const Countrydetail = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { countryname } = useParams<CountryNameParam>();

  const { countries } = useCountry(countryname);

  const classes = useStyles();

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {countries.length !== 0 && (
        <Card className={classes.root} raised={true}>
          <CardHeader
            avatar={
              <Avatar aria-label='country initial' className={classes.avatar}>
                {countries[0].alpha2Code}
              </Avatar>
            }
            title={countries[0].name}
            subheader={countries[0].region}
            action={
              <IconButton aria-label='back' component={Link} to='/'>
                <ArrowBackIcon />
              </IconButton>
            }
          />
          <CardMedia>
            <img src={countries[0].flag} alt='flag' className={classes.image} />
          </CardMedia>
          <CardContent>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Typography>Languages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {countries[0].languages.map((item) => (
                  <List key={item.name}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </List>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2bh-content'
              >
                <Typography>Border</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {countries[0].borders.map((item) => (
                  <List key={item}>
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                  </List>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3bh-content'
              >
                <Typography>Currencies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {countries[0].currencies.map((item) => (
                  <List key={item.name}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </List>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel4bh-content'
              >
                <Typography>Native Name</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{countries[0].nativeName}</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Countrydetail;
