import handleAttributes from "../utils/handle-attributes"

export default function p(text: string, attributes: Record<string, string> = {}): string {
    let attributesString = handleAttributes(attributes)
    return `<p ${attributesString}>${text}</p>`
}
