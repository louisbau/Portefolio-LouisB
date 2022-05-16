import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./styles.scss"

export default function Donate() {
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
        <DialogTitle id="scroll-dialog-title">Donate</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            L’année passée, j’ai été contacter par mon ancienne école primaire, Institut Saint André, me demandant s’il était possible que je fasse don de matériels informatiques, type tablette ou ordinateur portable, pour des élèves de primaire n’ayant pas accès à un ordinateur portable durant la pandémie. J’ai donc fourni 5 ordinateurs portables que ma famille et amis n’utilisaient plus. J’ai dû réinitialiser chacun des pcs et mis à jour les OS. J’ai passé deux jours complets à reboot les pcs et j’ai aussi aider certain élevés à remettre leur pc en ordre. Ce travail m’a permis de me sentir utile dans une période de pandémie. 
            <br></br>
            <br></br>
            Preuve : malheuresement je n'arrive plus a retrouver le mail et je n'ai plus accès aux autres documents
          </DialogContentText>
          <div className="imgContainer">
            <img src="assets/pc.jpg" alt=""/>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}