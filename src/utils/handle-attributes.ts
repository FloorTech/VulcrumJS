export default function handleAttributes(attributes: Record<string, string> = {}): string {
    let attributesString = ""

    for (const attributeName of Object.keys(attributes)) {
        attributesString += `${attributeName}="${attributes[attributeName]}" `
    }

    return attributesString.trim()
}
