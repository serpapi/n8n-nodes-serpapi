/* eslint-disable n8n-nodes-base/node-param-description-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const bingImagesFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the search query. You can use anything that you would use in a regular Bing Images search.',
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
				resource: ['bing_images'],
			},
		},
	},
	{
		displayName: '`mkt` Market codes',
		name: 'mkt',
		description:
			'The market where the results come from (e.g. en-US). Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing Images API delivers results. NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. This parameter and the cc query parameter are mutually exclusive—do not specify both.',
		default: 'en-us',
		routing: {
			request: {
				qs: {
					mkt: '={{$value}}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['bing_images'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'es-ar - Spanish',
				value: 'es-ar',
			},
			{
				name: 'en-au - English',
				value: 'en-au',
			},
			{
				name: 'de-at - German',
				value: 'de-at',
			},
			{
				name: 'nl-be - Dutch',
				value: 'nl-be',
			},
			{
				name: 'fr-be - French',
				value: 'fr-be',
			},
			{
				name: 'pt-br - Portuguese',
				value: 'pt-br',
			},
			{
				name: 'en-ca - English',
				value: 'en-ca',
			},
			{
				name: 'fr-ca - French',
				value: 'fr-ca',
			},
			{
				name: 'es-cl - Spanish',
				value: 'es-cl',
			},
			{
				name: 'da-dk - Danish',
				value: 'da-dk',
			},
			{
				name: 'fi-fi - Finnish',
				value: 'fi-fi',
			},
			{
				name: 'fr-fr - French',
				value: 'fr-fr',
			},
			{
				name: 'de-de - German',
				value: 'de-de',
			},
			{
				name: 'zh-hk - Traditional Chinese',
				value: 'zh-hk',
			},
			{
				name: 'en-in - English',
				value: 'en-in',
			},
			{
				name: 'en-id - English',
				value: 'en-id',
			},
			{
				name: 'it-it - Italian',
				value: 'it-it',
			},
			{
				name: 'ja-jp - Japanese',
				value: 'ja-jp',
			},
			{
				name: 'ko-kr - Korean',
				value: 'ko-kr',
			},
			{
				name: 'en-my - English',
				value: 'en-my',
			},
			{
				name: 'es-mx - Spanish',
				value: 'es-mx',
			},
			{
				name: 'nl-nl - Dutch',
				value: 'nl-nl',
			},
			{
				name: 'en-nz - English',
				value: 'en-nz',
			},
			{
				name: 'no-no - Norwegian',
				value: 'no-no',
			},
			{
				name: 'zh-cn - Chinese',
				value: 'zh-cn',
			},
			{
				name: 'pl-pl - Polish',
				value: 'pl-pl',
			},
			{
				name: 'en-ph - English',
				value: 'en-ph',
			},
			{
				name: 'ru-ru - Russian',
				value: 'ru-ru',
			},
			{
				name: 'en-za - English',
				value: 'en-za',
			},
			{
				name: 'es-es - Spanish',
				value: 'es-es',
			},
			{
				name: 'sv-se - Swedish',
				value: 'sv-se',
			},
			{
				name: 'fr-ch - French',
				value: 'fr-ch',
			},
			{
				name: 'de-ch - German',
				value: 'de-ch',
			},
			{
				name: 'zh-tw - Traditional Chinese',
				value: 'zh-tw',
			},
			{
				name: 'tr-tr - Turkish',
				value: 'tr-tr',
			},
			{
				name: 'en-gb - English',
				value: 'en-gb',
			},
			{
				name: 'en-us - English',
				value: 'en-us',
			},
			{
				name: 'es-us - Spanish',
				value: 'es-us',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['bing_images'],
			},
		},
		options: [
			{
				displayName: '`cc` Country',
				name: 'cc',
				description:
					'Parameter defines the country to search from. This parameter and the mkt query parameter are mutually exclusive—do not specify both.',
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
					{
						name: 'AR - Argentina',
						value: 'AR',
					},
					{
						name: 'AU - Australia',
						value: 'AU',
					},
					{
						name: 'AT - Austria',
						value: 'AT',
					},
					{
						name: 'BE - Belgium',
						value: 'BE',
					},
					{
						name: 'BR - Brazil',
						value: 'BR',
					},
					{
						name: 'CA - Canada',
						value: 'CA',
					},
					{
						name: 'CL - Chile',
						value: 'CL',
					},
					{
						name: 'DK - Denmark',
						value: 'DK',
					},
					{
						name: 'FI - Finland',
						value: 'FI',
					},
					{
						name: 'FR - France',
						value: 'FR',
					},
					{
						name: 'DE - Germany',
						value: 'DE',
					},
					{
						name: 'HK - Hong Kong SAR',
						value: 'HK',
					},
					{
						name: 'IN - India',
						value: 'IN',
					},
					{
						name: 'ID - Indonesia',
						value: 'ID',
					},
					{
						name: 'IT - Italy',
						value: 'IT',
					},
					{
						name: 'JP - Japan',
						value: 'JP',
					},
					{
						name: 'KR - Korea',
						value: 'KR',
					},
					{
						name: 'MY - Malaysia',
						value: 'MY',
					},
					{
						name: 'MX - Mexico',
						value: 'MX',
					},
					{
						name: 'NL - Netherlands',
						value: 'NL',
					},
					{
						name: 'NZ - New Zealand',
						value: 'NZ',
					},
					{
						name: 'NO - Norway',
						value: 'NO',
					},
					{
						name: "CN - People's Republic of China",
						value: 'CN',
					},
					{
						name: 'PL - Poland',
						value: 'PL',
					},
					{
						name: 'PT - Portugal',
						value: 'PT',
					},
					{
						name: 'PH - Republic of the Philippines',
						value: 'PH',
					},
					{
						name: 'RU - Russia',
						value: 'RU',
					},
					{
						name: 'SA - Saudi Arabia',
						value: 'SA',
					},
					{
						name: 'ZA - South Africa',
						value: 'ZA',
					},
					{
						name: 'ES - Spain',
						value: 'ES',
					},
					{
						name: 'SE - Sweden',
						value: 'SE',
					},
					{
						name: 'CH - Switzerland',
						value: 'CH',
					},
					{
						name: 'TW - Taiwan',
						value: 'TW',
					},
					{
						name: 'TR - Turkey',
						value: 'TR',
					},
					{
						name: 'GB - United Kingdom',
						value: 'GB',
					},
					{
						name: 'US - United States',
						value: 'US',
					},
				],
			},
			{
				displayName: '`first` Result Offset',
				name: 'first',
				description:
					'Parameter controls the offset of the organic results. This parameter defaults to 1. (e.g., first=10 will move the 10th organic result to the first position).',
				default: '1',
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
					'Parameter controls the number of results per page. This parameter is only a suggestion and might not reflect the returned results.',
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
				displayName: '`imagesize` Image Size',
				name: 'imagesize',
				description:
					'Parameter is used for filtering images by size. It can be set to: small, medium, large, wallpaper.',
				default: 'medium',
				routing: {
					request: {
						qs: {
							imagesize: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Small',
						value: 'small',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'Large',
						value: 'large',
					},
					{
						name: 'Extra Large',
						value: 'wallpaper',
					},
				],
			},
			{
				displayName: '`color2` Color',
				name: 'color2',
				description:
					'Parameter is used for filtering images by color. It can be set to: Color Only,Black &amp; white, Red, Orange, Yellow, Green, Teal, Blue, Purple, Pink, Brown, Black, Gray, White.',
				default: 'color',
				routing: {
					request: {
						qs: {
							color2: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Color Only',
						value: 'color',
					},
					{
						name: 'Black & white',
						value: 'bw',
					},
					{
						name: 'Red',
						value: 'FGcls_RED',
					},
					{
						name: 'Orange',
						value: 'FGcls_ORGANGE',
					},
					{
						name: 'Yellow',
						value: 'FGcls_YELLOW',
					},
					{
						name: 'Green',
						value: 'FGcls_GREEN',
					},
					{
						name: 'Teal',
						value: 'FGcls_TEAL',
					},
					{
						name: 'Blue',
						value: 'FGcls_BLUE',
					},
					{
						name: 'Purple',
						value: 'FGcls_PURPLE',
					},
					{
						name: 'Pink',
						value: 'FGcls_PINK',
					},
					{
						name: 'Brown',
						value: 'FGcls_BROWN',
					},
					{
						name: 'Black',
						value: 'FGcls_BLACK',
					},
					{
						name: 'Gray',
						value: 'FGcls_GRAY',
					},
					{
						name: 'White',
						value: 'FGcls_WHITE',
					},
				],
			},
			{
				displayName: '`photo` Type',
				name: 'photo',
				description:
					'Parameter is used for filtering images by image type. It can be set to: Photo, Clipart, Line Drawing, Animated GIF, Transparent.',
				default: 'photo',
				routing: {
					request: {
						qs: {
							photo: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Photo',
						value: 'photo',
					},
					{
						name: 'Clipart',
						value: 'clipart',
					},
					{
						name: 'Line Drawing',
						value: 'linedrawing',
					},
					{
						name: 'Animated GIF',
						value: 'animatedgif',
					},
					{
						name: 'Transparent',
						value: 'transparent',
					},
				],
			},
			{
				displayName: '`aspect` Layout',
				name: 'aspect',
				description:
					'Parameter is used for filtering images by layout. It can be set to: Square, Wide, Tall.',
				default: 'wide',
				routing: {
					request: {
						qs: {
							aspect: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Square',
						value: 'square',
					},
					{
						name: 'Wide',
						value: 'wide',
					},
					{
						name: 'Tall',
						value: 'tall',
					},
				],
			},
			{
				displayName: '`face` People',
				name: 'face',
				description:
					'Parameter is used for filtering images by people. It can be set to: Faces Only, Head &amp; Shoulders.',
				default: 'portrait',
				routing: {
					request: {
						qs: {
							face: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Faces Only',
						value: 'face',
					},
					{
						name: 'Head & Shoulders',
						value: 'portrait',
					},
				],
			},
			{
				displayName: '`age` Date',
				name: 'age',
				description:
					'Parameter is used for filtering images by date. It can be set to: Past 24, Past week, Past month, Past year.',
				default: 'lt1440',
				routing: {
					request: {
						qs: {
							age: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Past 24 hours',
						value: 'lt1440',
					},
					{
						name: 'Past week',
						value: 'lt10080',
					},
					{
						name: 'Past month',
						value: 'lt43200',
					},
					{
						name: 'Past year',
						value: 'lt525600',
					},
				],
			},
			{
				displayName: '`license` License',
				name: 'license',
				description:
					'Parameter is used for filtering images by license. It can be set to: All Creative Commons, Free to share and use, Free to share and use commercially, Free to modify share and use, Free to modify share and use commercially.',
				default: 'Type-Any',
				routing: {
					request: {
						qs: {
							license: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'All Creative Commons',
						value: 'Type-Any',
					},
					{
						name: 'Public Domain',
						value: 'L1',
					},
					{
						name: 'Free to share and use',
						value: 'L2_L3_L4_L5_L6_L7',
					},
					{
						name: 'Free to share and use commercially',
						value: 'L2_L3_L4',
					},
					{
						name: 'Free to modify, share and use',
						value: 'L2_L3_L5_L6',
					},
					{
						name: 'Free to modify, share, and use commercially',
						value: 'L2_L3',
					},
				],
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
