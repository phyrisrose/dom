import React from 'react'
import { rhythm } from '../utils/typography'
import { css } from '@emotion/core'

export default () => (
  <section
    css={css`
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <div>
      Hello, my name is Anna. If you wanted to learn more about me, you came to
      the right place.
    </div>

    <div>
      I am interested in learning how create spaces for people that support them
      in the best way. That are not in the way. Spaces that encourage them to do
      what they set out to do. I believe technology must be seamlessly
      integrated into the environment, but never be a focal spot of the space. I
      believe in sustainability, and creating spaces with the least footprint on
      our already overburdened planet.
    </div>

    <div>
      My approach is:
      <ul>
        <li>To listen and understand</li>
        <li>To find what is needed, but not spoken</li>
        <li>
          To make sure the team is on the same page with what needs to be done
        </li>
        <li>To keep the client in the flow of the process</li>
        <li>
          To observe how the space is being used after it’s completed, and
          integrate the learnings into how the next client is treated
        </li>
      </ul>
    </div>
  </section>
)
