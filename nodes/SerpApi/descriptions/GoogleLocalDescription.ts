import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleLocalFields: INodeProperties[] = [
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
				resource: ['google_local'],
			},
		},
	},
	{
		displayName: 'Location (location)',
		name: 'location',
		description:
			'Parameter defines from where you want the search to originate. See docs for supported locations: https://serpapi.com/locations-api',
		default: '',
		routing: {
			request: {
				qs: {
					location: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_local'],
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
				resource: ['google_local'],
			},
		},
		options: [
			{
				displayName: 'Encoded Location (uule)',
				name: 'uule',
				description:
					"Parameter is the Google encoded location you want to use for the search. uule and location parameters can't be used together",
				default: '',
				routing: {
					request: {
						qs: {
							uule: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Domain (google_domain)',
				name: 'google_domain',
				description:
					'Parameter defines the Google domain to use. It defaults to google.com',
				default: 'google.com',
				routing: {
					request: {
						qs: {
							google_domain: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: DomainOptions,
			},
			{
				displayName: 'Country (gl)',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google Local search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries for a full list of supported Google countries.",
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
				displayName: 'Google Place ID (ludocid)',
				name: 'ludocid',
				description:
					'Parameter defines the ID (CID) of the Google My Business listing you want to scrape. Also known as Google Place ID. To aquire the ludocid you can either use Google\'s CID converter, or data_cid from SerpApi\'s Google Maps API. Example CID for "New York, NY, USA": 14414772292044717666.',
				default: '',
				routing: {
					request: {
						qs: {
							ludocid: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Advanced Search Parameters (tbs)',
				name: 'tbs',
				description:
					"(to be searched) parameter defines advanced search parameters that aren't possible in the regular query field",
				default: '',
				routing: {
					request: {
						qs: {
							tbs: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Result Offset (start)',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. On desktop, parameter only accepts multiples of 20 (e.g. 20 for the second page results, 40 for the third page results, etc.). On mobile, parameter only accepts multiples of 10 (e.g. 10 for the second page results, 20 for the third page results, etc.).",
				default: '',
				routing: {
					request: {
						qs: {
							start: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Device (device)',
				name: 'device',
				description:
					'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser.',
				default: 'desktop',
				routing: {
					request: {
						qs: {
							device: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
