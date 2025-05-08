import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleImagesFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Images search. e.g. inurl:, site:, intitle:.',
		default: 'coffee',
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
				resource: ['google_images'],
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
				resource: ['google_images'],
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
					"Parameter defines the country to use for the Google Images search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries for a full list of supported Google countries.",
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
					"Parameter defines the language to use for the Google Images search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French) Head to the Google languages for a full list of supported Google languages.",
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
				displayName: '`cr` Set Multiple Countries',
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
				displayName: '`period_unit` Time Period Unit',
				name: 'period_unit',
				description:
					"Parameter defines the time period unit to search for the recent images, e.g. from past minute, hour, day etc. This parameter can't be used with start_date/end_date parameters. This parameter overrides qdr component of tbs parameter.",
				default: 'y',
				routing: {
					request: {
						qs: {
							period_unit: '={{$value}}',
						},
					},
				},
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{
						name: 'Second',
						value: 's',
					},
					{
						name: 'Minute',
						value: 'n',
					},
					{
						name: 'Hour',
						value: 'h',
					},
					{
						name: 'Day',
						value: 'd',
					},
					{
						name: 'Week',
						value: 'w',
					},
					{
						name: 'Month',
						value: 'm',
					},
					{
						name: 'Year',
						value: 'y',
					},
				],
			},
			{
				displayName: '`period_value` Time Period Value',
				name: 'period_value',
				description:
					'Parameter defines an optional time period value that can be used with period_unit to describe time periods like 15 seconds, 42 hours, 178 days etc. Default value: 1. Value range: 1..2147483647.',
				default: '',
				routing: {
					request: {
						qs: {
							period_value: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`start_date` Start Date',
				name: 'start_date',
				description:
					"Parameter defines the start date of time period you want to limit the image search to. Format: YYYYMMDD Example: 20241201 - This parameter can't be used with period_unit/period_value parameters.start_date with blank end_date produces date range FROM start_date TO today. This parameter overrides cdr and cd_min components of tbs parameter.",
				default: '',
				routing: {
					request: {
						qs: {
							start_date: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`end_date` End Date',
				name: 'end_date',
				description:
					"Parameter defines the end date of time period you want to limit the image search to. Format: YYYYMMDD Example: 20241231 - This parameter can't be used with period_unit/period_value parameters.end_date with blank start_date produces date range BEFORE end_date. This parameter overrides cdr and cd_max components of tbs parameter.",
				default: '',
				routing: {
					request: {
						qs: {
							end_date: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`chips` Image search filter (alternative)',
				name: 'chips',
				description:
					"Parameter enables to filter image search. It's a string provided by Google as suggested search, like: red apple. Chips are provided under the section: suggested_searches when ijn = 0. Both chips and serpapi_link values are provided for each suggested search.",
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
				displayName: '`tbs` Advanced Search Parameter',
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
				displayName: '`imgar` Aspect Ratio Filtering',
				name: 'imgar',
				description: 'Parameter defines the set aspect ratio of images',
				default: 's',
				routing: {
					request: {
						qs: {
							imgar: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Square',
						value: 's',
					},
					{
						name: 'Tall',
						value: 't',
					},
					{
						name: 'Wide',
						value: 'w',
					},
					{
						name: 'Panoramic',
						value: 'xw',
					},
				],
			},
			{
				displayName: '`imgsz` Image Size Filtering',
				name: 'imgsz',
				description: 'Parameter defines the size of images',
				default: 'l',
				routing: {
					request: {
						qs: {
							imgsz: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Icon', value: 'i' },
					{ name: 'Large', value: 'l' },
					{ name: 'Larger than 10 MP', value: '10mp' },
					{ name: 'Larger than 1024×768', value: 'xga' },
					{ name: 'Larger than 12 MP', value: '12mp' },
					{ name: 'Larger than 15 MP', value: '15mp' },
					{ name: 'Larger than 2 MP', value: '2mp' },
					{ name: 'Larger than 20 MP', value: '20mp' },
					{ name: 'Larger than 4 MP', value: '4mp' },
					{ name: 'Larger than 40 MP', value: '40mp' },
					{ name: 'Larger than 400×300', value: 'qsvga' },
					{ name: 'Larger than 6 MP', value: '6mp' },
					{ name: 'Larger than 640×480', value: 'vga' },
					{ name: 'Larger than 70 MP', value: '70mp' },
					{ name: 'Larger than 8 MP', value: '8mp' },
					{ name: 'Larger than 800×600', value: 'svga' },
					{ name: 'Medium', value: 'm' },
				],
			},
			{
				displayName: '`image_color` Image Color Filtering',
				name: 'image_color',
				description:
					'Parameter defines the color of images. This parameter overrides ic and isc components of tbs parameter.',
				default: 'bw',
				routing: {
					request: {
						qs: {
							image_color: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Black', value: 'black' },
					{ name: 'Black and white', value: 'bw' },
					{ name: 'Blue', value: 'blue' },
					{ name: 'Brown', value: 'brown' },
					{ name: 'Gray', value: 'gray' },
					{ name: 'Green', value: 'green' },
					{ name: 'Orange', value: 'orange' },
					{ name: 'Pink', value: 'pink' },
					{ name: 'Purple', value: 'purple' },
					{ name: 'Red', value: 'red' },
					{ name: 'Teal', value: 'teal' },
					{ name: 'Transparent', value: 'trans' },
					{ name: 'White', value: 'white' },
					{ name: 'Yellow', value: 'yellow' },
				],
			},
			{
				displayName: '`image_type` Image Type Filtering',
				name: 'image_type',
				description:
					'Parameter defines the type of images. This parameter overrides itp component of tbs parameter.',
				default: 'photo',
				routing: {
					request: {
						qs: {
							image_type: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Animated', value: 'animated' },
					{ name: 'Clip art', value: 'clipart' },
					{ name: 'Face', value: 'face' },
					{ name: 'Line drawing', value: 'lineart' },
					{ name: 'Photo', value: 'photo' },
				],
			},
			{
				displayName: '`licenses` Usage Rights Filtering',
				name: 'licenses',
				description:
					'Parameter defines the scope of licenses of images. This parameter overrides sur component of tbs parameter.',
				default: 'f',
				routing: {
					request: {
						qs: {
							licenses: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Commercial and other licenses', value: 'ol' },
					{ name: 'Creative Commons licenses', value: 'cl' },
					{ name: 'Free to use or share', value: 'f' },
					{ name: 'Free to use or share, even commercially', value: 'fc' },
					{ name: 'Free to use, share or modify', value: 'fm' },
					{ name: 'Free to use, share or modify, even commercially', value: 'fmc' },
				],
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
				displayName: '`nfpr` Exclude Auto-corrected Results',
				name: 'nfpr',
				description:
					'Whether to exclude of results from an auto-corrected query when the original query is spelled wrong. It can be set to true to exclude these results, or false to include them (default). Note that this parameter may not prevent Google from returning results for an auto-corrected query if no other results are available.',
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
				displayName: '`filter` Results Filtering',
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
				displayName: '`ijn` Page Number (images)',
				name: 'ijn',
				description:
					'Parameter defines the page number for Google Images. There are 100 images per page. This parameter is equivalent to start (offset) = ijn * 100.',
				default: '',
				routing: {
					request: {
						qs: {
							ijn: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`device` Device',
				name: 'device',
				description:
					'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser.',
				default: '',
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
