import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      remainingChars: 50
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value.slice(0, 50);
    const remainingChars = 50 - inputTitle.length;
  
    this.setState(() => {
      return {
        title: inputTitle
      };
    });

    this.setState({ remainingChars });
  }

  onBodyChangeEventHandler(event) {
    this.setState(()=> {
      return {
        body: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
        title: "",
        body: "",
        remainingChars: 50
    })
  } 

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.remainingChars} </p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;