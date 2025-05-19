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
				operation: ['bing_images'],
			},
		},
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
		displayOptions: {
			show: {
				operation: ['bing_images'],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['bing_images'],
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
