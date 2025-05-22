import cool from "./cool.js"

export function stylesheets() {
    return [
        "/css/site.css",
    ]
}

export function metadata() {
    return {
        title: "home page",
    }
}

export default function home({ p, div, }) {
    return div([
        p("Hello!", {
            class: "heading",
        }),
        div([
            p("Container paragraph!"),
            p("Second container paragraph!"),
            p([
                "Paragraph with multiple children!",
                ` <a href="https://www.example.com" parent="_blank">This is a link inside a paragraph!</a>`,
            ]),
        ]),
        cool({ p, }),
    ])
}
