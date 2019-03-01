import React from 'react'
import { css } from '@emotion/core'
import { Link, StaticQuery } from 'gatsby'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        css={css`
          background-color: #ff8a7d;
          padding: 5rem;
          display: inline-block;
          width: 50vw;
          height: 70vw;
        `}
      >
        <Link to="/">
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
              color: white;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
    )}
  />
)
