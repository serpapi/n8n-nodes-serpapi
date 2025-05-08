import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleShoppingFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Shopping search.',
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
				resource: ['google_shopping'],
			},
		},
	},
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
		displayOptions: {
			show: {
				resource: ['google_shopping'],
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
				resource: ['google_shopping'],
			},
		},
		options: [
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
					'Parameter defines the Google domain to use. It defaults to google.com. Head to the Google domains for a full list of supported Google domains.',
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
					"Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries for a full list of supported Google countries.",
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
					"Parameter defines the language to use for the Google Maps search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French) Head to the Google languages for a full list of supported Google languages.",
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
				displayName: 'as_dt',
				name: 'as_dt',
				description:
					'Parameter controls whether to include or exclude results from the site named in the as_sitesearch parameter',
				default: '',
				routing: {
					request: {
						qs: {
							as_dt: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_epq',
				name: 'as_epq',
				description:
					'Parameter identifies a phrase that all documents in the search results must contain. You can also use the phrase search query term to search for a phrase.',
				default: '',
				routing: {
					request: {
						qs: {
							as_epq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_eq',
				name: 'as_eq',
				description:
					'Parameter identifies a word or phrase that should not appear in any documents in the search results. You can also use the exclude query term to ensure that a particular word or phrase will not appear in the documents in a set of search results.',
				default: '',
				routing: {
					request: {
						qs: {
							as_eq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_lq',
				name: 'as_lq',
				description:
					'Parameter specifies that all search results should contain a link to a particular URL. You can also use the link: query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_lq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_nlo',
				name: 'as_nlo',
				description:
					'Parameter specifies the starting value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
				default: '',
				routing: {
					request: {
						qs: {
							as_nlo: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_nhi',
				name: 'as_nhi',
				description:
					'Parameter specifies the ending value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
				default: '',
				routing: {
					request: {
						qs: {
							as_nhi: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_oq',
				name: 'as_oq',
				description:
					'Parameter provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the Boolean OR query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_oq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_q',
				name: 'as_q',
				description:
					'Parameter provides search terms to check for in a document. This parameter is also commonly used to allow users to specify additional terms to search for within a set of search results.',
				default: '',
				routing: {
					request: {
						qs: {
							as_q: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_qdr',
				name: 'as_qdr',
				description:
					'Parameter requests search results from a specified time period (quick date range). The following values are supported:d[number]: requests results from the specified number of past days. Example for the past 10 days: as_qdr=d10w[number]: requests results from the specified number of past weeks.m[number]: requests results from the specified number of past months.y[number]: requests results from the specified number of past years. Example for the past year: as_qdr=y',
				default: '',
				routing: {
					request: {
						qs: {
							as_qdr: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_rq',
				name: 'as_rq',
				description:
					'Parameter specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. You can also use the related: query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_rq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_sitesearch',
				name: 'as_sitesearch',
				description:
					'Parameter allows you to specify that all search results should be pages from a given site. By setting the as_dt parameter, you can also use it to exclude pages from a given site from your search resutls.',
				default: '',
				routing: {
					request: {
						qs: {
							as_sitesearch: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`tbs` Advanced Search Parameters',
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
				displayName: '`shoprs` Search Filter ID',
				name: 'shoprs',
				description:
					'The parameter defines the helper ID for setting search filters. For search filters to be properly applied, the parameter must be used in combination with the updated q parameter, which now contains the name of the filter applied next to your original query. Example:- Original query: Coffee- Query after applying filter "Sugar Free": sugar free CoffeeTo apply filters to your search, follow serpapi_link, which you can find in your JSON output at filters[index].options[index].serpapi_link. To apply multiple filters, you have to follow serpapi_link for each filter individualy. Each consecutive request will contain filters that have been previously applied next to the newly added one. To remove a filter, follow its corresponding serpapi_link.',
				default: '',
				routing: {
					request: {
						qs: {
							shoprs: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`direct_link` Include Direct Link',
				name: 'direct_link',
				description:
					'Whether the search results should include direct link of each products. By default it is false, if you need direct link, set it to true. This parameter only applies to the new layout (US and few other countries). Most countries have not yet switched to the new layout, so the link will be present without needing this parameter. When using this parameter, it is expected the search will take longer than a normal search request.',
				default: false,
				routing: {
					request: {
						qs: {
							direct_link: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`start` Result Offset',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 60 is the 2nd page of results, 120 is the 3rd page of results, etc.).For the new layout, the parameter is not recommended. To easily retrieve paginated results accurately, it is advisable to follow the link provided in serpapi_pagination.next.",
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
				displayName: '`num` Number of Results',
				name: 'num',
				description:
					'Parameter defines the maximum number of results to return. (e.g., 60 (default) returns 60 results, 40 returns 40 results, and 100 (maximum) returns 100 results). Any number greater than maximum number (100) will default to 100. Any number lesser than minimum number (1) will default to 60. For the new layout, the parameter is no longer supported.',
				default: '',
				routing: {
					request: {
						qs: {
							num: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`device` Device',
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
