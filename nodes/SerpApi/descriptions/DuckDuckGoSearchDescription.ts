import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const duckDuckGoSearchFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description: 'Parameter defines the query you want to search',
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
				operation: ['duckduckgo'],
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
				operation: ['duckduckgo'],
			},
		},
		options: [
			{
				displayName: 'Region (kl)',
				name: 'kl',
				description: 'Parameter defines the region to use for the DuckDuckGo search',
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
					{ name: 'Arabia - Arabic (xa-ar)', value: 'xa-ar' },
					{ name: 'Arabia - English (xa-en)', value: 'xa-en' },
					{ name: 'Argentina - Spanish (ar-es)', value: 'ar-es' },
					{ name: 'Australia - English (au-en)', value: 'au-en' },
					{ name: 'Austria - German (at-de)', value: 'at-de' },
					{ name: 'Belgium - Dutch (be-nl)', value: 'be-nl' },
					{ name: 'Belgium - French (be-fr)', value: 'be-fr' },
					{ name: 'Brazil - Portuguese (br-pt)', value: 'br-pt' },
					{ name: 'Bulgaria - Bulgarian (bg-bg)', value: 'bg-bg' },
					{ name: 'Canada - English (ca-en)', value: 'ca-en' },
					{ name: 'Canada - French (ca-fr)', value: 'ca-fr' },
					{ name: 'Catalonia - Catalan (ct-ca)', value: 'ct-ca' },
					{ name: 'Chile - Spanish (cl-es)', value: 'cl-es' },
					{ name: 'China - Chinese (cn-zh)', value: 'cn-zh' },
					{ name: 'Colombia - Spanish (co-es)', value: 'co-es' },
					{ name: 'Croatia - Croatian (hr-hr)', value: 'hr-hr' },
					{ name: 'Czech Republic - Czech (cz-cs)', value: 'cz-cs' },
					{ name: 'Denmark - Danish (dk-da)', value: 'dk-da' },
					{ name: 'Estonia - Estonian (ee-et)', value: 'ee-et' },
					{ name: 'Finland - Finnish (fi-fi)', value: 'fi-fi' },
					{ name: 'France - French (fr-fr)', value: 'fr-fr' },
					{ name: 'Germany - German (de-de)', value: 'de-de' },
					{ name: 'Greece - Greek (gr-el)', value: 'gr-el' },
					{ name: 'Hong Kong - Traditional Chinese (hk-tzh)', value: 'hk-tzh' },
					{ name: 'Hungary - Hungarian (hu-hu)', value: 'hu-hu' },
					{ name: 'India - English (in-en)', value: 'in-en' },
					{ name: 'Indonesia - English (id-en)', value: 'id-en' },
					{ name: 'Indonesia - Indonesian (id-id)', value: 'id-id' },
					{ name: 'Ireland - English (ie-en)', value: 'ie-en' },
					{ name: 'Israel - Hebrew (il-he)', value: 'il-he' },
					{ name: 'Italy - Italian (it-it)', value: 'it-it' },
					{ name: 'Japan - Japanese (jp-jp)', value: 'jp-jp' },
					{ name: 'Korea - Korean (kr-kr)', value: 'kr-kr' },
					{ name: 'Latin America - Spanish (xl-es)', value: 'xl-es' },
					{ name: 'Latvia - Latvian (lv-lv)', value: 'lv-lv' },
					{ name: 'Lithuania - Lithuanian (lt-lt)', value: 'lt-lt' },
					{ name: 'Malaysia - English (my-en)', value: 'my-en' },
					{ name: 'Malaysia - Malay (my-ms)', value: 'my-ms' },
					{ name: 'Mexico - Spanish (mx-es)', value: 'mx-es' },
					{ name: 'Netherlands - Dutch (nl-nl)', value: 'nl-nl' },
					{ name: 'New Zealand - English (nz-en)', value: 'nz-en' },
					{ name: 'No region - None (wt-wt)', value: 'wt-wt' },
					{ name: 'Norway - Norwegian (no-no)', value: 'no-no' },
					{ name: 'Peru - Spanish (pe-es)', value: 'pe-es' },
					{ name: 'Philippines - English (ph-en)', value: 'ph-en' },
					{ name: 'Philippines - Tagalog (ph-tl)', value: 'ph-tl' },
					{ name: 'Poland - Polish (pl-pl)', value: 'pl-pl' },
					{ name: 'Portugal - Portuguese (pt-pt)', value: 'pt-pt' },
					{ name: 'Romania - Romanian (ro-ro)', value: 'ro-ro' },
					{ name: 'Russia - Russian (ru-ru)', value: 'ru-ru' },
					{ name: 'Singapore - English (sg-en)', value: 'sg-en' },
					{ name: 'Slovakia - Slovak (sk-sk)', value: 'sk-sk' },
					{ name: 'Slovenia - Slovenian (sl-sl)', value: 'sl-sl' },
					{ name: 'South Africa - English (za-en)', value: 'za-en' },
					{ name: 'Spain - Spanish (es-es)', value: 'es-es' },
					{ name: 'Sweden - Swedish (se-sv)', value: 'se-sv' },
					{ name: 'Switzerland - French (ch-fr)', value: 'ch-fr' },
					{ name: 'Switzerland - German (ch-de)', value: 'ch-de' },
					{ name: 'Switzerland - Italian (ch-it)', value: 'ch-it' },
					{ name: 'Taiwan - Traditional Chinese (tw-tzh)', value: 'tw-tzh' },
					{ name: 'Thailand - Thai (th-th)', value: 'th-th' },
					{ name: 'Turkey - Turkish (tr-tr)', value: 'tr-tr' },
					{ name: 'Ukraine - Ukrainian (ua-uk)', value: 'ua-uk' },
					{ name: 'United Kingdom - English (uk-en)', value: 'uk-en' },
					{ name: 'United States - English (us-en)', value: 'us-en' },
					{ name: 'United States - Spanish (ue-es)', value: 'ue-es' },
					{ name: 'Venezuela - Spanish (ve-es)', value: 've-es' },
					{ name: 'Vietnam - Vietnamese (vn-vi)', value: 'vn-vi' },
				],
			},
			{
				displayName: 'Adult Content Filtering (safe)',
				name: 'safe',
				description: 'Parameter defines the level of filtering for adult content',
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
				displayName: 'Filter By Date (df)',
				name: 'df',
				description: 'Parameter defines results filtered by date',
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
				displayName: 'Result Offset (start)',
				name: 'start',
				description:
					'Parameter defines the result offset for pagination. It skips the given number of results.',
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
