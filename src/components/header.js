import React from 'react'
import { Link } from 'gatsby'
import styled, { css as emoCSS } from 'react-emotion'
import logo from '../images/brand-icon-white.png'

const css = (...args) => ({ className: emoCSS(...args) })

const ListItem = styled('li')({
  margin: '0 10px',
  cursor: 'pointer',
})

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'var(--yellow)',
    }}
  >
    <div
      {...css({
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: '960px',
        padding: '1.45rem 1.0875rem',
        justifyContent: 'space-between',
        alignItems: 'center',

        '@media (min-width: 510px)': {
          flexDirection: 'row',
        },
      })}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          alt="Lightly Lifted"
          src={logo}
          {...css({
            width: '50px',
            marginBottom: '0',
          })}
        />
      </Link>
      <nav
        {...css({
          marginTop: '10px',
          fontSize: '0.8rem',
          lineHeight: '1rem',
          textAlign: 'center',
        })}
      >
        <ul
          {...css({
            listStyle: 'none',
            display: 'flex',
            color: 'white',
            margin: 0,
          })}
        >
          <ListItem>
            <Link to="/page-2/">About Us</Link>
          </ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Pairings</ListItem>
          <ListItem>Where to Buy</ListItem>
          <ListItem>Contact Us</ListItem>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
