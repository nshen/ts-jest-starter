import { sum } from "@/utils/sum"

describe('sum', () => {
  it('should sum', () => { 
    expect(sum(1,1)).toEqual(2)
  })
})
