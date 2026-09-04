import { createElement } from 'react'
import Script from 'next/script'
import { deskcrewScriptProps } from './props.js'

export { deskcrewScriptProps }

/**
 * <DeskCrewWidget widgetKey="pub_..." /> in app/layout.tsx (App Router) or
 * pages/_app.tsx (Pages Router). Renders one next/script tag; nothing else.
 *
 * @param {import('./index.js').DeskcrewOptions} props
 */
export function DeskCrewWidget(props) {
  const scriptProps = deskcrewScriptProps(props)
  if (!scriptProps) return null
  return createElement(Script, scriptProps)
}

export default DeskCrewWidget
export { buildTag } from './build-tag.js'
