import React from 'react'

const Context = React.createContext()

class Provider extends React.Component {
  state = {
    updateState: newState => this.setState(newState)
  }
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Consumer = Context.Consumer

export { Consumer, Provider }
