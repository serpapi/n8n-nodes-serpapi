/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleScholarFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can also use helpers in your query such as: author:, or source:. Usage of cites parameter makes q optional. Usage of cites together with q triggers search within citing articles. Usage of cluster together with q and cites parameters is prohibited. Use cluster parameter only.',
		default: '(Coffee)',
		routing: {
			request: {
				qs: {
					q: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['google_scholar'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['google_scholar'],
			},
		},
		options: [
			{
				displayName: '`cites` Cited By',
				name: 'cites',
				description:
					'Parameter defines unique ID for an article to trigger Cited By searches. Usage of cites will bring up a list of citing documents in Google Scholar. Example value: cites=1275980731835430123. Usage of cites and q parameters triggers search within citing articles.',
				default: '',
				routing: {
					request: {
						qs: {
							cites: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_ylo',
				name: 'as_ylo',
				description:
					'Parameter defines the year from which you want the results to be included. (e.g. if you set as_ylo parameter to the year 2018, the results before that year will be omitted.). This parameter can be combined with the as_yhi parameter.',
				default: '',
				routing: {
					request: {
						qs: {
							as_ylo: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: 'as_yhi',
				name: 'as_yhi',
				description:
					'Parameter defines the year until which you want the results to be included. (e.g. if you set as_yhi parameter to the year 2018, the results after that year will be omitted.). This parameter can be combined with the as_ylo parameter.',
				default: '',
				routing: {
					request: {
						qs: {
							as_yhi: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`scisbd` Sort By Date',
				name: 'scisbd',
				description:
					'Parameter defines articles added in the last year, sorted by date. It can be set to 1 to include only abstracts, or 2 to include everything. The default value is 0 which means that the articles are sorted by relevance.',
				default: 1,
				routing: {
					request: {
						qs: {
							scisbd: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Abstracts',
						value: 1,
					},
					{
						name: 'Everything',
						value: 2,
					},
				],
			},
			{
				displayName: '`cluster` Versions Of',
				name: 'cluster',
				description:
					'Parameter defines unique ID for an article to trigger All Versions searches. Example value: cluster=1275980731835430123. Usage of cluster together with q and cites parameters is prohibited. Use cluster parameter only.',
				default: '',
				routing: {
					request: {
						qs: {
							cluster: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Scholar search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
				default: 'af',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afrikaans - af',
						value: 'af',
					},
					{
						name: 'Akan - ak',
						value: 'ak',
					},
					{
						name: 'Albanian - sq',
						value: 'sq',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'Amharic - am',
						value: 'am',
					},
					{
						name: 'Arabic - ar',
						value: 'ar',
					},
					{
						name: 'Armenian - hy',
						value: 'hy',
					},
					{
						name: 'Azerbaijani - az',
						value: 'az',
					},
					{
						name: 'Basque - eu',
						value: 'eu',
					},
					{
						name: 'Belarusian - be',
						value: 'be',
					},
					{
						name: 'Bemba - bem',
						value: 'bem',
					},
					{
						name: 'Bengali - bn',
						value: 'bn',
					},
					{
						name: 'Bihari - bh',
						value: 'bh',
					},
					{
						name: 'Bork, bork, bork! - xx-bork',
						value: 'xx-bork',
					},
					{
						name: 'Bosnian - bs',
						value: 'bs',
					},
					{
						name: 'Breton - br',
						value: 'br',
					},
					{
						name: 'Bulgarian - bg',
						value: 'bg',
					},
					{
						name: 'Bhutanese - bt',
						value: 'bt',
					},
					{
						name: 'Cambodian - km',
						value: 'km',
					},
					{
						name: 'Catalan - ca',
						value: 'ca',
					},
					{
						name: 'Cherokee - chr',
						value: 'chr',
					},
					{
						name: 'Chichewa - ny',
						value: 'ny',
					},
					{
						name: 'Chinese (Simplified) - zh-cn',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Traditional) - zh-tw',
						value: 'zh-tw',
					},
					{
						name: 'Corsican - co',
						value: 'co',
					},
					{
						name: 'Croatian - hr',
						value: 'hr',
					},
					{
						name: 'Czech - cs',
						value: 'cs',
					},
					{
						name: 'Danish - da',
						value: 'da',
					},
					{
						name: 'Dutch - nl',
						value: 'nl',
					},
					{
						name: 'Elmer Fudd - xx-elmer',
						value: 'xx-elmer',
					},
					{
						name: 'English - en',
						value: 'en',
					},
					{
						name: 'Esperanto - eo',
						value: 'eo',
					},
					{
						name: 'Estonian - et',
						value: 'et',
					},
					{
						name: 'Ewe - ee',
						value: 'ee',
					},
					{
						name: 'Faroese - fo',
						value: 'fo',
					},
					{
						name: 'Filipino - tl',
						value: 'tl',
					},
					{
						name: 'Finnish - fi',
						value: 'fi',
					},
					{
						name: 'French - fr',
						value: 'fr',
					},
					{
						name: 'Frisian - fy',
						value: 'fy',
					},
					{
						name: 'Ga - gaa',
						value: 'gaa',
					},
					{
						name: 'Galician - gl',
						value: 'gl',
					},
					{
						name: 'Georgian - ka',
						value: 'ka',
					},
					{
						name: 'German - de',
						value: 'de',
					},
					{
						name: 'Greek - el',
						value: 'el',
					},
					{
						name: 'Greenlandic - kl',
						value: 'kl',
					},
					{
						name: 'Guarani - gn',
						value: 'gn',
					},
					{
						name: 'Gujarati - gu',
						value: 'gu',
					},
					{
						name: 'Hacker - xx-hacker',
						value: 'xx-hacker',
					},
					{
						name: 'Haitian Creole - ht',
						value: 'ht',
					},
					{
						name: 'Hausa - ha',
						value: 'ha',
					},
					{
						name: 'Hawaiian - haw',
						value: 'haw',
					},
					{
						name: 'Hebrew - iw',
						value: 'iw',
					},
					{
						name: 'Hebrew - he',
						value: 'he',
					},
					{
						name: 'Hindi - hi',
						value: 'hi',
					},
					{
						name: 'Hungarian - hu',
						value: 'hu',
					},
					{
						name: 'Icelandic - is',
						value: 'is',
					},
					{
						name: 'Igbo - ig',
						value: 'ig',
					},
					{
						name: 'Indonesian - id',
						value: 'id',
					},
					{
						name: 'Interlingua - ia',
						value: 'ia',
					},
					{
						name: 'Irish - ga',
						value: 'ga',
					},
					{
						name: 'Italian - it',
						value: 'it',
					},
					{
						name: 'Japanese - ja',
						value: 'ja',
					},
					{
						name: 'Javanese - jw',
						value: 'jw',
					},
					{
						name: 'Kannada - kn',
						value: 'kn',
					},
					{
						name: 'Kazakh - kk',
						value: 'kk',
					},
					{
						name: 'Kinyarwanda - rw',
						value: 'rw',
					},
					{
						name: 'Kirundi - rn',
						value: 'rn',
					},
					{
						name: 'Klingon - xx-klingon',
						value: 'xx-klingon',
					},
					{
						name: 'Kongo - kg',
						value: 'kg',
					},
					{
						name: 'Korean - ko',
						value: 'ko',
					},
					{
						name: 'Krio (Sierra Leone) - kri',
						value: 'kri',
					},
					{
						name: 'Kurdish - ku',
						value: 'ku',
					},
					{
						name: 'Kurdish (Soranî) - ckb',
						value: 'ckb',
					},
					{
						name: 'Kyrgyz - ky',
						value: 'ky',
					},
					{
						name: 'Laothian - lo',
						value: 'lo',
					},
					{
						name: 'Latin - la',
						value: 'la',
					},
					{
						name: 'Latvian - lv',
						value: 'lv',
					},
					{
						name: 'Lingala - ln',
						value: 'ln',
					},
					{
						name: 'Lithuanian - lt',
						value: 'lt',
					},
					{
						name: 'Lozi - loz',
						value: 'loz',
					},
					{
						name: 'Luganda - lg',
						value: 'lg',
					},
					{
						name: 'Luo - ach',
						value: 'ach',
					},
					{
						name: 'Macedonian - mk',
						value: 'mk',
					},
					{
						name: 'Malagasy - mg',
						value: 'mg',
					},
					{
						name: 'Malay - ms',
						value: 'ms',
					},
					{
						name: 'Malayalam - ml',
						value: 'ml',
					},
					{
						name: 'Maltese - mt',
						value: 'mt',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Maori - mi',
						value: 'mi',
					},
					{
						name: 'Marathi - mr',
						value: 'mr',
					},
					{
						name: 'Mauritian Creole - mfe',
						value: 'mfe',
					},
					{
						name: 'Moldavian - mo',
						value: 'mo',
					},
					{
						name: 'Mongolian - mn',
						value: 'mn',
					},
					{
						name: 'Montenegrin - sr-me',
						value: 'sr-me',
					},
					{
						name: 'Myanmar - my',
						value: 'my',
					},
					{
						name: 'Nepali - ne',
						value: 'ne',
					},
					{
						name: 'Nigerian Pidgin - pcm',
						value: 'pcm',
					},
					{
						name: 'Northern Sotho - nso',
						value: 'nso',
					},
					{
						name: 'Norwegian - no',
						value: 'no',
					},
					{
						name: 'Norwegian (Nynorsk) - nn',
						value: 'nn',
					},
					{
						name: 'Occitan - oc',
						value: 'oc',
					},
					{
						name: 'Oriya - or',
						value: 'or',
					},
					{
						name: 'Oromo - om',
						value: 'om',
					},
					{
						name: 'Pashto - ps',
						value: 'ps',
					},
					{
						name: 'Persian - fa',
						value: 'fa',
					},
					{
						name: 'Pirate - xx-pirate',
						value: 'xx-pirate',
					},
					{
						name: 'Polish - pl',
						value: 'pl',
					},
					{
						name: 'Portuguese - pt',
						value: 'pt',
					},
					{
						name: 'Portuguese (Brazil) - pt-br',
						value: 'pt-br',
					},
					{
						name: 'Portuguese (Portugal) - pt-pt',
						value: 'pt-pt',
					},
					{
						name: 'Punjabi - pa',
						value: 'pa',
					},
					{
						name: 'Quechua - qu',
						value: 'qu',
					},
					{
						name: 'Romanian - ro',
						value: 'ro',
					},
					{
						name: 'Romansh - rm',
						value: 'rm',
					},
					{
						name: 'Runyakitara - nyn',
						value: 'nyn',
					},
					{
						name: 'Russian - ru',
						value: 'ru',
					},
					{
						name: 'Scots Gaelic - gd',
						value: 'gd',
					},
					{
						name: 'Serbian - sr',
						value: 'sr',
					},
					{
						name: 'Serbo-Croatian - sh',
						value: 'sh',
					},
					{
						name: 'Sesotho - st',
						value: 'st',
					},
					{
						name: 'Setswana - tn',
						value: 'tn',
					},
					{
						name: 'Seychellois Creole - crs',
						value: 'crs',
					},
					{
						name: 'Shona - sn',
						value: 'sn',
					},
					{
						name: 'Sindhi - sd',
						value: 'sd',
					},
					{
						name: 'Sinhalese - si',
						value: 'si',
					},
					{
						name: 'Slovak - sk',
						value: 'sk',
					},
					{
						name: 'Slovenian - sl',
						value: 'sl',
					},
					{
						name: 'Somali - so',
						value: 'so',
					},
					{
						name: 'Spanish - es',
						value: 'es',
					},
					{
						name: 'Spanish (Latin American) - es-419',
						value: 'es-419',
					},
					{
						name: 'Sundanese - su',
						value: 'su',
					},
					{
						name: 'Swahili - sw',
						value: 'sw',
					},
					{
						name: 'Swedish - sv',
						value: 'sv',
					},
					{
						name: 'Tajik - tg',
						value: 'tg',
					},
					{
						name: 'Tamil - ta',
						value: 'ta',
					},
					{
						name: 'Tatar - tt',
						value: 'tt',
					},
					{
						name: 'Telugu - te',
						value: 'te',
					},
					{
						name: 'Thai - th',
						value: 'th',
					},
					{
						name: 'Tigrinya - ti',
						value: 'ti',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Tshiluba - lua',
						value: 'lua',
					},
					{
						name: 'Tumbuka - tum',
						value: 'tum',
					},
					{
						name: 'Turkish - tr',
						value: 'tr',
					},
					{
						name: 'Turkmen - tk',
						value: 'tk',
					},
					{
						name: 'Twi - tw',
						value: 'tw',
					},
					{
						name: 'Uighur - ug',
						value: 'ug',
					},
					{
						name: 'Ukrainian - uk',
						value: 'uk',
					},
					{
						name: 'Urdu - ur',
						value: 'ur',
					},
					{
						name: 'Uzbek - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Vietnamese - vi',
						value: 'vi',
					},
					{
						name: 'Welsh - cy',
						value: 'cy',
					},
					{
						name: 'Wolof - wo',
						value: 'wo',
					},
					{
						name: 'Xhosa - xh',
						value: 'xh',
					},
					{
						name: 'Yiddish - yi',
						value: 'yi',
					},
					{
						name: 'Yoruba - yo',
						value: 'yo',
					},
					{
						name: 'Zulu - zu',
						value: 'zu',
					},
				],
			},
			{
				displayName: '`lr` Set Multiple Languages',
				name: 'lr',
				description:
					'Parameter defines one or multiple languages to limit the search to. It uses lang_{two-letter language code} to specify languages and | as a delimiter. (e.g., lang_fr|lang_de will only search French and German pages). Head to the Google lr languages for a full list of supported languages.',
				default: '',
				routing: {
					request: {
						qs: {
							lr: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`start` Result Offset',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 10 is the 2nd page of results, 20 is the 3rd page of results, etc.).",
				default: '',
				routing: {
					request: {
						qs: {
							start: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`num` Number of Results',
				name: 'num',
				description:
					'Parameter defines the maximum number of results to return, ranging from 1 to 20, with a default of 10',
				default: '',
				routing: {
					request: {
						qs: {
							num: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: 'as_sdt',
				name: 'as_sdt',
				description:
					'Parameter can be used either as a search type or a filter.As a Filter (only works when searching articles): 0 - exclude patents (default) 7 - include patents. As a Search Type:4 - Select case law (US courts only). This will select all the State and Federal courts. e.g. as_sdt=4 - Selects case law (all courts). To select specific courts, see the full list of supported Google Scholar courts. e.g. as_sdt=4,33,192 - 4 is the required value and should always be in the first position, 33 selects all New York courts and 192 selects Tax Court. Values have to be separated by comma (,).',
				default: '0',
				routing: {
					request: {
						qs: {
							as_sdt: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`safe` Adult Content Filtering',
				name: 'safe',
				description:
					'Parameter defines the level of filtering for adult content. It can be set to active or off, by default Google will blur explicit content.',
				default: 'active',
				routing: {
					request: {
						qs: {
							safe: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Off',
						value: 'off',
					},
				],
			},
			{
				displayName: '`filter` Results Filtering',
				name: 'filter',
				description:
					"Whether the filters for 'Similar Results' and 'Omitted Results' are on or off. It can be set to 1 (default) to enable these filters, or 0 to disable these filters.",
				default: false,
				routing: {
					request: {
						qs: {
							filter: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'as_vis',
				name: 'as_vis',
				description:
					'Whether you would like to include citations or not. It can be set to true to exclude these results, or false (default) to include them.',
				default: false,
				routing: {
					request: {
						qs: {
							as_vis: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'as_rr',
				name: 'as_rr',
				description:
					'Whether you would like to show only review articles or not (these articles consist of topic reviews, or discuss the works or authors you have searched for). It can be set to true to enable this filter, or false (default) to show all results.',
				default: false,
				routing: {
					request: {
						qs: {
							as_rr: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			...serpApiFields,
		],
	},
];
