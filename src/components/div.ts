import handleAttributes from "../utils/handle-attributes.js"

export default function div(children: string[], attributes: Record<string, string> = {}): string {
    let attributesString = handleAttributes(attributes)
    return `<div ${attributesString.trim()}>${children.join("")}</div>`
}
