import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const baiduSearchFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the the search query, including all Baidu search operators. (e.g., inurl:, site:, intitle:, etc.).',
		default: 'Coffee',
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
				resource: ['baidu'],
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
				resource: ['baidu'],
			},
		},
		options: [
			{
				displayName: '`ct` Choose Language',
				name: 'ct',
				description:
					'Parameter defines which language to restrict results.',
				default: '1',
				routing: {
					request: {
						qs: {
							ct: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'All Languages',
						value: '1',
					},
					{
						name: 'Simplified Chinese',
						value: '2',
					},
					{
						name: 'Traditional Chinese',
						value: '3',
					},
				],
			},
			{
				displayName: '`pn` Result Offset',
				name: 'pn',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. (e.g., 0 (default) is the first page of results, 10 is the 2nd page of results, 20 is the 3rd page of results, etc.).",
				default: '',
				routing: {
					request: {
						qs: {
							pn: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`rn` Number of Results',
				name: 'rn',
				description:
					'Parameter defines the maximum number of results to return, limited to 50. (e.g., 10 (default) returns 10 results, 30 returns 30 results, and 50 returns 50 results). This parameter is only available for desktop and tablet searches.',
				default: '10',
				routing: {
					request: {
						qs: {
							rn: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`gpc` Time Period for Results',
				name: 'gpc',
				description:
					'Parameter defines the time period for results (e.g., stf=1743415359,1744020159|stftype=1 only returns results from the past 7 days. First integer within the parameter, 1743415359 is Unix Timestamp for 7 days ago. Second integer,1744020159 is Unix Timestamp for now)',
				default: '',
				routing: {
					request: {
						qs: {
							gpc: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`q5` Search Type',
				name: 'q5',
				description:
					'Similar to using inurl: or intitle: (e.g., 1 to search by page title, 2 to search by web address)',
				default: '',
				routing: {
					request: {
						qs: {
							q5: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`q6` Search Type',
				name: 'q6',
				description:
					'Similar to using site: (e.g., q6=serpapi.com to search for results only from the domain serpapi.com)',
				default: '',
				routing: {
					request: {
						qs: {
							q6: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`bs` Previous Search Query',
				name: 'bs',
				description: 'Defines the previous search query',
				default: '',
				routing: {
					request: {
						qs: {
							bs: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`oq` Original Search Query',
				name: 'oq',
				description: 'Defines the original search query when navigated from a related search',
				default: '',
				routing: {
					request: {
						qs: {
							oq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`f` Originating Search Type',
				name: 'f',
				description:
					'Defines the originating search type (e.g., 8 is a normal search, 3 is from the suggestion list, and 1 is a related search)',
				default: '',
				routing: {
					request: {
						qs: {
							f: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`device` Device',
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
