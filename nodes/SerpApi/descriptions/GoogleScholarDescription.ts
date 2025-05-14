import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { LanguageOptions } from './GoogleOptions';

export const googleScholarFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description:
			'Parameter defines the query you want to search.',
		default: 'Coffee',
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
				displayName: 'Cited By (cites)',
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
				displayName: 'Year From (as_ylo)',
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
				displayName: 'Year Until (as_yhi)',
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
				displayName: 'Sort By Date (scisbd)',
				name: 'scisbd',
				description:
					'Parameter defines articles added in the last year, sorted by date. It can be set to include only abstracts, or to include everything.',
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
				displayName: 'Versions Of (cluster)',
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
				displayName: 'Language (hl)',
				name: 'hl',
				description:
					'Parameter defines the language to use for the search.',
				default: 'en',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: LanguageOptions,
			},
			{
				displayName: 'Set Multiple Languages (lr)',
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
				displayName: 'Result Offset (start)',
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
				displayName: 'Number of Results (num)',
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
				displayName: 'Search Type/Filter (as_sdt)',
				name: 'as_sdt',
				description:
					'Parameter can be used either as a search type or a filter. As a Filter (only works when searching articles): 0 - exclude patents (default), 7 - include patents. As a Search Type: 4 - Select case law (US courts only). This will select all the State and Federal courts. e.g. as_sdt=4 - Selects case law (all courts). To select specific courts, see the full list of supported Google Scholar courts. e.g. as_sdt=4,33,192 - 4 is the required value and should always be in the first position, 33 selects all New York courts and 192 selects Tax Court. Values have to be separated by comma (,).',
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
				displayName: 'Adult Content Filtering (safe)',
				name: 'safe',
				description:
					'Parameter defines the level of filtering for adult content. By default Google will blur explicit content.',
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
				displayName: 'Results Filtering (filter)',
				name: 'filter',
				description:
					"Whether the filters for 'Similar Results' and 'Omitted Results' are on or off. It can be set to true (default) to enable these filters, or false to disable these filters.",
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
				displayName: 'Exclude Citations (as_vis)',
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
				displayName: 'Review Articles Only (as_rr)',
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