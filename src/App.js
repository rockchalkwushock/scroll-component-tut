import React, { Component } from 'react'

import { ScrollElement, ScrollView } from './scroll'
import items from './data'
import './App.css'

console.log(items)

class App extends Component {
  scrollTo = name => {
    this._scroller.scrollTo(name)
  }
  render() {
    return (
      <div className="app">
        {items.map(({ name }) =>
          <button key={Math.random()} onClick={() => this.scrollTo(name)}>
            {name}
          </button>
        )}
        <ScrollView ref={scroller => (this._scroller = scroller)}>
          <div className="scroller">
            {items.map(({ name, image }) => {
              return (
                <ScrollElement key={Math.random()} name={name}>
                  <div className="item">
                    <img src={image} alt={Math.random()} />
                    {name}
                  </div>
                </ScrollElement>
              )
            })}
          </div>
        </ScrollView>
      </div>
    )
  }
}

export default App
