import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const baiduSearchFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
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
				operation: ['baidu'],
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
				operation: ['baidu'],
			},
		},
		options: [
			{
				displayName: 'Choose Language (ct)',
				name: 'ct',
				description: 'Parameter defines which language to restrict results',
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
				displayName: 'Result Offset (pn)',
				name: 'pn',
				description:
					'Parameter defines the result offset for pagination. It skips the given number of results. (e.g., 0 (default) is the first page of results, 10 is the 2nd page of results, etc.)',
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
				displayName: 'Number of Results (rn)',
				name: 'rn',
				description:
					'Parameter defines the maximum number of results to return, limited to 50. Default is 10. Only available for desktop and tablet searches.',
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
				displayName: 'Time Period for Results (gpc)',
				name: 'gpc',
				description:
					'Parameter accepts Unix timestamps to define the time period for results (e.g., stf=1743415359,1744020159|stftype=1 only returns results from the past 7 days)',
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
				displayName: 'Search Type (q5)',
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
				displayName: 'Search Type (q6)',
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
				displayName: 'Previous Search Query (bs)',
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
				displayName: 'Original Search Query (oq)',
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
				displayName: 'Originating Search Type (f)',
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
