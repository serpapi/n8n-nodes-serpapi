import { INodeProperties } from 'n8n-workflow';

export const serpApiFields: INodeProperties[] = [
	{
		displayName: '`no_cache` Disable Caching',
		name: 'no_cache',
		description:
			'Whether to force SerpApi to fetch new results even if a cached version is already present. A cache is served only if the query and all parameters are exactly the same. Cache expires after 1h. Cached searches are free, and are not counted towards your searches per month. It can be set to false (default) to allow results from the cache, or true to disallow results from the cache. no_cache and async parameters should not be used together.',
		default: false,
		routing: {
			request: {
				qs: {
					no_cache: '={{$value}}',
				},
			},
		},
		type: 'boolean',
	},
	{
		displayName: '`async` Async',
		name: 'async',
		description:
			"Whether you want to open an HTTP connection and keep it open until you got your search results, or true to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use our Searches Archive API to retrieve your results. async and no_cache parameters should not be used together. async should not be used on accounts with Ludicrous Speed enabled.",
		default: false,
		routing: {
			request: {
				qs: {
					async: '={{$value}}',
				},
			},
		},
		type: 'boolean',
	},
	{
		displayName: '`zero_trace` ZeroTrace Mode',
		name: 'zero_trace',
		description:
			'Whether to enable ZeroTrace mode. It can be set to false (default) or true. Enable this mode to skip storing search parameters, search files, and search metadata on our servers. This may make debugging more difficult. Enterprise only.',
		default: false,
		routing: {
			request: {
				qs: {
					zero_trace: '={{$value}}',
				},
			},
		},
		type: 'boolean',
	},
	{
		displayName: '`output` Output',
		name: 'output',
		description:
			'Parameter defines the final output you want. It can be set to JSON (default) to get a structured JSON of the results, or html to get the raw html retrieved.',
		default: 'json',
		routing: {
			request: {
				qs: {
					output: '={{$value}}',
				},
			},
		},
		type: 'string',
	},
];
