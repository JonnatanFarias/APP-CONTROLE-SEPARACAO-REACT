import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, onClose, titulo, messagem, okTxt, cancelTxt, ocultarBtn, onConfirm }) {

    const handleConfirm = () => {
        onConfirm(); // Chama a função de confirmação
        onClose(); // Fecha o diálogo
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {titulo}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {messagem}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {ocultarBtn && (
                    <Button variant='contained' color='error' onClick={onClose}>{cancelTxt}</Button>
                )}
                <Button variant='contained' color='error' onClick={handleConfirm} autoFocus>
                    {okTxt}
                </Button>
            </DialogActions>
        </Dialog>
    );
}