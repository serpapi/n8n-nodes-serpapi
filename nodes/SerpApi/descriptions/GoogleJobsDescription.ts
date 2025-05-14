import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleJobsFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description: 'Parameter defines the query you want to search',
		default: 'Barista',
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
				resource: ['google_jobs'],
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
				resource: ['google_jobs'],
			},
		},
		options: [
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
			},
			{
				displayName: 'Encoded Location (uule)',
				name: 'uule',
				description:
					"Parameter is the Google encoded location you want to use for the search. uule and location parameters can't be used together.",
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
				options: LanguageOptions,
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
				displayName: 'Next Page Token (next_page_token)',
				name: 'next_page_token',
				description:
					'Parameter defines the next page token. It is used for retrieving the next page of results. Up to 10 results are returned per page. The next page token can be found in the SerpApi JSON response: serpapi_pagination -> next_page_token.',
				default: '',
				routing: {
					request: {
						qs: {
							next_page_token: '={{$value}}',
						},
					},
				},
				type: 'string',
				typeOptions: { password: true },
			},
			{
				displayName: 'Chips (chips)',
				name: 'chips',
				description:
					'This parameter has been deprecated by Google. Parameter defines additional query conditions. Top of a job search page contains elements called chips, its values are extracted in order to be passed to chips parameter. E.g. city:Owg_06VPwoli_nfhBo8LyA== will return results for New York.',
				default: '',
				routing: {
					request: {
						qs: {
							chips: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Search Radius (lrad)',
				name: 'lrad',
				description: 'Defines search radius in kilometers. Does not strictly limit the radius.',
				default: '',
				routing: {
					request: {
						qs: {
							lrad: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Work From Home (ltype)',
				name: 'ltype',
				description: 'Whether to filter the results by work from home',
				default: false,
				routing: {
					request: {
						qs: {
							ltype: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Filter Search (uds)',
				name: 'uds',
				description:
					"Parameter enables to filter search. It's a string provided by Google as a filter. uds values are provided under the section: filters with uds, q and serpapi_link values provided for each filter.",
				default: '',
				routing: {
					request: {
						qs: {
							uds: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
