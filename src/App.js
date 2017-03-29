import React from 'react'
import Contact from './Contact.json'
import {BrowserRouter as Router, /*Link*/} from 'react-router-dom'

const style = {
  form: {
    fontSize:25,
    fontWeight:100,
    fontFamily:'Comic Sans MS',
    padding:20,
    margin:20,
    background:'rgb(129,188,57)',
    color:'white',
    textAlign:'center'
  },
  info: {
    lineHeight:5,
    listStyle:'none',
    fontFamily:'Comic Sans MS',
    
  }
}

export default React.createClass ({
  render() {
    return (
      <Router>
        <div>
          <h1 style={style.form}>My Peeps</h1>
          <ul style={style.info}>
          {Contact.map(contact=>(
            <li key={'people' + contact.id}>
              <img alt={contact.name.first + contact.name.last} src={contact.picture.thumbnail} />{contact.name.first} {contact.name.last}
            </li>
          ))}
          </ul>
        </div>
      </Router>
    )
  }
})
