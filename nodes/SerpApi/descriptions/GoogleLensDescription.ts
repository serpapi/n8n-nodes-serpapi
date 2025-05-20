import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleLensFields: INodeProperties[] = [
	{
		displayName: 'Image URL (url)',
		name: 'url',
		description: 'Parameter defines the URL of an image to perform the Google Lens search',
		default: '',
		routing: {
			request: {
				qs: {
					url: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['google_lens'],
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
				operation: ['google_lens'],
			},
		},
		options: [
			{
				displayName: 'Language (hl)',
				name: 'hl',
				description: 'Parameter defines the language to use for the search',
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
				displayName: 'Country (country)',
				name: 'country',
				description:
					'Parameter defines the specific country location to use for the Google Lens search',
				default: 'us',
				routing: {
					request: {
						qs: {
							country: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: CountryOptions,
			},
			{
				displayName: 'Page Token (page_token)',
				name: 'page_token',
				description:
					'Parameter defines the token needed to retrieve results from a specific tab in Google Lens',
				default: '',
				routing: {
					request: {
						qs: {
							page_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
