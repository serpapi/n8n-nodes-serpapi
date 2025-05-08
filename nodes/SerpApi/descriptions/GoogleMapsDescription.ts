import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleMapsFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Maps search. The parameter is only required if type is set to search.',
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
		displayName: '`type` Type of search',
		name: 'type',
		description:
			'Parameter defines the type of search you want to make. It can be set to:search - returns a list of results for the set q parameter,place - returns results for a specific place when data parameter is setParameter is not required when using place_id.',
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
		displayName: '`ll` GPS Coordinates',
		name: 'll',
		description:
			'Parameter defines the GPS coordinates of the location where you want the search to originate from. Its value must match the following format:@ + latitude + , + longitude + , + zoomThis will form a string that looks like this:e.g. @40.7455096,-74.0083012,14z. The zoom attribute ranges from 3z, map completely zoomed out - to 21z, map completely zoomed in. The parameter should only be used when type is set to search. Parameter is required when using pagination. Results are not guaranteed to be within the requested geographic location.',
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
				displayName: '`google_domain` Domain',
				name: 'google_domain',
				description:
					'Parameter defines the Google domain to use. It defaults to google.com. Head to the Google domains page for a full list of supported Google domains.',
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
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Maps search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google Maps languages page for a full list of supported Google Maps languages.",
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
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google Maps search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France). Head to the Google countries page for a full list of supported Google countries. Parameter only affects Place Results API.",
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
				displayName: '`data` Data',
				name: 'data',
				description:
					'Parameter can be used to filter the search results. You can visit Google Maps website, set filters you want and simply copy the data value from their URL to SerpApi URL. One of the uses of the parameter is to search for a specific place; therefore, it is required if the type is set to place. Alternatively, place_id can be used. To use the data parameter to search for a specific place, it needs to be constructed in the following sequence:!4m5!3m4!1s + data_id + !8m2!3d + latitude + !4d + longitude This will form a string that looks like this: !4m5!3m4!1s0x89c259b7abdd4769:0xc385876db174521a!8m2!3d40.750231!4d-74.004019. You can find the data_id using our Google Maps API.',
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
				displayName: '`place_id` Place ID',
				name: 'place_id',
				description:
					'Parameter defines the unique reference to a place on a Google Map. Place IDs are available for most locations, including businesses, landmarks, parks, and intersections. You can find the place_id using our Google Maps API. You can read more about Place IDs here.place_id can be used without any other optional parameter.',
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
				displayName: '`start` Result Offset',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 20 is the 2nd page of results, 40 is the 3rd page of results, etc.). We recommend starting with 0 and increasing by 20 for the next page. There is no hard limit on the maximum offset number, but we recommend a maximum of 100 (page six) which is the same behavior as with the Google Maps web app. More than that, the result might be duplicated or irrelevant.",
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
