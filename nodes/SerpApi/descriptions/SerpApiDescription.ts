import { INodeProperties } from 'n8n-workflow';

export const serpApiFields: INodeProperties[] = [
	{
		name: 'no_cache',
		displayName: '`no_cache` Disable Caching',
		description:
			'Parameter will force SerpApi to fetch the Yandex results even if a cached version is already present. A cache is served only if the query and all parameters are exactly the same. Cache expires after 1h. Cached searches are free, and are not counted towards your searches per month. It can be set to false (default) to allow results from the cache, or true to disallow results from the cache. no_cache and async parameters should not be used together.',
		default: false,
		routing: {
			request: {
				qs: {
					no_cache: '={{$value}}',
				},
			},
		},
		type: 'boolean',
		required: false,
	},
	{
		name: 'async',
		displayName: '`async` Async',
		description:
			"Parameter defines the way you want to submit your search to SerpApi. It can be set to false (default) to open an HTTP connection and keep it open until you got your search results, or true to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use our Searches Archive API to retrieve your results. async and no_cache parameters should not be used together. async should not be used on accounts with Ludicrous Speed enabled.",
		default: false,
		routing: {
			request: {
				qs: {
					async: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: false,
	},
	{
		name: 'zero_trace',
		displayName: '`zero_trace` ZeroTrace Mode',
		description:
			'Enterprise only. Parameter enables ZeroTrace mode. It can be set to false (default) or true. Enable this mode to skip storing search parameters, search files, and search metadata on our servers. This may make debugging more difficult.',
		default: false,
		routing: {
			request: {
				qs: {
					zero_trace: '={{$value}}',
				},
			},
		},
		type: 'boolean',
		required: false,
	},
	{
		name: 'output',
		displayName: '`output` Output',
		description:
			'Parameter defines the final output you want. It can be set to json (default) to get a structured JSON of the results, or html to get the raw html retrieved.',
		default: 'json',
		routing: {
			request: {
				qs: {
					output: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: false,
	},
];
