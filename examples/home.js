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
        p("Hello!"),
        div([
            p("Container paragraph!"),
            p("Second container paragraph!"),
        ]),
        cool({ p, }),
    ])
}
