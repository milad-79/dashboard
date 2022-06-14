import React from "react";
const MyContext = React.createContext();

class Context extends React.Component {
  state = {
    menu: false,
    infUser: null
  };

  handeleOpen = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  handelePass = (item) => {
    localStorage.setItem('user',JSON.stringify(item))
  };
  render() {
    window.addEventListener('resize' ,()=>{
      this.setState({
        menu: false
      })
    })
    return (
      <MyContext.Provider
        value={{
          open: this.state.menu,
          handeleOpen: this.handeleOpen,
          handelePass: this.handelePass,
          userInf: this.state.infUser
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { Context, MyContext };
