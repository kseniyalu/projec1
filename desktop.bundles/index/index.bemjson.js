module.exports = {
	block: 'page',
	title: 'Portfolio',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [

				/* MENU */
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					mix: [{ block: 'section', mods: { view: 'medium' } }],
					content: [
						{
							block: 'tpl-grid',
							mods: { 'col-gap': 'full', 'xs-columns': '2', 's-columns': '8', 'm-columns': '10' },
							content: [
								{
									elem: 'fraction',
									elemMods: { 'xs-col': '2', 's-col': '4', 'm-col': '4' },
									mix: { block: 'decorator', mods: { 'indent-t': 'xxxxxxl' } },
									content: [
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl'} },
											content: [
												{
													block: 'text',
													tag: 'a',
													attrs: { href: 'https://kassa.yandex.ru/index.html'},
													mods: { view: 'link', size: 'xxxl'  },
													content: 'Kseniya Lushnikova'
												}
											]
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
											content: [
												{
													block: 'text',
													tag: 'a',
													attrs: { href: 'https://kassa.yandex.ru/index.html'},
													mods: { view: 'link', size: 'xl'  },
													content: 'Home'
												}
											]
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
											content: [
												{
													block: 'text',
													tag: 'a',
													attrs: { href: 'https://kassa.yandex.ru/works.html'},
													mods: { view: 'link', size: 'xl'  },
													content: 'Works'
												}
											]
										},
										{
											elem: 'item',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
											content: [
												{
													block: 'text',
													tag: 'a',
													attrs: { href: 'https://kassa.yandex.ru/experiments.html'},
													mods: { view: 'link', size: 'xl'  },
													content: 'Experiments'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'text',
													tag: 'a',
													attrs: { href: 'https://kassa.yandex.ru/social.html'},
													mods: { view: 'link', size: 'xl'  },
													content: 'Social'
												}
											]
										}
									]
								},
								{
									elem: 'fraction',
									elemMods: { 'xs-col': '2', 's-col': '4', 'm-col': '6' },
									mix: { block: 'decorator', mods: { 'indent-t': 'xxxxxxl' } },
									content: [
										{
											block: 'text',
											mods: { size: 'xxxxl'  },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
											content: 'I am designer and I offer the chance to break out of the routine and really kickstart a new creative energy. I push participants out of their comfortzone, minimising digital use and focussing on manual and analogue making methods.'
										}
									]
								}
							]
						}
					]
				},
				/* /MENU */
			]
		}




	]
};
