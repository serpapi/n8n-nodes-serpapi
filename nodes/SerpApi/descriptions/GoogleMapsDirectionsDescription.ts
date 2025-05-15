import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleMapsDirectionsFields: INodeProperties[] = [
	{
		displayName: 'Starting Point Address (start_addr)',
		name: 'start_addr',
		description:
			'Parameter defines the address of the starting point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search. Alternatively, you can use start_data_id or start_coords.',
		default: '',
		routing: {
			request: {
				qs: {
					start_addr: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_directions'],
			},
		},
	},
	{
		displayName: 'Ending Point Address (end_addr)',
		name: 'end_addr',
		description:
			'Parameter defines the address of the ending point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search. Alternatively, you can use end_data_id or end_coords.',
		default: '',
		routing: {
			request: {
				qs: {
					end_addr: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_directions'],
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
				resource: ['google_maps_directions'],
			},
		},
		options: [
			{
				displayName: 'Country (gl)',
				name: 'gl',
				description: 'Parameter defines the country to use for the Google search',
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
				displayName: 'Language (hl)',
				name: 'hl',
				description: 'Parameter defines the language to use for the search',
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
				displayName: 'Travel Mode (travel_mode)',
				name: 'travel_mode',
				description: 'Parameter defines the travel mode',
				default: '6',
				routing: {
					request: {
						qs: {
							travel_mode: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Best (Default)',
						value: '6',
					},
					{
						name: 'Driving',
						value: '0',
					},
					{
						name: 'Two-wheeler',
						value: '9',
					},
					{
						name: 'Transit',
						value: '3',
					},
					{
						name: 'Walking',
						value: '2',
					},
					{
						name: 'Cycling',
						value: '1',
					},
					{
						name: 'Flight',
						value: '4',
					},
				],
			},
			{
				displayName: 'Starting Point Data ID (start_data_id)',
				name: 'start_data_id',
				description:
					'Parameter defines the data ID of the starting point for the direction you want to search. Find the data ID of a place using the Google Maps API. Alternatively, you can use start_addr or start_coords.',
				default: '',
				routing: {
					request: {
						qs: {
							start_data_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Ending Point Data ID (end_data_id)',
				name: 'end_data_id',
				description:
					'Parameter defines the data ID of the ending point for the direction you want to search. Find the data ID of a place using the Google Maps API. Alternatively, you can use end_addr or end_coords.',
				default: '',
				routing: {
					request: {
						qs: {
							end_data_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Starting Point GPS Coordinates (start_coords)',
				name: 'start_coords',
				description:
					'Parameter defines the GPS coordinates of the starting point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289. Alternatively, you can use start_addr or start_data_id.',
				default: '',
				routing: {
					request: {
						qs: {
							start_coords: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Ending Point GPS Coordinates (end_coords)',
				name: 'end_coords',
				description:
					'Parameter defines the GPS coordinates of the ending point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289. Alternatively, you can use end_addr or end_data_id.',
				default: '',
				routing: {
					request: {
						qs: {
							end_coords: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Distance Unit (distance_unit)',
				name: 'distance_unit',
				description: 'Parameter defines the displayed distance unit',
				default: '1',
				routing: {
					request: {
						qs: {
							distance_unit: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'miles',
						value: '1',
					},
					{
						name: 'km',
						value: '0',
					},
				],
			},
			{
				displayName: 'Avoid Options (avoid)',
				name: 'avoid',
				description:
					'Parameter defines avoid options. Available options: highways, tolls, ferries. You can also combine multiple options by joining them with a comma (e.g.: highways,tolls).',
				default: '',
				routing: {
					request: {
						qs: {
							avoid: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Preferred Transit Options (prefer)',
				name: 'prefer',
				description:
					'Parameter defines preferred transit options. Available options: bus, subway, train, tram_light_rail. You can also combine multiple options by joining them with a comma (e.g.: subway,train). Parameter works only if travel_mode parameter is set to: 3 (Transit)',
				default: '',
				routing: {
					request: {
						qs: {
							prefer: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Route Options (route)',
				name: 'route',
				description: 'Parameter defines route options',
				default: '2',
				routing: {
					request: {
						qs: {
							route: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Fewer transfers',
						value: '2',
					},
					{
						name: 'Less walking',
						value: '3',
					},
					{
						name: 'Wheelchair accessible',
						value: '4',
					},
				],
			},
			{
				displayName: 'Travel Time (time)',
				name: 'time',
				description:
					'Parameter defines the time to travel. Available options: depart_at:xxxxxx - Specifies the departure time where xxxxxx is the timestamp. E.g. depart_at:1698229538 specifies the departure time to 2023-10-25 10:25:38 GMT+0000. arrive_by:xxxxxx - Specifies the arrival time, where xxxxxx is the timestamp. E.g. arrive_by:1698229538 specifies the arrival time to 2023-10-25 10:25:38 GMT+0000. last_available - Takes the last available transit. This option works only if travel_mode parameter is set to: 3 (Transit)',
				default: '',
				routing: {
					request: {
						qs: {
							time: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
