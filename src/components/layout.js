import React from 'react'
import { rhythm } from '../utils/typography'
import { css } from '@emotion/core'
import { graphql, StaticQuery, Link } from 'gatsby'
import TitlePanel from './title-panel'

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
      <div>
        <TitlePanel>Hello</TitlePanel>
        <section
          css={css`
            width: 45vw;
            display: inline-block;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <div>You have landed</div>
          {children}
        </section>
      </div>
    )}
  />
)
