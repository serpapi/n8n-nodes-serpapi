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
					{ name: 'da-dk - Danish', value: 'da-dk' },
					{ name: 'de-at - German', value: 'de-at' },
					{ name: 'de-ch - German', value: 'de-ch' },
					{ name: 'de-de - German', value: 'de-de' },
					{ name: 'en-au - English', value: 'en-au' },
					{ name: 'en-ca - English', value: 'en-ca' },
					{ name: 'en-gb - English', value: 'en-gb' },
					{ name: 'en-id - English', value: 'en-id' },
					{ name: 'en-in - English', value: 'en-in' },
					{ name: 'en-my - English', value: 'en-my' },
					{ name: 'en-nz - English', value: 'en-nz' },
					{ name: 'en-ph - English', value: 'en-ph' },
					{ name: 'en-us - English', value: 'en-us' },
					{ name: 'en-za - English', value: 'en-za' },
					{ name: 'es-ar - Spanish', value: 'es-ar' },
					{ name: 'es-cl - Spanish', value: 'es-cl' },
					{ name: 'es-es - Spanish', value: 'es-es' },
					{ name: 'es-mx - Spanish', value: 'es-mx' },
					{ name: 'es-us - Spanish', value: 'es-us' },
					{ name: 'fi-fi - Finnish', value: 'fi-fi' },
					{ name: 'fr-be - French', value: 'fr-be' },
					{ name: 'fr-ca - French', value: 'fr-ca' },
					{ name: 'fr-ch - French', value: 'fr-ch' },
					{ name: 'fr-fr - French', value: 'fr-fr' },
					{ name: 'it-it - Italian', value: 'it-it' },
					{ name: 'ja-jp - Japanese', value: 'ja-jp' },
					{ name: 'ko-kr - Korean', value: 'ko-kr' },
					{ name: 'nl-be - Dutch', value: 'nl-be' },
					{ name: 'nl-nl - Dutch', value: 'nl-nl' },
					{ name: 'no-no - Norwegian', value: 'no-no' },
					{ name: 'pl-pl - Polish', value: 'pl-pl' },
					{ name: 'pt-br - Portuguese', value: 'pt-br' },
					{ name: 'ru-ru - Russian', value: 'ru-ru' },
					{ name: 'sv-se - Swedish', value: 'sv-se' },
					{ name: 'tr-tr - Turkish', value: 'tr-tr' },
					{ name: 'zh-cn - Chinese', value: 'zh-cn' },
					{ name: 'zh-hk - Traditional Chinese', value: 'zh-hk' },
					{ name: 'zh-tw - Traditional Chinese', value: 'zh-tw' },
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
					'Parameter defines the level of filtering for adult content. It can be set to: Off, Moderate (default), or Strict.',
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
