import React from "react"

import { DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Dialog, { TitleContainer, DialogActionsContainer } from "./Dialog.style"


function Modal(props) {
  return (
    <Dialog
        fullWidth
        maxWidth    = {props.maxWidth || "xs"}
        {...props}
    >
        <TitleContainer>
            <DialogTitle >{props.title}</DialogTitle>
            <IconButton className="btn" onClick={props.onClose}>
                <CloseIcon />
            </IconButton>
        </TitleContainer>
        {props.children}
    </Dialog>
  )
}

export const DialogActions = DialogActionsContainer;
export default Modal;
