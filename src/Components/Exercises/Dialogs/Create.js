import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default (props) =>

    <Fragment>

        <Button variant >
          <AddIcon />
        </Button>
      
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> 
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>

            <form>
            
            </form>
            
          </DialogContent>
          <DialogActions>
            <Button color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>

    </Fragment>
