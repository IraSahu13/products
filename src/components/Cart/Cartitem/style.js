import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 300,
    maxWidth: 250,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: "wrap",
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));