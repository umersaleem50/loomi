import React, { Component } from "react";
import Logo from "./../../../UI Components/Logo/Logo";
import NavItem from "./NavItem/NavItem";
import classes from "./Navbar.module.scss";
import NavContainer from "../NavContainers/NavContainer";
class Navbar extends Component {
  state = {
    toggle: {
      istoggled: false,
      toggleContainer: null,
    },
    navItems: [
      {
        itemName: "Sale",
        itemContainerComponent: Logo,
      },
      {
        itemName: "New in",
        itemContainerComponent: Logo,
      },
      {
        itemName: "Clothing",
        itemContainerComponent: Logo,
      },
      {
        itemName: "Shoes",
        itemContainerComponent: Logo,
      },
      {
        itemName: "Accessories",
        itemContainerComponent: Logo,
      },
      {
        itemName: "Gifts",
        itemContainerComponent: Logo,
      },
      {
        itemName: "Collections",
        itemContainerComponent: Logo,
      },
    ],
  };

  toggleNavContainer(container) {
    if (container !== this.state.toggle.toggleContainer) {
      this.setState({
        toggle: { istoggled: true, toggleContainer: container },
      });
    } else {
      this.setState({ toggle: { istoggled: false } });
    }
  }

  render() {
    const navItems = this.state.navItems.map((item, i) => {
      return (
        <NavItem
          key={i}
          text={item.itemName}
          clicked={() => this.toggleNavContainer(item.itemContainerComponent)}
        />
      );
    });

    return (
      <React.Fragment>
        <nav className={classes.Navbar}>
          <ul>{navItems}</ul>
          <NavContainer
            toggle={this.state.toggle.istoggled}
            element={this.state.toggle.toggleContainer}
          />
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
