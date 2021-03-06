import React from 'react'

import bn from 'utils/bemnames'

import { Navbar, Nav, NavItem, NavLink as BSNavLink } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { MdDashboard } from 'react-icons/lib/md'
import FaGithub from 'react-icons/lib/fa/github'

import SourceLink from 'components/SourceLink'

const sidebarBackground = {
  backgroundImage: 'url("/img/sidebar/sidebar-4.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const navItems = [
  { to: '/admin/brands', name: 'brands', exact: true, Icon: MdDashboard },
  { to: '/admin/models', name: 'models', exact: true, Icon: MdDashboard },
  { to: '/admin/variants', name: 'variants', exact: true, Icon: MdDashboard },
  { to: '/admin/suppliers', name: 'suppliers', exact: true, Icon: MdDashboard },
  {
    to: '/admin/order_stocks',
    name: 'Order Stock',
    exact: true,
    Icon: MdDashboard
  },
  {
    to: '/admin/order_bills',
    name: 'Order Bill',
    exact: true,
    Icon: MdDashboard
  }
]

const bem = bn.create('sidebar')

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isShow: true
  }

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`]

      return {
        [`isOpen${name}`]: !isOpen
      }
    })
  }

  render() {
    return (
      <aside className={bem.b()} data-image="/img/sidebar/sidebar-4.jpg">
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src="/img/logo/logo_200.png"
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                Reduction <FaGithub />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} size="1.5rem" />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    )
  }
}

export default Sidebar
