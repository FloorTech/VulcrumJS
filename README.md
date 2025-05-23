# VulcrumJS

> The current version only has a demo set up, but no CLI tool

You may have used React before, and fell in love with JSX. However, the rest of React's tools (like the Virtual DOM) are not right for you. You may also want automatic SSG by default. *VulcrumJS* solves these problems, and more! It is designed very similar to JSX, but in vanilla JavaScript. The design also takes Next.js's idea of separate functions for metadata, and extended it. Not only that, but custom *components* work. Because *VulcrumJS* uses JavaScript functions for *components* that return strings, you can use a custom string, too! The *components* are only for ease of typing and complex, custom elements.

## Examples

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

## Developer's Guide

> Currently, input values are preset at the bottom of the `index.ts`, or `index.js` if you compiled the project first. If you want to make your own template, see the example's template for a better understanding.

### Step 1 *Configuring*

Set your input values in the `index.(ts/js)` file, which is located in either `src/` or `dist/`.

```javascript
buildComponent("examples/home.js", "examples/template.html") // Specifies the component to build and the template file
```

### Step 2 *Compiling & Testing*

Run the commands below to start up the program.

```bash
npm run build
npm run start
```

### Step 3 *Uploading*

Upload every file/folder required to load the page onto a host. For this example, a `.css` file at `examples/css/site.css` is required. In the stylesheet configuration, the stylesheet path is set to `/css/site.css` (a request URL.) This means some of the files we need to upload are inside `examples/`. Another file the example needs is `examples/home/index.html`, which equates to `home/` in a request URL. If you named your component `index.js`, it will output a file at `examples/index.html` instead. If you want to publically disclose the component's source code, you *can* upload the JavaScript files.
