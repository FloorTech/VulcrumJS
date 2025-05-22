import path from "path"
import * as components from "./components"

async function loadComponent(componentPathRaw: string, helpers: Record<string, any>): Promise<string[]> {
    const componentPath = path.resolve(componentPathRaw)
    const filename = path.basename(componentPath, path.extname(componentPath))

    try {
        const module = await import(`file://${componentPath}`)
        if (module) {
            if (!module.default) {
                return [
                    components.p(`The component "${filename}" did not load correctly!`),
                    components.p("No default export is provided."),
                ]
            }

            if (typeof module.default !== "function") {
                return [
                    components.p(`The component "${filename}" did not load correctly!`),
                    components.p("The default export must be a function."),
                ]
            }

            const result = module.default({ ...helpers, })

            if (!Array.isArray(result) || !result.every(x => typeof x === "string")) {
                return [
                    components.p(`The component "${filename}" did not load correctly!`),
                    components.p("The default export must be a function returning other components inside an array."),
                ]
            }

            return result
        }

        return [
            components.p(`The component "${filename}" did not load correctly!`),
            components.p("The error is unknown"),
        ]
    } catch (error) {
        return [
            components.p(`The component "${filename}" did not load correctly!`),
            components.p(error instanceof Error ? `${error.message} at ${error.stack}` : "The error is unknown"),
        ]
    }
}

async function demo() {
    console.log(Object.values(components))

    const html = (await loadComponent(
        "examples/home.js",
        components
    )).join("")
    console.log(html)
}

demo()
