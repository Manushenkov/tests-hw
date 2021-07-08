describe('интегр. тест', () => {
    it('сравнение страницы settings с шаблонным скрином', async function() {
        const browser = this.browser

        await browser.url('/settings')

        await browser.assertView('plain', '.App')
    })
})