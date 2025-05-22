export default function home({ p, div, }) {
    return [
        p("Hello!"),
        div([
            p("Container paragraph!"),
            p("Second container paragraph!"),
        ]),
    ]
}
