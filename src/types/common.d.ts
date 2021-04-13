//** TODO: Simplify */
export interface FontData {
  glyphs: { x_min: number; x_max: number; ha: number; o: string[] }[];
  cssFontWeight: string;
  ascender: number;
  underlinePosition: number;
  cssFontStyle: string;
  boundingBox: { yMin: number; xMin: number; yMax: number; xMax: number };
  resolution: number;
  descender: number;
  familyName: string;
  lineHeight: number;
  underlineThickness: number;
  /**
   * This property is missing in vexflow_font.js, but present in gonville_original.js and gonville_all.js.
   */
  original_font_information?: {
    postscript_name: string;
    version_string: string;
    vendor_url: string;
    full_font_name: string;
    font_family_name: string;
    copyright: string;
    description: string;
    trademark: string;
    designer: string;
    designer_url: string;
    unique_font_identifier: string;
    license_url: string;
    license_description: string;
    manufacturer_name: string;
    font_sub_family_name: string;
  };
}


/** Contexts common interface */
export interface RenderContext {
  clear(): void;
  setFont(family: string, size: number, weight?: string): RenderContext;
  setRawFont(font: string): RenderContext;
  setFillStyle(style: string): RenderContext;
  setBackgroundFillStyle(style: string): RenderContext;
  setStrokeStyle(style: string): RenderContext;
  setShadowColor(color: string): RenderContext;
  setShadowBlur(blur: string): RenderContext;
  setLineWidth(width: number): RenderContext;
  setLineCap(cap_type: string): RenderContext;
  setLineDash(dash: string): RenderContext;
  scale(x: number, y: number): RenderContext;
  resize(width: number, height: number): RenderContext;
  fillRect(x: number, y: number, width: number, height: number): RenderContext;
  clearRect(x: number, y: number, width: number, height: number): RenderContext;
  beginPath(): RenderContext;
  moveTo(x: number, y: number): RenderContext;
  lineTo(x: number, y: number): RenderContext;
  bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): RenderContext;
  quadraticCurveTo(x1: number, y1: number, x2: number, y2: number): RenderContext;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): RenderContext;
  glow(): RenderContext;
  fill(): RenderContext;
  stroke(): RenderContext;
  closePath(): RenderContext;
  fillText(text: string, x: number, y: number): RenderContext;
  save(): RenderContext;
  restore(): RenderContext;
  openGroup(): Node | undefined;
  closeGroup(): void;

  /**
   * canvas returns TextMetrics, SVG returns SVGRect, Raphael returns {width : number, height : number}. Only width is used throughout VexFlow.
   */
  measureText(text: string): { width: number };
}
