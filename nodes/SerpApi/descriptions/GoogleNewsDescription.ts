import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleNewsFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description:
			"Parameter defines the query you want to search. You can use anything that you would use in a regular Google News search. e.g. site:, when:. Parameter can't be used together with publication_token, story_token, and topic_token parameters.",
		default: '',
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
				resource: ['google_news'],
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
				resource: ['google_news'],
			},
		},
		options: [
			{
				displayName: 'Country (gl)',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google News search. It's a two-letter country code. (e.g., us for the United States (default), uk for United Kingdom, or fr for France). Head to the Google countries page for a full list of supported Google News countries.",
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
				description:
					"Parameter defines the language to use for the Google News search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: 'Topic Token (topic_token)',
				name: 'topic_token',
				description:
					'Parameter defines the Google News topic token. It is used for accessing the news results for a specific topic (e.g., "World", "Business", "Technology"). The token can be found in the JSON response or the URL of the Google News page (in the URL, it is a string of characters preceded by /topics/). Parameter can\'t be used together with q, story_token, and publication_token parameters.',
				default: '',
				routing: {
					request: {
						qs: {
							topic_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Publication Token (publication_token)',
				name: 'publication_token',
				description:
					'Parameter defines the Google News publication token. It is used for accessing the news results from a specific publisher (e.g., "CNN", "BBC", "The Guardian"). The token can be found in the JSON response or the URL of the Google News page (in the URL, it is a string of characters preceded by /publications/). Parameter can\'t be used together with q, story_token, and topic_token parameters.',
				default: '',
				routing: {
					request: {
						qs: {
							publication_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Section Token (section_token)',
				name: 'section_token',
				description:
					'Parameter defines the Google News section token. It is used for accessing the sub-section of a specific topic. (e.g., "Business -> Economy"). The token can be found in the JSON response or the URL of the Google News page (in the URL, it is a string of characters preceded by /sections/). Parameter can only be used in combination with topic_token or publication_token parameters.',
				default: '',
				routing: {
					request: {
						qs: {
							section_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Story Token (story_token)',
				name: 'story_token',
				description:
					"Parameter defines the Google News story token. It is used for accessing the news results with full coverage of a specific story. The token can be found in the JSON response or the URL of the Google News page (in the URL, it is a string of characters preceded by /stories/). Parameter can't be used together with q, topic_token, and publication_token parameters.",
				default: '',
				routing: {
					request: {
						qs: {
							story_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Sort By (so)',
				name: 'so',
				description:
					'Parameter defines the sorting method. Results can be sorted by relevance or by date. By default, the results are sorted by relevance.',
				default: '0',
				routing: {
					request: {
						qs: {
							so: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Relevance',
						value: '0',
					},
					{
						name: 'Date',
						value: '1',
					},
				],
			},
			...serpApiFields,
		],
	},
];
