#!/usr/bin/env node
import path from "path"
import { program, Option } from "commander"
import { buildComponent } from "./utils/component-actions.js"

interface CliOptions {
    mode?: string
    path: string
    templatePath?: string
}

function build(options: CliOptions) {
    if (!options.path) {
        console.error("Error: The --path option is required.")
        process.exit(1)
    }

    if (!options.templatePath) {
        options.templatePath = path.join(path.dirname(options.path), "template.html")
    }

    buildComponent(options.path, options.templatePath)
    console.log(`The component has built successfully! Check the output in the same directory as the component file.`)
}

program
    .name("vulcrum")
    .description("VulcrumJS CLI for building components and more")
    .version("0.1.0")

    // Mode selection
    .addOption(
        new Option(
            "-m, --mode <mode>",
            "Sets the command mode for the current execution"
        ).choices(["build", "generate"])
    )

    // Build mode
    .option("-p, --path <string>", "Path to the component's file")
    .option("-t, --template-path <string>", "Path to the HTML template's file (defaults to 'template.html')")


    .action((options: CliOptions) => {
        function handleOther() {
            console.error("Error: No valid command mode provided. Use '--mode' or '-m' by itself to see a list of command modes.")
            process.exit(1)
        }

        if (options.mode) {
            switch (options.mode) {
                case "build":
                    build(options)
                    break
                case "generate":
                    console.error("Error: The 'generate' mode is not implemented yet.")
                    process.exit(1)
                default:
                    handleOther()
                    break
            }
        }
        else handleOther()
    })
program.parse(process.argv)
