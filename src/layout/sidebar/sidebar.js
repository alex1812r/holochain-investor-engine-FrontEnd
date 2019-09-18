import React from 'react';
import {NavLink} from 'react-router-dom'
import './sidebar.scss'
import Avatar from '../../components/avatar/avatar'

import IconProfile from '../../icons/ICON 1.png'
import IconEarning from '../../icons/ICON 2.png'
import IconTaks from '../../icons/ICON 3.png'
import IconWallet from '../../icons/ICON 4.png'
import IconUserStories from '../../icons/ICON 5.png'
import IconEditUser from '../../icons/ICON 6.png'
import IconAvatar from '../../images/avatar.jpg'

export default class Sidebar extends React.Component {
  state ={
    expand: true
    
  }

  handleExpand = () => {
    this.setState({
      expand: this.state.expand ? false : true 
    })
    
  }

  render() {
    const navItems = [
      {
        title:'Profile',
        icon:IconProfile,
        submenu: [
          {
            title:'My Profile',
            url:'/profile/my'
          },
          {
            title:'Edit Profile',
            url:'/profile/edit'
          },
        ]
      },
      {
        title:'Earning',
        icon:IconEarning,
        url:'/earning'
      },
      {
        title:'Taks',
        icon:IconTaks,
        url:'/tasks'
      },
      {
        title:'Wallet',
        icon:IconWallet,
        url:'/wallet'
      },
      {
        title:'User Stories',
        icon:IconUserStories,
        url:'/userStories'
      },
      {
        title:'Edit User',
        icon:IconEditUser,
        url:'/editUser'
      },


    ]
    return (
      <div id="sidebar" className={this.state.expand ? 'active' : ''}>
        <input 
          value={this.state.expand}
          onChange={this.handleExpand}
          id="sidebar-checkbox" 
          type="checkbox"
        />
        <label htmlFor="sidebar-checkbox">
          {this.state.expand 
            ?
              <i className="fas fa-arrow-left"></i>
            : 
              <i className="fas fa-bars"></i>
          }
        </label>
        <div id="sidebar-wrap">
          <Avatar 
            width="110px"
            user="UserName"
            image={IconAvatar}
          />

          <NavItemsGroup 
            items={navItems}
          />

        </div>
      </div>
    )

  }

}

function NavItemsGroup(props) {
  return(
    <nav>
      { 
        props.items &&
        props.items.map((ni,i)=>(
          <NavItem
            key={i} 
            title={ni.title}
            icon={ni.icon}
            url={ni.url}
            submenu={ni.submenu}
          />
        ))
      }
    </nav> 
  )
}

class NavItem extends React.Component{
  
  state ={
    expand: false,
  }

  handleExpand = () =>{
    this.setState({
      expand: this.state.expand ? false : true
    })
  }

  render(){
    const expand = this.state.expand ? 'active' : ''
    return(
      <section>
      {
        this.props.submenu 
        ?
          <>
          <button 
            className="nav-item" 
            onClick={this.handleExpand}>
            <img src={this.props.icon || ''} alt="" />
            {this.props.title}
            </button>
          <div className={`sidebar-submenu ${expand}`}>
            <ul>
            {
              this.props.submenu.map((ni,i)=>(
                <li key={i}>
                  <NavLink to={ni.url}><span>-</span> {ni.title}</NavLink>
                </li>
              ))
            }
            </ul>     
          </div>
          </>
        :
        <NavLink className="nav-item" to={this.props.url ? this.props.url : '/' }>
          {this.props.icon && <img src={this.props.icon} alt=""/> }
          {this.props.title && this.props.title}
        </NavLink>
      }
      </section>
    )
  }
}