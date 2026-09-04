export interface DeskcrewOptions {
  /** Your DeskCrew public widget key, e.g. "pub_xxxxxxxx". Required. */
  widgetKey: string
  /** Board slug (lowercase letters, numbers and dashes). Optional. */
  board?: string
  /** Accent colour as a 6-digit hex value, e.g. "#4f46e5". Optional. */
  color?: string
  /** Which side the launcher sits on. Optional (defaults to the widget's own default). */
  position?: 'left' | 'right'
  /** Greeting shown on the launcher. Optional. */
  greeting?: string
}

/** Props for a next/script element, or null when the key is missing or malformed. */
export function deskcrewScriptProps(
  options: DeskcrewOptions,
): (Record<string, string | boolean> & { id: string; strategy: 'afterInteractive' }) | null

/** Renders the DeskCrew widget script with next/script. Place it once in your root layout. */
export function DeskCrewWidget(props: DeskcrewOptions): JSX.Element | null
export default DeskCrewWidget
export function buildTag(options: DeskcrewOptions): { tag: string | null; warnings: string[] }
