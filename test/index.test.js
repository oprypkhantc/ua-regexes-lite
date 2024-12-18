import { deepEqual } from 'assert'
import { describe, it } from 'node:test'
import RE2 from 're2'
import { regexes } from '../index.js'
import { getRegexId, useragents } from './useragents.js'

describe('regexes', () => {
  const modes = [
    {
      mode: 'JS',
      wrapRegex: regex => regex
    },
    {
      mode: 'RE2',
      wrapRegex: regex => new RE2(regex)
    }
  ]

  modes.forEach(({ mode, wrapRegex }) => {
    useragents.forEach(({ ua, regex }) => {
      it(`${ua} should match [${regex.join(', ')}] in ${mode} mode`, () => {
        const matches = regexes.reduce((matches, userAgentRegex) => {
          if (wrapRegex(userAgentRegex.regex).test(ua)) {
            matches.push(getRegexId(userAgentRegex))
          }

          return matches
        }, [])

        deepEqual(matches, regex)
      })
    })
  })
})
