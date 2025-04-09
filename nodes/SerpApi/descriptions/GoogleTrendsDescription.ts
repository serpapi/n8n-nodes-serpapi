import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleTrendsFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query or queries you want to search. You can use anything that you would use in a regular Google Trends search. The maximum number of queries per search is 5 (this only applies to "Interest over time" and "Compared breakdown by region" data_type, other types of data will only accept 1 query per search).When passing multiple queries you need to use a comma (,) to separate them (e.g. coffee,pizza,dark chocolate,/m/027lnzs,bread).Query can be a "Search term" (e.g. World Cup, Eminem, iPhone, etc.) or a "Topic" (e.g. /m/0663v, /m/027lnzs, /g/11mw8j71m4, etc.). Queries that are "Topics" are encoded. To retrieve these values you can use our Google Trends Autocomplete API. Maximum length for each query is 100 characters.',
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
				resource: ['google_trends'],
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
				resource: ['google_trends'],
			},
		},
		options: [
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Trends search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
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
				displayName: '`geo` Location',
				name: 'geo',
				description:
					'Parameter defines the location from where you want the search to originate. It defaults to Worldwide (activated when the value of geo parameter is not set or empty). Head to the Google Trends Locations for a full list of supported Google Trends locations.',
				default: '',
				routing: {
					request: {
						qs: {
							geo: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Worldwide',
						value: '',
					},
					{
						name: 'Afghanistan',
						value: 'AF',
					},
					{
						name: 'Badakhshan',
						value: 'AF-BDS',
					},
					{
						name: 'Badghis',
						value: 'AF-BDG',
					},
					{
						name: 'Baghlan',
						value: 'AF-BGL',
					},
					{
						name: 'Balkh',
						value: 'AF-BAL',
					},
					{
						name: 'Bamiyan',
						value: 'AF-BAM',
					},
					{
						name: 'Daykundi',
						value: 'AF-DAY',
					},
					{
						name: 'Farah',
						value: 'AF-FRA',
					},
					{
						name: 'Faryab',
						value: 'AF-FYB',
					},
					{
						name: 'Ghazni',
						value: 'AF-GHA',
					},
					{
						name: 'Ghor',
						value: 'AF-GHO',
					},
					{
						name: 'Helmand',
						value: 'AF-HEL',
					},
					{
						name: 'Herat',
						value: 'AF-HER',
					},
					{
						name: 'Jowzjan',
						value: 'AF-JOW',
					},
					{
						name: 'Kabul',
						value: 'AF-KAB',
					},
					{
						name: 'Kandahar',
						value: 'AF-KAN',
					},
					{
						name: 'Kapisa',
						value: 'AF-KAP',
					},
					{
						name: 'Khost',
						value: 'AF-KHO',
					},
					{
						name: 'Kunar',
						value: 'AF-KNR',
					},
					{
						name: 'Kunduz',
						value: 'AF-KDZ',
					},
					{
						name: 'Laghman',
						value: 'AF-LAG',
					},
					{
						name: 'Logar',
						value: 'AF-LOG',
					},
					{
						name: 'Nangarhar',
						value: 'AF-NAN',
					},
					{
						name: 'Nimruz',
						value: 'AF-NIM',
					},
					{
						name: 'Nuristan',
						value: 'AF-NUR',
					},
					{
						name: 'Oruzgan',
						value: 'AF-URU',
					},
					{
						name: 'Paktia',
						value: 'AF-PIA',
					},
					{
						name: 'Paktika',
						value: 'AF-PKA',
					},
					{
						name: 'Panjshir',
						value: 'AF-PAN',
					},
					{
						name: 'Parvan',
						value: 'AF-PAR',
					},
					{
						name: 'Samangan',
						value: 'AF-SAM',
					},
					{
						name: 'Sare Pol',
						value: 'AF-SAR',
					},
					{
						name: 'Takhar',
						value: 'AF-TAK',
					},
					{
						name: 'Wardak',
						value: 'AF-WAR',
					},
					{
						name: 'Zabul',
						value: 'AF-ZAB',
					},
					{
						name: 'Åland Islands',
						value: 'AX',
					},
					{
						name: 'Albania',
						value: 'AL',
					},
					{
						name: 'Berat',
						value: 'AL-01',
					},
					{
						name: 'Dibër County',
						value: 'AL-09',
					},
					{
						name: 'Durrës',
						value: 'AL-02',
					},
					{
						name: 'Elbasan',
						value: 'AL-03',
					},
					{
						name: 'Fier',
						value: 'AL-04',
					},
					{
						name: 'Gjirokastra',
						value: 'AL-05',
					},
					{
						name: 'Korca',
						value: 'AL-06',
					},
					{
						name: 'Kukës County',
						value: 'AL-07',
					},
					{
						name: 'Lezhë County',
						value: 'AL-08',
					},
					{
						name: 'Shkodër County',
						value: 'AL-10',
					},
					{
						name: 'Tirana',
						value: 'AL-11',
					},
					{
						name: 'Vlora',
						value: 'AL-12',
					},
					{
						name: 'Algeria',
						value: 'DZ',
					},
					{
						name: 'Adrar Province',
						value: 'DZ-01',
					},
					{
						name: 'Aïn Defla Province',
						value: 'DZ-44',
					},
					{
						name: 'Aïn Témouchent Province',
						value: 'DZ-46',
					},
					{
						name: 'Algiers Province',
						value: 'DZ-16',
					},
					{
						name: 'Annaba Province',
						value: 'DZ-23',
					},
					{
						name: 'Batna Province',
						value: 'DZ-05',
					},
					{
						name: 'Béchar',
						value: 'DZ-08',
					},
					{
						name: 'Béjaïa',
						value: 'DZ-06',
					},
					{
						name: 'Biskra',
						value: 'DZ-07',
					},
					{
						name: 'Blida Province',
						value: 'DZ-09',
					},
					{
						name: 'Bordj Bou Arreridj',
						value: 'DZ-34',
					},
					{
						name: 'Bouïra Province',
						value: 'DZ-10',
					},
					{
						name: 'Boumerdès Province',
						value: 'DZ-35',
					},
					{
						name: 'Chlef Province',
						value: 'DZ-02',
					},
					{
						name: 'Constantine',
						value: 'DZ-25',
					},
					{
						name: 'Djelfa Province',
						value: 'DZ-17',
					},
					{
						name: 'El Bayadh Province',
						value: 'DZ-32',
					},
					{
						name: 'El Oued Province',
						value: 'DZ-39',
					},
					{
						name: 'El Taref Province',
						value: 'DZ-36',
					},
					{
						name: 'Ghardaia Province',
						value: 'DZ-47',
					},
					{
						name: 'Guelma Province',
						value: 'DZ-24',
					},
					{
						name: 'Illizi Province',
						value: 'DZ-33',
					},
					{
						name: 'Jijel Province',
						value: 'DZ-18',
					},
					{
						name: 'Khenchela Province',
						value: 'DZ-40',
					},
					{
						name: 'Laghouat Province',
						value: 'DZ-03',
					},
					{
						name: "M'Sila Province",
						value: 'DZ-28',
					},
					{
						name: 'Mascara Province',
						value: 'DZ-29',
					},
					{
						name: 'Médéa Province',
						value: 'DZ-26',
					},
					{
						name: 'Mila Province',
						value: 'DZ-43',
					},
					{
						name: 'Mostaganem Province',
						value: 'DZ-27',
					},
					{
						name: 'Naâma Province',
						value: 'DZ-45',
					},
					{
						name: 'Oran Province',
						value: 'DZ-31',
					},
					{
						name: 'Ouargla Province',
						value: 'DZ-30',
					},
					{
						name: 'Oum El Bouaghi Province',
						value: 'DZ-04',
					},
					{
						name: 'Province of Tamanrasset',
						value: 'DZ-11',
					},
					{
						name: 'Relizane Province',
						value: 'DZ-48',
					},
					{
						name: 'Saïda Province',
						value: 'DZ-20',
					},
					{
						name: 'Setif',
						value: 'DZ-19',
					},
					{
						name: 'Sidi-Bel-Abbes',
						value: 'DZ-22',
					},
					{
						name: 'Skikda Province',
						value: 'DZ-21',
					},
					{
						name: 'Souk Ahras Province',
						value: 'DZ-41',
					},
					{
						name: 'Tebessa',
						value: 'DZ-12',
					},
					{
						name: 'Tiaret Province',
						value: 'DZ-14',
					},
					{
						name: 'Tindouf Province',
						value: 'DZ-37',
					},
					{
						name: 'Tipaza Province',
						value: 'DZ-42',
					},
					{
						name: 'Tissemsilt',
						value: 'DZ-38',
					},
					{
						name: 'Tizi Ouzou Province',
						value: 'DZ-15',
					},
					{
						name: 'Tlemcen Province',
						value: 'DZ-13',
					},
					{
						name: 'American Samoa',
						value: 'AS',
					},
					{
						name: 'Andorra',
						value: 'AD',
					},
					{
						name: 'Andorra la Vella',
						value: 'AD-07',
					},
					{
						name: 'Canillo',
						value: 'AD-02',
					},
					{
						name: 'Encamp',
						value: 'AD-03',
					},
					{
						name: 'Escaldes-Engordany',
						value: 'AD-08',
					},
					{
						name: 'La Massana',
						value: 'AD-04',
					},
					{
						name: 'Ordino',
						value: 'AD-05',
					},
					{
						name: 'Sant Julià de Lòria',
						value: 'AD-06',
					},
					{
						name: 'Angola',
						value: 'AO',
					},
					{
						name: 'Bengo Province',
						value: 'AO-BGO',
					},
					{
						name: 'Benguela Province',
						value: 'AO-BGU',
					},
					{
						name: 'Bié Province',
						value: 'AO-BIE',
					},
					{
						name: 'Cabinda Province',
						value: 'AO-CAB',
					},
					{
						name: 'Cuando Cubango Province',
						value: 'AO-CCU',
					},
					{
						name: 'Cuanza Norte Province',
						value: 'AO-CNO',
					},
					{
						name: 'Cuanza Sul',
						value: 'AO-CUS',
					},
					{
						name: 'Cunene',
						value: 'AO-CNN',
					},
					{
						name: 'Huambo Province',
						value: 'AO-HUA',
					},
					{
						name: 'Huila Province',
						value: 'AO-HUI',
					},
					{
						name: 'Luanda Province',
						value: 'AO-LUA',
					},
					{
						name: 'Lunda Norte',
						value: 'AO-LNO',
					},
					{
						name: 'Lunda Sul Province',
						value: 'AO-LSU',
					},
					{
						name: 'Malanje Province',
						value: 'AO-MAL',
					},
					{
						name: 'Moxico Province',
						value: 'AO-MOX',
					},
					{
						name: 'Namibe Province',
						value: 'AO-NAM',
					},
					{
						name: 'Uíge Province',
						value: 'AO-UIG',
					},
					{
						name: 'Zaire Province',
						value: 'AO-ZAI',
					},
					{
						name: 'Anguilla',
						value: 'AI',
					},
					{
						name: 'Antarctica',
						value: 'AQ',
					},
					{
						name: 'Antigua & Barbuda',
						value: 'AG',
					},
					{
						name: 'Barbuda',
						value: 'AG-10',
					},
					{
						name: 'Redonda',
						value: 'AG-11',
					},
					{
						name: 'Saint George',
						value: 'AG-03',
					},
					{
						name: 'Saint John',
						value: 'AG-04',
					},
					{
						name: 'Saint Mary',
						value: 'AG-05',
					},
					{
						name: 'Saint Paul',
						value: 'AG-06',
					},
					{
						name: 'Saint Peter',
						value: 'AG-07',
					},
					{
						name: 'Saint Philip',
						value: 'AG-08',
					},
					{
						name: 'Argentina',
						value: 'AR',
					},
					{
						name: 'Autonomous City of Buenos Aires',
						value: 'AR-C',
					},
					{
						name: 'Buenos Aires Province',
						value: 'AR-B',
					},
					{
						name: 'Catamarca Province',
						value: 'AR-K',
					},
					{
						name: 'Chaco Province',
						value: 'AR-H',
					},
					{
						name: 'Chubut Province',
						value: 'AR-U',
					},
					{
						name: 'Cordoba',
						value: 'AR-X',
					},
					{
						name: 'Corrientes Province',
						value: 'AR-W',
					},
					{
						name: 'Entre Rios',
						value: 'AR-E',
					},
					{
						name: 'Formosa Province',
						value: 'AR-P',
					},
					{
						name: 'Jujuy',
						value: 'AR-Y',
					},
					{
						name: 'La Pampa Province',
						value: 'AR-L',
					},
					{
						name: 'La Rioja Province',
						value: 'AR-F',
					},
					{
						name: 'Mendoza Province',
						value: 'AR-M',
					},
					{
						name: 'Misiones Province',
						value: 'AR-N',
					},
					{
						name: 'Neuquen',
						value: 'AR-Q',
					},
					{
						name: 'Río Negro',
						value: 'AR-R',
					},
					{
						name: 'Salta Province',
						value: 'AR-A',
					},
					{
						name: 'San Juan Province',
						value: 'AR-J',
					},
					{
						name: 'San Luis Province',
						value: 'AR-D',
					},
					{
						name: 'Santa Cruz Province',
						value: 'AR-Z',
					},
					{
						name: 'Santa Fe Province',
						value: 'AR-S',
					},
					{
						name: 'Santiago del Estero Province',
						value: 'AR-G',
					},
					{
						name: 'Tierra del Fuego Province',
						value: 'AR-V',
					},
					{
						name: 'Tucumán',
						value: 'AR-T',
					},
					{
						name: 'Armenia',
						value: 'AM',
					},
					{
						name: 'Aragatsotn Province',
						value: 'AM-AG',
					},
					{
						name: 'Ararat Province',
						value: 'AM-AR',
					},
					{
						name: 'Armavir Province',
						value: 'AM-AV',
					},
					{
						name: 'Gegharkunik Province',
						value: 'AM-GR',
					},
					{
						name: 'Kotayk Province',
						value: 'AM-KT',
					},
					{
						name: 'Lori Province',
						value: 'AM-LO',
					},
					{
						name: 'Shirak Province',
						value: 'AM-SH',
					},
					{
						name: 'Syunik Province',
						value: 'AM-SU',
					},
					{
						name: 'Tavush Province',
						value: 'AM-TV',
					},
					{
						name: 'Vayots Dzor Province',
						value: 'AM-VD',
					},
					{
						name: 'Yerevan',
						value: 'AM-ER',
					},
					{
						name: 'Aruba',
						value: 'AW',
					},
					{
						name: 'Australia',
						value: 'AU',
					},
					{
						name: 'Australian Capital Territory',
						value: 'AU-ACT',
					},
					{
						name: 'New South Wales',
						value: 'AU-NSW',
					},
					{
						name: 'Northern Territory',
						value: 'AU-NT',
					},
					{
						name: 'Queensland',
						value: 'AU-QLD',
					},
					{
						name: 'South Australia',
						value: 'AU-SA',
					},
					{
						name: 'Tasmania',
						value: 'AU-TAS',
					},
					{
						name: 'Victoria',
						value: 'AU-VIC',
					},
					{
						name: 'Western Australia',
						value: 'AU-WA',
					},
					{
						name: 'Austria',
						value: 'AT',
					},
					{
						name: 'Burgenland',
						value: 'AT-1',
					},
					{
						name: 'Carinthia',
						value: 'AT-2',
					},
					{
						name: 'Lower Austria',
						value: 'AT-3',
					},
					{
						name: 'Salzburg',
						value: 'AT-5',
					},
					{
						name: 'Styria',
						value: 'AT-6',
					},
					{
						name: 'Tyrol',
						value: 'AT-7',
					},
					{
						name: 'Upper Austria',
						value: 'AT-4',
					},
					{
						name: 'Vienna',
						value: 'AT-9',
					},
					{
						name: 'Vorarlberg',
						value: 'AT-8',
					},
					{
						name: 'Azerbaijan',
						value: 'AZ',
					},
					{
						name: 'Nakhchivan Autonomous Republic',
						value: 'AZ-NX',
					},
					{
						name: 'Bahamas',
						value: 'BS',
					},
					{
						name: 'Acklins',
						value: 'BS-AK',
					},
					{
						name: 'Berry Islands',
						value: 'BS-BY',
					},
					{
						name: 'Bimini',
						value: 'BS-BI',
					},
					{
						name: 'Black Point',
						value: 'BS-BP',
					},
					{
						name: 'Cat Island',
						value: 'BS-CI',
					},
					{
						name: 'Central Abaco',
						value: 'BS-CO',
					},
					{
						name: 'Central Andros',
						value: 'BS-CS',
					},
					{
						name: 'Central Eleuthera',
						value: 'BS-CE',
					},
					{
						name: 'Crooked Island and Long Cay',
						value: 'BS-CK',
					},
					{
						name: 'East Grand Bahama',
						value: 'BS-EG',
					},
					{
						name: 'Exuma',
						value: 'BS-EX',
					},
					{
						name: 'Freeport',
						value: 'BS-FP',
					},
					{
						name: 'Grand Cay',
						value: 'BS-GC',
					},
					{
						name: 'Harbour Island',
						value: 'BS-HI',
					},
					{
						name: 'Hope Town',
						value: 'BS-HT',
					},
					{
						name: 'Inagua',
						value: 'BS-IN',
					},
					{
						name: 'Long Island',
						value: 'BS-LI',
					},
					{
						name: 'Mangrove Cay',
						value: 'BS-MC',
					},
					{
						name: 'Mayaguana',
						value: 'BS-MG',
					},
					{
						name: "Moore's Island",
						value: 'BS-MI',
					},
					{
						name: 'North Abaco',
						value: 'BS-NO',
					},
					{
						name: 'North Andros',
						value: 'BS-NS',
					},
					{
						name: 'North Eleuthera',
						value: 'BS-NE',
					},
					{
						name: 'Ragged Island',
						value: 'BS-RI',
					},
					{
						name: 'Rum Cay',
						value: 'BS-RC',
					},
					{
						name: 'San Salvador',
						value: 'BS-SS',
					},
					{
						name: 'South Abaco',
						value: 'BS-SO',
					},
					{
						name: 'South Andros',
						value: 'BS-SA',
					},
					{
						name: 'South Eleuthera',
						value: 'BS-SE',
					},
					{
						name: 'Spanish Wells',
						value: 'BS-SW',
					},
					{
						name: 'West Grand Bahama',
						value: 'BS-WG',
					},
					{
						name: 'Bahrain',
						value: 'BH',
					},
					{
						name: 'Capital Governorate',
						value: 'BH-13',
					},
					{
						name: 'Central Governorate',
						value: 'BH-16',
					},
					{
						name: 'Muharraq Governorate',
						value: 'BH-15',
					},
					{
						name: 'Northern Governorate',
						value: 'BH-17',
					},
					{
						name: 'Southern Governorate',
						value: 'BH-14',
					},
					{
						name: 'Bangladesh',
						value: 'BD',
					},
					{
						name: 'Barisal Division',
						value: 'BD-A',
					},
					{
						name: 'Chittagong Division',
						value: 'BD-B',
					},
					{
						name: 'Dhaka Division',
						value: 'BD-C',
					},
					{
						name: 'Khulna Division',
						value: 'BD-D',
					},
					{
						name: 'Rajshahi Division',
						value: 'BD-E',
					},
					{
						name: 'Rangpur Division',
						value: 'BD-F',
					},
					{
						name: 'Sylhet Division',
						value: 'BD-G',
					},
					{
						name: 'Barbados',
						value: 'BB',
					},
					{
						name: 'Christ Church',
						value: 'BB-01',
					},
					{
						name: 'Saint Andrew',
						value: 'BB-02',
					},
					{
						name: 'Saint James',
						value: 'BB-04',
					},
					{
						name: 'Saint Joseph',
						value: 'BB-06',
					},
					{
						name: 'Saint Lucy',
						value: 'BB-07',
					},
					{
						name: 'Saint Michael',
						value: 'BB-08',
					},
					{
						name: 'Saint Thomas Parish',
						value: 'BB-11',
					},
					{
						name: 'Belarus',
						value: 'BY',
					},
					{
						name: 'Brest Region',
						value: 'BY-BR',
					},
					{
						name: 'Gomel Region',
						value: 'BY-HO',
					},
					{
						name: 'Hrodna Region',
						value: 'BY-HR',
					},
					{
						name: 'Minsk Region',
						value: 'BY-MI',
					},
					{
						name: 'Mogilev Region',
						value: 'BY-MA',
					},
					{
						name: 'Vitebsk Region',
						value: 'BY-VI',
					},
					{
						name: 'Belgium',
						value: 'BE',
					},
					{
						name: 'Brussels',
						value: 'BE-BRU',
					},
					{
						name: 'Flanders',
						value: 'BE-VLG',
					},
					{
						name: 'Walloon Region',
						value: 'BE-WAL',
					},
					{
						name: 'Belize',
						value: 'BZ',
					},
					{
						name: 'Cayo',
						value: 'BZ-CY',
					},
					{
						name: 'Corozal',
						value: 'BZ-CZL',
					},
					{
						name: 'Orange Walk',
						value: 'BZ-OW',
					},
					{
						name: 'Stann Creek',
						value: 'BZ-SC',
					},
					{
						name: 'Toledo',
						value: 'BZ-TOL',
					},
					{
						name: 'Benin',
						value: 'BJ',
					},
					{
						name: 'Alibori',
						value: 'BJ-AL',
					},
					{
						name: 'Atakora',
						value: 'BJ-AK',
					},
					{
						name: 'Atlantique',
						value: 'BJ-AQ',
					},
					{
						name: 'Borgou',
						value: 'BJ-BO',
					},
					{
						name: 'Collines',
						value: 'BJ-CO',
					},
					{
						name: 'Donga',
						value: 'BJ-DO',
					},
					{
						name: 'Kouffo',
						value: 'BJ-KO',
					},
					{
						name: 'Littoral',
						value: 'BJ-LI',
					},
					{
						name: 'Mono',
						value: 'BJ-MO',
					},
					{
						name: 'Oueme',
						value: 'BJ-OU',
					},
					{
						name: 'Plateau',
						value: 'BJ-PL',
					},
					{
						name: 'Zou',
						value: 'BJ-ZO',
					},
					{
						name: 'Bermuda',
						value: 'BM',
					},
					{
						name: 'Bhutan',
						value: 'BT',
					},
					{
						name: 'Bumthang',
						value: 'BT-33',
					},
					{
						name: 'Chhukha',
						value: 'BT-12',
					},
					{
						name: 'Dagana',
						value: 'BT-22',
					},
					{
						name: 'Gasa',
						value: 'BT-GA',
					},
					{
						name: 'Haa',
						value: 'BT-13',
					},
					{
						name: 'Lhuntse',
						value: 'BT-44',
					},
					{
						name: 'Mongar',
						value: 'BT-42',
					},
					{
						name: 'Paro',
						value: 'BT-11',
					},
					{
						name: 'Pemagatshel',
						value: 'BT-43',
					},
					{
						name: 'Punakha',
						value: 'BT-23',
					},
					{
						name: 'Samdrup Jongkhar',
						value: 'BT-45',
					},
					{
						name: 'Samtse',
						value: 'BT-14',
					},
					{
						name: 'Sarpang',
						value: 'BT-31',
					},
					{
						name: 'Thimphu',
						value: 'BT-15',
					},
					{
						name: 'Trashigang',
						value: 'BT-41',
					},
					{
						name: 'Trashiyangtse',
						value: 'BT-TY',
					},
					{
						name: 'Trongsa',
						value: 'BT-32',
					},
					{
						name: 'Tsirang',
						value: 'BT-21',
					},
					{
						name: 'Wangdue Phodrang',
						value: 'BT-24',
					},
					{
						name: 'Zhemgang',
						value: 'BT-34',
					},
					{
						name: 'Bolivia',
						value: 'BO',
					},
					{
						name: 'Beni Department',
						value: 'BO-B',
					},
					{
						name: 'Chuquisaca Department',
						value: 'BO-H',
					},
					{
						name: 'Cochabamba Department',
						value: 'BO-C',
					},
					{
						name: 'La Paz Department',
						value: 'BO-L',
					},
					{
						name: 'Oruro Department',
						value: 'BO-O',
					},
					{
						name: 'Pando Department',
						value: 'BO-N',
					},
					{
						name: 'Potosi Department',
						value: 'BO-P',
					},
					{
						name: 'Santa Cruz',
						value: 'BO-S',
					},
					{
						name: 'Tarija Department',
						value: 'BO-T',
					},
					{
						name: 'Bosnia & Herzegovina',
						value: 'BA',
					},
					{
						name: 'Brčko Distrikt',
						value: 'BA-BRC',
					},
					{
						name: 'Federation of Bosnia and Herzegovina',
						value: 'BA-BIH',
					},
					{
						name: 'Republika Srpska',
						value: 'BA-SRP',
					},
					{
						name: 'Botswana',
						value: 'BW',
					},
					{
						name: 'Central',
						value: 'BW-CE',
					},
					{
						name: 'Ghanzi',
						value: 'BW-GH',
					},
					{
						name: 'Kgalagadi',
						value: 'BW-KG',
					},
					{
						name: 'Kgatleng',
						value: 'BW-KL',
					},
					{
						name: 'Kweneng',
						value: 'BW-KW',
					},
					{
						name: 'North West',
						value: 'BW-NW',
					},
					{
						name: 'North-East',
						value: 'BW-NE',
					},
					{
						name: 'South-East',
						value: 'BW-SE',
					},
					{
						name: 'Southern',
						value: 'BW-SO',
					},
					{
						name: 'Bouvet Island',
						value: 'BV',
					},
					{
						name: 'Brazil',
						value: 'BR',
					},
					{
						name: 'Federal District',
						value: 'BR-DF',
					},
					{
						name: 'State of Acre',
						value: 'BR-AC',
					},
					{
						name: 'State of Alagoas',
						value: 'BR-AL',
					},
					{
						name: 'State of Amapá',
						value: 'BR-AP',
					},
					{
						name: 'State of Amazonas',
						value: 'BR-AM',
					},
					{
						name: 'State of Bahia',
						value: 'BR-BA',
					},
					{
						name: 'State of Ceará',
						value: 'BR-CE',
					},
					{
						name: 'State of Espírito Santo',
						value: 'BR-ES',
					},
					{
						name: 'State of Goiás',
						value: 'BR-GO',
					},
					{
						name: 'State of Maranhão',
						value: 'BR-MA',
					},
					{
						name: 'State of Mato Grosso',
						value: 'BR-MT',
					},
					{
						name: 'State of Mato Grosso do Sul',
						value: 'BR-MS',
					},
					{
						name: 'State of Minas Gerais',
						value: 'BR-MG',
					},
					{
						name: 'State of Pará',
						value: 'BR-PA',
					},
					{
						name: 'State of Paraíba',
						value: 'BR-PB',
					},
					{
						name: 'State of Paraná',
						value: 'BR-PR',
					},
					{
						name: 'State of Pernambuco',
						value: 'BR-PE',
					},
					{
						name: 'State of Piauí',
						value: 'BR-PI',
					},
					{
						name: 'State of Rio de Janeiro',
						value: 'BR-RJ',
					},
					{
						name: 'State of Rio Grande do Norte',
						value: 'BR-RN',
					},
					{
						name: 'State of Rio Grande do Sul',
						value: 'BR-RS',
					},
					{
						name: 'State of Rondônia',
						value: 'BR-RO',
					},
					{
						name: 'State of Roraima',
						value: 'BR-RR',
					},
					{
						name: 'State of Santa Catarina',
						value: 'BR-SC',
					},
					{
						name: 'State of São Paulo',
						value: 'BR-SP',
					},
					{
						name: 'State of Sergipe',
						value: 'BR-SE',
					},
					{
						name: 'State of Tocantins',
						value: 'BR-TO',
					},
					{
						name: 'British Indian Ocean Territory',
						value: 'IO',
					},
					{
						name: 'British Virgin Islands',
						value: 'VG',
					},
					{
						name: 'Brunei',
						value: 'BN',
					},
					{
						name: 'Belait',
						value: 'BN-BE',
					},
					{
						name: 'Brunei-Muara',
						value: 'BN-BM',
					},
					{
						name: 'Temburong',
						value: 'BN-TE',
					},
					{
						name: 'Tutong',
						value: 'BN-TU',
					},
					{
						name: 'Bulgaria',
						value: 'BG',
					},
					{
						name: 'Blagoevgrad Province',
						value: 'BG-01',
					},
					{
						name: 'Burgas',
						value: 'BG-02',
					},
					{
						name: 'Dobrich Province',
						value: 'BG-08',
					},
					{
						name: 'Gabrovo',
						value: 'BG-07',
					},
					{
						name: 'Haskovo Province',
						value: 'BG-26',
					},
					{
						name: 'Jambol',
						value: 'BG-28',
					},
					{
						name: 'Kardzhali Province',
						value: 'BG-09',
					},
					{
						name: 'Kyustendil Province',
						value: 'BG-10',
					},
					{
						name: 'Lovec',
						value: 'BG-11',
					},
					{
						name: 'Montana Province',
						value: 'BG-12',
					},
					{
						name: 'Pazardzik',
						value: 'BG-13',
					},
					{
						name: 'Pernik',
						value: 'BG-14',
					},
					{
						name: 'Pleven Province',
						value: 'BG-15',
					},
					{
						name: 'Plovdiv Province',
						value: 'BG-16',
					},
					{
						name: 'Razgrad',
						value: 'BG-17',
					},
					{
						name: 'Ruse',
						value: 'BG-18',
					},
					{
						name: 'Shumen Province',
						value: 'BG-27',
					},
					{
						name: 'Silistra',
						value: 'BG-19',
					},
					{
						name: 'Sliven Province',
						value: 'BG-20',
					},
					{
						name: 'Smoljan',
						value: 'BG-21',
					},
					{
						name: 'Sofia City Province',
						value: 'BG-22',
					},
					{
						name: 'Sofia Province',
						value: 'BG-23',
					},
					{
						name: 'Stara Zagora',
						value: 'BG-24',
					},
					{
						name: 'Targovishte Province',
						value: 'BG-25',
					},
					{
						name: 'Varna',
						value: 'BG-03',
					},
					{
						name: 'Veliko Tarnovo Province',
						value: 'BG-04',
					},
					{
						name: 'Vidin',
						value: 'BG-05',
					},
					{
						name: 'Vraca',
						value: 'BG-06',
					},
					{
						name: 'Burkina Faso',
						value: 'BF',
					},
					{
						name: 'Boucle du Mouhoun',
						value: 'BF-01',
					},
					{
						name: 'Cascades',
						value: 'BF-02',
					},
					{
						name: 'Centre',
						value: 'BF-03',
					},
					{
						name: 'Centre Est',
						value: 'BF-04',
					},
					{
						name: 'Centre-Nord',
						value: 'BF-05',
					},
					{
						name: 'Centre-Ouest',
						value: 'BF-06',
					},
					{
						name: 'Centre-Sud',
						value: 'BF-07',
					},
					{
						name: 'Est',
						value: 'BF-08',
					},
					{
						name: 'Hauts-Bassins',
						value: 'BF-09',
					},
					{
						name: 'Nord',
						value: 'BF-10',
					},
					{
						name: 'Plateau-Central Region',
						value: 'BF-11',
					},
					{
						name: 'Sahel',
						value: 'BF-12',
					},
					{
						name: 'Sud-Ouest',
						value: 'BF-13',
					},
					{
						name: 'Burundi',
						value: 'BI',
					},
					{
						name: 'Bubanza',
						value: 'BI-BB',
					},
					{
						name: 'Bujumbura Mairie',
						value: 'BI-BM',
					},
					{
						name: 'Bujumbura Rural',
						value: 'BI-BL',
					},
					{
						name: 'Bururi',
						value: 'BI-BR',
					},
					{
						name: 'Cankuzo',
						value: 'BI-CA',
					},
					{
						name: 'Cibitoke',
						value: 'BI-CI',
					},
					{
						name: 'Gitega',
						value: 'BI-GI',
					},
					{
						name: 'Karuzi',
						value: 'BI-KR',
					},
					{
						name: 'Kayanza',
						value: 'BI-KY',
					},
					{
						name: 'Kirundo',
						value: 'BI-KI',
					},
					{
						name: 'Makamba',
						value: 'BI-MA',
					},
					{
						name: 'Muramvya',
						value: 'BI-MU',
					},
					{
						name: 'Muyinga',
						value: 'BI-MY',
					},
					{
						name: 'Mwaro',
						value: 'BI-MW',
					},
					{
						name: 'Ngozi',
						value: 'BI-NG',
					},
					{
						name: 'Rutana',
						value: 'BI-RT',
					},
					{
						name: 'Ruyigi',
						value: 'BI-RY',
					},
					{
						name: 'Cambodia',
						value: 'KH',
					},
					{
						name: 'Banteay Meanchey',
						value: 'KH-1',
					},
					{
						name: 'Battambang',
						value: 'KH-2',
					},
					{
						name: 'Kampong Cham',
						value: 'KH-3',
					},
					{
						name: 'Kampong Chhnang',
						value: 'KH-4',
					},
					{
						name: 'Kampong Speu​',
						value: 'KH-5',
					},
					{
						name: 'Kampong Thom',
						value: 'KH-6',
					},
					{
						name: 'Kampot',
						value: 'KH-7',
					},
					{
						name: 'Kandal',
						value: 'KH-8',
					},
					{
						name: 'Kep',
						value: 'KH-23',
					},
					{
						name: 'Koh Kong',
						value: 'KH-9',
					},
					{
						name: 'Kratie',
						value: 'KH-10',
					},
					{
						name: 'Mondulkiri',
						value: 'KH-11',
					},
					{
						name: 'Oddar Meancheay',
						value: 'KH-22',
					},
					{
						name: 'Pailin',
						value: 'KH-24',
					},
					{
						name: 'Phnom Penh',
						value: 'KH-12',
					},
					{
						name: 'Preah Sihanouk',
						value: 'KH-18',
					},
					{
						name: 'Preah Vihear',
						value: 'KH-13',
					},
					{
						name: 'Prey Veng',
						value: 'KH-14',
					},
					{
						name: 'Pursat',
						value: 'KH-15',
					},
					{
						name: 'Ratanakiri',
						value: 'KH-16',
					},
					{
						name: 'Siem Reap',
						value: 'KH-17',
					},
					{
						name: 'Stung Treng',
						value: 'KH-19',
					},
					{
						name: 'Svay Rieng',
						value: 'KH-20',
					},
					{
						name: 'Takeo',
						value: 'KH-21',
					},
					{
						name: 'Tbong Khmum',
						value: 'KH-25',
					},
					{
						name: 'Cameroon',
						value: 'CM',
					},
					{
						name: 'Adamawa Region',
						value: 'CM-AD',
					},
					{
						name: 'East',
						value: 'CM-ES',
					},
					{
						name: 'Extreme North',
						value: 'CM-EN',
					},
					{
						name: 'North',
						value: 'CM-NO',
					},
					{
						name: 'Northwest',
						value: 'CM-NW',
					},
					{
						name: 'South',
						value: 'CM-SU',
					},
					{
						name: 'Southwest',
						value: 'CM-SW',
					},
					{
						name: 'West',
						value: 'CM-OU',
					},
					{
						name: 'Canada',
						value: 'CA',
					},
					{
						name: 'Alberta',
						value: 'CA-AB',
					},
					{
						name: 'British Columbia',
						value: 'CA-BC',
					},
					{
						name: 'Manitoba',
						value: 'CA-MB',
					},
					{
						name: 'New Brunswick',
						value: 'CA-NB',
					},
					{
						name: 'Newfoundland and Labrador',
						value: 'CA-NL',
					},
					{
						name: 'Northwest Territories',
						value: 'CA-NT',
					},
					{
						name: 'Nova Scotia',
						value: 'CA-NS',
					},
					{
						name: 'Nunavut',
						value: 'CA-NU',
					},
					{
						name: 'Ontario',
						value: 'CA-ON',
					},
					{
						name: 'Prince Edward Island',
						value: 'CA-PE',
					},
					{
						name: 'Québec',
						value: 'CA-QC',
					},
					{
						name: 'Saskatchewan',
						value: 'CA-SK',
					},
					{
						name: 'Yukon Territory',
						value: 'CA-YT',
					},
					{
						name: 'Cape Verde',
						value: 'CV',
					},
					{
						name: 'Boa Vista',
						value: 'CV-BV',
					},
					{
						name: 'Brava',
						value: 'CV-BR',
					},
					{
						name: 'Maio',
						value: 'CV-MA',
					},
					{
						name: 'Mosteiros',
						value: 'CV-MO',
					},
					{
						name: 'Paul',
						value: 'CV-PA',
					},
					{
						name: 'Porto Novo',
						value: 'CV-PN',
					},
					{
						name: 'Praia',
						value: 'CV-PR',
					},
					{
						name: 'Ribeira Brava',
						value: 'CV-RB',
					},
					{
						name: 'Ribeira Grande',
						value: 'CV-RG',
					},
					{
						name: 'Ribeira Grande de Santiago',
						value: 'CV-RS',
					},
					{
						name: 'Sal',
						value: 'CV-SL',
					},
					{
						name: 'Santa Catarina',
						value: 'CV-CA',
					},
					{
						name: 'Santa Catarina do Fogo',
						value: 'CV-CF',
					},
					{
						name: 'Sao Domingos',
						value: 'CV-SD',
					},
					{
						name: 'Sao Filipe',
						value: 'CV-SF',
					},
					{
						name: 'Sao Lourenco dos Orgaos',
						value: 'CV-SO',
					},
					{
						name: 'Sao Miguel',
						value: 'CV-SM',
					},
					{
						name: 'Sao Salvador do Mundo',
						value: 'CV-SS',
					},
					{
						name: 'Sao Vicente',
						value: 'CV-SV',
					},
					{
						name: 'Tarrafal',
						value: 'CV-TA',
					},
					{
						name: 'Tarrafal de Sao Nicolau',
						value: 'CV-TS',
					},
					{
						name: 'Caribbean Netherlands',
						value: 'BQ',
					},
					{
						name: 'Bonaire',
						value: 'BQ-BO',
					},
					{
						name: 'Saba',
						value: 'BQ-SA',
					},
					{
						name: 'Sint Eustatius',
						value: 'BQ-SE',
					},
					{
						name: 'Cayman Islands',
						value: 'KY',
					},
					{
						name: 'Central African Republic',
						value: 'CF',
					},
					{
						name: 'Bamingui-Bangoran',
						value: 'CF-BB',
					},
					{
						name: 'Bangui',
						value: 'CF-BGF',
					},
					{
						name: 'Basse-Kotto',
						value: 'CF-BK',
					},
					{
						name: 'Haut-Mbomou',
						value: 'CF-HM',
					},
					{
						name: 'Haute-Kotto',
						value: 'CF-HK',
					},
					{
						name: 'Kemo',
						value: 'CF-KG',
					},
					{
						name: 'Lobaye',
						value: 'CF-LB',
					},
					{
						name: 'Mambere-Kadei',
						value: 'CF-HS',
					},
					{
						name: 'Mbomou',
						value: 'CF-MB',
					},
					{
						name: 'Nana-Grebizi',
						value: 'CF-KB',
					},
					{
						name: 'Nana-Mambéré',
						value: 'CF-NM',
					},
					{
						name: "Ombella-M'Poko",
						value: 'CF-MP',
					},
					{
						name: 'Ouaka',
						value: 'CF-UK',
					},
					{
						name: 'Ouham',
						value: 'CF-AC',
					},
					{
						name: 'Ouham-Pendé',
						value: 'CF-OP',
					},
					{
						name: 'Sangha-Mbare',
						value: 'CF-SE',
					},
					{
						name: 'Vakaga',
						value: 'CF-VK',
					},
					{
						name: 'Chad',
						value: 'TD',
					},
					{
						name: 'Bahr El Gazel',
						value: 'TD-BG',
					},
					{
						name: 'Batha',
						value: 'TD-BA',
					},
					{
						name: 'Borkou',
						value: 'TD-BO',
					},
					{
						name: 'Chari-Baguirmi',
						value: 'TD-CB',
					},
					{
						name: 'Ennedi',
						value: 'TD-EN',
					},
					{
						name: 'Guera',
						value: 'TD-GR',
					},
					{
						name: 'Hadjer-Lamis',
						value: 'TD-HL',
					},
					{
						name: 'Kanem',
						value: 'TD-KA',
					},
					{
						name: 'Lac',
						value: 'TD-LC',
					},
					{
						name: 'Logone Occidental',
						value: 'TD-LO',
					},
					{
						name: 'Logone Oriental',
						value: 'TD-LR',
					},
					{
						name: 'Mandoul',
						value: 'TD-MA',
					},
					{
						name: 'Mayo-Kebbi Est',
						value: 'TD-ME',
					},
					{
						name: 'Mayo-Kebbi Ouest',
						value: 'TD-MO',
					},
					{
						name: 'Moyen-Chari',
						value: 'TD-MC',
					},
					{
						name: "N'Djamena",
						value: 'TD-ND',
					},
					{
						name: 'Ouaddai',
						value: 'TD-OD',
					},
					{
						name: 'Sila',
						value: 'TD-SI',
					},
					{
						name: 'Tandjile',
						value: 'TD-TA',
					},
					{
						name: 'Tibesti',
						value: 'TD-TI',
					},
					{
						name: 'Wadi Fira',
						value: 'TD-WF',
					},
					{
						name: 'سلمات',
						value: 'TD-SA',
					},
					{
						name: 'Chile',
						value: 'CL',
					},
					{
						name: 'Antofagasta Region',
						value: 'CL-AN',
					},
					{
						name: 'Araucania',
						value: 'CL-AR',
					},
					{
						name: 'Arica y Parinacota Region',
						value: 'CL-AP',
					},
					{
						name: 'Atacama Region',
						value: 'CL-AT',
					},
					{
						name: 'Bío Bío Region',
						value: 'CL-BI',
					},
					{
						name: 'Coquimbo Region',
						value: 'CL-CO',
					},
					{
						name: 'Los Lagos Region',
						value: 'CL-LL',
					},
					{
						name: 'Los Ríos Region',
						value: 'CL-LR',
					},
					{
						name: 'Magallanes y la Antártica Chilena Region',
						value: 'CL-MA',
					},
					{
						name: 'Maule Region',
						value: 'CL-ML',
					},
					{
						name: "O'Higgins Region",
						value: 'CL-LI',
					},
					{
						name: 'Santiago Metropolitan Region',
						value: 'CL-RM',
					},
					{
						name: 'Tarapacá Region',
						value: 'CL-TA',
					},
					{
						name: 'Valparaiso Region',
						value: 'CL-VS',
					},
					{
						name: 'XI Región',
						value: 'CL-AI',
					},
					{
						name: 'China',
						value: 'CN',
					},
					{
						name: 'Anhui',
						value: 'CN-34',
					},
					{
						name: 'Beijing',
						value: 'CN-11',
					},
					{
						name: 'Chongqing',
						value: 'CN-50',
					},
					{
						name: 'Fujian',
						value: 'CN-35',
					},
					{
						name: 'Gansu',
						value: 'CN-62',
					},
					{
						name: 'Guangdong',
						value: 'CN-44',
					},
					{
						name: 'Guangxi',
						value: 'CN-45',
					},
					{
						name: 'Guizhou',
						value: 'CN-52',
					},
					{
						name: 'Hainan',
						value: 'CN-46',
					},
					{
						name: 'Hebei',
						value: 'CN-13',
					},
					{
						name: 'Heilongjiang',
						value: 'CN-23',
					},
					{
						name: 'Henan',
						value: 'CN-41',
					},
					{
						name: 'Hubei',
						value: 'CN-42',
					},
					{
						name: 'Hunan',
						value: 'CN-43',
					},
					{
						name: 'Inner Mongolia',
						value: 'CN-15',
					},
					{
						name: 'Jiangsu',
						value: 'CN-32',
					},
					{
						name: 'Jiangxi',
						value: 'CN-36',
					},
					{
						name: 'Jilin',
						value: 'CN-22',
					},
					{
						name: 'Liaoning',
						value: 'CN-21',
					},
					{
						name: 'Ningxia',
						value: 'CN-64',
					},
					{
						name: 'Qinghai',
						value: 'CN-63',
					},
					{
						name: 'Shaanxi',
						value: 'CN-61',
					},
					{
						name: 'Shandong',
						value: 'CN-37',
					},
					{
						name: 'Shanghai',
						value: 'CN-31',
					},
					{
						name: 'Shanxi',
						value: 'CN-14',
					},
					{
						name: 'Sichuan',
						value: 'CN-51',
					},
					{
						name: 'Tianjin',
						value: 'CN-12',
					},
					{
						name: 'Tibet',
						value: 'CN-54',
					},
					{
						name: 'Xinjiang',
						value: 'CN-65',
					},
					{
						name: 'Yunnan',
						value: 'CN-53',
					},
					{
						name: 'Zhejiang',
						value: 'CN-33',
					},
					{
						name: 'Christmas Island',
						value: 'CX',
					},
					{
						name: 'Cocos (Keeling) Islands',
						value: 'CC',
					},
					{
						name: 'Colombia',
						value: 'CO',
					},
					{
						name: 'Amazonas Department',
						value: 'CO-AMA',
					},
					{
						name: 'Antioquia',
						value: 'CO-ANT',
					},
					{
						name: 'Arauca',
						value: 'CO-ARA',
					},
					{
						name: 'Atlantico',
						value: 'CO-ATL',
					},
					{
						name: 'Bogota',
						value: 'CO-DC',
					},
					{
						name: 'Bolivar',
						value: 'CO-BOL',
					},
					{
						name: 'Boyaca',
						value: 'CO-BOY',
					},
					{
						name: 'Caldas',
						value: 'CO-CAL',
					},
					{
						name: 'Caquetá',
						value: 'CO-CAQ',
					},
					{
						name: 'Casanare',
						value: 'CO-CAS',
					},
					{
						name: 'Cauca Department',
						value: 'CO-CAU',
					},
					{
						name: 'Cesar',
						value: 'CO-CES',
					},
					{
						name: 'Choco',
						value: 'CO-CHO',
					},
					{
						name: 'Cundinamarca',
						value: 'CO-CUN',
					},
					{
						name: 'Guainia',
						value: 'CO-GUA',
					},
					{
						name: 'Guaviare',
						value: 'CO-GUV',
					},
					{
						name: 'Huila',
						value: 'CO-HUI',
					},
					{
						name: 'La Guajira',
						value: 'CO-LAG',
					},
					{
						name: 'Magdalena',
						value: 'CO-MAG',
					},
					{
						name: 'Meta',
						value: 'CO-MET',
					},
					{
						name: 'Narino',
						value: 'CO-NAR',
					},
					{
						name: 'North Santander',
						value: 'CO-NSA',
					},
					{
						name: 'Putumayo',
						value: 'CO-PUT',
					},
					{
						name: 'Quindio',
						value: 'CO-QUI',
					},
					{
						name: 'Risaralda',
						value: 'CO-RIS',
					},
					{
						name: 'San Andrés and Providencia',
						value: 'CO-SAP',
					},
					{
						name: 'Santander Department',
						value: 'CO-SAN',
					},
					{
						name: 'Sucre',
						value: 'CO-SUC',
					},
					{
						name: 'Tolima',
						value: 'CO-TOL',
					},
					{
						name: 'Valle del Cauca',
						value: 'CO-VAC',
					},
					{
						name: 'Vaupes',
						value: 'CO-VAU',
					},
					{
						name: 'Vichada',
						value: 'CO-VID',
					},
					{
						name: 'Comoros',
						value: 'KM',
					},
					{
						name: 'Mwali',
						value: 'KM-M',
					},
					{
						name: 'Ngazidja',
						value: 'KM-G',
					},
					{
						name: 'Nzwani',
						value: 'KM-A',
					},
					{
						name: 'Congo - Brazzaville',
						value: 'CG',
					},
					{
						name: 'Bouenza',
						value: 'CG-11',
					},
					{
						name: 'Brazzaville',
						value: 'CG-BZV',
					},
					{
						name: 'Cuvette',
						value: 'CG-8',
					},
					{
						name: 'Cuvette-Ouest',
						value: 'CG-15',
					},
					{
						name: 'Kouilou',
						value: 'CG-5',
					},
					{
						name: 'Lekoumou',
						value: 'CG-2',
					},
					{
						name: 'Likouala',
						value: 'CG-7',
					},
					{
						name: 'Niari',
						value: 'CG-9',
					},
					{
						name: 'Plateaux',
						value: 'CG-14',
					},
					{
						name: 'Pointe Noire',
						value: 'CG-16',
					},
					{
						name: 'Pool',
						value: 'CG-12',
					},
					{
						name: 'Sangha',
						value: 'CG-13',
					},
					{
						name: 'Congo - Kinshasa',
						value: 'CD',
					},
					{
						name: 'Bandundu',
						value: 'CD-BN',
					},
					{
						name: 'Bas Congo',
						value: 'CD-BC',
					},
					{
						name: 'Equator',
						value: 'CD-EQ',
					},
					{
						name: 'Kasai Occidental',
						value: 'CD-KW',
					},
					{
						name: 'Kasai Oriental',
						value: 'CD-KE',
					},
					{
						name: 'Katanga',
						value: 'CD-KA',
					},
					{
						name: 'Kinshasa',
						value: 'CD-KN',
					},
					{
						name: 'Maniema',
						value: 'CD-MA',
					},
					{
						name: 'North-Kivu',
						value: 'CD-NK',
					},
					{
						name: 'Orientale',
						value: 'CD-OR',
					},
					{
						name: 'South-Kivu',
						value: 'CD-SK',
					},
					{
						name: 'Cook Islands',
						value: 'CK',
					},
					{
						name: 'Costa Rica',
						value: 'CR',
					},
					{
						name: 'Alajuela',
						value: 'CR-A',
					},
					{
						name: 'Guanacaste Province',
						value: 'CR-G',
					},
					{
						name: 'Heredia Province',
						value: 'CR-H',
					},
					{
						name: 'Limón Province',
						value: 'CR-L',
					},
					{
						name: 'Provincia de Cartago',
						value: 'CR-C',
					},
					{
						name: 'Puntarenas Province',
						value: 'CR-P',
					},
					{
						name: 'San José Province',
						value: 'CR-SJ',
					},
					{
						name: 'Côte d’Ivoire',
						value: 'CI',
					},
					{
						name: 'Agnebi',
						value: 'CI-16',
					},
					{
						name: 'Bafing',
						value: 'CI-17',
					},
					{
						name: 'Bas-Sassandra',
						value: 'CI-09',
					},
					{
						name: 'Denguele',
						value: 'CI-10',
					},
					{
						name: 'Dix-Huit Montagnes',
						value: 'CI-06',
					},
					{
						name: 'Fromager',
						value: 'CI-18',
					},
					{
						name: 'Haut-Sassandra',
						value: 'CI-02',
					},
					{
						name: 'Lacs',
						value: 'CI-07',
					},
					{
						name: 'Lagunes',
						value: 'CI-01',
					},
					{
						name: 'Marahoue',
						value: 'CI-12',
					},
					{
						name: 'Moyen-Cavally',
						value: 'CI-19',
					},
					{
						name: 'Moyen-Comoe',
						value: 'CI-05',
					},
					{
						name: 'Nzi-Comoe',
						value: 'CI-11',
					},
					{
						name: 'Savanes',
						value: 'CI-03',
					},
					{
						name: 'Sud-Bandama',
						value: 'CI-15',
					},
					{
						name: 'Sud-Comoe',
						value: 'CI-13',
					},
					{
						name: 'Vallee du Bandama',
						value: 'CI-04',
					},
					{
						name: 'Worodougou',
						value: 'CI-14',
					},
					{
						name: 'Zanzan',
						value: 'CI-08',
					},
					{
						name: 'Croatia',
						value: 'HR',
					},
					{
						name: 'Bjelovar-Bilogora County',
						value: 'HR-07',
					},
					{
						name: 'Brod-Posavina County',
						value: 'HR-12',
					},
					{
						name: 'City of Zagreb',
						value: 'HR-21',
					},
					{
						name: 'Dubrovnik-Neretva County',
						value: 'HR-19',
					},
					{
						name: 'Istria County',
						value: 'HR-18',
					},
					{
						name: 'Karlovac County',
						value: 'HR-04',
					},
					{
						name: 'Koprivnica-Križevci County',
						value: 'HR-06',
					},
					{
						name: 'Krapina-Zagorje County',
						value: 'HR-02',
					},
					{
						name: 'Lika-Senj County',
						value: 'HR-09',
					},
					{
						name: 'Međimurje County',
						value: 'HR-20',
					},
					{
						name: 'Osijek-Baranja County',
						value: 'HR-14',
					},
					{
						name: 'Požega-Slavonia County',
						value: 'HR-11',
					},
					{
						name: 'Primorje-Gorski Kotar County',
						value: 'HR-08',
					},
					{
						name: 'Šibenik-Knin County',
						value: 'HR-15',
					},
					{
						name: 'Sisak-Moslavina County',
						value: 'HR-03',
					},
					{
						name: 'Split-Dalmatia County',
						value: 'HR-17',
					},
					{
						name: 'Varaždin County',
						value: 'HR-05',
					},
					{
						name: 'Virovitica-Podravina County',
						value: 'HR-10',
					},
					{
						name: 'Vukovar-Srijem County',
						value: 'HR-16',
					},
					{
						name: 'Zadar County',
						value: 'HR-13',
					},
					{
						name: 'Zagreb County',
						value: 'HR-01',
					},
					{
						name: 'Cuba',
						value: 'CU',
					},
					{
						name: 'Artemisa Province',
						value: 'CU-15',
					},
					{
						name: 'Camaguey',
						value: 'CU-09',
					},
					{
						name: 'Ciego de Avila',
						value: 'CU-08',
					},
					{
						name: 'Cienfuegos',
						value: 'CU-06',
					},
					{
						name: 'Granma',
						value: 'CU-12',
					},
					{
						name: 'Guantanamo',
						value: 'CU-14',
					},
					{
						name: 'Havana',
						value: 'CU-03',
					},
					{
						name: 'Holguin',
						value: 'CU-11',
					},
					{
						name: 'Isla de la Juventud',
						value: 'CU-99',
					},
					{
						name: 'Las Tunas',
						value: 'CU-10',
					},
					{
						name: 'Matanzas',
						value: 'CU-04',
					},
					{
						name: 'Mayabeque',
						value: 'CU-16',
					},
					{
						name: 'Pinar del Rio',
						value: 'CU-01',
					},
					{
						name: 'Sancti Spiritus',
						value: 'CU-07',
					},
					{
						name: 'Santiago de Cuba',
						value: 'CU-13',
					},
					{
						name: 'Villa Clara',
						value: 'CU-05',
					},
					{
						name: 'Curaçao',
						value: 'CW',
					},
					{
						name: 'Cyprus',
						value: 'CY',
					},
					{
						name: 'Famagusta',
						value: 'CY-04',
					},
					{
						name: 'Girne',
						value: 'CY-06',
					},
					{
						name: 'Larnaca',
						value: 'CY-03',
					},
					{
						name: 'Limassol',
						value: 'CY-02',
					},
					{
						name: 'Nicosia District',
						value: 'CY-01',
					},
					{
						name: 'Paphos',
						value: 'CY-05',
					},
					{
						name: 'Czechia',
						value: 'CZ',
					},
					{
						name: 'Central Bohemian Region',
						value: 'CZ-ST',
					},
					{
						name: 'Hradec Králové Region',
						value: 'CZ-KR',
					},
					{
						name: 'Karlovy Vary Region',
						value: 'CZ-KA',
					},
					{
						name: 'Liberec Region',
						value: 'CZ-LI',
					},
					{
						name: 'Moravian-Silesian Region',
						value: 'CZ-MO',
					},
					{
						name: 'Olomouc Region',
						value: 'CZ-OL',
					},
					{
						name: 'Pardubice Region',
						value: 'CZ-PA',
					},
					{
						name: 'Plzeň Region',
						value: 'CZ-PL',
					},
					{
						name: 'Prague',
						value: 'CZ-PR',
					},
					{
						name: 'South Bohemian Region',
						value: 'CZ-JC',
					},
					{
						name: 'South Moravian Region',
						value: 'CZ-JM',
					},
					{
						name: 'Ústí nad Labem Region',
						value: 'CZ-US',
					},
					{
						name: 'Vysocina Region',
						value: 'CZ-VY',
					},
					{
						name: 'Zlin Region',
						value: 'CZ-ZL',
					},
					{
						name: 'Denmark',
						value: 'DK',
					},
					{
						name: 'Capital Region of Denmark',
						value: 'DK-84',
					},
					{
						name: 'Central Denmark Region',
						value: 'DK-82',
					},
					{
						name: 'North Denmark Region',
						value: 'DK-81',
					},
					{
						name: 'Region Syddanmark',
						value: 'DK-83',
					},
					{
						name: 'Region Zealand',
						value: 'DK-85',
					},
					{
						name: 'Djibouti',
						value: 'DJ',
					},
					{
						name: 'Ali Sabieh',
						value: 'DJ-AS',
					},
					{
						name: 'Arta',
						value: 'DJ-AR',
					},
					{
						name: 'Dikhil',
						value: 'DJ-DI',
					},
					{
						name: 'Obock',
						value: 'DJ-OB',
					},
					{
						name: 'Tadjourah',
						value: 'DJ-TA',
					},
					{
						name: 'Dominica',
						value: 'DM',
					},
					{
						name: 'Saint Andrew Parish',
						value: 'DM-02',
					},
					{
						name: 'Saint David Parish',
						value: 'DM-03',
					},
					{
						name: 'Saint George Parish',
						value: 'DM-04',
					},
					{
						name: 'Saint John Parish',
						value: 'DM-05',
					},
					{
						name: 'Saint Joseph Parish',
						value: 'DM-06',
					},
					{
						name: 'Saint Luke Parish',
						value: 'DM-07',
					},
					{
						name: 'Saint Mark Parish',
						value: 'DM-08',
					},
					{
						name: 'Saint Patrick Parish',
						value: 'DM-09',
					},
					{
						name: 'Saint Paul Parish',
						value: 'DM-10',
					},
					{
						name: 'Saint Peter Parish',
						value: 'DM-11',
					},
					{
						name: 'Dominican Republic',
						value: 'DO',
					},
					{
						name: 'Azua Province',
						value: 'DO-02',
					},
					{
						name: 'Baoruco Province',
						value: 'DO-03',
					},
					{
						name: 'Barahona Province',
						value: 'DO-04',
					},
					{
						name: 'Dajabón Province',
						value: 'DO-05',
					},
					{
						name: 'Distrito Nacional',
						value: 'DO-01',
					},
					{
						name: 'Duarte Province',
						value: 'DO-06',
					},
					{
						name: 'El Seibo Province',
						value: 'DO-08',
					},
					{
						name: 'Elías Piña Province',
						value: 'DO-07',
					},
					{
						name: 'Espaillat Province',
						value: 'DO-09',
					},
					{
						name: 'Hato Mayor Province',
						value: 'DO-30',
					},
					{
						name: 'Hermanas Mirabal Province',
						value: 'DO-19',
					},
					{
						name: 'Independencia Province',
						value: 'DO-10',
					},
					{
						name: 'La Altagracia Province',
						value: 'DO-11',
					},
					{
						name: 'La Romana Province',
						value: 'DO-12',
					},
					{
						name: 'La Vega Province',
						value: 'DO-13',
					},
					{
						name: 'María Trinidad Sánchez Province',
						value: 'DO-14',
					},
					{
						name: 'Monseñor Nouel Province',
						value: 'DO-28',
					},
					{
						name: 'Monte Cristi Province',
						value: 'DO-15',
					},
					{
						name: 'Monte Plata Province',
						value: 'DO-29',
					},
					{
						name: 'Pedernales Province',
						value: 'DO-16',
					},
					{
						name: 'Peravia Province',
						value: 'DO-17',
					},
					{
						name: 'Puerto Plata Province',
						value: 'DO-18',
					},
					{
						name: 'Samaná Province',
						value: 'DO-20',
					},
					{
						name: 'San Cristóbal Province',
						value: 'DO-21',
					},
					{
						name: 'San José de Ocoa Province',
						value: 'DO-31',
					},
					// eslint-disable-next-line n8n-nodes-base/node-param-option-name-duplicate
					{
						name: 'San Juan Province',
						value: 'DO-22',
					},
					{
						name: 'San Pedro de Macorís Province',
						value: 'DO-23',
					},
					{
						name: 'Sánchez Ramírez Province',
						value: 'DO-24',
					},
					{
						name: 'Santiago Province',
						value: 'DO-25',
					},
					{
						name: 'Santiago Rodríguez Province',
						value: 'DO-26',
					},
					{
						name: 'Santo Domingo Province',
						value: 'DO-32',
					},
					{
						name: 'Valverde Province',
						value: 'DO-27',
					},
					{
						name: 'Ecuador',
						value: 'EC',
					},
					{
						name: 'Azuay',
						value: 'EC-A',
					},
					{
						name: 'Bolívar Province',
						value: 'EC-B',
					},
					{
						name: 'Cañar Province',
						value: 'EC-F',
					},
					{
						name: 'Carchi Province',
						value: 'EC-C',
					},
					{
						name: 'Chimborazo Province',
						value: 'EC-H',
					},
					{
						name: 'Cotopaxi Province',
						value: 'EC-X',
					},
					{
						name: 'El Oro',
						value: 'EC-O',
					},
					{
						name: 'Esmeraldas Province',
						value: 'EC-E',
					},
					{
						name: 'Galápagos Islands',
						value: 'EC-W',
					},
					{
						name: 'Guayas',
						value: 'EC-G',
					},
					{
						name: 'Imbabura Province',
						value: 'EC-I',
					},
					{
						name: 'Loja',
						value: 'EC-L',
					},
					{
						name: 'Los Ríos Province',
						value: 'EC-R',
					},
					{
						name: 'Manabí Province',
						value: 'EC-M',
					},
					{
						name: 'Morona-Santiago Province',
						value: 'EC-S',
					},
					{
						name: 'Orellana Province',
						value: 'EC-D',
					},
					{
						name: 'Pastaza Province',
						value: 'EC-Y',
					},
					{
						name: 'Pichincha',
						value: 'EC-P',
					},
					{
						name: 'Provincia de Napo',
						value: 'EC-N',
					},
					{
						name: 'Santa Elena Province',
						value: 'EC-SE',
					},
					{
						name: 'Santo Domingo de los Tsáchilas Province',
						value: 'EC-SD',
					},
					{
						name: 'Sucumbíos Province',
						value: 'EC-U',
					},
					{
						name: 'Tungurahua',
						value: 'EC-T',
					},
					{
						name: 'Zamora-Chinchipe Province',
						value: 'EC-Z',
					},
					{
						name: 'Egypt',
						value: 'EG',
					},
					{
						name: 'Al Qalyubia Governorate',
						value: 'EG-KB',
					},
					{
						name: 'Alexandria Governorate',
						value: 'EG-ALX',
					},
					{
						name: 'Ash Sharqia Governorate',
						value: 'EG-SHR',
					},
					{
						name: 'Assiut Governorate',
						value: 'EG-AST',
					},
					{
						name: 'Aswan Governorate',
						value: 'EG-ASN',
					},
					{
						name: 'Beni Suef Governorate',
						value: 'EG-BNS',
					},
					{
						name: 'Cairo Governorate',
						value: 'EG-C',
					},
					{
						name: 'Dakahlia Governorate',
						value: 'EG-DK',
					},
					{
						name: 'Damietta Governorate',
						value: 'EG-DT',
					},
					{
						name: 'El Beheira Governorate',
						value: 'EG-BH',
					},
					{
						name: 'Faiyum Governorate',
						value: 'EG-FYM',
					},
					{
						name: 'Gharbia Governorate',
						value: 'EG-GH',
					},
					{
						name: 'Giza Governorate',
						value: 'EG-GZ',
					},
					{
						name: 'Ismailia Governorate',
						value: 'EG-IS',
					},
					{
						name: 'Kafr El Sheikh Governorate',
						value: 'EG-KFS',
					},
					{
						name: 'Luxor Governorate',
						value: 'EG-LX',
					},
					{
						name: 'Matrouh Governorate',
						value: 'EG-MT',
					},
					{
						name: 'Menia Governorate',
						value: 'EG-MN',
					},
					{
						name: 'Menofia Governorate',
						value: 'EG-MNF',
					},
					{
						name: 'New Valley Governorate',
						value: 'EG-WAD',
					},
					{
						name: 'North Sinai Governorate',
						value: 'EG-SIN',
					},
					{
						name: 'Port Said Governorate',
						value: 'EG-PTS',
					},
					{
						name: 'Qena Governorate',
						value: 'EG-KN',
					},
					{
						name: 'Red Sea Governorate',
						value: 'EG-BA',
					},
					{
						name: 'Sohag Governorate',
						value: 'EG-SHG',
					},
					{
						name: 'South Sinai Governorate',
						value: 'EG-JS',
					},
					{
						name: 'Suez Governorate',
						value: 'EG-SUZ',
					},
					{
						name: 'El Salvador',
						value: 'SV',
					},
					{
						name: 'Ahuachapan',
						value: 'SV-AH',
					},
					{
						name: 'Cabanas',
						value: 'SV-CA',
					},
					{
						name: 'Chalatenango',
						value: 'SV-CH',
					},
					{
						name: 'Cuscatlan',
						value: 'SV-CU',
					},
					{
						name: 'La Libertad',
						value: 'SV-LI',
					},
					{
						name: 'La Paz',
						value: 'SV-PA',
					},
					{
						name: 'La Union',
						value: 'SV-UN',
					},
					{
						name: 'Morazan',
						value: 'SV-MO',
					},
					{
						name: 'San Miguel',
						value: 'SV-SM',
					},
					{
						name: 'San Salvador',
						value: 'SV-SS',
					},
					{
						name: 'San Vicente',
						value: 'SV-SV',
					},
					{
						name: 'Santa Ana',
						value: 'SV-SA',
					},
					{
						name: 'Sonsonate',
						value: 'SV-SO',
					},
					{
						name: 'Usulutan',
						value: 'SV-US',
					},
					{
						name: 'Equatorial Guinea',
						value: 'GQ',
					},
					{
						name: 'Annobón',
						value: 'GQ-AN',
					},
					{
						name: 'Bioko Norte',
						value: 'GQ-BN',
					},
					{
						name: 'Bioko Sur',
						value: 'GQ-BS',
					},
					{
						name: 'Centro Sur',
						value: 'GQ-CS',
					},
					{
						name: 'Kie-Ntem',
						value: 'GQ-KN',
					},
					{
						name: 'Litoral',
						value: 'GQ-LI',
					},
					{
						name: 'Wele-Nzas',
						value: 'GQ-WN',
					},
					{
						name: 'Eritrea',
						value: 'ER',
					},
					{
						name: 'Anseba',
						value: 'ER-AN',
					},
					{
						name: 'Central',
						value: 'ER-MA',
					},
					{
						name: 'Gash-Barka',
						value: 'ER-GB',
					},
					{
						name: 'Northern Red Sea',
						value: 'ER-SK',
					},
					{
						name: 'Southern',
						value: 'ER-DU',
					},
					{
						name: 'Southern Red Sea',
						value: 'ER-DK',
					},
					{
						name: 'Estonia',
						value: 'EE',
					},
					{
						name: 'Harju County',
						value: 'EE-37',
					},
					{
						name: 'Hiiu County',
						value: 'EE-39',
					},
					{
						name: 'Ida-Viru County',
						value: 'EE-44',
					},
					{
						name: 'Järva County',
						value: 'EE-51',
					},
					{
						name: 'Jõgeva County',
						value: 'EE-49',
					},
					{
						name: 'Lääne County',
						value: 'EE-57',
					},
					{
						name: 'Lääne-Viru County',
						value: 'EE-59',
					},
					{
						name: 'Pärnu County',
						value: 'EE-67',
					},
					{
						name: 'Põlva County',
						value: 'EE-65',
					},
					{
						name: 'Rapla County',
						value: 'EE-70',
					},
					{
						name: 'Saare County',
						value: 'EE-74',
					},
					{
						name: 'Tartu County',
						value: 'EE-78',
					},
					{
						name: 'Valga County',
						value: 'EE-82',
					},
					{
						name: 'Viljandi County',
						value: 'EE-84',
					},
					{
						name: 'Võru County',
						value: 'EE-86',
					},
					{
						name: 'Eswatini',
						value: 'SZ',
					},
					{
						name: 'Hhohho',
						value: 'SZ-HH',
					},
					{
						name: 'Lubombo',
						value: 'SZ-LU',
					},
					{
						name: 'Manzini',
						value: 'SZ-MA',
					},
					{
						name: 'Shiselweni',
						value: 'SZ-SH',
					},
					{
						name: 'Ethiopia',
						value: 'ET',
					},
					{
						name: 'Addis Ababa',
						value: 'ET-AA',
					},
					{
						name: 'Afar',
						value: 'ET-AF',
					},
					{
						name: 'Amhara',
						value: 'ET-AM',
					},
					{
						name: 'Benishangul-Gumuz',
						value: 'ET-BE',
					},
					{
						name: 'Dire Dawa',
						value: 'ET-DD',
					},
					{
						name: 'Gambella',
						value: 'ET-GA',
					},
					{
						name: 'Harari',
						value: 'ET-HA',
					},
					{
						name: 'Oromia',
						value: 'ET-OR',
					},
					{
						name: 'Somali',
						value: 'ET-SO',
					},
					{
						name: "Southern Nations, Nationalities, and People's Region",
						value: 'ET-SN',
					},
					{
						name: 'Tigray',
						value: 'ET-TI',
					},
					{
						name: 'Falkland Islands (Islas Malvinas)',
						value: 'FK',
					},
					{
						name: 'Faroe Islands',
						value: 'FO',
					},
					{
						name: 'Fiji',
						value: 'FJ',
					},
					{
						name: 'Central Division',
						value: 'FJ-C',
					},
					{
						name: 'Eastern Division',
						value: 'FJ-E',
					},
					{
						name: 'Northern Division',
						value: 'FJ-N',
					},
					{
						name: 'Rotuma',
						value: 'FJ-R',
					},
					{
						name: 'Western Division',
						value: 'FJ-W',
					},
					{
						name: 'Finland',
						value: 'FI',
					},
					{
						name: 'Central Finland',
						value: 'FI-08',
					},
					{
						name: 'Central Ostrobothnia',
						value: 'FI-07',
					},
					{
						name: 'Kainuu',
						value: 'FI-05',
					},
					{
						name: 'Kymenlaakso',
						value: 'FI-09',
					},
					{
						name: 'Lapland',
						value: 'FI-10',
					},
					{
						name: 'North Karelia',
						value: 'FI-13',
					},
					{
						name: 'Northern Ostrobothnia',
						value: 'FI-14',
					},
					{
						name: 'Northern Savonia',
						value: 'FI-15',
					},
					{
						name: 'Ostrobothnia',
						value: 'FI-12',
					},
					{
						name: 'Päijänne Tavastia',
						value: 'FI-16',
					},
					{
						name: 'Pirkanmaa',
						value: 'FI-11',
					},
					{
						name: 'Satakunta',
						value: 'FI-17',
					},
					{
						name: 'South Karelia',
						value: 'FI-02',
					},
					{
						name: 'Southern Ostrobothnia',
						value: 'FI-03',
					},
					{
						name: 'Southern Savonia',
						value: 'FI-04',
					},
					{
						name: 'Southwest Finland',
						value: 'FI-19',
					},
					{
						name: 'Tavastia Proper',
						value: 'FI-06',
					},
					{
						name: 'Uusimaa',
						value: 'FI-18',
					},
					{
						name: 'France',
						value: 'FR',
					},
					{
						name: 'Alsace',
						value: 'FR-A',
					},
					{
						name: 'Aquitaine',
						value: 'FR-B',
					},
					{
						name: 'Auvergne',
						value: 'FR-C',
					},
					{
						name: 'Brittany',
						value: 'FR-E',
					},
					{
						name: 'Burgundy',
						value: 'FR-D',
					},
					{
						name: 'Centre-Val de Loire',
						value: 'FR-F',
					},
					{
						name: 'Champagne-Ardenne',
						value: 'FR-G',
					},
					{
						name: 'Corsica',
						value: 'FR-H',
					},
					{
						name: 'Franche-Comté',
						value: 'FR-I',
					},
					{
						name: 'Île-de-France',
						value: 'FR-J',
					},
					{
						name: 'Languedoc-Roussillon',
						value: 'FR-K',
					},
					{
						name: 'Limousin',
						value: 'FR-L',
					},
					{
						name: 'Lorraine',
						value: 'FR-M',
					},
					{
						name: 'Lower Normandy',
						value: 'FR-P',
					},
					{
						name: 'Midi-Pyrénées',
						value: 'FR-N',
					},
					{
						name: 'Nord-Pas-de-Calais',
						value: 'FR-O',
					},
					{
						name: 'Pays de la Loire',
						value: 'FR-R',
					},
					{
						name: 'Picardy',
						value: 'FR-S',
					},
					{
						name: 'Poitou-Charentes',
						value: 'FR-T',
					},
					{
						name: "Provence-Alpes-Côte d'Azur",
						value: 'FR-U',
					},
					{
						name: 'Rhone-Alpes',
						value: 'FR-V',
					},
					{
						name: 'Upper Normandy',
						value: 'FR-Q',
					},
					{
						name: 'French Guiana',
						value: 'GF',
					},
					{
						name: 'French Polynesia',
						value: 'PF',
					},
					{
						name: 'French Southern Territories',
						value: 'TF',
					},
					{
						name: 'Gabon',
						value: 'GA',
					},
					{
						name: 'Estuaire',
						value: 'GA-1',
					},
					{
						name: 'Haut-Ogooue',
						value: 'GA-2',
					},
					{
						name: 'Moyen-Ogooue',
						value: 'GA-3',
					},
					{
						name: 'Ngounie',
						value: 'GA-4',
					},
					{
						name: 'Nyanga',
						value: 'GA-5',
					},
					{
						name: 'Ogooue-Ivindo',
						value: 'GA-6',
					},
					{
						name: 'Ogooue-Lolo',
						value: 'GA-7',
					},
					{
						name: 'Ogooue-Maritime',
						value: 'GA-8',
					},
					{
						name: 'Woleu-Ntem',
						value: 'GA-9',
					},
					{
						name: 'Gambia',
						value: 'GM',
					},
					{
						name: 'Banjul',
						value: 'GM-B',
					},
					{
						name: 'Central River',
						value: 'GM-M',
					},
					{
						name: 'Lower River',
						value: 'GM-L',
					},
					{
						name: 'North Bank Division',
						value: 'GM-N',
					},
					{
						name: 'Upper River',
						value: 'GM-U',
					},
					{
						name: 'West Coast Region',
						value: 'GM-W',
					},
					{
						name: 'Georgia',
						value: 'GE',
					},
					{
						name: 'Abkhazia',
						value: 'GE-AB',
					},
					{
						name: 'Adjara',
						value: 'GE-AJ',
					},
					{
						name: 'Guria',
						value: 'GE-GU',
					},
					{
						name: 'Imereti',
						value: 'GE-IM',
					},
					{
						name: 'Kakheti',
						value: 'GE-KA',
					},
					{
						name: 'Kvemo Kartli',
						value: 'GE-KK',
					},
					{
						name: 'Mtskheta-Mtianeti',
						value: 'GE-MM',
					},
					{
						name: 'Racha-Lechkhumi and Lower Svaneti',
						value: 'GE-RL',
					},
					{
						name: 'Samegrelo-Upper Svaneti',
						value: 'GE-SZ',
					},
					{
						name: 'Samtskhe-Javakheti',
						value: 'GE-SJ',
					},
					{
						name: 'Shida Kartli',
						value: 'GE-SK',
					},
					{
						name: 'Tbilisi',
						value: 'GE-TB',
					},
					{
						name: 'Germany',
						value: 'DE',
					},
					{
						name: 'Baden-Württemberg',
						value: 'DE-BW',
					},
					{
						name: 'Bavaria',
						value: 'DE-BY',
					},
					{
						name: 'Berlin',
						value: 'DE-BE',
					},
					{
						name: 'Brandenburg',
						value: 'DE-BB',
					},
					{
						name: 'Bremen',
						value: 'DE-HB',
					},
					{
						name: 'Hamburg',
						value: 'DE-HH',
					},
					{
						name: 'Hesse',
						value: 'DE-HE',
					},
					{
						name: 'Lower Saxony',
						value: 'DE-NI',
					},
					{
						name: 'Mecklenburg-Vorpommern',
						value: 'DE-MV',
					},
					{
						name: 'North Rhine-Westphalia',
						value: 'DE-NW',
					},
					{
						name: 'Rhineland-Palatinate',
						value: 'DE-RP',
					},
					{
						name: 'Saarland',
						value: 'DE-SL',
					},
					{
						name: 'Saxony',
						value: 'DE-SN',
					},
					{
						name: 'Saxony-Anhalt',
						value: 'DE-ST',
					},
					{
						name: 'Schleswig-Holstein',
						value: 'DE-SH',
					},
					{
						name: 'Thuringia',
						value: 'DE-TH',
					},
					{
						name: 'Ghana',
						value: 'GH',
					},
					{
						name: 'Ashanti Region',
						value: 'GH-AH',
					},
					{
						name: 'Brong-Ahafo Region',
						value: 'GH-BA',
					},
					{
						name: 'Central',
						value: 'GH-CP',
					},
					{
						name: 'Eastern Region',
						value: 'GH-EP',
					},
					{
						name: 'Greater Accra Region',
						value: 'GH-AA',
					},
					{
						name: 'Northern Region',
						value: 'GH-NP',
					},
					{
						name: 'Upper East Region',
						value: 'GH-UE',
					},
					{
						name: 'Upper West Region',
						value: 'GH-UW',
					},
					{
						name: 'Volta Region',
						value: 'GH-TV',
					},
					{
						name: 'Western Region',
						value: 'GH-WP',
					},
					{
						name: 'Gibraltar',
						value: 'GI',
					},
					{
						name: 'Greece',
						value: 'GR',
					},
					{
						name: 'Greenland',
						value: 'GL',
					},
					{
						name: 'Kujalleq',
						value: 'GL-KU',
					},
					{
						name: 'Qaasuitsup',
						value: 'GL-QA',
					},
					{
						name: 'Qeqqata',
						value: 'GL-QE',
					},
					{
						name: 'Sermersooq',
						value: 'GL-SM',
					},
					{
						name: 'Grenada',
						value: 'GD',
					},
					{
						name: 'Carriacou and Petite Martinique',
						value: 'GD-10',
					},
					{
						name: 'Saint Andrew',
						value: 'GD-01',
					},
					{
						name: 'Saint David',
						value: 'GD-02',
					},
					{
						name: 'Saint George',
						value: 'GD-03',
					},
					{
						name: 'Saint John',
						value: 'GD-04',
					},
					{
						name: 'Saint Mark',
						value: 'GD-05',
					},
					{
						name: 'Saint Patrick',
						value: 'GD-06',
					},
					{
						name: 'Guadeloupe',
						value: 'GP',
					},
					{
						name: 'Guam',
						value: 'GU',
					},
					{
						name: 'Guatemala',
						value: 'GT',
					},
					{
						name: 'Alta Verapaz',
						value: 'GT-AV',
					},
					{
						name: 'Baja Verapaz Department',
						value: 'GT-BV',
					},
					{
						name: 'Chimaltenango Department',
						value: 'GT-CM',
					},
					{
						name: 'Chiquimula Department',
						value: 'GT-CQ',
					},
					{
						name: 'El Progreso Department',
						value: 'GT-PR',
					},
					{
						name: 'Escuintla',
						value: 'GT-ES',
					},
					{
						name: 'Guatemala Department',
						value: 'GT-GU',
					},
					{
						name: 'Huehuetenango Department',
						value: 'GT-HU',
					},
					{
						name: 'Izabal Department',
						value: 'GT-IZ',
					},
					{
						name: 'Jalapa Department',
						value: 'GT-JA',
					},
					{
						name: 'Jutiapa Department',
						value: 'GT-JU',
					},
					{
						name: 'Petén Department',
						value: 'GT-PE',
					},
					{
						name: 'Quetzaltenango Department',
						value: 'GT-QZ',
					},
					{
						name: 'Quiché Department',
						value: 'GT-QC',
					},
					{
						name: 'Retalhuleu Department',
						value: 'GT-RE',
					},
					{
						name: 'Sacatepequez',
						value: 'GT-SA',
					},
					{
						name: 'San Marcos Department',
						value: 'GT-SM',
					},
					{
						name: 'Santa Rosa Department',
						value: 'GT-SR',
					},
					{
						name: 'Sololá Department',
						value: 'GT-SO',
					},
					{
						name: 'Suchitepequez',
						value: 'GT-SU',
					},
					{
						name: 'Totonicapán Department',
						value: 'GT-TO',
					},
					{
						name: 'Zacapa Department',
						value: 'GT-ZA',
					},
					{
						name: 'Guernsey',
						value: 'GG',
					},
					{
						name: 'Guinea',
						value: 'GN',
					},
					{
						name: 'Boké',
						value: 'GN-B',
					},
					{
						name: 'Conakry',
						value: 'GN-C',
					},
					{
						name: 'Faranah',
						value: 'GN-F',
					},
					{
						name: 'Kankan',
						value: 'GN-K',
					},
					{
						name: 'Kindia',
						value: 'GN-D',
					},
					{
						name: 'Labé',
						value: 'GN-L',
					},
					{
						name: 'Mamou',
						value: 'GN-M',
					},
					{
						name: 'Nzérékoré',
						value: 'GN-N',
					},
					{
						name: 'Guinea-Bissau',
						value: 'GW',
					},
					{
						name: 'Bafata',
						value: 'GW-BA',
					},
					{
						name: 'Biombo',
						value: 'GW-BM',
					},
					{
						name: 'Bissau',
						value: 'GW-BS',
					},
					{
						name: 'Bolama',
						value: 'GW-BL',
					},
					{
						name: 'Cacheu',
						value: 'GW-CA',
					},
					{
						name: 'Gabu',
						value: 'GW-GA',
					},
					{
						name: 'Oio',
						value: 'GW-OI',
					},
					{
						name: 'Quinara',
						value: 'GW-QU',
					},
					{
						name: 'Tombali Region',
						value: 'GW-TO',
					},
					{
						name: 'Guyana',
						value: 'GY',
					},
					{
						name: 'Barima-Waini',
						value: 'GY-BA',
					},
					{
						name: 'Cuyuni-Mazaruni',
						value: 'GY-CU',
					},
					{
						name: 'Demerara-Mahaica',
						value: 'GY-DE',
					},
					{
						name: 'East Berbice-Corentyne',
						value: 'GY-EB',
					},
					{
						name: 'Essequibo Islands-West Demerara',
						value: 'GY-ES',
					},
					{
						name: 'Mahaica-Berbice',
						value: 'GY-MA',
					},
					{
						name: 'Pomeroon-Supenaam',
						value: 'GY-PM',
					},
					{
						name: 'Potaro-Siparuni',
						value: 'GY-PT',
					},
					{
						name: 'Upper Demerara-Berbice',
						value: 'GY-UD',
					},
					{
						name: 'Upper Takutu-Upper Essequibo',
						value: 'GY-UT',
					},
					{
						name: 'Haiti',
						value: 'HT',
					},
					{
						name: 'Artibonite',
						value: 'HT-AR',
					},
					{
						name: 'Centre',
						value: 'HT-CE',
					},
					{
						name: "Grand'Anse",
						value: 'HT-GA',
					},
					{
						name: 'Nippes',
						value: 'HT-NI',
					},
					{
						name: 'Nord',
						value: 'HT-ND',
					},
					{
						name: 'Nord-Est',
						value: 'HT-NE',
					},
					{
						name: 'Nord-Ouest',
						value: 'HT-NO',
					},
					{
						name: 'Ouest',
						value: 'HT-OU',
					},
					{
						name: 'Sud',
						value: 'HT-SD',
					},
					{
						name: 'Sud-Est',
						value: 'HT-SE',
					},
					{
						name: 'Heard & McDonald Islands',
						value: 'HM',
					},
					{
						name: 'Honduras',
						value: 'HN',
					},
					{
						name: 'Atlantida',
						value: 'HN-AT',
					},
					{
						name: 'Bay Islands',
						value: 'HN-IB',
					},
					{
						name: 'Choluteca',
						value: 'HN-CH',
					},
					{
						name: 'Colon',
						value: 'HN-CL',
					},
					{
						name: 'Comayagua',
						value: 'HN-CM',
					},
					{
						name: 'Copan',
						value: 'HN-CP',
					},
					{
						name: 'Cortés',
						value: 'HN-CR',
					},
					{
						name: 'El Paraiso',
						value: 'HN-EP',
					},
					{
						name: 'Francisco Morazan',
						value: 'HN-FM',
					},
					{
						name: 'Gracias a Dios',
						value: 'HN-GD',
					},
					{
						name: 'Intibuca',
						value: 'HN-IN',
					},
					{
						name: 'La Paz',
						value: 'HN-LP',
					},
					{
						name: 'Lempira',
						value: 'HN-LE',
					},
					{
						name: 'Ocotepeque',
						value: 'HN-OC',
					},
					{
						name: 'Olancho',
						value: 'HN-OL',
					},
					{
						name: 'Santa Barbara',
						value: 'HN-SB',
					},
					{
						name: 'Valle',
						value: 'HN-VA',
					},
					{
						name: 'Yoro',
						value: 'HN-YO',
					},
					{
						name: 'Hong Kong',
						value: 'HK',
					},
					{
						name: 'Hungary',
						value: 'HU',
					},
					{
						name: 'Bács-Kiskun',
						value: 'HU-BK',
					},
					{
						name: 'Baranya',
						value: 'HU-BA',
					},
					{
						name: 'Békés County',
						value: 'HU-BE',
					},
					{
						name: 'Borsod-Abaúj-Zemplén',
						value: 'HU-BZ',
					},
					{
						name: 'Budapest',
						value: 'HU-BU',
					},
					{
						name: 'Csongrád',
						value: 'HU-CS',
					},
					{
						name: 'Fejér',
						value: 'HU-FE',
					},
					{
						name: 'Gyor-Moson-Sopron',
						value: 'HU-GS',
					},
					{
						name: 'Hajdú-Bihar',
						value: 'HU-HB',
					},
					{
						name: 'Heves County',
						value: 'HU-HE',
					},
					{
						name: 'Jász-Nagykun-Szolnok',
						value: 'HU-JN',
					},
					{
						name: 'Komárom-Esztergom',
						value: 'HU-KE',
					},
					{
						name: 'Nógrád County',
						value: 'HU-NO',
					},
					{
						name: 'Pest County',
						value: 'HU-PE',
					},
					{
						name: 'Somogy County',
						value: 'HU-SO',
					},
					{
						name: 'Szabolcs-Szatmár-Bereg',
						value: 'HU-SZ',
					},
					{
						name: 'Tolna County',
						value: 'HU-TO',
					},
					{
						name: 'Vas County',
						value: 'HU-VA',
					},
					{
						name: 'Veszprém',
						value: 'HU-VE',
					},
					{
						name: 'Zala County',
						value: 'HU-ZA',
					},
					{
						name: 'Iceland',
						value: 'IS',
					},
					{
						name: 'Capital Region',
						value: 'IS-1',
					},
					{
						name: 'Eastern Region',
						value: 'IS-7',
					},
					{
						name: 'Northeast',
						value: 'IS-6',
					},
					{
						name: 'Northwestern Region',
						value: 'IS-5',
					},
					{
						name: 'South',
						value: 'IS-8',
					},
					{
						name: 'Southern Peninsula Region',
						value: 'IS-2',
					},
					{
						name: 'Western Region',
						value: 'IS-3',
					},
					{
						name: 'Westfjords Region',
						value: 'IS-4',
					},
					{
						name: 'India',
						value: 'IN',
					},
					{
						name: 'Andaman and Nicobar Islands',
						value: 'IN-AN',
					},
					{
						name: 'Andhra Pradesh',
						value: 'IN-AP',
					},
					{
						name: 'Arunachal Pradesh',
						value: 'IN-AR',
					},
					{
						name: 'Assam',
						value: 'IN-AS',
					},
					{
						name: 'Bihar',
						value: 'IN-BR',
					},
					{
						name: 'Chandigarh',
						value: 'IN-CH',
					},
					{
						name: 'Chhattisgarh',
						value: 'IN-CT',
					},
					{
						name: 'Dadra and Nagar Haveli',
						value: 'IN-DN',
					},
					{
						name: 'Daman and Diu',
						value: 'IN-DD',
					},
					{
						name: 'Delhi',
						value: 'IN-DL',
					},
					{
						name: 'Goa',
						value: 'IN-GA',
					},
					{
						name: 'Gujarat',
						value: 'IN-GJ',
					},
					{
						name: 'Haryana',
						value: 'IN-HR',
					},
					{
						name: 'Himachal Pradesh',
						value: 'IN-HP',
					},
					{
						name: 'Jammu and Kashmir',
						value: 'IN-JK',
					},
					{
						name: 'Jharkhand',
						value: 'IN-JH',
					},
					{
						name: 'Karnataka',
						value: 'IN-KA',
					},
					{
						name: 'Kerala',
						value: 'IN-KL',
					},
					{
						name: 'Lakshadweep',
						value: 'IN-LD',
					},
					{
						name: 'Madhya Pradesh',
						value: 'IN-MP',
					},
					{
						name: 'Maharashtra',
						value: 'IN-MH',
					},
					{
						name: 'Manipur',
						value: 'IN-MN',
					},
					{
						name: 'Meghalaya',
						value: 'IN-ML',
					},
					{
						name: 'Mizoram',
						value: 'IN-MZ',
					},
					{
						name: 'Nagaland',
						value: 'IN-NL',
					},
					{
						name: 'Odisha',
						value: 'IN-OR',
					},
					{
						name: 'Puducherry',
						value: 'IN-PY',
					},
					{
						name: 'Punjab',
						value: 'IN-PB',
					},
					{
						name: 'Rajasthan',
						value: 'IN-RJ',
					},
					{
						name: 'Sikkim',
						value: 'IN-SK',
					},
					{
						name: 'Tamil Nadu',
						value: 'IN-TN',
					},
					{
						name: 'Telangana',
						value: 'IN-TG',
					},
					{
						name: 'Tripura',
						value: 'IN-TR',
					},
					{
						name: 'Uttar Pradesh',
						value: 'IN-UP',
					},
					{
						name: 'Uttarakhand',
						value: 'IN-UT',
					},
					{
						name: 'West Bengal',
						value: 'IN-WB',
					},
					{
						name: 'Indonesia',
						value: 'ID',
					},
					{
						name: 'Aceh',
						value: 'ID-AC',
					},
					{
						name: 'Bali',
						value: 'ID-BA',
					},
					{
						name: 'Bangka Belitung Islands',
						value: 'ID-BB',
					},
					{
						name: 'Banten',
						value: 'ID-BT',
					},
					{
						name: 'Bengkulu',
						value: 'ID-BE',
					},
					{
						name: 'Central Java',
						value: 'ID-JT',
					},
					{
						name: 'Central Kalimantan',
						value: 'ID-KT',
					},
					{
						name: 'Central Sulawesi',
						value: 'ID-ST',
					},
					{
						name: 'East Java',
						value: 'ID-JI',
					},
					{
						name: 'East Kalimantan',
						value: 'ID-KI',
					},
					{
						name: 'East Nusa Tenggara',
						value: 'ID-NT',
					},
					{
						name: 'Gorontalo',
						value: 'ID-GO',
					},
					{
						name: 'Jambi',
						value: 'ID-JA',
					},
					{
						name: 'Lampung',
						value: 'ID-LA',
					},
					{
						name: 'Maluku',
						value: 'ID-MA',
					},
					{
						name: 'North Kalimantan',
						value: 'ID-KU',
					},
					{
						name: 'North Maluku',
						value: 'ID-MU',
					},
					{
						name: 'North Sulawesi',
						value: 'ID-SA',
					},
					{
						name: 'North Sumatra',
						value: 'ID-SU',
					},
					{
						name: 'Papua',
						value: 'ID-PA',
					},
					{
						name: 'Riau',
						value: 'ID-RI',
					},
					{
						name: 'Riau Islands',
						value: 'ID-KR',
					},
					{
						name: 'South East Sulawesi',
						value: 'ID-SG',
					},
					{
						name: 'South Kalimantan',
						value: 'ID-KS',
					},
					{
						name: 'South Sulawesi',
						value: 'ID-SN',
					},
					{
						name: 'South Sumatra',
						value: 'ID-SS',
					},
					{
						name: 'Special Capital Region of Jakarta',
						value: 'ID-JK',
					},
					{
						name: 'Special Region of Yogyakarta',
						value: 'ID-YO',
					},
					{
						name: 'West Java',
						value: 'ID-JB',
					},
					{
						name: 'West Kalimantan',
						value: 'ID-KB',
					},
					{
						name: 'West Nusa Tenggara',
						value: 'ID-NB',
					},
					{
						name: 'West Papua',
						value: 'ID-PB',
					},
					{
						name: 'West Sulawesi',
						value: 'ID-SR',
					},
					{
						name: 'West Sumatra',
						value: 'ID-SB',
					},
					{
						name: 'Iran',
						value: 'IR',
					},
					{
						name: 'Alborz',
						value: 'IR-32',
					},
					{
						name: 'Ardabil',
						value: 'IR-03',
					},
					{
						name: 'Bushehr',
						value: 'IR-06',
					},
					{
						name: 'Chaharmahal and Bakhtiari',
						value: 'IR-08',
					},
					{
						name: 'East Azerbaijan',
						value: 'IR-01',
					},
					{
						name: 'Fars',
						value: 'IR-14',
					},
					{
						name: 'Gilan',
						value: 'IR-19',
					},
					{
						name: 'Golestan',
						value: 'IR-27',
					},
					{
						name: 'Hamadan',
						value: 'IR-24',
					},
					{
						name: 'Hormozgan',
						value: 'IR-23',
					},
					{
						name: 'Ilam',
						value: 'IR-05',
					},
					{
						name: 'Isfahan',
						value: 'IR-04',
					},
					{
						name: 'Kerman',
						value: 'IR-15',
					},
					{
						name: 'Kermanshah',
						value: 'IR-17',
					},
					{
						name: 'Khorasan Razavi',
						value: 'IR-30',
					},
					{
						name: 'Khuzestan',
						value: 'IR-10',
					},
					{
						name: 'Kohgiluyeh Va Boyer Ahmad',
						value: 'IR-18',
					},
					{
						name: 'Kurdistan',
						value: 'IR-16',
					},
					{
						name: 'Lorestan',
						value: 'IR-20',
					},
					{
						name: 'Markazi',
						value: 'IR-22',
					},
					{
						name: 'Mazandaran',
						value: 'IR-21',
					},
					{
						name: 'North Khorasan',
						value: 'IR-31',
					},
					{
						name: 'Qazvin',
						value: 'IR-28',
					},
					{
						name: 'Qom',
						value: 'IR-26',
					},
					{
						name: 'Semnan',
						value: 'IR-12',
					},
					{
						name: 'Sistan and Baluchestan',
						value: 'IR-13',
					},
					{
						name: 'South Khorasan',
						value: 'IR-29',
					},
					{
						name: 'Tehran',
						value: 'IR-07',
					},
					{
						name: 'West Azerbaijan',
						value: 'IR-02',
					},
					{
						name: 'Yazd',
						value: 'IR-25',
					},
					{
						name: 'Zanjan',
						value: 'IR-11',
					},
					{
						name: 'Iraq',
						value: 'IQ',
					},
					{
						name: 'Al Anbar',
						value: 'IQ-AN',
					},
					{
						name: 'Al Muthanna',
						value: 'IQ-MU',
					},
					{
						name: 'Al-Qadisiyyah',
						value: 'IQ-QA',
					},
					{
						name: 'An-Najaf',
						value: 'IQ-NA',
					},
					{
						name: 'Babil',
						value: 'IQ-BB',
					},
					{
						name: 'Baghdad',
						value: 'IQ-BG',
					},
					{
						name: 'Basrah',
						value: 'IQ-BA',
					},
					{
						name: 'Dhi Qar',
						value: 'IQ-DQ',
					},
					{
						name: 'Diyala',
						value: 'IQ-DI',
					},
					{
						name: 'Duhok',
						value: 'IQ-DA',
					},
					{
						name: 'Erbil',
						value: 'IQ-AR',
					},
					{
						name: 'Karbala',
						value: 'IQ-KA',
					},
					{
						name: 'Kirkuk',
						value: 'IQ-TS',
					},
					{
						name: 'Maysan',
						value: 'IQ-MA',
					},
					{
						name: 'Ninawa',
						value: 'IQ-NI',
					},
					{
						name: 'Salah Al-Din',
						value: 'IQ-SD',
					},
					{
						name: 'Sulaymaniyah',
						value: 'IQ-SU',
					},
					{
						name: 'Wasit',
						value: 'IQ-WA',
					},
					{
						name: 'Ireland',
						value: 'IE',
					},
					{
						name: 'Isle of Man',
						value: 'IM',
					},
					{
						name: 'Israel',
						value: 'IL',
					},
					{
						name: 'Center District',
						value: 'IL-M',
					},
					{
						name: 'Haifa District',
						value: 'IL-HA',
					},
					{
						name: 'Jerusalem District',
						value: 'IL-JM',
					},
					{
						name: 'North District',
						value: 'IL-Z',
					},
					{
						name: 'South District',
						value: 'IL-D',
					},
					{
						name: 'Tel Aviv District',
						value: 'IL-TA',
					},
					{
						name: 'Italy',
						value: 'IT',
					},
					{
						name: 'Abruzzo',
						value: 'IT-65',
					},
					{
						name: 'Aosta',
						value: 'IT-23',
					},
					{
						name: 'Apulia',
						value: 'IT-75',
					},
					{
						name: 'Basilicata',
						value: 'IT-77',
					},
					{
						name: 'Calabria',
						value: 'IT-78',
					},
					{
						name: 'Campania',
						value: 'IT-72',
					},
					{
						name: 'Emilia-Romagna',
						value: 'IT-45',
					},
					{
						name: 'Friuli-Venezia Giulia',
						value: 'IT-36',
					},
					{
						name: 'Lazio',
						value: 'IT-62',
					},
					{
						name: 'Liguria',
						value: 'IT-42',
					},
					{
						name: 'Lombardy',
						value: 'IT-25',
					},
					{
						name: 'Marche',
						value: 'IT-57',
					},
					{
						name: 'Molise',
						value: 'IT-67',
					},
					{
						name: 'Piedmont',
						value: 'IT-21',
					},
					{
						name: 'Sardinia',
						value: 'IT-88',
					},
					{
						name: 'Sicily',
						value: 'IT-82',
					},
					{
						name: 'Trentino-Alto Adige/South Tyrol',
						value: 'IT-32',
					},
					{
						name: 'Tuscany',
						value: 'IT-52',
					},
					{
						name: 'Umbria',
						value: 'IT-55',
					},
					{
						name: 'Veneto',
						value: 'IT-34',
					},
					{
						name: 'Jamaica',
						value: 'JM',
					},
					{
						name: 'Clarendon Parish',
						value: 'JM-13',
					},
					{
						name: 'Hanover Parish',
						value: 'JM-09',
					},
					{
						name: 'Kingston Parish',
						value: 'JM-01',
					},
					{
						name: 'Manchester Parish',
						value: 'JM-12',
					},
					{
						name: 'Portland Parish',
						value: 'JM-04',
					},
					{
						name: 'Saint Andrew Parish',
						value: 'JM-02',
					},
					{
						name: 'Saint Ann Parish',
						value: 'JM-06',
					},
					{
						name: 'Saint Catherine Parish',
						value: 'JM-14',
					},
					{
						name: 'Saint Elizabeth Parish',
						value: 'JM-11',
					},
					{
						name: 'Saint James Parish',
						value: 'JM-08',
					},
					{
						name: 'Saint Mary Parish',
						value: 'JM-05',
					},
					{
						name: 'Saint Thomas Parish',
						value: 'JM-03',
					},
					{
						name: 'Trelawny Parish',
						value: 'JM-07',
					},
					{
						name: 'Westmoreland Parish',
						value: 'JM-10',
					},
					{
						name: 'Japan',
						value: 'JP',
					},
					{
						name: 'Aichi Prefecture',
						value: 'JP-23',
					},
					{
						name: 'Akita Prefecture',
						value: 'JP-05',
					},
					{
						name: 'Aomori Prefecture',
						value: 'JP-02',
					},
					{
						name: 'Chiba Prefecture',
						value: 'JP-12',
					},
					{
						name: 'Ehime Prefecture',
						value: 'JP-38',
					},
					{
						name: 'Fukui Prefecture',
						value: 'JP-18',
					},
					{
						name: 'Fukuoka Prefecture',
						value: 'JP-40',
					},
					{
						name: 'Fukushima Prefecture',
						value: 'JP-07',
					},
					{
						name: 'Gifu Prefecture',
						value: 'JP-21',
					},
					{
						name: 'Gunma Prefecture',
						value: 'JP-10',
					},
					{
						name: 'Hiroshima Prefecture',
						value: 'JP-34',
					},
					{
						name: 'Hokkaido Prefecture',
						value: 'JP-01',
					},
					{
						name: 'Hyogo Prefecture',
						value: 'JP-28',
					},
					{
						name: 'Ibaraki Prefecture',
						value: 'JP-08',
					},
					{
						name: 'Ishikawa Prefecture',
						value: 'JP-17',
					},
					{
						name: 'Iwate Prefecture',
						value: 'JP-03',
					},
					{
						name: 'Kagawa Prefecture',
						value: 'JP-37',
					},
					{
						name: 'Kagoshima Prefecture',
						value: 'JP-46',
					},
					{
						name: 'Kanagawa Prefecture',
						value: 'JP-14',
					},
					{
						name: 'Kochi Prefecture',
						value: 'JP-39',
					},
					{
						name: 'Kumamoto Prefecture',
						value: 'JP-43',
					},
					{
						name: 'Kyoto Prefecture',
						value: 'JP-26',
					},
					{
						name: 'Mie Prefecture',
						value: 'JP-24',
					},
					{
						name: 'Miyagi Prefecture',
						value: 'JP-04',
					},
					{
						name: 'Miyazaki Prefecture',
						value: 'JP-45',
					},
					{
						name: 'Nagano Prefecture',
						value: 'JP-20',
					},
					{
						name: 'Nagasaki Prefecture',
						value: 'JP-42',
					},
					{
						name: 'Nara Prefecture',
						value: 'JP-29',
					},
					{
						name: 'Niigata Prefecture',
						value: 'JP-15',
					},
					{
						name: 'Oita Prefecture',
						value: 'JP-44',
					},
					{
						name: 'Okayama Prefecture',
						value: 'JP-33',
					},
					{
						name: 'Okinawa Prefecture',
						value: 'JP-47',
					},
					{
						name: 'Osaka Prefecture',
						value: 'JP-27',
					},
					{
						name: 'Saga Prefecture',
						value: 'JP-41',
					},
					{
						name: 'Saitama Prefecture',
						value: 'JP-11',
					},
					{
						name: 'Shiga Prefecture',
						value: 'JP-25',
					},
					{
						name: 'Shimane Prefecture',
						value: 'JP-32',
					},
					{
						name: 'Shizuoka Prefecture',
						value: 'JP-22',
					},
					{
						name: 'Tochigi Prefecture',
						value: 'JP-09',
					},
					{
						name: 'Tokushima Prefecture',
						value: 'JP-36',
					},
					{
						name: 'Tokyo',
						value: 'JP-13',
					},
					{
						name: 'Tottori Prefecture',
						value: 'JP-31',
					},
					{
						name: 'Toyama Prefecture',
						value: 'JP-16',
					},
					{
						name: 'Wakayama Prefecture',
						value: 'JP-30',
					},
					{
						name: 'Yamagata Prefecture',
						value: 'JP-06',
					},
					{
						name: 'Yamaguchi Prefecture',
						value: 'JP-35',
					},
					{
						name: 'Yamanashi Prefecture',
						value: 'JP-19',
					},
					{
						name: 'Jersey',
						value: 'JE',
					},
					{
						name: 'Jordan',
						value: 'JO',
					},
					{
						name: 'Ajloun Governorate',
						value: 'JO-AJ',
					},
					{
						name: 'Amman Governorate',
						value: 'JO-AM',
					},
					{
						name: 'Aqaba Governorate',
						value: 'JO-AQ',
					},
					{
						name: 'Balqa Governorate',
						value: 'JO-BA',
					},
					{
						name: 'Irbid Governorate',
						value: 'JO-IR',
					},
					{
						name: 'Jerash Governorate',
						value: 'JO-JA',
					},
					{
						name: 'Karak Governorate',
						value: 'JO-KA',
					},
					{
						name: "Ma'an Governorate",
						value: 'JO-MN',
					},
					{
						name: 'Madaba Governorate',
						value: 'JO-MD',
					},
					{
						name: 'Mafraq Governorate',
						value: 'JO-MA',
					},
					{
						name: 'Tafilah Governorate',
						value: 'JO-AT',
					},
					{
						name: 'Zarqa Governorate',
						value: 'JO-AZ',
					},
					{
						name: 'Kazakhstan',
						value: 'KZ',
					},
					{
						name: 'Akmola Region',
						value: 'KZ-AKM',
					},
					{
						name: 'Aktobe Region',
						value: 'KZ-AKT',
					},
					{
						name: 'Almaty Region',
						value: 'KZ-ALM',
					},
					{
						name: 'Atyrau Province',
						value: 'KZ-ATY',
					},
					{
						name: 'East Kazakhstan Region',
						value: 'KZ-VOS',
					},
					{
						name: 'Jambyl Province',
						value: 'KZ-ZHA',
					},
					{
						name: 'Karagandy Region',
						value: 'KZ-KAR',
					},
					{
						name: 'Kostanay Region',
						value: 'KZ-KUS',
					},
					{
						name: 'Kyzylorda Province',
						value: 'KZ-KZY',
					},
					{
						name: 'Mangystau Region',
						value: 'KZ-MAN',
					},
					{
						name: 'North Kazakhstan Province',
						value: 'KZ-SEV',
					},
					{
						name: 'Pavlodar Province',
						value: 'KZ-PAV',
					},
					{
						name: 'South Kazakhstan Region',
						value: 'KZ-YUZ',
					},
					{
						name: 'West Kazakhstan Province',
						value: 'KZ-ZAP',
					},
					{
						name: 'Kenya',
						value: 'KE',
					},
					{
						name: 'Kiribati',
						value: 'KI',
					},
					{
						name: 'Gilbert Islands',
						value: 'KI-G',
					},
					{
						name: 'Line Islands',
						value: 'KI-L',
					},
					{
						name: 'Phoenix Islands',
						value: 'KI-P',
					},
					{
						name: 'Kosovo',
						value: 'XK',
					},
					{
						name: 'Kuwait',
						value: 'KW',
					},
					{
						name: 'Al Ahmadi Governorate',
						value: 'KW-AH',
					},
					{
						name: 'Al Asimah Governate',
						value: 'KW-KU',
					},
					{
						name: 'Al Farwaniyah Governorate',
						value: 'KW-FA',
					},
					{
						name: 'Al Jahra Governorate',
						value: 'KW-JA',
					},
					{
						name: 'Hawalli Governorate',
						value: 'KW-HA',
					},
					{
						name: 'Mubarak Al-Kabeer Governorate',
						value: 'KW-MU',
					},
					{
						name: 'Kyrgyzstan',
						value: 'KG',
					},
					{
						name: 'Batken Province',
						value: 'KG-B',
					},
					{
						name: 'Chuy Province',
						value: 'KG-C',
					},
					{
						name: 'Dzhalal-Abadskaya',
						value: 'KG-J',
					},
					{
						name: 'Naryn Province',
						value: 'KG-N',
					},
					{
						name: 'Osh Province',
						value: 'KG-O',
					},
					{
						name: 'Talas',
						value: 'KG-T',
					},
					{
						name: 'Ysyk Kol Province',
						value: 'KG-Y',
					},
					{
						name: 'Laos',
						value: 'LA',
					},
					{
						name: 'Attapeu',
						value: 'LA-AT',
					},
					{
						name: 'Bokeo',
						value: 'LA-BK',
					},
					{
						name: 'Bolikhamsai',
						value: 'LA-BL',
					},
					{
						name: 'Champasak',
						value: 'LA-CH',
					},
					{
						name: 'Houaphan',
						value: 'LA-HO',
					},
					{
						name: 'Khammouane',
						value: 'LA-KH',
					},
					{
						name: 'Louangphabang',
						value: 'LA-LP',
					},
					{
						name: 'Luang Namtha',
						value: 'LA-LM',
					},
					{
						name: 'Oudomxay',
						value: 'LA-OU',
					},
					{
						name: 'Phongsaly',
						value: 'LA-PH',
					},
					{
						name: 'Salavan',
						value: 'LA-SL',
					},
					{
						name: 'Savannakhet',
						value: 'LA-SV',
					},
					{
						name: 'Sayabouly',
						value: 'LA-XA',
					},
					{
						name: 'Vientiane',
						value: 'LA-VI',
					},
					{
						name: 'Vientiane Prefecture',
						value: 'LA-VT',
					},
					{
						name: 'Xekong',
						value: 'LA-XE',
					},
					{
						name: 'Xiangkhouang',
						value: 'LA-XI',
					},
					{
						name: 'Latvia',
						value: 'LV',
					},
					{
						name: 'Ādaži Municipality',
						value: 'LV-011',
					},
					{
						name: 'Aglona Municipality',
						value: 'LV-001',
					},
					{
						name: 'Aizkraukle Municipality',
						value: 'LV-002',
					},
					{
						name: 'Aizpute Municipality',
						value: 'LV-003',
					},
					{
						name: 'Aknīste Municipality',
						value: 'LV-004',
					},
					{
						name: 'Aloja Municipality',
						value: 'LV-005',
					},
					{
						name: 'Alsunga Municipality',
						value: 'LV-006',
					},
					{
						name: 'Alūksne Municipality',
						value: 'LV-007',
					},
					{
						name: 'Amata Municipality',
						value: 'LV-008',
					},
					{
						name: 'Ape Municipality',
						value: 'LV-009',
					},
					{
						name: 'Auce Municipality',
						value: 'LV-010',
					},
					{
						name: 'Babīte Municipality',
						value: 'LV-012',
					},
					{
						name: 'Baldone Municipality',
						value: 'LV-013',
					},
					{
						name: 'Baltinava Municipality',
						value: 'LV-014',
					},
					{
						name: 'Balvi Municipality',
						value: 'LV-015',
					},
					{
						name: 'Bauska Municipality',
						value: 'LV-016',
					},
					{
						name: 'Beverīna Municipality',
						value: 'LV-017',
					},
					{
						name: 'Brocēni Municipality',
						value: 'LV-018',
					},
					{
						name: 'Burtnieki Municipality',
						value: 'LV-019',
					},
					{
						name: 'Carnikava Municipality',
						value: 'LV-020',
					},
					{
						name: 'Cēsis Municipality',
						value: 'LV-022',
					},
					{
						name: 'Cesvaine Municipality',
						value: 'LV-021',
					},
					{
						name: 'Cibla Municipality',
						value: 'LV-023',
					},
					{
						name: 'Dagdas novads',
						value: 'LV-024',
					},
					{
						name: 'Daugavpils',
						value: 'LV-DGV',
					},
					{
						name: 'Daugavpils Municipality',
						value: 'LV-025',
					},
					{
						name: 'Dobele Municipality',
						value: 'LV-026',
					},
					{
						name: 'Dundaga Municipality',
						value: 'LV-027',
					},
					{
						name: 'Durbe Municipality',
						value: 'LV-028',
					},
					{
						name: 'Engure Municipality',
						value: 'LV-029',
					},
					{
						name: 'Ērgļi Municipality',
						value: 'LV-030',
					},
					{
						name: 'Garkalne Municipality',
						value: 'LV-031',
					},
					{
						name: 'Grobiņa Municipality',
						value: 'LV-032',
					},
					{
						name: 'Gulbene Municipality',
						value: 'LV-033',
					},
					{
						name: 'Iecava Municipality',
						value: 'LV-034',
					},
					{
						name: 'Ikšķile Municipality',
						value: 'LV-035',
					},
					{
						name: 'Ilūkste Municipality',
						value: 'LV-036',
					},
					{
						name: 'Inčukalna novads',
						value: 'LV-037',
					},
					{
						name: 'Jaunjelgava Municipality',
						value: 'LV-038',
					},
					{
						name: 'Jaunpiebalga Municipality',
						value: 'LV-039',
					},
					{
						name: 'Jaunpils Municipality',
						value: 'LV-040',
					},
					{
						name: 'Jēkabpils',
						value: 'LV-JKB',
					},
					{
						name: 'Jēkabpils Municipality',
						value: 'LV-042',
					},
					{
						name: 'Jelgava',
						value: 'LV-JEL',
					},
					{
						name: 'Jelgava Municipality',
						value: 'LV-041',
					},
					{
						name: 'Jūrmala',
						value: 'LV-JUR',
					},
					{
						name: 'Kandava Municipality',
						value: 'LV-043',
					},
					{
						name: 'Kārsava Municipality',
						value: 'LV-044',
					},
					{
						name: 'Ķegums Municipality',
						value: 'LV-051',
					},
					{
						name: 'Ķekava Municipality',
						value: 'LV-052',
					},
					{
						name: 'Kocēni Municipality',
						value: 'LV-045',
					},
					{
						name: 'Koknese Municipality',
						value: 'LV-046',
					},
					{
						name: 'Krāslava Municipality',
						value: 'LV-047',
					},
					{
						name: 'Krimulda Municipality',
						value: 'LV-048',
					},
					{
						name: 'Krustpils Municipality',
						value: 'LV-049',
					},
					{
						name: 'Kuldīga Municipality',
						value: 'LV-050',
					},
					{
						name: 'Lielvārde Municipality',
						value: 'LV-053',
					},
					{
						name: 'Liepājas pilsēta',
						value: 'LV-LPX',
					},
					{
						name: 'Līgatne Municipality',
						value: 'LV-055',
					},
					{
						name: 'Limbaži Municipality',
						value: 'LV-054',
					},
					{
						name: 'Līvāni Municipality',
						value: 'LV-056',
					},
					{
						name: 'Lubāna Municipality',
						value: 'LV-057',
					},
					{
						name: 'Ludza Municipality',
						value: 'LV-058',
					},
					{
						name: 'Madona Municipality',
						value: 'LV-059',
					},
					{
						name: 'Mālpils Municipality',
						value: 'LV-061',
					},
					{
						name: 'Mārupe Municipality',
						value: 'LV-062',
					},
					{
						name: 'Mazsalaca Municipality',
						value: 'LV-060',
					},
					{
						name: 'Mērsrags Municipality',
						value: 'LV-063',
					},
					{
						name: 'Naukšēni Municipality',
						value: 'LV-064',
					},
					{
						name: 'Nereta Municipality',
						value: 'LV-065',
					},
					{
						name: 'Nīca Municipality',
						value: 'LV-066',
					},
					{
						name: 'Ogre Municipality',
						value: 'LV-067',
					},
					{
						name: 'Olaines novads',
						value: 'LV-068',
					},
					{
						name: 'Ozolnieki Municipality',
						value: 'LV-069',
					},
					{
						name: 'Pārgauja Municipality',
						value: 'LV-070',
					},
					{
						name: 'Pāvilosta Municipality',
						value: 'LV-071',
					},
					{
						name: 'Pļaviņas Municipality',
						value: 'LV-072',
					},
					{
						name: 'Preiļi Municipality',
						value: 'LV-073',
					},
					{
						name: 'Priekule Municipality',
						value: 'LV-074',
					},
					{
						name: 'Priekuļi Municipality',
						value: 'LV-075',
					},
					{
						name: 'Rauna Municipality',
						value: 'LV-076',
					},
					{
						name: 'Rēzekne Municipality',
						value: 'LV-077',
					},
					{
						name: 'Rēzekne Municipality',
						value: 'LV-REZ',
					},
					{
						name: 'Riebiņi Municipality',
						value: 'LV-078',
					},
					{
						name: 'Riga',
						value: 'LV-RIX',
					},
					{
						name: 'Roja Municipality',
						value: 'LV-079',
					},
					{
						name: 'Ropaži Municipality',
						value: 'LV-080',
					},
					{
						name: 'Rucava Municipality',
						value: 'LV-081',
					},
					{
						name: 'Rugāji Municipality',
						value: 'LV-082',
					},
					{
						name: 'Rūjiena Municipality',
						value: 'LV-084',
					},
					{
						name: 'Rundāle Municipality',
						value: 'LV-083',
					},
					{
						name: 'Sala Municipality',
						value: 'LV-085',
					},
					{
						name: 'Salacgrīva Municipality',
						value: 'LV-086',
					},
					{
						name: 'Salaspils Municipality',
						value: 'LV-087',
					},
					{
						name: 'Saldus Municipality',
						value: 'LV-088',
					},
					{
						name: 'Saulkrasti Municipality',
						value: 'LV-089',
					},
					{
						name: 'Sēja Municipality',
						value: 'LV-090',
					},
					{
						name: 'Sigulda Municipality',
						value: 'LV-091',
					},
					{
						name: 'Skrīveri Municipality',
						value: 'LV-092',
					},
					{
						name: 'Skrunda Municipality',
						value: 'LV-093',
					},
					{
						name: 'Smiltene Municipality',
						value: 'LV-094',
					},
					{
						name: 'Stopiņi Municipality',
						value: 'LV-095',
					},
					{
						name: 'Strenči Municipality',
						value: 'LV-096',
					},
					{
						name: 'Talsi Municipality',
						value: 'LV-097',
					},
					{
						name: 'Tērvete Municipality',
						value: 'LV-098',
					},
					{
						name: 'Tukums Municipality',
						value: 'LV-099',
					},
					{
						name: 'Vaiņode Municipality',
						value: 'LV-100',
					},
					{
						name: 'Valka Municipality',
						value: 'LV-101',
					},
					{
						name: 'Valmiera',
						value: 'LV-VMR',
					},
					{
						name: 'Varakļāni Municipality',
						value: 'LV-102',
					},
					{
						name: 'Vārkava Municipality',
						value: 'LV-103',
					},
					{
						name: 'Vecpiebalga Municipality',
						value: 'LV-104',
					},
					{
						name: 'Vecumnieki Municipality',
						value: 'LV-105',
					},
					{
						name: 'Ventspils',
						value: 'LV-VEN',
					},
					{
						name: 'Ventspils Municipality',
						value: 'LV-106',
					},
					{
						name: 'Viesīte Municipality',
						value: 'LV-107',
					},
					{
						name: 'Viļaka Municipality',
						value: 'LV-108',
					},
					{
						name: 'Viļāni Municipality',
						value: 'LV-109',
					},
					{
						name: 'Zilupe Municipality',
						value: 'LV-110',
					},
					{
						name: 'Lebanon',
						value: 'LB',
					},
					{
						name: 'Beirut',
						value: 'LB-BA',
					},
					{
						name: 'Beqaa',
						value: 'LB-BI',
					},
					{
						name: 'Mount Lebanon',
						value: 'LB-JL',
					},
					{
						name: 'Nabatiyeh',
						value: 'LB-NA',
					},
					{
						name: 'North',
						value: 'LB-AS',
					},
					{
						name: 'South',
						value: 'LB-JA',
					},
					{
						name: 'Lesotho',
						value: 'LS',
					},
					{
						name: 'Berea',
						value: 'LS-D',
					},
					{
						name: 'Butha-Buthe',
						value: 'LS-B',
					},
					{
						name: 'Leribe',
						value: 'LS-C',
					},
					{
						name: 'Mafeteng',
						value: 'LS-E',
					},
					{
						name: 'Maseru',
						value: 'LS-A',
					},
					{
						name: "Mohale's Hoek",
						value: 'LS-F',
					},
					{
						name: 'Mokhotlong',
						value: 'LS-J',
					},
					{
						name: "Qacha's Nek",
						value: 'LS-H',
					},
					{
						name: 'Quthing',
						value: 'LS-G',
					},
					{
						name: 'Thaba-Tseka',
						value: 'LS-K',
					},
					{
						name: 'Liberia',
						value: 'LR',
					},
					{
						name: 'Bomi',
						value: 'LR-BM',
					},
					{
						name: 'Bong',
						value: 'LR-BG',
					},
					{
						name: 'Gbarpolu',
						value: 'LR-GP',
					},
					{
						name: 'Grand Bassa',
						value: 'LR-GB',
					},
					{
						name: 'Grand Cape Mount',
						value: 'LR-CM',
					},
					{
						name: 'Grand Gedeh',
						value: 'LR-GG',
					},
					{
						name: 'Grand Kru',
						value: 'LR-GK',
					},
					{
						name: 'Lofa',
						value: 'LR-LO',
					},
					{
						name: 'Margibi',
						value: 'LR-MG',
					},
					{
						name: 'Maryland',
						value: 'LR-MY',
					},
					{
						name: 'Montserrado',
						value: 'LR-MO',
					},
					{
						name: 'Nimba',
						value: 'LR-NI',
					},
					{
						name: 'River Cess',
						value: 'LR-RI',
					},
					{
						name: 'River Gee',
						value: 'LR-RG',
					},
					{
						name: 'Sinoe',
						value: 'LR-SI',
					},
					{
						name: 'Libya',
						value: 'LY',
					},
					{
						name: 'Al Butnan',
						value: 'LY-BU',
					},
					{
						name: 'Al Jabal al Akhdar',
						value: 'LY-JA',
					},
					{
						name: 'Al Jabal al Gharbi',
						value: 'LY-JG',
					},
					{
						name: 'Al Jafara',
						value: 'LY-JI',
					},
					{
						name: 'Al Jufrah',
						value: 'LY-JU',
					},
					{
						name: 'Al Kufrah',
						value: 'LY-KF',
					},
					{
						name: 'Al Marj',
						value: 'LY-MJ',
					},
					{
						name: 'Al Murqub',
						value: 'LY-MB',
					},
					{
						name: 'Al Wahat',
						value: 'LY-WA',
					},
					{
						name: 'An Nuqat al Khams',
						value: 'LY-NQ',
					},
					{
						name: 'Az Zawiyah',
						value: 'LY-ZA',
					},
					{
						name: 'Banghazi',
						value: 'LY-BA',
					},
					{
						name: 'Darnah',
						value: 'LY-DR',
					},
					{
						name: 'Ghat',
						value: 'LY-GT',
					},
					{
						name: 'Misratah',
						value: 'LY-MI',
					},
					{
						name: 'Murzuq',
						value: 'LY-MQ',
					},
					{
						name: 'Nalut',
						value: 'LY-NL',
					},
					{
						name: 'Sabha',
						value: 'LY-SB',
					},
					{
						name: 'Surt',
						value: 'LY-SR',
					},
					{
						name: 'Tripoli',
						value: 'LY-TB',
					},
					{
						name: 'Wadi Al Hayaa',
						value: 'LY-WD',
					},
					{
						name: 'Wadi Ash-Shati',
						value: 'LY-WS',
					},
					{
						name: 'Liechtenstein',
						value: 'LI',
					},
					{
						name: 'Balzers',
						value: 'LI-01',
					},
					{
						name: 'Eschen',
						value: 'LI-02',
					},
					{
						name: 'Gamprin',
						value: 'LI-03',
					},
					{
						name: 'Mauren',
						value: 'LI-04',
					},
					{
						name: 'Planken',
						value: 'LI-05',
					},
					{
						name: 'Ruggell',
						value: 'LI-06',
					},
					{
						name: 'Schaan',
						value: 'LI-07',
					},
					{
						name: 'Schellenberg',
						value: 'LI-08',
					},
					{
						name: 'Triesen',
						value: 'LI-09',
					},
					{
						name: 'Triesenberg',
						value: 'LI-10',
					},
					{
						name: 'Vaduz',
						value: 'LI-11',
					},
					{
						name: 'Lithuania',
						value: 'LT',
					},
					{
						name: 'Alytus County',
						value: 'LT-AL',
					},
					{
						name: 'Kaunas County',
						value: 'LT-KU',
					},
					{
						name: 'Klaipėda County',
						value: 'LT-KL',
					},
					{
						name: 'Marijampolė County',
						value: 'LT-MR',
					},
					{
						name: 'Panevėžys County',
						value: 'LT-PN',
					},
					{
						name: 'Šiauliai County',
						value: 'LT-SA',
					},
					{
						name: 'Tauragė County',
						value: 'LT-TA',
					},
					{
						name: 'Telšiai County',
						value: 'LT-TE',
					},
					{
						name: 'Utena County',
						value: 'LT-UT',
					},
					{
						name: 'Vilnius County',
						value: 'LT-VL',
					},
					{
						name: 'Luxembourg',
						value: 'LU',
					},
					{
						name: 'Diekirch',
						value: 'LU-D',
					},
					{
						name: 'Grevenmacher',
						value: 'LU-G',
					},
					{
						name: 'Luxembourg District',
						value: 'LU-L',
					},
					{
						name: 'Macao',
						value: 'MO',
					},
					{
						name: 'Madagascar',
						value: 'MG',
					},
					{
						name: 'Antananarivo',
						value: 'MG-T',
					},
					{
						name: 'Antsiranana',
						value: 'MG-D',
					},
					{
						name: 'Fianarantsoa',
						value: 'MG-F',
					},
					{
						name: 'Mahajanga',
						value: 'MG-M',
					},
					{
						name: 'Toamasina',
						value: 'MG-A',
					},
					{
						name: 'Toliara',
						value: 'MG-U',
					},
					{
						name: 'Malawi',
						value: 'MW',
					},
					{
						name: 'Central Region',
						value: 'MW-C',
					},
					{
						name: 'Northern Region',
						value: 'MW-N',
					},
					{
						name: 'Southern Region',
						value: 'MW-S',
					},
					{
						name: 'Malaysia',
						value: 'MY',
					},
					{
						name: 'Federal Territory of Kuala Lumpur',
						value: 'MY-14',
					},
					{
						name: 'Johor',
						value: 'MY-01',
					},
					{
						name: 'Kedah',
						value: 'MY-02',
					},
					{
						name: 'Kelantan',
						value: 'MY-03',
					},
					{
						name: 'Labuan Federal Territory',
						value: 'MY-15',
					},
					{
						name: 'Malacca',
						value: 'MY-04',
					},
					{
						name: 'Negeri Sembilan',
						value: 'MY-05',
					},
					{
						name: 'Pahang',
						value: 'MY-06',
					},
					{
						name: 'Penang',
						value: 'MY-07',
					},
					{
						name: 'Perak',
						value: 'MY-08',
					},
					{
						name: 'Perlis',
						value: 'MY-09',
					},
					{
						name: 'Putrajaya',
						value: 'MY-16',
					},
					{
						name: 'Sabah',
						value: 'MY-12',
					},
					{
						name: 'Sarawak',
						value: 'MY-13',
					},
					{
						name: 'Selangor',
						value: 'MY-10',
					},
					{
						name: 'Terengganu',
						value: 'MY-11',
					},
					{
						name: 'Maldives',
						value: 'MV',
					},
					{
						name: 'Central Province',
						value: 'MV-CE',
					},
					{
						name: 'Male',
						value: 'MV-MLE',
					},
					{
						name: 'North Central Province',
						value: 'MV-NC',
					},
					{
						name: 'North Province',
						value: 'MV-NO',
					},
					{
						name: 'South Central Province',
						value: 'MV-SC',
					},
					{
						name: 'South Province',
						value: 'MV-SU',
					},
					{
						name: 'Upper North Province',
						value: 'MV-UN',
					},
					{
						name: 'Upper South Province',
						value: 'MV-US',
					},
					{
						name: 'Mali',
						value: 'ML',
					},
					{
						name: 'Bamako',
						value: 'ML-BKO',
					},
					{
						name: 'Gao',
						value: 'ML-7',
					},
					{
						name: 'Kayes',
						value: 'ML-1',
					},
					{
						name: 'Kidal',
						value: 'ML-8',
					},
					{
						name: 'Koulikoro',
						value: 'ML-2',
					},
					{
						name: 'Mopti',
						value: 'ML-5',
					},
					{
						name: 'Segou',
						value: 'ML-4',
					},
					{
						name: 'Sikasso',
						value: 'ML-3',
					},
					{
						name: 'Tombouctou',
						value: 'ML-6',
					},
					{
						name: 'Malta',
						value: 'MT',
					},
					{
						name: 'Marshall Islands',
						value: 'MH',
					},
					{
						name: 'Ailinglaplap Atoll',
						value: 'MH-ALL',
					},
					{
						name: 'Ailuk Atoll',
						value: 'MH-ALK',
					},
					{
						name: 'Arno Atoll',
						value: 'MH-ARN',
					},
					{
						name: 'Aur Atoll',
						value: 'MH-AUR',
					},
					{
						name: 'Ebon',
						value: 'MH-EBO',
					},
					{
						name: 'Enewetak Atoll',
						value: 'MH-ENI',
					},
					{
						name: 'Jabat Island',
						value: 'MH-JAB',
					},
					{
						name: 'Jaluit Atoll',
						value: 'MH-JAL',
					},
					{
						name: 'Kili Island',
						value: 'MH-KIL',
					},
					{
						name: 'Kwajalein Atoll',
						value: 'MH-KWA',
					},
					{
						name: 'Lae Atoll',
						value: 'MH-LAE',
					},
					{
						name: 'Lib Island',
						value: 'MH-LIB',
					},
					{
						name: 'Likiep Atoll',
						value: 'MH-LIK',
					},
					{
						name: 'Majuro Atoll',
						value: 'MH-MAJ',
					},
					{
						name: 'Maloelap Atoll',
						value: 'MH-MAL',
					},
					{
						name: 'Mejit Island',
						value: 'MH-MEJ',
					},
					{
						name: 'Mili Atoll',
						value: 'MH-MIL',
					},
					{
						name: 'Namorik Atoll',
						value: 'MH-NMK',
					},
					{
						name: 'Namu Atoll',
						value: 'MH-NMU',
					},
					{
						name: 'Rongelap Atoll',
						value: 'MH-RON',
					},
					{
						name: 'Ujae Atoll',
						value: 'MH-UJA',
					},
					{
						name: 'Utirik Atoll',
						value: 'MH-UTI',
					},
					{
						name: 'Wotho Atoll',
						value: 'MH-WTH',
					},
					{
						name: 'Wotje Atoll',
						value: 'MH-WTJ',
					},
					{
						name: 'Martinique',
						value: 'MQ',
					},
					{
						name: 'Mauritania',
						value: 'MR',
					},
					{
						name: 'Adrar',
						value: 'MR-07',
					},
					{
						name: 'Assaba',
						value: 'MR-03',
					},
					{
						name: 'Brakna',
						value: 'MR-05',
					},
					{
						name: 'Dakhlet Nouadhibou',
						value: 'MR-08',
					},
					{
						name: 'Gorgol',
						value: 'MR-04',
					},
					{
						name: 'Guidimaka',
						value: 'MR-10',
					},
					{
						name: 'Hodh Ech Chargui',
						value: 'MR-01',
					},
					{
						name: 'Hodh El Gharbi',
						value: 'MR-02',
					},
					{
						name: 'Inchiri',
						value: 'MR-12',
					},
					{
						name: 'Nouakchott',
						value: 'MR-NKC',
					},
					{
						name: 'Tagant',
						value: 'MR-09',
					},
					{
						name: 'Tiris Zemmour',
						value: 'MR-11',
					},
					{
						name: 'Trarza',
						value: 'MR-06',
					},
					{
						name: 'Mauritius',
						value: 'MU',
					},
					{
						name: 'Agalega Islands',
						value: 'MU-AG',
					},
					{
						name: 'Black River',
						value: 'MU-BL',
					},
					{
						name: 'Cargados Carajos',
						value: 'MU-CC',
					},
					{
						name: 'Flacq',
						value: 'MU-FL',
					},
					{
						name: 'Grand Port',
						value: 'MU-GP',
					},
					{
						name: 'Moka',
						value: 'MU-MO',
					},
					{
						name: 'Pamplemousses',
						value: 'MU-PA',
					},
					{
						name: 'Plaines Wilhems',
						value: 'MU-PW',
					},
					{
						name: 'Port Louis',
						value: 'MU-PL',
					},
					{
						name: 'Rivière du Rempart',
						value: 'MU-RR',
					},
					{
						name: 'Rodrigues',
						value: 'MU-RO',
					},
					{
						name: 'Savanne',
						value: 'MU-SA',
					},
					{
						name: 'Mayotte',
						value: 'YT',
					},
					{
						name: 'Mexico',
						value: 'MX',
					},
					{
						name: 'Aguascalientes',
						value: 'MX-AGU',
					},
					{
						name: 'Baja California',
						value: 'MX-BCN',
					},
					{
						name: 'Baja California Sur',
						value: 'MX-BCS',
					},
					{
						name: 'Campeche',
						value: 'MX-CAM',
					},
					{
						name: 'Chiapas',
						value: 'MX-CHP',
					},
					{
						name: 'Chihuahua',
						value: 'MX-CHH',
					},
					{
						name: 'Coahuila',
						value: 'MX-COA',
					},
					{
						name: 'Colima',
						value: 'MX-COL',
					},
					{
						name: 'Durango',
						value: 'MX-DUR',
					},
					{
						name: 'Guanajuato',
						value: 'MX-GUA',
					},
					{
						name: 'Guerrero',
						value: 'MX-GRO',
					},
					{
						name: 'Hidalgo',
						value: 'MX-HID',
					},
					{
						name: 'Jalisco',
						value: 'MX-JAL',
					},
					{
						name: 'Mexico City',
						value: 'MX-DIF',
					},
					{
						name: 'Michoacán',
						value: 'MX-MIC',
					},
					{
						name: 'Morelos',
						value: 'MX-MOR',
					},
					{
						name: 'Nayarit',
						value: 'MX-NAY',
					},
					{
						name: 'Nuevo Leon',
						value: 'MX-NLE',
					},
					{
						name: 'Oaxaca',
						value: 'MX-OAX',
					},
					{
						name: 'Puebla',
						value: 'MX-PUE',
					},
					{
						name: 'Querétaro',
						value: 'MX-QUE',
					},
					{
						name: 'Quintana Roo',
						value: 'MX-ROO',
					},
					{
						name: 'San Luis Potosi',
						value: 'MX-SLP',
					},
					{
						name: 'Sinaloa',
						value: 'MX-SIN',
					},
					{
						name: 'Sonora',
						value: 'MX-SON',
					},
					{
						name: 'State of Mexico',
						value: 'MX-MEX',
					},
					{
						name: 'Tabasco',
						value: 'MX-TAB',
					},
					{
						name: 'Tamaulipas',
						value: 'MX-TAM',
					},
					{
						name: 'Tlaxcala',
						value: 'MX-TLA',
					},
					{
						name: 'Veracruz',
						value: 'MX-VER',
					},
					{
						name: 'Yucatan',
						value: 'MX-YUC',
					},
					{
						name: 'Zacatecas',
						value: 'MX-ZAC',
					},
					{
						name: 'Micronesia',
						value: 'FM',
					},
					{
						name: 'Chuuk',
						value: 'FM-TRK',
					},
					{
						name: 'Kosrae',
						value: 'FM-KSA',
					},
					{
						name: 'Pohnpei',
						value: 'FM-PNI',
					},
					{
						name: 'Yap',
						value: 'FM-YAP',
					},
					{
						name: 'Moldova',
						value: 'MD',
					},
					{
						name: 'Anenii Noi',
						value: 'MD-AN',
					},
					{
						name: 'Balti',
						value: 'MD-BA',
					},
					{
						name: 'Basarabeasca District',
						value: 'MD-BS',
					},
					{
						name: 'Bender',
						value: 'MD-BD',
					},
					{
						name: 'Briceni',
						value: 'MD-BR',
					},
					{
						name: 'Cahul',
						value: 'MD-CA',
					},
					{
						name: 'Calarasi',
						value: 'MD-CL',
					},
					{
						name: 'Cantemir',
						value: 'MD-CT',
					},
					{
						name: 'Causeni',
						value: 'MD-CS',
					},
					{
						name: 'Chisinau',
						value: 'MD-CU',
					},
					{
						name: 'Cimișlia',
						value: 'MD-CM',
					},
					{
						name: 'Criuleni',
						value: 'MD-CR',
					},
					{
						name: 'Donduseni',
						value: 'MD-DO',
					},
					{
						name: 'Drochia',
						value: 'MD-DR',
					},
					{
						name: 'Dubasari',
						value: 'MD-DU',
					},
					{
						name: 'Edineţ District',
						value: 'MD-ED',
					},
					{
						name: 'Falesti',
						value: 'MD-FA',
					},
					{
						name: 'Floresti',
						value: 'MD-FL',
					},
					{
						name: 'Gagauzia',
						value: 'MD-GA',
					},
					{
						name: 'Glodeni',
						value: 'MD-GL',
					},
					{
						name: 'Hincesti',
						value: 'MD-HI',
					},
					{
						name: 'Ialoveni',
						value: 'MD-IA',
					},
					{
						name: 'Leova',
						value: 'MD-LE',
					},
					{
						name: 'Nisporeni',
						value: 'MD-NI',
					},
					{
						name: 'Ocnita',
						value: 'MD-OC',
					},
					{
						name: 'Orhei',
						value: 'MD-OR',
					},
					{
						name: 'Rezina',
						value: 'MD-RE',
					},
					{
						name: 'Riscani',
						value: 'MD-RI',
					},
					{
						name: 'Singerei',
						value: 'MD-SI',
					},
					{
						name: 'Soldanesti',
						value: 'MD-SD',
					},
					{
						name: 'Soroca',
						value: 'MD-SO',
					},
					{
						name: 'Stefan Voda',
						value: 'MD-SV',
					},
					{
						name: 'Straseni',
						value: 'MD-ST',
					},
					{
						name: 'Taraclia',
						value: 'MD-TA',
					},
					{
						name: 'Telenești District',
						value: 'MD-TE',
					},
					{
						name: 'Transnistria',
						value: 'MD-SN',
					},
					{
						name: 'Ungheni',
						value: 'MD-UN',
					},
					{
						name: 'Monaco',
						value: 'MC',
					},
					{
						name: 'Mongolia',
						value: 'MN',
					},
					{
						name: 'Arkhangai',
						value: 'MN-073',
					},
					{
						name: 'Bayan-Ulgii',
						value: 'MN-071',
					},
					{
						name: 'Bayankhongor',
						value: 'MN-069',
					},
					{
						name: 'Bulgan',
						value: 'MN-067',
					},
					{
						name: 'Darkhan-Uul',
						value: 'MN-037',
					},
					{
						name: 'Dornod',
						value: 'MN-061',
					},
					{
						name: 'Dornogovi',
						value: 'MN-063',
					},
					{
						name: 'Dundgovi',
						value: 'MN-059',
					},
					{
						name: 'Govi-Altai',
						value: 'MN-065',
					},
					{
						name: 'Govisumber',
						value: 'MN-064',
					},
					{
						name: 'Khentii',
						value: 'MN-039',
					},
					{
						name: 'Khovd',
						value: 'MN-043',
					},
					{
						name: 'Khuvsgul',
						value: 'MN-041',
					},
					{
						name: 'Orkhon',
						value: 'MN-035',
					},
					{
						name: 'Selenge',
						value: 'MN-049',
					},
					{
						name: 'Sukhbaatar',
						value: 'MN-051',
					},
					{
						name: 'Tov',
						value: 'MN-047',
					},
					{
						name: 'Ulaanbaatar',
						value: 'MN-1',
					},
					{
						name: 'Umnugovi',
						value: 'MN-053',
					},
					{
						name: 'Uvs',
						value: 'MN-046',
					},
					{
						name: 'Uvurkhangai',
						value: 'MN-055',
					},
					{
						name: 'Zavkhan',
						value: 'MN-057',
					},
					{
						name: 'Montenegro',
						value: 'ME',
					},
					{
						name: 'Andrijevica',
						value: 'ME-01',
					},
					{
						name: 'Bar',
						value: 'ME-02',
					},
					{
						name: 'Berane',
						value: 'ME-03',
					},
					{
						name: 'Bijelo Polje',
						value: 'ME-04',
					},
					{
						name: 'Budva',
						value: 'ME-05',
					},
					{
						name: 'Cetinje',
						value: 'ME-06',
					},
					{
						name: 'Danilovgrad',
						value: 'ME-07',
					},
					{
						name: 'Herceg Novi',
						value: 'ME-08',
					},
					{
						name: 'Kolasin',
						value: 'ME-09',
					},
					{
						name: 'Kotor',
						value: 'ME-10',
					},
					{
						name: 'Mojkovac',
						value: 'ME-11',
					},
					{
						name: 'Niksic',
						value: 'ME-12',
					},
					{
						name: 'Plav',
						value: 'ME-13',
					},
					{
						name: 'Pljevlja',
						value: 'ME-14',
					},
					{
						name: 'Pluzine',
						value: 'ME-15',
					},
					{
						name: 'Podgorica',
						value: 'ME-16',
					},
					{
						name: 'Rozaje',
						value: 'ME-17',
					},
					{
						name: 'Savnik',
						value: 'ME-18',
					},
					{
						name: 'Tivat',
						value: 'ME-19',
					},
					{
						name: 'Ulcinj',
						value: 'ME-20',
					},
					{
						name: 'Zabljak',
						value: 'ME-21',
					},
					{
						name: 'Montserrat',
						value: 'MS',
					},
					{
						name: 'Morocco',
						value: 'MA',
					},
					{
						name: 'Chaouia-Ouardigha',
						value: 'MA-09',
					},
					{
						name: 'Doukkala-Abda',
						value: 'MA-10',
					},
					{
						name: 'Fes-Boulemane',
						value: 'MA-05',
					},
					{
						name: 'Gharb-Chrarda-Beni Hssen',
						value: 'MA-02',
					},
					{
						name: 'Grand Casablanca',
						value: 'MA-08',
					},
					{
						name: 'Guelmim-Es Semara',
						value: 'MA-14',
					},
					{
						name: 'Laayoune-Boujdour-Sakia El Hamra',
						value: 'MA-15',
					},
					{
						name: 'Marrakesh-Tensift-El Haouz',
						value: 'MA-11',
					},
					{
						name: 'Meknes-Tafilalet',
						value: 'MA-06',
					},
					{
						name: 'Oriental',
						value: 'MA-04',
					},
					{
						name: 'Rabat-Sale-Zemmour-Zaer',
						value: 'MA-07',
					},
					{
						name: 'Souss-Massa-Draa',
						value: 'MA-13',
					},
					{
						name: 'Tadla-Azilal',
						value: 'MA-12',
					},
					{
						name: 'Tangier-Tetouan',
						value: 'MA-01',
					},
					{
						name: 'Taza-Al Hoceima-Taounate',
						value: 'MA-03',
					},
					{
						name: 'Mozambique',
						value: 'MZ',
					},
					{
						name: 'Cabo Delgado Province',
						value: 'MZ-P',
					},
					{
						name: 'Gaza Province',
						value: 'MZ-G',
					},
					{
						name: 'Inhambane Province',
						value: 'MZ-I',
					},
					{
						name: 'Manica Province',
						value: 'MZ-B',
					},
					{
						name: 'Maputo City',
						value: 'MZ-MPM',
					},
					{
						name: 'Maputo Province',
						value: 'MZ-L',
					},
					{
						name: 'Nampula Province',
						value: 'MZ-N',
					},
					{
						name: 'Niassa Province',
						value: 'MZ-A',
					},
					{
						name: 'Sofala Province',
						value: 'MZ-S',
					},
					{
						name: 'Tete Province',
						value: 'MZ-T',
					},
					{
						name: 'Zambezia Province',
						value: 'MZ-Q',
					},
					{
						name: 'Myanmar (Burma)',
						value: 'MM',
					},
					{
						name: 'Ayeyarwady',
						value: 'MM-07',
					},
					{
						name: 'Bago Region',
						value: 'MM-02',
					},
					{
						name: 'Chin State',
						value: 'MM-14',
					},
					{
						name: 'Kachin',
						value: 'MM-11',
					},
					{
						name: 'Kayah',
						value: 'MM-12',
					},
					{
						name: 'Kayin State',
						value: 'MM-13',
					},
					{
						name: 'Magway Region',
						value: 'MM-03',
					},
					{
						name: 'Mandalay Region',
						value: 'MM-04',
					},
					{
						name: 'Mon State',
						value: 'MM-15',
					},
					{
						name: 'Naypyidaw Union Territory',
						value: 'MM-18',
					},
					{
						name: 'Rakhine',
						value: 'MM-16',
					},
					{
						name: 'Sagaing Region',
						value: 'MM-01',
					},
					{
						name: 'Shan',
						value: 'MM-17',
					},
					{
						name: 'Tanintharyi Region',
						value: 'MM-05',
					},
					{
						name: 'Yangon Region',
						value: 'MM-06',
					},
					{
						name: 'Namibia',
						value: 'NA',
					},
					{
						name: 'Erongo',
						value: 'NA-ER',
					},
					{
						name: 'Hardap Region',
						value: 'NA-HA',
					},
					{
						name: 'Karas Region',
						value: 'NA-KA',
					},
					{
						name: 'Kavango Region',
						value: 'NA-OK',
					},
					{
						name: 'Khomas Region',
						value: 'NA-KH',
					},
					{
						name: 'Kunene Region',
						value: 'NA-KU',
					},
					{
						name: 'Ohangwena',
						value: 'NA-OW',
					},
					{
						name: 'Omaheke Region',
						value: 'NA-OH',
					},
					{
						name: 'Omusati Region',
						value: 'NA-OS',
					},
					{
						name: 'Oshana Region',
						value: 'NA-ON',
					},
					{
						name: 'Oshikoto Region',
						value: 'NA-OT',
					},
					{
						name: 'Otjozondjupa Region',
						value: 'NA-OD',
					},
					{
						name: 'Zambezi Region',
						value: 'NA-CA',
					},
					{
						name: 'Nauru',
						value: 'NR',
					},
					{
						name: 'Aiwo',
						value: 'NR-01',
					},
					{
						name: 'Anabar',
						value: 'NR-02',
					},
					{
						name: 'Anetan',
						value: 'NR-03',
					},
					{
						name: 'Anibare',
						value: 'NR-04',
					},
					{
						name: 'Baiti',
						value: 'NR-05',
					},
					{
						name: 'Boe',
						value: 'NR-06',
					},
					{
						name: 'Buada',
						value: 'NR-07',
					},
					{
						name: 'Denigomodu',
						value: 'NR-08',
					},
					{
						name: 'Ewa',
						value: 'NR-09',
					},
					{
						name: 'Ijuw',
						value: 'NR-10',
					},
					{
						name: 'Meneng',
						value: 'NR-11',
					},
					{
						name: 'Nibok',
						value: 'NR-12',
					},
					{
						name: 'Uaboe',
						value: 'NR-13',
					},
					{
						name: 'Yaren',
						value: 'NR-14',
					},
					{
						name: 'Nepal',
						value: 'NP',
					},
					{
						name: 'Central Region',
						value: 'NP-1',
					},
					{
						name: 'Eastern Region',
						value: 'NP-4',
					},
					{
						name: 'Far-Western Region',
						value: 'NP-5',
					},
					{
						name: 'Mid-Western Region',
						value: 'NP-2',
					},
					{
						name: 'Western Region',
						value: 'NP-3',
					},
					{
						name: 'Netherlands',
						value: 'NL',
					},
					{
						name: 'Drenthe',
						value: 'NL-DR',
					},
					{
						name: 'Flevoland',
						value: 'NL-FL',
					},
					{
						name: 'Friesland',
						value: 'NL-FR',
					},
					{
						name: 'Gelderland',
						value: 'NL-GE',
					},
					{
						name: 'Groningen',
						value: 'NL-GR',
					},
					{
						name: 'Limburg',
						value: 'NL-LI',
					},
					{
						name: 'North Brabant',
						value: 'NL-NB',
					},
					{
						name: 'North Holland',
						value: 'NL-NH',
					},
					{
						name: 'Overijssel',
						value: 'NL-OV',
					},
					{
						name: 'South Holland',
						value: 'NL-ZH',
					},
					{
						name: 'Utrecht',
						value: 'NL-UT',
					},
					{
						name: 'Zeeland',
						value: 'NL-ZE',
					},
					{
						name: 'New Caledonia',
						value: 'NC',
					},
					{
						name: 'New Zealand',
						value: 'NZ',
					},
					{
						name: 'Auckland',
						value: 'NZ-AUK',
					},
					{
						name: 'Bay Of Plenty',
						value: 'NZ-BOP',
					},
					{
						name: 'Canterbury',
						value: 'NZ-CAN',
					},
					{
						name: 'Chatham Islands',
						value: 'NZ-CIT',
					},
					{
						name: 'Gisborne',
						value: 'NZ-GIS',
					},
					{
						name: "Hawke's Bay",
						value: 'NZ-HKB',
					},
					{
						name: 'Manawatu-Wanganui',
						value: 'NZ-MWT',
					},
					{
						name: 'Marlborough',
						value: 'NZ-MBH',
					},
					{
						name: 'Nelson',
						value: 'NZ-NSN',
					},
					{
						name: 'Northland',
						value: 'NZ-NTL',
					},
					{
						name: 'Otago',
						value: 'NZ-OTA',
					},
					{
						name: 'Southland',
						value: 'NZ-STL',
					},
					{
						name: 'Taranaki',
						value: 'NZ-TKI',
					},
					{
						name: 'Tasman',
						value: 'NZ-TAS',
					},
					{
						name: 'Waikato',
						value: 'NZ-WKO',
					},
					{
						name: 'Wellington',
						value: 'NZ-WGN',
					},
					{
						name: 'West Coast',
						value: 'NZ-WTC',
					},
					{
						name: 'Nicaragua',
						value: 'NI',
					},
					{
						name: 'Autonomous Region of the Northern Atlantic',
						value: 'NI-AN',
					},
					{
						name: 'Autonomous Region of the Southern Atlantic',
						value: 'NI-AS',
					},
					{
						name: 'Boaco',
						value: 'NI-BO',
					},
					{
						name: 'Carazo',
						value: 'NI-CA',
					},
					{
						name: 'Chinandega',
						value: 'NI-CI',
					},
					{
						name: 'Chontales',
						value: 'NI-CO',
					},
					{
						name: 'Esteli',
						value: 'NI-ES',
					},
					{
						name: 'Granada',
						value: 'NI-GR',
					},
					{
						name: 'Jinotega',
						value: 'NI-JI',
					},
					{
						name: 'Leon',
						value: 'NI-LE',
					},
					{
						name: 'Madriz',
						value: 'NI-MD',
					},
					{
						name: 'Managua',
						value: 'NI-MN',
					},
					{
						name: 'Masaya',
						value: 'NI-MS',
					},
					{
						name: 'Matagalpa',
						value: 'NI-MT',
					},
					{
						name: 'Nueva Segovia',
						value: 'NI-NS',
					},
					{
						name: 'Rio San Juan',
						value: 'NI-SJ',
					},
					{
						name: 'Rivas',
						value: 'NI-RI',
					},
					{
						name: 'Niger',
						value: 'NE',
					},
					{
						name: 'Agadez',
						value: 'NE-1',
					},
					{
						name: 'Diffa',
						value: 'NE-2',
					},
					{
						name: 'Dosso',
						value: 'NE-3',
					},
					{
						name: 'Maradi',
						value: 'NE-4',
					},
					{
						name: 'Niamey',
						value: 'NE-8',
					},
					{
						name: 'Tahoua',
						value: 'NE-5',
					},
					{
						name: 'Tillaberi',
						value: 'NE-6',
					},
					{
						name: 'Zinder',
						value: 'NE-7',
					},
					{
						name: 'Nigeria',
						value: 'NG',
					},
					{
						name: 'Abia',
						value: 'NG-AB',
					},
					{
						name: 'Adamawa',
						value: 'NG-AD',
					},
					{
						name: 'Akwa Ibom',
						value: 'NG-AK',
					},
					{
						name: 'Anambra',
						value: 'NG-AN',
					},
					{
						name: 'Bauchi',
						value: 'NG-BA',
					},
					{
						name: 'Bayelsa',
						value: 'NG-BY',
					},
					{
						name: 'Benue',
						value: 'NG-BE',
					},
					{
						name: 'Borno',
						value: 'NG-BO',
					},
					{
						name: 'Cross River',
						value: 'NG-CR',
					},
					{
						name: 'Delta',
						value: 'NG-DE',
					},
					{
						name: 'Ebonyi',
						value: 'NG-EB',
					},
					{
						name: 'Edo',
						value: 'NG-ED',
					},
					{
						name: 'Ekiti',
						value: 'NG-EK',
					},
					{
						name: 'Enugu',
						value: 'NG-EN',
					},
					{
						name: 'Federal Capital Territory',
						value: 'NG-FC',
					},
					{
						name: 'Gombe',
						value: 'NG-GO',
					},
					{
						name: 'Imo',
						value: 'NG-IM',
					},
					{
						name: 'Jigawa',
						value: 'NG-JI',
					},
					{
						name: 'Kaduna',
						value: 'NG-KD',
					},
					{
						name: 'Kano',
						value: 'NG-KN',
					},
					{
						name: 'Katsina',
						value: 'NG-KT',
					},
					{
						name: 'Kebbi',
						value: 'NG-KE',
					},
					{
						name: 'Kogi',
						value: 'NG-KO',
					},
					{
						name: 'Kwara',
						value: 'NG-KW',
					},
					{
						name: 'Lagos',
						value: 'NG-LA',
					},
					{
						name: 'Nasarawa',
						value: 'NG-NA',
					},
					{
						name: 'Niger',
						value: 'NG-NI',
					},
					{
						name: 'Ogun State',
						value: 'NG-OG',
					},
					{
						name: 'Ondo',
						value: 'NG-ON',
					},
					{
						name: 'Osun',
						value: 'NG-OS',
					},
					{
						name: 'Oyo',
						value: 'NG-OY',
					},
					{
						name: 'Plateau',
						value: 'NG-PL',
					},
					{
						name: 'Rivers',
						value: 'NG-RI',
					},
					{
						name: 'Sokoto',
						value: 'NG-SO',
					},
					{
						name: 'Taraba',
						value: 'NG-TA',
					},
					{
						name: 'Yobe',
						value: 'NG-YO',
					},
					{
						name: 'Zamfara',
						value: 'NG-ZA',
					},
					{
						name: 'Niue',
						value: 'NU',
					},
					{
						name: 'Toi',
						value: 'NU-TOI',
					},
					{
						name: 'Norfolk Island',
						value: 'NF',
					},
					{
						name: 'North Korea',
						value: 'KP',
					},
					{
						name: 'Chagang',
						value: 'KP-04',
					},
					{
						name: 'Kangwon',
						value: 'KP-07',
					},
					{
						name: 'North Hamgyong',
						value: 'KP-09',
					},
					{
						name: 'North Hwanghae',
						value: 'KP-06',
					},
					{
						name: 'North Pyongan',
						value: 'KP-03',
					},
					{
						name: 'Pyongyang',
						value: 'KP-01',
					},
					{
						name: 'Rason',
						value: 'KP-13',
					},
					{
						name: 'Ryanggang',
						value: 'KP-10',
					},
					{
						name: 'South Hamgyong',
						value: 'KP-08',
					},
					{
						name: 'South Hwanghae',
						value: 'KP-05',
					},
					{
						name: 'South Pyongan',
						value: 'KP-02',
					},
					{
						name: 'North Macedonia',
						value: 'MK',
					},
					{
						name: 'Bosilovo',
						value: 'MK-07',
					},
					{
						name: 'Brvenitsa',
						value: 'MK-08',
					},
					{
						name: 'Centar Zhupa',
						value: 'MK-78',
					},
					{
						name: 'Chashka',
						value: 'MK-80',
					},
					{
						name: 'Delchevo',
						value: 'MK-23',
					},
					{
						name: 'Dojran',
						value: 'MK-26',
					},
					{
						name: 'Gostivar',
						value: 'MK-19',
					},
					{
						name: 'Makedonska Kamenitsa',
						value: 'MK-51',
					},
					{
						name: 'Mogila',
						value: 'MK-53',
					},
					{
						name: 'Municipality of Arachinovo',
						value: 'MK-02',
					},
					{
						name: 'Municipality of Berovo',
						value: 'MK-03',
					},
					{
						name: 'Municipality of Bitola',
						value: 'MK-04',
					},
					{
						name: 'Municipality of Bogdanci',
						value: 'MK-05',
					},
					{
						name: 'Municipality of Bogovinje',
						value: 'MK-06',
					},
					{
						name: 'Municipality of Cheshinovo-Obleshevo',
						value: 'MK-81',
					},
					{
						name: 'Municipality of Chucher Sandevo',
						value: 'MK-82',
					},
					{
						name: 'Municipality of Debar',
						value: 'MK-21',
					},
					{
						name: 'Municipality of Debarca',
						value: 'MK-22',
					},
					{
						name: 'Municipality of Demir Hisar',
						value: 'MK-25',
					},
					{
						name: 'Municipality of Demir Kapija',
						value: 'MK-24',
					},
					{
						name: 'Municipality of Dolneni',
						value: 'MK-27',
					},
					{
						name: 'Municipality of Gevgelija',
						value: 'MK-18',
					},
					{
						name: 'Municipality of Gradsko',
						value: 'MK-20',
					},
					{
						name: 'Municipality of Ilinden',
						value: 'MK-34',
					},
					{
						name: 'Municipality of Jegunovce',
						value: 'MK-35',
					},
					{
						name: 'Municipality of Karbinci',
						value: 'MK-37',
					},
					{
						name: 'Municipality of Kavadarci',
						value: 'MK-36',
					},
					{
						name: 'Municipality of Kichevo',
						value: 'MK-40',
					},
					{
						name: 'Municipality of Kochani',
						value: 'MK-42',
					},
					{
						name: 'Municipality of Konche',
						value: 'MK-41',
					},
					{
						name: 'Municipality of Kratovo',
						value: 'MK-43',
					},
					{
						name: 'Municipality of Kriva Palanka',
						value: 'MK-44',
					},
					{
						name: 'Municipality of Krivogashtani',
						value: 'MK-45',
					},
					{
						name: 'Municipality of Krushevo',
						value: 'MK-46',
					},
					{
						name: 'Municipality of Kumanovo',
						value: 'MK-47',
					},
					{
						name: 'Municipality of Lipkovo',
						value: 'MK-48',
					},
					{
						name: 'Municipality of Lozovo',
						value: 'MK-49',
					},
					{
						name: 'Municipality of Makedonski Brod',
						value: 'MK-52',
					},
					{
						name: 'Municipality of Mavrovo and Rostusha',
						value: 'MK-50',
					},
					{
						name: 'Municipality of Negotino',
						value: 'MK-54',
					},
					{
						name: 'Municipality of Novatsi',
						value: 'MK-55',
					},
					{
						name: 'Municipality of Novo Selo',
						value: 'MK-56',
					},
					{
						name: 'Municipality of Pehchevo',
						value: 'MK-60',
					},
					{
						name: 'Municipality of Petrovets',
						value: 'MK-59',
					},
					{
						name: 'Municipality of Plasnitsa',
						value: 'MK-61',
					},
					{
						name: 'Municipality of Prilep',
						value: 'MK-62',
					},
					{
						name: 'Municipality of Rankovtse',
						value: 'MK-65',
					},
					{
						name: 'Municipality of Resen',
						value: 'MK-66',
					},
					{
						name: 'Municipality of Rosoman',
						value: 'MK-67',
					},
					{
						name: 'Municipality of Shtip',
						value: 'MK-83',
					},
					{
						name: 'Municipality of Sopishte',
						value: 'MK-70',
					},
					{
						name: 'Municipality of Struga',
						value: 'MK-72',
					},
					{
						name: 'Municipality of Vasilevo',
						value: 'MK-11',
					},
					{
						name: 'Municipality of Veles',
						value: 'MK-13',
					},
					{
						name: 'Municipality of Vevchani',
						value: 'MK-12',
					},
					{
						name: 'Municipality of Vinica',
						value: 'MK-14',
					},
					{
						name: 'Municipality of Zajas',
						value: 'MK-31',
					},
					{
						name: 'Municipality of Zhelino',
						value: 'MK-30',
					},
					{
						name: 'Municipality of Zrnovci',
						value: 'MK-33',
					},
					{
						name: 'Ohrid',
						value: 'MK-58',
					},
					{
						name: 'Probishtip',
						value: 'MK-63',
					},
					{
						name: 'Radovish',
						value: 'MK-64',
					},
					{
						name: 'Skopje',
						value: 'MK-85',
					},
					{
						name: 'Staro Nagorichane',
						value: 'MK-71',
					},
					{
						name: 'Strumitsa',
						value: 'MK-73',
					},
					{
						name: 'Studenichani',
						value: 'MK-74',
					},
					{
						name: 'Sveti Nikole',
						value: 'MK-69',
					},
					{
						name: 'Tearce',
						value: 'MK-75',
					},
					{
						name: 'Tetovo',
						value: 'MK-76',
					},
					{
						name: 'Valandovo',
						value: 'MK-10',
					},
					{
						name: 'Vrapchishte',
						value: 'MK-16',
					},
					{
						name: 'Zelenikovo',
						value: 'MK-32',
					},
					{
						name: 'Northern Mariana Islands',
						value: 'MP',
					},
					{
						name: 'Norway',
						value: 'NO',
					},
					{
						name: 'Akershus',
						value: 'NO-02',
					},
					{
						name: 'Aust-Agder',
						value: 'NO-09',
					},
					{
						name: 'Buskerud',
						value: 'NO-06',
					},
					{
						name: 'Finnmark',
						value: 'NO-20',
					},
					{
						name: 'Hedmark',
						value: 'NO-04',
					},
					{
						name: 'Hordaland',
						value: 'NO-12',
					},
					{
						name: 'Møre og Romsdal',
						value: 'NO-15',
					},
					{
						name: 'Nord-Trondelag',
						value: 'NO-17',
					},
					{
						name: 'Nordland',
						value: 'NO-18',
					},
					{
						name: 'Oppland',
						value: 'NO-05',
					},
					{
						name: 'Oslo',
						value: 'NO-03',
					},
					{
						name: 'Ostfold',
						value: 'NO-01',
					},
					{
						name: 'Rogaland',
						value: 'NO-11',
					},
					{
						name: 'Sogn og Fjordane',
						value: 'NO-14',
					},
					{
						name: 'Sor-Trondelag',
						value: 'NO-16',
					},
					{
						name: 'Telemark',
						value: 'NO-08',
					},
					{
						name: 'Troms',
						value: 'NO-19',
					},
					{
						name: 'Vest-Agder',
						value: 'NO-10',
					},
					{
						name: 'Vestfold',
						value: 'NO-07',
					},
					{
						name: 'Oman',
						value: 'OM',
					},
					{
						name: 'Ad Dakhiliyah ‍Governorate',
						value: 'OM-DA',
					},
					{
						name: 'Ad Dhahirah Governorate',
						value: 'OM-ZA',
					},
					{
						name: 'Al Batinah North Governorate',
						value: 'OM-BS',
					},
					{
						name: 'Al Batinah South Governorate',
						value: 'OM-BJ',
					},
					{
						name: 'Al Buraymi Governorate',
						value: 'OM-BU',
					},
					{
						name: 'Al Wusta Governorate',
						value: 'OM-WU',
					},
					{
						name: 'Ash Sharqiyah North Governorate',
						value: 'OM-SS',
					},
					{
						name: 'Ash Sharqiyah South Governorate',
						value: 'OM-SJ',
					},
					{
						name: 'Dhofar Governorate',
						value: 'OM-ZU',
					},
					{
						name: 'Musandam Governorate',
						value: 'OM-MU',
					},
					{
						name: 'Muscat Governorate',
						value: 'OM-MA',
					},
					{
						name: 'Pakistan',
						value: 'PK',
					},
					{
						name: 'Azad Jammu and Kashmir',
						value: 'PK-JK',
					},
					{
						name: 'Balochistan',
						value: 'PK-BA',
					},
					{
						name: 'Federally Administered Tribal Areas',
						value: 'PK-TA',
					},
					{
						name: 'Gilgit-Baltistan',
						value: 'PK-GB',
					},
					{
						name: 'Islamabad Capital Territory',
						value: 'PK-IS',
					},
					{
						name: 'Khyber Pakhtunkhwa',
						value: 'PK-KP',
					},
					{
						name: 'Punjab',
						value: 'PK-PB',
					},
					{
						name: 'Sindh',
						value: 'PK-SD',
					},
					{
						name: 'Palau',
						value: 'PW',
					},
					{
						name: 'Aimeliik',
						value: 'PW-002',
					},
					{
						name: 'Airai',
						value: 'PW-004',
					},
					{
						name: 'Angaur',
						value: 'PW-010',
					},
					{
						name: 'Hatohobei',
						value: 'PW-050',
					},
					{
						name: 'Kayangel',
						value: 'PW-100',
					},
					{
						name: 'Koror',
						value: 'PW-150',
					},
					{
						name: 'Melekeok',
						value: 'PW-212',
					},
					{
						name: 'Ngaraard',
						value: 'PW-214',
					},
					{
						name: 'Ngarchelong',
						value: 'PW-218',
					},
					{
						name: 'Ngardmau',
						value: 'PW-222',
					},
					{
						name: 'Ngaremlengui',
						value: 'PW-227',
					},
					{
						name: 'Ngatpang',
						value: 'PW-224',
					},
					{
						name: 'Ngchesar',
						value: 'PW-226',
					},
					{
						name: 'Ngiwal',
						value: 'PW-228',
					},
					{
						name: 'Peleliu',
						value: 'PW-350',
					},
					{
						name: 'Sonsorol',
						value: 'PW-370',
					},
					{
						name: 'Palestine',
						value: 'PS',
					},
					{
						name: 'Panama',
						value: 'PA',
					},
					{
						name: 'Bocas del Toro Province',
						value: 'PA-1',
					},
					{
						name: 'Chiriquí Province',
						value: 'PA-4',
					},
					{
						name: 'Coclé Province',
						value: 'PA-2',
					},
					{
						name: 'Colón Province',
						value: 'PA-3',
					},
					{
						name: 'Darién Province',
						value: 'PA-5',
					},
					{
						name: 'Emberá-Wounaan Comarca',
						value: 'PA-EM',
					},
					{
						name: 'Guna Yala',
						value: 'PA-KY',
					},
					{
						name: 'Herrera Province',
						value: 'PA-6',
					},
					{
						name: 'Los Santos Province',
						value: 'PA-7',
					},
					{
						name: 'Ngäbe-Buglé Comarca',
						value: 'PA-NB',
					},
					{
						name: 'Panama',
						value: 'PA-8',
					},
					{
						name: 'Veraguas Province',
						value: 'PA-9',
					},
					{
						name: 'Papua New Guinea',
						value: 'PG',
					},
					{
						name: 'Autonomous Region of Bougainville',
						value: 'PG-NSB',
					},
					{
						name: 'Central Province',
						value: 'PG-CPM',
					},
					{
						name: 'Chimbu Province',
						value: 'PG-CPK',
					},
					{
						name: 'East New Britain Province',
						value: 'PG-EBR',
					},
					{
						name: 'East Sepik Province',
						value: 'PG-ESW',
					},
					{
						name: 'Eastern Highlands Province',
						value: 'PG-EHG',
					},
					{
						name: 'Enga Province',
						value: 'PG-EPW',
					},
					{
						name: 'Gulf Province',
						value: 'PG-GPK',
					},
					{
						name: 'Jiwaka Province',
						value: 'PG-JWK',
					},
					{
						name: 'Madang Province',
						value: 'PG-MPM',
					},
					{
						name: 'Manus Province',
						value: 'PG-MRL',
					},
					{
						name: 'Milne Bay Province',
						value: 'PG-MBA',
					},
					{
						name: 'Morobe Province',
						value: 'PG-MPL',
					},
					{
						name: 'National Capital District',
						value: 'PG-NCD',
					},
					{
						name: 'New Ireland Province',
						value: 'PG-NIK',
					},
					{
						name: 'Northern Province',
						value: 'PG-NPP',
					},
					{
						name: 'Southern Highlands Province',
						value: 'PG-SHM',
					},
					{
						name: 'West New Britain Province',
						value: 'PG-WBK',
					},
					{
						name: 'West Sepik Province',
						value: 'PG-SAN',
					},
					{
						name: 'Western Highlands Province',
						value: 'PG-WHM',
					},
					{
						name: 'Western Province',
						value: 'PG-WPD',
					},
					{
						name: 'Paraguay',
						value: 'PY',
					},
					{
						name: 'Alto Paraguay',
						value: 'PY-16',
					},
					{
						name: 'Alto Parana',
						value: 'PY-10',
					},
					{
						name: 'Amambay Department',
						value: 'PY-13',
					},
					{
						name: 'Asunción',
						value: 'PY-ASU',
					},
					{
						name: 'Boqueron',
						value: 'PY-19',
					},
					{
						name: 'Caaguazu',
						value: 'PY-5',
					},
					{
						name: 'Caazapa',
						value: 'PY-6',
					},
					{
						name: 'Canindeyu',
						value: 'PY-14',
					},
					{
						name: 'Central',
						value: 'PY-11',
					},
					{
						name: 'Concepcion',
						value: 'PY-1',
					},
					{
						name: 'Cordillera',
						value: 'PY-3',
					},
					{
						name: 'Guaira',
						value: 'PY-4',
					},
					{
						name: 'Itapua',
						value: 'PY-7',
					},
					{
						name: 'Misiones',
						value: 'PY-8',
					},
					{
						name: 'Neembucu',
						value: 'PY-12',
					},
					{
						name: 'Paraguari',
						value: 'PY-9',
					},
					{
						name: 'Presidente Hayes Department',
						value: 'PY-15',
					},
					{
						name: 'San Pedro',
						value: 'PY-2',
					},
					{
						name: 'Peru',
						value: 'PE',
					},
					{
						name: 'Amazonas',
						value: 'PE-AMA',
					},
					{
						name: 'Ancash',
						value: 'PE-ANC',
					},
					{
						name: 'Apurimac',
						value: 'PE-APU',
					},
					{
						name: 'Arequipa',
						value: 'PE-ARE',
					},
					{
						name: 'Ayacucho',
						value: 'PE-AYA',
					},
					{
						name: 'Cajamarca',
						value: 'PE-CAJ',
					},
					{
						name: 'Callao',
						value: 'PE-CAL',
					},
					{
						name: 'Cusco',
						value: 'PE-CUS',
					},
					{
						name: 'Huancavelica',
						value: 'PE-HUV',
					},
					{
						name: 'Huanuco',
						value: 'PE-HUC',
					},
					{
						name: 'Ica',
						value: 'PE-ICA',
					},
					{
						name: 'Junin',
						value: 'PE-JUN',
					},
					{
						name: 'La Libertad',
						value: 'PE-LAL',
					},
					{
						name: 'Lambayeque',
						value: 'PE-LAM',
					},
					{
						name: 'Lima Region',
						value: 'PE-LIM',
					},
					{
						name: 'Loreto',
						value: 'PE-LOR',
					},
					{
						name: 'Madre de Dios',
						value: 'PE-MDD',
					},
					{
						name: 'Moquegua',
						value: 'PE-MOQ',
					},
					{
						name: 'Pasco',
						value: 'PE-PAS',
					},
					{
						name: 'Piura',
						value: 'PE-PIU',
					},
					{
						name: 'Puno',
						value: 'PE-PUN',
					},
					{
						name: 'San Martin',
						value: 'PE-SAM',
					},
					{
						name: 'Tacna',
						value: 'PE-TAC',
					},
					{
						name: 'Tumbes',
						value: 'PE-TUM',
					},
					{
						name: 'Ucayali',
						value: 'PE-UCA',
					},
					{
						name: 'Philippines',
						value: 'PH',
					},
					{
						name: 'Autonomous Region in Muslim Mindanao',
						value: 'PH-14',
					},
					{
						name: 'Bicol',
						value: 'PH-05',
					},
					{
						name: 'Cagayan Valley',
						value: 'PH-02',
					},
					{
						name: 'Calabarzon',
						value: 'PH-40',
					},
					{
						name: 'Caraga',
						value: 'PH-13',
					},
					{
						name: 'Central Luzon',
						value: 'PH-03',
					},
					{
						name: 'Central Visayas',
						value: 'PH-07',
					},
					{
						name: 'Cordillera Administrative Region',
						value: 'PH-15',
					},
					{
						name: 'Davao Region',
						value: 'PH-11',
					},
					{
						name: 'Eastern Visayas',
						value: 'PH-08',
					},
					{
						name: 'Ilocos Region',
						value: 'PH-01',
					},
					{
						name: 'Metro Manila',
						value: 'PH-00',
					},
					{
						name: 'MIMAROPA',
						value: 'PH-41',
					},
					{
						name: 'Northern Mindanao',
						value: 'PH-10',
					},
					{
						name: 'Region XII',
						value: 'PH-12',
					},
					{
						name: 'Western Visayas',
						value: 'PH-06',
					},
					{
						name: 'Zamboanga Peninsula',
						value: 'PH-09',
					},
					{
						name: 'Pitcairn Islands',
						value: 'PN',
					},
					{
						name: 'Poland',
						value: 'PL',
					},
					{
						name: 'Greater Poland Voivodeship',
						value: 'PL-WP',
					},
					{
						name: 'Kuyavian-Pomeranian Voivodeship',
						value: 'PL-KP',
					},
					{
						name: 'Lesser Poland Voivodeship',
						value: 'PL-MA',
					},
					{
						name: 'Łódź Voivodeship',
						value: 'PL-LD',
					},
					{
						name: 'Lower Silesian Voivodeship',
						value: 'PL-DS',
					},
					{
						name: 'Lublin Voivodeship',
						value: 'PL-LU',
					},
					{
						name: 'Lubusz Voivodeship',
						value: 'PL-LB',
					},
					{
						name: 'Masovian Voivodeship',
						value: 'PL-MZ',
					},
					{
						name: 'Opole Voivodeship',
						value: 'PL-OP',
					},
					{
						name: 'Podkarpackie Voivodeship',
						value: 'PL-PK',
					},
					{
						name: 'Podlaskie Voivodeship',
						value: 'PL-PD',
					},
					{
						name: 'Pomeranian Voivodeship',
						value: 'PL-PM',
					},
					{
						name: 'Silesian Voivodeship',
						value: 'PL-SL',
					},
					{
						name: 'Swietokrzyskie',
						value: 'PL-SK',
					},
					{
						name: 'Warmian-Masurian Voivodeship',
						value: 'PL-WN',
					},
					{
						name: 'West Pomeranian Voivodeship',
						value: 'PL-ZP',
					},
					{
						name: 'Portugal',
						value: 'PT',
					},
					{
						name: 'Aveiro District',
						value: 'PT-01',
					},
					{
						name: 'Azores',
						value: 'PT-20',
					},
					{
						name: 'Beja District',
						value: 'PT-02',
					},
					{
						name: 'Braga',
						value: 'PT-03',
					},
					{
						name: 'Bragança District',
						value: 'PT-04',
					},
					{
						name: 'Castelo Branco District',
						value: 'PT-05',
					},
					{
						name: 'Coimbra District',
						value: 'PT-06',
					},
					{
						name: 'Évora District',
						value: 'PT-07',
					},
					{
						name: 'Faro District',
						value: 'PT-08',
					},
					{
						name: 'Guarda District',
						value: 'PT-09',
					},
					{
						name: 'Leiria District',
						value: 'PT-10',
					},
					{
						name: 'Lisbon',
						value: 'PT-11',
					},
					{
						name: 'Madeira',
						value: 'PT-30',
					},
					{
						name: 'Portalegre District',
						value: 'PT-12',
					},
					{
						name: 'Porto District',
						value: 'PT-13',
					},
					{
						name: 'Santarém District',
						value: 'PT-14',
					},
					{
						name: 'Setubal',
						value: 'PT-15',
					},
					{
						name: 'Viana do Castelo District',
						value: 'PT-16',
					},
					{
						name: 'Vila Real District',
						value: 'PT-17',
					},
					{
						name: 'Viseu District',
						value: 'PT-18',
					},
					{
						name: 'Puerto Rico',
						value: 'PR',
					},
					{
						name: 'Qatar',
						value: 'QA',
					},
					{
						name: 'Al Daayen',
						value: 'QA-ZA',
					},
					{
						name: 'Al Khor',
						value: 'QA-KH',
					},
					{
						name: 'Al Rayyan Municipality',
						value: 'QA-RA',
					},
					{
						name: 'Al Wakrah Municipality',
						value: 'QA-WA',
					},
					{
						name: 'Doha',
						value: 'QA-DA',
					},
					{
						name: 'Madinat ash Shamal',
						value: 'QA-MS',
					},
					{
						name: 'Umm Salal Municipality',
						value: 'QA-US',
					},
					{
						name: 'Réunion',
						value: 'RE',
					},
					{
						name: 'Romania',
						value: 'RO',
					},
					{
						name: 'Alba County',
						value: 'RO-AB',
					},
					{
						name: 'Arad County',
						value: 'RO-AR',
					},
					{
						name: 'Argeș County',
						value: 'RO-AG',
					},
					{
						name: 'Bacău County',
						value: 'RO-BC',
					},
					{
						name: 'Bihor County',
						value: 'RO-BH',
					},
					{
						name: 'Bistrița-Năsăud County',
						value: 'RO-BN',
					},
					{
						name: 'Botoșani County',
						value: 'RO-BT',
					},
					{
						name: 'Brăila County',
						value: 'RO-BR',
					},
					{
						name: 'Brașov County',
						value: 'RO-BV',
					},
					{
						name: 'Bucharest',
						value: 'RO-B',
					},
					{
						name: 'Buzău County',
						value: 'RO-BZ',
					},
					{
						name: 'Călărași County',
						value: 'RO-CL',
					},
					{
						name: 'Caraș-Severin County',
						value: 'RO-CS',
					},
					{
						name: 'Cluj County',
						value: 'RO-CJ',
					},
					{
						name: 'Constanța County',
						value: 'RO-CT',
					},
					{
						name: 'Covasna County',
						value: 'RO-CV',
					},
					{
						name: 'Dâmbovița County',
						value: 'RO-DB',
					},
					{
						name: 'Dolj County',
						value: 'RO-DJ',
					},
					{
						name: 'Galați',
						value: 'RO-GL',
					},
					{
						name: 'Giurgiu County',
						value: 'RO-GR',
					},
					{
						name: 'Gorj County',
						value: 'RO-GJ',
					},
					{
						name: 'Harghita County',
						value: 'RO-HR',
					},
					{
						name: 'Hunedoara County',
						value: 'RO-HD',
					},
					{
						name: 'Ialomița County',
						value: 'RO-IL',
					},
					{
						name: 'Iași County',
						value: 'RO-IS',
					},
					{
						name: 'Ilfov County',
						value: 'RO-IF',
					},
					{
						name: 'Maramureș County',
						value: 'RO-MM',
					},
					{
						name: 'Mehedinți County',
						value: 'RO-MH',
					},
					{
						name: 'Mureș County',
						value: 'RO-MS',
					},
					{
						name: 'Neamț County',
						value: 'RO-NT',
					},
					{
						name: 'Olt County',
						value: 'RO-OT',
					},
					{
						name: 'Prahova',
						value: 'RO-PH',
					},
					{
						name: 'Sălaj',
						value: 'RO-SJ',
					},
					{
						name: 'Satu Mare County',
						value: 'RO-SM',
					},
					{
						name: 'Sibiu',
						value: 'RO-SB',
					},
					{
						name: 'Suceava County',
						value: 'RO-SV',
					},
					{
						name: 'Teleorman County',
						value: 'RO-TR',
					},
					{
						name: 'Timiș County',
						value: 'RO-TM',
					},
					{
						name: 'Tulcea County',
						value: 'RO-TL',
					},
					{
						name: 'Vâlcea County',
						value: 'RO-VL',
					},
					{
						name: 'Vaslui County',
						value: 'RO-VS',
					},
					{
						name: 'Vrancea County',
						value: 'RO-VN',
					},
					{
						name: 'Russia',
						value: 'RU',
					},
					{
						name: 'Adygea',
						value: 'RU-AD',
					},
					{
						name: 'Altai Krai',
						value: 'RU-ALT',
					},
					{
						name: 'Altai Republic',
						value: 'RU-AL',
					},
					{
						name: 'Amur Oblast',
						value: 'RU-AMU',
					},
					{
						name: 'Arkhangelsk Oblast',
						value: 'RU-ARK',
					},
					{
						name: 'Astrakhan Oblast',
						value: 'RU-AST',
					},
					{
						name: 'Belgorod Oblast',
						value: 'RU-BEL',
					},
					{
						name: 'Bryansk Oblast',
						value: 'RU-BRY',
					},
					{
						name: 'Buryatia',
						value: 'RU-BU',
					},
					{
						name: 'Chechnya',
						value: 'RU-CE',
					},
					{
						name: 'Chelyabinsk Oblast',
						value: 'RU-CHE',
					},
					{
						name: 'Chukotka Autonomous Okrug',
						value: 'RU-CHU',
					},
					{
						name: 'Chuvashia Republic',
						value: 'RU-CU',
					},
					{
						name: 'Dagestan Republic',
						value: 'RU-DA',
					},
					{
						name: 'Ingushetia',
						value: 'RU-IN',
					},
					{
						name: 'Irkutsk Oblast',
						value: 'RU-IRK',
					},
					{
						name: 'Ivanovo Oblast',
						value: 'RU-IVA',
					},
					{
						name: 'Jewish Autonomous Oblast',
						value: 'RU-YEV',
					},
					{
						name: 'Kabardino-Balkaria',
						value: 'RU-KB',
					},
					{
						name: 'Kaliningrad Oblast',
						value: 'RU-KGD',
					},
					{
						name: 'Kalmykia',
						value: 'RU-KL',
					},
					{
						name: 'Kaluga Oblast',
						value: 'RU-KLU',
					},
					{
						name: 'Kamchatka Krai',
						value: 'RU-KAM',
					},
					{
						name: 'Karachay-Cherkessia',
						value: 'RU-KC',
					},
					{
						name: 'Kemerovo Oblast',
						value: 'RU-KEM',
					},
					{
						name: 'Khabarovsk Krai',
						value: 'RU-KHA',
					},
					{
						name: 'Khanty-Mansi Autonomous Okrug',
						value: 'RU-KHM',
					},
					{
						name: 'Kirov Oblast',
						value: 'RU-KIR',
					},
					{
						name: 'Komi Republic',
						value: 'RU-KO',
					},
					{
						name: 'Kostroma Oblast',
						value: 'RU-KOS',
					},
					{
						name: 'Krasnodar Krai',
						value: 'RU-KDA',
					},
					{
						name: 'Krasnoyarsk Krai',
						value: 'RU-KYA',
					},
					{
						name: 'Kurgan Oblast',
						value: 'RU-KGN',
					},
					{
						name: 'Kursk Oblast',
						value: 'RU-KRS',
					},
					{
						name: 'Leningrad Oblast',
						value: 'RU-LEN',
					},
					{
						name: 'Lipetsk Oblast',
						value: 'RU-LIP',
					},
					{
						name: 'Magadan Oblast',
						value: 'RU-MAG',
					},
					{
						name: 'Mari El Republic',
						value: 'RU-ME',
					},
					{
						name: 'Mordovia',
						value: 'RU-MO',
					},
					{
						name: 'Moscow',
						value: 'RU-MOW',
					},
					{
						name: 'Moscow Oblast',
						value: 'RU-MOS',
					},
					{
						name: 'Murmansk Oblast',
						value: 'RU-MUR',
					},
					{
						name: 'Nenets Autonomous Okrug',
						value: 'RU-NEN',
					},
					{
						name: 'Nizhny Novgorod Oblast',
						value: 'RU-NIZ',
					},
					{
						name: 'North Ossetia–Alania',
						value: 'RU-SE',
					},
					{
						name: 'Novgorod Oblast',
						value: 'RU-NGR',
					},
					{
						name: 'Novosibirsk Oblast',
						value: 'RU-NVS',
					},
					{
						name: 'Omsk Oblast',
						value: 'RU-OMS',
					},
					{
						name: 'Orenburg Oblast',
						value: 'RU-ORE',
					},
					{
						name: 'Oryol Oblast',
						value: 'RU-ORL',
					},
					{
						name: 'Penza Oblast',
						value: 'RU-PNZ',
					},
					{
						name: 'Perm Krai',
						value: 'RU-PER',
					},
					{
						name: 'Primorsky Krai',
						value: 'RU-PRI',
					},
					{
						name: 'Pskov Oblast',
						value: 'RU-PSK',
					},
					{
						name: 'Republic of Bashkortostan',
						value: 'RU-BA',
					},
					{
						name: 'Republic of Karelia',
						value: 'RU-KR',
					},
					{
						name: 'Republic of Khakassia',
						value: 'RU-KK',
					},
					{
						name: 'Rostov Oblast',
						value: 'RU-ROS',
					},
					{
						name: 'Ryazan Oblast',
						value: 'RU-RYA',
					},
					{
						name: 'Saint Petersburg',
						value: 'RU-SPE',
					},
					{
						name: 'Sakha Republic',
						value: 'RU-SA',
					},
					{
						name: 'Sakhalin Oblast',
						value: 'RU-SAK',
					},
					{
						name: 'Samara Oblast',
						value: 'RU-SAM',
					},
					{
						name: 'Saratov Oblast',
						value: 'RU-SAR',
					},
					{
						name: 'Smolensk Oblast',
						value: 'RU-SMO',
					},
					{
						name: 'Stavropol Krai',
						value: 'RU-STA',
					},
					{
						name: 'Sverdlovsk Oblast',
						value: 'RU-SVE',
					},
					{
						name: 'Tambov Oblast',
						value: 'RU-TAM',
					},
					{
						name: 'Tatarstan',
						value: 'RU-TA',
					},
					{
						name: 'Tomsk Oblast',
						value: 'RU-TOM',
					},
					{
						name: 'Tula Oblast',
						value: 'RU-TUL',
					},
					{
						name: 'Tuva',
						value: 'RU-TY',
					},
					{
						name: 'Tver Oblast',
						value: 'RU-TVE',
					},
					{
						name: 'Tyumen Oblast',
						value: 'RU-TYU',
					},
					{
						name: 'Udmurt Republic',
						value: 'RU-UD',
					},
					{
						name: 'Ulyanovsk Oblast',
						value: 'RU-ULY',
					},
					{
						name: 'Vladimir Oblast',
						value: 'RU-VLA',
					},
					{
						name: 'Volgograd Oblast',
						value: 'RU-VGG',
					},
					{
						name: 'Vologda Oblast',
						value: 'RU-VLG',
					},
					{
						name: 'Voronezh Oblast',
						value: 'RU-VOR',
					},
					{
						name: 'Yamalo-Nenets Autonomous Okrug',
						value: 'RU-YAN',
					},
					{
						name: 'Yaroslavl Oblast',
						value: 'RU-YAR',
					},
					{
						name: 'Zabaykalsky Krai',
						value: 'RU-ZAB',
					},
					{
						name: 'Rwanda',
						value: 'RW',
					},
					{
						name: 'Eastern Province',
						value: 'RW-02',
					},
					{
						name: 'Kigali',
						value: 'RW-01',
					},
					{
						name: 'Northern Province',
						value: 'RW-03',
					},
					{
						name: 'Southern Province',
						value: 'RW-05',
					},
					{
						name: 'Western Province',
						value: 'RW-04',
					},
					{
						name: 'Samoa',
						value: 'WS',
					},
					{
						name: "A'ana",
						value: 'WS-AA',
					},
					{
						name: 'Aiga-i-le-Tai',
						value: 'WS-AL',
					},
					{
						name: 'Atua',
						value: 'WS-AT',
					},
					{
						name: "Fa'asaleleaga",
						value: 'WS-FA',
					},
					{
						name: "Gaga'emauga",
						value: 'WS-GE',
					},
					{
						name: "Gaga'ifomauga",
						value: 'WS-GI',
					},
					{
						name: 'Palauli',
						value: 'WS-PA',
					},
					{
						name: "Satupa'itea",
						value: 'WS-SA',
					},
					{
						name: 'Tuamasaga',
						value: 'WS-TU',
					},
					{
						name: "Va'a-o-Fonoti",
						value: 'WS-VF',
					},
					{
						name: 'Vaisigano',
						value: 'WS-VS',
					},
					{
						name: 'San Marino',
						value: 'SM',
					},
					{
						name: 'Acquaviva',
						value: 'SM-01',
					},
					{
						name: 'Borgo Maggiore',
						value: 'SM-06',
					},
					{
						name: 'Chiesanuova',
						value: 'SM-02',
					},
					{
						name: 'Domagnano',
						value: 'SM-03',
					},
					{
						name: 'Faetano',
						value: 'SM-04',
					},
					{
						name: 'Fiorentino',
						value: 'SM-05',
					},
					{
						name: 'Montegiardino',
						value: 'SM-08',
					},
					{
						name: 'San Marino',
						value: 'SM-07',
					},
					{
						name: 'Serravalle',
						value: 'SM-09',
					},
					{
						name: 'São Tomé & Príncipe',
						value: 'ST',
					},
					{
						name: 'Principe',
						value: 'ST-P',
					},
					{
						name: 'Sao Tome',
						value: 'ST-S',
					},
					{
						name: 'Saudi Arabia',
						value: 'SA',
					},
					{
						name: 'Al Bahah Province',
						value: 'SA-11',
					},
					{
						name: 'Al Jowf',
						value: 'SA-12',
					},
					{
						name: 'Al Madinah Province',
						value: 'SA-03',
					},
					{
						name: 'Al Qassim',
						value: 'SA-05',
					},
					{
						name: 'Aseer Province',
						value: 'SA-14',
					},
					{
						name: 'Eastern Province',
						value: 'SA-04',
					},
					{
						name: 'Hail Province',
						value: 'SA-06',
					},
					{
						name: 'Jazan',
						value: 'SA-09',
					},
					{
						name: 'Makkah Province',
						value: 'SA-02',
					},
					{
						name: 'Najran',
						value: 'SA-10',
					},
					{
						name: 'Northern Borders Province',
						value: 'SA-08',
					},
					{
						name: 'Riyadh Province',
						value: 'SA-01',
					},
					{
						name: 'Tabuk Province',
						value: 'SA-07',
					},
					{
						name: 'Senegal',
						value: 'SN',
					},
					{
						name: 'Dakar',
						value: 'SN-DK',
					},
					{
						name: 'Diourbel Region',
						value: 'SN-DB',
					},
					{
						name: 'Fatick Region',
						value: 'SN-FK',
					},
					{
						name: 'Kaffrine Region',
						value: 'SN-KA',
					},
					{
						name: 'Kaolack Region',
						value: 'SN-KL',
					},
					{
						name: 'Kédougou Region',
						value: 'SN-KE',
					},
					{
						name: 'Kolda Region',
						value: 'SN-KD',
					},
					{
						name: 'Louga Region',
						value: 'SN-LG',
					},
					{
						name: 'Matam Region',
						value: 'SN-MT',
					},
					{
						name: 'Saint-Louis Region',
						value: 'SN-SL',
					},
					{
						name: 'Sédhiou Region',
						value: 'SN-SE',
					},
					{
						name: 'Tambacounda Region',
						value: 'SN-TC',
					},
					{
						name: 'Thiès Region',
						value: 'SN-TH',
					},
					{
						name: 'Ziguinchor',
						value: 'SN-ZG',
					},
					{
						name: 'Serbia',
						value: 'RS',
					},
					{
						name: 'Vojvodina',
						value: 'RS-VO',
					},
					{
						name: 'Seychelles',
						value: 'SC',
					},
					{
						name: 'Anse Aux Pins',
						value: 'SC-01',
					},
					{
						name: 'Anse Boileau',
						value: 'SC-02',
					},
					{
						name: 'Anse Etoile',
						value: 'SC-03',
					},
					{
						name: 'Anse Royale',
						value: 'SC-05',
					},
					{
						name: 'Au Cap',
						value: 'SC-04',
					},
					{
						name: 'Baie Lazare',
						value: 'SC-06',
					},
					{
						name: 'Baie Sainte Anne',
						value: 'SC-07',
					},
					{
						name: 'Beau Vallon',
						value: 'SC-08',
					},
					{
						name: 'Bel Air',
						value: 'SC-09',
					},
					{
						name: 'Bel Ombre',
						value: 'SC-10',
					},
					{
						name: 'Cascade',
						value: 'SC-11',
					},
					{
						name: 'Glacis',
						value: 'SC-12',
					},
					{
						name: 'Grand Anse Mahe',
						value: 'SC-13',
					},
					{
						name: 'Grand Anse Praslin',
						value: 'SC-14',
					},
					{
						name: 'La Digue',
						value: 'SC-15',
					},
					{
						name: 'La Riviere Anglaise',
						value: 'SC-16',
					},
					{
						name: 'Les Mamelles',
						value: 'SC-24',
					},
					{
						name: 'Mont Buxton',
						value: 'SC-17',
					},
					{
						name: 'Mont Fleuri',
						value: 'SC-18',
					},
					{
						name: 'Plaisance',
						value: 'SC-19',
					},
					{
						name: 'Pointe La Rue',
						value: 'SC-20',
					},
					{
						name: 'Port Glaud',
						value: 'SC-21',
					},
					{
						name: 'Roche Caiman',
						value: 'SC-25',
					},
					{
						name: 'Saint Louis',
						value: 'SC-22',
					},
					{
						name: 'Takamaka',
						value: 'SC-23',
					},
					{
						name: 'Sierra Leone',
						value: 'SL',
					},
					{
						name: 'Eastern Province',
						value: 'SL-E',
					},
					{
						name: 'Northern Province',
						value: 'SL-N',
					},
					{
						name: 'Southern Province',
						value: 'SL-S',
					},
					{
						name: 'Western Area',
						value: 'SL-W',
					},
					{
						name: 'Singapore',
						value: 'SG',
					},
					{
						name: 'Sint Maarten',
						value: 'SX',
					},
					{
						name: 'Slovakia',
						value: 'SK',
					},
					{
						name: 'Banská Bystrica Region',
						value: 'SK-BC',
					},
					{
						name: 'Bratislava Region',
						value: 'SK-BL',
					},
					{
						name: 'Košice Region',
						value: 'SK-KI',
					},
					{
						name: 'Nitra Region',
						value: 'SK-NI',
					},
					{
						name: 'Prešov Region',
						value: 'SK-PV',
					},
					{
						name: 'Trenčín Region',
						value: 'SK-TC',
					},
					{
						name: 'Trnava Region',
						value: 'SK-TA',
					},
					{
						name: 'Žilina Region',
						value: 'SK-ZI',
					},
					{
						name: 'Slovenia',
						value: 'SI',
					},
					{
						name: 'Solomon Islands',
						value: 'SB',
					},
					{
						name: 'Capital Territory',
						value: 'SB-CT',
					},
					{
						name: 'Central Province',
						value: 'SB-CE',
					},
					{
						name: 'Choiseul Province',
						value: 'SB-CH',
					},
					{
						name: 'Guadalcanal Province',
						value: 'SB-GU',
					},
					{
						name: 'Isabel Province',
						value: 'SB-IS',
					},
					{
						name: 'Makira-Ulawa',
						value: 'SB-MK',
					},
					{
						name: 'Malaita Province',
						value: 'SB-ML',
					},
					{
						name: 'Rennell and Bellona Province',
						value: 'SB-RB',
					},
					{
						name: 'Temotu Province',
						value: 'SB-TE',
					},
					{
						name: 'Western Province',
						value: 'SB-WE',
					},
					{
						name: 'Somalia',
						value: 'SO',
					},
					{
						name: 'Awdal',
						value: 'SO-AW',
					},
					{
						name: 'Bakool',
						value: 'SO-BK',
					},
					{
						name: 'Banaadir',
						value: 'SO-BN',
					},
					{
						name: 'Bari',
						value: 'SO-BR',
					},
					{
						name: 'Bay',
						value: 'SO-BY',
					},
					{
						name: 'Galguduud',
						value: 'SO-GA',
					},
					{
						name: 'Gedo',
						value: 'SO-GE',
					},
					{
						name: 'Hiran',
						value: 'SO-HI',
					},
					{
						name: 'Jubbada Dhexe',
						value: 'SO-JD',
					},
					{
						name: 'Jubbada Hoose',
						value: 'SO-JH',
					},
					{
						name: 'Mudug',
						value: 'SO-MU',
					},
					{
						name: 'Nugaal',
						value: 'SO-NU',
					},
					{
						name: 'Sanaag',
						value: 'SO-SA',
					},
					{
						name: 'Shabeellaha Dhexe',
						value: 'SO-SD',
					},
					{
						name: 'Shabeellaha Hoose',
						value: 'SO-SH',
					},
					{
						name: 'Sool',
						value: 'SO-SO',
					},
					{
						name: 'Togdheer',
						value: 'SO-TO',
					},
					{
						name: 'Woqooyi Galbeed',
						value: 'SO-WO',
					},
					{
						name: 'South Africa',
						value: 'ZA',
					},
					{
						name: 'Eastern Cape',
						value: 'ZA-EC',
					},
					{
						name: 'Free State',
						value: 'ZA-FS',
					},
					{
						name: 'Gauteng',
						value: 'ZA-GT',
					},
					{
						name: 'KwaZulu-Natal',
						value: 'ZA-NL',
					},
					{
						name: 'Limpopo',
						value: 'ZA-LP',
					},
					{
						name: 'Mpumalanga',
						value: 'ZA-MP',
					},
					{
						name: 'North West',
						value: 'ZA-NW',
					},
					{
						name: 'Northern Cape',
						value: 'ZA-NC',
					},
					{
						name: 'Western Cape',
						value: 'ZA-WC',
					},
					{
						name: 'South Georgia & South Sandwich Islands',
						value: 'GS',
					},
					{
						name: 'South Korea',
						value: 'KR',
					},
					{
						name: 'Busan',
						value: 'KR-26',
					},
					{
						name: 'Chungcheongbuk-do',
						value: 'KR-43',
					},
					{
						name: 'Chungcheongnam-do',
						value: 'KR-44',
					},
					{
						name: 'Daegu',
						value: 'KR-27',
					},
					{
						name: 'Daejeon',
						value: 'KR-30',
					},
					{
						name: 'Gangwon-do',
						value: 'KR-42',
					},
					{
						name: 'Gwangju',
						value: 'KR-29',
					},
					{
						name: 'Gyeonggi-do',
						value: 'KR-41',
					},
					{
						name: 'Gyeongsangbuk-do',
						value: 'KR-47',
					},
					{
						name: 'Gyeongsangnam-do',
						value: 'KR-48',
					},
					{
						name: 'Incheon',
						value: 'KR-28',
					},
					{
						name: 'Jeju-do',
						value: 'KR-49',
					},
					{
						name: 'Jeollabuk-do',
						value: 'KR-45',
					},
					{
						name: 'Jeollanam-do',
						value: 'KR-46',
					},
					{
						name: 'Seoul',
						value: 'KR-11',
					},
					{
						name: 'Ulsan',
						value: 'KR-31',
					},
					{
						name: 'South Sudan',
						value: 'SS',
					},
					{
						name: 'Al Wahdah',
						value: 'SS-UY',
					},
					{
						name: 'Al-Buhayrat',
						value: 'SS-LK',
					},
					{
						name: 'Central Equatoria',
						value: 'SS-EC',
					},
					{
						name: 'Eastern Equatoria',
						value: 'SS-EE',
					},
					{
						name: 'Jonglei',
						value: 'SS-JG',
					},
					{
						name: 'Northern Bahr el Ghazal',
						value: 'SS-BN',
					},
					{
						name: 'Upper Nile',
						value: 'SS-NU',
					},
					{
						name: 'Warrap',
						value: 'SS-WR',
					},
					{
						name: 'Western Bahr el Ghazal',
						value: 'SS-BW',
					},
					{
						name: 'Western Equatoria',
						value: 'SS-EW',
					},
					{
						name: 'Spain',
						value: 'ES',
					},
					{
						name: 'Andalusia',
						value: 'ES-AN',
					},
					{
						name: 'Aragon',
						value: 'ES-AR',
					},
					{
						name: 'Asturias',
						value: 'ES-AS',
					},
					{
						name: 'Balearic Islands',
						value: 'ES-IB',
					},
					{
						name: 'Basque Country',
						value: 'ES-PV',
					},
					{
						name: 'Canary Islands',
						value: 'ES-CN',
					},
					{
						name: 'Cantabria',
						value: 'ES-CB',
					},
					{
						name: 'Castile and León',
						value: 'ES-CL',
					},
					{
						name: 'Castile-La Mancha',
						value: 'ES-CM',
					},
					{
						name: 'Catalonia',
						value: 'ES-CT',
					},
					{
						name: 'Ceuta',
						value: 'ES-CE',
					},
					{
						name: 'Community of Madrid',
						value: 'ES-MD',
					},
					{
						name: 'Extremadura',
						value: 'ES-EX',
					},
					{
						name: 'Galicia',
						value: 'ES-GA',
					},
					{
						name: 'La Rioja',
						value: 'ES-RI',
					},
					{
						name: 'Melilla',
						value: 'ES-ML',
					},
					{
						name: 'Navarre',
						value: 'ES-NC',
					},
					{
						name: 'Region of Murcia',
						value: 'ES-MC',
					},
					{
						name: 'Valencian Community',
						value: 'ES-VC',
					},
					{
						name: 'Sri Lanka',
						value: 'LK',
					},
					{
						name: 'Central Province',
						value: 'LK-2',
					},
					{
						name: 'Eastern Province',
						value: 'LK-5',
					},
					{
						name: 'North Central Province',
						value: 'LK-7',
					},
					{
						name: 'North Western Province',
						value: 'LK-6',
					},
					{
						name: 'Northern Province',
						value: 'LK-4',
					},
					{
						name: 'Sabaragamuwa Province',
						value: 'LK-9',
					},
					{
						name: 'Southern Province',
						value: 'LK-3',
					},
					{
						name: 'Uva Province',
						value: 'LK-8',
					},
					{
						name: 'Western Province',
						value: 'LK-1',
					},
					{
						name: 'St. Barthélemy',
						value: 'BL',
					},
					{
						name: 'St. Helena',
						value: 'SH',
					},
					{
						name: 'Ascension',
						value: 'SH-AC',
					},
					{
						name: 'Saint Helena',
						value: 'SH-HL',
					},
					{
						name: 'Tristan da Cunha',
						value: 'SH-TA',
					},
					{
						name: 'St. Kitts & Nevis',
						value: 'KN',
					},
					{
						name: 'Christ Church Nichola Town Parish',
						value: 'KN-01',
					},
					{
						name: 'Saint Anne Sandy Point Parish',
						value: 'KN-02',
					},
					{
						name: 'Saint George Basseterre Parish',
						value: 'KN-03',
					},
					{
						name: 'Saint George Gingerland Parish',
						value: 'KN-04',
					},
					{
						name: 'Saint James Windward Parish',
						value: 'KN-05',
					},
					{
						name: 'Saint John Capisterre',
						value: 'KN-06',
					},
					{
						name: 'Saint John Figtree Parish',
						value: 'KN-07',
					},
					{
						name: 'Saint Mary Cayon Parish',
						value: 'KN-08',
					},
					{
						name: 'Saint Paul Capisterre Parish',
						value: 'KN-09',
					},
					{
						name: 'Saint Paul Charlestown Parish',
						value: 'KN-10',
					},
					{
						name: 'Saint Peter Basseterre Parish',
						value: 'KN-11',
					},
					{
						name: 'Saint Thomas Lowland Parish',
						value: 'KN-12',
					},
					{
						name: 'Saint Thomas Middle Island Parish',
						value: 'KN-13',
					},
					{
						name: 'Trinity Palmetto Point Parish',
						value: 'KN-15',
					},
					{
						name: 'St. Lucia',
						value: 'LC',
					},
					{
						name: 'Anse La Raye',
						value: 'LC-01',
					},
					{
						name: 'Castries',
						value: 'LC-02',
					},
					{
						name: 'Choiseul',
						value: 'LC-03',
					},
					{
						name: 'Dauphin',
						value: 'LC-04',
					},
					{
						name: 'Dennery',
						value: 'LC-05',
					},
					{
						name: 'Gros Islet',
						value: 'LC-06',
					},
					{
						name: 'Laborie',
						value: 'LC-07',
					},
					{
						name: 'Micoud',
						value: 'LC-08',
					},
					{
						name: 'Praslin',
						value: 'LC-09',
					},
					{
						name: 'Soufriere',
						value: 'LC-10',
					},
					{
						name: 'Vieux Fort',
						value: 'LC-11',
					},
					{
						name: 'St. Martin',
						value: 'MF',
					},
					{
						name: 'St. Pierre & Miquelon',
						value: 'PM',
					},
					{
						name: 'St. Vincent & Grenadines',
						value: 'VC',
					},
					{
						name: 'Charlotte',
						value: 'VC-01',
					},
					{
						name: 'Grenadines',
						value: 'VC-06',
					},
					{
						name: 'Saint Andrew',
						value: 'VC-02',
					},
					{
						name: 'Saint David',
						value: 'VC-03',
					},
					{
						name: 'Saint George',
						value: 'VC-04',
					},
					{
						name: 'Saint Patrick',
						value: 'VC-05',
					},
					{
						name: 'Sudan',
						value: 'SD',
					},
					{
						name: 'Al Jazirah',
						value: 'SD-GZ',
					},
					{
						name: 'Al Qadarif',
						value: 'SD-GD',
					},
					{
						name: 'Blue Nile',
						value: 'SD-NB',
					},
					{
						name: 'Gharb Darfur',
						value: 'SD-DW',
					},
					{
						name: 'Janub Darfur',
						value: 'SD-DS',
					},
					{
						name: 'Kassala',
						value: 'SD-KA',
					},
					{
						name: 'Khartoum',
						value: 'SD-KH',
					},
					{
						name: 'North Kurdufan',
						value: 'SD-KN',
					},
					{
						name: 'Northern',
						value: 'SD-NO',
					},
					{
						name: 'Red Sea',
						value: 'SD-RS',
					},
					{
						name: 'River Nile',
						value: 'SD-NR',
					},
					{
						name: 'Sennar',
						value: 'SD-SI',
					},
					{
						name: 'Shamal Darfur',
						value: 'SD-DN',
					},
					{
						name: 'South Kordofan',
						value: 'SD-KS',
					},
					{
						name: 'White Nile',
						value: 'SD-NW',
					},
					{
						name: 'Suriname',
						value: 'SR',
					},
					{
						name: 'Brokopondo',
						value: 'SR-BR',
					},
					{
						name: 'Commewijne',
						value: 'SR-CM',
					},
					{
						name: 'Coronie',
						value: 'SR-CR',
					},
					{
						name: 'Marowijne',
						value: 'SR-MA',
					},
					{
						name: 'Nickerie District',
						value: 'SR-NI',
					},
					{
						name: 'Para',
						value: 'SR-PR',
					},
					{
						name: 'Paramaribo District',
						value: 'SR-PM',
					},
					{
						name: 'Saramacca',
						value: 'SR-SA',
					},
					{
						name: 'Sipaliwini',
						value: 'SR-SI',
					},
					{
						name: 'Wanica',
						value: 'SR-WA',
					},
					{
						name: 'Svalbard & Jan Mayen',
						value: 'SJ',
					},
					{
						name: 'Sweden',
						value: 'SE',
					},
					{
						name: 'Blekinge County',
						value: 'SE-K',
					},
					{
						name: 'Dalarna County',
						value: 'SE-W',
					},
					{
						name: 'Gavleborg County',
						value: 'SE-X',
					},
					{
						name: 'Gotland County',
						value: 'SE-I',
					},
					{
						name: 'Halland County',
						value: 'SE-N',
					},
					{
						name: 'Jamtland County',
						value: 'SE-Z',
					},
					{
						name: 'Jonkoping County',
						value: 'SE-F',
					},
					{
						name: 'Kalmar County',
						value: 'SE-H',
					},
					{
						name: 'Kronoberg County',
						value: 'SE-G',
					},
					{
						name: 'Norrbotten County',
						value: 'SE-BD',
					},
					{
						name: 'Örebro County',
						value: 'SE-T',
					},
					{
						name: 'Östergötland County',
						value: 'SE-E',
					},
					{
						name: 'Skåne County',
						value: 'SE-M',
					},
					{
						name: 'Södermanland County',
						value: 'SE-D',
					},
					{
						name: 'Stockholm County',
						value: 'SE-AB',
					},
					{
						name: 'Uppsala County',
						value: 'SE-C',
					},
					{
						name: 'Varmland County',
						value: 'SE-S',
					},
					{
						name: 'Västerbotten County',
						value: 'SE-AC',
					},
					{
						name: 'Västernorrland County',
						value: 'SE-Y',
					},
					{
						name: 'Västmanland County',
						value: 'SE-U',
					},
					{
						name: 'Västra Götaland County',
						value: 'SE-O',
					},
					{
						name: 'Switzerland',
						value: 'CH',
					},
					{
						name: 'Aargau',
						value: 'CH-AG',
					},
					{
						name: 'Appenzell Innerrhoden',
						value: 'CH-AI',
					},
					{
						name: 'Appenzell Outer Rhodes',
						value: 'CH-AR',
					},
					{
						name: 'Basel-Landschaft',
						value: 'CH-BL',
					},
					{
						name: 'Basel-Stadt',
						value: 'CH-BS',
					},
					{
						name: 'Canton of Bern',
						value: 'CH-BE',
					},
					{
						name: 'Canton of Fribourg',
						value: 'CH-FR',
					},
					{
						name: 'Canton of Glarus',
						value: 'CH-GL',
					},
					{
						name: 'Canton of Jura',
						value: 'CH-JU',
					},
					{
						name: 'Canton of Neuchâtel',
						value: 'CH-NE',
					},
					{
						name: 'Canton of Obwalden',
						value: 'CH-OW',
					},
					{
						name: 'Canton of Schaffhausen',
						value: 'CH-SH',
					},
					{
						name: 'Canton of Schwyz',
						value: 'CH-SZ',
					},
					{
						name: 'Canton of Solothurn',
						value: 'CH-SO',
					},
					{
						name: 'Canton of Uri',
						value: 'CH-UR',
					},
					{
						name: 'Canton of Zug',
						value: 'CH-ZG',
					},
					{
						name: 'Geneva',
						value: 'CH-GE',
					},
					{
						name: 'Grisons',
						value: 'CH-GR',
					},
					{
						name: 'Lucerne',
						value: 'CH-LU',
					},
					{
						name: 'Nidwalden',
						value: 'CH-NW',
					},
					{
						name: 'St. Gallen',
						value: 'CH-SG',
					},
					{
						name: 'Thurgau',
						value: 'CH-TG',
					},
					{
						name: 'Ticino',
						value: 'CH-TI',
					},
					{
						name: 'Valais',
						value: 'CH-VS',
					},
					{
						name: 'Vaud',
						value: 'CH-VD',
					},
					{
						name: 'Zurich',
						value: 'CH-ZH',
					},
					{
						name: 'Syria',
						value: 'SY',
					},
					{
						name: 'Al Hasakah',
						value: 'SY-HA',
					},
					{
						name: 'Aleppo Governorate',
						value: 'SY-HL',
					},
					{
						name: 'Ar-Raqqah Governorate',
						value: 'SY-RA',
					},
					{
						name: 'As-Suwayda Governorate',
						value: 'SY-SU',
					},
					{
						name: 'Damascus Governorate',
						value: 'SY-DI',
					},
					{
						name: 'Daraa Governorate',
						value: 'SY-DR',
					},
					{
						name: 'Deir Ez-Zor Governorate',
						value: 'SY-DY',
					},
					{
						name: 'Hama Governorate',
						value: 'SY-HM',
					},
					{
						name: 'Homs Governorate',
						value: 'SY-HI',
					},
					{
						name: 'Idlib Governorate',
						value: 'SY-ID',
					},
					{
						name: 'Latakia Governorate',
						value: 'SY-LA',
					},
					{
						name: 'Quneitra Governorate',
						value: 'SY-QU',
					},
					{
						name: 'Rif-Dimashq Governorate',
						value: 'SY-RD',
					},
					{
						name: 'Tartus Governorate',
						value: 'SY-TA',
					},
					{
						name: 'Taiwan',
						value: 'TW',
					},
					{
						name: 'Kaohsiung City',
						value: 'TW-KHH',
					},
					{
						name: 'New Taipei City',
						value: 'TW-TPQ',
					},
					{
						name: 'Taichung City',
						value: 'TW-TXG',
					},
					{
						name: 'Tainan City',
						value: 'TW-TNN',
					},
					{
						name: 'Taipei City',
						value: 'TW-TPE',
					},
					{
						name: 'Taoyuan City',
						value: 'TW-TAO',
					},
					{
						name: 'Tajikistan',
						value: 'TJ',
					},
					{
						name: 'Districts of Republican Subordination',
						value: 'TJ-RR',
					},
					{
						name: 'Gorno-Badakhshan Autonomous Province',
						value: 'TJ-GB',
					},
					{
						name: 'Khatlon',
						value: 'TJ-KT',
					},
					{
						name: 'Sughd Province',
						value: 'TJ-SU',
					},
					{
						name: 'Tanzania',
						value: 'TZ',
					},
					{
						name: 'Arusha',
						value: 'TZ-01',
					},
					{
						name: 'Dodoma',
						value: 'TZ-03',
					},
					{
						name: 'Iringa',
						value: 'TZ-04',
					},
					{
						name: 'Kagera',
						value: 'TZ-05',
					},
					{
						name: 'Kigoma',
						value: 'TZ-08',
					},
					{
						name: 'Kilimanjaro',
						value: 'TZ-09',
					},
					{
						name: 'Lindi',
						value: 'TZ-12',
					},
					{
						name: 'Manyara',
						value: 'TZ-26',
					},
					{
						name: 'Mara',
						value: 'TZ-13',
					},
					{
						name: 'Mbeya',
						value: 'TZ-14',
					},
					{
						name: 'Morogoro',
						value: 'TZ-16',
					},
					{
						name: 'Mtwara',
						value: 'TZ-17',
					},
					{
						name: 'Mwanza',
						value: 'TZ-18',
					},
					{
						name: 'Pemba North',
						value: 'TZ-06',
					},
					{
						name: 'Pemba South',
						value: 'TZ-10',
					},
					{
						name: 'Pwani',
						value: 'TZ-19',
					},
					{
						name: 'Rukwa',
						value: 'TZ-20',
					},
					{
						name: 'Ruvuma',
						value: 'TZ-21',
					},
					{
						name: 'Shinyanga',
						value: 'TZ-22',
					},
					{
						name: 'Singida',
						value: 'TZ-23',
					},
					{
						name: 'Tabora',
						value: 'TZ-24',
					},
					{
						name: 'Tanga',
						value: 'TZ-25',
					},
					{
						name: 'Zanzibar Central/South',
						value: 'TZ-11',
					},
					{
						name: 'Zanzibar North',
						value: 'TZ-07',
					},
					{
						name: 'Zanzibar Urban/West',
						value: 'TZ-15',
					},
					{
						name: 'Thailand',
						value: 'TH',
					},
					{
						name: 'Amnat Charoen',
						value: 'TH-37',
					},
					{
						name: 'Ang Thong',
						value: 'TH-15',
					},
					{
						name: 'Bangkok',
						value: 'TH-10',
					},
					{
						name: 'Bueng Kan',
						value: 'TH-38',
					},
					{
						name: 'Buri Ram',
						value: 'TH-31',
					},
					{
						name: 'Chachoengsao',
						value: 'TH-24',
					},
					{
						name: 'Chai Nat',
						value: 'TH-18',
					},
					{
						name: 'Chaiyaphum',
						value: 'TH-36',
					},
					{
						name: 'Chanthaburi',
						value: 'TH-22',
					},
					{
						name: 'Chiang Mai',
						value: 'TH-50',
					},
					{
						name: 'Chiang Rai',
						value: 'TH-57',
					},
					{
						name: 'Chon Buri',
						value: 'TH-20',
					},
					{
						name: 'Chumphon',
						value: 'TH-86',
					},
					{
						name: 'Kalasin',
						value: 'TH-46',
					},
					{
						name: 'Kamphaeng Phet',
						value: 'TH-62',
					},
					{
						name: 'Kanchanaburi',
						value: 'TH-71',
					},
					{
						name: 'Khon Kaen',
						value: 'TH-40',
					},
					{
						name: 'Krabi',
						value: 'TH-81',
					},
					{
						name: 'Lampang',
						value: 'TH-52',
					},
					{
						name: 'Lamphun',
						value: 'TH-51',
					},
					{
						name: 'Loei',
						value: 'TH-42',
					},
					{
						name: 'Lopburi',
						value: 'TH-16',
					},
					{
						name: 'Mae Hong Son',
						value: 'TH-58',
					},
					{
						name: 'Maha Sarakham',
						value: 'TH-44',
					},
					{
						name: 'Mukdahan',
						value: 'TH-49',
					},
					{
						name: 'Nakhon Nayok',
						value: 'TH-26',
					},
					{
						name: 'Nakhon Pathom',
						value: 'TH-73',
					},
					{
						name: 'Nakhon Phanom',
						value: 'TH-48',
					},
					{
						name: 'Nakhon Ratchasima',
						value: 'TH-30',
					},
					{
						name: 'Nakhon Sawan',
						value: 'TH-60',
					},
					{
						name: 'Nakhon Si Thammarat',
						value: 'TH-80',
					},
					{
						name: 'Nan',
						value: 'TH-55',
					},
					{
						name: 'Narathiwat',
						value: 'TH-96',
					},
					{
						name: 'Nong Bua Lam Phu',
						value: 'TH-39',
					},
					{
						name: 'Nong Khai',
						value: 'TH-43',
					},
					{
						name: 'Nonthaburi',
						value: 'TH-12',
					},
					{
						name: 'Pathum Thani',
						value: 'TH-13',
					},
					{
						name: 'Pattani',
						value: 'TH-94',
					},
					{
						name: 'Phang-nga',
						value: 'TH-82',
					},
					{
						name: 'Phatthalung',
						value: 'TH-93',
					},
					{
						name: 'Phayao',
						value: 'TH-56',
					},
					{
						name: 'Phetchabun',
						value: 'TH-67',
					},
					{
						name: 'Phetchaburi',
						value: 'TH-76',
					},
					{
						name: 'Phichit',
						value: 'TH-66',
					},
					{
						name: 'Phitsanulok',
						value: 'TH-65',
					},
					{
						name: 'Phra Nakhon Si Ayutthaya',
						value: 'TH-14',
					},
					{
						name: 'Phrae',
						value: 'TH-54',
					},
					{
						name: 'Phuket',
						value: 'TH-83',
					},
					{
						name: 'Prachin Buri',
						value: 'TH-25',
					},
					{
						name: 'Prachuap Khiri Khan',
						value: 'TH-77',
					},
					{
						name: 'Ranong',
						value: 'TH-85',
					},
					{
						name: 'Ratchaburi',
						value: 'TH-70',
					},
					{
						name: 'Rayong',
						value: 'TH-21',
					},
					{
						name: 'Roi Et',
						value: 'TH-45',
					},
					{
						name: 'Sa Kaeo',
						value: 'TH-27',
					},
					{
						name: 'Sakon Nakhon',
						value: 'TH-47',
					},
					{
						name: 'Samut Prakan',
						value: 'TH-11',
					},
					{
						name: 'Samut Sakhon',
						value: 'TH-74',
					},
					{
						name: 'Samut Songkhram',
						value: 'TH-75',
					},
					{
						name: 'Saraburi',
						value: 'TH-19',
					},
					{
						name: 'Satun',
						value: 'TH-91',
					},
					{
						name: 'Si Sa Ket',
						value: 'TH-33',
					},
					{
						name: 'Sing Buri',
						value: 'TH-17',
					},
					{
						name: 'Songkhla',
						value: 'TH-90',
					},
					{
						name: 'Sukhothai',
						value: 'TH-64',
					},
					{
						name: 'Suphan Buri',
						value: 'TH-72',
					},
					{
						name: 'Surat Thani',
						value: 'TH-84',
					},
					{
						name: 'Surin',
						value: 'TH-32',
					},
					{
						name: 'Tak',
						value: 'TH-63',
					},
					{
						name: 'Trang',
						value: 'TH-92',
					},
					{
						name: 'Trat',
						value: 'TH-23',
					},
					{
						name: 'Ubon Ratchathani',
						value: 'TH-34',
					},
					{
						name: 'Udon Thani',
						value: 'TH-41',
					},
					{
						name: 'Uthai Thani',
						value: 'TH-61',
					},
					{
						name: 'Uttaradit',
						value: 'TH-53',
					},
					{
						name: 'Yala',
						value: 'TH-95',
					},
					{
						name: 'Yasothon',
						value: 'TH-35',
					},
					{
						name: 'Timor-Leste',
						value: 'TL',
					},
					{
						name: 'Aileu',
						value: 'TL-AL',
					},
					{
						name: 'Ainaro',
						value: 'TL-AN',
					},
					{
						name: 'Baucau',
						value: 'TL-BA',
					},
					{
						name: 'Bobonaro',
						value: 'TL-BO',
					},
					{
						name: 'Cova-Lima',
						value: 'TL-CO',
					},
					{
						name: 'Dili',
						value: 'TL-DI',
					},
					{
						name: 'Ermera',
						value: 'TL-ER',
					},
					{
						name: 'Lautem',
						value: 'TL-LA',
					},
					{
						name: 'Liquica',
						value: 'TL-LI',
					},
					{
						name: 'Manatuto',
						value: 'TL-MT',
					},
					{
						name: 'Manufahi',
						value: 'TL-MF',
					},
					{
						name: 'Oecussi-Ambeno',
						value: 'TL-OE',
					},
					{
						name: 'Viqueque',
						value: 'TL-VI',
					},
					{
						name: 'Togo',
						value: 'TG',
					},
					{
						name: 'Centrale',
						value: 'TG-C',
					},
					{
						name: 'Kara',
						value: 'TG-K',
					},
					{
						name: 'Maritime',
						value: 'TG-M',
					},
					{
						name: 'Plateaux',
						value: 'TG-P',
					},
					{
						name: 'Savanes',
						value: 'TG-S',
					},
					{
						name: 'Tokelau',
						value: 'TK',
					},
					{
						name: 'Tonga',
						value: 'TO',
					},
					{
						name: "'Eua",
						value: 'TO-01',
					},
					{
						name: "Ha'apai",
						value: 'TO-02',
					},
					{
						name: 'Niuas',
						value: 'TO-03',
					},
					{
						name: 'Tongatapu',
						value: 'TO-04',
					},
					{
						name: "Vava'u",
						value: 'TO-05',
					},
					{
						name: 'Trinidad & Tobago',
						value: 'TT',
					},
					{
						name: 'Arima',
						value: 'TT-ARI',
					},
					{
						name: 'Chaguanas',
						value: 'TT-CHA',
					},
					{
						name: 'Couva-Tabaquite-Talparo',
						value: 'TT-CTT',
					},
					{
						name: 'Diego Martin',
						value: 'TT-DMN',
					},
					{
						name: 'Eastern Tobago',
						value: 'TT-ETO',
					},
					{
						name: 'Penal-Debe',
						value: 'TT-PED',
					},
					{
						name: 'Point Fortin',
						value: 'TT-PTF',
					},
					{
						name: 'Port of Spain',
						value: 'TT-POS',
					},
					{
						name: 'Princes Town',
						value: 'TT-PRT',
					},
					{
						name: 'Rio Claro-Mayaro',
						value: 'TT-RCM',
					},
					{
						name: 'San Fernando',
						value: 'TT-SFO',
					},
					{
						name: 'San Juan-Laventille',
						value: 'TT-SJL',
					},
					{
						name: 'Sangre Grande',
						value: 'TT-SGE',
					},
					{
						name: 'Siparia',
						value: 'TT-SIP',
					},
					{
						name: 'Tunapuna-Piarco',
						value: 'TT-TUP',
					},
					{
						name: 'Western Tobago',
						value: 'TT-WTO',
					},
					{
						name: 'Tunisia',
						value: 'TN',
					},
					{
						name: 'Ariana',
						value: 'TN-12',
					},
					{
						name: 'Beja',
						value: 'TN-31',
					},
					{
						name: 'Ben Arous',
						value: 'TN-13',
					},
					{
						name: 'Bizerte',
						value: 'TN-23',
					},
					{
						name: 'Gabes',
						value: 'TN-81',
					},
					{
						name: 'Gafsa',
						value: 'TN-71',
					},
					{
						name: 'Jendouba',
						value: 'TN-32',
					},
					{
						name: 'Kairouan',
						value: 'TN-41',
					},
					{
						name: 'Kasserine',
						value: 'TN-42',
					},
					{
						name: 'Kebili',
						value: 'TN-73',
					},
					{
						name: 'Kef',
						value: 'TN-33',
					},
					{
						name: 'La Manouba',
						value: 'TN-14',
					},
					{
						name: 'Mahdia',
						value: 'TN-53',
					},
					{
						name: 'Medenine',
						value: 'TN-82',
					},
					{
						name: 'Monastir',
						value: 'TN-52',
					},
					{
						name: 'Nabeul',
						value: 'TN-21',
					},
					{
						name: 'Sfax',
						value: 'TN-61',
					},
					{
						name: 'Sidi Bou Zid',
						value: 'TN-43',
					},
					{
						name: 'Siliana',
						value: 'TN-34',
					},
					{
						name: 'Sousse',
						value: 'TN-51',
					},
					{
						name: 'Tataouine',
						value: 'TN-83',
					},
					{
						name: 'Tozeur',
						value: 'TN-72',
					},
					{
						name: 'Tunis',
						value: 'TN-11',
					},
					{
						name: 'Zaghouan',
						value: 'TN-22',
					},
					{
						name: 'Türkiye',
						value: 'TR',
					},
					{
						name: 'Adana',
						value: 'TR-01',
					},
					{
						name: 'Adıyaman Province',
						value: 'TR-02',
					},
					{
						name: 'Afyonkarahisar Province',
						value: 'TR-03',
					},
					{
						name: 'Ağrı',
						value: 'TR-04',
					},
					{
						name: 'Aksaray',
						value: 'TR-68',
					},
					{
						name: 'Amasya Province',
						value: 'TR-05',
					},
					{
						name: 'Ankara',
						value: 'TR-06',
					},
					{
						name: 'Antalya',
						value: 'TR-07',
					},
					{
						name: 'Ardahan Province',
						value: 'TR-75',
					},
					{
						name: 'Artvin',
						value: 'TR-08',
					},
					{
						name: 'Aydın Province',
						value: 'TR-09',
					},
					{
						name: 'Balıkesir Province',
						value: 'TR-10',
					},
					{
						name: 'Bartın Province',
						value: 'TR-74',
					},
					{
						name: 'Batman',
						value: 'TR-72',
					},
					{
						name: 'Bayburt',
						value: 'TR-69',
					},
					{
						name: 'Bilecik',
						value: 'TR-11',
					},
					{
						name: 'Bingöl Province',
						value: 'TR-12',
					},
					{
						name: 'Bitlis',
						value: 'TR-13',
					},
					{
						name: 'Bolu',
						value: 'TR-14',
					},
					{
						name: 'Burdur Province',
						value: 'TR-15',
					},
					{
						name: 'Bursa',
						value: 'TR-16',
					},
					{
						name: 'Çanakkale Province',
						value: 'TR-17',
					},
					{
						name: 'Çankırı',
						value: 'TR-18',
					},
					{
						name: 'Çorum Province',
						value: 'TR-19',
					},
					{
						name: 'Denizli',
						value: 'TR-20',
					},
					{
						name: 'Diyarbakır',
						value: 'TR-21',
					},
					{
						name: 'Düzce Province',
						value: 'TR-81',
					},
					{
						name: 'Edirne',
						value: 'TR-22',
					},
					{
						name: 'Elazığ',
						value: 'TR-23',
					},
					{
						name: 'Erzincan',
						value: 'TR-24',
					},
					{
						name: 'Erzurum',
						value: 'TR-25',
					},
					{
						name: 'Eskişehir Province',
						value: 'TR-26',
					},
					{
						name: 'Gaziantep',
						value: 'TR-27',
					},
					{
						name: 'Giresun',
						value: 'TR-28',
					},
					{
						name: 'Gümüşhane',
						value: 'TR-29',
					},
					{
						name: 'Hakkâri',
						value: 'TR-30',
					},
					{
						name: 'Hatay',
						value: 'TR-31',
					},
					{
						name: 'Iğdır',
						value: 'TR-76',
					},
					{
						name: 'Isparta Province',
						value: 'TR-32',
					},
					{
						name: 'İstanbul',
						value: 'TR-34',
					},
					{
						name: 'İzmir',
						value: 'TR-35',
					},
					{
						name: 'Kahramanmaraş Province',
						value: 'TR-46',
					},
					{
						name: 'Karabük',
						value: 'TR-78',
					},
					{
						name: 'Karaman',
						value: 'TR-70',
					},
					{
						name: 'Kars',
						value: 'TR-36',
					},
					{
						name: 'Kastamonu',
						value: 'TR-37',
					},
					{
						name: 'Kayseri Province',
						value: 'TR-38',
					},
					{
						name: 'Kilis',
						value: 'TR-79',
					},
					{
						name: 'Kırıkkale',
						value: 'TR-71',
					},
					{
						name: 'Kırklareli',
						value: 'TR-39',
					},
					{
						name: 'Kırşehir',
						value: 'TR-40',
					},
					{
						name: 'Kocaeli',
						value: 'TR-41',
					},
					{
						name: 'Konya',
						value: 'TR-42',
					},
					{
						name: 'Kütahya',
						value: 'TR-43',
					},
					{
						name: 'Malatya',
						value: 'TR-44',
					},
					{
						name: 'Manisa',
						value: 'TR-45',
					},
					{
						name: 'Mardin',
						value: 'TR-47',
					},
					{
						name: 'Mersin Province',
						value: 'TR-33',
					},
					{
						name: 'Muğla Province',
						value: 'TR-48',
					},
					{
						name: 'Muş',
						value: 'TR-49',
					},
					{
						name: 'Nevşehir',
						value: 'TR-50',
					},
					{
						name: 'Niğde',
						value: 'TR-51',
					},
					{
						name: 'Ordu',
						value: 'TR-52',
					},
					{
						name: 'Osmaniye',
						value: 'TR-80',
					},
					{
						name: 'Rize',
						value: 'TR-53',
					},
					{
						name: 'Sakarya',
						value: 'TR-54',
					},
					{
						name: 'Samsun',
						value: 'TR-55',
					},
					{
						name: 'Şanlıurfa Province',
						value: 'TR-63',
					},
					{
						name: 'Siirt Province',
						value: 'TR-56',
					},
					{
						name: 'Sinop Province',
						value: 'TR-57',
					},
					{
						name: 'Sivas',
						value: 'TR-58',
					},
					{
						name: 'Şırnak',
						value: 'TR-73',
					},
					{
						name: 'Tekirdağ',
						value: 'TR-59',
					},
					{
						name: 'Tokat',
						value: 'TR-60',
					},
					{
						name: 'Trabzon',
						value: 'TR-61',
					},
					{
						name: 'Tunceli',
						value: 'TR-62',
					},
					{
						name: 'Uşak',
						value: 'TR-64',
					},
					{
						name: 'Van',
						value: 'TR-65',
					},
					{
						name: 'Yalova Province',
						value: 'TR-77',
					},
					{
						name: 'Yozgat',
						value: 'TR-66',
					},
					{
						name: 'Zonguldak',
						value: 'TR-67',
					},
					{
						name: 'Turkmenistan',
						value: 'TM',
					},
					{
						name: 'Ahal',
						value: 'TM-A',
					},
					{
						name: 'Ashgabat',
						value: 'TM-S',
					},
					{
						name: 'Balkan',
						value: 'TM-B',
					},
					{
						name: 'Dashoguz Province',
						value: 'TM-D',
					},
					{
						name: 'Lebap',
						value: 'TM-L',
					},
					{
						name: 'Mary',
						value: 'TM-M',
					},
					{
						name: 'Turks & Caicos Islands',
						value: 'TC',
					},
					{
						name: 'Tuvalu',
						value: 'TV',
					},
					{
						name: 'Funafuti',
						value: 'TV-FUN',
					},
					{
						name: 'Nanumanga',
						value: 'TV-NMG',
					},
					{
						name: 'Nanumea',
						value: 'TV-NMA',
					},
					{
						name: 'Niutao',
						value: 'TV-NIT',
					},
					{
						name: 'Nui',
						value: 'TV-NIU',
					},
					{
						name: 'Nukufetau',
						value: 'TV-NKF',
					},
					{
						name: 'Nukulaelae',
						value: 'TV-NKL',
					},
					{
						name: 'Vaitupu',
						value: 'TV-VAI',
					},
					{
						name: 'U.S. Outlying Islands',
						value: 'UM',
					},
					{
						name: 'U.S. Virgin Islands',
						value: 'VI',
					},
					{
						name: 'Uganda',
						value: 'UG',
					},
					{
						name: 'Central Region',
						value: 'UG-C',
					},
					{
						name: 'Eastern Region',
						value: 'UG-E',
					},
					{
						name: 'Northern Region',
						value: 'UG-N',
					},
					{
						name: 'Western Region',
						value: 'UG-W',
					},
					{
						name: 'Ukraine',
						value: 'UA',
					},
					{
						name: "Cherkas'ka oblast",
						value: 'UA-71',
					},
					{
						name: "Chernihivs'ka oblast",
						value: 'UA-74',
					},
					{
						name: "Chernivets'ka oblast",
						value: 'UA-77',
					},
					{
						name: 'Crimea',
						value: 'UA-43',
					},
					{
						name: 'Dnipropetrovsk Oblast',
						value: 'UA-12',
					},
					{
						name: 'Donetsk Oblast',
						value: 'UA-14',
					},
					{
						name: "Ivano-Frankivs'ka oblast",
						value: 'UA-26',
					},
					{
						name: 'Kharkiv Oblast',
						value: 'UA-63',
					},
					{
						name: "Khersons'ka oblast",
						value: 'UA-65',
					},
					{
						name: "Khmel'nyts'ka oblast",
						value: 'UA-68',
					},
					{
						name: "Kirovohrads'ka oblast",
						value: 'UA-35',
					},
					{
						name: 'Kyiv city',
						value: 'UA-30',
					},
					{
						name: "Kyivs'ka oblast",
						value: 'UA-32',
					},
					{
						name: "Luhans'ka oblast",
						value: 'UA-09',
					},
					{
						name: 'Lviv Oblast',
						value: 'UA-46',
					},
					{
						name: "Mykolaivs'ka oblast",
						value: 'UA-48',
					},
					{
						name: 'Odessa Oblast',
						value: 'UA-51',
					},
					{
						name: "Poltavs'ka oblast",
						value: 'UA-53',
					},
					{
						name: "Rivnens'ka oblast",
						value: 'UA-56',
					},
					{
						name: "Sevastopol' city",
						value: 'UA-40',
					},
					{
						name: "Sums'ka oblast",
						value: 'UA-59',
					},
					{
						name: "Ternopil's'ka oblast",
						value: 'UA-61',
					},
					{
						name: "Vinnyts'ka oblast",
						value: 'UA-05',
					},
					{
						name: "Volyns'ka oblast",
						value: 'UA-07',
					},
					{
						name: "Zakarpats'ka oblast",
						value: 'UA-21',
					},
					{
						name: "Zaporiz'ka oblast",
						value: 'UA-23',
					},
					{
						name: "Zhytomyrs'ka oblast",
						value: 'UA-18',
					},
					{
						name: 'United Arab Emirates',
						value: 'AE',
					},
					{
						name: 'Abu Dhabi',
						value: 'AE-AZ',
					},
					{
						name: 'Ajman',
						value: 'AE-AJ',
					},
					{
						name: 'Dubai',
						value: 'AE-DU',
					},
					{
						name: 'Fujairah',
						value: 'AE-FU',
					},
					{
						name: 'Ras al Khaimah',
						value: 'AE-RK',
					},
					{
						name: 'Sharjah',
						value: 'AE-SH',
					},
					{
						name: 'Umm Al Quwain',
						value: 'AE-UQ',
					},
					{
						name: 'United Kingdom',
						value: 'GB',
					},
					{
						name: 'England',
						value: 'GB-ENG',
					},
					{
						name: 'Northern Ireland',
						value: 'GB-NIR',
					},
					{
						name: 'Scotland',
						value: 'GB-SCT',
					},
					{
						name: 'Wales',
						value: 'GB-WLS',
					},
					{
						name: 'United States',
						value: 'US',
					},
					{
						name: 'Alabama',
						value: 'US-AL',
					},
					{
						name: 'Birmingham AL',
						value: '630',
					},
					{
						name: 'Columbus GA',
						value: '522',
					},
					{
						name: 'Dothan AL',
						value: '606',
					},
					{
						name: 'Huntsville-Decatur (Florence) AL',
						value: '691',
					},
					{
						name: 'Meridian MS',
						value: '711',
					},
					{
						name: 'Mobile AL-Pensacola (Ft. Walton Beach) FL',
						value: '686',
					},
					{
						name: 'Montgomery (Selma) AL',
						value: '698',
					},
					{
						name: 'Alaska',
						value: 'US-AK',
					},
					{
						name: 'Anchorage AK',
						value: '743',
					},
					{
						name: 'Fairbanks AK',
						value: '745',
					},
					{
						name: 'Juneau AK',
						value: '747',
					},
					{
						name: 'Arizona',
						value: 'US-AZ',
					},
					{
						name: 'Phoenix AZ',
						value: '753',
					},
					{
						name: 'Tucson (Sierra Vista) AZ',
						value: '789',
					},
					{
						name: 'Yuma AZ-El Centro CA',
						value: '771',
					},
					{
						name: 'Arkansas',
						value: 'US-AR',
					},
					{
						name: 'Ft. Smith-Fayetteville-Springdale-Rogers AR',
						value: '670',
					},
					{
						name: 'Jonesboro AR',
						value: '734',
					},
					{
						name: 'Little Rock-Pine Bluff AR',
						value: '693',
					},
					{
						name: 'Memphis TN',
						value: '640',
					},
					{
						name: 'Monroe LA-El Dorado AR',
						value: '628',
					},
					{
						name: 'Shreveport LA',
						value: '612',
					},
					{
						name: 'Springfield MO',
						value: '619',
					},
					{
						name: 'California',
						value: 'US-CA',
					},
					{
						name: 'Bakersfield CA',
						value: '800',
					},
					{
						name: 'Chico-Redding CA',
						value: '868',
					},
					{
						name: 'Eureka CA',
						value: '802',
					},
					{
						name: 'Fresno-Visalia CA',
						value: '866',
					},
					{
						name: 'Los Angeles CA',
						value: '803',
					},
					{
						name: 'Medford-Klamath Falls OR',
						value: '813',
					},
					{
						name: 'Monterey-Salinas CA',
						value: '828',
					},
					{
						name: 'Palm Springs CA',
						value: '804',
					},
					{
						name: 'Reno NV',
						value: '811',
					},
					{
						name: 'Sacramento-Stockton-Modesto CA',
						value: '862',
					},
					{
						name: 'San Diego CA',
						value: '825',
					},
					{
						name: 'San Francisco-Oakland-San Jose CA',
						value: '807',
					},
					{
						name: 'Santa Barbara-Santa Maria-San Luis Obispo CA',
						value: '855',
					},
					{
						name: 'Colorado',
						value: 'US-CO',
					},
					{
						name: 'Colorado Springs-Pueblo CO',
						value: '752',
					},
					{
						name: 'Denver CO',
						value: '751',
					},
					{
						name: 'Grand Junction-Montrose CO',
						value: '773',
					},
					{
						name: 'Connecticut',
						value: 'US-CT',
					},
					{
						name: 'Hartford & New Haven CT',
						value: '533',
					},
					{
						name: 'Delaware',
						value: 'US-DE',
					},
					{
						name: 'Philadelphia PA',
						value: '504',
					},
					{
						name: 'Salisbury MD',
						value: '576',
					},
					{
						name: 'District of Columbia',
						value: 'US-DC',
					},
					{
						name: 'Florida',
						value: 'US-FL',
					},
					{
						name: 'Ft. Myers-Naples FL',
						value: '571',
					},
					{
						name: 'Gainesville FL',
						value: '592',
					},
					{
						name: 'Jacksonville FL',
						value: '561',
					},
					{
						name: 'Miami-Ft. Lauderdale FL',
						value: '528',
					},
					{
						name: 'Orlando-Daytona Beach-Melbourne FL',
						value: '534',
					},
					{
						name: 'Panama City FL',
						value: '656',
					},
					{
						name: 'Tallahassee FL-Thomasville GA',
						value: '530',
					},
					{
						name: 'Tampa-St. Petersburg (Sarasota) FL',
						value: '539',
					},
					{
						name: 'West Palm Beach-Ft. Pierce FL',
						value: '548',
					},
					{
						name: 'Georgia',
						value: 'US-GA',
					},
					{
						name: 'Albany GA',
						value: '525',
					},
					{
						name: 'Atlanta GA',
						value: '524',
					},
					{
						name: 'Augusta GA',
						value: '520',
					},
					{
						name: 'Chattanooga TN',
						value: '575',
					},
					{
						name: 'Macon GA',
						value: '503',
					},
					{
						name: 'Savannah GA',
						value: '507',
					},
					{
						name: 'Hawaii',
						value: 'US-HI',
					},
					{
						name: 'Honolulu HI',
						value: '744',
					},
					{
						name: 'Idaho',
						value: 'US-ID',
					},
					{
						name: 'Boise ID',
						value: '757',
					},
					{
						name: 'Idaho Falls-Pocatello ID',
						value: '758',
					},
					{
						name: 'Spokane WA',
						value: '881',
					},
					{
						name: 'Twin Falls ID',
						value: '760',
					},
					{
						name: 'Illinois',
						value: 'US-IL',
					},
					{
						name: 'Champaign & Springfield-Decatur IL',
						value: '648',
					},
					{
						name: 'Chicago IL',
						value: '602',
					},
					{
						name: 'Davenport IA-Rock Island-Moline IL',
						value: '682',
					},
					{
						name: 'Evansville IN',
						value: '649',
					},
					{
						name: 'Paducah KY-Cape Girardeau MO-Harrisburg-Mount Vernon IL',
						value: '632',
					},
					{
						name: 'Peoria-Bloomington IL',
						value: '675',
					},
					{
						name: 'Quincy IL-Hannibal MO-Keokuk IA',
						value: '717',
					},
					{
						name: 'Rockford IL',
						value: '610',
					},
					{
						name: 'St. Louis MO',
						value: '609',
					},
					{
						name: 'Terre Haute IN',
						value: '581',
					},
					{
						name: 'Indiana',
						value: 'US-IN',
					},
					{
						name: 'Cincinnati OH',
						value: '515',
					},
					{
						name: 'Ft. Wayne IN',
						value: '509',
					},
					{
						name: 'Indianapolis IN',
						value: '527',
					},
					{
						name: 'Lafayette IN',
						value: '582',
					},
					{
						name: 'Louisville KY',
						value: '529',
					},
					{
						name: 'South Bend-Elkhart IN',
						value: '588',
					},
					{
						name: 'Iowa',
						value: 'US-IA',
					},
					{
						name: 'Cedar Rapids-Waterloo-Iowa City & Dubuque IA',
						value: '637',
					},
					{
						name: 'Des Moines-Ames IA',
						value: '679',
					},
					{
						name: 'Omaha NE',
						value: '652',
					},
					{
						name: 'Ottumwa IA-Kirksville MO',
						value: '631',
					},
					{
						name: 'Rochester MN-Mason City IA-Austin MN',
						value: '611',
					},
					{
						name: 'Sioux City IA',
						value: '624',
					},
					{
						name: 'Kansas',
						value: 'US-KS',
					},
					{
						name: 'Joplin MO-Pittsburg KS',
						value: '603',
					},
					{
						name: 'Kansas City MO',
						value: '616',
					},
					{
						name: 'St. Joseph MO',
						value: '638',
					},
					{
						name: 'Topeka KS',
						value: '605',
					},
					{
						name: 'Wichita-Hutchinson KS',
						value: '678',
					},
					{
						name: 'Kentucky',
						value: 'US-KY',
					},
					{
						name: 'Bowling Green KY',
						value: '736',
					},
					{
						name: 'Charleston-Huntington WV',
						value: '564',
					},
					{
						name: 'Knoxville TN',
						value: '557',
					},
					{
						name: 'Lexington KY',
						value: '541',
					},
					{
						name: 'Nashville TN',
						value: '659',
					},
					{
						name: 'Tri-Cities TN-VA',
						value: '531',
					},
					{
						name: 'Louisiana',
						value: 'US-LA',
					},
					{
						name: 'Alexandria LA',
						value: '644',
					},
					{
						name: 'Baton Rouge LA',
						value: '716',
					},
					{
						name: 'Lafayette LA',
						value: '642',
					},
					{
						name: 'Lake Charles LA',
						value: '643',
					},
					{
						name: 'New Orleans LA',
						value: '622',
					},
					{
						name: 'Maine',
						value: 'US-ME',
					},
					{
						name: 'Bangor ME',
						value: '537',
					},
					{
						name: 'Portland-Auburn ME',
						value: '500',
					},
					{
						name: 'Presque Isle ME',
						value: '552',
					},
					{
						name: 'Maryland',
						value: 'US-MD',
					},
					{
						name: 'Baltimore MD',
						value: '512',
					},
					{
						name: 'Washington DC (Hagerstown MD)',
						value: '511',
					},
					{
						name: 'Massachusetts',
						value: 'US-MA',
					},
					{
						name: 'Boston MA-Manchester NH',
						value: '506',
					},
					{
						name: 'Providence RI-New Bedford MA',
						value: '521',
					},
					{
						name: 'Springfield-Holyoke MA',
						value: '543',
					},
					{
						name: 'Michigan',
						value: 'US-MI',
					},
					{
						name: 'Alpena MI',
						value: '583',
					},
					{
						name: 'Detroit MI',
						value: '505',
					},
					{
						name: 'Flint-Saginaw-Bay City MI',
						value: '513',
					},
					{
						name: 'Grand Rapids-Kalamazoo-Battle Creek MI',
						value: '563',
					},
					{
						name: 'Lansing MI',
						value: '551',
					},
					{
						name: 'Marquette MI',
						value: '553',
					},
					{
						name: 'Toledo OH',
						value: '547',
					},
					{
						name: 'Traverse City-Cadillac MI',
						value: '540',
					},
					{
						name: 'Minnesota',
						value: 'US-MN',
					},
					{
						name: 'Duluth MN-Superior WI',
						value: '676',
					},
					{
						name: 'Fargo-Valley City ND',
						value: '724',
					},
					{
						name: 'La Crosse-Eau Claire WI',
						value: '702',
					},
					{
						name: 'Mankato MN',
						value: '737',
					},
					{
						name: 'Minneapolis-St. Paul MN',
						value: '613',
					},
					{
						name: 'Mississippi',
						value: 'US-MS',
					},
					{
						name: 'Biloxi-Gulfport MS',
						value: '746',
					},
					{
						name: 'Columbus-Tupelo-West Point MS',
						value: '673',
					},
					{
						name: 'Greenwood-Greenville MS',
						value: '647',
					},
					{
						name: 'Hattiesburg-Laurel MS',
						value: '710',
					},
					{
						name: 'Jackson MS',
						value: '718',
					},
					{
						name: 'Missouri',
						value: 'US-MO',
					},
					{
						name: 'Columbia-Jefferson City MO',
						value: '604',
					},
					{
						name: 'Montana',
						value: 'US-MT',
					},
					{
						name: 'Billings, MT',
						value: '756',
					},
					{
						name: 'Butte-Bozeman MT',
						value: '754',
					},
					{
						name: 'Glendive MT',
						value: '798',
					},
					{
						name: 'Great Falls MT',
						value: '755',
					},
					{
						name: 'Helena MT',
						value: '766',
					},
					{
						name: 'Minot-Bismarck-Dickinson(Williston) ND',
						value: '687',
					},
					{
						name: 'Missoula MT',
						value: '762',
					},
					{
						name: 'Nebraska',
						value: 'US-NE',
					},
					{
						name: 'Cheyenne WY-Scottsbluff NE',
						value: '759',
					},
					{
						name: 'Lincoln & Hastings-Kearney NE',
						value: '722',
					},
					{
						name: 'North Platte NE',
						value: '740',
					},
					{
						name: 'Sioux Falls(Mitchell) SD',
						value: '725',
					},
					{
						name: 'Nevada',
						value: 'US-NV',
					},
					{
						name: 'Las Vegas NV',
						value: '839',
					},
					{
						name: 'Salt Lake City UT',
						value: '770',
					},
					{
						name: 'New Hampshire',
						value: 'US-NH',
					},
					{
						name: 'Burlington VT-Plattsburgh NY',
						value: '523',
					},
					{
						name: 'New Jersey',
						value: 'US-NJ',
					},
					{
						name: 'New York NY',
						value: '501',
					},
					{
						name: 'New Mexico',
						value: 'US-NM',
					},
					{
						name: 'Albuquerque-Santa Fe NM',
						value: '790',
					},
					{
						name: 'Amarillo TX',
						value: '634',
					},
					{
						name: 'El Paso TX',
						value: '765',
					},
					{
						name: 'New York',
						value: 'US-NY',
					},
					{
						name: 'Albany-Schenectady-Troy NY',
						value: '532',
					},
					{
						name: 'Binghamton NY',
						value: '502',
					},
					{
						name: 'Buffalo NY',
						value: '514',
					},
					{
						name: 'Elmira NY',
						value: '565',
					},
					{
						name: 'Rochester NY',
						value: '538',
					},
					{
						name: 'Syracuse NY',
						value: '555',
					},
					{
						name: 'Utica NY',
						value: '526',
					},
					{
						name: 'Watertown NY',
						value: '549',
					},
					{
						name: 'North Carolina',
						value: 'US-NC',
					},
					{
						name: 'Charlotte NC',
						value: '517',
					},
					{
						name: 'Florence-Myrtle Beach SC',
						value: '570',
					},
					{
						name: 'Greensboro-High Point-Winston Salem NC',
						value: '518',
					},
					{
						name: 'Greenville-New Bern-Washington NC',
						value: '545',
					},
					{
						name: 'Greenville-Spartanburg SC-Asheville NC-Anderson SC',
						value: '567',
					},
					{
						name: 'Norfolk-Portsmouth-Newport News VA',
						value: '544',
					},
					{
						name: 'Raleigh-Durham (Fayetteville) NC',
						value: '560',
					},
					{
						name: 'Wilmington NC',
						value: '550',
					},
					{
						name: 'North Dakota',
						value: 'US-ND',
					},
					{
						name: 'Ohio',
						value: 'US-OH',
					},
					{
						name: 'Cleveland-Akron (Canton) OH',
						value: '510',
					},
					{
						name: 'Columbus OH',
						value: '535',
					},
					{
						name: 'Dayton OH',
						value: '542',
					},
					{
						name: 'Lima OH',
						value: '558',
					},
					{
						name: 'Parkersburg WV',
						value: '597',
					},
					{
						name: 'Wheeling WV-Steubenville OH',
						value: '554',
					},
					{
						name: 'Youngstown OH',
						value: '536',
					},
					{
						name: 'Zanesville OH',
						value: '596',
					},
					{
						name: 'Oklahoma',
						value: 'US-OK',
					},
					{
						name: 'Oklahoma City OK',
						value: '650',
					},
					{
						name: 'Sherman TX-Ada OK',
						value: '657',
					},
					{
						name: 'Tulsa OK',
						value: '671',
					},
					{
						name: 'Wichita Falls TX & Lawton OK',
						value: '627',
					},
					{
						name: 'Oregon',
						value: 'US-OR',
					},
					{
						name: 'Bend OR',
						value: '821',
					},
					{
						name: 'Eugene OR',
						value: '801',
					},
					{
						name: 'Portland OR',
						value: '820',
					},
					{
						name: 'Yakima-Pasco-Richland-Kennewick WA',
						value: '810',
					},
					{
						name: 'Pennsylvania',
						value: 'US-PA',
					},
					{
						name: 'Erie PA',
						value: '516',
					},
					{
						name: 'Harrisburg-Lancaster-Lebanon-York PA',
						value: '566',
					},
					{
						name: 'Johnstown-Altoona PA',
						value: '574',
					},
					{
						name: 'Pittsburgh PA',
						value: '508',
					},
					{
						name: 'Wilkes Barre-Scranton PA',
						value: '577',
					},
					{
						name: 'Rhode Island',
						value: 'US-RI',
					},
					{
						name: 'South Carolina',
						value: 'US-SC',
					},
					{
						name: 'Charleston SC',
						value: '519',
					},
					{
						name: 'Columbia SC',
						value: '546',
					},
					{
						name: 'South Dakota',
						value: 'US-SD',
					},
					{
						name: 'Rapid City SD',
						value: '764',
					},
					{
						name: 'Tennessee',
						value: 'US-TN',
					},
					{
						name: 'Jackson TN',
						value: '639',
					},
					{
						name: 'Texas',
						value: 'US-TX',
					},
					{
						name: 'Abilene-Sweetwater TX',
						value: '662',
					},
					{
						name: 'Austin TX',
						value: '635',
					},
					{
						name: 'Beaumont-Port Arthur TX',
						value: '692',
					},
					{
						name: 'Corpus Christi TX',
						value: '600',
					},
					{
						name: 'Dallas-Ft. Worth TX',
						value: '623',
					},
					{
						name: 'Harlingen-Weslaco-Brownsville-McAllen TX',
						value: '636',
					},
					{
						name: 'Houston TX',
						value: '618',
					},
					{
						name: 'Laredo TX',
						value: '749',
					},
					{
						name: 'Lubbock TX',
						value: '651',
					},
					{
						name: 'Odessa-Midland TX',
						value: '633',
					},
					{
						name: 'San Angelo TX',
						value: '661',
					},
					{
						name: 'San Antonio TX',
						value: '641',
					},
					{
						name: 'Tyler-Longview(Lufkin & Nacogdoches) TX',
						value: '709',
					},
					{
						name: 'Victoria TX',
						value: '626',
					},
					{
						name: 'Waco-Temple-Bryan TX',
						value: '625',
					},
					{
						name: 'Utah',
						value: 'US-UT',
					},
					{
						name: 'Vermont',
						value: 'US-VT',
					},
					{
						name: 'Virginia',
						value: 'US-VA',
					},
					{
						name: 'Bluefield-Beckley-Oak Hill WV',
						value: '559',
					},
					{
						name: 'Charlottesville VA',
						value: '584',
					},
					{
						name: 'Harrisonburg VA',
						value: '569',
					},
					{
						name: 'Richmond-Petersburg VA',
						value: '556',
					},
					{
						name: 'Roanoke-Lynchburg VA',
						value: '573',
					},
					{
						name: 'Washington',
						value: 'US-WA',
					},
					{
						name: 'Seattle-Tacoma WA',
						value: '819',
					},
					{
						name: 'West Virginia',
						value: 'US-WV',
					},
					{
						name: 'Clarksburg-Weston WV',
						value: '598',
					},
					{
						name: 'Wisconsin',
						value: 'US-WI',
					},
					{
						name: 'Green Bay-Appleton WI',
						value: '658',
					},
					{
						name: 'Madison WI',
						value: '669',
					},
					{
						name: 'Milwaukee WI',
						value: '617',
					},
					{
						name: 'Wausau-Rhinelander WI',
						value: '705',
					},
					{
						name: 'Wyoming',
						value: 'US-WY',
					},
					{
						name: 'Casper-Riverton WY',
						value: '767',
					},
					{
						name: 'Uruguay',
						value: 'UY',
					},
					{
						name: 'Artigas Department',
						value: 'UY-AR',
					},
					{
						name: 'Canelones Department',
						value: 'UY-CA',
					},
					{
						name: 'Cerro Largo Department',
						value: 'UY-CL',
					},
					{
						name: 'Colonia',
						value: 'UY-CO',
					},
					{
						name: 'Durazno Department',
						value: 'UY-DU',
					},
					{
						name: 'Flores Department',
						value: 'UY-FS',
					},
					{
						name: 'Florida Department',
						value: 'UY-FD',
					},
					{
						name: 'Lavalleja Department',
						value: 'UY-LA',
					},
					{
						name: 'Maldonado Department',
						value: 'UY-MA',
					},
					{
						name: 'Montevideo Department',
						value: 'UY-MO',
					},
					{
						name: 'Paysandú Department',
						value: 'UY-PA',
					},
					{
						name: 'Río Negro Department',
						value: 'UY-RN',
					},
					{
						name: 'Rivera Department',
						value: 'UY-RV',
					},
					{
						name: 'Rocha Department',
						value: 'UY-RO',
					},
					{
						name: 'Salto',
						value: 'UY-SA',
					},
					{
						name: 'San José Department',
						value: 'UY-SJ',
					},
					{
						name: 'Soriano Department',
						value: 'UY-SO',
					},
					{
						name: 'Tacuarembó Department',
						value: 'UY-TA',
					},
					{
						name: 'Treinta y Tres Department',
						value: 'UY-TT',
					},
					{
						name: 'Uzbekistan',
						value: 'UZ',
					},
					{
						name: 'Andijan Province',
						value: 'UZ-AN',
					},
					{
						name: 'Bukhara Province',
						value: 'UZ-BU',
					},
					{
						name: 'Ferghana Province',
						value: 'UZ-FA',
					},
					{
						name: 'Jizzakh Province',
						value: 'UZ-JI',
					},
					{
						name: 'Kashkadarya Province',
						value: 'UZ-QA',
					},
					{
						name: 'Khorezm Province',
						value: 'UZ-XO',
					},
					{
						name: 'Namangan Province',
						value: 'UZ-NG',
					},
					{
						name: 'Navoiy Province',
						value: 'UZ-NW',
					},
					{
						name: 'Republic of Karakalpakstan',
						value: 'UZ-QR',
					},
					{
						name: 'Samarkand Province',
						value: 'UZ-SA',
					},
					{
						name: 'Sirdarya Province',
						value: 'UZ-SI',
					},
					{
						name: 'Surkhandarya Province',
						value: 'UZ-SU',
					},
					{
						name: 'Tashkent Province',
						value: 'UZ-TO',
					},
					{
						name: 'Vanuatu',
						value: 'VU',
					},
					{
						name: 'Malampa Province',
						value: 'VU-MAP',
					},
					{
						name: 'Penama Province',
						value: 'VU-PAM',
					},
					{
						name: 'Sanma Province',
						value: 'VU-SAM',
					},
					{
						name: 'Shefa Province',
						value: 'VU-SEE',
					},
					{
						name: 'Tafea Province',
						value: 'VU-TAE',
					},
					{
						name: 'Torba Province',
						value: 'VU-TOB',
					},
					{
						name: 'Vatican City',
						value: 'VA',
					},
					{
						name: 'Venezuela',
						value: 'VE',
					},
					{
						name: 'Amazonas',
						value: 'VE-Z',
					},
					{
						name: 'Anzoategui',
						value: 'VE-B',
					},
					{
						name: 'Apure',
						value: 'VE-C',
					},
					{
						name: 'Aragua',
						value: 'VE-D',
					},
					{
						name: 'Barinas',
						value: 'VE-E',
					},
					{
						name: 'Bolívar',
						value: 'VE-F',
					},
					{
						name: 'Capital District',
						value: 'VE-A',
					},
					{
						name: 'Carabobo',
						value: 'VE-G',
					},
					{
						name: 'Cojedes',
						value: 'VE-H',
					},
					{
						name: 'Delta Amacuro',
						value: 'VE-Y',
					},
					{
						name: 'Falcón',
						value: 'VE-I',
					},
					{
						name: 'Federal Dependencies',
						value: 'VE-W',
					},
					{
						name: 'Guárico',
						value: 'VE-J',
					},
					{
						name: 'Lara',
						value: 'VE-K',
					},
					{
						name: 'Mérida',
						value: 'VE-L',
					},
					{
						name: 'Miranda',
						value: 'VE-M',
					},
					{
						name: 'Monagas',
						value: 'VE-N',
					},
					{
						name: 'Nueva Esparta',
						value: 'VE-O',
					},
					{
						name: 'Portuguesa',
						value: 'VE-P',
					},
					{
						name: 'Sucre',
						value: 'VE-R',
					},
					{
						name: 'Táchira',
						value: 'VE-S',
					},
					{
						name: 'Trujillo',
						value: 'VE-T',
					},
					{
						name: 'Vargas',
						value: 'VE-X',
					},
					{
						name: 'Yaracuy',
						value: 'VE-U',
					},
					{
						name: 'Zulia',
						value: 'VE-V',
					},
					{
						name: 'Vietnam',
						value: 'VN',
					},
					{
						name: 'An Giang Province',
						value: 'VN-44',
					},
					{
						name: 'Ba Ria - Vung Tau',
						value: 'VN-43',
					},
					{
						name: 'Bac Giang',
						value: 'VN-54',
					},
					{
						name: 'Bắc Kạn Province',
						value: 'VN-53',
					},
					{
						name: 'Bac Lieu',
						value: 'VN-55',
					},
					{
						name: 'Bac Ninh Province',
						value: 'VN-56',
					},
					{
						name: 'Ben Tre',
						value: 'VN-50',
					},
					{
						name: 'Binh Dinh Province',
						value: 'VN-31',
					},
					{
						name: 'Binh Duong',
						value: 'VN-57',
					},
					{
						name: 'Binh Phuoc',
						value: 'VN-58',
					},
					{
						name: 'Binh Thuan',
						value: 'VN-40',
					},
					{
						name: 'Ca Mau',
						value: 'VN-59',
					},
					{
						name: 'Can Tho',
						value: 'VN-CT',
					},
					{
						name: 'Cao Bang',
						value: 'VN-04',
					},
					{
						name: 'Da Nang',
						value: 'VN-DN',
					},
					{
						name: 'Đắk Lắk Province',
						value: 'VN-33',
					},
					{
						name: 'Dak Nong',
						value: 'VN-72',
					},
					{
						name: 'Dien Bien',
						value: 'VN-71',
					},
					{
						name: 'Dong Nai',
						value: 'VN-39',
					},
					{
						name: 'Đồng Tháp Province',
						value: 'VN-45',
					},
					{
						name: 'Gia Lai Province',
						value: 'VN-30',
					},
					{
						name: 'Ha Giang',
						value: 'VN-03',
					},
					{
						name: 'Hà Nam Province',
						value: 'VN-63',
					},
					{
						name: 'Ha Tinh Province',
						value: 'VN-23',
					},
					{
						name: 'Hai Duong',
						value: 'VN-61',
					},
					{
						name: 'Haiphong',
						value: 'VN-HP',
					},
					{
						name: 'Hanoi',
						value: 'VN-HN',
					},
					{
						name: 'Hau Giang',
						value: 'VN-73',
					},
					{
						name: 'Ho Chi Minh',
						value: 'VN-SG',
					},
					{
						name: 'Hoa Binh',
						value: 'VN-14',
					},
					{
						name: 'Hung Yen Province',
						value: 'VN-66',
					},
					{
						name: 'Khanh Hoa Province',
						value: 'VN-34',
					},
					{
						name: 'Kien Giang',
						value: 'VN-47',
					},
					{
						name: 'Kon Tum Province',
						value: 'VN-28',
					},
					{
						name: 'Lai Chau',
						value: 'VN-01',
					},
					{
						name: 'Lâm Đồng',
						value: 'VN-35',
					},
					{
						name: 'Lang Son Province',
						value: 'VN-09',
					},
					{
						name: 'Lao Cai',
						value: 'VN-02',
					},
					{
						name: 'Long An Province',
						value: 'VN-41',
					},
					{
						name: 'Nam Dinh',
						value: 'VN-67',
					},
					{
						name: 'Nghe An',
						value: 'VN-22',
					},
					{
						name: 'Ninh Bình Province',
						value: 'VN-18',
					},
					{
						name: 'Ninh Thuan Province',
						value: 'VN-36',
					},
					{
						name: 'Phu Tho Province',
						value: 'VN-68',
					},
					{
						name: 'Phú Yên Province',
						value: 'VN-32',
					},
					{
						name: 'Quang Binh Province',
						value: 'VN-24',
					},
					{
						name: 'Quang Nam Province',
						value: 'VN-27',
					},
					{
						name: 'Quang Ngai',
						value: 'VN-29',
					},
					{
						name: 'Quảng Ninh Province',
						value: 'VN-13',
					},
					{
						name: 'Quảng Trị Province',
						value: 'VN-25',
					},
					{
						name: 'Soc Trang',
						value: 'VN-52',
					},
					{
						name: 'Son La',
						value: 'VN-05',
					},
					{
						name: 'Tây Ninh Province',
						value: 'VN-37',
					},
					{
						name: 'Thai Binh',
						value: 'VN-20',
					},
					{
						name: 'Thai Nguyen',
						value: 'VN-69',
					},
					{
						name: 'Thanh Hoa',
						value: 'VN-21',
					},
					{
						name: 'Thua Thien Hue',
						value: 'VN-26',
					},
					{
						name: 'Tien Giang',
						value: 'VN-46',
					},
					{
						name: 'Tra Vinh',
						value: 'VN-51',
					},
					{
						name: 'Tuyên Quang Province',
						value: 'VN-07',
					},
					{
						name: 'Vinh Long',
						value: 'VN-49',
					},
					{
						name: 'Vinh Phuc Province',
						value: 'VN-70',
					},
					{
						name: 'Yen Bai Province',
						value: 'VN-06',
					},
					{
						name: 'Wallis & Futuna',
						value: 'WF',
					},
					{
						name: 'Alo',
						value: 'WF-ALO',
					},
					{
						name: 'Western Sahara',
						value: 'EH',
					},
					{
						name: 'Yemen',
						value: 'YE',
					},
					{
						name: "'Amran",
						value: 'YE-AM',
					},
					{
						name: 'Abyan',
						value: 'YE-AB',
					},
					{
						name: "Ad Dali'",
						value: 'YE-DA',
					},
					{
						name: 'Aden',
						value: 'YE-AD',
					},
					{
						name: "Al Bayda'",
						value: 'YE-BA',
					},
					{
						name: 'Al Hudaydah',
						value: 'YE-HU',
					},
					{
						name: 'Al Jawf',
						value: 'YE-JA',
					},
					{
						name: 'Al Mahrah',
						value: 'YE-MR',
					},
					{
						name: 'Al Mahwit',
						value: 'YE-MW',
					},
					{
						name: 'Amanat Al Asimah',
						value: 'YE-SA',
					},
					{
						name: 'Dhamar',
						value: 'YE-DH',
					},
					{
						name: 'Hadramaut',
						value: 'YE-HD',
					},
					{
						name: 'Hajjah',
						value: 'YE-HJ',
					},
					{
						name: 'Ibb',
						value: 'YE-IB',
					},
					{
						name: 'Lahij',
						value: 'YE-LA',
					},
					{
						name: "Ma'rib",
						value: 'YE-MA',
					},
					{
						name: 'Raymah',
						value: 'YE-RA',
					},
					{
						name: "Sa'dah",
						value: 'YE-SD',
					},
					{
						name: "Sana'a",
						value: 'YE-SN',
					},
					{
						name: 'Shabwah',
						value: 'YE-SH',
					},
					{
						name: "Ta'izz",
						value: 'YE-TA',
					},
					{
						name: 'Zambia',
						value: 'ZM',
					},
					{
						name: 'Central',
						value: 'ZM-02',
					},
					{
						name: 'Copperbelt',
						value: 'ZM-08',
					},
					{
						name: 'Eastern',
						value: 'ZM-03',
					},
					{
						name: 'Luapula',
						value: 'ZM-04',
					},
					{
						name: 'Lusaka',
						value: 'ZM-09',
					},
					{
						name: 'North-Western',
						value: 'ZM-06',
					},
					{
						name: 'Northern',
						value: 'ZM-05',
					},
					{
						name: 'Southern',
						value: 'ZM-07',
					},
					{
						name: 'Western',
						value: 'ZM-01',
					},
					{
						name: 'Zimbabwe',
						value: 'ZW',
					},
					{
						name: 'Bulawayo',
						value: 'ZW-BU',
					},
					{
						name: 'Harare',
						value: 'ZW-HA',
					},
					{
						name: 'Manicaland',
						value: 'ZW-MA',
					},
					{
						name: 'Mashonaland Central',
						value: 'ZW-MC',
					},
					{
						name: 'Mashonaland East',
						value: 'ZW-ME',
					},
					{
						name: 'Mashonaland West',
						value: 'ZW-MW',
					},
					{
						name: 'Masvingo',
						value: 'ZW-MV',
					},
					{
						name: 'Matabeleland North',
						value: 'ZW-MN',
					},
					{
						name: 'Matabeleland South',
						value: 'ZW-MS',
					},
					{
						name: 'Midlands',
						value: 'ZW-MI',
					},
				],
			},
			{
				displayName: '`region` Region',
				name: 'region',
				description:
					'Parameter is used for getting more specific results when using "Compared breakdown by region" and "Interest by region" data_type charts. Other data_type charts do not accept region parameter. The default value depends on the geo location that is set. Available options:COUNTRY - CountryREGION - SubregionDMA - MetroCITY - CityNot all region options will return results for every geo location.',
				default: 'COUNTRY',
				routing: {
					request: {
						qs: {
							region: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Country',
						value: 'COUNTRY',
					},
					{
						name: 'Subregion',
						value: 'REGION',
					},
					{
						name: 'Metro',
						value: 'DMA',
					},
					{
						name: 'City',
						value: 'CITY',
					},
				],
			},
			{
				displayName: '`data_type` Data type',
				name: 'data_type',
				description:
					'Parameter defines the type of search you want to do. Available options: TIMESERIES - Interest over time (default) - Accepts both single and multiple queries per search. GEO_MAP - Compared breakdown by region - Accepts only multiple queries per search. GEO_MAP_0 - Interest by region - Accepts only single query per search. RELATED_TOPICS - Related topics - Accepts only single query per search. RELATED_QUERIES - Related queries - Accepts only single query per search.',
				default: 'TIMESERIES',
				routing: {
					request: {
						qs: {
							data_type: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Interest over time',
						value: 'TIMESERIES',
					},
					{
						name: 'Compared breakdown by region',
						value: 'GEO_MAP',
					},
					{
						name: 'Interest by region',
						value: 'GEO_MAP_0',
					},
					{
						name: 'Related topics',
						value: 'RELATED_TOPICS',
					},
					{
						name: 'Related queries',
						value: 'RELATED_QUERIES',
					},
				],
			},
			{
				displayName: '`tz` Time Zone',
				name: 'tz',
				description:
					'Parameter is used to define a time zone offset. The default value is set to 420 (Pacific Day Time(PDT): -07:00). Value is shown in minutes and can span from -1439 to 1439.tz can be calculated using the time difference between UTC +0 and desired timezone. Examples:420 - PDT600 - Pacific/Tahiti-540 - Asia/Tokyo-480 - Canada/Pacific. To make sure the value is correct, please refer to the time zone database and your programming language UTC offset calculation. You may visit the documentation to get more information.',
				default: 0,
				routing: {
					request: {
						qs: {
							tz: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`cat` Category',
				name: 'cat',
				description:
					'Parameter is used to define a search category. The default value is set to 0 ("All categories"). Head to the Google Trends Categories for a full list of supported Google Trends Categories.',
				default: '0',
				routing: {
					request: {
						qs: {
							cat: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'All categories',
						value: '0',
					},
					{
						name: 'Arts & Entertainment',
						value: '3',
					},
					{
						name: 'Celebrities & Entertainment News',
						value: '184',
					},
					{
						name: 'Comics & Animation',
						value: '316',
					},
					{
						name: 'Animated Films',
						value: '1104',
					},
					{
						name: 'Anime & Manga',
						value: '317',
					},
					{
						name: 'Cartoons',
						value: '319',
					},
					{
						name: 'Comics',
						value: '318',
					},
					{
						name: 'Entertainment Industry',
						value: '612',
					},
					{
						name: 'Film & TV Industry',
						value: '1116',
					},
					{
						name: 'Film & TV Awards',
						value: '1108',
					},
					{
						name: 'Film & TV Production',
						value: '1117',
					},
					{
						name: 'Recording Industry',
						value: '1115',
					},
					{
						name: 'Music Awards',
						value: '1113',
					},
					{
						name: 'Record Labels',
						value: '1114',
					},
					{
						name: 'Events & Listings',
						value: '569',
					},
					{
						name: 'Clubs & Nightlife',
						value: '188',
					},
					{
						name: 'Concerts & Music Festivals',
						value: '891',
					},
					{
						name: 'Film Festivals',
						value: '1086',
					},
					{
						name: 'Live Sporting Events',
						value: '1273',
					},
					{
						name: 'Movie Listings & Theater Showtimes',
						value: '1085',
					},
					{
						name: 'Ticket Sales',
						value: '614',
					},
					{
						name: 'Fun & Trivia',
						value: '539',
					},
					{
						name: 'Dress-Up & Fashion Games',
						value: '1173',
					},
					{
						name: 'Flash-Based Entertainment',
						value: '447',
					},
					{
						name: 'Fun Tests & Silly Surveys',
						value: '1174',
					},
					{
						name: 'Humor',
						value: '182',
					},
					{
						name: 'Comedy Films',
						value: '1095',
					},
					{
						name: 'Live Comedy',
						value: '895',
					},
					{
						name: 'Political Humor',
						value: '1180',
					},
					{
						name: 'Spoofs & Satire',
						value: '1244',
					},
					{
						name: 'TV Comedies',
						value: '1047',
					},
					{
						name: 'Movies',
						value: '34',
					},
					{
						name: 'Action & Adventure Films',
						value: '1097',
					},
					{
						name: 'Martial Arts Films',
						value: '1101',
					},
					{
						name: 'Superhero Films',
						value: '1100',
					},
					{
						name: 'Western Films',
						value: '1099',
					},
					{
						name: 'Bollywood & South Asian Film',
						value: '360',
					},
					{
						name: 'Classic Films',
						value: '1102',
					},
					{
						name: 'Silent Films',
						value: '1098',
					},
					{
						name: 'Cult & Indie Films',
						value: '1103',
					},
					{
						name: 'Documentary Films',
						value: '1072',
					},
					{
						name: 'Drama Films',
						value: '1094',
					},
					{
						name: 'DVD & Video Shopping',
						value: '210',
					},
					{
						name: 'DVD & Video Rentals',
						value: '1145',
					},
					{
						name: 'Family Films',
						value: '1291',
					},
					{
						name: 'Horror Films',
						value: '615',
					},
					{
						name: 'Movie Memorabilia',
						value: '213',
					},
					{
						name: 'Movie Reference',
						value: '1106',
					},
					{
						name: 'Movie Reviews & Previews',
						value: '1107',
					},
					{
						name: 'Musical Films',
						value: '1105',
					},
					{
						name: 'Romance Films',
						value: '1310',
					},
					{
						name: 'Science Fiction & Fantasy Films',
						value: '616',
					},
					{
						name: 'Thriller, Crime & Mystery Films',
						value: '1096',
					},
					{
						name: 'Music & Audio',
						value: '35',
					},
					{
						name: 'CD & Audio Shopping',
						value: '217',
					},
					{
						name: 'Classical Music',
						value: '586',
					},
					{
						name: 'Opera',
						value: '1185',
					},
					{
						name: 'Country Music',
						value: '587',
					},
					{
						name: 'Dance & Electronic Music',
						value: '588',
					},
					{
						name: 'Experimental & Industrial Music',
						value: '1022',
					},
					{
						name: 'Folk & Traditional Music',
						value: '1023',
					},
					{
						name: 'Jazz & Blues',
						value: '589',
					},
					{
						name: 'Blues',
						value: '1040',
					},
					{
						name: 'Jazz',
						value: '42',
					},
					{
						name: 'Latin Pop',
						value: '1285',
					},
					{
						name: 'Music Art & Memorabilia',
						value: '218',
					},
					{
						name: 'Music Education & Instruction',
						value: '1087',
					},
					{
						name: 'Music Equipment & Technology',
						value: '1024',
					},
					{
						name: 'DJ Resources & Equipment',
						value: '1025',
					},
					{
						name: 'Music Recording Technology',
						value: '1026',
					},
					{
						name: 'Musical Instruments',
						value: '216',
					},
					{
						name: 'Drums & Percussion',
						value: '1327',
					},
					{
						name: 'Guitars',
						value: '1325',
					},
					{
						name: 'Pianos & Keyboards',
						value: '1326',
					},
					{
						name: 'Samples & Sound Libraries',
						value: '1091',
					},
					{
						name: 'Music Reference',
						value: '1027',
					},
					{
						name: 'Music Composition & Theory',
						value: '1028',
					},
					{
						name: 'Sheet Music',
						value: '892',
					},
					{
						name: 'Song Lyrics & Tabs',
						value: '617',
					},
					{
						name: 'Music Streams & Downloads',
						value: '220',
					},
					{
						name: 'Pop Music',
						value: '1021',
					},
					{
						name: 'Radio',
						value: '215',
					},
					{
						name: 'Podcasting',
						value: '809',
					},
					{
						name: 'Talk Radio',
						value: '1186',
					},
					{
						name: 'Religious Music',
						value: '1020',
					},
					{
						name: 'Christian & Gospel Music',
						value: '585',
					},
					{
						name: 'Rock Music',
						value: '590',
					},
					{
						name: 'Classic Rock & Oldies',
						value: '1037',
					},
					{
						name: 'Hard Rock & Progressive',
						value: '1035',
					},
					{
						name: 'Indie & Alternative Music',
						value: '1038',
					},
					{
						name: 'Metal (Music)',
						value: '1036',
					},
					{
						name: 'Punk (Music)',
						value: '1041',
					},
					{
						name: 'Soundtracks',
						value: '893',
					},
					{
						name: 'Urban & Hip-Hop',
						value: '592',
					},
					{
						name: 'Rap & Hip-Hop',
						value: '1030',
					},
					{
						name: 'Reggaeton',
						value: '1242',
					},
					{
						name: 'Soul & R&B',
						value: '1039',
					},
					{
						name: 'Vocals & Show Tunes',
						value: '618',
					},
					{
						name: 'World Music',
						value: '593',
					},
					{
						name: 'African Music',
						value: '1208',
					},
					{
						name: 'Arab & Middle Eastern Music',
						value: '1034',
					},
					{
						name: 'East Asian Music',
						value: '1033',
					},
					{
						name: 'Latin American Music',
						value: '591',
					},
					{
						name: 'Brazilian Music',
						value: '1287',
					},
					{
						name: 'Salsa & Tropical Music',
						value: '1286',
					},
					{
						name: 'Reggae & Caribbean Music',
						value: '1031',
					},
					{
						name: 'South Asian Music',
						value: '1032',
					},
					{
						name: 'Offbeat',
						value: '33',
					},
					{
						name: 'Edgy & Bizarre',
						value: '538',
					},
					{
						name: 'Occult & Paranormal',
						value: '449',
					},
					{
						name: 'Online Media',
						value: '613',
					},
					{
						name: 'Online Games',
						value: '105',
					},
					{
						name: 'Massive Multiplayer',
						value: '935',
					},
					{
						name: 'Online Image Galleries',
						value: '1222',
					},
					{
						name: 'Photo & Image Sharing',
						value: '978',
					},
					{
						name: 'Photo Rating Sites',
						value: '320',
					},
					{
						name: 'Stock Photography',
						value: '574',
					},
					{
						name: 'Online Video',
						value: '211',
					},
					{
						name: 'Video Sharing',
						value: '979',
					},
					{
						name: 'Web Portals',
						value: '301',
					},
					{
						name: 'Webcams & Virtual Tours',
						value: '575',
					},
					{
						name: 'Performing Arts',
						value: '23',
					},
					{
						name: 'Acting & Theater',
						value: '894',
					},
					{
						name: 'Broadway & Musical Theater',
						value: '1243',
					},
					{
						name: 'Dance',
						value: '581',
					},
					{
						name: 'TV & Video',
						value: '36',
					},
					{
						name: 'TV Commercials',
						value: '1055',
					},
					{
						name: 'TV Guides & Reference',
						value: '1187',
					},
					{
						name: 'TV Networks & Stations',
						value: '359',
					},
					{
						name: 'TV Shows & Programs',
						value: '358',
					},
					{
						name: 'TV Dramas',
						value: '1193',
					},
					{
						name: 'TV Crime & Legal Shows',
						value: '1111',
					},
					{
						name: 'TV Medical Shows',
						value: '1194',
					},
					{
						name: 'TV Soap Operas',
						value: '357',
					},
					{
						name: 'TV Family-Oriented Shows',
						value: '1110',
					},
					{
						name: 'TV Game Shows',
						value: '1050',
					},
					{
						name: 'TV Reality Shows',
						value: '1049',
					},
					{
						name: 'TV Sci-Fi & Fantasy Shows',
						value: '1112',
					},
					{
						name: 'TV Talk Shows',
						value: '1048',
					},
					{
						name: 'Visual Art & Design',
						value: '24',
					},
					{
						name: 'Architecture',
						value: '477',
					},
					{
						name: 'Art & Craft Supplies',
						value: '1361',
					},
					{
						name: 'Arts Education',
						value: '1195',
					},
					{
						name: 'Design',
						value: '653',
					},
					{
						name: 'CAD & CAM',
						value: '1300',
					},
					{
						name: 'Graphic Design',
						value: '654',
					},
					{
						name: 'Industrial & Product Design',
						value: '655',
					},
					{
						name: 'Interior Design',
						value: '656',
					},
					{
						name: 'Painting',
						value: '1167',
					},
					{
						name: 'Photographic & Digital Arts',
						value: '439',
					},
					{
						name: 'Camera & Photo Equipment',
						value: '573',
					},
					{
						name: 'Binoculars, Telescopes & Optical Devices',
						value: '1384',
					},
					{
						name: 'Cameras & Camcorders',
						value: '306',
					},
					{
						name: 'Camcorders',
						value: '308',
					},
					{
						name: 'Camera Lenses',
						value: '1383',
					},
					{
						name: 'Cameras',
						value: '307',
					},
					{
						name: 'Photo & Video Software',
						value: '577',
					},
					{
						name: 'Video File Formats & Codecs',
						value: '1315',
					},
					{
						name: 'Autos & Vehicles',
						value: '47',
					},
					{
						name: 'Automotive Industry',
						value: '1190',
					},
					{
						name: 'Bicycles & Accessories',
						value: '1191',
					},
					{
						name: 'Boats & Watercraft',
						value: '1140',
					},
					{
						name: 'Campers & RVs',
						value: '1213',
					},
					{
						name: 'Classic Vehicles',
						value: '1013',
					},
					{
						name: 'Commercial Vehicles',
						value: '1214',
					},
					{
						name: 'Cargo Trucks & Trailers',
						value: '1215',
					},
					{
						name: 'Custom & Performance Vehicles',
						value: '806',
					},
					{
						name: 'Hybrid & Alternative Vehicles',
						value: '810',
					},
					{
						name: 'Electric & Plug-In Vehicles',
						value: '1380',
					},
					{
						name: 'Microcars & City Cars',
						value: '1317',
					},
					{
						name: 'Motorcycles',
						value: '273',
					},
					{
						name: 'Off-Road Vehicles',
						value: '148',
					},
					{
						name: 'Personal Aircraft',
						value: '1147',
					},
					{
						name: 'Scooters & Mopeds',
						value: '1212',
					},
					{
						name: 'Trucks & SUVs',
						value: '610',
					},
					{
						name: 'SUVs',
						value: '1057',
					},
					{
						name: 'Trucks',
						value: '1056',
					},
					{
						name: 'Vans & Minivans',
						value: '1058',
					},
					{
						name: 'Vehicle Brands',
						value: '815',
					},
					{
						name: 'Acura',
						value: '820',
					},
					{
						name: 'Audi',
						value: '821',
					},
					{
						name: 'Bentley',
						value: '1059',
					},
					{
						name: 'BMW',
						value: '822',
					},
					{
						name: 'Buick',
						value: '1060',
					},
					{
						name: 'Cadillac',
						value: '823',
					},
					{
						name: 'Chevrolet',
						value: '826',
					},
					{
						name: 'Chrysler',
						value: '833',
					},
					{
						name: 'Citroën',
						value: '834',
					},
					{
						name: 'Dodge',
						value: '836',
					},
					{
						name: 'Ferrari',
						value: '1061',
					},
					{
						name: 'Fiat',
						value: '838',
					},
					{
						name: 'Ford',
						value: '840',
					},
					{
						name: 'GM-Daewoo',
						value: '896',
					},
					{
						name: 'GMC',
						value: '842',
					},
					{
						name: 'Honda',
						value: '843',
					},
					{
						name: 'Hummer',
						value: '1062',
					},
					{
						name: 'Hyundai',
						value: '845',
					},
					{
						name: 'Isuzu',
						value: '1378',
					},
					{
						name: 'Jaguar',
						value: '1063',
					},
					{
						name: 'Jeep',
						value: '846',
					},
					{
						name: 'Kia',
						value: '848',
					},
					{
						name: 'Lamborghini',
						value: '1064',
					},
					{
						name: 'Land Rover',
						value: '1065',
					},
					{
						name: 'Lexus',
						value: '849',
					},
					{
						name: 'Lincoln',
						value: '850',
					},
					{
						name: 'Maserati',
						value: '1066',
					},
					{
						name: 'Mazda',
						value: '851',
					},
					{
						name: 'Mercedes-Benz',
						value: '852',
					},
					{
						name: 'Mercury',
						value: '853',
					},
					{
						name: 'Mini',
						value: '1067',
					},
					{
						name: 'Mitsubishi',
						value: '854',
					},
					{
						name: 'Nissan',
						value: '855',
					},
					{
						name: 'Infiniti',
						value: '1377',
					},
					{
						name: 'Peugeot',
						value: '856',
					},
					{
						name: 'Pontiac',
						value: '857',
					},
					{
						name: 'Porsche',
						value: '858',
					},
					{
						name: 'Renault-Samsung',
						value: '859',
					},
					{
						name: 'Rolls-Royce',
						value: '1068',
					},
					{
						name: 'Saab',
						value: '897',
					},
					{
						name: 'Saturn',
						value: '860',
					},
					{
						name: 'Subaru',
						value: '861',
					},
					{
						name: 'Suzuki',
						value: '1070',
					},
					{
						name: 'Toyota',
						value: '863',
					},
					{
						name: 'Scion',
						value: '1069',
					},
					{
						name: 'Vauxhall-Opel',
						value: '898',
					},
					{
						name: 'Volkswagen',
						value: '865',
					},
					{
						name: 'Volvo',
						value: '867',
					},
					{
						name: 'Vehicle Codes & Driving Laws',
						value: '1294',
					},
					{
						name: 'Drunk Driving Law',
						value: '968',
					},
					{
						name: 'Vehicle Licensing & Registration',
						value: '170',
					},
					{
						name: 'Vehicle Maintenance',
						value: '138',
					},
					{
						name: 'Vehicle Parts & Accessories',
						value: '89',
					},
					{
						name: 'Auto Exterior',
						value: '1217',
					},
					{
						name: 'Auto Interior',
						value: '1218',
					},
					{
						name: 'Car Electronics',
						value: '1188',
					},
					{
						name: 'Car Audio',
						value: '230',
					},
					{
						name: 'Car Video',
						value: '1189',
					},
					{
						name: 'GPS & Navigation',
						value: '794',
					},
					{
						name: 'Engine & Transmission',
						value: '1216',
					},
					{
						name: 'Vehicle Fuels & Lubricants',
						value: '1269',
					},
					{
						name: 'Vehicle Wheels & Tires',
						value: '438',
					},
					{
						name: 'Vehicle Shopping',
						value: '473',
					},
					{
						name: 'Fuel Economy & Gas Prices',
						value: '1268',
					},
					{
						name: 'Vehicle Specs, Reviews & Comparisons',
						value: '1267',
					},
					{
						name: 'Vehicle Shows',
						value: '803',
					},
					{
						name: 'Beauty & Fitness',
						value: '44',
					},
					{
						name: 'Beauty Pageants',
						value: '1219',
					},
					{
						name: 'Body Art',
						value: '239',
					},
					{
						name: 'Cosmetic Procedures',
						value: '1220',
					},
					{
						name: 'Cosmetic Surgery',
						value: '238',
					},
					{
						name: 'Cosmetology & Beauty Professionals',
						value: '147',
					},
					{
						name: 'Face & Body Care',
						value: '143',
					},
					{
						name: 'Hygiene & Toiletries',
						value: '244',
					},
					{
						name: 'Make-Up & Cosmetics',
						value: '234',
					},
					{
						name: 'Perfumes & Fragrances',
						value: '242',
					},
					{
						name: 'Skin & Nail Care',
						value: '93',
					},
					{
						name: 'Unwanted Body & Facial Hair Removal',
						value: '144',
					},
					{
						name: 'Fashion & Style',
						value: '185',
					},
					{
						name: 'Fashion Designers & Collections',
						value: '98',
					},
					{
						name: 'Fashion Modeling',
						value: '1155',
					},
					{
						name: 'Fitness',
						value: '94',
					},
					{
						name: 'Bodybuilding',
						value: '241',
					},
					{
						name: 'Yoga & Pilates',
						value: '611',
					},
					{
						name: 'Hair Care',
						value: '146',
					},
					{
						name: 'Hair Loss',
						value: '235',
					},
					{
						name: 'Spas & Beauty Services',
						value: '145',
					},
					{
						name: 'Massage Therapy',
						value: '557',
					},
					{
						name: 'Weight Loss',
						value: '236',
					},
					{
						name: 'Books & Literature',
						value: '22',
					},
					{
						name: 'Biographies & Quotations',
						value: '690',
					},
					{
						name: 'Book Retailers',
						value: '355',
					},
					{
						name: "Children's Literature",
						value: '1183',
					},
					{
						name: 'E-Books',
						value: '608',
					},
					{
						name: 'Fan Fiction',
						value: '540',
					},
					{
						name: 'Literary Classics',
						value: '1184',
					},
					{
						name: 'Magazines',
						value: '412',
					},
					{
						name: 'Poetry',
						value: '565',
					},
					{
						name: 'Writers Resources',
						value: '1177',
					},
					{
						name: 'Business & Industrial',
						value: '12',
					},
					{
						name: 'Advertising & Marketing',
						value: '25',
					},
					{
						name: 'Marketing Services',
						value: '83',
					},
					{
						name: 'Loyalty Cards & Programs',
						value: '1309',
					},
					{
						name: 'Public Relations',
						value: '327',
					},
					{
						name: 'Search Engine Optimization & Marketing',
						value: '84',
					},
					{
						name: 'Telemarketing',
						value: '328',
					},
					{
						name: 'Aerospace & Defense',
						value: '356',
					},
					{
						name: 'Defense Industry',
						value: '669',
					},
					{
						name: 'Space Technology',
						value: '668',
					},
					{
						name: 'Agriculture & Forestry',
						value: '46',
					},
					{
						name: 'Agricultural Equipment',
						value: '748',
					},
					{
						name: 'Aquaculture',
						value: '747',
					},
					{
						name: 'Crops & Seed',
						value: '749',
					},
					{
						name: 'Food Production',
						value: '621',
					},
					{
						name: 'Forestry',
						value: '750',
					},
					{
						name: 'Horticulture',
						value: '751',
					},
					{
						name: 'Livestock',
						value: '752',
					},
					{
						name: 'Business Education',
						value: '799',
					},
					{
						name: 'Business Finance',
						value: '1138',
					},
					{
						name: 'Commercial Lending',
						value: '1160',
					},
					{
						name: 'Investment Banking',
						value: '1139',
					},
					{
						name: 'Risk Management',
						value: '620',
					},
					{
						name: 'Venture Capital',
						value: '905',
					},
					{
						name: 'Business News',
						value: '784',
					},
					{
						name: 'Company News',
						value: '1179',
					},
					{
						name: 'Company Earnings',
						value: '1240',
					},
					{
						name: 'Mergers & Acquisitions',
						value: '1241',
					},
					{
						name: 'Economy News',
						value: '1164',
					},
					{
						name: 'Financial Markets',
						value: '1163',
					},
					{
						name: 'Fiscal Policy News',
						value: '1165',
					},
					{
						name: 'Business Operations',
						value: '1159',
					},
					{
						name: 'Business Plans & Presentations',
						value: '336',
					},
					{
						name: 'Human Resources',
						value: '157',
					},
					{
						name: 'Compensation & Benefits',
						value: '723',
					},
					{
						name: 'Corporate Training',
						value: '331',
					},
					{
						name: 'Payroll Services',
						value: '724',
					},
					{
						name: 'Recruitment & Staffing',
						value: '330',
					},
					{
						name: 'Management',
						value: '338',
					},
					{
						name: 'Business Process',
						value: '721',
					},
					{
						name: 'Project Management',
						value: '1360',
					},
					{
						name: 'Project Management Software',
						value: '1359',
					},
					{
						name: 'Strategic Planning',
						value: '722',
					},
					{
						name: 'Supply Chain Management',
						value: '801',
					},
					{
						name: 'Business Services',
						value: '329',
					},
					{
						name: 'Consulting',
						value: '1162',
					},
					{
						name: 'Corporate Events',
						value: '334',
					},
					{
						name: 'Trade Shows & Conventions',
						value: '335',
					},
					{
						name: 'E-Commerce Services',
						value: '340',
					},
					{
						name: 'Merchant Services & Payment Systems',
						value: '280',
					},
					{
						name: 'Fire & Security Services',
						value: '726',
					},
					{
						name: 'Knowledge Management',
						value: '800',
					},
					{
						name: 'Office Services',
						value: '28',
					},
					{
						name: 'Office & Facilities Management',
						value: '337',
					},
					{
						name: 'Office Supplies',
						value: '95',
					},
					{
						name: 'Business Cards & Stationary',
						value: '1375',
					},
					{
						name: 'Office Furniture',
						value: '333',
					},
					{
						name: 'Printers, Copiers & Fax',
						value: '1330',
					},
					{
						name: 'Copiers',
						value: '1331',
					},
					{
						name: 'Fax Machines',
						value: '1332',
					},
					{
						name: 'Ink & Toner',
						value: '1333',
					},
					{
						name: 'Printers',
						value: '494',
					},
					{
						name: 'Scanners',
						value: '495',
					},
					{
						name: 'Outsourcing',
						value: '718',
					},
					{
						name: 'Photo & Video Services',
						value: '576',
					},
					{
						name: 'Physical Asset Management',
						value: '719',
					},
					{
						name: 'Quality Control & Tracking',
						value: '720',
					},
					{
						name: 'Signage',
						value: '1076',
					},
					{
						name: 'Writing & Editing Services',
						value: '725',
					},
					{
						name: 'Chemicals Industry',
						value: '288',
					},
					{
						name: 'Agrochemicals',
						value: '670',
					},
					{
						name: 'Cleaning Agents',
						value: '671',
					},
					{
						name: 'Coatings & Adhesives',
						value: '672',
					},
					{
						name: 'Dyes & Pigments',
						value: '673',
					},
					{
						name: 'Plastics & Polymers',
						value: '674',
					},
					{
						name: 'Construction & Maintenance',
						value: '48',
					},
					{
						name: 'Building Materials & Supplies',
						value: '650',
					},
					{
						name: 'Doors & Windows',
						value: '827',
					},
					{
						name: 'HVAC & Climate Control',
						value: '828',
					},
					{
						name: 'Nails Screws & Fasteners',
						value: '829',
					},
					{
						name: 'Plumbing Fixtures & Equipment',
						value: '830',
					},
					{
						name: 'Wood & Plastics',
						value: '831',
					},
					{
						name: 'Civil Engineering',
						value: '651',
					},
					{
						name: 'Construction Consulting & Contracting',
						value: '652',
					},
					{
						name: 'Urban & Regional Planning',
						value: '686',
					},
					{
						name: 'Energy & Utilities',
						value: '233',
					},
					{
						name: 'Electricity',
						value: '658',
					},
					{
						name: 'Nuclear Energy',
						value: '954',
					},
					{
						name: 'Oil & Gas',
						value: '659',
					},
					{
						name: 'Renewable & Alternative Energy',
						value: '657',
					},
					{
						name: 'Waste Management',
						value: '660',
					},
					{
						name: 'Recycling',
						value: '1307',
					},
					{
						name: 'Water Supply & Treatment',
						value: '1349',
					},
					{
						name: 'Enterprise Technology',
						value: '77',
					},
					{
						name: 'Customer Relationship Management (CRM)',
						value: '341',
					},
					{
						name: 'Data Management',
						value: '343',
					},
					{
						name: 'Enterprise Resource Planning (ERP)',
						value: '342',
					},
					{
						name: 'Hospitality Industry',
						value: '955',
					},
					{
						name: 'Event Planning',
						value: '956',
					},
					{
						name: 'Food Service',
						value: '957',
					},
					{
						name: 'Grocery & Food Retailers',
						value: '121',
					},
					{
						name: 'Restaurant Supply',
						value: '816',
					},
					{
						name: 'Industrial Materials & Equipment',
						value: '287',
					},
					{
						name: 'Fluid Handling',
						value: '1152',
					},
					{
						name: 'Valves Hoses & Fittings',
						value: '839',
					},
					{
						name: 'Generators',
						value: '835',
					},
					{
						name: 'Heavy Machinery',
						value: '837',
					},
					{
						name: 'Manufacturing',
						value: '49',
					},
					{
						name: 'Factory Automation',
						value: '661',
					},
					{
						name: 'Metals & Mining',
						value: '606',
					},
					{
						name: 'Pharmaceuticals & Biotech',
						value: '255',
					},
					{
						name: 'Printing & Publishing',
						value: '1176',
					},
					{
						name: 'Document & Printing Services',
						value: '332',
					},
					{
						name: 'Journalism & News Industry',
						value: '1204',
					},
					{
						name: 'Professional & Trade Associations',
						value: '1199',
					},
					{
						name: 'Retail Trade',
						value: '841',
					},
					{
						name: 'Retail Equipment & Technology',
						value: '844',
					},
					{
						name: 'Small Business',
						value: '551',
					},
					{
						name: 'Business Formation',
						value: '1200',
					},
					{
						name: 'Home Office',
						value: '727',
					},
					{
						name: 'MLM & Business Opportunities',
						value: '552',
					},
					{
						name: 'Textiles & Nonwovens',
						value: '566',
					},
					{
						name: 'Transportation & Logistics',
						value: '50',
					},
					{
						name: 'Aviation',
						value: '662',
					},
					{
						name: 'Distribution & Logistics',
						value: '664',
					},
					{
						name: 'Freight & Trucking',
						value: '289',
					},
					{
						name: 'Import & Export',
						value: '354',
					},
					{
						name: 'Mail & Package Delivery',
						value: '1150',
					},
					{
						name: 'Couriers & Messengers',
						value: '663',
					},
					{
						name: 'Maritime Transport',
						value: '665',
					},
					{
						name: 'Moving & Relocation',
						value: '291',
					},
					{
						name: 'Packaging',
						value: '290',
					},
					{
						name: 'Parking',
						value: '1306',
					},
					{
						name: 'Airport Parking & Transportation',
						value: '1245',
					},
					{
						name: 'Public Storage',
						value: '1347',
					},
					{
						name: 'Rail Transport',
						value: '666',
					},
					{
						name: 'Urban Transport',
						value: '667',
					},
					{
						name: 'Computers & Electronics',
						value: '5',
					},
					{
						name: 'Computer Hardware',
						value: '30',
					},
					{
						name: 'Computer Components',
						value: '717',
					},
					{
						name: 'Chips & Processors',
						value: '741',
					},
					{
						name: 'Computer Memory',
						value: '226',
					},
					{
						name: 'Sound & Video Cards',
						value: '740',
					},
					{
						name: 'Computer Drives & Storage',
						value: '496',
					},
					{
						name: 'CD & DVD Drives & Burners',
						value: '1321',
					},
					{
						name: 'CD & DVD Storage Media',
						value: '1322',
					},
					{
						name: 'Data Backup & Recovery',
						value: '1323',
					},
					{
						name: 'Flash Drives & Memory Cards',
						value: '1318',
					},
					{
						name: 'Hard Drives',
						value: '1320',
					},
					{
						name: 'Memory Card Readers',
						value: '1319',
					},
					{
						name: 'Network Storage',
						value: '729',
					},
					{
						name: 'Computer Peripherals',
						value: '312',
					},
					{
						name: 'Computer Monitors & Displays',
						value: '487',
					},
					{
						name: 'Input Devices',
						value: '493',
					},
					{
						name: 'Computer Servers',
						value: '728',
					},
					{
						name: 'Desktop Computers',
						value: '309',
					},
					{
						name: 'Hardware Modding & Tuning',
						value: '739',
					},
					{
						name: 'Laptops & Notebooks',
						value: '310',
					},
					{
						name: 'Tablet PCs',
						value: '1277',
					},
					{
						name: 'Computer Security',
						value: '314',
					},
					{
						name: 'Antivirus & Malware',
						value: '315',
					},
					{
						name: 'Network Security',
						value: '344',
					},
					{
						name: 'Consumer Electronics',
						value: '78',
					},
					{
						name: 'Audio Equipment',
						value: '361',
					},
					{
						name: 'Headphones',
						value: '1396',
					},
					{
						name: 'MP3 & Portable Media Players',
						value: '227',
					},
					{
						name: 'Speakers',
						value: '1158',
					},
					{
						name: 'Stereo Systems & Components',
						value: '91',
					},
					{
						name: 'Electronic Accessories',
						value: '1192',
					},
					{
						name: 'Gadgets & Portable Electronics',
						value: '362',
					},
					{
						name: 'E-Book Readers',
						value: '1324',
					},
					{
						name: 'Handheld Game Consoles',
						value: '1046',
					},
					{
						name: 'PDAs & Handhelds',
						value: '228',
					},
					{
						name: 'Game Systems & Consoles',
						value: '899',
					},
					{
						name: 'Nintendo',
						value: '1043',
					},
					{
						name: 'Sony PlayStation',
						value: '1044',
					},
					{
						name: 'Xbox',
						value: '1045',
					},
					{
						name: 'TV & Video Equipment',
						value: '229',
					},
					{
						name: 'DVRs & Set-Top Boxes',
						value: '1393',
					},
					{
						name: 'Home Theater Systems',
						value: '1157',
					},
					{
						name: 'Projectors & Screens',
						value: '1334',
					},
					{
						name: 'Televisions',
						value: '305',
					},
					{
						name: 'HDTVs',
						value: '1354',
					},
					{
						name: 'LCD TVs',
						value: '1356',
					},
					{
						name: 'Plasma TVs',
						value: '1355',
					},
					{
						name: 'Projection TVs',
						value: '1357',
					},
					{
						name: 'Video Players & Recorders',
						value: '492',
					},
					{
						name: 'Blu-Ray Players & Recorders',
						value: '1394',
					},
					{
						name: 'DVD Players & Recorders',
						value: '1395',
					},
					{
						name: 'Electronics & Electrical',
						value: '434',
					},
					{
						name: 'Data Sheets & Electronics Reference',
						value: '900',
					},
					{
						name: 'Electromechanical Devices',
						value: '743',
					},
					{
						name: 'Electronic Components',
						value: '742',
					},
					{
						name: 'Optoelectronics & Fiber',
						value: '744',
					},
					{
						name: 'Power Supplies',
						value: '745',
					},
					{
						name: 'Test & Measurement',
						value: '746',
					},
					{
						name: 'Networking',
						value: '311',
					},
					{
						name: 'Data Formats & Protocols',
						value: '488',
					},
					{
						name: 'Distributed & Parallel Computing',
						value: '1298',
					},
					{
						name: 'Network Monitoring & Management',
						value: '347',
					},
					{
						name: 'Networking Equipment',
						value: '346',
					},
					{
						name: 'VPN & Remote Access',
						value: '1279',
					},
					{
						name: 'Programming',
						value: '31',
					},
					{
						name: 'C & C++',
						value: '731',
					},
					{
						name: 'Developer Jobs',
						value: '802',
					},
					{
						name: 'Development Tools',
						value: '730',
					},
					{
						name: 'Java',
						value: '732',
					},
					{
						name: 'Scripting Languages',
						value: '733',
					},
					{
						name: 'Windows & .NET',
						value: '734',
					},
					{
						name: 'Software',
						value: '32',
					},
					{
						name: 'Business & Productivity Software',
						value: '498',
					},
					{
						name: 'Accounting & Financial Software',
						value: '1341',
					},
					{
						name: 'Calendar & Scheduling Software',
						value: '1358',
					},
					{
						name: 'Presentation Software',
						value: '1346',
					},
					{
						name: 'Spreadsheet Software',
						value: '1344',
					},
					{
						name: 'Word Processing Software',
						value: '1345',
					},
					{
						name: 'Device Drivers',
						value: '225',
					},
					{
						name: 'Educational Software',
						value: '804',
					},
					{
						name: 'Freeware & Shareware',
						value: '901',
					},
					{
						name: 'Internet Software',
						value: '807',
					},
					{
						name: 'Content Management',
						value: '808',
					},
					{
						name: 'Internet Clients & Browsers',
						value: '304',
					},
					{
						name: 'Proxying & Filtering',
						value: '902',
					},
					{
						name: 'Mobile Apps & Add-Ons',
						value: '1109',
					},
					{
						name: 'Ringtones & Mobile Goodies',
						value: '532',
					},
					{
						name: 'Multimedia Software',
						value: '497',
					},
					{
						name: 'Audio & Music Software',
						value: '1089',
					},
					{
						name: 'Audio Files Formats & Codecs',
						value: '1092',
					},
					{
						name: 'Desktop Publishing',
						value: '1088',
					},
					{
						name: 'Fonts',
						value: '805',
					},
					{
						name: 'Graphics & Animation Software',
						value: '486',
					},
					{
						name: 'Media Players',
						value: '1090',
					},
					{
						name: 'Open Source',
						value: '313',
					},
					{
						name: 'Operating Systems',
						value: '303',
					},
					{
						name: 'Linux & Unix',
						value: '736',
					},
					{
						name: 'Mac OS',
						value: '735',
					},
					{
						name: 'Mobile OS',
						value: '1382',
					},
					{
						name: 'Windows OS',
						value: '737',
					},
					{
						name: 'Software Utilities',
						value: '224',
					},
					{
						name: 'Web Apps & Online Tools',
						value: '1142',
					},
					{
						name: 'Technical Support',
						value: '567',
					},
					{
						name: 'Technology News',
						value: '785',
					},
					{
						name: 'Finance',
						value: '7',
					},
					{
						name: 'Accounting & Auditing',
						value: '278',
					},
					{
						name: 'Tax Preparation & Planning',
						value: '1283',
					},
					{
						name: 'Banking',
						value: '37',
					},
					{
						name: 'Credit & Lending',
						value: '279',
					},
					{
						name: 'Auto Financing',
						value: '468',
					},
					{
						name: 'College Financing',
						value: '813',
					},
					{
						name: 'Credit Cards',
						value: '811',
					},
					{
						name: 'Debt Management',
						value: '812',
					},
					{
						name: 'Home Financing',
						value: '466',
					},
					{
						name: 'Currencies & Foreign Exchange',
						value: '814',
					},
					{
						name: 'Financial Planning',
						value: '903',
					},
					{
						name: 'Grants & Financial Assistance',
						value: '1282',
					},
					{
						name: 'Insurance',
						value: '38',
					},
					{
						name: 'Auto Insurance',
						value: '467',
					},
					{
						name: 'Health Insurance',
						value: '249',
					},
					{
						name: 'Home Insurance',
						value: '465',
					},
					{
						name: 'Investing',
						value: '107',
					},
					{
						name: 'Commodities & Futures Trading',
						value: '904',
					},
					{
						name: 'Retirement & Pension',
						value: '619',
					},
					{
						name: 'Food & Drink',
						value: '71',
					},
					{
						name: 'Alcoholic Beverages',
						value: '277',
					},
					{
						name: 'Beer',
						value: '404',
					},
					{
						name: 'Liquor',
						value: '406',
					},
					{
						name: 'Wine',
						value: '405',
					},
					{
						name: 'Candy & Sweets',
						value: '906',
					},
					{
						name: 'Cooking & Recipes',
						value: '122',
					},
					{
						name: 'Baked Goods',
						value: '907',
					},
					{
						name: 'Fruits & Vegetables',
						value: '908',
					},
					{
						name: 'Meat & Seafood',
						value: '909',
					},
					{
						name: 'Soups & Stews',
						value: '910',
					},
					{
						name: 'Vegetarian Cuisine',
						value: '825',
					},
					{
						name: 'World Cuisines',
						value: '911',
					},
					{
						name: 'Asian Cuisine',
						value: '912',
					},
					{
						name: 'Latin American Cuisine',
						value: '913',
					},
					{
						name: 'Mediterranean Cuisine',
						value: '914',
					},
					{
						name: 'North American Cuisine',
						value: '915',
					},
					{
						name: 'Culinary Training',
						value: '297',
					},
					{
						name: 'Non-Alcoholic Beverages',
						value: '560',
					},
					{
						name: 'Coffee & Tea',
						value: '916',
					},
					{
						name: 'Restaurants',
						value: '276',
					},
					{
						name: 'Dining Guides',
						value: '917',
					},
					{
						name: 'Fast Food',
						value: '918',
					},
					{
						name: 'Games',
						value: '8',
					},
					{
						name: 'Arcade & Coin-Op Games',
						value: '919',
					},
					{
						name: 'Board Games',
						value: '920',
					},
					{
						name: 'Chess & Abstract Strategy Games',
						value: '921',
					},
					{
						name: 'Miniatures & Wargaming',
						value: '922',
					},
					{
						name: 'Card Games',
						value: '39',
					},
					{
						name: 'Collectible Card Games',
						value: '923',
					},
					{
						name: 'Poker & Casino Games',
						value: '924',
					},
					{
						name: 'Computer & Video Games',
						value: '41',
					},
					{
						name: 'Action & Platform Games',
						value: '1311',
					},
					{
						name: 'Adventure Games',
						value: '925',
					},
					{
						name: 'Casual Games',
						value: '926',
					},
					{
						name: 'Driving & Racing Games',
						value: '927',
					},
					{
						name: 'Fighting Games',
						value: '928',
					},
					{
						name: 'Gaming Media & Reference',
						value: '1343',
					},
					{
						name: 'Game Cheats & Hints',
						value: '381',
					},
					{
						name: 'Music & Dance Games',
						value: '929',
					},
					{
						name: 'Shooter Games',
						value: '930',
					},
					{
						name: 'Simulation Games',
						value: '931',
					},
					{
						name: 'Sports Games',
						value: '932',
					},
					{
						name: 'Strategy Games',
						value: '933',
					},
					{
						name: 'Video Game Emulation',
						value: '1342',
					},
					{
						name: 'Video Game Retailers',
						value: '1146',
					},
					{
						name: 'Family-Oriented Games & Activities',
						value: '1290',
					},
					{
						name: 'Drawing & Coloring',
						value: '1397',
					},
					{
						name: 'Party Games',
						value: '936',
					},
					{
						name: 'Puzzles & Brainteasers',
						value: '937',
					},
					{
						name: 'Roleplaying Games',
						value: '622',
					},
					{
						name: 'Table Games',
						value: '938',
					},
					{
						name: 'Billiards',
						value: '939',
					},
					{
						name: 'Table Tennis',
						value: '940',
					},
					{
						name: 'Health',
						value: '45',
					},
					{
						name: 'Aging & Geriatrics',
						value: '623',
					},
					{
						name: "Alzheimer's Disease",
						value: '624',
					},
					{
						name: 'Alternative & Natural Medicine',
						value: '499',
					},
					{
						name: 'Acupuncture & Chinese Medicine',
						value: '1239',
					},
					{
						name: 'Cleansing & Detoxification',
						value: '1238',
					},
					{
						name: 'Health Conditions',
						value: '419',
					},
					{
						name: 'AIDS & HIV',
						value: '625',
					},
					{
						name: 'Allergies',
						value: '626',
					},
					{
						name: 'Arthritis',
						value: '628',
					},
					{
						name: 'Cancer',
						value: '429',
					},
					{
						name: 'Cold & Flu',
						value: '629',
					},
					{
						name: 'Diabetes',
						value: '630',
					},
					{
						name: 'Ear Nose & Throat',
						value: '1211',
					},
					{
						name: 'Eating Disorders',
						value: '571',
					},
					{
						name: 'Endocrine Conditions',
						value: '1328',
					},
					{
						name: 'Thyroid Conditions',
						value: '1329',
					},
					{
						name: 'Genetic Disorders',
						value: '941',
					},
					{
						name: 'GERD & Digestive Disorders',
						value: '638',
					},
					{
						name: 'Heart & Hypertension',
						value: '559',
					},
					{
						name: 'Infectious Diseases',
						value: '632',
					},
					{
						name: 'Parasites & Parasitic Diseases',
						value: '1262',
					},
					{
						name: 'Sexually Transmitted Diseases',
						value: '421',
					},
					{
						name: 'Vaccines & Immunizations',
						value: '1263',
					},
					{
						name: 'Injury',
						value: '817',
					},
					{
						name: 'Neurological Disorders',
						value: '942',
					},
					{
						name: 'Obesity',
						value: '818',
					},
					{
						name: 'Pain Management',
						value: '819',
					},
					{
						name: 'Headaches & Migraines',
						value: '631',
					},
					{
						name: 'Respiratory Conditions',
						value: '824',
					},
					{
						name: 'Asthma',
						value: '627',
					},
					{
						name: 'Skin Conditions',
						value: '420',
					},
					{
						name: 'Sleep Disorders',
						value: '633',
					},
					{
						name: 'Health Education & Medical Training',
						value: '254',
					},
					{
						name: 'Health Foundations & Medical Research',
						value: '252',
					},
					{
						name: 'Health News',
						value: '1253',
					},
					{
						name: 'Health Policy',
						value: '1256',
					},
					{
						name: 'Medical Devices & Equipment',
						value: '251',
					},
					{
						name: 'Assistive Technology',
						value: '1352',
					},
					{
						name: 'Mobility Equipment & Accessories',
						value: '1353',
					},
					{
						name: 'Medical Facilities & Services',
						value: '256',
					},
					{
						name: "Doctors' Offices",
						value: '634',
					},
					{
						name: 'Hospitals & Treatment Centers',
						value: '250',
					},
					{
						name: 'Medical Procedures',
						value: '635',
					},
					{
						name: 'Medical Tests & Exams',
						value: '943',
					},
					{
						name: 'Surgery',
						value: '944',
					},
					{
						name: 'Physical Therapy',
						value: '500',
					},
					{
						name: 'Medical Literature & Resources',
						value: '253',
					},
					{
						name: 'Medical Photos & Illustration',
						value: '945',
					},
					{
						name: "Men's Health",
						value: '636',
					},
					{
						name: 'Erectile Dysfunction',
						value: '202',
					},
					{
						name: 'Mental Health',
						value: '437',
					},
					{
						name: 'Anxiety & Stress',
						value: '639',
					},
					{
						name: 'Depression',
						value: '640',
					},
					{
						name: 'Learning & Developmental Disabilities',
						value: '641',
					},
					{
						name: 'ADD & ADHD',
						value: '642',
					},
					{
						name: 'Nursing',
						value: '418',
					},
					{
						name: 'Assisted Living & Long Term Care',
						value: '649',
					},
					{
						name: 'Nutrition',
						value: '456',
					},
					{
						name: 'Special & Restricted Diets',
						value: '457',
					},
					{
						name: 'Cholesterol Issues',
						value: '643',
					},
					{
						name: 'Vitamins & Supplements',
						value: '237',
					},
					{
						name: 'Oral & Dental Care',
						value: '245',
					},
					{
						name: 'Pediatrics',
						value: '645',
					},
					{
						name: 'Pharmacy',
						value: '248',
					},
					{
						name: 'Drugs & Medications',
						value: '646',
					},
					{
						name: 'Public Health',
						value: '947',
					},
					{
						name: 'Occupational Health & Safety',
						value: '644',
					},
					{
						name: 'Poisons & Overdoses',
						value: '946',
					},
					{
						name: 'Reproductive Health',
						value: '195',
					},
					{
						name: 'Birth Control',
						value: '198',
					},
					{
						name: 'Infertility',
						value: '647',
					},
					{
						name: 'OBGYN',
						value: '558',
					},
					{
						name: 'Pregnancy & Maternity',
						value: '401',
					},
					{
						name: 'Sex Education & Counseling',
						value: '536',
					},
					{
						name: 'Sexual Enhancement',
						value: '1236',
					},
					{
						name: 'Substance Abuse',
						value: '257',
					},
					{
						name: 'Drug & Alcohol Testing',
						value: '1351',
					},
					{
						name: 'Drug & Alcohol Treatment',
						value: '1350',
					},
					{
						name: 'Smoking & Smoking Cessation',
						value: '1237',
					},
					{
						name: 'Steroids & Performance-Enhancing Drugs',
						value: '1235',
					},
					{
						name: 'Vision Care',
						value: '246',
					},
					{
						name: 'Eyeglasses & Contacts',
						value: '1224',
					},
					{
						name: "Women's Health",
						value: '648',
					},
					{
						name: 'Hobbies & Leisure',
						value: '65',
					},
					{
						name: 'Antiques & Collectibles',
						value: '64',
					},
					{
						name: 'Bowling',
						value: '1016',
					},
					{
						name: 'Clubs & Organizations',
						value: '189',
					},
					{
						name: 'Contests, Awards & Prizes',
						value: '1276',
					},
					{
						name: 'Lottery & Sweepstakes',
						value: '364',
					},
					{
						name: 'Crafts',
						value: '284',
					},
					{
						name: 'Fiber & Textile Arts',
						value: '1230',
					},
					{
						name: 'Cycling',
						value: '458',
					},
					{
						name: 'Outdoors',
						value: '688',
					},
					{
						name: 'Equestrian',
						value: '568',
					},
					{
						name: 'Fishing',
						value: '462',
					},
					{
						name: 'Hiking & Camping',
						value: '542',
					},
					{
						name: 'Hunting & Shooting',
						value: '461',
					},
					{
						name: 'Paintball',
						value: '786',
					},
					{
						name: 'Pets & Animals',
						value: '66',
					},
					{
						name: 'Animal Products & Services',
						value: '882',
					},
					{
						name: 'Animal Welfare',
						value: '883',
					},
					{
						name: 'Pet Food & Supplies',
						value: '379',
					},
					{
						name: 'Veterinarians',
						value: '380',
					},
					{
						name: 'Pets',
						value: '563',
					},
					{
						name: 'Birds',
						value: '884',
					},
					{
						name: 'Cats',
						value: '885',
					},
					{
						name: 'Dogs',
						value: '886',
					},
					{
						name: 'Exotic Pets',
						value: '607',
					},
					{
						name: 'Fish & Aquaria',
						value: '887',
					},
					{
						name: 'Horses',
						value: '888',
					},
					{
						name: 'Rabbits & Rodents',
						value: '889',
					},
					{
						name: 'Reptiles & Amphibians',
						value: '890',
					},
					{
						name: 'Wildlife',
						value: '119',
					},
					{
						name: 'Insects & Entomology',
						value: '1278',
					},
					{
						name: 'Zoos-Aquariums-Preserves',
						value: '1009',
					},
					{
						name: 'Radio Control & Modeling',
						value: '787',
					},
					{
						name: 'Recreational Aviation',
						value: '999',
					},
					{
						name: 'Running & Walking',
						value: '541',
					},
					{
						name: 'Special Occasions',
						value: '977',
					},
					{
						name: 'Gifts & Special Event Items',
						value: '70',
					},
					{
						name: 'Cards & Greetings',
						value: '100',
					},
					{
						name: 'Flowers',
						value: '323',
					},
					{
						name: 'Gifts',
						value: '99',
					},
					{
						name: 'Party & Holiday Supplies',
						value: '324',
					},
					{
						name: 'Holidays & Seasonal Events',
						value: '678',
					},
					{
						name: 'Birthdays & Name Days',
						value: '1270',
					},
					{
						name: 'Carnival & Mardi Gras',
						value: '1246',
					},
					{
						name: 'Christian Holidays',
						value: '1274',
					},
					{
						name: 'Christmas',
						value: '1078',
					},
					{
						name: 'Easter',
						value: '1123',
					},
					{
						name: 'Halloween & October 31st',
						value: '1079',
					},
					{
						name: 'Islamic Holidays',
						value: '1275',
					},
					{
						name: 'Jewish Holidays',
						value: '1124',
					},
					{
						name: 'New Year',
						value: '1271',
					},
					{
						name: 'Thanksgiving',
						value: '1125',
					},
					{
						name: "Valentine's Day",
						value: '1122',
					},
					{
						name: 'Weddings',
						value: '293',
					},
					{
						name: 'Subcultures & Niche Interests',
						value: '502',
					},
					{
						name: 'Goth Subculture',
						value: '503',
					},
					{
						name: 'Science Fiction & Fantasy',
						value: '676',
					},
					{
						name: 'Water Activities',
						value: '1002',
					},
					{
						name: 'Boating',
						value: '459',
					},
					{
						name: 'Diving & Underwater Activities',
						value: '1305',
					},
					{
						name: 'Surf & Swim',
						value: '689',
					},
					{
						name: 'Water Sports',
						value: '118',
					},
					{
						name: 'Home & Garden',
						value: '11',
					},
					{
						name: 'Bed & Bath',
						value: '948',
					},
					{
						name: 'Bathroom',
						value: '1365',
					},
					{
						name: 'Bedroom',
						value: '1366',
					},
					{
						name: 'Bedding & Bed Linens',
						value: '1369',
					},
					{
						name: 'Beds & Headboards',
						value: '1367',
					},
					{
						name: 'Mattresses',
						value: '1368',
					},
					{
						name: 'Domestic Services',
						value: '472',
					},
					{
						name: 'Cleaning Supplies & Services',
						value: '949',
					},
					{
						name: 'Gardening & Landscaping',
						value: '269',
					},
					{
						name: 'Home Appliances',
						value: '271',
					},
					{
						name: 'Major Kitchen Appliances',
						value: '1293',
					},
					{
						name: 'Small Kitchen Appliances',
						value: '1292',
					},
					{
						name: 'Water Filters & Purifiers',
						value: '1371',
					},
					{
						name: 'Home Furnishings',
						value: '270',
					},
					{
						name: 'Clocks',
						value: '1363',
					},
					{
						name: 'Lamps & Lighting',
						value: '272',
					},
					{
						name: 'Rugs & Carpets',
						value: '1362',
					},
					{
						name: 'Sofas & Chairs',
						value: '1370',
					},
					{
						name: 'Home Improvement',
						value: '158',
					},
					{
						name: 'Construction & Power Tools',
						value: '950',
					},
					{
						name: 'Flooring',
						value: '832',
					},
					{
						name: 'House Painting & Finishing',
						value: '1232',
					},
					{
						name: 'Plumbing',
						value: '1153',
					},
					{
						name: 'Roofing',
						value: '1175',
					},
					{
						name: 'Home Storage & Shelving',
						value: '1348',
					},
					{
						name: 'Homemaking & Interior Decor',
						value: '137',
					},
					{
						name: 'Kitchen & Dining',
						value: '951',
					},
					{
						name: 'Cookware & Diningware',
						value: '120',
					},
					{
						name: 'Cutlery & Cutting Accessories',
						value: '1373',
					},
					{
						name: 'Laundry',
						value: '1364',
					},
					{
						name: 'Nursery & Playroom',
						value: '1372',
					},
					{
						name: 'Pest Control',
						value: '471',
					},
					{
						name: 'Swimming Pools & Spas',
						value: '952',
					},
					{
						name: 'Yard & Patio',
						value: '953',
					},
					{
						name: 'Internet & Telecom',
						value: '13',
					},
					{
						name: 'Communications Equipment',
						value: '385',
					},
					{
						name: 'Radio Equipment',
						value: '1182',
					},
					{
						name: 'Email & Messaging',
						value: '394',
					},
					{
						name: 'Microblogging',
						value: '1381',
					},
					{
						name: 'Text & Instant Messaging',
						value: '1379',
					},
					{
						name: 'Voice & Video Chat',
						value: '386',
					},
					{
						name: 'Mobile & Wireless',
						value: '382',
					},
					{
						name: 'Mobile & Wireless Accessories',
						value: '1171',
					},
					{
						name: 'Bluetooth Accessories',
						value: '1170',
					},
					{
						name: 'Mobile Phones',
						value: '390',
					},
					{
						name: 'Smart Phones',
						value: '1071',
					},
					{
						name: 'Search Engines',
						value: '485',
					},
					{
						name: 'People Search',
						value: '1234',
					},
					{
						name: 'Service Providers',
						value: '383',
					},
					{
						name: 'Cable & Satellite Providers',
						value: '501',
					},
					{
						name: 'ISPs',
						value: '104',
					},
					{
						name: 'Phone Service Providers',
						value: '384',
					},
					{
						name: 'Calling Cards',
						value: '389',
					},
					{
						name: 'Teleconferencing',
						value: '392',
					},
					{
						name: 'Web Services',
						value: '302',
					},
					{
						name: 'Affiliate Programs',
						value: '326',
					},
					{
						name: 'Web Design & Development',
						value: '422',
					},
					{
						name: 'Web Hosting & Domain Registration',
						value: '53',
					},
					{
						name: 'Web Stats & Analytics',
						value: '675',
					},
					{
						name: 'Jobs & Education',
						value: '958',
					},
					{
						name: 'Education',
						value: '74',
					},
					{
						name: 'Academic Conferences & Publications',
						value: '1289',
					},
					{
						name: 'Alumni & Reunions',
						value: '1015',
					},
					{
						name: 'Colleges & Universities',
						value: '372',
					},
					{
						name: 'Distance Learning',
						value: '367',
					},
					{
						name: 'Early Childhood Education',
						value: '1012',
					},
					{
						name: 'Foreign Language Study',
						value: '1266',
					},
					{
						name: 'Homeschooling',
						value: '791',
					},
					{
						name: 'Legal Education',
						value: '792',
					},
					{
						name: 'Primary & Secondary Schooling (K-12)',
						value: '371',
					},
					{
						name: 'Special Education',
						value: '1118',
					},
					{
						name: 'Standardized & Admissions Tests',
						value: '373',
					},
					{
						name: 'Study Abroad',
						value: '1308',
					},
					{
						name: 'Teaching & Classroom Resources',
						value: '700',
					},
					{
						name: 'Training & Certification',
						value: '1388',
					},
					{
						name: 'Vocational & Continuing Education',
						value: '369',
					},
					{
						name: 'Computer Education',
						value: '1229',
					},
					{
						name: 'Jobs',
						value: '60',
					},
					{
						name: 'Career Resources & Planning',
						value: '959',
					},
					{
						name: 'Job Listings',
						value: '960',
					},
					{
						name: 'Resumes & Portfolios',
						value: '961',
					},
					{
						name: 'Law & Government',
						value: '19',
					},
					{
						name: 'Government',
						value: '76',
					},
					{
						name: 'Courts & Judiciary',
						value: '1075',
					},
					{
						name: 'Embassies & Consulates',
						value: '962',
					},
					{
						name: 'Executive Branch',
						value: '963',
					},
					{
						name: 'Government Agencies',
						value: '1387',
					},
					{
						name: 'Government Contracting & Procurement',
						value: '1385',
					},
					{
						name: 'Intelligence & Counterterrorism',
						value: '1221',
					},
					{
						name: 'Legislative Branch',
						value: '964',
					},
					{
						name: 'Lobbying',
						value: '1386',
					},
					{
						name: 'Multilateral Organizations',
						value: '965',
					},
					{
						name: 'Public Finance',
						value: '1161',
					},
					{
						name: 'Public Policy',
						value: '1316',
					},
					{
						name: 'Drug Laws & Policy',
						value: '1314',
					},
					{
						name: 'Immigration Policy & Border Issues',
						value: '1313',
					},
					{
						name: 'International Relations',
						value: '521',
					},
					{
						name: 'Royalty',
						value: '702',
					},
					{
						name: 'State & Local Government',
						value: '966',
					},
					{
						name: 'Visa & Immigration',
						value: '555',
					},
					{
						name: 'Legal',
						value: '75',
					},
					{
						name: 'Accident & Personal Injury Law',
						value: '427',
					},
					{
						name: 'Bankruptcy',
						value: '423',
					},
					{
						name: 'Business & Corporate Law',
						value: '1272',
					},
					{
						name: 'Constitutional Law & Civil Rights',
						value: '967',
					},
					{
						name: 'Criminal Law',
						value: '424',
					},
					{
						name: 'Family Law',
						value: '522',
					},
					{
						name: 'Intellectual Property',
						value: '426',
					},
					{
						name: 'Labor & Employment Law',
						value: '701',
					},
					{
						name: 'Legal Services',
						value: '969',
					},
					{
						name: 'Product Liability',
						value: '970',
					},
					{
						name: 'Military',
						value: '366',
					},
					{
						name: 'Air Force',
						value: '1247',
					},
					{
						name: 'Army',
						value: '1248',
					},
					{
						name: 'Marines',
						value: '1250',
					},
					{
						name: 'Military History',
						value: '1288',
					},
					{
						name: 'Navy',
						value: '1249',
					},
					{
						name: 'Veterans',
						value: '793',
					},
					{
						name: 'Public Safety',
						value: '166',
					},
					{
						name: 'Crime & Justice',
						value: '704',
					},
					{
						name: 'Corporate & Financial Crime',
						value: '1181',
					},
					{
						name: 'Gangs & Organized Crime',
						value: '1312',
					},
					{
						name: 'Prisons & Corrections',
						value: '1284',
					},
					{
						name: 'Emergency Services',
						value: '168',
					},
					{
						name: 'Law Enforcement',
						value: '535',
					},
					{
						name: 'Security Products & Services',
						value: '705',
					},
					{
						name: 'Social Services',
						value: '508',
					},
					{
						name: 'Counseling Services',
						value: '511',
					},
					{
						name: 'Welfare & Unemployment',
						value: '706',
					},
					{
						name: 'News',
						value: '16',
					},
					{
						name: 'Broadcast & Network News',
						value: '112',
					},
					{
						name: 'Gossip & Tabloid News',
						value: '507',
					},
					{
						name: 'Scandals & Investigations',
						value: '1259',
					},
					{
						name: 'Local News',
						value: '572',
					},
					{
						name: 'Newspapers',
						value: '408',
					},
					{
						name: 'Politics',
						value: '396',
					},
					{
						name: 'Campaigns & Elections',
						value: '398',
					},
					{
						name: 'Left-Wing Politics',
						value: '410',
					},
					{
						name: 'Media Critics & Watchdogs',
						value: '1203',
					},
					{
						name: 'Opinion & Commentary',
						value: '1201',
					},
					{
						name: 'Political Polls & Surveys',
						value: '1202',
					},
					{
						name: 'Right-Wing Politics',
						value: '409',
					},
					{
						name: 'Sports News',
						value: '1077',
					},
					{
						name: 'Weather',
						value: '63',
					},
					{
						name: 'World News',
						value: '1209',
					},
					{
						name: 'Online Communities',
						value: '299',
					},
					{
						name: 'Blogging Resources & Services',
						value: '504',
					},
					{
						name: 'Dating & Personals',
						value: '55',
					},
					{
						name: 'Matrimonial Services',
						value: '546',
					},
					{
						name: 'Personals',
						value: '102',
					},
					{
						name: 'File Sharing & Hosting',
						value: '321',
					},
					{
						name: 'Forum & Chat Providers',
						value: '191',
					},
					{
						name: 'Online Goodies',
						value: '43',
					},
					{
						name: 'Clip Art & Animated GIFs',
						value: '1223',
					},
					{
						name: 'Skins Themes & Wallpapers',
						value: '578',
					},
					{
						name: 'Social Network Apps & Add-Ons',
						value: '847',
					},
					{
						name: 'Online Journals & Personal Sites',
						value: '582',
					},
					{
						name: 'Photo & Video Sharing',
						value: '275',
					},
					{
						name: 'Social Networks',
						value: '529',
					},
					{
						name: 'Virtual Worlds',
						value: '972',
					},
					{
						name: 'People & Society',
						value: '14',
					},
					{
						name: 'Disabled & Special Needs',
						value: '677',
					},
					{
						name: 'Ethnic & Identity Groups',
						value: '56',
					},
					{
						name: 'Africans & Diaspora',
						value: '579',
					},
					{
						name: 'African-Americans',
						value: '547',
					},
					{
						name: 'Arabs & Middle Easterners',
						value: '556',
					},
					{
						name: 'Asians & Diaspora',
						value: '1257',
					},
					{
						name: 'East Asians & Diaspora',
						value: '549',
					},
					{
						name: 'South Asians & Diaspora',
						value: '528',
					},
					{
						name: 'Southeast Asians & Pacific Islanders',
						value: '580',
					},
					{
						name: 'Discrimination & Identity Relations',
						value: '1205',
					},
					{
						name: 'Eastern Europeans',
						value: '682',
					},
					{
						name: 'Expatriate Communities',
						value: '973',
					},
					{
						name: 'Gay-Lesbian-Bisexual-Transgender',
						value: '113',
					},
					{
						name: 'Indigenous Peoples',
						value: '681',
					},
					{
						name: 'Native Americans',
						value: '171',
					},
					{
						name: 'Jewish Culture',
						value: '550',
					},
					{
						name: 'Latinos & Latin-Americans',
						value: '548',
					},
					{
						name: 'Western Europeans',
						value: '683',
					},
					{
						name: 'Family & Relationships',
						value: '1131',
					},
					{
						name: 'Etiquette',
						value: '1304',
					},
					{
						name: 'Family',
						value: '1132',
					},
					{
						name: 'Ancestry & Genealogy',
						value: '400',
					},
					{
						name: 'Baby & Pet Names',
						value: '1231',
					},
					{
						name: 'Parenting',
						value: '58',
					},
					{
						name: 'Adoption',
						value: '974',
					},
					{
						name: 'Babies & Toddlers',
						value: '1374',
					},
					{
						name: 'Baby Care & Hygiene',
						value: '115',
					},
					{
						name: 'Child Care',
						value: '403',
					},
					{
						name: 'Youth Camps',
						value: '402',
					},
					{
						name: 'Friendship',
						value: '1134',
					},
					{
						name: 'Marriage',
						value: '1133',
					},
					{
						name: 'Divorce & Separation',
						value: '1261',
					},
					{
						name: 'Romance',
						value: '1135',
					},
					{
						name: 'Troubled Relationships',
						value: '1260',
					},
					{
						name: 'Kids & Teens',
						value: '154',
					},
					{
						name: "Children's Interests",
						value: '679',
					},
					{
						name: 'Teen Interests',
						value: '680',
					},
					{
						name: 'Religion & Belief',
						value: '59',
					},
					{
						name: 'Astrology & Divination',
						value: '448',
					},
					{
						name: 'Buddhism',
						value: '862',
					},
					{
						name: 'Christianity',
						value: '864',
					},
					{
						name: 'Hinduism',
						value: '866',
					},
					{
						name: 'Islam',
						value: '868',
					},
					{
						name: 'Judaism',
						value: '869',
					},
					{
						name: 'Pagan & Esoteric Traditions',
						value: '1258',
					},
					{
						name: 'Places of Worship',
						value: '1296',
					},
					{
						name: 'Scientology',
						value: '1251',
					},
					{
						name: 'Self-Help & Motivational',
						value: '870',
					},
					{
						name: 'Skeptics & Non-Believers',
						value: '975',
					},
					{
						name: 'Spirituality',
						value: '101',
					},
					{
						name: 'Theology & Religious Study',
						value: '1340',
					},
					{
						name: 'Seniors & Retirement',
						value: '298',
					},
					{
						name: 'Social Issues & Advocacy',
						value: '54',
					},
					{
						name: 'Charity & Philanthropy',
						value: '57',
					},
					{
						name: 'Environmental Issues',
						value: '82',
					},
					{
						name: 'Climate Change & Global Warming',
						value: '1255',
					},
					{
						name: 'Housing & Development',
						value: '1166',
					},
					{
						name: 'Human Rights & Liberties',
						value: '1280',
					},
					{
						name: 'Poverty & Hunger',
						value: '1127',
					},
					{
						name: 'Privacy Issues',
						value: '1281',
					},
					{
						name: 'Reproductive Rights',
						value: '976',
					},
					{
						name: 'Same-Sex Marriage',
						value: '1301',
					},
					{
						name: 'Work & Labor Issues',
						value: '703',
					},
					{
						name: 'Unions & Labor Movement',
						value: '1121',
					},
					{
						name: 'Social Sciences',
						value: '509',
					},
					{
						name: 'Communications & Media Studies',
						value: '1302',
					},
					{
						name: 'Public Speaking',
						value: '1303',
					},
					{
						name: 'Demographics',
						value: '510',
					},
					{
						name: 'Economics',
						value: '520',
					},
					{
						name: 'Psychology',
						value: '543',
					},
					{
						name: 'Real Estate',
						value: '29',
					},
					{
						name: 'Apartments & Residential Rentals',
						value: '378',
					},
					{
						name: 'Commercial & Investment Real Estate',
						value: '1178',
					},
					{
						name: 'Property Development',
						value: '687',
					},
					{
						name: 'Property Inspections & Appraisals',
						value: '463',
					},
					{
						name: 'Property Management',
						value: '425',
					},
					{
						name: 'Real Estate Agencies',
						value: '96',
					},
					{
						name: 'Real Estate Listings',
						value: '1080',
					},
					{
						name: 'Timeshares & Vacation Properties',
						value: '1081',
					},
					{
						name: 'Reference',
						value: '533',
					},
					{
						name: 'Directories & Listings',
						value: '527',
					},
					{
						name: 'Business & Personal Listings',
						value: '377',
					},
					{
						name: 'General Reference',
						value: '980',
					},
					{
						name: 'Calculators & Reference Tools',
						value: '691',
					},
					{
						name: 'Dictionaries & Encyclopedias',
						value: '692',
					},
					{
						name: 'Educational Resources',
						value: '374',
					},
					{
						name: 'Forms Guides & Templates',
						value: '693',
					},
					{
						name: 'Legal Forms',
						value: '1137',
					},
					{
						name: 'How-To, DIY & Expert Content',
						value: '694',
					},
					{
						name: 'Public Records',
						value: '1136',
					},
					{
						name: 'Time & Calendars',
						value: '695',
					},
					{
						name: 'Geographic Reference',
						value: '1084',
					},
					{
						name: 'City & Local Guides',
						value: '1014',
					},
					{
						name: 'Maps',
						value: '268',
					},
					{
						name: 'Traffic & Public Transit',
						value: '685',
					},
					{
						name: 'Humanities',
						value: '474',
					},
					{
						name: 'History',
						value: '433',
					},
					{
						name: 'Myth & Folklore',
						value: '609',
					},
					{
						name: 'Philosophy',
						value: '1093',
					},
					{
						name: 'Language Resources',
						value: '108',
					},
					{
						name: 'Foreign Language Resources',
						value: '1264',
					},
					{
						name: 'Translation Tools & Resources',
						value: '1265',
					},
					{
						name: 'Libraries & Museums',
						value: '375',
					},
					{
						name: 'Technical Reference',
						value: '1233',
					},
					{
						name: 'Science',
						value: '174',
					},
					{
						name: 'Astronomy',
						value: '435',
					},
					{
						name: 'Biological Sciences',
						value: '440',
					},
					{
						name: 'Anatomy',
						value: '788',
					},
					{
						name: 'Flora & Fauna',
						value: '981',
					},
					{
						name: 'Genetics',
						value: '982',
					},
					{
						name: 'Neuroscience',
						value: '1226',
					},
					{
						name: 'Chemistry',
						value: '505',
					},
					{
						name: 'Computer Science',
						value: '1227',
					},
					{
						name: 'Machine Learning & Artificial Intelligence',
						value: '1299',
					},
					{
						name: 'Earth Sciences',
						value: '1168',
					},
					{
						name: 'Atmospheric Science',
						value: '1254',
					},
					{
						name: 'Geology',
						value: '443',
					},
					{
						name: 'Paleontology',
						value: '1169',
					},
					{
						name: 'Water & Marine Sciences',
						value: '441',
					},
					{
						name: 'Ecology & Environment',
						value: '442',
					},
					{
						name: 'Engineering & Technology',
						value: '231',
					},
					{
						name: 'Robotics',
						value: '1141',
					},
					{
						name: 'Mathematics',
						value: '436',
					},
					{
						name: 'Statistics',
						value: '1252',
					},
					{
						name: 'Physics',
						value: '444',
					},
					{
						name: 'Scientific Equipment',
						value: '445',
					},
					{
						name: 'Scientific Institutions',
						value: '446',
					},
					{
						name: 'Shopping',
						value: '18',
					},
					{
						name: 'Apparel',
						value: '68',
					},
					{
						name: 'Apparel Services',
						value: '1228',
					},
					{
						name: 'Athletic Apparel',
						value: '983',
					},
					{
						name: 'Casual Apparel',
						value: '984',
					},
					{
						name: 'T-Shirts',
						value: '428',
					},
					{
						name: "Children's Clothing",
						value: '985',
					},
					{
						name: 'Clothing Accessories',
						value: '124',
					},
					{
						name: 'Gems & Jewelry',
						value: '350',
					},
					{
						name: 'Handbags & Purses',
						value: '986',
					},
					{
						name: 'Watches',
						value: '987',
					},
					{
						name: 'Costumes',
						value: '988',
					},
					{
						name: 'Eyewear',
						value: '989',
					},
					{
						name: 'Footwear',
						value: '697',
					},
					{
						name: 'Formal Wear',
						value: '990',
					},
					{
						name: 'Headwear',
						value: '991',
					},
					{
						name: "Men's Clothing",
						value: '992',
					},
					{
						name: 'Outerwear',
						value: '993',
					},
					{
						name: 'Sleepwear',
						value: '994',
					},
					{
						name: 'Swimwear',
						value: '995',
					},
					{
						name: 'Undergarments',
						value: '530',
					},
					{
						name: 'Uniforms & Workwear',
						value: '996',
					},
					{
						name: "Women's Clothing",
						value: '997',
					},
					{
						name: 'Auctions',
						value: '292',
					},
					{
						name: 'Classifieds',
						value: '61',
					},
					{
						name: 'Consumer Resources',
						value: '69',
					},
					{
						name: 'Consumer Advocacy & Protection',
						value: '97',
					},
					{
						name: 'Coupons & Discount Offers',
						value: '365',
					},
					{
						name: 'Customer Services',
						value: '450',
					},
					{
						name: 'Warranties & Service Contracts',
						value: '451',
					},
					{
						name: 'Product Reviews & Price Comparisons',
						value: '353',
					},
					{
						name: 'Price Comparisons',
						value: '352',
					},
					{
						name: 'Entertainment Media',
						value: '1143',
					},
					{
						name: 'Entertainment Media Rentals',
						value: '1144',
					},
					{
						name: 'Luxury Goods',
						value: '696',
					},
					{
						name: 'Mass Merchants & Department Stores',
						value: '73',
					},
					{
						name: 'Shopping Portals & Search Engines',
						value: '531',
					},
					{
						name: 'Sporting Goods',
						value: '263',
					},
					{
						name: 'Sports Memorabilia',
						value: '1083',
					},
					{
						name: 'Swap Meets & Outdoor Markets',
						value: '1210',
					},
					{
						name: 'Tobacco Products',
						value: '123',
					},
					{
						name: 'Toys',
						value: '432',
					},
					{
						name: 'Wholesalers & Liquidators',
						value: '1225',
					},
					{
						name: 'Sports',
						value: '20',
					},
					{
						name: 'College Sports',
						value: '1073',
					},
					{
						name: 'Combat Sports',
						value: '514',
					},
					{
						name: 'Boxing',
						value: '515',
					},
					{
						name: 'Martial Arts',
						value: '516',
					},
					{
						name: 'Wrestling',
						value: '512',
					},
					{
						name: 'Extreme Sports',
						value: '554',
					},
					{
						name: 'Drag & Street Racing',
						value: '1206',
					},
					{
						name: 'Stunts & Dangerous Feats',
						value: '1207',
					},
					{
						name: 'Fantasy Sports',
						value: '998',
					},
					{
						name: 'Individual Sports',
						value: '1000',
					},
					{
						name: 'Golf',
						value: '261',
					},
					{
						name: 'Gymnastics',
						value: '519',
					},
					{
						name: 'Racquet Sports',
						value: '262',
					},
					{
						name: 'Tennis',
						value: '1376',
					},
					{
						name: 'Skate Sports',
						value: '1126',
					},
					{
						name: 'Track & Field',
						value: '518',
					},
					{
						name: 'Motor Sports',
						value: '180',
					},
					{
						name: 'Sports Coaching & Training',
						value: '1082',
					},
					{
						name: 'Team Sports',
						value: '1001',
					},
					{
						name: 'American Football',
						value: '258',
					},
					{
						name: 'Baseball',
						value: '259',
					},
					{
						name: 'Basketball',
						value: '264',
					},
					{
						name: 'Cheerleading',
						value: '534',
					},
					{
						name: 'Cricket',
						value: '296',
					},
					{
						name: 'Handball',
						value: '1017',
					},
					{
						name: 'Hockey',
						value: '260',
					},
					{
						name: 'Rugby',
						value: '517',
					},
					{
						name: 'Soccer',
						value: '294',
					},
					{
						name: 'Volleyball',
						value: '699',
					},
					{
						name: 'Winter Sports',
						value: '265',
					},
					{
						name: 'Ice Skating',
						value: '1149',
					},
					{
						name: 'Skiing & Snowboarding',
						value: '1148',
					},
					{
						name: 'World Sports Competitions',
						value: '1198',
					},
					{
						name: 'Olympics',
						value: '513',
					},
					{
						name: 'Travel',
						value: '67',
					},
					{
						name: 'Air Travel',
						value: '203',
					},
					{
						name: 'Bus & Rail',
						value: '708',
					},
					{
						name: 'Car Rental & Taxi Services',
						value: '205',
					},
					{
						name: 'Carpooling & Ridesharing',
						value: '1339',
					},
					{
						name: 'Cruises & Charters',
						value: '206',
					},
					{
						name: 'Hotels & Accommodations',
						value: '179',
					},
					{
						name: 'Luggage & Travel Accessories',
						value: '1003',
					},
					{
						name: 'Specialty Travel',
						value: '1004',
					},
					{
						name: 'Adventure Travel',
						value: '707',
					},
					{
						name: 'Agritourism',
						value: '1389',
					},
					{
						name: 'Ecotourism',
						value: '1005',
					},
					{
						name: 'Sightseeing Tours',
						value: '1390',
					},
					{
						name: 'Vineyards & Wine Tourism',
						value: '1391',
					},
					{
						name: 'Tourist Destinations',
						value: '208',
					},
					{
						name: 'Beaches & Islands',
						value: '1074',
					},
					{
						name: 'Historical Sites & Buildings',
						value: '1006',
					},
					{
						name: 'Lakes & Rivers',
						value: '1120',
					},
					{
						name: 'Mountain & Ski Resorts',
						value: '1119',
					},
					{
						name: 'Regional Parks & Gardens',
						value: '1007',
					},
					{
						name: 'Theme Parks',
						value: '1008',
					},
					{
						name: 'Travel Agencies & Services',
						value: '1010',
					},
					{
						name: 'Tourist Boards & Visitor Centers',
						value: '1392',
					},
					{
						name: 'Vacation Offers',
						value: '1019',
					},
					{
						name: 'Travel Guides & Travelogues',
						value: '1011',
					},
				],
			},
			{
				displayName: '`gprop` Property',
				name: 'gprop',
				description:
					'Parameter is used for sorting results by property. The default property is set to Web Search (activated when the value of gprop parameter is not set or empty). Other available options:images - Image Searchnews - News Searchfroogle - Google Shoppingyoutube - YouTube Search',
				default: '',
				routing: {
					request: {
						qs: {
							gprop: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Web Search',
						value: '',
					},
					{
						name: 'Image Search',
						value: 'images',
					},
					{
						name: 'News Search',
						value: 'news',
					},
					{
						name: 'Google Shopping',
						value: 'froogle',
					},
					{
						name: 'YouTube Search',
						value: 'youtube',
					},
				],
			},
			{
				displayName: '`date` Date',
				name: 'date',
				description:
					'Parameter is used to define a date. Available options:now 1-H - Past hournow 4-H - Past 4 hoursnow 1-d - Past daynow 7-d - Past 7 daystoday 1-m - Past 30 daystoday 3-m - Past 90 daystoday 12-m - Past 12 monthstoday 5-y - Past 5 yearsall - 2004 - presentYou can also pass custom values:Dates from 2004 to present: yyyy-mm-dd yyyy-mm-dd (e.g. 2021-10-15 2022-05-25)Dates with hours within a week range: yyyy-mm-ddThh yyyy-mm-ddThh (e.g. 2022-05-19T10 2022-05-24T22). Hours will be calculated depending on the tz (time zone) parameter.',
				default: 'today 12-m',
				routing: {
					request: {
						qs: {
							date: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`csv` Show CSV',
				name: 'csv',
				description:
					'Whether to retrieve the CSV results. Set the parameter to true to retrieve CSV results as an array.',
				default: false,
				routing: {
					request: {
						qs: {
							csv: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`include_low_search_volume` Include Low Search Volume Regions',
				name: 'include_low_search_volume',
				description:
					'Whether to include low search volume regions in the results. Set the parameter to true to include low search volume regions in the results. This parameter is ignored if data_type is not set to GEO_MAP or GEO_MAP_0.',
				default: false,
				routing: {
					request: {
						qs: {
							include_low_search_volume: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			...serpApiFields,
		],
	},
];
