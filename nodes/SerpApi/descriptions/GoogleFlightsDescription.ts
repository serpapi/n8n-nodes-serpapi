import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleFlightsFields: INodeProperties[] = [
	{
		displayName: '`departure_id` Departure airport code / location kgmid',
		name: 'departure_id',
		description:
			'Parameter defines the departure airport code or location kgmid. An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA. For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport. A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX. You can specify multiple departure airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.',
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
			'Parameter defines the arrival airport code or location kgmid. An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA. For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport. A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX. You can specify multiple arrival airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.',
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
			'Parameter defines the type of the flights. When this parameter is set to Multi-city, use multi_city_json to set the flight information. To obtain the returning flight information for Round Trip (default), you need to make another request using a departure_token',
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
				name: 'Round trip (default)',
				value: '1',
			},
			{
				name: 'One way',
				value: '2',
			},
			{
				name: 'Multi-city',
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
				options: CountryOptions,
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
				options: LanguageOptions,
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
					{ name: 'Albanian Lek - ALL', value: 'ALL' },
					{ name: 'Algerian Dinar - DZD', value: 'DZD' },
					{ name: 'Argentine Peso - ARS', value: 'ARS' },
					{ name: 'Armenian Dram - AMD', value: 'AMD' },
					{ name: 'Aruban Florin - AWG', value: 'AWG' },
					{ name: 'Australian Dollar - AUD', value: 'AUD' },
					{ name: 'Azerbaijani Manat - AZN', value: 'AZN' },
					{ name: 'Bahamian Dollar - BSD', value: 'BSD' },
					{ name: 'Bahraini Dinar - BHD', value: 'BHD' },
					{ name: 'Belarusian Ruble - BYN', value: 'BYN' },
					{ name: 'Bermudan Dollar - BMD', value: 'BMD' },
					{ name: 'Bosnia-Herzegovina Convertible Mark - BAM', value: 'BAM' },
					{ name: 'Brazilian Real - BRL', value: 'BRL' },
					{ name: 'British Pound - GBP', value: 'GBP' },
					{ name: 'Bulgarian Lev - BGN', value: 'BGN' },
					{ name: 'Canadian Dollar - CAD', value: 'CAD' },
					{ name: 'CFP Franc - XPF', value: 'XPF' },
					{ name: 'Chilean Peso - CLP', value: 'CLP' },
					{ name: 'Chinese Yuan - CNY', value: 'CNY' },
					{ name: 'Colombian Peso - COP', value: 'COP' },
					{ name: 'Costa Rican Colón - CRC', value: 'CRC' },
					{ name: 'Cuban Peso - CUP', value: 'CUP' },
					{ name: 'Czech Koruna - CZK', value: 'CZK' },
					{ name: 'Danish Krone - DKK', value: 'DKK' },
					{ name: 'Dominican Peso - DOP', value: 'DOP' },
					{ name: 'Egyptian Pound - EGP', value: 'EGP' },
					{ name: 'Euro - EUR', value: 'EUR' },
					{ name: 'Georgian Lari - GEL', value: 'GEL' },
					{ name: 'Hong Kong Dollar - HKD', value: 'HKD' },
					{ name: 'Hungarian Forint - HUF', value: 'HUF' },
					{ name: 'Icelandic Króna - ISK', value: 'ISK' },
					{ name: 'Indian Rupee - INR', value: 'INR' },
					{ name: 'Indonesian Rupiah - IDR', value: 'IDR' },
					{ name: 'Iranian Rial - IRR', value: 'IRR' },
					{ name: 'Israeli New Shekel - ILS', value: 'ILS' },
					{ name: 'Jamaican Dollar - JMD', value: 'JMD' },
					{ name: 'Japanese Yen - JPY', value: 'JPY' },
					{ name: 'Jordanian Dinar - JOD', value: 'JOD' },
					{ name: 'Kazakhstani Tenge - KZT', value: 'KZT' },
					{ name: 'Kuwaiti Dinar - KWD', value: 'KWD' },
					{ name: 'Lebanese Pound - LBP', value: 'LBP' },
					{ name: 'Macedonian Denar - MKD', value: 'MKD' },
					{ name: 'Malaysian Ringgit - MYR', value: 'MYR' },
					{ name: 'Mexican Peso - MXN', value: 'MXN' },
					{ name: 'Moldovan Leu - MDL', value: 'MDL' },
					{ name: 'Moroccan Dirham - MAD', value: 'MAD' },
					{ name: 'New Taiwan Dollar - TWD', value: 'TWD' },
					{ name: 'New Zealand Dollar - NZD', value: 'NZD' },
					{ name: 'Norwegian Krone - NOK', value: 'NOK' },
					{ name: 'Omani Rial - OMR', value: 'OMR' },
					{ name: 'Pakistani Rupee - PKR', value: 'PKR' },
					{ name: 'Panamanian Balboa - PAB', value: 'PAB' },
					{ name: 'Peruvian Sol - PEN', value: 'PEN' },
					{ name: 'Philippine Peso - PHP', value: 'PHP' },
					{ name: 'Polish Zloty - PLN', value: 'PLN' },
					{ name: 'Qatari Riyal - QAR', value: 'QAR' },
					{ name: 'Romanian Leu - RON', value: 'RON' },
					{ name: 'Russian Ruble - RUB', value: 'RUB' },
					{ name: 'Saudi Riyal - SAR', value: 'SAR' },
					{ name: 'Serbian Dinar - RSD', value: 'RSD' },
					{ name: 'Singapore Dollar - SGD', value: 'SGD' },
					{ name: 'South African Rand - ZAR', value: 'ZAR' },
					{ name: 'South Korean Won - KRW', value: 'KRW' },
					{ name: 'Swedish Krona - SEK', value: 'SEK' },
					{ name: 'Swiss Franc - CHF', value: 'CHF' },
					{ name: 'Thai Baht - THB', value: 'THB' },
					{ name: 'Turkish Lira - TRY', value: 'TRY' },
					{ name: 'Ukrainian Hryvnia - UAH', value: 'UAH' },
					{ name: 'United Arab Emirates Dirham - AED', value: 'AED' },
					{ name: 'US Dollar - USD', value: 'USD' },
					{ name: 'Vietnamese Dong - VND', value: 'VND' },
				],
			},
			{
				displayName: '`travel_class` Travel Class',
				name: 'travel_class',
				description: 'Parameter defines the travel class',
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
						name: 'Economy (default)',
						value: 1,
					},
					{
						name: 'Premium economy',
						value: 2,
					},
					{
						name: 'Business',
						value: 3,
					},
					{
						name: 'First',
						value: 4,
					},
				],
			},
			{
				displayName: '`multi_city_json` Parameters for Multi-city',
				name: 'multi_city_json',
				description:
					'Parameter defines the flight information for multi-city flights. It\'s a JSON string containing multiple flight information objects. Each object should contain the following fields: "departure_id" - The departure airport code or location kgmid. The format is the same as the main departure_id parameter. "arrival_id" - The arrival airport code or location kgmid. The format is the same as the main arrival_id parameter. "date" - Flight date. The format is the same as the outbound_date parameter. "times" - Time range for the flight. The format is the same as the outbound_times parameter. This parameter is optional. Example: [{"departure_id":"CDG","arrival_id":"NRT","date":"2025-03-20"},{"departure_id":"NRT","arrival_id":"LAX,SEA","date":"2025-03-27"},{"departure_id":"LAX,SEA","arrival_id":"AUS","date":"2025-04-03","times":"8,18,9,23"}]. The example is a multi-city flight from CDG to NRT on 2025-03-20, then from NRT to LAX or SEA on 2025-03-27, and finally from LAX or SEA to AUS on 2025-04-03. The last flight has a departure time range from 8:00 AM to 7:00 PM and an arrival time range from 9:00 AM to 12:00 AM (Midnight).',
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
				description: 'Parameter defines the sorting order of the results',
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
						name: 'Top flights (default)',
						value: '1',
					},
					{
						name: 'Price',
						value: '2',
					},
					{
						name: 'Departure time',
						value: '3',
					},
					{
						name: 'Arrival time',
						value: '4',
					},
					{
						name: 'Duration',
						value: '5',
					},
					{
						name: 'Emissions',
						value: '6',
					},
				],
			},
			{
				displayName: '`stops` Stops',
				name: 'stops',
				description: 'Parameter defines the number of stops during the flight',
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
						name: 'Any number of stops (default)',
						value: 0,
					},
					{
						name: 'Nonstop only',
						value: 1,
					},
					{
						name: '1 stop or fewer',
						value: 2,
					},
					{
						name: '2 stops or fewer',
						value: 3,
					},
				],
			},
			{
				displayName: '`exclude_airlines` Exclude airlines',
				name: 'exclude_airlines',
				description:
					"Parameter defines the airline codes to be excluded. Split multiple airlines with comma. It can't be used together with include_airlines. Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA. For example, UA is United Airlines. Additionally, alliances can be also included here: STAR_ALLIANCE - Star Alliance, SKYTEAM - SkyTeam, ONEWORLD - Oneworld. exclude_airlines and include_airlines parameters can't be used together.",
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
					"Parameter defines the airline codes to be included. Split multiple airlines with comma. It can't be used together with exclude_airlines. Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA. For example, UA is United Airlines. Additionally, alliances can be also included here: STAR_ALLIANCE - Star Alliance, SKYTEAM - SkyTeam, ONEWORLD - Oneworld. exclude_airlines and include_airlines parameters can't be used together.",
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
					"Parameter defines the outbound times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example: 4,18: 4:00 AM - 7:00 PM departure 0,18: 12:00 AM - 7:00 PM departure 19,23: 7:00 PM - 12:00 AM departure 4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival 0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrival",
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
					"Parameter defines the return times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example: 4,18: 4:00 AM - 7:00 PM departure 0,18: 12:00 AM - 7:00 PM departure 19,23: 7:00 PM - 12:00 AM departure 4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival 0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrival. Parameter should only be used when type parameter is set to Round trip",
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
				description: 'Parameter defines the emission level of the flight',
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
						name: 'Less emissions only',
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
					'Parameter defines the connecting airport codes to be excluded. An airport ID is an uppercase 3-letter code. You can search for it on Google Flights or IATA. For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport. You can also combine multiple Airports by joining them with a comma (value + , + value; eg: CDG,AUS).',
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
					'Parameter is used to select the flight and get returning flights (for Round trip) or flights for the next leg of itinerary (for Multi-city). Find this token in the departure flight results. It cannot be used together with booking_token.',
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
					'Parameter is used to get booking options for the selected flights. Find this token in the flight results. It cannot be used together with departure_token. When using this token, parameters related to date and parameters inside "Advanced Filters" section won\'t affect the result.',
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
