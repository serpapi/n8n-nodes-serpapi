import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { LanguageOptions } from './GoogleOptions';

export const googleMapsReviewsFields: INodeProperties[] = [
	{
		displayName: '`data_id` Data ID',
		name: 'data_id',
		description:
			'Parameter defines the Google Maps data ID. Find the data ID by using the Google Maps API. Either data_id or place_id should be set.',
		default: '',
		routing: {
			request: {
				qs: {
					data_id: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_reviews'],
			},
		},
	},
	{
		displayName: '`place_id` Place ID',
		name: 'place_id',
		description:
			'Parameter defines the unique reference to a place on a Google Map. Place IDs are available for most locations, including businesses, landmarks, parks, and intersections. You can find the place_id using the Google Maps API. You can read more about Place IDs here. Either data_id or place_id should be set.',
		default: '',
		routing: {
			request: {
				qs: {
					place_id: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_reviews'],
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
				resource: ['google_maps_reviews'],
			},
		},
		options: [
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Maps Reviews search. It's a two-letter language code, for example, en for English (default), es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: '`sort_by` Sort By',
				name: 'sort_by',
				description: 'Parameter is used for sorting and refining results',
				default: 'qualityScore',
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
						name: 'Most relevant',
						value: 'qualityScore',
					},
					{
						name: 'Newest',
						value: 'newestFirst',
					},
					{
						name: 'Highest rating',
						value: 'ratingHigh',
					},
					{
						name: 'Lowest rating',
						value: 'ratingLow',
					},
				],
			},
			{
				displayName: '`topic_id` Topic ID',
				name: 'topic_id',
				description:
					'Parameter defines the ID of the topic you want to use for filtering reviews. You can access IDs inside the structured JSON response.',
				default: '',
				routing: {
					request: {
						qs: {
							topic_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`num` Number of results',
				name: 'num',
				description:
					'Parameter defines the maximum number of results to return. It ranges from 1 to 20. It defaults to 10. Parameter cannot be used on the initial page when neither next_page_topic nor topic_id is set. It always returns 8 results.',
				default: '',
				routing: {
					request: {
						qs: {
							num: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`next_page_token` Next Page Token',
				name: 'next_page_token',
				description:
					'Parameter defines the next page token. It is used for retrieving the next page results.',
				default: '',
				routing: {
					request: {
						qs: {
							next_page_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
