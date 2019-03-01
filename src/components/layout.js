import React from 'react'
import { rhythm } from '../utils/typography'
import { css } from '@emotion/core'
import { graphql, StaticQuery, Link } from 'gatsby'
import TitlePanel from './title-panel'
import Introduction from './introduction'

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
      <main
        css={css`
          display: grid;
          grid-template-columns: 45% 50%;
          grid-template-rows: 60vw;
          grid-column-gap: 15px;
          grid-row-gap: 15px;
        `}
      >
        <TitlePanel>Hello</TitlePanel>
        <Introduction />
      </main>
    )}
  />
)
