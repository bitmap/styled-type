# styled-type

Responsive typography system for [styled-components]. Leverages [styled-system] under the hood.

## Install

```sh
npm install styled-type
```

## Setup

`styled-type` lets you define type styles in you styled-components [theme](https://www.styled-components.com/docs/advanced#theming).

Before anything, make sure you [wrap your app or component in `<ThemeProvider>`](https://www.styled-components.com/docs/advanced#theming).

Next, extend your theme object with a `typeStyles` prop.

```js
const theme = {
  ...
  typeStyles: {
    heading: {
      fontSize: [32, 48, 64],
      lineHeight: 1.1,
    },
    subhead: {
      fontSize: [21, 24, 32],
      lineHeight: 1.1,
    },
    body: {
      fontSize: [16, 18, 21],
      lineHeight: 1.4,
    }
  }
}
```

Import the `<Text>` component from `styled-type` and use the `typeStyle` prop to style your typography.

```js
import React from "react";
import { Text } from "styled-type";

export const MyComponent = props => (
  <article>
    <Text as="h1" typeStyle="heading">
      Aliens attack Earth!
    </Text>
    <Text as="h2" typeStyle="subhead">
      All hope is lost
    </Text>
    <Text typeStyle="body">{props.body}</Text>
  </article>
);
```

## Props

| Prop        | Type     | Default | Description                                                         |
| ----------- | -------- | ------- | ------------------------------------------------------------------- |
| `as`        | `string` | `p`     | render as specified tag                                             |
| `typeStyle` | `string` | `body`  | Mapped to the keys in the [`theme.typeStyles`](#typestyles) object. |

The only custom prop is `typeStyle`. The [`as` polymorphic prop](https://www.styled-components.com/docs/api#as-polymorphic-prop) lets you render any tag you want using your defined styles.

All other props are passed through, so you can easily extend the component if you like. Since this leverages [styled-components], you can wrap the `<Text>` component in `styled()` and use the passed props in a custom component.

```js
<Text as="cite" typeStyle="small">
  Hello World
</Text>
```

## typeStyles

The `typeStyles` property on the `theme` object will accept anything as a key. It's up to you how to define your typography styles. Any prop from `typography`, `color`, `space`, and `layout` in the [styled-system API](https://styled-system.com/api) is valid.

```js
const theme = {
  ...
  typeStyles: {
    hero: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: [55, 73, 81],
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: ['black', 'grey', 'white']
    },
    highlight: {
      backgroundColor: 'yellow',
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
    },
    code: {
      fontSize: [16, 18],
      fontFamily: 'monospace',
      lineHeight: 1.25
    }
  }
}
```

### Responsive props

Every prop accepts an array of values that make it responsive.

```js
    fontSize: [16, 24, 32],
    color: ['red', 'green', 'blue']
```

These are controlled by styled-system's [breakpoints](https://styled-system.com/responsive-styles) and can redefined in your `theme` object. [Learn more about array props](https://styled-system.com/guides/array-props).

### Why not Variants?

[Variants](https://styled-system.com/variants/) in styled-system only accept CSS _style_ objects, limiting the ability to use the responsive features. But, this is a super useful tool, and `textStyles` and `colorStyles` are passed to `<Text>` so they can be used in conjuction.

```js
// theme.js
const theme = {
  textStyles: {
    caps: {
      textTransform: 'uppercase',
    }
  },
  typeStyles: {
    heading: {
      fontSize: [32, 48, 64],
      lineHeight: 1.1,
    }
  }
}

// Component.js
<Text typeStyle="heading" textStyle="caps">Hello World</Text>
```

## License

[MIT](https://github.com/bitmap/react-hook-inview/blob/master/LICENSE)

[styled-components]: https://www.styled-components.com/
[styled-system]: https://www.styled-system.com/
