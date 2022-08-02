/*💡 Inspired by https://github.com/nicolas-cusan/destyle.css */

export default {
	/* Reset box-model and set borders */
	/* ============================================ */
	'*, ::before, ::after': {
		boxSizing: 'border-box',
		borderStyle: 'solid',
		borderWidth: 0,
	},

	/* Document */
	/* ============================================ */
	/**
	 * 1. Correct the line height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Remove gray overlay on links for iOS.
	 */
	html: {
		lineHeight: 1.15 /* 1 */,
		WebkitTextSizeAdjust: '100%' /* 2 */,
		WebkitTapHighlightColor: 'transparent' /* 3*/,
	},

	/* Sections */
	/* ============================================ */
	/**
	 * Remove the margin in all browsers.
	 */
	body: {
		margin: 0,
	},

	/**
	 * Render the `main` element consistently in IE.
	 */
	main: {
		display: 'block',
	},

	/* Vertical rhythm */
	/* ============================================ */
	'p, table, blockquote, address, pre, iframe, form, figure, dl': {
		margin: 0,
	},

	/* Headings */
	/* ============================================ */
	'h1, h2, h3, h4, h5, h6': {
		fontSize: 'inherit',
		fontWeight: 'inherit',
		margin: '0',
	},

	/* Lists (enumeration) */
	/* ============================================ */
	'ul, ol': { margin: '0', padding: '0', listStyle: 'none' },

	/* Lists (definition) */
	/* ============================================ */
	dt: {
		fontWeight: 'bold',
	},
	dd: {
		marginLeft: '0',
	},

	/* Grouping content */
	/* ============================================ */
	/**
	 * 1. Add the correct box sizing in Firefox.
	 * 2. Show the overflow in Edge and IE.
	 */
	hr: {
		boxSizing: 'content-box' /* 1 */,
		height: '0' /* 1 */,
		overflow: 'visible' /* 2 */,
		borderTopWidth: '1px',
		margin: '0',
		clear: 'both',
		color: 'inherit',
	},

	/**
	 * 1. Correct the inheritance and scaling of font size in all browsers.
	 * 2. Correct the odd `em` font sizing in all browsers.
	 */
	pre: {
		fontFamily: 'monospace, monospace' /* 1 */,
		fontSize: 'inherit' /* 2 */,
	},
	address: {
		fontStyle: 'inherit',
	},

	/* Text-level semantics */
	/* ============================================ */
	/**
	 * Remove the gray background on active links in IE 10.
	 */
	a: {
		backgroundColor: 'transparent',
		textDecoration: 'none',
		color: 'inherit',
	},

	/**
	 * 1. Remove the bottom border in Chrome 57-
	 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
	 */
	'abbr[title]': {
		textDecoration: 'underline dotted',
	},

	/**
	 * Add the correct font weight in Chrome, Edge, and Safari.
	 */
	'b, strong': { fontWeight: 'bolder' },

	/**
	 * 1. Correct the inheritance and scaling of font size in all browsers.
	 * 2. Correct the odd `em` font sizing in all browsers.
	 */
	'code, kbd, samp': {
		fontFamily: 'monospace, monospace' /* 1 */,
		fontSize: 'inherit' /* 2 */,
	},

	/**
	 * Add the correct font size in all browsers.
	 */
	small: {
		fontSize: '80%',
	},
	'sub, sup': {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline',
	},

	/**
	 * Prevent `sub` and `sup` elements from affecting the line height in
	 * all browsers.
	 */
	sub: { bottom: '-0.25em' },
	sup: { top: '-0.5em' },

	/* Replaced content */
	/* ============================================ */
	/**
	 * Prevent vertical alignment issues.
	 */
	'svg, img, embed, object, iframe': { verticalAlign: 'bottom' },

	/* Forms */
	/* ============================================ */
	/**
	 * Reset form fields to make them styleable.
	 * 1. Make form elements stylable across systems iOS especially.
	 * 2. Inherit text-transform from parent.
	 */
	'button, input, optgroup, select, textarea': {
		WebkitAppearance: 'none' /* 1 */,
		appearance: 'none',
		verticalAlign: 'middle',
		color: 'inherit',
		font: 'inherit',
		background: 'transparent',
		padding: '0',
		margin: '0',
		borderRadius: '0',
		textAlign: 'inherit',
		textTransform: 'inherit' /* 2*/,
	},

	/**
	 * Reset radio and checkbox appearance to preserve their look in iOS.
	 */
	'[type="checkbox"]': { WebkitAppearance: 'checkbox', appearance: 'checkbox' },
	'[type="radio"]': { WebkitAppearance: 'radio', appearance: 'radio' },

	/**
	 * Correct cursors for clickable elements.
	 */
	'button, [type="button"], [type="reset"], [type="submit"]': {
		cursor: 'pointer',
	},
	'button:disabled, [type="button"]:disabled, [type="reset"]:disabled, [type="submit"]:disabled':
		{
			cursor: 'default',
		},

	/**
	 * Improve outlines for Firefox and unify style with input elements & buttons.
	 */
	':-moz-focusring': { outline: 'auto' },
	'select:disabled': { opacity: 'inherit' },

	/**
	 * Remove padding
	 */
	option: { padding: '0' },

	/**
	 * Reset to invisible
	 */
	fieldset: { margin: '0', padding: '0', minWidth: '0' },
	legend: { padding: '0' },

	/**
	 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
	 */
	progress: { verticalAlign: 'baseline' },

	/**
	 * Remove the default vertical scrollbar in IE 10+.
	 */
	textarea: { overflow: 'auto' },

	/**
	 * Correct the cursor style of increment and decrement buttons in Chrome.
	 */
	'[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
		{
			height: 'auto',
		},

	/**
	 * 1. Correct the outline style in Safari.
	 */
	'[type="search"]': {
		outlineOffset: '-2px' /* 1 */,
	},

	/**
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	'[type="search"]::-webkit-search-decoration': { WebkitAppearance: 'none' },

	/**
	 * 1. Correct the inability to style clickable types in iOS and Safari.
	 * 2. Fix font inheritance.
	 */
	'::-webkit-file-upload-button': {
		WebkitAppearance: 'button' /* 1 */,
		font: 'inherit' /* 2 */,
	},

	/**
	 * Clickable labels
	 */
	'label[for]': { cursor: 'pointer' },

	/* Interactive */
	/* ============================================ */
	/*
	 * Add the correct display in Edge, IE 10+, and Firefox.
	 */
	details: { display: 'block' },

	/*
	 * Add the correct display in all browsers.
	 */
	summary: { display: 'list-item' },

	/*
	 * Remove outline for editable content.
	 */
	'[contenteditable]:focus': { outline: 'auto' },

	/* Tables */
	/* ============================================ */
	/**
	1. Correct table border color inheritance in all Chrome and Safari.
	*/
	table: {
		borderColor: 'inherit' /* 1 */,
		borderCollapse: 'collapse',
	},
	caption: { textAlign: 'left' },
	'td, th': { verticalAlign: 'top', padding: '0' },
	th: { textAlign: 'left', fontWeight: 'bold' },
}
