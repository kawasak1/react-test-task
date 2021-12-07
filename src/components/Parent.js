import React, { Component } from 'react';
import database from '../firebase';
import First from './SignUp';
import Second from './Message';
import Third from './Checkbox';

export default class Parent extends Component {
  state = {
    step: 1,
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
    message: '',
    gender: '',
    messageChoice: '',
    addOption1: false,
    addOption2: false,
    isInvalidEmail: false,
    isEmailTaken: false,
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  navButton = (butNum) => {
    if (butNum === 1) {
      this.setState({ step: 1 });
    }
    if (butNum === 2) {
      this.setState({ step: 2 });
    }
    if (butNum === 3) {
      this.setState({ step: 3 });
    }
  };

  emailFound = () => {
    this.setState({ step: 1, email: '', isEmailTaken: true });
  };

  clearData = () => {
    this.setState({
      step: 1,
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      dateOfBirth: '',
      message: '',
      gender: '',
      messageChoice: '',
      addOption1: false,
      addOption2: false,
      isInvalidEmail: false,
      isEmailTaken: false,
    });
  };

  radioChange = (choice) => {
    if (choice === 1) {
      this.setState({ gender: 'male' });
    }
    if (choice === 2) {
      this.setState({ gender: 'female' });
    }
    if (choice === 3) {
      this.setState({ messageChoice: 'one' });
    }
    if (choice === 4) {
      this.setState({ messageChoice: 'two' });
    }
  };

  checkboxChange = (choice) => {
    if (choice === 1) {
      this.setState({ addOption1: !this.state.addOption1 });
    }
    if (choice === 2) {
      this.setState({ addOption2: !this.state.addOption2 });
    }
  };

  validateEmail = (email, type) => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{2,9}[\.][a-z]{1,5}/;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        isInvalidEmail: false,
      });
    } else {
      if (type === 'onBlur') {
        this.setState({
          isInvalidEmail: true,
        });
      }
    }
  };

  handleChange = (input) => (e) => {
    if (input === 'email') {
      this.setState({ isEmailTaken: false });
      this.validateEmail(e.target.value, 'onChange');
    }
    this.setState({ [input]: e.target.value });
  };

  push = () => {
    //does not allow submitting if errors are present and returns to the 1st page
    if (
      this.state.isInvalidEmail ||
      this.state.isEmailTaken ||
      !this.state.email
    ) {
      this.state.isInvalidEmail = true;
      this.navButton(1);
      console.log('email input error');
    } else {
      database
        .ref()
        .child('users')
        .orderByChild('email')
        .equalTo(this.state.email)
        .once('value')
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log('email is taken');
            //returning to the 1st page
            this.emailFound();
          } else {
            //pushing data to the database
            database
              .ref()
              .child('users')
              .child(new Date().getTime().toString())
              .set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dateOfBirth: this.state.dateOfBirth,
                email: this.state.email,
                address: this.state.address,
                message: this.state.message,
                messageChoice: this.state.messageChoice,
                gender: this.state.gender,
                addOption1: this.state.addOption1,
                addOption2: this.state.addOption2,
              })
              .catch(alert);

            this.clearData();
            console.log('added to db');
          }
        });
    }
  };

  render() {
    const { step } = this.state;
    const {
      email,
      firstName,
      lastName,
      address,
      dateOfBirth,
      message,
      gender,
      messageChoice,
      addOption1,
      addOption2,
      isInvalidEmail,
      isEmailTaken,
    } = this.state;
    const values = {
      email,
      firstName,
      lastName,
      address,
      dateOfBirth,
      message,
      gender,
      messageChoice,
      addOption1,
      addOption2,
      isInvalidEmail,
      isEmailTaken,
    };

    switch (step) {
      case 1:
        return (
          <First
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            navButton={this.navButton}
            validateEmail={this.validateEmail}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <Second
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            navButton={this.navButton}
            handleChange={this.handleChange}
            radioChange={this.radioChange}
            values={values}
            step={step}
          />
        );
      case 3:
        return (
          <Third
            prevStep={this.prevStep}
            navButton={this.navButton}
            push={this.push}
            radioChange={this.radioChange}
            checkboxChange={this.checkboxChange}
            values={values}
            step={step}
          />
        );
      default:
        return <h1>Error...</h1>;
    }
  }
}
