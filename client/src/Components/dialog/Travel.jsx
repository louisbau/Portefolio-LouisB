import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Travel() {
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
        <DialogTitle id="scroll-dialog-title">Travel</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Durant les trois ans passés à l’EPHEC, j’ai eu la chance de faire de nombreux voyages. J’ai découvert et appris énormément de chose qui mon fortement impacté. J’ai découvert beaucoup de nouvelle culture ainsi que de paysage. Je suis allé dans de nombreux musée telle que Neues Museum à berlin, le musée Egyptien du Caire en Egypte ou encore le palais des Doges à venise. J’ai eu aussi la chance de voir énormément de temple égyptien ainsi que les pyramide de Gizeh. Je pense que tous c’est voyage mon été énormément bénéfique tant que dans ma vie Professional que privé. Voyage réaliser : Venise, suisse, Palma, Lisbonne, Egypte, Berlin, France, …
          <br></br>
          <br></br>
          Photos :
          </DialogContentText>
          <img src="assets/egypte.jpg" alt=""/>
          <img src="assets/oiseau.jpg" alt=""/>
          <img src="assets/temple.jpg" alt=""/>
          <img src="assets/art.jpg" alt=""/>
          <img src="assets/lsibon.jpg" alt=""/>
          <img src="assets/map.png" alt=""/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}