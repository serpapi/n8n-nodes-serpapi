/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const duckDuckGoSearchFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular DuckDuckGo search. (e.g., inurl:, site:, intitle:, etc.)',
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
				resource: ['duckduckgo'],
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
				resource: ['duckduckgo'],
			},
		},
		options: [
			{
				displayName: '`kl` Region',
				name: 'kl',
				description:
					'Parameter defines the region to use for the DuckDuckGo search. Region code examples: us-en for the United States, uk-en for United Kingdom, or fr-fr for France. Head to the DuckDuckGo regions for a full list of supported regions.',
				default: 'us-en',
				routing: {
					request: {
						qs: {
							kl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Arabia - xa-ar',
						value: 'xa-ar',
					},
					{
						name: 'Arabia (en) - xa-en',
						value: 'xa-en',
					},
					{
						name: 'Argentina - ar-es',
						value: 'ar-es',
					},
					{
						name: 'Australia - au-en',
						value: 'au-en',
					},
					{
						name: 'Austria - at-de',
						value: 'at-de',
					},
					{
						name: 'Belgium (fr) - be-fr',
						value: 'be-fr',
					},
					{
						name: 'Belgium (nl) - be-nl',
						value: 'be-nl',
					},
					{
						name: 'Brazil - br-pt',
						value: 'br-pt',
					},
					{
						name: 'Bulgaria - bg-bg',
						value: 'bg-bg',
					},
					{
						name: 'Canada - ca-en',
						value: 'ca-en',
					},
					{
						name: 'Canada (fr) - ca-fr',
						value: 'ca-fr',
					},
					{
						name: 'Catalan - ct-ca',
						value: 'ct-ca',
					},
					{
						name: 'Chile - cl-es',
						value: 'cl-es',
					},
					{
						name: 'China - cn-zh',
						value: 'cn-zh',
					},
					{
						name: 'Colombia - co-es',
						value: 'co-es',
					},
					{
						name: 'Croatia - hr-hr',
						value: 'hr-hr',
					},
					{
						name: 'Czech Republic - cz-cs',
						value: 'cz-cs',
					},
					{
						name: 'Denmark - dk-da',
						value: 'dk-da',
					},
					{
						name: 'Estonia - ee-et',
						value: 'ee-et',
					},
					{
						name: 'Finland - fi-fi',
						value: 'fi-fi',
					},
					{
						name: 'France - fr-fr',
						value: 'fr-fr',
					},
					{
						name: 'Germany - de-de',
						value: 'de-de',
					},
					{
						name: 'Greece - gr-el',
						value: 'gr-el',
					},
					{
						name: 'Hong Kong - hk-tzh',
						value: 'hk-tzh',
					},
					{
						name: 'Hungary - hu-hu',
						value: 'hu-hu',
					},
					{
						name: 'India - in-en',
						value: 'in-en',
					},
					{
						name: 'Indonesia - id-id',
						value: 'id-id',
					},
					{
						name: 'Indonesia (en) - id-en',
						value: 'id-en',
					},
					{
						name: 'Ireland - ie-en',
						value: 'ie-en',
					},
					{
						name: 'Israel - il-he',
						value: 'il-he',
					},
					{
						name: 'Italy - it-it',
						value: 'it-it',
					},
					{
						name: 'Japan - jp-jp',
						value: 'jp-jp',
					},
					{
						name: 'Korea - kr-kr',
						value: 'kr-kr',
					},
					{
						name: 'Latvia - lv-lv',
						value: 'lv-lv',
					},
					{
						name: 'Lithuania - lt-lt',
						value: 'lt-lt',
					},
					{
						name: 'Latin America - xl-es',
						value: 'xl-es',
					},
					{
						name: 'Malaysia - my-ms',
						value: 'my-ms',
					},
					{
						name: 'Malaysia (en) - my-en',
						value: 'my-en',
					},
					{
						name: 'Mexico - mx-es',
						value: 'mx-es',
					},
					{
						name: 'Netherlands - nl-nl',
						value: 'nl-nl',
					},
					{
						name: 'New Zealand - nz-en',
						value: 'nz-en',
					},
					{
						name: 'Norway - no-no',
						value: 'no-no',
					},
					{
						name: 'Peru - pe-es',
						value: 'pe-es',
					},
					{
						name: 'Philippines - ph-en',
						value: 'ph-en',
					},
					{
						name: 'Philippines (tl) - ph-tl',
						value: 'ph-tl',
					},
					{
						name: 'Poland - pl-pl',
						value: 'pl-pl',
					},
					{
						name: 'Portugal - pt-pt',
						value: 'pt-pt',
					},
					{
						name: 'Romania - ro-ro',
						value: 'ro-ro',
					},
					{
						name: 'Russia - ru-ru',
						value: 'ru-ru',
					},
					{
						name: 'Singapore - sg-en',
						value: 'sg-en',
					},
					{
						name: 'Slovak Republic - sk-sk',
						value: 'sk-sk',
					},
					{
						name: 'Slovenia - sl-sl',
						value: 'sl-sl',
					},
					{
						name: 'South Africa - za-en',
						value: 'za-en',
					},
					{
						name: 'Spain - es-es',
						value: 'es-es',
					},
					{
						name: 'Sweden - se-sv',
						value: 'se-sv',
					},
					{
						name: 'Switzerland (de) - ch-de',
						value: 'ch-de',
					},
					{
						name: 'Switzerland (fr) - ch-fr',
						value: 'ch-fr',
					},
					{
						name: 'Switzerland (it) - ch-it',
						value: 'ch-it',
					},
					{
						name: 'Taiwan - tw-tzh',
						value: 'tw-tzh',
					},
					{
						name: 'Thailand - th-th',
						value: 'th-th',
					},
					{
						name: 'Turkey - tr-tr',
						value: 'tr-tr',
					},
					{
						name: 'Ukraine - ua-uk',
						value: 'ua-uk',
					},
					{
						name: 'United Kingdom - uk-en',
						value: 'uk-en',
					},
					{
						name: 'United States - us-en',
						value: 'us-en',
					},
					{
						name: 'United States (es) - ue-es',
						value: 'ue-es',
					},
					{
						name: 'Venezuela - ve-es',
						value: 've-es',
					},
					{
						name: 'Vietnam - vn-vi',
						value: 'vn-vi',
					},
					{
						name: 'No region - wt-wt',
						value: 'wt-wt',
					},
				],
			},
			{
				displayName: '`safe` Adult Content Filtering',
				name: 'safe',
				description:
					'Parameter defines the level of filtering for adult content. It can be set to 1 (Strict), -1 (Moderate - default), or -2 (Off).',
				default: '-1',
				routing: {
					request: {
						qs: {
							safe: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Strict',
						value: '1',
					},
					{
						name: 'Moderate',
						value: '-1',
					},
					{
						name: 'Off',
						value: '-2',
					},
				],
			},
			{
				displayName: '`df` Filter By Date',
				name: 'df',
				description:
					'Parameter defines results filtered by date. It can be set to: d - Past day, w - Past week, m - Past month, y - Past year, or you can pass a custom date following the next format: from_date + .. + to_date (e.g. 2021-06-15..2021-06-16).',
				default: '',
				routing: {
					request: {
						qs: {
							df: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`start` Result Offset',
				name: 'start',
				description:
					"Parameter defines the result offset. It skips the given number of results. It's used for pagination. When pagination is not being used (initial search request), number of organic_results can vary between 26 and 30. When pagination is being used (value of start parameter is bigger than 0), organic_results return 50 results.",
				default: '',
				routing: {
					request: {
						qs: {
							start: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
