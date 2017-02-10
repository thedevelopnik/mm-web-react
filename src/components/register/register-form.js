import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'

const styles = {
  title : {
    textAlign: 'center'
  },
  dialogBox : {
    width: '70%',
    margin: 'auto',
    maxWidth: 'none',
  },
  marginTop : {
    marginTop: '2rem'
  },
  form: {
    display: 'flex',
    textAlign: 'left'
  }
}

export default class RegisterForm extends React.Component {
    state = {
        isTeacher: 1,
        open: this.props.open,
        firstName: '',
        lastName: '',
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    createNewUser = () => {
      // console.log("register!")
      // setTimeout(function () {
      //     window.location = "/profile"
      // }, 1000);
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      })
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
        } else {
          console.log('no user is signed in')
        }
      })
      this.handleClose()
      console.log(this.props)
      browserHistory.push('/profile')
    }

    handleRadioChange = (event, value) => {
      if (value === 'teacher') {
        this.setState({isTeacher: 1, lastname: ''})
      } else if (value === 'school') {
        this.setState({isTeacher: 0, lastname: 'school'})
      }
    }

    handleFirstNameChange = (event, value) => {
      this.setState({firstName: value})
    }

    handleLastNameChange = (event, value) => {
      this.setState({lastName: value})
    }

    handleDisplayNameChange = (event, value) => {
      this.setState({displayName: value})
    }

    handleEmailChange = (event, value) => {
      this.setState({email: value})
    }

    handlePasswordChange = (event, value) => {
      this.setState({password: value})
    }

    handleConfPassChange = (event, value) => {
      this.setState({confirmPassword: value})
    }

    render() {
      const actions = [
        <FlatButton
          label="Register"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.createNewUser}
        />,
      ];

      return (
        <div>
        <MuiThemeProvider>
            <Dialog
              title="Sign Up"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.createNewUser}
              containerElement={<Link to="/profile" />}
            >
            I'm signing up as a...

               <div
                 style={styles.marginTop}
                 className="display-flex half-width text-left"
               >
                   <RadioButtonGroup onChange={this.handleRadioChange} name="memberType" defaultSelected="teacher">
                      <RadioButton
                        value="teacher"
                        label="Teacher"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="school"
                        label="School"
                        style={styles.radioButton}
                      />
                    </RadioButtonGroup>
               </div>
               {this.state.isTeacher === 1 ? 
                <div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="First Name"
                        onChange={this.handleFirstNameChange}
                      />
                      <TextField
                        className="half-width"
                        hintText="Last Name"
                        onChange={this.handleLastNameChange}
                      />
                  </div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="Email"
                        onChange={this.handleEmailChange}
                      />
                      <TextField
                        className="half-width"
                        hintText="Display Name"
                        onChange={this.handleDisplayNameChange}
                      />
                  </div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="Password"
                        type="password"
                        onChange={this.handlePasswordChange}
                      />
                      <TextField
                        className="half-width"
                        hintText="Confirm Password"
                        type="password"
                        onChange={this.handleConfPassChange}
                      />
                  </div>
                </div>
                :
                <div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="School Name"
                      />
                  </div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="Email"
                      />
                      <TextField
                        className="half-width"
                        hintText="Display Name"
                      />
                  </div>
                  <div style={styles.form}>
                      <TextField
                        className="half-width"
                        hintText="Password"
                        type="password"
                      />
                      <TextField
                        className="half-width"
                        hintText="Confirm Password"
                        type="password"
                      />
                  </div>
                </div>
              }
             </Dialog>
          </MuiThemeProvider>
        </div>
      );
    }
}