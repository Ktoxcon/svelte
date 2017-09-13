export default {
	data: {
		foo: ['a'],
		bar: ['c']
	},

	html: `
		<svg>
			<g class='foo'>a</g>
			<g class='bar'>c</g>
		</svg>
	`,

	test(assert, component, target) {
		component.set({ foo: ['a', 'b'] });

		assert.htmlEqual(target.innerHTML, `
			<svg>
				<g class='foo'>a</g>
				<g class='foo'>b</g>
				<g class='bar'>c</g>
			</svg>
		`);
	}
};