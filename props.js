import { buildAttrs } from './build-tag.js'

/**
 * Turn DeskCrew options into the props for a next/script element, or null when
 * the widget key is missing or malformed (warnings go to the console).
 *
 * @param {import('./index.js').DeskcrewOptions} options
 */
export function deskcrewScriptProps(options) {
  const { attrs, warnings } = buildAttrs(options)
  for (const message of warnings) console.warn(message)
  if (!attrs) return null
  const props = { id: 'deskcrew-widget', strategy: 'afterInteractive', defer: true }
  for (const [name, value] of attrs) props[name] = value
  return props
}
