import { expect } from 'chai'
import formatBreakDateTime from '../app/utils/breakDateTime.js'

describe('formatBreakDateTime', () => {
  it('uses English date names and a 24-hour clock without seconds', () => {
    const date = new Date(2026, 7, 30, 14, 38, 59)

    expect(formatBreakDateTime(date)).to.equal(
      'Current time: 14:38 · Sunday, August 30, 2026'
    )
  })
})
