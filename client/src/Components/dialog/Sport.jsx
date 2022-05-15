import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Sport() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>Info</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Sport</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Durant tout ma vie, j’ai énormément de sport, j’ai durant mes années à l’Ephec j’ai continué à pratiquer le hockey et du football. J’ai un entrainement de hockey tous les mercredis, ainsi qu’un match de foot organisé entre amis tous les samedis. Je pense que le sport me permet de me sentir confortable et efficace durant les jours de la semaine. Ça me permet aussi de m’évader de relâcher la pression scolaire. 
            <br></br>
            <br></br>
            Preuve : je n'ai pas beaucoup de photos
          </DialogContentText>
          <img src="assets/facebook.png" alt=""/>
          <img src="assets/maillot.jpg" alt=""/>
          <img src="assets/sac.jpg" alt=""/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}