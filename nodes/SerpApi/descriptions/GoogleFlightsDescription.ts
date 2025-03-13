/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleFlightsFields: INodeProperties[] = [
	{
		displayName: '`departure_id` Departure airport code / location kgmid',
		name: 'departure_id',
		description:
			'Parameter defines the departure airport code or location kgmid.An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA.For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX.You can specify multiple departure airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.',
		default: 'AUS',
		routing: {
			request: {
				qs: {
					departure_id: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_flights'],
			},
		},
	},
	{
		displayName: '`arrival_id` Arrival airport code / location kgmid',
		name: 'arrival_id',
		description:
			'Parameter defines the arrival airport code or location kgmid.An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA.For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX.You can specify multiple arrival airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.',
		default: 'CDG',
		routing: {
			request: {
				qs: {
					arrival_id: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_flights'],
			},
		},
	},
	{
		displayName: '`outbound_date` Outbound Date',
		name: 'outbound_date',
		description: 'Parameter defines the outbound date. The format is YYYY-MM-DD. e.g. 2025-03-14',
		default: '',
		routing: {
			request: {
				qs: {
					outbound_date: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_flights'],
			},
		},
	},
	{
		displayName: '`return_date` Return Date',
		name: 'return_date',
		description:
			'Parameter defines the return date. The format is YYYY-MM-DD. e.g. 2025-03-20Parameter is required if type parameter is set to: 1 (Round trip)',
		default: '',
		routing: {
			request: {
				qs: {
					return_date: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_flights'],
			},
		},
	},
	{
		displayName: '`type` Flight Type',
		name: 'type',
		description:
			'Parameter defines the type of the flights.Available options:1 - Round trip (default)2 - One way3 - Multi-cityWhen this parameter is set to 3, use multi_city_json to set the flight information.To obtain the returning flight information for Round Trip (1), you need to make another request using a departure_token',
		default: '1',
		routing: {
			request: {
				qs: {
					type: '={{$value}}',
				},
			},
		},
		type: 'options',
		options: [
			{
				name: 'Round trip (default) - 1',
				value: '1',
			},
			{
				name: 'One way - 2',
				value: '2',
			},
			{
				name: 'Multi-city - 3',
				value: '3',
			},
		],
		displayOptions: {
			show: {
				resource: ['google_flights'],
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
				resource: ['google_flights'],
			},
		},
		options: [
			{
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google Flights search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries page for a full list of supported Google countries.",
				default: 'us',
				routing: {
					request: {
						qs: {
							gl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afghanistan - af',
						value: 'af',
					},
					{
						name: 'Albania - al',
						value: 'al',
					},
					{
						name: 'Algeria - dz',
						value: 'dz',
					},
					{
						name: 'American Samoa - as',
						value: 'as',
					},
					{
						name: 'Andorra - ad',
						value: 'ad',
					},
					{
						name: 'Angola - ao',
						value: 'ao',
					},
					{
						name: 'Anguilla - ai',
						value: 'ai',
					},
					{
						name: 'Antarctica - aq',
						value: 'aq',
					},
					{
						name: 'Antigua and Barbuda - ag',
						value: 'ag',
					},
					{
						name: 'Argentina - ar',
						value: 'ar',
					},
					{
						name: 'Armenia - am',
						value: 'am',
					},
					{
						name: 'Aruba - aw',
						value: 'aw',
					},
					{
						name: 'Australia - au',
						value: 'au',
					},
					{
						name: 'Austria - at',
						value: 'at',
					},
					{
						name: 'Azerbaijan - az',
						value: 'az',
					},
					{
						name: 'Bahamas - bs',
						value: 'bs',
					},
					{
						name: 'Bahrain - bh',
						value: 'bh',
					},
					{
						name: 'Bangladesh - bd',
						value: 'bd',
					},
					{
						name: 'Barbados - bb',
						value: 'bb',
					},
					{
						name: 'Belarus - by',
						value: 'by',
					},
					{
						name: 'Belgium - be',
						value: 'be',
					},
					{
						name: 'Belize - bz',
						value: 'bz',
					},
					{
						name: 'Benin - bj',
						value: 'bj',
					},
					{
						name: 'Bermuda - bm',
						value: 'bm',
					},
					{
						name: 'Bhutan - bt',
						value: 'bt',
					},
					{
						name: 'Bolivia - bo',
						value: 'bo',
					},
					{
						name: 'Bosnia and Herzegovina - ba',
						value: 'ba',
					},
					{
						name: 'Botswana - bw',
						value: 'bw',
					},
					{
						name: 'Bouvet Island - bv',
						value: 'bv',
					},
					{
						name: 'Brazil - br',
						value: 'br',
					},
					{
						name: 'British Indian Ocean Territory - io',
						value: 'io',
					},
					{
						name: 'Brunei Darussalam - bn',
						value: 'bn',
					},
					{
						name: 'Bulgaria - bg',
						value: 'bg',
					},
					{
						name: 'Burkina Faso - bf',
						value: 'bf',
					},
					{
						name: 'Burundi - bi',
						value: 'bi',
					},
					{
						name: 'Cambodia - kh',
						value: 'kh',
					},
					{
						name: 'Cameroon - cm',
						value: 'cm',
					},
					{
						name: 'Canada - ca',
						value: 'ca',
					},
					{
						name: 'Cape Verde - cv',
						value: 'cv',
					},
					{
						name: 'Cayman Islands - ky',
						value: 'ky',
					},
					{
						name: 'Central African Republic - cf',
						value: 'cf',
					},
					{
						name: 'Chad - td',
						value: 'td',
					},
					{
						name: 'Chile - cl',
						value: 'cl',
					},
					{
						name: 'China - cn',
						value: 'cn',
					},
					{
						name: 'Christmas Island - cx',
						value: 'cx',
					},
					{
						name: 'Cocos (Keeling) Islands - cc',
						value: 'cc',
					},
					{
						name: 'Colombia - co',
						value: 'co',
					},
					{
						name: 'Comoros - km',
						value: 'km',
					},
					{
						name: 'Congo - cg',
						value: 'cg',
					},
					{
						name: 'Congo, the Democratic Republic of the - cd',
						value: 'cd',
					},
					{
						name: 'Cook Islands - ck',
						value: 'ck',
					},
					{
						name: 'Costa Rica - cr',
						value: 'cr',
					},
					{
						name: "Cote D'ivoire - ci",
						value: 'ci',
					},
					{
						name: 'Croatia - hr',
						value: 'hr',
					},
					{
						name: 'Cuba - cu',
						value: 'cu',
					},
					{
						name: 'Cyprus - cy',
						value: 'cy',
					},
					{
						name: 'Czech Republic - cz',
						value: 'cz',
					},
					{
						name: 'Denmark - dk',
						value: 'dk',
					},
					{
						name: 'Djibouti - dj',
						value: 'dj',
					},
					{
						name: 'Dominica - dm',
						value: 'dm',
					},
					{
						name: 'Dominican Republic - do',
						value: 'do',
					},
					{
						name: 'Ecuador - ec',
						value: 'ec',
					},
					{
						name: 'Egypt - eg',
						value: 'eg',
					},
					{
						name: 'El Salvador - sv',
						value: 'sv',
					},
					{
						name: 'Equatorial Guinea - gq',
						value: 'gq',
					},
					{
						name: 'Eritrea - er',
						value: 'er',
					},
					{
						name: 'Estonia - ee',
						value: 'ee',
					},
					{
						name: 'Ethiopia - et',
						value: 'et',
					},
					{
						name: 'Falkland Islands (Malvinas) - fk',
						value: 'fk',
					},
					{
						name: 'Faroe Islands - fo',
						value: 'fo',
					},
					{
						name: 'Fiji - fj',
						value: 'fj',
					},
					{
						name: 'Finland - fi',
						value: 'fi',
					},
					{
						name: 'France - fr',
						value: 'fr',
					},
					{
						name: 'French Guiana - gf',
						value: 'gf',
					},
					{
						name: 'French Polynesia - pf',
						value: 'pf',
					},
					{
						name: 'French Southern Territories - tf',
						value: 'tf',
					},
					{
						name: 'Gabon - ga',
						value: 'ga',
					},
					{
						name: 'Gambia - gm',
						value: 'gm',
					},
					{
						name: 'Georgia - ge',
						value: 'ge',
					},
					{
						name: 'Germany - de',
						value: 'de',
					},
					{
						name: 'Ghana - gh',
						value: 'gh',
					},
					{
						name: 'Gibraltar - gi',
						value: 'gi',
					},
					{
						name: 'Greece - gr',
						value: 'gr',
					},
					{
						name: 'Greenland - gl',
						value: 'gl',
					},
					{
						name: 'Grenada - gd',
						value: 'gd',
					},
					{
						name: 'Guadeloupe - gp',
						value: 'gp',
					},
					{
						name: 'Guam - gu',
						value: 'gu',
					},
					{
						name: 'Guatemala - gt',
						value: 'gt',
					},
					{
						name: 'Guernsey - gg',
						value: 'gg',
					},
					{
						name: 'Guinea - gn',
						value: 'gn',
					},
					{
						name: 'Guinea-Bissau - gw',
						value: 'gw',
					},
					{
						name: 'Guyana - gy',
						value: 'gy',
					},
					{
						name: 'Haiti - ht',
						value: 'ht',
					},
					{
						name: 'Heard Island and Mcdonald Islands - hm',
						value: 'hm',
					},
					{
						name: 'Holy See (Vatican City State) - va',
						value: 'va',
					},
					{
						name: 'Honduras - hn',
						value: 'hn',
					},
					{
						name: 'Hong Kong - hk',
						value: 'hk',
					},
					{
						name: 'Hungary - hu',
						value: 'hu',
					},
					{
						name: 'Iceland - is',
						value: 'is',
					},
					{
						name: 'India - in',
						value: 'in',
					},
					{
						name: 'Indonesia - ID',
						value: 'id',
					},
					{
						name: 'Iran, Islamic Republic of - ir',
						value: 'ir',
					},
					{
						name: 'Iraq - iq',
						value: 'iq',
					},
					{
						name: 'Ireland - ie',
						value: 'ie',
					},
					{
						name: 'Isle of Man - im',
						value: 'im',
					},
					{
						name: 'Israel - il',
						value: 'il',
					},
					{
						name: 'Italy - it',
						value: 'it',
					},
					{
						name: 'Jersey - je',
						value: 'je',
					},
					{
						name: 'Jamaica - jm',
						value: 'jm',
					},
					{
						name: 'Japan - jp',
						value: 'jp',
					},
					{
						name: 'Jordan - jo',
						value: 'jo',
					},
					{
						name: 'Kazakhstan - kz',
						value: 'kz',
					},
					{
						name: 'Kenya - ke',
						value: 'ke',
					},
					{
						name: 'Kiribati - ki',
						value: 'ki',
					},
					{
						name: "Korea, Democratic People's Republic of - kp",
						value: 'kp',
					},
					{
						name: 'Korea, Republic of - kr',
						value: 'kr',
					},
					{
						name: 'Kuwait - kw',
						value: 'kw',
					},
					{
						name: 'Kyrgyzstan - kg',
						value: 'kg',
					},
					{
						name: "Lao People's Democratic Republic - la",
						value: 'la',
					},
					{
						name: 'Latvia - lv',
						value: 'lv',
					},
					{
						name: 'Lebanon - lb',
						value: 'lb',
					},
					{
						name: 'Lesotho - ls',
						value: 'ls',
					},
					{
						name: 'Liberia - lr',
						value: 'lr',
					},
					{
						name: 'Libyan Arab Jamahiriya - ly',
						value: 'ly',
					},
					{
						name: 'Liechtenstein - li',
						value: 'li',
					},
					{
						name: 'Lithuania - lt',
						value: 'lt',
					},
					{
						name: 'Luxembourg - lu',
						value: 'lu',
					},
					{
						name: 'Macao - mo',
						value: 'mo',
					},
					{
						name: 'Macedonia, the Former Yugosalv Republic of - mk',
						value: 'mk',
					},
					{
						name: 'Madagascar - mg',
						value: 'mg',
					},
					{
						name: 'Malawi - mw',
						value: 'mw',
					},
					{
						name: 'Malaysia - my',
						value: 'my',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Mali - ml',
						value: 'ml',
					},
					{
						name: 'Malta - mt',
						value: 'mt',
					},
					{
						name: 'Marshall Islands - mh',
						value: 'mh',
					},
					{
						name: 'Martinique - mq',
						value: 'mq',
					},
					{
						name: 'Mauritania - mr',
						value: 'mr',
					},
					{
						name: 'Mauritius - mu',
						value: 'mu',
					},
					{
						name: 'Mayotte - yt',
						value: 'yt',
					},
					{
						name: 'Mexico - mx',
						value: 'mx',
					},
					{
						name: 'Micronesia, Federated States of - fm',
						value: 'fm',
					},
					{
						name: 'Moldova, Republic of - md',
						value: 'md',
					},
					{
						name: 'Monaco - mc',
						value: 'mc',
					},
					{
						name: 'Mongolia - mn',
						value: 'mn',
					},
					{
						name: 'Montenegro - me',
						value: 'me',
					},
					{
						name: 'Montserrat - ms',
						value: 'ms',
					},
					{
						name: 'Morocco - ma',
						value: 'ma',
					},
					{
						name: 'Mozambique - mz',
						value: 'mz',
					},
					{
						name: 'Myanmar - mm',
						value: 'mm',
					},
					{
						name: 'Namibia - na',
						value: 'na',
					},
					{
						name: 'Nauru - nr',
						value: 'nr',
					},
					{
						name: 'Nepal - np',
						value: 'np',
					},
					{
						name: 'Netherlands - nl',
						value: 'nl',
					},
					{
						name: 'Netherlands Antilles - an',
						value: 'an',
					},
					{
						name: 'New Caledonia - nc',
						value: 'nc',
					},
					{
						name: 'New Zealand - nz',
						value: 'nz',
					},
					{
						name: 'Nicaragua - ni',
						value: 'ni',
					},
					{
						name: 'Niger - ne',
						value: 'ne',
					},
					{
						name: 'Nigeria - ng',
						value: 'ng',
					},
					{
						name: 'Niue - nu',
						value: 'nu',
					},
					{
						name: 'Norfolk Island - nf',
						value: 'nf',
					},
					{
						name: 'Northern Mariana Islands - mp',
						value: 'mp',
					},
					{
						name: 'Norway - no',
						value: 'no',
					},
					{
						name: 'Oman - om',
						value: 'om',
					},
					{
						name: 'Pakistan - pk',
						value: 'pk',
					},
					{
						name: 'Palau - pw',
						value: 'pw',
					},
					{
						name: 'Palestinian Territory, Occupied - ps',
						value: 'ps',
					},
					{
						name: 'Panama - pa',
						value: 'pa',
					},
					{
						name: 'Papua New Guinea - pg',
						value: 'pg',
					},
					{
						name: 'Paraguay - py',
						value: 'py',
					},
					{
						name: 'Peru - pe',
						value: 'pe',
					},
					{
						name: 'Philippines - ph',
						value: 'ph',
					},
					{
						name: 'Pitcairn - pn',
						value: 'pn',
					},
					{
						name: 'Poland - pl',
						value: 'pl',
					},
					{
						name: 'Portugal - pt',
						value: 'pt',
					},
					{
						name: 'Puerto Rico - pr',
						value: 'pr',
					},
					{
						name: 'Qatar - qa',
						value: 'qa',
					},
					{
						name: 'Reunion - re',
						value: 're',
					},
					{
						name: 'Romania - ro',
						value: 'ro',
					},
					{
						name: 'Russian Federation - ru',
						value: 'ru',
					},
					{
						name: 'Rwanda - rw',
						value: 'rw',
					},
					{
						name: 'Saint Helena - sh',
						value: 'sh',
					},
					{
						name: 'Saint Kitts and Nevis - kn',
						value: 'kn',
					},
					{
						name: 'Saint Lucia - lc',
						value: 'lc',
					},
					{
						name: 'Saint Pierre and Miquelon - pm',
						value: 'pm',
					},
					{
						name: 'Saint Vincent and the Grenadines - vc',
						value: 'vc',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'San Marino - sm',
						value: 'sm',
					},
					{
						name: 'Sao Tome and Principe - st',
						value: 'st',
					},
					{
						name: 'Saudi Arabia - sa',
						value: 'sa',
					},
					{
						name: 'Senegal - sn',
						value: 'sn',
					},
					{
						name: 'Serbia - rs',
						value: 'rs',
					},
					{
						name: 'Seychelles - sc',
						value: 'sc',
					},
					{
						name: 'Sierra Leone - sl',
						value: 'sl',
					},
					{
						name: 'Singapore - sg',
						value: 'sg',
					},
					{
						name: 'Slovakia - sk',
						value: 'sk',
					},
					{
						name: 'Slovenia - si',
						value: 'si',
					},
					{
						name: 'Solomon Islands - sb',
						value: 'sb',
					},
					{
						name: 'Somalia - so',
						value: 'so',
					},
					{
						name: 'South Africa - za',
						value: 'za',
					},
					{
						name: 'South Georgia and the South Sandwich Islands - gs',
						value: 'gs',
					},
					{
						name: 'Spain - es',
						value: 'es',
					},
					{
						name: 'Sri Lanka - lk',
						value: 'lk',
					},
					{
						name: 'Sudan - sd',
						value: 'sd',
					},
					{
						name: 'Suriname - sr',
						value: 'sr',
					},
					{
						name: 'Svalbard and Jan Mayen - sj',
						value: 'sj',
					},
					{
						name: 'Swaziland - sz',
						value: 'sz',
					},
					{
						name: 'Sweden - se',
						value: 'se',
					},
					{
						name: 'Switzerland - ch',
						value: 'ch',
					},
					{
						name: 'Syrian Arab Republic - sy',
						value: 'sy',
					},
					{
						name: 'Taiwan, Province of China - tw',
						value: 'tw',
					},
					{
						name: 'Tajikistan - tj',
						value: 'tj',
					},
					{
						name: 'Tanzania, United Republic of - tz',
						value: 'tz',
					},
					{
						name: 'Thailand - th',
						value: 'th',
					},
					{
						name: 'Timor-Leste - tl',
						value: 'tl',
					},
					{
						name: 'Togo - tg',
						value: 'tg',
					},
					{
						name: 'Tokelau - tk',
						value: 'tk',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Trinidad and Tobago - tt',
						value: 'tt',
					},
					{
						name: 'Tunisia - tn',
						value: 'tn',
					},
					{
						name: 'Turkiye - tr',
						value: 'tr',
					},
					{
						name: 'Turkmenistan - tm',
						value: 'tm',
					},
					{
						name: 'Turks and Caicos Islands - tc',
						value: 'tc',
					},
					{
						name: 'Tuvalu - tv',
						value: 'tv',
					},
					{
						name: 'Uganda - ug',
						value: 'ug',
					},
					{
						name: 'Ukraine - ua',
						value: 'ua',
					},
					{
						name: 'United Arab Emirates - ae',
						value: 'ae',
					},
					{
						name: 'United Kingdom - uk',
						value: 'uk',
					},
					{
						name: 'United Kingdom - gb',
						value: 'gb',
					},
					{
						name: 'United States - us',
						value: 'us',
					},
					{
						name: 'United States Minor Outlying Islands - um',
						value: 'um',
					},
					{
						name: 'Uruguay - uy',
						value: 'uy',
					},
					{
						name: 'Uzbekistan - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Venezuela - ve',
						value: 've',
					},
					{
						name: 'Viet Nam - vn',
						value: 'vn',
					},
					{
						name: 'Virgin Islands, British - vg',
						value: 'vg',
					},
					{
						name: 'Virgin Islands, U.S. - vi',
						value: 'vi',
					},
					{
						name: 'Wallis and Futuna - wf',
						value: 'wf',
					},
					{
						name: 'Western Sahara - eh',
						value: 'eh',
					},
					{
						name: 'Yemen - ye',
						value: 'ye',
					},
					{
						name: 'Zambia - zm',
						value: 'zm',
					},
					{
						name: 'Zimbabwe - zw',
						value: 'zw',
					},
				],
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Flights search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
				default: 'en',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afrikaans - af',
						value: 'af',
					},
					{
						name: 'Akan - ak',
						value: 'ak',
					},
					{
						name: 'Albanian - sq',
						value: 'sq',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'Amharic - am',
						value: 'am',
					},
					{
						name: 'Arabic - ar',
						value: 'ar',
					},
					{
						name: 'Armenian - hy',
						value: 'hy',
					},
					{
						name: 'Azerbaijani - az',
						value: 'az',
					},
					{
						name: 'Basque - eu',
						value: 'eu',
					},
					{
						name: 'Belarusian - be',
						value: 'be',
					},
					{
						name: 'Bemba - bem',
						value: 'bem',
					},
					{
						name: 'Bengali - bn',
						value: 'bn',
					},
					{
						name: 'Bihari - bh',
						value: 'bh',
					},
					{
						name: 'Bork, bork, bork! - xx-bork',
						value: 'xx-bork',
					},
					{
						name: 'Bosnian - bs',
						value: 'bs',
					},
					{
						name: 'Breton - br',
						value: 'br',
					},
					{
						name: 'Bulgarian - bg',
						value: 'bg',
					},
					{
						name: 'Bhutanese - bt',
						value: 'bt',
					},
					{
						name: 'Cambodian - km',
						value: 'km',
					},
					{
						name: 'Catalan - ca',
						value: 'ca',
					},
					{
						name: 'Cherokee - chr',
						value: 'chr',
					},
					{
						name: 'Chichewa - ny',
						value: 'ny',
					},
					{
						name: 'Chinese (Simplified) - zh-cn',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Traditional) - zh-tw',
						value: 'zh-tw',
					},
					{
						name: 'Corsican - co',
						value: 'co',
					},
					{
						name: 'Croatian - hr',
						value: 'hr',
					},
					{
						name: 'Czech - cs',
						value: 'cs',
					},
					{
						name: 'Danish - da',
						value: 'da',
					},
					{
						name: 'Dutch - nl',
						value: 'nl',
					},
					{
						name: 'Elmer Fudd - xx-elmer',
						value: 'xx-elmer',
					},
					{
						name: 'English - en',
						value: 'en',
					},
					{
						name: 'Esperanto - eo',
						value: 'eo',
					},
					{
						name: 'Estonian - et',
						value: 'et',
					},
					{
						name: 'Ewe - ee',
						value: 'ee',
					},
					{
						name: 'Faroese - fo',
						value: 'fo',
					},
					{
						name: 'Filipino - tl',
						value: 'tl',
					},
					{
						name: 'Finnish - fi',
						value: 'fi',
					},
					{
						name: 'French - fr',
						value: 'fr',
					},
					{
						name: 'Frisian - fy',
						value: 'fy',
					},
					{
						name: 'Ga - gaa',
						value: 'gaa',
					},
					{
						name: 'Galician - gl',
						value: 'gl',
					},
					{
						name: 'Georgian - ka',
						value: 'ka',
					},
					{
						name: 'German - de',
						value: 'de',
					},
					{
						name: 'Greek - el',
						value: 'el',
					},
					{
						name: 'Greenlandic - kl',
						value: 'kl',
					},
					{
						name: 'Guarani - gn',
						value: 'gn',
					},
					{
						name: 'Gujarati - gu',
						value: 'gu',
					},
					{
						name: 'Hacker - xx-hacker',
						value: 'xx-hacker',
					},
					{
						name: 'Haitian Creole - ht',
						value: 'ht',
					},
					{
						name: 'Hausa - ha',
						value: 'ha',
					},
					{
						name: 'Hawaiian - haw',
						value: 'haw',
					},
					{
						name: 'Hebrew - iw',
						value: 'iw',
					},
					{
						name: 'Hebrew - he',
						value: 'he',
					},
					{
						name: 'Hindi - hi',
						value: 'hi',
					},
					{
						name: 'Hungarian - hu',
						value: 'hu',
					},
					{
						name: 'Icelandic - is',
						value: 'is',
					},
					{
						name: 'Igbo - ig',
						value: 'ig',
					},
					{
						name: 'Indonesian - ID',
						value: 'id',
					},
					{
						name: 'Interlingua - ia',
						value: 'ia',
					},
					{
						name: 'Irish - ga',
						value: 'ga',
					},
					{
						name: 'Italian - it',
						value: 'it',
					},
					{
						name: 'Japanese - ja',
						value: 'ja',
					},
					{
						name: 'Javanese - jw',
						value: 'jw',
					},
					{
						name: 'Kannada - kn',
						value: 'kn',
					},
					{
						name: 'Kazakh - kk',
						value: 'kk',
					},
					{
						name: 'Kinyarwanda - rw',
						value: 'rw',
					},
					{
						name: 'Kirundi - rn',
						value: 'rn',
					},
					{
						name: 'Klingon - xx-klingon',
						value: 'xx-klingon',
					},
					{
						name: 'Kongo - kg',
						value: 'kg',
					},
					{
						name: 'Korean - ko',
						value: 'ko',
					},
					{
						name: 'Krio (Sierra Leone) - kri',
						value: 'kri',
					},
					{
						name: 'Kurdish - ku',
						value: 'ku',
					},
					{
						name: 'Kurdish (Soranî) - ckb',
						value: 'ckb',
					},
					{
						name: 'Kyrgyz - ky',
						value: 'ky',
					},
					{
						name: 'Laothian - lo',
						value: 'lo',
					},
					{
						name: 'Latin - la',
						value: 'la',
					},
					{
						name: 'Latvian - lv',
						value: 'lv',
					},
					{
						name: 'Lingala - ln',
						value: 'ln',
					},
					{
						name: 'Lithuanian - lt',
						value: 'lt',
					},
					{
						name: 'Lozi - loz',
						value: 'loz',
					},
					{
						name: 'Luganda - lg',
						value: 'lg',
					},
					{
						name: 'Luo - ach',
						value: 'ach',
					},
					{
						name: 'Macedonian - mk',
						value: 'mk',
					},
					{
						name: 'Malagasy - mg',
						value: 'mg',
					},
					{
						name: 'Malay - ms',
						value: 'ms',
					},
					{
						name: 'Malayalam - ml',
						value: 'ml',
					},
					{
						name: 'Maltese - mt',
						value: 'mt',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Maori - mi',
						value: 'mi',
					},
					{
						name: 'Marathi - mr',
						value: 'mr',
					},
					{
						name: 'Mauritian Creole - mfe',
						value: 'mfe',
					},
					{
						name: 'Moldavian - mo',
						value: 'mo',
					},
					{
						name: 'Mongolian - mn',
						value: 'mn',
					},
					{
						name: 'Montenegrin - sr-me',
						value: 'sr-me',
					},
					{
						name: 'Myanmar - my',
						value: 'my',
					},
					{
						name: 'Nepali - ne',
						value: 'ne',
					},
					{
						name: 'Nigerian Pidgin - pcm',
						value: 'pcm',
					},
					{
						name: 'Northern Sotho - nso',
						value: 'nso',
					},
					{
						name: 'Norwegian - no',
						value: 'no',
					},
					{
						name: 'Norwegian (Nynorsk) - nn',
						value: 'nn',
					},
					{
						name: 'Occitan - oc',
						value: 'oc',
					},
					{
						name: 'Oriya - or',
						value: 'or',
					},
					{
						name: 'Oromo - om',
						value: 'om',
					},
					{
						name: 'Pashto - ps',
						value: 'ps',
					},
					{
						name: 'Persian - fa',
						value: 'fa',
					},
					{
						name: 'Pirate - xx-pirate',
						value: 'xx-pirate',
					},
					{
						name: 'Polish - pl',
						value: 'pl',
					},
					{
						name: 'Portuguese - pt',
						value: 'pt',
					},
					{
						name: 'Portuguese (Brazil) - pt-br',
						value: 'pt-br',
					},
					{
						name: 'Portuguese (Portugal) - pt-pt',
						value: 'pt-pt',
					},
					{
						name: 'Punjabi - pa',
						value: 'pa',
					},
					{
						name: 'Quechua - qu',
						value: 'qu',
					},
					{
						name: 'Romanian - ro',
						value: 'ro',
					},
					{
						name: 'Romansh - rm',
						value: 'rm',
					},
					{
						name: 'Runyakitara - nyn',
						value: 'nyn',
					},
					{
						name: 'Russian - ru',
						value: 'ru',
					},
					{
						name: 'Scots Gaelic - gd',
						value: 'gd',
					},
					{
						name: 'Serbian - sr',
						value: 'sr',
					},
					{
						name: 'Serbo-Croatian - sh',
						value: 'sh',
					},
					{
						name: 'Sesotho - st',
						value: 'st',
					},
					{
						name: 'Setswana - tn',
						value: 'tn',
					},
					{
						name: 'Seychellois Creole - crs',
						value: 'crs',
					},
					{
						name: 'Shona - sn',
						value: 'sn',
					},
					{
						name: 'Sindhi - sd',
						value: 'sd',
					},
					{
						name: 'Sinhalese - si',
						value: 'si',
					},
					{
						name: 'Slovak - sk',
						value: 'sk',
					},
					{
						name: 'Slovenian - sl',
						value: 'sl',
					},
					{
						name: 'Somali - so',
						value: 'so',
					},
					{
						name: 'Spanish - es',
						value: 'es',
					},
					{
						name: 'Spanish (Latin American) - es-419',
						value: 'es-419',
					},
					{
						name: 'Sundanese - su',
						value: 'su',
					},
					{
						name: 'Swahili - sw',
						value: 'sw',
					},
					{
						name: 'Swedish - sv',
						value: 'sv',
					},
					{
						name: 'Tajik - tg',
						value: 'tg',
					},
					{
						name: 'Tamil - ta',
						value: 'ta',
					},
					{
						name: 'Tatar - tt',
						value: 'tt',
					},
					{
						name: 'Telugu - te',
						value: 'te',
					},
					{
						name: 'Thai - th',
						value: 'th',
					},
					{
						name: 'Tigrinya - ti',
						value: 'ti',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Tshiluba - lua',
						value: 'lua',
					},
					{
						name: 'Tumbuka - tum',
						value: 'tum',
					},
					{
						name: 'Turkish - tr',
						value: 'tr',
					},
					{
						name: 'Turkmen - tk',
						value: 'tk',
					},
					{
						name: 'Twi - tw',
						value: 'tw',
					},
					{
						name: 'Uighur - ug',
						value: 'ug',
					},
					{
						name: 'Ukrainian - uk',
						value: 'uk',
					},
					{
						name: 'Urdu - ur',
						value: 'ur',
					},
					{
						name: 'Uzbek - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Vietnamese - vi',
						value: 'vi',
					},
					{
						name: 'Welsh - cy',
						value: 'cy',
					},
					{
						name: 'Wolof - wo',
						value: 'wo',
					},
					{
						name: 'Xhosa - xh',
						value: 'xh',
					},
					{
						name: 'Yiddish - yi',
						value: 'yi',
					},
					{
						name: 'Yoruba - yo',
						value: 'yo',
					},
					{
						name: 'Zulu - zu',
						value: 'zu',
					},
				],
			},
			{
				displayName: '`currency` Currency',
				name: 'currency',
				description:
					'Parameter defines the currency of the returned prices. Default to USD. Head to the Google Travel Currencies page for a full list of supported currency codes.',
				default: 'USD',
				routing: {
					request: {
						qs: {
							currency: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Albanian Lek - ALL',
						value: 'ALL',
					},
					{
						name: 'Algerian Dinar - DZD',
						value: 'DZD',
					},
					{
						name: 'Argentine Peso - ARS',
						value: 'ARS',
					},
					{
						name: 'Armenian Dram - AMD',
						value: 'AMD',
					},
					{
						name: 'Aruban Florin - AWG',
						value: 'AWG',
					},
					{
						name: 'Australian Dollar - AUD',
						value: 'AUD',
					},
					{
						name: 'Azerbaijani Manat - AZN',
						value: 'AZN',
					},
					{
						name: 'Bahamian Dollar - BSD',
						value: 'BSD',
					},
					{
						name: 'Bahraini Dinar - BHD',
						value: 'BHD',
					},
					{
						name: 'Belarusian Ruble - BYN',
						value: 'BYN',
					},
					{
						name: 'Bermudan Dollar - BMD',
						value: 'BMD',
					},
					{
						name: 'Bosnia-Herzegovina Convertible Mark - BAM',
						value: 'BAM',
					},
					{
						name: 'Brazilian Real - BRL',
						value: 'BRL',
					},
					{
						name: 'British Pound - GBP',
						value: 'GBP',
					},
					{
						name: 'Bulgarian Lev - BGN',
						value: 'BGN',
					},
					{
						name: 'CFP Franc - XPF',
						value: 'XPF',
					},
					{
						name: 'Canadian Dollar - CAD',
						value: 'CAD',
					},
					{
						name: 'Chilean Peso - CLP',
						value: 'CLP',
					},
					{
						name: 'Chinese Yuan - CNY',
						value: 'CNY',
					},
					{
						name: 'Colombian Peso - COP',
						value: 'COP',
					},
					{
						name: 'Costa Rican Colón - CRC',
						value: 'CRC',
					},
					{
						name: 'Cuban Peso - CUP',
						value: 'CUP',
					},
					{
						name: 'Czech Koruna - CZK',
						value: 'CZK',
					},
					{
						name: 'Danish Krone - DKK',
						value: 'DKK',
					},
					{
						name: 'Dominican Peso - DOP',
						value: 'DOP',
					},
					{
						name: 'Egyptian Pound - EGP',
						value: 'EGP',
					},
					{
						name: 'Euro - EUR',
						value: 'EUR',
					},
					{
						name: 'Georgian Lari - GEL',
						value: 'GEL',
					},
					{
						name: 'Hong Kong Dollar - HKD',
						value: 'HKD',
					},
					{
						name: 'Hungarian Forint - HUF',
						value: 'HUF',
					},
					{
						name: 'Icelandic Króna - ISK',
						value: 'ISK',
					},
					{
						name: 'Indian Rupee - INR',
						value: 'INR',
					},
					{
						name: 'Indonesian Rupiah - IDR',
						value: 'IDR',
					},
					{
						name: 'Iranian Rial - IRR',
						value: 'IRR',
					},
					{
						name: 'Israeli New Shekel - ILS',
						value: 'ILS',
					},
					{
						name: 'Jamaican Dollar - JMD',
						value: 'JMD',
					},
					{
						name: 'Japanese Yen - JPY',
						value: 'JPY',
					},
					{
						name: 'Jordanian Dinar - JOD',
						value: 'JOD',
					},
					{
						name: 'Kazakhstani Tenge - KZT',
						value: 'KZT',
					},
					{
						name: 'Kuwaiti Dinar - KWD',
						value: 'KWD',
					},
					{
						name: 'Lebanese Pound - LBP',
						value: 'LBP',
					},
					{
						name: 'Macedonian Denar - MKD',
						value: 'MKD',
					},
					{
						name: 'Malaysian Ringgit - MYR',
						value: 'MYR',
					},
					{
						name: 'Mexican Peso - MXN',
						value: 'MXN',
					},
					{
						name: 'Moldovan Leu - MDL',
						value: 'MDL',
					},
					{
						name: 'Moroccan Dirham - MAD',
						value: 'MAD',
					},
					{
						name: 'New Taiwan Dollar - TWD',
						value: 'TWD',
					},
					{
						name: 'New Zealand Dollar - NZD',
						value: 'NZD',
					},
					{
						name: 'Norwegian Krone - NOK',
						value: 'NOK',
					},
					{
						name: 'Omani Rial - OMR',
						value: 'OMR',
					},
					{
						name: 'Pakistani Rupee - PKR',
						value: 'PKR',
					},
					{
						name: 'Panamanian Balboa - PAB',
						value: 'PAB',
					},
					{
						name: 'Peruvian Sol - PEN',
						value: 'PEN',
					},
					{
						name: 'Philippine Peso - PHP',
						value: 'PHP',
					},
					{
						name: 'Polish Zloty - PLN',
						value: 'PLN',
					},
					{
						name: 'Qatari Riyal - QAR',
						value: 'QAR',
					},
					{
						name: 'Romanian Leu - RON',
						value: 'RON',
					},
					{
						name: 'Russian Ruble - RUB',
						value: 'RUB',
					},
					{
						name: 'Saudi Riyal - SAR',
						value: 'SAR',
					},
					{
						name: 'Serbian Dinar - RSD',
						value: 'RSD',
					},
					{
						name: 'Singapore Dollar - SGD',
						value: 'SGD',
					},
					{
						name: 'South African Rand - ZAR',
						value: 'ZAR',
					},
					{
						name: 'South Korean Won - KRW',
						value: 'KRW',
					},
					{
						name: 'Swedish Krona - SEK',
						value: 'SEK',
					},
					{
						name: 'Swiss Franc - CHF',
						value: 'CHF',
					},
					{
						name: 'Thai Baht - THB',
						value: 'THB',
					},
					{
						name: 'Turkish Lira - TRY',
						value: 'TRY',
					},
					{
						name: 'US Dollar - USD',
						value: 'USD',
					},
					{
						name: 'Ukrainian Hryvnia - UAH',
						value: 'UAH',
					},
					{
						name: 'United Arab Emirates Dirham - AED',
						value: 'AED',
					},
					{
						name: 'Vietnamese Dong - VND',
						value: 'VND',
					},
				],
			},
			{
				displayName: '`travel_class` Travel Class',
				name: 'travel_class',
				description:
					'Parameter defines the travel class.Available options:1 - Economy (default)2 - Premium economy3 - Business4 - First',
				default: 1,
				routing: {
					request: {
						qs: {
							travel_class: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Economy (default) - 1',
						value: 1,
					},
					{
						name: 'Premium economy - 2',
						value: 2,
					},
					{
						name: 'Business - 3',
						value: 3,
					},
					{
						name: 'First - 4',
						value: 4,
					},
				],
			},
			{
				displayName: '`multi_city_json` Parameters for Multi-city',
				name: 'multi_city_json',
				description:
					'Parameter defines the flight information for multi-city flights. It\'s a JSON string containing multiple flight information objects. Each object should contain the following fields:departure_id - The departure airport code or location kgmid. The format is the same as the main departure_id parameter.arrival_id - The arrival airport code or location kgmid. The format is the same as the main arrival_id parameter.date - Flight date. The format is the same as the outbound_date parameter.times - Time range for the flight. The format is the same as the outbound_times parameter. This parameter is optional.Example:[{"departure_id":"CDG","arrival_id":"NRT","date":"2025-03-20"},{"departure_id":"NRT","arrival_id":"LAX,SEA","date":"2025-03-27"},{"departure_id":"LAX,SEA","arrival_id":"AUS","date":"2025-04-03","times":"8,18,9,23"}]The example is a multi-city flight from CDG to NRT on 2025-03-20, then from NRT to LAX or SEA on 2025-03-27, and finally from LAX or SEA to AUS on 2025-04-03. The last flight has a departure time range from 8:00 AM to 7:00 PM and an arrival time range from 9:00 AM to 12:00 AM (Midnight).',
				default: '',
				routing: {
					request: {
						qs: {
							multi_city_json: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`show_hidden` Show hidden results',
				name: 'show_hidden',
				description: 'Whether to include the hidden flight results. Default to false.',
				default: false,
				routing: {
					request: {
						qs: {
							show_hidden: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`deep_search` Deep search',
				name: 'deep_search',
				description:
					'Whether to enable deep search, which may yield better results but with a longer response time. Deep search results are identical to those found on Google Flights pages in the browser. By default, this option is set to false for performance reasons.',
				default: false,
				routing: {
					request: {
						qs: {
							deep_search: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`adults` Number of Adults',
				name: 'adults',
				description: 'Parameter defines the number of adults. Default to 1.',
				default: 1,
				routing: {
					request: {
						qs: {
							adults: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`children` Number of Children',
				name: 'children',
				description: 'Parameter defines the number of children. Default to 0.',
				default: 0,
				routing: {
					request: {
						qs: {
							children: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`infants_in_seat` Number of Infants in seat',
				name: 'infants_in_seat',
				description: 'Parameter defines the number of infants in seat. Default to 0.',
				default: 0,
				routing: {
					request: {
						qs: {
							infants_in_seat: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`infants_on_lap` Number of Infants on lap',
				name: 'infants_on_lap',
				description: 'Parameter defines the number of infants on lap. Default to 0.',
				default: 0,
				routing: {
					request: {
						qs: {
							infants_on_lap: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`sort_by` Sort By',
				name: 'sort_by',
				description:
					'Parameter defines the sorting order of the results.Available options:1 - Top flights (default)2 - Price3 - Departure time4 - Arrival time5 - Duration6 - Emissions',
				default: '1',
				routing: {
					request: {
						qs: {
							sort_by: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Top flights (default) - 1',
						value: '1',
					},
					{
						name: 'Price - 2',
						value: '2',
					},
					{
						name: 'Departure time - 3',
						value: '3',
					},
					{
						name: 'Arrival time - 4',
						value: '4',
					},
					{
						name: 'Duration - 5',
						value: '5',
					},
					{
						name: 'Emissions - 6',
						value: '6',
					},
				],
			},
			{
				displayName: '`stops` Stops',
				name: 'stops',
				description:
					'Parameter defines the number of stops during the flight.Available options:0 - Any number of stops (default)1 - Nonstop only2 - 1 stop or fewer3 - 2 stops or fewer',
				default: 0,
				routing: {
					request: {
						qs: {
							stops: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Any number of stops (default) - 0',
						value: 0,
					},
					{
						name: 'Nonstop only - 1',
						value: 1,
					},
					{
						name: '1 stop or fewer - 2',
						value: 2,
					},
					{
						name: '2 stops or fewer - 3',
						value: 3,
					},
				],
			},
			{
				displayName: '`exclude_airlines` Exclude airlines',
				name: 'exclude_airlines',
				description:
					"Parameter defines the airline codes to be excluded. Split multiple airlines with comma.It can't be used together with include_airlines.Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA.For example, UA is United Airlines.Additionally, alliances can be also included here:STAR_ALLIANCE - Star AllianceSKYTEAM - SkyTeamONEWORLD - Oneworldexclude_airlines and include_airlines parameters can't be used together.",
				default: '',
				routing: {
					request: {
						qs: {
							exclude_airlines: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`include_airlines` Include airlines',
				name: 'include_airlines',
				description:
					"Parameter defines the airline codes to be included. Split multiple airlines with comma.It can't be used together with exclude_airlines.Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA.For example, UA is United Airlines.Additionally, alliances can be also included here:STAR_ALLIANCE - Star AllianceSKYTEAM - SkyTeamONEWORLD - Oneworldexclude_airlines and include_airlines parameters can't be used together.",
				default: '',
				routing: {
					request: {
						qs: {
							include_airlines: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`bags` bags',
				name: 'bags',
				description: 'Parameter defines the number of carry-on bags. Default to 0.',
				default: 0,
				routing: {
					request: {
						qs: {
							bags: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`max_price` Max price',
				name: 'max_price',
				description: 'Parameter defines the maximum ticket price. Default to unlimited.',
				default: '',
				routing: {
					request: {
						qs: {
							max_price: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`outbound_times` Outbound times',
				name: 'outbound_times',
				description:
					"Parameter defines the outbound times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example:4,18: 4:00 AM - 7:00 PM departure0,18: 12:00 AM - 7:00 PM departure19,23: 7:00 PM - 12:00 AM departure4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrival",
				default: '',
				routing: {
					request: {
						qs: {
							outbound_times: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`return_times` Return times',
				name: 'return_times',
				description:
					"Parameter defines the return times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example:4,18: 4:00 AM - 7:00 PM departure0,18: 12:00 AM - 7:00 PM departure19,23: 7:00 PM - 12:00 AM departure4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrivalParameter should only be used when type parameter is set to: 1 (Round trip)",
				default: '',
				routing: {
					request: {
						qs: {
							return_times: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`emissions` Emissions',
				name: 'emissions',
				description:
					'Parameter defines the emission level of the flight.Available options:1 - Less emissions only',
				default: 1,
				routing: {
					request: {
						qs: {
							emissions: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Less emissions only - 1',
						value: 1,
					},
				],
			},
			{
				displayName: '`layover_duration` Layover duration',
				name: 'layover_duration',
				description:
					"Parameter defines the layover duration, in minutes. It's a string containing two comma-separated numbers. For example, specify 90,330 for 1 hr 30 min - 5 hr 30 min.",
				default: '',
				routing: {
					request: {
						qs: {
							layover_duration: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`exclude_conns` Exclude connecting airports',
				name: 'exclude_conns',
				description:
					'Parameter defines the connecting airport codes to be excluded.An airport ID is an uppercase 3-letter code. You can search for it on Google Flights or IATA.For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.You can also combine multiple Airports by joining them with a comma (value + , + value; eg: CDG,AUS).',
				default: '',
				routing: {
					request: {
						qs: {
							exclude_conns: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`max_duration` Max duration',
				name: 'max_duration',
				description:
					'Parameter defines the maximum flight duration, in minutes. For example, specify 1500 for 25 hours.',
				default: '',
				routing: {
					request: {
						qs: {
							max_duration: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`departure_token` Departure flight token',
				name: 'departure_token',
				description:
					'Parameter is used to select the flight and get returning flights (for Round trip) or flights for the next leg of itinerary (for Multi-city). Find this token in the departure flight results.It cannot be used together with booking_token.',
				default: '',
				routing: {
					request: {
						qs: {
							departure_token: '={{$value}}',
						},
					},
				},
				type: 'string',
				typeOptions: { password: true },
			},
			{
				displayName: '`booking_token` Booking token',
				name: 'booking_token',
				description:
					'Parameter is used to get booking options for the selected flights. Find this token in the flight results.It cannot be used together with departure_token.When using this token, parameters related to date and parameters inside "Advanced Filters" section won\'t affect the result.',
				default: '',
				routing: {
					request: {
						qs: {
							booking_token: '={{$value}}',
						},
					},
				},
				type: 'string',
				typeOptions: { password: true },
			},
			...serpApiFields,
		],
	},
];
