/*💡 Inspired by https://github.com/nicolas-cusan/destyle.css */

export const destyle = {
	/* Reset box-model and set borders */
	'*, ::before, ::after': {
		boxSizing: 'border-box',
		borderStyle: 'solid',
		borderWidth: 0,
	},

	/* Document */
	html: {
		lineHeight: 1.15,
		WebkitTextSizeAdjust: '100%',
		WebkitTapHighlightColor: 'transparent',
	},

	/* Sections */
	body: {
		margin: 0,
	},

	main: {
		display: 'block',
	},

	/* Vertical rhythm */
	'p, table, blockquote, address, pre, iframe, form, figure, dl': {
		margin: 0,
	},

	/* Headings */
	'h1, h2, h3, h4, h5, h6': {
		fontSize: 'inherit',
		fontWeight: 'inherit',
		margin: '0',
	},

	/* Lists (enumeration) */
	'ul, ol': { margin: '0', padding: '0', listStyle: 'none' },

	/* Lists (definition) */
	dt: {
		fontWeight: 'bold',
	},
	dd: {
		marginLeft: '0',
	},

	/* Grouping content */
	hr: {
		boxSizing: 'content-box',
		height: '0',
		overflow: 'visible',
		borderTopWidth: '1px',
		margin: '0',
		clear: 'both',
		color: 'inherit',
	},
	pre: {
		fontFamily: 'monospace, monospace',
		fontSize: 'inherit',
	},
	address: {
		fontStyle: 'inherit',
	},

	/* Text-level semantics */
	a: {
		backgroundColor: 'transparent',
		textDecoration: 'none',
		color: 'inherit',
	},
	'abbr[title]': {
		textDecoration: 'underline dotted',
	},
	'b, strong': { fontWeight: 'bolder' },
	'code, kbd, samp': {
		fontFamily: 'monospace, monospace',
		fontSize: 'inherit',
	},

	small: {
		fontSize: '80%',
	},
	'sub, sup': {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline',
	},

	sub: { bottom: '-0.25em' },
	sup: { top: '-0.5em' },

	/* Replaced content */
	'svg, img, embed, object, iframe': { verticalAlign: 'bottom' },

	/* Forms */
	'button, input, optgroup, select, textarea': {
		WebkitAppearance: 'none',
		appearance: 'none',
		verticalAlign: 'middle',
		color: 'inherit',
		font: 'inherit',
		background: 'transparent',
		padding: '0',
		margin: '0',
		borderRadius: '0',
		textAlign: 'inherit',
		textTransform: 'inherit',
	},

	'[type="checkbox"]': { WebkitAppearance: 'checkbox', appearance: 'checkbox' },
	'[type="radio"]': { WebkitAppearance: 'radio', appearance: 'radio' },

	'button, [type="button"], [type="reset"], [type="submit"]': {
		cursor: 'pointer',
	},
	'button:disabled, [type="button"]:disabled, [type="reset"]:disabled, [type="submit"]:disabled':
		{
			cursor: 'default',
		},

	':-moz-focusring': { outline: 'auto' },
	'select:disabled': { opacity: 'inherit' },

	option: { padding: '0' },

	fieldset: { margin: '0', padding: '0', minWidth: '0' },
	legend: { padding: '0' },

	progress: { verticalAlign: 'baseline' },

	textarea: { overflow: 'auto' },

	'[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
		{
			height: 'auto',
		},

	'[type="search"]': {
		outlineOffset: '-2px',
	},

	'[type="search"]::-webkit-search-decoration': { WebkitAppearance: 'none' },

	'::-webkit-file-upload-button': {
		WebkitAppearance: 'button',
		font: 'inherit',
	},

	'label[for]': { cursor: 'pointer' },

	/* Interactive */
	details: { display: 'block' },

	summary: { display: 'list-item' },

	'[contenteditable]:focus': { outline: 'auto' },

	/* Tables */
	table: {
		borderColor: 'inherit',
		borderCollapse: 'collapse',
	},
	caption: { textAlign: 'left' },
	'td, th': { verticalAlign: 'top', padding: '0' },
	th: { textAlign: 'left', fontWeight: 'bold' },
}

export default destyle
