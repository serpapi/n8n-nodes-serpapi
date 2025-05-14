import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const bingImagesFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
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
		displayName: 'Market codes (mkt)',
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
				displayName: 'Country (cc)',
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
				displayName: 'Result Offset (first)',
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
				displayName: 'Number of Results (count)',
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
				displayName: 'Image Size (imagesize)',
				name: 'imagesize',
				description: 'Parameter is used for filtering images by size',
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
				displayName: 'Color (color2)',
				name: 'color2',
				description: 'Parameter is used for filtering images by color',
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
						name: 'Black',
						value: 'FGcls_BLACK',
					},
					{
						name: 'Black & white',
						value: 'bw',
					},
					{
						name: 'Blue',
						value: 'FGcls_BLUE',
					},
					{
						name: 'Brown',
						value: 'FGcls_BROWN',
					},
					{
						name: 'Color Only',
						value: 'color',
					},
					{
						name: 'Gray',
						value: 'FGcls_GRAY',
					},
					{
						name: 'Green',
						value: 'FGcls_GREEN',
					},
					{
						name: 'Orange',
						value: 'FGcls_ORGANGE',
					},
					{
						name: 'Pink',
						value: 'FGcls_PINK',
					},
					{
						name: 'Purple',
						value: 'FGcls_PURPLE',
					},
					{
						name: 'Red',
						value: 'FGcls_RED',
					},
					{
						name: 'Teal',
						value: 'FGcls_TEAL',
					},
					{
						name: 'White',
						value: 'FGcls_WHITE',
					},
					{
						name: 'Yellow',
						value: 'FGcls_YELLOW',
					},
				],
			},
			{
				displayName: 'Type (photo)',
				name: 'photo',
				description: 'Parameter is used for filtering images by image type',
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
						name: 'Animated GIF',
						value: 'animatedgif',
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
						name: 'Photo',
						value: 'photo',
					},
					{
						name: 'Transparent',
						value: 'transparent',
					},
				],
			},
			{
				displayName: 'Layout (aspect)',
				name: 'aspect',
				description: 'Parameter is used for filtering images by layout',
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
				displayName: 'People (face)',
				name: 'face',
				description: 'Parameter is used for filtering images by people',
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
				displayName: 'Date (age)',
				name: 'age',
				description: 'Parameter is used for filtering images by date',
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
				displayName: 'License (license)',
				name: 'license',
				description: 'Parameter is used for filtering images by license',
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
						name: 'Free to modify, share and use',
						value: 'L2_L3_L5_L6',
					},
					{
						name: 'Free to modify, share, and use commercially',
						value: 'L2_L3',
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
						name: 'Public Domain',
						value: 'L1',
					},
				],
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
