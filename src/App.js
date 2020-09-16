import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const BACKG = ["#00D893","#00004D","#A7008C","#830000","#D19200","#640099",
              "#FF27C4","#040044", "#2FAB9F","#8DAB9F","#8DAB00","#511836",
              "#4f1d27","#be8540","#a3b2c7"];
const PHRASES = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
                "The way to get started is to quit talking and begin doing",
                "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
                "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
                "Life is what happens when you're busy making other plans.",
                "Always remember that you are absolutely unique. Just like everyone else.",
                "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
                "Whoever is happy will make others happy too.",
                "In the end, it's not the years in your life that count. It's the life in your years.",
                "Life is ours to be spent, not to be saved.",
                "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
                "Success is not final; failure is not fatal: It is the courage to continue that counts.",
                "If you really look closely, most overnight successes took a long time.",
                "The secret of success is to do the common thing uncommonly well.",
                "I find that the harder I work, the more luck I seem to have."];
const AUTHORS = ["Nelson Mandela",
                "Walt Disney",
                "Steve Jobs",
                "Oprah Winfrey",
                "John Lennon",
                "Margaret Mead",
                "Benjamin Franklin",
                "Anne Frank",
                "Abraham Lincoln",
                "D. H. Lawrence",
                "Marilyn Monroe",
                "Winston S. Churchill",
                "Steve Jobs",
                "John D. Rockefeller Jr.",
                "Thomas Jefferson"];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={bc: BACKG[0],
                phrase: PHRASES[0],
                author: AUTHORS[0]};
    this.hClick = this.hClick.bind(this);
  }
  hClick(){
    let a = BACKG.indexOf(this.state.bc);
    if(a == BACKG.length - 1){
      a = 0;
    }else{
      a += 1;
    }
    let b = PHRASES.indexOf(this.state.phrase);
    if(b == PHRASES.length - 1){
      b = 0;
    }
    else{
      b += 1;
    }
    this.setState({
      bc: BACKG[a],
      phrase: PHRASES[b],
      author: AUTHORS[b]
    });
  }
  render(){
    let style = {
      backgroundColor: this.state.bc,
      color:this.state.bc,
      position:"fixed",
      top:"0",
      left:"0",
      width:"100%",
      height:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"550px"
      };
    let qb = {
      backgroundColor:"white",
      padding: "2% 2% 2% 2%",
      textAlign:"center",
      borderRadius:"0.5em",
      verticalAlign:"center",
      width:"500px"
      };
    let button = {
      backgroundColor:this.state.bc,
      borderColor:this.state.bc,
    }
    let tw = {backgroundColor: this.state.bc};
    return (
      <TransitionGroup>
      <CSSTransition key={this.state.author} timeout={600} classNames="fade">
      <div style={style}>
      <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
      <blockquote id="quote-box" style={qb}>
        <div id = "text" className="slide">{this.state.phrase}</div>
        <div id = "author">- {this.state.author}</div>
        <div className="gege">
        <button id="new-quote" onClick={this.hClick} style={button}>New Quote</button>
        <a href={`https://twitter.com/intent/tweet?text=${this.state.phrase}---${this.state.author}`} id="tweet-quote" target="_blank" style={tw}><i class="fab fa-twitter"></i></a>
        </div>
      </blockquote>
      </CSSTransition>
      </div>
      </CSSTransition>
      </TransitionGroup>
    );
  }
}
export default App;
