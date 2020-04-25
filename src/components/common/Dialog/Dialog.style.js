import styled from "styled-components";
import { Dialog, DialogActions} from '@material-ui/core';

export const DialogActionsContainer = styled(DialogActions)``

const DialogWrapper = styled(Dialog)`
    ${DialogActionsContainer} {
        padding : 10px 25px 15px;
    }
`

export const TitleContainer = styled.div`
  position: relative;
  padding-right: 45px;
  .btn {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`

export default DialogWrapper;