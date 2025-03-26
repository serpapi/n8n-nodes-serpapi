/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleLensFields: INodeProperties[] = [
	{
		displayName: '`url` Image URL',
		name: 'url',
		description: 'Parameter defines the URL of an image to perform the Google Lens search',
		default: '',
		routing: {
			request: {
				qs: {
					url: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['google_lens'],
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
				resource: ['google_lens'],
			},
		},
		options: [
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Lens search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
						name: 'Akan - ak',
						value: 'ak',
					},
					{
						name: 'Albanian - sq',
						value: 'sq',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
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
						name: 'Bemba - bem',
						value: 'bem',
					},
					{
						name: 'Bengali - bn',
						value: 'bn',
					},
					{
						name: 'Bihari - bh',
						value: 'bh',
					},
					{
						name: 'Bork, bork, bork! - xx-bork',
						value: 'xx-bork',
					},
					{
						name: 'Bosnian - bs',
						value: 'bs',
					},
					{
						name: 'Breton - br',
						value: 'br',
					},
					{
						name: 'Bulgarian - bg',
						value: 'bg',
					},
					{
						name: 'Bhutanese - bt',
						value: 'bt',
					},
					{
						name: 'Cambodian - km',
						value: 'km',
					},
					{
						name: 'Catalan - ca',
						value: 'ca',
					},
					{
						name: 'Cherokee - chr',
						value: 'chr',
					},
					{
						name: 'Chichewa - ny',
						value: 'ny',
					},
					{
						name: 'Chinese (Simplified) - zh-cn',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Traditional) - zh-tw',
						value: 'zh-tw',
					},
					{
						name: 'Corsican - co',
						value: 'co',
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
						name: 'Elmer Fudd - xx-elmer',
						value: 'xx-elmer',
					},
					{
						name: 'English - en',
						value: 'en',
					},
					{
						name: 'Esperanto - eo',
						value: 'eo',
					},
					{
						name: 'Estonian - et',
						value: 'et',
					},
					{
						name: 'Ewe - ee',
						value: 'ee',
					},
					{
						name: 'Faroese - fo',
						value: 'fo',
					},
					{
						name: 'Filipino - tl',
						value: 'tl',
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
						name: 'Frisian - fy',
						value: 'fy',
					},
					{
						name: 'Ga - gaa',
						value: 'gaa',
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
						name: 'Greenlandic - kl',
						value: 'kl',
					},
					{
						name: 'Guarani - gn',
						value: 'gn',
					},
					{
						name: 'Gujarati - gu',
						value: 'gu',
					},
					{
						name: 'Hacker - xx-hacker',
						value: 'xx-hacker',
					},
					{
						name: 'Haitian Creole - ht',
						value: 'ht',
					},
					{
						name: 'Hausa - ha',
						value: 'ha',
					},
					{
						name: 'Hawaiian - haw',
						value: 'haw',
					},
					{
						name: 'Hebrew - iw',
						value: 'iw',
					},
					{
						name: 'Hebrew - he',
						value: 'he',
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
						name: 'Igbo - ig',
						value: 'ig',
					},
					{
						name: 'Indonesian - id',
						value: 'id',
					},
					{
						name: 'Interlingua - ia',
						value: 'ia',
					},
					{
						name: 'Irish - ga',
						value: 'ga',
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
						name: 'Javanese - jw',
						value: 'jw',
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
						name: 'Kinyarwanda - rw',
						value: 'rw',
					},
					{
						name: 'Kirundi - rn',
						value: 'rn',
					},
					{
						name: 'Klingon - xx-klingon',
						value: 'xx-klingon',
					},
					{
						name: 'Kongo - kg',
						value: 'kg',
					},
					{
						name: 'Korean - ko',
						value: 'ko',
					},
					{
						name: 'Krio (Sierra Leone) - kri',
						value: 'kri',
					},
					{
						name: 'Kurdish - ku',
						value: 'ku',
					},
					{
						name: 'Kurdish (Soranî) - ckb',
						value: 'ckb',
					},
					{
						name: 'Kyrgyz - ky',
						value: 'ky',
					},
					{
						name: 'Laothian - lo',
						value: 'lo',
					},
					{
						name: 'Latin - la',
						value: 'la',
					},
					{
						name: 'Latvian - lv',
						value: 'lv',
					},
					{
						name: 'Lingala - ln',
						value: 'ln',
					},
					{
						name: 'Lithuanian - lt',
						value: 'lt',
					},
					{
						name: 'Lozi - loz',
						value: 'loz',
					},
					{
						name: 'Luganda - lg',
						value: 'lg',
					},
					{
						name: 'Luo - ach',
						value: 'ach',
					},
					{
						name: 'Macedonian - mk',
						value: 'mk',
					},
					{
						name: 'Malagasy - mg',
						value: 'mg',
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
						name: 'Maltese - mt',
						value: 'mt',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Maori - mi',
						value: 'mi',
					},
					{
						name: 'Marathi - mr',
						value: 'mr',
					},
					{
						name: 'Mauritian Creole - mfe',
						value: 'mfe',
					},
					{
						name: 'Moldavian - mo',
						value: 'mo',
					},
					{
						name: 'Mongolian - mn',
						value: 'mn',
					},
					{
						name: 'Montenegrin - sr-me',
						value: 'sr-me',
					},
					{
						name: 'Myanmar - my',
						value: 'my',
					},
					{
						name: 'Nepali - ne',
						value: 'ne',
					},
					{
						name: 'Nigerian Pidgin - pcm',
						value: 'pcm',
					},
					{
						name: 'Northern Sotho - nso',
						value: 'nso',
					},
					{
						name: 'Norwegian - no',
						value: 'no',
					},
					{
						name: 'Norwegian (Nynorsk) - nn',
						value: 'nn',
					},
					{
						name: 'Occitan - oc',
						value: 'oc',
					},
					{
						name: 'Oriya - or',
						value: 'or',
					},
					{
						name: 'Oromo - om',
						value: 'om',
					},
					{
						name: 'Pashto - ps',
						value: 'ps',
					},
					{
						name: 'Persian - fa',
						value: 'fa',
					},
					{
						name: 'Pirate - xx-pirate',
						value: 'xx-pirate',
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
						name: 'Quechua - qu',
						value: 'qu',
					},
					{
						name: 'Romanian - ro',
						value: 'ro',
					},
					{
						name: 'Romansh - rm',
						value: 'rm',
					},
					{
						name: 'Runyakitara - nyn',
						value: 'nyn',
					},
					{
						name: 'Russian - ru',
						value: 'ru',
					},
					{
						name: 'Scots Gaelic - gd',
						value: 'gd',
					},
					{
						name: 'Serbian - sr',
						value: 'sr',
					},
					{
						name: 'Serbo-Croatian - sh',
						value: 'sh',
					},
					{
						name: 'Sesotho - st',
						value: 'st',
					},
					{
						name: 'Setswana - tn',
						value: 'tn',
					},
					{
						name: 'Seychellois Creole - crs',
						value: 'crs',
					},
					{
						name: 'Shona - sn',
						value: 'sn',
					},
					{
						name: 'Sindhi - sd',
						value: 'sd',
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
						name: 'Somali - so',
						value: 'so',
					},
					{
						name: 'Spanish - es',
						value: 'es',
					},
					{
						name: 'Spanish (Latin American) - es-419',
						value: 'es-419',
					},
					{
						name: 'Sundanese - su',
						value: 'su',
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
						name: 'Tajik - tg',
						value: 'tg',
					},
					{
						name: 'Tamil - ta',
						value: 'ta',
					},
					{
						name: 'Tatar - tt',
						value: 'tt',
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
						name: 'Tigrinya - ti',
						value: 'ti',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Tshiluba - lua',
						value: 'lua',
					},
					{
						name: 'Tumbuka - tum',
						value: 'tum',
					},
					{
						name: 'Turkish - tr',
						value: 'tr',
					},
					{
						name: 'Turkmen - tk',
						value: 'tk',
					},
					{
						name: 'Twi - tw',
						value: 'tw',
					},
					{
						name: 'Uighur - ug',
						value: 'ug',
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
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Vietnamese - vi',
						value: 'vi',
					},
					{
						name: 'Welsh - cy',
						value: 'cy',
					},
					{
						name: 'Wolof - wo',
						value: 'wo',
					},
					{
						name: 'Xhosa - xh',
						value: 'xh',
					},
					{
						name: 'Yiddish - yi',
						value: 'yi',
					},
					{
						name: 'Yoruba - yo',
						value: 'yo',
					},
					{
						name: 'Zulu - zu',
						value: 'zu',
					},
				],
			},
			{
				displayName: '`country` Country',
				name: 'country',
				description:
					"Parameter defines the specific country location to use for the Google Lens search. It's a two-letter country code. (e.g., us for United States, fr for France, or de for Germany). Head to the Google Lens countries page for a full list of supported Google Lens countries.",
				default: 'us',
				routing: {
					request: {
						qs: {
							country: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'United Arab Emirates - ae',
						value: 'ae',
					},
					{
						name: 'Afghanistan - af',
						value: 'af',
					},
					{
						name: 'Antigua and Barbuda - ag',
						value: 'ag',
					},
					{
						name: 'Anguilla - ai',
						value: 'ai',
					},
					{
						name: 'Albania - al',
						value: 'al',
					},
					{
						name: 'Armenia - am',
						value: 'am',
					},
					{
						name: 'Angola - ao',
						value: 'ao',
					},
					{
						name: 'Argentina - ar',
						value: 'ar',
					},
					{
						name: 'Austria - at',
						value: 'at',
					},
					{
						name: 'Australia - au',
						value: 'au',
					},
					{
						name: 'Aruba - aw',
						value: 'aw',
					},
					{
						name: 'Azerbaijan - az',
						value: 'az',
					},
					{
						name: 'Bosnia and Herzegovina - ba',
						value: 'ba',
					},
					{
						name: 'Barbados - bb',
						value: 'bb',
					},
					{
						name: 'Bangladesh - bd',
						value: 'bd',
					},
					{
						name: 'Belgium - be',
						value: 'be',
					},
					{
						name: 'Bulgaria - bg',
						value: 'bg',
					},
					{
						name: 'Bahrain - bh',
						value: 'bh',
					},
					{
						name: 'Benin - bj',
						value: 'bj',
					},
					{
						name: 'Brunei Darussalam - bn',
						value: 'bn',
					},
					{
						name: 'Bolivia - bo',
						value: 'bo',
					},
					{
						name: 'Brazil - br',
						value: 'br',
					},
					{
						name: 'Bahamas - bs',
						value: 'bs',
					},
					{
						name: 'Botswana - bw',
						value: 'bw',
					},
					{
						name: 'Belarus - by',
						value: 'by',
					},
					{
						name: 'Belize - bz',
						value: 'bz',
					},
					{
						name: 'Canada - ca',
						value: 'ca',
					},
					{
						name: 'Congo - cg',
						value: 'cg',
					},
					{
						name: 'Switzerland - ch',
						value: 'ch',
					},
					{
						name: 'Ivory Coast - ci',
						value: 'ci',
					},
					{
						name: 'Chile - cl',
						value: 'cl',
					},
					{
						name: 'Cameroon - cm',
						value: 'cm',
					},
					{
						name: 'China - cn',
						value: 'cn',
					},
					{
						name: 'Colombia - co',
						value: 'co',
					},
					{
						name: 'Costa Rica - cr',
						value: 'cr',
					},
					{
						name: 'Cape Verde - cv',
						value: 'cv',
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
						name: 'Germany - de',
						value: 'de',
					},
					{
						name: 'Denmark - dk',
						value: 'dk',
					},
					{
						name: 'Dominican Republic - do',
						value: 'do',
					},
					{
						name: 'Algeria - dz',
						value: 'dz',
					},
					{
						name: 'Ecuador - ec',
						value: 'ec',
					},
					{
						name: 'Estonia - ee',
						value: 'ee',
					},
					{
						name: 'Egypt - eg',
						value: 'eg',
					},
					{
						name: 'Spain - es',
						value: 'es',
					},
					{
						name: 'Ethiopia - et',
						value: 'et',
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
						name: 'United Kingdom - gb',
						value: 'gb',
					},
					{
						name: 'Georgia - ge',
						value: 'ge',
					},
					{
						name: 'Ghana - gh',
						value: 'gh',
					},
					{
						name: 'Guadeloupe - gp',
						value: 'gp',
					},
					{
						name: 'Greece - gr',
						value: 'gr',
					},
					{
						name: 'Guatemala - gt',
						value: 'gt',
					},
					{
						name: 'Guyana - gy',
						value: 'gy',
					},
					{
						name: 'Hong Kong - hk',
						value: 'hk',
					},
					{
						name: 'Honduras - hn',
						value: 'hn',
					},
					{
						name: 'Croatia (Hrvatska) - hr',
						value: 'hr',
					},
					{
						name: 'Haiti - ht',
						value: 'ht',
					},
					{
						name: 'Hungary - hu',
						value: 'hu',
					},
					{
						name: 'Indonesia - id',
						value: 'id',
					},
					{
						name: 'Ireland - ie',
						value: 'ie',
					},
					{
						name: 'Israel - il',
						value: 'il',
					},
					{
						name: 'India - in',
						value: 'in',
					},
					{
						name: 'Iraq - iq',
						value: 'iq',
					},
					{
						name: 'Iran (Islamic Republic of) - ir',
						value: 'ir',
					},
					{
						name: 'Iceland - is',
						value: 'is',
					},
					{
						name: 'Italy - it',
						value: 'it',
					},
					{
						name: 'Jamaica - jm',
						value: 'jm',
					},
					{
						name: 'Jordan - jo',
						value: 'jo',
					},
					{
						name: 'Japan - jp',
						value: 'jp',
					},
					{
						name: 'Kenya - ke',
						value: 'ke',
					},
					{
						name: 'Kyrgyzstan - kg',
						value: 'kg',
					},
					{
						name: 'Cambodia - kh',
						value: 'kh',
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
						name: 'Cayman Islands - ky',
						value: 'ky',
					},
					{
						name: 'Kazakhstan - kz',
						value: 'kz',
					},
					{
						name: "Lao People's Democratic Republic - la",
						value: 'la',
					},
					{
						name: 'Lebanon - lb',
						value: 'lb',
					},
					{
						name: 'Saint Lucia - lc',
						value: 'lc',
					},
					{
						name: 'Sri Lanka - lk',
						value: 'lk',
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
						name: 'Latvia - lv',
						value: 'lv',
					},
					{
						name: 'Libyan Arab Jamahiriya - ly',
						value: 'ly',
					},
					{
						name: 'Morocco - ma',
						value: 'ma',
					},
					{
						name: 'Moldova, Republic of - md',
						value: 'md',
					},
					{
						name: 'Montenegro - me',
						value: 'me',
					},
					{
						name: 'Madagascar - mg',
						value: 'mg',
					},
					{
						name: 'Macedonia - mk',
						value: 'mk',
					},
					{
						name: 'Mali - ml',
						value: 'ml',
					},
					{
						name: 'Myanmar - mm',
						value: 'mm',
					},
					{
						name: 'Mongolia - mn',
						value: 'mn',
					},
					{
						name: 'Macau - mo',
						value: 'mo',
					},
					{
						name: 'Martinique - mq',
						value: 'mq',
					},
					{
						name: 'Malta - mt',
						value: 'mt',
					},
					{
						name: 'Mauritius - mu',
						value: 'mu',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Mexico - mx',
						value: 'mx',
					},
					{
						name: 'Malaysia - my',
						value: 'my',
					},
					{
						name: 'Mozambique - mz',
						value: 'mz',
					},
					{
						name: 'Namibia - na',
						value: 'na',
					},
					{
						name: 'New Caledonia - nc',
						value: 'nc',
					},
					{
						name: 'Nigeria - ng',
						value: 'ng',
					},
					{
						name: 'Nicaragua - ni',
						value: 'ni',
					},
					{
						name: 'Netherlands - nl',
						value: 'nl',
					},
					{
						name: 'Norway - no',
						value: 'no',
					},
					{
						name: 'Nepal - np',
						value: 'np',
					},
					{
						name: 'New Zealand - nz',
						value: 'nz',
					},
					{
						name: 'Oman - om',
						value: 'om',
					},
					{
						name: 'Panama - pa',
						value: 'pa',
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
						name: 'Pakistan - pk',
						value: 'pk',
					},
					{
						name: 'Poland - pl',
						value: 'pl',
					},
					{
						name: 'Puerto Rico - pr',
						value: 'pr',
					},
					{
						name: 'Palestine - ps',
						value: 'ps',
					},
					{
						name: 'Portugal - pt',
						value: 'pt',
					},
					{
						name: 'Paraguay - py',
						value: 'py',
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
						name: 'Serbia - rs',
						value: 'rs',
					},
					{
						name: 'Russian Federation - ru',
						value: 'ru',
					},
					{
						name: 'Saudi Arabia - sa',
						value: 'sa',
					},
					{
						name: 'Seychelles - sc',
						value: 'sc',
					},
					{
						name: 'Sudan - sd',
						value: 'sd',
					},
					{
						name: 'Sweden - se',
						value: 'se',
					},
					{
						name: 'Singapore - sg',
						value: 'sg',
					},
					{
						name: 'Slovenia - si',
						value: 'si',
					},
					{
						name: 'Slovakia - sk',
						value: 'sk',
					},
					{
						name: 'Senegal - sn',
						value: 'sn',
					},
					{
						name: 'Suriname - sr',
						value: 'sr',
					},
					{
						name: 'El Salvador - sv',
						value: 'sv',
					},
					{
						name: 'Syrian Arab Republic - sy',
						value: 'sy',
					},
					{
						name: 'Thailand - th',
						value: 'th',
					},
					{
						name: 'Tunisia - tn',
						value: 'tn',
					},
					{
						name: 'Turkey - tr',
						value: 'tr',
					},
					{
						name: 'Trinidad and Tobago - tt',
						value: 'tt',
					},
					{
						name: 'Taiwan - tw',
						value: 'tw',
					},
					{
						name: 'Tanzania, United Republic of - tz',
						value: 'tz',
					},
					{
						name: 'Ukraine - ua',
						value: 'ua',
					},
					{
						name: 'Uganda - ug',
						value: 'ug',
					},
					{
						name: 'United States - us',
						value: 'us',
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
						name: 'Saint Vincent and the Grenadines - vc',
						value: 'vc',
					},
					{
						name: 'Venezuela - ve',
						value: 've',
					},
					{
						name: 'Vietnam - vn',
						value: 'vn',
					},
					{
						name: 'Kosovo - xk',
						value: 'xk',
					},
					{
						name: 'Yemen - ye',
						value: 'ye',
					},
					{
						name: 'South Africa - za',
						value: 'za',
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
				displayName: '`page_token` Page Token',
				name: 'page_token',
				description:
					'Parameter defines the token needed to retrieve results from a specific tab in Google Lens. The token is generated by SerpApi using our Google Lens API.',
				default: '',
				routing: {
					request: {
						qs: {
							page_token: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
