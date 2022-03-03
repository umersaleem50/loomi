import React,{Component} from 'react';
import Logo from './../../../UI Components/Logo/Logo';
class Navbar extends Component{
    state = {
        toggleContainer : false,
        navItems: [{
            itemName:Sale,
            itemContainerComponent: Logo,
        },
        {
            itemName:Sale,
            itemContainerComponent: Logo,
        },
        {
            itemName:Sale,
            itemContainerComponent: Logo,
        },{
            itemName:Sale,
            itemContainerComponent: Logo,
        },{
            itemName:Sale,
            itemContainerComponent: Logo,
        },{
            itemName:Sale,
            itemContainerComponent: Logo,
        }]
    }
    render(){
        return(

        )
    }

}

export default Navbar;