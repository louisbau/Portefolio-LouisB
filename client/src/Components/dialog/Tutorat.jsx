import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./styles.scss"

export default function Tutorat() {
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
        <DialogTitle id="scroll-dialog-title">Tutorat</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Durant mes 3 années à l’ephec, j’ai donner cours de tutorats en math et en développement informatique, j’ai dû donnée plus au moin 20 cours, j’ai adoré donner ces cours car j’adore apporter mon aide. J’était aussi coach et entraineur de hockey et je souhaitais fortement retrouver ce sentiment d’apprentissage. Je pense aussi avoir approfondi mes compétences dans ces domaines à force de les enseignés. Mais surtout, cet exercice m’a aidé à mieux m’exprimer et à structurer mes idées. 
          <br></br>
          <br></br>
          Preuves : je n'arrive plus à retrouver les virrements (nouvelle eperso), vous devez avoir la preuve
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}