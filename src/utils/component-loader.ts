import path from "path"
import * as components from "../components"

export type ComponentMetadata = Record<string, string>

export default async function loadComponent(componentPathRaw: string, helpers: Record<string, any>): Promise<[ComponentMetadata, string[], string]> {
    const componentPath = path.resolve(componentPathRaw)
    const filename = path.basename(componentPath, path.extname(componentPath))

    try {
        const module = await import(`file://${componentPath}`)
        if (module) {
            if (!module.default) {
                return [
                    {
                        title: "Error",
                    },
                    [],
                    components.div([
                        components.p(`The component "${filename}" did not load correctly!`),
                        components.p("No default export is provided."),
                    ]),
                ]
            }

            if (typeof module.default !== "function") {
                return [
                    {
                        title: "Error",
                    },
                    [],
                    components.div([
                        components.p(`The component "${filename}" did not load correctly!`),
                        components.p("The default export must be a function."),
                    ]),
                ]
            }

            const result = module.default({ ...helpers, })
            let metadata = {}
            let stylesheets = []

            if (module.metadata) {
                metadata = module.metadata()
            }

            if (module.stylesheets) {
                stylesheets = module.stylesheets()
            }

            return [
                metadata,
                stylesheets,
                result,
            ]
        }

        return [
            {
                title: "Error",
            },
            [],
            components.div([
                components.p(`The component "${filename}" did not load correctly!`),
                components.p("The error is unknown"),
            ])
        ]
    } catch (error) {
        return [
            {
                title: "Error",
            },
            [],
            components.div([
                components.p(`The component "${filename}" did not load correctly!`),
                components.p(error instanceof Error ? `${error.message} at ${error.stack}` : "The error is unknown"),
            ])
        ]
    }
}
