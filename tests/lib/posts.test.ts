import { markdownToHtml } from '@/lib/posts'

describe('markdownToHTML', () => {
    it('should convert markdown to HTML', async () => {
        const markdown = '# heading'

        const html = await markdownToHtml(markdown)

        expect(html).toStrictEqual('<h1>heading</h1>\n')
    })
})
