import { deepEqual } from 'assert'
import { describe, it } from 'node:test'
import { regexes } from '../index.js'
import { getRegexId, useragents } from './useragents.js'

describe('regexes', () => {
  useragents.forEach(({ ua, regex }) => {
    it(`${ua} should match [${regex.join(', ')}]`, () => {
      const matches = regexes.reduce((matches, userAgentRegex) => {
        if (userAgentRegex.regex.test(ua)) {
          matches.push(getRegexId(userAgentRegex))
        }

        return matches
      }, [])

      deepEqual(matches, regex)
    })
  })
})
