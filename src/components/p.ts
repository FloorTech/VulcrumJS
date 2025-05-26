import handleAttributes from "../utils/handle-attributes.js"

export default function p(textOrChildren: string | string[], attributes: Record<string, string> = {}): string {
    let attributesString = handleAttributes(attributes)
    return `<p ${attributesString}>${typeof textOrChildren === "string" ? textOrChildren : textOrChildren.join("")}</p>`
}
