import fs from "fs"
import path from "path"
import * as components from "../components"
import loadComponent from "../utils/component-loader"
import transformTemplate from "../utils/template-transformer"

export async function buildComponent(componentPathRaw: string, templatePath: string) {
    const componentPath = path.resolve(componentPathRaw)
    const filename = path.basename(componentPath, path.extname(componentPath))
    const buildFileContainer = filename === "index" ? path.dirname(componentPath) : path.join(path.dirname(componentPath), filename)

    if (!fs.existsSync(buildFileContainer))
        fs.mkdirSync(buildFileContainer)

    const buildfilePath = path.join(buildFileContainer, "index.html")
    const [metadata, stylesheets, html] = (await loadComponent(
        componentPath,
        components
    ))
    fs.writeFileSync(buildfilePath, transformTemplate(html, metadata, stylesheets, templatePath, () => {
        return components.div([
            components.p(`The component "${filename}" did not load correctly!`),
            components.p("The specified template path does not exist."),
        ])
    }), "utf-8")
}
