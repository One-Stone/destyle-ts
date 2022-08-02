#  Destyle.ts
  
  
💡 Inspired by Nicolas Cusan's [destyle.css](https://github.com/nicolas-cusan/destyle.css ).
  
💡 Inspired by Nicolas Cusan's [destyle.css](https://github.com/nicolas-cusan/destyle.css ).
Style reset for typescript. Convert [desyle.css]( ) to style object.
Detach default styles with [Stitches](https://stitches.dev/ ), .
  
##  Install
  
  
`npm i destyle-ts`
  
##  Usage
  
  
```ts
import { destyle } from 'destyle-ts'
  
// Stitches
import { globalCss } from '@stitches/react'
const Destyle = globalCss(destyle)
  
// Root Component
const DestyledComponent = () => {
	return (
		<>
			<Destyle />
			<Story />
		</>
	)
}
```
  