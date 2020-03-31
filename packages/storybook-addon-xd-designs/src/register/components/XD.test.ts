import { parseReviewUrl, parseSpecUrl } from './XD'


describe('XD', () => {

  describe('parseReviewUrl', function() {
    it('works', () => {
      const reviewUrl = 'https://xd.adobe.com/view/813cbece-c467-47ce-67e3-b60caacc2ff8-f70d/'

      expect(parseReviewUrl(reviewUrl)).toMatchSnapshot()
    })
  })

  describe('parseSpecUrl', function() {
    it('works', () => {
      const specUrl = 'https://xd.adobe.com/spec/181eaf80-9e7a-4ea6-7dc8-e21dfd9b2d80-6e2f/screen/58270c9e-502b-4737-be32-a5dfe9523bb5/Buttons/'

      expect(parseSpecUrl(specUrl)).toMatchSnapshot()
    })
  })
})
