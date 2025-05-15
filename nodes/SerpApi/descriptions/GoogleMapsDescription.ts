import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleMapsFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description: 'Parameter defines the query you want to search',
		default: 'coffee',
		routing: {
			request: {
				qs: {
					q: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps'],
			},
		},
	},
	{
		displayName: 'Type of search (type)',
		name: 'type',
		description: 'Parameter defines the type of search you want to make',
		default: 'search',
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
				name: 'Search',
				value: 'search',
			},
			{
				name: 'Place',
				value: 'place',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: ['google_maps'],
			},
		},
	},
	{
		displayName: 'GPS Coordinates (ll)',
		name: 'll',
		description:
			'Parameter defines the GPS coordinates of the location where you want the search to originate from. See docs for more information: https://serpapi.com/google-maps-api#api-parameters-geographic-location-ll.',
		default: '',
		routing: {
			request: {
				qs: {
					ll: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps'],
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
				resource: ['google_maps'],
			},
		},
		options: [
			{
				displayName: 'Domain (google_domain)',
				name: 'google_domain',
				description: 'Parameter defines the Google domain to use',
				default: 'google.com',
				routing: {
					request: {
						qs: {
							google_domain: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: DomainOptions,
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
				displayName: 'Country (gl)',
				name: 'gl',
				description: 'Parameter defines the country to use for the Google Maps search',
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
				displayName: 'Data (data)',
				name: 'data',
				description:
					'Parameter can be used to filter the search results. See docs for more information: https://serpapi.com/google-maps-api#api-parameters-advanced-google-maps-parameters-data.',
				default: '',
				routing: {
					request: {
						qs: {
							data: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Place ID (place_id)',
				name: 'place_id',
				description:
					'Parameter defines the unique reference to a place on a Google Map. Place IDs are available for most locations, including businesses, landmarks, parks, and intersections. You can find the place_id using the Google Maps API.',
				default: '',
				routing: {
					request: {
						qs: {
							place_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Result Offset (start)',
				name: 'start',
				description: 'Parameter defines the result offset. It skips the given number of results.',
				default: '',
				routing: {
					request: {
						qs: {
							start: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			...serpApiFields,
		],
	},
];
