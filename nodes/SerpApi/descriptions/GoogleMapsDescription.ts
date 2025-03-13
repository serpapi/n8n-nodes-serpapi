/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleMapsFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Maps search. The parameter is only required if type is set to search.',
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
				displayName: '`ll` GPS Coordinates',
				name: 'll',
				description:
					'Parameter defines the GPS coordinates of the location where you want the search to originate from. Its value must match the following format:@ + latitude + , + longitude + , + zoomThis will form a string that looks like this:e.g. @40.7455096,-74.0083012,14z. The zoom attribute ranges from 3z, map completely zoomed out - to 21z, map completely zoomed in.The parameter should only be used when type is set to search.Parameter is required when using pagination.Results are not guaranteed to be within the requested geographic location.',
				default: '',
				routing: {
					request: {
						qs: {
							ll: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
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
				options: [
					{
						name: 'google.com',
						value: 'google.com',
					},
					{
						name: 'google.ad',
						value: 'google.ad',
					},
					{
						name: 'google.ae',
						value: 'google.ae',
					},
					{
						name: 'google.com.af',
						value: 'google.com.af',
					},
					{
						name: 'google.com.ag',
						value: 'google.com.ag',
					},
					{
						name: 'google.com.ai',
						value: 'google.com.ai',
					},
					{
						name: 'google.al',
						value: 'google.al',
					},
					{
						name: 'google.am',
						value: 'google.am',
					},
					{
						name: 'google.co.ao',
						value: 'google.co.ao',
					},
					{
						name: 'google.com.ar',
						value: 'google.com.ar',
					},
					{
						name: 'google.as',
						value: 'google.as',
					},
					{
						name: 'google.at',
						value: 'google.at',
					},
					{
						name: 'google.com.au',
						value: 'google.com.au',
					},
					{
						name: 'google.az',
						value: 'google.az',
					},
					{
						name: 'google.ba',
						value: 'google.ba',
					},
					{
						name: 'google.com.bd',
						value: 'google.com.bd',
					},
					{
						name: 'google.be',
						value: 'google.be',
					},
					{
						name: 'google.bf',
						value: 'google.bf',
					},
					{
						name: 'google.bg',
						value: 'google.bg',
					},
					{
						name: 'google.com.bh',
						value: 'google.com.bh',
					},
					{
						name: 'google.bi',
						value: 'google.bi',
					},
					{
						name: 'google.bj',
						value: 'google.bj',
					},
					{
						name: 'google.com.bn',
						value: 'google.com.bn',
					},
					{
						name: 'google.com.bo',
						value: 'google.com.bo',
					},
					{
						name: 'google.com.br',
						value: 'google.com.br',
					},
					{
						name: 'google.bs',
						value: 'google.bs',
					},
					{
						name: 'google.bt',
						value: 'google.bt',
					},
					{
						name: 'google.co.bw',
						value: 'google.co.bw',
					},
					{
						name: 'google.by',
						value: 'google.by',
					},
					{
						name: 'google.com.bz',
						value: 'google.com.bz',
					},
					{
						name: 'google.ca',
						value: 'google.ca',
					},
					{
						name: 'google.com.kh',
						value: 'google.com.kh',
					},
					{
						name: 'google.cd',
						value: 'google.cd',
					},
					{
						name: 'google.cf',
						value: 'google.cf',
					},
					{
						name: 'google.cg',
						value: 'google.cg',
					},
					{
						name: 'google.ch',
						value: 'google.ch',
					},
					{
						name: 'google.ci',
						value: 'google.ci',
					},
					{
						name: 'google.co.ck',
						value: 'google.co.ck',
					},
					{
						name: 'google.cl',
						value: 'google.cl',
					},
					{
						name: 'google.cm',
						value: 'google.cm',
					},
					{
						name: 'google.com.co',
						value: 'google.com.co',
					},
					{
						name: 'google.co.cr',
						value: 'google.co.cr',
					},
					{
						name: 'google.com.cu',
						value: 'google.com.cu',
					},
					{
						name: 'google.cv',
						value: 'google.cv',
					},
					{
						name: 'google.com.cy',
						value: 'google.com.cy',
					},
					{
						name: 'google.cz',
						value: 'google.cz',
					},
					{
						name: 'google.de',
						value: 'google.de',
					},
					{
						name: 'google.dj',
						value: 'google.dj',
					},
					{
						name: 'google.dk',
						value: 'google.dk',
					},
					{
						name: 'google.dm',
						value: 'google.dm',
					},
					{
						name: 'google.com.do',
						value: 'google.com.do',
					},
					{
						name: 'google.dz',
						value: 'google.dz',
					},
					{
						name: 'google.com.ec',
						value: 'google.com.ec',
					},
					{
						name: 'google.ee',
						value: 'google.ee',
					},
					{
						name: 'google.com.eg',
						value: 'google.com.eg',
					},
					{
						name: 'google.es',
						value: 'google.es',
					},
					{
						name: 'google.com.et',
						value: 'google.com.et',
					},
					{
						name: 'google.fi',
						value: 'google.fi',
					},
					{
						name: 'google.fm',
						value: 'google.fm',
					},
					{
						name: 'google.com.fj',
						value: 'google.com.fj',
					},
					{
						name: 'google.fr',
						value: 'google.fr',
					},
					{
						name: 'google.ga',
						value: 'google.ga',
					},
					{
						name: 'google.ge',
						value: 'google.ge',
					},
					{
						name: 'google.com.gh',
						value: 'google.com.gh',
					},
					{
						name: 'google.com.gi',
						value: 'google.com.gi',
					},
					{
						name: 'google.gl',
						value: 'google.gl',
					},
					{
						name: 'google.gm',
						value: 'google.gm',
					},
					{
						name: 'google.gp',
						value: 'google.gp',
					},
					{
						name: 'google.gr',
						value: 'google.gr',
					},
					{
						name: 'google.com.gt',
						value: 'google.com.gt',
					},
					{
						name: 'google.gy',
						value: 'google.gy',
					},
					{
						name: 'google.com.hk',
						value: 'google.com.hk',
					},
					{
						name: 'google.hn',
						value: 'google.hn',
					},
					{
						name: 'google.hr',
						value: 'google.hr',
					},
					{
						name: 'google.ht',
						value: 'google.ht',
					},
					{
						name: 'google.hu',
						value: 'google.hu',
					},
					{
						name: 'google.co.ID',
						value: 'google.co.id',
					},
					{
						name: 'google.iq',
						value: 'google.iq',
					},
					{
						name: 'google.ie',
						value: 'google.ie',
					},
					{
						name: 'google.co.il',
						value: 'google.co.il',
					},
					{
						name: 'google.co.in',
						value: 'google.co.in',
					},
					{
						name: 'google.is',
						value: 'google.is',
					},
					{
						name: 'google.it',
						value: 'google.it',
					},
					{
						name: 'google.je',
						value: 'google.je',
					},
					{
						name: 'google.com.jm',
						value: 'google.com.jm',
					},
					{
						name: 'google.jo',
						value: 'google.jo',
					},
					{
						name: 'google.co.jp',
						value: 'google.co.jp',
					},
					{
						name: 'google.co.ke',
						value: 'google.co.ke',
					},
					{
						name: 'google.ki',
						value: 'google.ki',
					},
					{
						name: 'google.kg',
						value: 'google.kg',
					},
					{
						name: 'google.co.kr',
						value: 'google.co.kr',
					},
					{
						name: 'google.com.kw',
						value: 'google.com.kw',
					},
					{
						name: 'google.kz',
						value: 'google.kz',
					},
					{
						name: 'google.la',
						value: 'google.la',
					},
					{
						name: 'google.com.lb',
						value: 'google.com.lb',
					},
					{
						name: 'google.li',
						value: 'google.li',
					},
					{
						name: 'google.lk',
						value: 'google.lk',
					},
					{
						name: 'google.co.ls',
						value: 'google.co.ls',
					},
					{
						name: 'google.lt',
						value: 'google.lt',
					},
					{
						name: 'google.lu',
						value: 'google.lu',
					},
					{
						name: 'google.lv',
						value: 'google.lv',
					},
					{
						name: 'google.com.ly',
						value: 'google.com.ly',
					},
					{
						name: 'google.co.ma',
						value: 'google.co.ma',
					},
					{
						name: 'google.md',
						value: 'google.md',
					},
					{
						name: 'google.mg',
						value: 'google.mg',
					},
					{
						name: 'google.mk',
						value: 'google.mk',
					},
					{
						name: 'google.ml',
						value: 'google.ml',
					},
					{
						name: 'google.com.mm',
						value: 'google.com.mm',
					},
					{
						name: 'google.mn',
						value: 'google.mn',
					},
					{
						name: 'google.ms',
						value: 'google.ms',
					},
					{
						name: 'google.com.mt',
						value: 'google.com.mt',
					},
					{
						name: 'google.mu',
						value: 'google.mu',
					},
					{
						name: 'google.mv',
						value: 'google.mv',
					},
					{
						name: 'google.mw',
						value: 'google.mw',
					},
					{
						name: 'google.com.mx',
						value: 'google.com.mx',
					},
					{
						name: 'google.com.my',
						value: 'google.com.my',
					},
					{
						name: 'google.co.mz',
						value: 'google.co.mz',
					},
					{
						name: 'google.com.na',
						value: 'google.com.na',
					},
					{
						name: 'google.ne',
						value: 'google.ne',
					},
					{
						name: 'google.com.ng',
						value: 'google.com.ng',
					},
					{
						name: 'google.com.ni',
						value: 'google.com.ni',
					},
					{
						name: 'google.nl',
						value: 'google.nl',
					},
					{
						name: 'google.no',
						value: 'google.no',
					},
					{
						name: 'google.com.np',
						value: 'google.com.np',
					},
					{
						name: 'google.nr',
						value: 'google.nr',
					},
					{
						name: 'google.nu',
						value: 'google.nu',
					},
					{
						name: 'google.co.nz',
						value: 'google.co.nz',
					},
					{
						name: 'google.com.om',
						value: 'google.com.om',
					},
					{
						name: 'google.com.pk',
						value: 'google.com.pk',
					},
					{
						name: 'google.com.pa',
						value: 'google.com.pa',
					},
					{
						name: 'google.com.pe',
						value: 'google.com.pe',
					},
					{
						name: 'google.com.ph',
						value: 'google.com.ph',
					},
					{
						name: 'google.pl',
						value: 'google.pl',
					},
					{
						name: 'google.com.pg',
						value: 'google.com.pg',
					},
					{
						name: 'google.com.pr',
						value: 'google.com.pr',
					},
					{
						name: 'google.ps',
						value: 'google.ps',
					},
					{
						name: 'google.pt',
						value: 'google.pt',
					},
					{
						name: 'google.com.py',
						value: 'google.com.py',
					},
					{
						name: 'google.com.qa',
						value: 'google.com.qa',
					},
					{
						name: 'google.ro',
						value: 'google.ro',
					},
					{
						name: 'google.rs',
						value: 'google.rs',
					},
					{
						name: 'google.ru',
						value: 'google.ru',
					},
					{
						name: 'google.rw',
						value: 'google.rw',
					},
					{
						name: 'google.com.sa',
						value: 'google.com.sa',
					},
					{
						name: 'google.com.sb',
						value: 'google.com.sb',
					},
					{
						name: 'google.sc',
						value: 'google.sc',
					},
					{
						name: 'google.se',
						value: 'google.se',
					},
					{
						name: 'google.com.sg',
						value: 'google.com.sg',
					},
					{
						name: 'google.sh',
						value: 'google.sh',
					},
					{
						name: 'google.si',
						value: 'google.si',
					},
					{
						name: 'google.sk',
						value: 'google.sk',
					},
					{
						name: 'google.com.sl',
						value: 'google.com.sl',
					},
					{
						name: 'google.sn',
						value: 'google.sn',
					},
					{
						name: 'google.sm',
						value: 'google.sm',
					},
					{
						name: 'google.so',
						value: 'google.so',
					},
					{
						name: 'google.sr',
						value: 'google.sr',
					},
					{
						name: 'google.com.sv',
						value: 'google.com.sv',
					},
					{
						name: 'google.td',
						value: 'google.td',
					},
					{
						name: 'google.tg',
						value: 'google.tg',
					},
					{
						name: 'google.co.th',
						value: 'google.co.th',
					},
					{
						name: 'google.com.tj',
						value: 'google.com.tj',
					},
					{
						name: 'google.tk',
						value: 'google.tk',
					},
					{
						name: 'google.tl',
						value: 'google.tl',
					},
					{
						name: 'google.tm',
						value: 'google.tm',
					},
					{
						name: 'google.to',
						value: 'google.to',
					},
					{
						name: 'google.tn',
						value: 'google.tn',
					},
					{
						name: 'google.com.tr',
						value: 'google.com.tr',
					},
					{
						name: 'google.tt',
						value: 'google.tt',
					},
					{
						name: 'google.com.tw',
						value: 'google.com.tw',
					},
					{
						name: 'google.co.tz',
						value: 'google.co.tz',
					},
					{
						name: 'google.com.ua',
						value: 'google.com.ua',
					},
					{
						name: 'google.co.ug',
						value: 'google.co.ug',
					},
					{
						name: 'google.co.uk',
						value: 'google.co.uk',
					},
					{
						name: 'google.com.uy',
						value: 'google.com.uy',
					},
					{
						name: 'google.co.uz',
						value: 'google.co.uz',
					},
					{
						name: 'google.com.vc',
						value: 'google.com.vc',
					},
					{
						name: 'google.co.ve',
						value: 'google.co.ve',
					},
					{
						name: 'google.vg',
						value: 'google.vg',
					},
					{
						name: 'google.co.vi',
						value: 'google.co.vi',
					},
					{
						name: 'google.com.vn',
						value: 'google.com.vn',
					},
					{
						name: 'google.vu',
						value: 'google.vu',
					},
					{
						name: 'google.ws',
						value: 'google.ws',
					},
					{
						name: 'google.co.za',
						value: 'google.co.za',
					},
					{
						name: 'google.co.zm',
						value: 'google.co.zm',
					},
					{
						name: 'google.co.zw',
						value: 'google.co.zw',
					},
				],
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
				options: [
					{
						name: 'Afrikaans - af',
						value: 'af',
					},
					{
						name: 'Albanian - sq',
						value: 'sq',
					},
					{
						name: 'Amharic - am',
						value: 'am',
					},
					{
						name: 'Arabic - ar',
						value: 'ar',
					},
					{
						name: 'Armenian - hy',
						value: 'hy',
					},
					{
						name: 'Azerbaijani - az',
						value: 'az',
					},
					{
						name: 'Basque - eu',
						value: 'eu',
					},
					{
						name: 'Belarusian - be',
						value: 'be',
					},
					{
						name: 'Bengali - bn',
						value: 'bn',
					},
					{
						name: 'Bosnian - bs',
						value: 'bs',
					},
					{
						name: 'Bulgarian - bg',
						value: 'bg',
					},
					{
						name: 'Burmese - my',
						value: 'my',
					},
					{
						name: 'Catalan - ca',
						value: 'ca',
					},
					{
						name: 'Chinese - zh',
						value: 'zh',
					},
					{
						name: 'Chinese (Simplified) - zh-cn',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Hong Kong) - zh-hk',
						value: 'zh-hk',
					},
					{
						name: 'Chinese (Traditional) - zh-tw',
						value: 'zh-tw',
					},
					{
						name: 'Croatian - hr',
						value: 'hr',
					},
					{
						name: 'Czech - cs',
						value: 'cs',
					},
					{
						name: 'Danish - da',
						value: 'da',
					},
					{
						name: 'Dutch - nl',
						value: 'nl',
					},
					{
						name: 'English - en',
						value: 'en',
					},
					{
						name: 'English (Australian) - en-au',
						value: 'en-au',
					},
					{
						name: 'English (Great Britain) - en-gb',
						value: 'en-gb',
					},
					{
						name: 'Estonian - et',
						value: 'et',
					},
					{
						name: 'Farsi - fa',
						value: 'fa',
					},
					{
						name: 'Filipino - fil',
						value: 'fil',
					},
					{
						name: 'Finnish - fi',
						value: 'fi',
					},
					{
						name: 'French - fr',
						value: 'fr',
					},
					{
						name: 'French (Canada) - fr-ca',
						value: 'fr-ca',
					},
					{
						name: 'Galician - gl',
						value: 'gl',
					},
					{
						name: 'Georgian - ka',
						value: 'ka',
					},
					{
						name: 'German - de',
						value: 'de',
					},
					{
						name: 'Greek - el',
						value: 'el',
					},
					{
						name: 'Gujarati - gu',
						value: 'gu',
					},
					{
						name: 'Hebrew - iw',
						value: 'iw',
					},
					{
						name: 'Hindi - hi',
						value: 'hi',
					},
					{
						name: 'Hungarian - hu',
						value: 'hu',
					},
					{
						name: 'Icelandic - is',
						value: 'is',
					},
					{
						name: 'Indonesian - ID',
						value: 'id',
					},
					{
						name: 'Italian - it',
						value: 'it',
					},
					{
						name: 'Japanese - ja',
						value: 'ja',
					},
					{
						name: 'Kannada - kn',
						value: 'kn',
					},
					{
						name: 'Kazakh - kk',
						value: 'kk',
					},
					{
						name: 'Khmer - km',
						value: 'km',
					},
					{
						name: 'Korean - ko',
						value: 'ko',
					},
					{
						name: 'Kyrgyz - ky',
						value: 'ky',
					},
					{
						name: 'Lao - lo',
						value: 'lo',
					},
					{
						name: 'Latvian - lv',
						value: 'lv',
					},
					{
						name: 'Lithuanian - lt',
						value: 'lt',
					},
					{
						name: 'Macedonian - mk',
						value: 'mk',
					},
					{
						name: 'Malay - ms',
						value: 'ms',
					},
					{
						name: 'Malayalam - ml',
						value: 'ml',
					},
					{
						name: 'Marathi - mr',
						value: 'mr',
					},
					{
						name: 'Mongolian - mn',
						value: 'mn',
					},
					{
						name: 'Nepali - ne',
						value: 'ne',
					},
					{
						name: 'Norwegian - no',
						value: 'no',
					},
					{
						name: 'Polish - pl',
						value: 'pl',
					},
					{
						name: 'Portuguese - pt',
						value: 'pt',
					},
					{
						name: 'Portuguese (Brazil) - pt-br',
						value: 'pt-br',
					},
					{
						name: 'Portuguese (Portugal) - pt-pt',
						value: 'pt-pt',
					},
					{
						name: 'Punjabi - pa',
						value: 'pa',
					},
					{
						name: 'Romanian - ro',
						value: 'ro',
					},
					{
						name: 'Russian - ru',
						value: 'ru',
					},
					{
						name: 'Serbian - sr',
						value: 'sr',
					},
					{
						name: 'Sinhalese - si',
						value: 'si',
					},
					{
						name: 'Slovak - sk',
						value: 'sk',
					},
					{
						name: 'Slovenian - sl',
						value: 'sl',
					},
					{
						name: 'Spanish - es',
						value: 'es',
					},
					{
						name: 'Spanish (Latin America) - es-419',
						value: 'es-419',
					},
					{
						name: 'Swahili - sw',
						value: 'sw',
					},
					{
						name: 'Swedish - sv',
						value: 'sv',
					},
					{
						name: 'Tamil - ta',
						value: 'ta',
					},
					{
						name: 'Telugu - te',
						value: 'te',
					},
					{
						name: 'Thai - th',
						value: 'th',
					},
					{
						name: 'Turkish - tr',
						value: 'tr',
					},
					{
						name: 'Ukrainian - uk',
						value: 'uk',
					},
					{
						name: 'Urdu - ur',
						value: 'ur',
					},
					{
						name: 'Uzbek - uz',
						value: 'uz',
					},
					{
						name: 'Vietnamese - vi',
						value: 'vi',
					},
					{
						name: 'Zulu - zu',
						value: 'zu',
					},
				],
			},
			{
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google Maps search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France). Head to the Google countries page for a full list of supported Google countries.Parameter only affects Place Results API.",
				default: 'us',
				routing: {
					request: {
						qs: {
							gl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afghanistan - af',
						value: 'af',
					},
					{
						name: 'Albania - al',
						value: 'al',
					},
					{
						name: 'Algeria - dz',
						value: 'dz',
					},
					{
						name: 'American Samoa - as',
						value: 'as',
					},
					{
						name: 'Andorra - ad',
						value: 'ad',
					},
					{
						name: 'Angola - ao',
						value: 'ao',
					},
					{
						name: 'Anguilla - ai',
						value: 'ai',
					},
					{
						name: 'Antarctica - aq',
						value: 'aq',
					},
					{
						name: 'Antigua and Barbuda - ag',
						value: 'ag',
					},
					{
						name: 'Argentina - ar',
						value: 'ar',
					},
					{
						name: 'Armenia - am',
						value: 'am',
					},
					{
						name: 'Aruba - aw',
						value: 'aw',
					},
					{
						name: 'Australia - au',
						value: 'au',
					},
					{
						name: 'Austria - at',
						value: 'at',
					},
					{
						name: 'Azerbaijan - az',
						value: 'az',
					},
					{
						name: 'Bahamas - bs',
						value: 'bs',
					},
					{
						name: 'Bahrain - bh',
						value: 'bh',
					},
					{
						name: 'Bangladesh - bd',
						value: 'bd',
					},
					{
						name: 'Barbados - bb',
						value: 'bb',
					},
					{
						name: 'Belarus - by',
						value: 'by',
					},
					{
						name: 'Belgium - be',
						value: 'be',
					},
					{
						name: 'Belize - bz',
						value: 'bz',
					},
					{
						name: 'Benin - bj',
						value: 'bj',
					},
					{
						name: 'Bermuda - bm',
						value: 'bm',
					},
					{
						name: 'Bhutan - bt',
						value: 'bt',
					},
					{
						name: 'Bolivia - bo',
						value: 'bo',
					},
					{
						name: 'Bosnia and Herzegovina - ba',
						value: 'ba',
					},
					{
						name: 'Botswana - bw',
						value: 'bw',
					},
					{
						name: 'Bouvet Island - bv',
						value: 'bv',
					},
					{
						name: 'Brazil - br',
						value: 'br',
					},
					{
						name: 'British Indian Ocean Territory - io',
						value: 'io',
					},
					{
						name: 'Brunei Darussalam - bn',
						value: 'bn',
					},
					{
						name: 'Bulgaria - bg',
						value: 'bg',
					},
					{
						name: 'Burkina Faso - bf',
						value: 'bf',
					},
					{
						name: 'Burundi - bi',
						value: 'bi',
					},
					{
						name: 'Cambodia - kh',
						value: 'kh',
					},
					{
						name: 'Cameroon - cm',
						value: 'cm',
					},
					{
						name: 'Canada - ca',
						value: 'ca',
					},
					{
						name: 'Cape Verde - cv',
						value: 'cv',
					},
					{
						name: 'Cayman Islands - ky',
						value: 'ky',
					},
					{
						name: 'Central African Republic - cf',
						value: 'cf',
					},
					{
						name: 'Chad - td',
						value: 'td',
					},
					{
						name: 'Chile - cl',
						value: 'cl',
					},
					{
						name: 'China - cn',
						value: 'cn',
					},
					{
						name: 'Christmas Island - cx',
						value: 'cx',
					},
					{
						name: 'Cocos (Keeling) Islands - cc',
						value: 'cc',
					},
					{
						name: 'Colombia - co',
						value: 'co',
					},
					{
						name: 'Comoros - km',
						value: 'km',
					},
					{
						name: 'Congo - cg',
						value: 'cg',
					},
					{
						name: 'Congo, the Democratic Republic of the - cd',
						value: 'cd',
					},
					{
						name: 'Cook Islands - ck',
						value: 'ck',
					},
					{
						name: 'Costa Rica - cr',
						value: 'cr',
					},
					{
						name: "Cote D'ivoire - ci",
						value: 'ci',
					},
					{
						name: 'Croatia - hr',
						value: 'hr',
					},
					{
						name: 'Cuba - cu',
						value: 'cu',
					},
					{
						name: 'Cyprus - cy',
						value: 'cy',
					},
					{
						name: 'Czech Republic - cz',
						value: 'cz',
					},
					{
						name: 'Denmark - dk',
						value: 'dk',
					},
					{
						name: 'Djibouti - dj',
						value: 'dj',
					},
					{
						name: 'Dominica - dm',
						value: 'dm',
					},
					{
						name: 'Dominican Republic - do',
						value: 'do',
					},
					{
						name: 'Ecuador - ec',
						value: 'ec',
					},
					{
						name: 'Egypt - eg',
						value: 'eg',
					},
					{
						name: 'El Salvador - sv',
						value: 'sv',
					},
					{
						name: 'Equatorial Guinea - gq',
						value: 'gq',
					},
					{
						name: 'Eritrea - er',
						value: 'er',
					},
					{
						name: 'Estonia - ee',
						value: 'ee',
					},
					{
						name: 'Ethiopia - et',
						value: 'et',
					},
					{
						name: 'Falkland Islands (Malvinas) - fk',
						value: 'fk',
					},
					{
						name: 'Faroe Islands - fo',
						value: 'fo',
					},
					{
						name: 'Fiji - fj',
						value: 'fj',
					},
					{
						name: 'Finland - fi',
						value: 'fi',
					},
					{
						name: 'France - fr',
						value: 'fr',
					},
					{
						name: 'French Guiana - gf',
						value: 'gf',
					},
					{
						name: 'French Polynesia - pf',
						value: 'pf',
					},
					{
						name: 'French Southern Territories - tf',
						value: 'tf',
					},
					{
						name: 'Gabon - ga',
						value: 'ga',
					},
					{
						name: 'Gambia - gm',
						value: 'gm',
					},
					{
						name: 'Georgia - ge',
						value: 'ge',
					},
					{
						name: 'Germany - de',
						value: 'de',
					},
					{
						name: 'Ghana - gh',
						value: 'gh',
					},
					{
						name: 'Gibraltar - gi',
						value: 'gi',
					},
					{
						name: 'Greece - gr',
						value: 'gr',
					},
					{
						name: 'Greenland - gl',
						value: 'gl',
					},
					{
						name: 'Grenada - gd',
						value: 'gd',
					},
					{
						name: 'Guadeloupe - gp',
						value: 'gp',
					},
					{
						name: 'Guam - gu',
						value: 'gu',
					},
					{
						name: 'Guatemala - gt',
						value: 'gt',
					},
					{
						name: 'Guernsey - gg',
						value: 'gg',
					},
					{
						name: 'Guinea - gn',
						value: 'gn',
					},
					{
						name: 'Guinea-Bissau - gw',
						value: 'gw',
					},
					{
						name: 'Guyana - gy',
						value: 'gy',
					},
					{
						name: 'Haiti - ht',
						value: 'ht',
					},
					{
						name: 'Heard Island and Mcdonald Islands - hm',
						value: 'hm',
					},
					{
						name: 'Holy See (Vatican City State) - va',
						value: 'va',
					},
					{
						name: 'Honduras - hn',
						value: 'hn',
					},
					{
						name: 'Hong Kong - hk',
						value: 'hk',
					},
					{
						name: 'Hungary - hu',
						value: 'hu',
					},
					{
						name: 'Iceland - is',
						value: 'is',
					},
					{
						name: 'India - in',
						value: 'in',
					},
					{
						name: 'Indonesia - ID',
						value: 'id',
					},
					{
						name: 'Iran, Islamic Republic of - ir',
						value: 'ir',
					},
					{
						name: 'Iraq - iq',
						value: 'iq',
					},
					{
						name: 'Ireland - ie',
						value: 'ie',
					},
					{
						name: 'Isle of Man - im',
						value: 'im',
					},
					{
						name: 'Israel - il',
						value: 'il',
					},
					{
						name: 'Italy - it',
						value: 'it',
					},
					{
						name: 'Jersey - je',
						value: 'je',
					},
					{
						name: 'Jamaica - jm',
						value: 'jm',
					},
					{
						name: 'Japan - jp',
						value: 'jp',
					},
					{
						name: 'Jordan - jo',
						value: 'jo',
					},
					{
						name: 'Kazakhstan - kz',
						value: 'kz',
					},
					{
						name: 'Kenya - ke',
						value: 'ke',
					},
					{
						name: 'Kiribati - ki',
						value: 'ki',
					},
					{
						name: "Korea, Democratic People's Republic of - kp",
						value: 'kp',
					},
					{
						name: 'Korea, Republic of - kr',
						value: 'kr',
					},
					{
						name: 'Kuwait - kw',
						value: 'kw',
					},
					{
						name: 'Kyrgyzstan - kg',
						value: 'kg',
					},
					{
						name: "Lao People's Democratic Republic - la",
						value: 'la',
					},
					{
						name: 'Latvia - lv',
						value: 'lv',
					},
					{
						name: 'Lebanon - lb',
						value: 'lb',
					},
					{
						name: 'Lesotho - ls',
						value: 'ls',
					},
					{
						name: 'Liberia - lr',
						value: 'lr',
					},
					{
						name: 'Libyan Arab Jamahiriya - ly',
						value: 'ly',
					},
					{
						name: 'Liechtenstein - li',
						value: 'li',
					},
					{
						name: 'Lithuania - lt',
						value: 'lt',
					},
					{
						name: 'Luxembourg - lu',
						value: 'lu',
					},
					{
						name: 'Macao - mo',
						value: 'mo',
					},
					{
						name: 'Macedonia, the Former Yugosalv Republic of - mk',
						value: 'mk',
					},
					{
						name: 'Madagascar - mg',
						value: 'mg',
					},
					{
						name: 'Malawi - mw',
						value: 'mw',
					},
					{
						name: 'Malaysia - my',
						value: 'my',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Mali - ml',
						value: 'ml',
					},
					{
						name: 'Malta - mt',
						value: 'mt',
					},
					{
						name: 'Marshall Islands - mh',
						value: 'mh',
					},
					{
						name: 'Martinique - mq',
						value: 'mq',
					},
					{
						name: 'Mauritania - mr',
						value: 'mr',
					},
					{
						name: 'Mauritius - mu',
						value: 'mu',
					},
					{
						name: 'Mayotte - yt',
						value: 'yt',
					},
					{
						name: 'Mexico - mx',
						value: 'mx',
					},
					{
						name: 'Micronesia, Federated States of - fm',
						value: 'fm',
					},
					{
						name: 'Moldova, Republic of - md',
						value: 'md',
					},
					{
						name: 'Monaco - mc',
						value: 'mc',
					},
					{
						name: 'Mongolia - mn',
						value: 'mn',
					},
					{
						name: 'Montenegro - me',
						value: 'me',
					},
					{
						name: 'Montserrat - ms',
						value: 'ms',
					},
					{
						name: 'Morocco - ma',
						value: 'ma',
					},
					{
						name: 'Mozambique - mz',
						value: 'mz',
					},
					{
						name: 'Myanmar - mm',
						value: 'mm',
					},
					{
						name: 'Namibia - na',
						value: 'na',
					},
					{
						name: 'Nauru - nr',
						value: 'nr',
					},
					{
						name: 'Nepal - np',
						value: 'np',
					},
					{
						name: 'Netherlands - nl',
						value: 'nl',
					},
					{
						name: 'Netherlands Antilles - an',
						value: 'an',
					},
					{
						name: 'New Caledonia - nc',
						value: 'nc',
					},
					{
						name: 'New Zealand - nz',
						value: 'nz',
					},
					{
						name: 'Nicaragua - ni',
						value: 'ni',
					},
					{
						name: 'Niger - ne',
						value: 'ne',
					},
					{
						name: 'Nigeria - ng',
						value: 'ng',
					},
					{
						name: 'Niue - nu',
						value: 'nu',
					},
					{
						name: 'Norfolk Island - nf',
						value: 'nf',
					},
					{
						name: 'Northern Mariana Islands - mp',
						value: 'mp',
					},
					{
						name: 'Norway - no',
						value: 'no',
					},
					{
						name: 'Oman - om',
						value: 'om',
					},
					{
						name: 'Pakistan - pk',
						value: 'pk',
					},
					{
						name: 'Palau - pw',
						value: 'pw',
					},
					{
						name: 'Palestinian Territory, Occupied - ps',
						value: 'ps',
					},
					{
						name: 'Panama - pa',
						value: 'pa',
					},
					{
						name: 'Papua New Guinea - pg',
						value: 'pg',
					},
					{
						name: 'Paraguay - py',
						value: 'py',
					},
					{
						name: 'Peru - pe',
						value: 'pe',
					},
					{
						name: 'Philippines - ph',
						value: 'ph',
					},
					{
						name: 'Pitcairn - pn',
						value: 'pn',
					},
					{
						name: 'Poland - pl',
						value: 'pl',
					},
					{
						name: 'Portugal - pt',
						value: 'pt',
					},
					{
						name: 'Puerto Rico - pr',
						value: 'pr',
					},
					{
						name: 'Qatar - qa',
						value: 'qa',
					},
					{
						name: 'Reunion - re',
						value: 're',
					},
					{
						name: 'Romania - ro',
						value: 'ro',
					},
					{
						name: 'Russian Federation - ru',
						value: 'ru',
					},
					{
						name: 'Rwanda - rw',
						value: 'rw',
					},
					{
						name: 'Saint Helena - sh',
						value: 'sh',
					},
					{
						name: 'Saint Kitts and Nevis - kn',
						value: 'kn',
					},
					{
						name: 'Saint Lucia - lc',
						value: 'lc',
					},
					{
						name: 'Saint Pierre and Miquelon - pm',
						value: 'pm',
					},
					{
						name: 'Saint Vincent and the Grenadines - vc',
						value: 'vc',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'San Marino - sm',
						value: 'sm',
					},
					{
						name: 'Sao Tome and Principe - st',
						value: 'st',
					},
					{
						name: 'Saudi Arabia - sa',
						value: 'sa',
					},
					{
						name: 'Senegal - sn',
						value: 'sn',
					},
					{
						name: 'Serbia - rs',
						value: 'rs',
					},
					{
						name: 'Seychelles - sc',
						value: 'sc',
					},
					{
						name: 'Sierra Leone - sl',
						value: 'sl',
					},
					{
						name: 'Singapore - sg',
						value: 'sg',
					},
					{
						name: 'Slovakia - sk',
						value: 'sk',
					},
					{
						name: 'Slovenia - si',
						value: 'si',
					},
					{
						name: 'Solomon Islands - sb',
						value: 'sb',
					},
					{
						name: 'Somalia - so',
						value: 'so',
					},
					{
						name: 'South Africa - za',
						value: 'za',
					},
					{
						name: 'South Georgia and the South Sandwich Islands - gs',
						value: 'gs',
					},
					{
						name: 'Spain - es',
						value: 'es',
					},
					{
						name: 'Sri Lanka - lk',
						value: 'lk',
					},
					{
						name: 'Sudan - sd',
						value: 'sd',
					},
					{
						name: 'Suriname - sr',
						value: 'sr',
					},
					{
						name: 'Svalbard and Jan Mayen - sj',
						value: 'sj',
					},
					{
						name: 'Swaziland - sz',
						value: 'sz',
					},
					{
						name: 'Sweden - se',
						value: 'se',
					},
					{
						name: 'Switzerland - ch',
						value: 'ch',
					},
					{
						name: 'Syrian Arab Republic - sy',
						value: 'sy',
					},
					{
						name: 'Taiwan, Province of China - tw',
						value: 'tw',
					},
					{
						name: 'Tajikistan - tj',
						value: 'tj',
					},
					{
						name: 'Tanzania, United Republic of - tz',
						value: 'tz',
					},
					{
						name: 'Thailand - th',
						value: 'th',
					},
					{
						name: 'Timor-Leste - tl',
						value: 'tl',
					},
					{
						name: 'Togo - tg',
						value: 'tg',
					},
					{
						name: 'Tokelau - tk',
						value: 'tk',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Trinidad and Tobago - tt',
						value: 'tt',
					},
					{
						name: 'Tunisia - tn',
						value: 'tn',
					},
					{
						name: 'Turkiye - tr',
						value: 'tr',
					},
					{
						name: 'Turkmenistan - tm',
						value: 'tm',
					},
					{
						name: 'Turks and Caicos Islands - tc',
						value: 'tc',
					},
					{
						name: 'Tuvalu - tv',
						value: 'tv',
					},
					{
						name: 'Uganda - ug',
						value: 'ug',
					},
					{
						name: 'Ukraine - ua',
						value: 'ua',
					},
					{
						name: 'United Arab Emirates - ae',
						value: 'ae',
					},
					{
						name: 'United Kingdom - uk',
						value: 'uk',
					},
					{
						name: 'United Kingdom - gb',
						value: 'gb',
					},
					{
						name: 'United States - us',
						value: 'us',
					},
					{
						name: 'United States Minor Outlying Islands - um',
						value: 'um',
					},
					{
						name: 'Uruguay - uy',
						value: 'uy',
					},
					{
						name: 'Uzbekistan - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Venezuela - ve',
						value: 've',
					},
					{
						name: 'Viet Nam - vn',
						value: 'vn',
					},
					{
						name: 'Virgin Islands, British - vg',
						value: 'vg',
					},
					{
						name: 'Virgin Islands, U.S. - vi',
						value: 'vi',
					},
					{
						name: 'Wallis and Futuna - wf',
						value: 'wf',
					},
					{
						name: 'Western Sahara - eh',
						value: 'eh',
					},
					{
						name: 'Yemen - ye',
						value: 'ye',
					},
					{
						name: 'Zambia - zm',
						value: 'zm',
					},
					{
						name: 'Zimbabwe - zw',
						value: 'zw',
					},
				],
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
					'Parameter defines the unique reference to a place on a Google Map. Place IDs are available for most locations, including businesses, landmarks, parks, and intersections. You can find the place_id using our Google Maps API.You can read more about Place IDs here.place_id can be used without any other optional parameter.',
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
