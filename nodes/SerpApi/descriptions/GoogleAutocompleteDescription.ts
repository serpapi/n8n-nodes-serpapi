import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleAutocompleteFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
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
				displayName: 'Country (gl)',
				name: 'gl',
				description:
					'Parameter defines the country to use for the Google search.',
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
				displayName: 'Cursor pointer (cp)',
				name: 'cp',
				description:
					'Cursor pointer defines the position of cursor for the query provided.',
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
				displayName: 'Client (client)',
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
