import test from 'node:test'
import assert from 'node:assert/strict'
import { deskcrewScriptProps } from '../props.js'

test('props carry the widget src, key, afterInteractive strategy and defer', () => {
  const p = deskcrewScriptProps({ widgetKey: 'pub_abc12345', board: 'acme' })
  assert.equal(p.src, 'https://deskcrew.io/desk.js')
  assert.equal(p['data-key'], 'pub_abc12345')
  assert.equal(p['data-board'], 'acme')
  assert.equal(p.strategy, 'afterInteractive')
  assert.equal(p.defer, true)
})

test('invalid key yields null', () => {
  assert.equal(deskcrewScriptProps({ widgetKey: 'bad' }), null)
})
