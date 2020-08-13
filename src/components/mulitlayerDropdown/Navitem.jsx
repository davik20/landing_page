import React from 'react'
import {ReactComponent as BellIcon} from '../icons/caret.svg';
import CSSTransitions from 'react-transition-group'

class Navitem extends React.Component  {

   

    render () {
        const {children, link, onClick} = this.props

        return (
            <div className="navItem">
                <div onClick={onClick}> {link} </div>
                    {children}
             </div>
        )

    }

}

export default Navitem
