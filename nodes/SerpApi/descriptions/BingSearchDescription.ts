import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const bingSearchFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description:
			"Parameter defines the search query. You can use anything that you would use in a regular Bing search. (e.g., 'query', NOT, OR, site:, filetype:, near:, ip:, loc:, feed: etc.).",
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
				resource: ['bing'],
			},
		},
	},
	{
		displayName: 'Location (location)',
		name: 'location',
		description:
			'Parameter defines from where you want the search to originate. See docs for supported locations: https://serpapi.com/locations-api.',
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
				resource: ['bing'],
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
				resource: ['bing'],
			},
		},
		options: [
			{
				displayName: 'Latitude (lat)',
				name: 'lat',
				description: 'Defines a GPS latitude for the search origin',
				default: '',
				routing: {
					request: {
						qs: {
							lat: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Longitude (lon)',
				name: 'lon',
				description: 'Defines a GPS longitude for the search origin',
				default: '',
				routing: {
					request: {
						qs: {
							lon: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Market codes (mkt)',
				name: 'mkt',
				description:
					'The market where the results come from (e.g. en-US). This parameter and the cc query parameter are mutually exclusive.',
				default: 'en-us',
				routing: {
					request: {
						qs: {
							mkt: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Chinese - China (zh-cn)', value: 'zh-cn' },
					{ name: 'Danish - Denmark (da-dk)', value: 'da-dk' },
					{ name: 'Dutch - Belgium (nl-be)', value: 'nl-be' },
					{ name: 'Dutch - Netherlands (nl-nl)', value: 'nl-nl' },
					{ name: 'English - Australia (en-au)', value: 'en-au' },
					{ name: 'English - Canada (en-ca)', value: 'en-ca' },
					{ name: 'English - India (en-in)', value: 'en-in' },
					{ name: 'English - Indonesia (en-id)', value: 'en-id' },
					{ name: 'English - Malaysia (en-my)', value: 'en-my' },
					{ name: 'English - New Zealand (en-nz)', value: 'en-nz' },
					{ name: 'English - Philippines (en-ph)', value: 'en-ph' },
					{ name: 'English - South Africa (en-za)', value: 'en-za' },
					{ name: 'English - United Kingdom (en-gb)', value: 'en-gb' },
					{ name: 'English - United States (en-us)', value: 'en-us' },
					{ name: 'Finnish - Finland (fi-fi)', value: 'fi-fi' },
					{ name: 'French - Belgium (fr-be)', value: 'fr-be' },
					{ name: 'French - Canada (fr-ca)', value: 'fr-ca' },
					{ name: 'French - France (fr-fr)', value: 'fr-fr' },
					{ name: 'French - Switzerland (fr-ch)', value: 'fr-ch' },
					{ name: 'German - Austria (de-at)', value: 'de-at' },
					{ name: 'German - Germany (de-de)', value: 'de-de' },
					{ name: 'German - Switzerland (de-ch)', value: 'de-ch' },
					{ name: 'Italian - Italy (it-it)', value: 'it-it' },
					{ name: 'Japanese - Japan (ja-jp)', value: 'ja-jp' },
					{ name: 'Korean - Korea (ko-kr)', value: 'ko-kr' },
					{ name: 'Norwegian - Norway (no-no)', value: 'no-no' },
					{ name: 'Polish - Poland (pl-pl)', value: 'pl-pl' },
					{ name: 'Portuguese - Brazil (pt-br)', value: 'pt-br' },
					{ name: 'Russian - Russia (ru-ru)', value: 'ru-ru' },
					{ name: 'Spanish - Argentina (es-ar)', value: 'es-ar' },
					{ name: 'Spanish - Chile (es-cl)', value: 'es-cl' },
					{ name: 'Spanish - Mexico (es-mx)', value: 'es-mx' },
					{ name: 'Spanish - Spain (es-es)', value: 'es-es' },
					{ name: 'Spanish - United States (es-us)', value: 'es-us' },
					{ name: 'Swedish - Sweden (sv-se)', value: 'sv-se' },
					{ name: 'Traditional Chinese - Hong Kong (zh-hk)', value: 'zh-hk' },
					{ name: 'Traditional Chinese - Taiwan (zh-tw)', value: 'zh-tw' },
					{ name: 'Turkish - Turkey (tr-tr)', value: 'tr-tr' },
				],
			},
			{
				displayName: 'Country (cc)',
				name: 'ccm',
				description:
					'Parameter defines the country to search from. It follows the 2-character ISO_3166-1 format. (e.g., us for United States, de for Germany, gb for United Kingdom, etc.).',
				default: 'US',
				routing: {
					request: {
						qs: {
							cc: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{ name: 'Argentina (AR)', value: 'AR' },
					{ name: 'Australia (AU)', value: 'AU' },
					{ name: 'Austria (AT)', value: 'AT' },
					{ name: 'Belgium (BE)', value: 'BE' },
					{ name: 'Brazil (BR)', value: 'BR' },
					{ name: 'Canada (CA)', value: 'CA' },
					{ name: 'Chile (CL)', value: 'CL' },
					{ name: 'Denmark (DK)', value: 'DK' },
					{ name: 'Finland (FI)', value: 'FI' },
					{ name: 'France (FR)', value: 'FR' },
					{ name: 'Germany (DE)', value: 'DE' },
					{ name: 'Hong Kong SAR (HK)', value: 'HK' },
					{ name: 'India (IN)', value: 'IN' },
					{ name: 'Indonesia (ID)', value: 'ID' },
					{ name: 'Italy (IT)', value: 'IT' },
					{ name: 'Japan (JP)', value: 'JP' },
					{ name: 'Korea (KR)', value: 'KR' },
					{ name: 'Malaysia (MY)', value: 'MY' },
					{ name: 'Mexico (MX)', value: 'MX' },
					{ name: 'Netherlands (NL)', value: 'NL' },
					{ name: 'New Zealand (NZ)', value: 'NZ' },
					{ name: 'Norway (NO)', value: 'NO' },
					{ name: "People's Republic of China (CN)", value: 'CN' },
					{ name: 'Poland (PL)', value: 'PL' },
					{ name: 'Portugal (PT)', value: 'PT' },
					{ name: 'Republic of the Philippines (PH)', value: 'PH' },
					{ name: 'Russia (RU)', value: 'RU' },
					{ name: 'Saudi Arabia (SA)', value: 'SA' },
					{ name: 'South Africa (ZA)', value: 'ZA' },
					{ name: 'Spain (ES)', value: 'ES' },
					{ name: 'Sweden (SE)', value: 'SE' },
					{ name: 'Switzerland (CH)', value: 'CH' },
					{ name: 'Taiwan (TW)', value: 'TW' },
					{ name: 'Turkey (TR)', value: 'TR' },
					{ name: 'United Kingdom (GB)', value: 'GB' },
					{ name: 'United States (US)', value: 'US' },
				],
			},
			{
				displayName: 'Result Offset (first)',
				name: 'first',
				description:
					'Parameter controls the offset of the organic results. This parameter defaults to 1. (e.g., first=10 will move the 10th organic result to the first position).',
				default: '',
				routing: {
					request: {
						qs: {
							first: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Number of Results (count)',
				name: 'count',
				description:
					'Parameter controls the number of results per page. Minimum: 1, Maximum: 50. This parameter is only a suggestion and might not reflect actual results returned.',
				default: '',
				routing: {
					request: {
						qs: {
							count: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Adult Content Filtering (safeSearch)',
				name: 'safeSearch',
				description:
					'Parameter defines the level of filtering for adult content',
				default: 'moderate',
				routing: {
					request: {
						qs: {
							safeSearch: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Off',
						value: 'off',
					},
					{
						name: 'Moderate',
						value: 'moderate',
					},
					{
						name: 'Strict',
						value: 'strict',
					},
				],
			},
			{
				displayName: 'Additional Filtering (filters)',
				name: 'filters',
				description:
					'Parameter allows usage of a more complex filtering options such as filtering by date range. Exact values can be constructed by using Bing search and copying filters query parameter.',
				default: '',
				routing: {
					request: {
						qs: {
							filters: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Device (device)',
				name: 'device',
				description:
					'Parameter defines the device to use to get the results. It can be set to desktop (default), tablet, or mobile.',
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
