import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleJobsFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
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
				displayName: '`location` Location',
				name: 'location',
				description:
					"Parameter defines from where you want the search to originate. If several locations match the location requested, we'll pick the most popular one. Head to the /locations.json API if you need more precise control. The location and uule parameters can't be used together. It is recommended to specify location at the city level in order to simulate a real user's search. If location is omitted, the search may take on the location of the proxy.",
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
				displayName: '`uule` Encoded Location',
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
				displayName: '`google_domain` Domain',
				name: 'google_domain',
				description:
					'Parameter defines the Google domain to use. It defaults to google.com. Head to the Google domains page for a full list of supported Google domains.',
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
				options: LanguageOptions,
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Jobs search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: '`next_page_token` Next Page Token',
				name: 'next_page_token',
				description:
					'Parameter defines the next page token. It is used for retrieving the next page of results. Up to 10 results are returned per page. The next page token can be found in the SerpApi JSON response: serpapi_pagination -&gt; next_page_token.',
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
				displayName: '`chips` Chips',
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
				displayName: '`lrad` Search Radius',
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
				displayName: '`ltype` Work From Home',
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
				displayName: '`uds` Filter Search',
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
