import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleSearchFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google search. e.g. inurl:, site:, intitle:. We also support advanced search query parameters such as as_dt and as_eq. See the full list of supported advanced search query parameters.',
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
				resource: ['google'],
			},
		},
	},
	{
		displayName: 'Location (location)',
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
				resource: ['google'],
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
				resource: ['google'],
			},
		},
		options: [
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
				displayName: 'Google Place ID (ludocid)',
				name: 'ludocid',
				description:
					'Parameter defines the ID (CID) of the Google My Business listing you want to scrape. Also known as Google Place ID.',
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
				displayName: 'Additional Google Place ID (lsig)',
				name: 'lsig',
				description:
					'Parameter that you might have to use to force the knowledge graph map view to show up. You can find the lsig ID by using the Local Pack API or Google Local API. lsig ID is also available via a redirect Google uses within Google My Business.',
				default: '',
				routing: {
					request: {
						qs: {
							lsig: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Google Knowledge Graph ID (kgmid)',
				name: 'kgmid',
				description:
					'Parameter defines the ID (KGMID) of the Google Knowledge Graph listing you want to scrape. Also known as Google Knowledge Graph ID. Searches with kgmid parameter will return results for the originally encrypted search parameters. For some searches, kgmid may override all other parameters except start, and num parameters.',
				default: '',
				routing: {
					request: {
						qs: {
							kgmid: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Google Cached Search Parameters ID (si)',
				name: 'si',
				description:
					'Parameter defines the cached search parameters of the Google Search you want to scrape. Searches with si parameter will return results for the originally encrypted search parameters. For some searches, si may override all other parameters except start, and num parameters. si can be used to scrape Google Knowledge Graph Tabs.',
				default: '',
				routing: {
					request: {
						qs: {
							si: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Google Element Rendering (ibp)',
				name: 'ibp',
				description:
					'Parameter is responsible for rendering layouts and expansions for some elements (e.g., gwp;0,7 to expand searches with ludocid for expanded knowledge graph)',
				default: '',
				routing: {
					request: {
						qs: {
							ibp: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Google Filter Search (uds)',
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
			{
				displayName: 'Domain (google_domain)',
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
				displayName: 'Country (gl)',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France). Head to the Google countries page for a full list of supported Google countries.",
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
					"Parameter defines the language to use for the Google search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: 'Set Multiple Countries (cr)',
				name: 'cr',
				description:
					'Parameter defines one or multiple countries to limit the search to. It uses country{two-letter upper-case country code} to specify countries and | as a delimiter. (e.g., countryFR|countryDE will only search French and German pages). Head to the Google cr countries page for a full list of supported countries.',
				default: '',
				routing: {
					request: {
						qs: {
							cr: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Set Multiple Languages (lr)',
				name: 'lr',
				description:
					'Parameter defines one or multiple languages to limit the search to. It uses lang_{two-letter language code} to specify languages and | as a delimiter. (e.g., lang_fr|lang_de will only search French and German pages). Head to the Google lr languages page for a full list of supported languages.',
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
				displayName: 'Include/Exclude Site (as_dt)',
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
				displayName: 'Required Phrase (as_epq)',
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
				displayName: 'Excluded Word/Phrase (as_eq)',
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
				displayName: 'Link to URL (as_lq)',
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
				displayName: 'Search Range Start (as_nlo)',
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
				displayName: 'Search Range End (as_nhi)',
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
				displayName: 'Additional Search Terms (as_oq)',
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
				displayName: 'Search Terms (as_q)',
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
				displayName: 'Time Period (as_qdr)',
				name: 'as_qdr',
				description:
					'Parameter requests search results from a specified time period (quick date range). The following values are supported: d[number]: requests results from the specified number of past days. Example for the past 10 days: as_qdr=d10; w[number]: requests results from the specified number of past weeks; m[number]: requests results from the specified number of past months; y[number]: requests results from the specified number of past years. Example for the past year: as_qdr=y',
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
				displayName: 'Related URL (as_rq)',
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
				displayName: 'Site Search (as_sitesearch)',
				name: 'as_sitesearch',
				description:
					'Parameter allows you to specify that all search results should be pages from a given site. By setting the as_dt parameter, you can also use it to exclude pages from a given site from your search results.',
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
				displayName: 'Advanced Search Parameters (tbs)',
				name: 'tbs',
				description:
					"(to be searched) parameter defines advanced search parameters that aren't possible in the regular query field. (e.g., advanced search for patents, dates, news, videos, images, apps, or text contents).",
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
				displayName: 'Adult Content Filtering (safe)',
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
				displayName: 'Exclude Auto-corrected Results (nfpr)',
				name: 'nfpr',
				description:
					'Whether to exclude the results from an auto-corrected query when the original query is spelled wrong. It can be set to true to exclude these results, or false to include them (default). Note that this parameter may not prevent Google from returning results for an auto-corrected query if no other results are available.',
				default: false,
				routing: {
					request: {
						qs: {
							nfpr: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Results Filtering (filter)',
				name: 'filter',
				description:
					"Whether the filters for 'Similar Results' and 'Omitted Results' are on or off. It can be set to true (default) to enable these filters, or false to disable these filters.",
				default: true,
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
				displayName: 'Search Type (tbm)',
				name: 'tbm',
				description: '(to be matched) parameter defines the type of search you want to do',
				default: 'isch',
				routing: {
					request: {
						qs: {
							tbm: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Google Images', value: 'isch' },
					{ name: 'Google Local', value: 'lcl' },
					{ name: 'Google News', value: 'nws' },
					{ name: 'Google Patents', value: 'pts' },
					{ name: 'Google Shopping', value: 'shop' },
					{ name: 'Google Videos', value: 'vid' },
				],
			},
			{
				displayName: 'Result Offset (start)',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 10 is the 2nd page of results, 20 is the 3rd page of results, etc.). Google Local Results only accepts multiples of 20 (e.g. 20 for the second page results, 40 for the third page results, etc.) as the start value.",
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
				displayName: 'Number of Results (num)',
				name: 'num',
				description:
					'Parameter defines the maximum number of results to return. (e.g., 10 (default) returns 10 results, 40 returns 40 results, and 100 returns 100 results). The use of num may introduce latency, and/or prevent the inclusion of specialized result types. It is better to omit this parameter unless it is strictly necessary to increase the number of results per page. Results are not guaranteed to have the number of results specified in num.',
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
				displayName: 'Device (device)',
				name: 'device',
				description:
					'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser (currently using iPhones).',
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