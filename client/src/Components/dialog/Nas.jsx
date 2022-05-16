import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./styles.scss"

export default function Nas() {
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
        <DialogTitle id="scroll-dialog-title">Nas deployment</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            L’année passée, mon père à fait l’acquisition d’un NAS et m’a demandé de l’installer, de le connecter, ainsi que le formatter. J’ai passé énormément de temps à me renseigner sur comment faire l’installation d’un NAS. J’ai passé plus de 3 jours complet à faire toute l’installation. Je pense avoir acquis de nombreuse compétence dans les domaines de l’administration système et réseau ainsi que dans le stockage de donnée (RAID).
            <br></br>
            <br></br>
            Preuve : 
          </DialogContentText>
          <div className="imgContainer">
            <img src="assets/1.jpeg" alt=""/>
            <img src="assets/3.jpeg" alt=""/>
            <img src="assets/5.jpeg" alt=""/>
            <img src="assets/6.jpeg" alt=""/>
            <img src="assets/7.jpeg" alt=""/>
            <img src="assets/10.jpeg" alt=""/>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}