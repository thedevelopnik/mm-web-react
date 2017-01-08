import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Logo from '../../assets/img/mm.png'
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Hero extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Card>
                <CardMedia>
                    <img src={Logo} alt='Montessori Match Logo'/>
                </CardMedia>
                <CardActions>
                    <a href="http://montessorimatch.us14.list-manage.com/subscribe?u=9be45c7772ad2a078cc4b091d&id=91ce5d5d68" target="_blank">
                        <FlatButton label='Sign up for our mailing list to get updates!'/>
                    </a>
                </CardActions>
            </Card>
        </MuiThemeProvider>
    );
  }
}

export default Hero;