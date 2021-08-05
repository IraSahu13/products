import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
    root: {
        maxWidth: '80%'
    },
    media: {
        height: 250,
        width: 200,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));