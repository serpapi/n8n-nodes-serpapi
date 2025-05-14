import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const ebaySearchFields: INodeProperties[] = [
	{
		displayName: 'Search Query (_nkw)',
		name: '_nkw',
		description:
			'Parameter defines the search query. You can use anything that you would use in a regular Ebay search._nkw parameter is optional when category_id parameter is specified.',
		default: 'coffee',
		routing: {
			request: {
				qs: {
					_nkw: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['ebay'],
			},
		},
	},
	{
		displayName: 'Domain (ebay_domain)',
		name: 'ebay_domain',
		description:
			'Parameter defines the Ebay domain to use. It defaults to ebay.com. Head to the Ebay domains for a full list of supported Ebay domains.',
		default: 'ebay.com',
		routing: {
			request: {
				qs: {
					ebay_domain: '={{$value}}',
				},
			},
		},
		type: 'options',
		displayOptions: {
			show: {
				resource: ['ebay'],
			},
		},
		options: [
			{
				name: 'Australia',
				value: 'ebay.com.au',
			},
			{
				name: 'Austria',
				value: 'ebay.at',
			},
			{
				name: 'Canada',
				value: 'ebay.ca',
			},
			{
				name: 'France',
				value: 'ebay.fr',
			},
			{
				name: 'Germany',
				value: 'ebay.de',
			},
			{
				name: 'Hong Kong',
				value: 'ebay.com.hk',
			},
			{
				name: 'Ireland',
				value: 'ebay.ie',
			},
			{
				name: 'Italy',
				value: 'ebay.it',
			},
			{
				name: 'Malaysia',
				value: 'ebay.com.my',
			},
			{
				name: 'Netherlands',
				value: 'ebay.nl',
			},
			{
				name: 'Philippines',
				value: 'ebay.ph',
			},
			{
				name: 'Poland',
				value: 'ebay.pl',
			},
			{
				name: 'Singapore',
				value: 'ebay.com.sg',
			},
			{
				name: 'Spain',
				value: 'ebay.es',
			},
			{
				name: 'Switzerland',
				value: 'ebay.ch',
			},
			{
				name: 'United Kingdom',
				value: 'ebay.co.uk',
			},
			{
				name: 'United States',
				value: 'ebay.com',
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
				resource: ['ebay'],
			},
		},
		options: [
			{
				displayName: 'Location (_salic)',
				name: '_salic',
				description:
					'Parameter defines the location based on country. Head to the Ebay location options for a full list of supported countries.',
				default: '1',
				routing: {
					request: {
						qs: {
							_salic: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'United States',
						value: '1',
					},
					{
						name: 'Canada',
						value: '2',
					},
					{
						name: 'United Kingdom',
						value: '3',
					},
					{
						name: 'Afghanistan',
						value: '4',
					},
					{
						name: 'Albania',
						value: '5',
					},
					{
						name: 'Algeria',
						value: '6',
					},
					{
						name: 'American Samoa',
						value: '7',
					},
					{
						name: 'Andorra',
						value: '8',
					},
					{
						name: 'Angola',
						value: '9',
					},
					{
						name: 'Anguilla',
						value: '10',
					},
					{
						name: 'Antigua and Barbuda',
						value: '11',
					},
					{
						name: 'Argentina',
						value: '12',
					},
					{
						name: 'Armenia',
						value: '13',
					},
					{
						name: 'Aruba',
						value: '14',
					},
					{
						name: 'Australia',
						value: '15',
					},
					{
						name: 'Austria',
						value: '16',
					},
					{
						name: 'Azerbaijan Republic',
						value: '17',
					},
					{
						name: 'Bahamas',
						value: '18',
					},
					{
						name: 'Bahrain',
						value: '19',
					},
					{
						name: 'Bangladesh',
						value: '20',
					},
					{
						name: 'Barbados',
						value: '21',
					},
					{
						name: 'Belarus',
						value: '22',
					},
					{
						name: 'Belgium',
						value: '23',
					},
					{
						name: 'Belize',
						value: '24',
					},
					{
						name: 'Benin',
						value: '25',
					},
					{
						name: 'Bermuda',
						value: '26',
					},
					{
						name: 'Bhutan',
						value: '27',
					},
					{
						name: 'Bolivia',
						value: '28',
					},
					{
						name: 'Bosnia and Herzegovina',
						value: '29',
					},
					{
						name: 'Botswana',
						value: '30',
					},
					{
						name: 'Brazil',
						value: '31',
					},
					{
						name: 'British Virgin Islands',
						value: '32',
					},
					{
						name: 'Brunei Darussalam',
						value: '33',
					},
					{
						name: 'Bulgaria',
						value: '34',
					},
					{
						name: 'Burkina Faso',
						value: '35',
					},
					{
						name: 'Burma',
						value: '36',
					},
					{
						name: 'Burundi',
						value: '37',
					},
					{
						name: 'Cambodia',
						value: '38',
					},
					{
						name: 'Cameroon',
						value: '39',
					},
					{
						name: 'Cape Verde Islands',
						value: '40',
					},
					{
						name: 'Cayman Islands',
						value: '41',
					},
					{
						name: 'Central African Republic',
						value: '42',
					},
					{
						name: 'Chad',
						value: '43',
					},
					{
						name: 'Chile',
						value: '44',
					},
					{
						name: 'China',
						value: '45',
					},
					{
						name: 'Colombia',
						value: '46',
					},
					{
						name: 'Comoros',
						value: '47',
					},
					{
						name: 'Congo, Democratic Republic of the',
						value: '48',
					},
					{
						name: 'Congo, Republic of the',
						value: '49',
					},
					{
						name: 'Cook Islands',
						value: '50',
					},
					{
						name: 'Costa Rica',
						value: '51',
					},
					{
						name: 'Cote d Ivoire (Ivory Coast)',
						value: '52',
					},
					{
						name: 'Croatia, Republic of',
						value: '53',
					},
					{
						name: 'Cyprus',
						value: '55',
					},
					{
						name: 'Czech Republic',
						value: '56',
					},
					{
						name: 'Denmark',
						value: '57',
					},
					{
						name: 'Djibouti',
						value: '58',
					},
					{
						name: 'Dominica',
						value: '59',
					},
					{
						name: 'Dominican Republic',
						value: '60',
					},
					{
						name: 'Ecuador',
						value: '61',
					},
					{
						name: 'Egypt',
						value: '62',
					},
					{
						name: 'El Salvador',
						value: '63',
					},
					{
						name: 'Equatorial Guinea',
						value: '64',
					},
					{
						name: 'Eritrea',
						value: '65',
					},
					{
						name: 'Estonia',
						value: '66',
					},
					{
						name: 'Ethiopia',
						value: '67',
					},
					{
						name: 'Falkland Islands (Islas Malvinas)',
						value: '68',
					},
					{
						name: 'Fiji',
						value: '69',
					},
					{
						name: 'Finland',
						value: '70',
					},
					{
						name: 'France',
						value: '71',
					},
					{
						name: 'French Guiana',
						value: '72',
					},
					{
						name: 'French Polynesia',
						value: '73',
					},
					{
						name: 'Gabon Republic',
						value: '74',
					},
					{
						name: 'Gambia',
						value: '75',
					},
					{
						name: 'Georgia',
						value: '76',
					},
					{
						name: 'Germany',
						value: '77',
					},
					{
						name: 'Ghana',
						value: '78',
					},
					{
						name: 'Gibraltar',
						value: '79',
					},
					{
						name: 'Greece',
						value: '80',
					},
					{
						name: 'Greenland',
						value: '81',
					},
					{
						name: 'Grenada',
						value: '82',
					},
					{
						name: 'Guadeloupe',
						value: '83',
					},
					{
						name: 'Guam',
						value: '84',
					},
					{
						name: 'Guatemala',
						value: '85',
					},
					{
						name: 'Guernsey',
						value: '86',
					},
					{
						name: 'Guinea',
						value: '87',
					},
					{
						name: 'Guinea-Bissau',
						value: '88',
					},
					{
						name: 'Guyana',
						value: '89',
					},
					{
						name: 'Haiti',
						value: '90',
					},
					{
						name: 'Honduras',
						value: '91',
					},
					{
						name: 'Hong Kong',
						value: '92',
					},
					{
						name: 'Hungary',
						value: '93',
					},
					{
						name: 'Iceland',
						value: '94',
					},
					{
						name: 'India',
						value: '95',
					},
					{
						name: 'Indonesia',
						value: '96',
					},
					{
						name: 'Ireland',
						value: '99',
					},
					{
						name: 'Israel',
						value: '100',
					},
					{
						name: 'Italy',
						value: '101',
					},
					{
						name: 'Jamaica',
						value: '102',
					},
					{
						name: 'Japan',
						value: '104',
					},
					{
						name: 'Jersey',
						value: '105',
					},
					{
						name: 'Jordan',
						value: '106',
					},
					{
						name: 'Kazakhstan',
						value: '107',
					},
					{
						name: 'Kenya',
						value: '108',
					},
					{
						name: 'Kiribati',
						value: '109',
					},
					{
						name: 'South Korea',
						value: '111',
					},
					{
						name: 'Kuwait',
						value: '112',
					},
					{
						name: 'Kyrgyzstan',
						value: '113',
					},
					{
						name: 'Laos',
						value: '114',
					},
					{
						name: 'Latvia',
						value: '115',
					},
					{
						name: 'Lebanon',
						value: '116',
					},
					{
						name: 'Liechtenstein',
						value: '120',
					},
					{
						name: 'Lithuania',
						value: '121',
					},
					{
						name: 'Luxembourg',
						value: '122',
					},
					{
						name: 'Macau',
						value: '123',
					},
					{
						name: 'Macedonia',
						value: '124',
					},
					{
						name: 'Madagascar',
						value: '125',
					},
					{
						name: 'Malawi',
						value: '126',
					},
					{
						name: 'Malaysia',
						value: '127',
					},
					{
						name: 'Maldives',
						value: '128',
					},
					{
						name: 'Mali',
						value: '129',
					},
					{
						name: 'Malta',
						value: '130',
					},
					{
						name: 'Marshall Islands',
						value: '131',
					},
					{
						name: 'Martinique',
						value: '132',
					},
					{
						name: 'Mauritania',
						value: '133',
					},
					{
						name: 'Mauritius',
						value: '134',
					},
					{
						name: 'Mayotte',
						value: '135',
					},
					{
						name: 'Mexico',
						value: '136',
					},
					{
						name: 'Moldova',
						value: '137',
					},
					{
						name: 'Monaco',
						value: '138',
					},
					{
						name: 'Mongolia',
						value: '139',
					},
					{
						name: 'Montserrat',
						value: '140',
					},
					{
						name: 'Morocco',
						value: '141',
					},
					{
						name: 'Mozambique',
						value: '142',
					},
					{
						name: 'Namibia',
						value: '143',
					},
					{
						name: 'Nauru',
						value: '144',
					},
					{
						name: 'Nepal',
						value: '145',
					},
					{
						name: 'Netherlands',
						value: '146',
					},
					{
						name: 'Netherlands Antilles',
						value: '147',
					},
					{
						name: 'New Caledonia',
						value: '148',
					},
					{
						name: 'New Zealand',
						value: '149',
					},
					{
						name: 'Nicaragua',
						value: '150',
					},
					{
						name: 'Niger',
						value: '151',
					},
					{
						name: 'Nigeria',
						value: '152',
					},
					{
						name: 'Niue',
						value: '153',
					},
					{
						name: 'Norway',
						value: '154',
					},
					{
						name: 'Oman',
						value: '155',
					},
					{
						name: 'Pakistan',
						value: '156',
					},
					{
						name: 'Palau',
						value: '157',
					},
					{
						name: 'Panama',
						value: '158',
					},
					{
						name: 'Papua New Guinea',
						value: '159',
					},
					{
						name: 'Paraguay',
						value: '160',
					},
					{
						name: 'Peru',
						value: '161',
					},
					{
						name: 'Philippines',
						value: '162',
					},
					{
						name: 'Poland',
						value: '163',
					},
					{
						name: 'Portugal',
						value: '164',
					},
					{
						name: 'Puerto Rico',
						value: '165',
					},
					{
						name: 'Qatar',
						value: '166',
					},
					{
						name: 'Romania',
						value: '167',
					},
					{
						name: 'Russian Federation',
						value: '168',
					},
					{
						name: 'Rwanda',
						value: '169',
					},
					{
						name: 'Saint Helena',
						value: '170',
					},
					{
						name: 'Saint Kitts-Nevis',
						value: '171',
					},
					{
						name: 'Saint Lucia',
						value: '172',
					},
					{
						name: 'Saint Pierre and Miquelon',
						value: '173',
					},
					{
						name: 'Saint Vincent and the Grenadines',
						value: '174',
					},
					{
						name: 'San Marino',
						value: '175',
					},
					{
						name: 'Saudi Arabia',
						value: '176',
					},
					{
						name: 'Senegal',
						value: '177',
					},
					{
						name: 'Seychelles',
						value: '178',
					},
					{
						name: 'Sierra Leone',
						value: '179',
					},
					{
						name: 'Singapore',
						value: '180',
					},
					{
						name: 'Slovakia',
						value: '181',
					},
					{
						name: 'Slovenia',
						value: '182',
					},
					{
						name: 'Solomon Islands',
						value: '183',
					},
					{
						name: 'Somalia',
						value: '184',
					},
					{
						name: 'South Africa',
						value: '185',
					},
					{
						name: 'Spain',
						value: '186',
					},
					{
						name: 'Sri Lanka',
						value: '187',
					},
					{
						name: 'Suriname',
						value: '189',
					},
					{
						name: 'Swaziland',
						value: '191',
					},
					{
						name: 'Sweden',
						value: '192',
					},
					{
						name: 'Switzerland',
						value: '193',
					},
					{
						name: 'Taiwan',
						value: '196',
					},
					{
						name: 'Tajikistan',
						value: '197',
					},
					{
						name: 'Tanzania',
						value: '198',
					},
					{
						name: 'Thailand',
						value: '199',
					},
					{
						name: 'Togo',
						value: '200',
					},
					{
						name: 'Tonga',
						value: '201',
					},
					{
						name: 'Trinidad and Tobago',
						value: '202',
					},
					{
						name: 'Tunisia',
						value: '203',
					},
					{
						name: 'Turkey',
						value: '204',
					},
					{
						name: 'Turkmenistan',
						value: '205',
					},
					{
						name: 'Turks and Caicos Islands',
						value: '206',
					},
					{
						name: 'Tuvalu',
						value: '207',
					},
					{
						name: 'Uganda',
						value: '208',
					},
					{
						name: 'Ukraine',
						value: '209',
					},
					{
						name: 'United Arab Emirates',
						value: '210',
					},
					{
						name: 'Uruguay',
						value: '211',
					},
					{
						name: 'Uzbekistan',
						value: '212',
					},
					{
						name: 'Vanuatu',
						value: '213',
					},
					{
						name: 'Vatican City State',
						value: '214',
					},
					{
						name: 'Venezuela',
						value: '215',
					},
					{
						name: 'Vietnam',
						value: '216',
					},
					{
						name: 'Virgin Islands (U.S)',
						value: '217',
					},
					{
						name: 'Wallis and Futuna',
						value: '218',
					},
					{
						name: 'Western Sahara',
						value: '219',
					},
					{
						name: 'Western Samoa',
						value: '220',
					},
					{
						name: 'Yemen',
						value: '221',
					},
					{
						name: 'Micronesia',
						value: '226',
					},
					{
						name: 'Reunion',
						value: '227',
					},
					{
						name: 'Montenegro',
						value: '228',
					},
					{
						name: 'Serbia',
						value: '229',
					},
				],
			},
			{
				displayName: 'Page Number (_pgn)',
				name: '_pgn',
				description:
					"Parameter defines the page number. It's used for pagination. (e.g., 1 (default) is the first page of results, 2 is the 2nd page of results, 3 is the 3rd page of results, etc.).",
				default: '',
				routing: {
					request: {
						qs: {
							_pgn: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: 'Number of Results (_ipg)',
				name: '_ipg',
				description:
					'Parameter defines the maximum number of results to return. There are total of four options: 25, 50 (default), 100 and 200 results.',
				default: 50,
				routing: {
					request: {
						qs: {
							_ipg: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: '50 - Items Per Page',
						value: 50,
					},
					{
						name: '25 - Items Per Page',
						value: 25,
					},
					{
						name: '100 - Items Per Page',
						value: 100,
					},
					{
						name: '200 - Items Per Page',
						value: 200,
					},
				],
			},
			{
				displayName: 'Exclude Auto-corrected Results (_blrs)',
				name: '_blrs',
				description:
					'Whether to exclude results from an auto-corrected query when the original query is spelled wrong. The recommended value for this parameter is spell_auto_correct. Omit _blrs if you want the search to include results for an auto-corrected query. Note that this parameter may not prevent eBay from returning results for an auto-corrected query if no other results are available.',
				default: false,
				routing: {
					request: {
						qs: {
							_blrs: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Results filter (show_only)',
				name: 'show_only',
				description:
					'Parameter defines the list of filters you can apply to the results. Available options (case-sensitive): Complete - Completed itemsSold - Sold itemsFR - Free returnsRPA - Returns acceptedAS - Authorized sellerSavings - Deals and savingsSaleItems - Sale itemsLots - Listed as lotsCharity - Benefits charityAV - Authenticity GuaranteeFS - Free shippingLPickup - Local pickup You can also combine multiple filter values by joining them with a comma (value + , + value; eg: Sold,FS).',
				default: '',
				routing: {
					request: {
						qs: {
							show_only: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Buying Format (buying_format)',
				name: 'buying_format',
				description:
					'Parameter defines the buying format you can apply to the results. Available options (case-sensitive): Auction, Buy It Now, Accepts Offers.',
				default: 'Auction',
				routing: {
					request: {
						qs: {
							buying_format: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Auction',
						value: 'Auction',
					},
					{
						name: 'Buy It Now',
						value: 'BIN',
					},
					{
						name: 'Accepts Offers',
						value: 'BO',
					},
				],
			},
			{
				displayName: 'Price Low (_udlo)',
				name: '_udlo',
				description:
					'Parameter defines the lowest price of items that should be included in the results (e.g. 10 will only return items that have higher price than 10)',
				default: '',
				routing: {
					request: {
						qs: {
							_udlo: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: 'Price High (_udhi)',
				name: '_udhi',
				description:
					'Parameter defines the highest price of items that should be included in the results (e.g. 20 will only return items that have lower price than 20)',
				default: '',
				routing: {
					request: {
						qs: {
							_udhi: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: 'Sorting (_sop)',
				name: '_sop',
				description:
					"Parameter defines results sorted by different options in the Ebay. The default option is 'Best Match'. Head to the Ebay sort options for a full list of supported sort options.",
				default: '12',
				routing: {
					request: {
						qs: {
							_sop: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Best Match (default)',
						value: '12',
					},
					{
						name: 'Time: ending soonest',
						value: '1',
					},
					{
						name: 'Time: newly listed',
						value: '10',
					},
					{
						name: 'Price + Shipping: lowest first',
						value: '15',
					},
					{
						name: 'Price + Shipping: highest first',
						value: '16',
					},
					{
						name: 'Distance: nearest first',
						value: '7',
					},
					{
						name: 'Price: highest first',
						value: '3',
					},
					{
						name: 'Price: lowest first',
						value: '2',
					},
					{
						name: 'Condition: new first',
						value: '18',
					},
					{
						name: 'Condition: used first',
						value: '19',
					},
				],
			},
			{
				displayName: 'View Option (_dmd)',
				name: '_dmd',
				description:
					"Parameter defines the visual layout for displaying results. The available options are 'Grid' and 'List'.",
				default: '1',
				routing: {
					request: {
						qs: {
							_dmd: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'List',
						value: '1',
					},
					{
						name: 'Grid',
						value: '2',
					},
				],
			},
			{
				displayName: 'Category ID (category_id)',
				name: 'category_id',
				description:
					'Parameter defines the ID of a category where you want your search to be concentrated. ID values are accessible inside categories array, located in the JSON output (e.g. categories[1].id).You can search using category_id parameter without specifying _nkw parameter.',
				default: '',
				routing: {
					request: {
						qs: {
							category_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'ZIP Code (_stpos)',
				name: '_stpos',
				description:
					'Parameter defines the ZIP or Postal code. You can use it to filter the shipping products by a selected area.',
				default: '',
				routing: {
					request: {
						qs: {
							_stpos: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Condition (LH_ItemCondition)',
				name: 'LH_ItemCondition',
				description:
					'Parameter defines one or multiple product conditions to limit the search to. Condition is represented via numeric ID, e.g. 1000 for New. Multiple IDs should be joined with | delimeter, e.g. 1000|3000. List of supported IDs can be found on eBay documentation page. There is also undocumented ID 10 for Not Specified condition.',
				default: '',
				routing: {
					request: {
						qs: {
							LH_ItemCondition: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
