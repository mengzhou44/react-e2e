import { Selector } from 'testcafe';

// eslint-disable-next-line no-undef
fixture('/home').page('http://localhost:3000');

test('click button should add clicks by 1', async browser => {
  await browser.click(Selector('#btn-click'));

  const result = await Selector('#txt-clicks').innerText;

  await browser.expect(result).eql('You clicked 1 times.');
});
