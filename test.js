const test = require('ava')
const rovarsprak = require('./index')

test('rovarsprak', t => {
  const text = 'Hej jag heter Alex!'
  const expected = 'Hohejoj jojagog hohetoteror Alolexox!'
  const actual = rovarsprak(text)
  
  t.is(actual, expected)
})

test('a long string', t => {
  const text = `Hejsan, det här är rövarspråkgsgeneratorn 2000!
  Röva gärna lite då förfan! Mohaha, sherminator 37000 :D.`
  const expected = `Hohejojsosanon, dodetot hohäror äror rorövovarorsospoproråkokgogsosgogenoneroratotorornon 2000! Rorövova gogärornona lolitote dodå foförorfofanon! Momohohahoha, soshoherormominonatotoror 37000 :Dod.`
  const actual = rovarsprak(text)

  t.is(actual, expected)
})