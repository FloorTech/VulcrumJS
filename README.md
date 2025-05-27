> The current version now has a *CLI tool*, and you can access the documentation with `npx vulcrum -h`

<div align="center">

<a href="#">
    <img src="https://github.com/FloorTech/VulcrumJS/blob/5825547933daebc56eacfb80cbd9466855402d48/gh-content/VulcrumJS%20Logo.jpeg" />
</a>

# VulcrumJS

You may have used React before, and fell in love with JSX. However, the rest of React's tools (like the Virtual DOM) are not right for you. You may also want automatic SSG by default. *VulcrumJS* solves these problems, and more! It is designed very similar to JSX, but in vanilla JavaScript. The design also takes Next.js's idea of separate functions for metadata, and extended it. Not only that, but custom *components* work. Because *VulcrumJS* uses JavaScript functions for *components* that return strings, you can use a custom string, too! The *components* are only for ease of typing and complex, custom elements.

</div>

## Examples

> A complete example is located [here](https://github.com/FloorTech/VulcrumJS-Example)

```javascript
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
```

As you can see in the example, default components are passed through an object in the main function. If a component does not exist, you can just use a normal string, or make your own! As you can also see, a custom component named `cool` is being used. Below is that file you saw being imported:

```javascript
export default function cool({ p, }) {
    return p("YASSSS!!!")
}
```

Non-primary components are more free because you don't actually have to follow *VulcrumJS's* standards. You only need some way to return a string. This brings up a great point: ***VulcrumJS's* components are just functions that return a string!**

## Developers's Guide

### Step 1 *Configuring*

Copy the example, and edit/create components.

### Step 2 *Compiling & Testing*

Run the commands below to start up the program.

```bash
npx vulcrum -m build -p path-to-component.js

# Optional
npx vulcrum -m build -p path-to-component.js -t path-to-template.html
```

### Step 3 *Uploading*

Upload every file/folder required to load the page onto a host. For this example, a `.css` file at `examples/css/site.css` is required. In the stylesheet configuration, the stylesheet path is set to `/css/site.css` (a request URL.) This means some of the files we need to upload are inside `examples/`. Another file the example needs is `examples/home/index.html`, which equates to `home/` in a request URL. If you named your component `index.js`, it will output a file at `examples/index.html` instead. If you want to publically disclose the component's source code, you *can* upload the JavaScript files.
