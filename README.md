# Destyle.ts

Style reset for typescript.
Converted [desyle.css](https://github.com/nicolas-cusan/destyle.css) to style object.

## 🚀 Install

`npm i destyle-ts`

## 📕 Example

Detach default styles example with [Stitches](https://stitches.dev/).

```ts
import { destyle } from 'destyle-ts'

// Stitches
import { globalCss } from '@stitches/react'
const initStyle = globalCss(destyle)

// Root Component
const App = () => {
	return (
		<>
			{initStyle()}
			<YOUR_COMPONENT />
		</>
	)
}
```

## 💡 Inspired by

[destyle.css](https://github.com/nicolas-cusan/destyle.css)
