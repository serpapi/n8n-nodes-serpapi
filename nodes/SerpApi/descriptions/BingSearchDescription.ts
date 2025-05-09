import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const bingSearchFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
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
				displayName: '`lat` Latitude',
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
				displayName: '`lon` Longitude',
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
				displayName: '`mkt` Market codes',
				name: 'mkt',
				description:
					'The market where the results come from (e.g. en-US). Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form &lt;language code&gt;-&lt;country code&gt;. For example, en-US. The string is case insensitive. For a list of possible market values, see Market Codes. NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in Market Codes, Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the cc query parameter are mutually exclusive—do not specify both.',
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
				displayName: '`cc` Country',
				name: 'cc',
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
					{ name: 'AR - Argentina', value: 'AR' },
					{ name: 'AT - Austria', value: 'AT' },
					{ name: 'AU - Australia', value: 'AU' },
					{ name: 'BE - Belgium', value: 'BE' },
					{ name: 'BR - Brazil', value: 'BR' },
					{ name: 'CA - Canada', value: 'CA' },
					{ name: 'CH - Switzerland', value: 'CH' },
					{ name: 'CL - Chile', value: 'CL' },
					{ name: "CN - People's Republic of China", value: 'CN' },
					{ name: 'DE - Germany', value: 'DE' },
					{ name: 'DK - Denmark', value: 'DK' },
					{ name: 'ES - Spain', value: 'ES' },
					{ name: 'FI - Finland', value: 'FI' },
					{ name: 'FR - France', value: 'FR' },
					{ name: 'GB - United Kingdom', value: 'GB' },
					{ name: 'HK - Hong Kong SAR', value: 'HK' },
					{ name: 'ID - Indonesia', value: 'ID' },
					{ name: 'IN - India', value: 'IN' },
					{ name: 'IT - Italy', value: 'IT' },
					{ name: 'JP - Japan', value: 'JP' },
					{ name: 'KR - Korea', value: 'KR' },
					{ name: 'MX - Mexico', value: 'MX' },
					{ name: 'MY - Malaysia', value: 'MY' },
					{ name: 'NL - Netherlands', value: 'NL' },
					{ name: 'NO - Norway', value: 'NO' },
					{ name: 'NZ - New Zealand', value: 'NZ' },
					{ name: 'PH - Republic of the Philippines', value: 'PH' },
					{ name: 'PL - Poland', value: 'PL' },
					{ name: 'PT - Portugal', value: 'PT' },
					{ name: 'RU - Russia', value: 'RU' },
					{ name: 'SA - Saudi Arabia', value: 'SA' },
					{ name: 'SE - Sweden', value: 'SE' },
					{ name: 'TR - Turkey', value: 'TR' },
					{ name: 'TW - Taiwan', value: 'TW' },
					{ name: 'US - United States', value: 'US' },
					{ name: 'ZA - South Africa', value: 'ZA' },
				],
			},
			{
				displayName: '`first` Result Offset',
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
				displayName: '`count` Number of Results',
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
				displayName: '`safeSearch` Adult Content Filtering',
				name: 'safeSearch',
				description:
					'Parameter defines the level of filtering for adult content. It can be set to: Off to return webpages with adult text, images, or videos. Moderate to return webpages with adult text, but not adult images or videos. Strict to not return webpages with adult text, images, or videos.',
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
				displayName: '`filters` Additional Filtering',
				name: 'filters',
				description:
					'Parameter allows usage of a more complex filtering options such as filtering by date range ex1:"ez5_18169_18230" or using a specific display filters such as ufn:"Wunderman+Thompson"+sid:"5bede9a2-1bda-9887-e6eb-30b1b8b6b513"+catguid:"5bede9a2-1bda-9887-e6eb-30b1b8b6b513_cfb02057"+segment:"generic.carousel"+entitysegment:"Organization". Exact values can be constructed by using Bing search and copying filters query parameter.',
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
				displayName: '`device` Device',
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
