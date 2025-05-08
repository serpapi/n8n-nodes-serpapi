import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleAutocompleteFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the search query. A query that would be used to provide completion options.',
		default: '',
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
				resource: ['google_autocomplete'],
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
				resource: ['google_autocomplete'],
			},
		},
		options: [
			{
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries page for a full list of supported Google countries.",
				default: 'us',
				routing: {
					request: {
						qs: {
							gl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: CountryOptions,
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Autocomplete search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: '`cp` Cursor pointer',
				name: 'cp',
				description:
					'Cursor pointer defines the position of cursor for the query provided, position starts from 0 which is a case where cursor is placed before the query |query. If not provided acts as cursor is placed in the end of query query|.',
				default: '',
				routing: {
					request: {
						qs: {
							cp: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`client` Client',
				name: 'client',
				description: 'Parameter used to define client for autocomplete',
				default: 'chrome',
				routing: {
					request: {
						qs: {
							client: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Chrome', value: 'chrome' },
					{ name: 'Chrome omni', value: 'chrome-omni' },
					{ name: 'Firefox', value: 'firefox' },
					{ name: 'Google Local', value: 'gws-wiz-local' },
					{ name: 'Home page', value: 'gws-wiz' },
					{ name: 'psy-ab', value: 'psy-ab' },
					{ name: 'Safari', value: 'safari' },
					{ name: 'toolbar', value: 'toolbar' },
					{ name: 'youtube', value: 'youtube' },
				],
			},
			...serpApiFields,
		],
	},
];
