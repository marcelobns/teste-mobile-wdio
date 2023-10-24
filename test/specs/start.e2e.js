import { expect } from '@wdio/globals'

describe('Testing Webdriver Native App', () => {
    it('should access the form screen and fill the inputs', async () => {
        await $('~Forms').click();
        await $('~text-input').setValue('teste');
        expect(await $('~text-input')).toBeDisplayed();
    })
})