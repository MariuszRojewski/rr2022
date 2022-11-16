import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    send: true,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      send: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      send: true,
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={"Wpisz wiadomość"}
          ></textarea>
          <button>Wyślij</button>
        </form>

        <Prompt
          when={this.state.send === false}
          message="Nie wysłałeś formularza! Czy na 100% chcesz wyjść ze strony? Utacisz wtedy to co już napisałeś"
        />
      </div>
    );
  }
}

export default ContactPage;
