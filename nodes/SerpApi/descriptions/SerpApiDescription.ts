import { INodeProperties } from 'n8n-workflow';

export const serpApiFields: INodeProperties[] = [
	{
		displayName: 'Disable Caching (no_cache)',
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
		displayName: 'Async (async)',
		name: 'async',
		description:
			"Whether to perform the search async or not. It can be set to false (default) to open an HTTP connection and keep it open until you got your search results, or true to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use the Search Archive API to retrieve your results. async and no_cache parameters should not be used together. async should not be used on accounts with Ludicrous Speed enabled.",
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
		displayName: 'ZeroTrace Mode (zero_trace)',
		name: 'zero_trace',
		description:
			"Whether to enable ZeroTrace or not. Enterprise only. It can be set to false (default) or true. Enable this mode to skip storing search parameters, search files, and search metadata on SerpApi's servers. This may make debugging more difficult.",
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
		displayName: 'Output (output)',
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
	{
		displayName: 'JSON Restrictor (json_restrictor)',
		name: 'json_restrictor',
		description:
			'Parameter defines the fields you want to restrict in the response. For example, setting it to organic_results[0:3].{title,snippet} will only return the title and snippet of the first 3 organic results.',
		default: '',
		routing: {
			request: {
				qs: {
					json_restrictor: '={{$value}}',
				},
			},
		},
		type: 'string',
	},
];
