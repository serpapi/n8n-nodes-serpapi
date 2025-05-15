import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { LanguageOptions } from './GoogleOptions';

export const googleTrendsFields: INodeProperties[] = [
	{
		displayName: 'Search Query (q)',
		name: 'q',
		description:
			'Parameter defines the query or queries you want to search. See docs for more information: https://serpapi.com/google-trends-api#api-parameters-search-query-q.',
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
				displayName: 'Language (hl)',
				name: 'hl',
				description: 'Parameter defines the language to use for the search',
				default: 'en',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: LanguageOptions,
			},
			{
				displayName: 'Location (geo)',
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
						name: "'Amran",
						value: 'YE-AM',
					},
					{
						name: "'Eua",
						value: 'TO-01',
					},
					{
						name: "A'ana",
						value: 'WS-AA',
					},
					{
						name: 'Aargau',
						value: 'CH-AG',
					},
					{
						name: 'Abia',
						value: 'NG-AB',
					},
					{
						name: 'Abilene-Sweetwater TX',
						value: '662',
					},
					{
						name: 'Abkhazia',
						value: 'GE-AB',
					},
					{
						name: 'Abruzzo',
						value: 'IT-65',
					},
					{
						name: 'Abu Dhabi',
						value: 'AE-AZ',
					},
					{
						name: 'Abyan',
						value: 'YE-AB',
					},
					{
						name: 'Aceh',
						value: 'ID-AC',
					},
					{
						name: 'Acklins',
						value: 'BS-AK',
					},
					{
						name: 'Acquaviva',
						value: 'SM-01',
					},
					{
						name: 'Ad Dakhiliyah ‍Governorate',
						value: 'OM-DA',
					},
					{
						name: "Ad Dali'",
						value: 'YE-DA',
					},
					{
						name: 'Ad Dhahirah Governorate',
						value: 'OM-ZA',
					},
					{
						name: 'Adamawa',
						value: 'NG-AD',
					},
					{
						name: 'Adamawa Region',
						value: 'CM-AD',
					},
					{
						name: 'Adana',
						value: 'TR-01',
					},
					{
						name: 'Ādaži Municipality',
						value: 'LV-011',
					},
					{
						name: 'Addis Ababa',
						value: 'ET-AA',
					},
					{
						name: 'Aden',
						value: 'YE-AD',
					},
					{
						name: 'Adıyaman Province',
						value: 'TR-02',
					},
					{
						name: 'Adjara',
						value: 'GE-AJ',
					},
					{
						name: 'Adrar',
						value: 'MR-07',
					},
					{
						name: 'Adrar Province',
						value: 'DZ-01',
					},
					{
						name: 'Adygea',
						value: 'RU-AD',
					},
					{
						name: 'Afar',
						value: 'ET-AF',
					},
					{
						name: 'Afghanistan',
						value: 'AF',
					},
					{
						name: 'Afyonkarahisar Province',
						value: 'TR-03',
					},
					{
						name: 'Agadez',
						value: 'NE-1',
					},
					{
						name: 'Agalega Islands',
						value: 'MU-AG',
					},
					{
						name: 'Aglona Municipality',
						value: 'LV-001',
					},
					{
						name: 'Agnebi',
						value: 'CI-16',
					},
					{
						name: 'Ağrı',
						value: 'TR-04',
					},
					{
						name: 'Aguascalientes',
						value: 'MX-AGU',
					},
					{
						name: 'Ahal',
						value: 'TM-A',
					},
					{
						name: 'Ahuachapan',
						value: 'SV-AH',
					},
					{
						name: 'Aichi Prefecture',
						value: 'JP-23',
					},
					{
						name: 'Aiga-i-le-Tai',
						value: 'WS-AL',
					},
					{
						name: 'Aileu',
						value: 'TL-AL',
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
						name: 'Aimeliik',
						value: 'PW-002',
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
						name: 'Ainaro',
						value: 'TL-AN',
					},
					{
						name: 'Airai',
						value: 'PW-004',
					},
					{
						name: 'Aiwo',
						value: 'NR-01',
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
						name: 'Ajloun Governorate',
						value: 'JO-AJ',
					},
					{
						name: 'Ajman',
						value: 'AE-AJ',
					},
					{
						name: 'Akershus',
						value: 'NO-02',
					},
					{
						name: 'Akita Prefecture',
						value: 'JP-05',
					},
					{
						name: 'Akmola Region',
						value: 'KZ-AKM',
					},
					{
						name: 'Aknīste Municipality',
						value: 'LV-004',
					},
					{
						name: 'Aksaray',
						value: 'TR-68',
					},
					{
						name: 'Aktobe Region',
						value: 'KZ-AKT',
					},
					{
						name: 'Akwa Ibom',
						value: 'NG-AK',
					},
					{
						name: 'Al Ahmadi Governorate',
						value: 'KW-AH',
					},
					{
						name: 'Al Anbar',
						value: 'IQ-AN',
					},
					{
						name: 'Al Asimah Governate',
						value: 'KW-KU',
					},
					{
						name: 'Al Bahah Province',
						value: 'SA-11',
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
						name: "Al Bayda'",
						value: 'YE-BA',
					},
					{
						name: 'Al Buraymi Governorate',
						value: 'OM-BU',
					},
					{
						name: 'Al Butnan',
						value: 'LY-BU',
					},
					{
						name: 'Al Daayen',
						value: 'QA-ZA',
					},
					{
						name: 'Al Farwaniyah Governorate',
						value: 'KW-FA',
					},
					{
						name: 'Al Hasakah',
						value: 'SY-HA',
					},
					{
						name: 'Al Hudaydah',
						value: 'YE-HU',
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
						name: 'Al Jahra Governorate',
						value: 'KW-JA',
					},
					{
						name: 'Al Jawf',
						value: 'YE-JA',
					},
					{
						name: 'Al Jazirah',
						value: 'SD-GZ',
					},
					{
						name: 'Al Jowf',
						value: 'SA-12',
					},
					{
						name: 'Al Jufrah',
						value: 'LY-JU',
					},
					{
						name: 'Al Khor',
						value: 'QA-KH',
					},
					{
						name: 'Al Kufrah',
						value: 'LY-KF',
					},
					{
						name: 'Al Madinah Province',
						value: 'SA-03',
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
						name: 'Al Marj',
						value: 'LY-MJ',
					},
					{
						name: 'Al Murqub',
						value: 'LY-MB',
					},
					{
						name: 'Al Muthanna',
						value: 'IQ-MU',
					},
					{
						name: 'Al Qadarif',
						value: 'SD-GD',
					},
					{
						name: 'Al Qalyubia Governorate',
						value: 'EG-KB',
					},
					{
						name: 'Al Qassim',
						value: 'SA-05',
					},
					{
						name: 'Al Rayyan Municipality',
						value: 'QA-RA',
					},
					{
						name: 'Al Wahat',
						value: 'LY-WA',
					},
					{
						name: 'Al Wahdah',
						value: 'SS-UY',
					},
					{
						name: 'Al Wakrah Municipality',
						value: 'QA-WA',
					},
					{
						name: 'Al Wusta Governorate',
						value: 'OM-WU',
					},
					{
						name: 'Al-Buhayrat',
						value: 'SS-LK',
					},
					{
						name: 'Al-Qadisiyyah',
						value: 'IQ-QA',
					},
					{
						name: 'Alabama',
						value: 'US-AL',
					},
					{
						name: 'Alajuela',
						value: 'CR-A',
					},
					{
						name: 'Åland Islands',
						value: 'AX',
					},
					{
						name: 'Alaska',
						value: 'US-AK',
					},
					{
						name: 'Alba County',
						value: 'RO-AB',
					},
					{
						name: 'Albania',
						value: 'AL',
					},
					{
						name: 'Albany GA',
						value: '525',
					},
					{
						name: 'Albany-Schenectady-Troy NY',
						value: '532',
					},
					{
						name: 'Alberta',
						value: 'CA-AB',
					},
					{
						name: 'Alborz',
						value: 'IR-32',
					},
					{
						name: 'Albuquerque-Santa Fe NM',
						value: '790',
					},
					{
						name: 'Aleppo Governorate',
						value: 'SY-HL',
					},
					{
						name: 'Alexandria Governorate',
						value: 'EG-ALX',
					},
					{
						name: 'Alexandria LA',
						value: '644',
					},
					{
						name: 'Algeria',
						value: 'DZ',
					},
					{
						name: 'Algiers Province',
						value: 'DZ-16',
					},
					{
						name: 'Ali Sabieh',
						value: 'DJ-AS',
					},
					{
						name: 'Alibori',
						value: 'BJ-AL',
					},
					{
						name: 'Almaty Region',
						value: 'KZ-ALM',
					},
					{
						name: 'Alo',
						value: 'WF-ALO',
					},
					{
						name: 'Aloja Municipality',
						value: 'LV-005',
					},
					{
						name: 'Alpena MI',
						value: '583',
					},
					{
						name: 'Alsace',
						value: 'FR-A',
					},
					{
						name: 'Alsunga Municipality',
						value: 'LV-006',
					},
					{
						name: 'Alta Verapaz',
						value: 'GT-AV',
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
						name: 'Alto Paraguay',
						value: 'PY-16',
					},
					{
						name: 'Alto Parana',
						value: 'PY-10',
					},
					{
						name: 'Alūksne Municipality',
						value: 'LV-007',
					},
					{
						name: 'Alytus County',
						value: 'LT-AL',
					},
					{
						name: 'Amambay Department',
						value: 'PY-13',
					},
					{
						name: 'Amanat Al Asimah',
						value: 'YE-SA',
					},
					{
						name: 'Amarillo TX',
						value: '634',
					},
					{
						name: 'Amasya Province',
						value: 'TR-05',
					},
					{
						name: 'Amata Municipality',
						value: 'LV-008',
					},
					{
						name: 'Amazonas (Peru)',
						value: 'PE-AMA',
					},
					{
						name: 'Amazonas (Venezuelan state)',
						value: 'VE-Z',
					},
					{
						name: 'Amazonas Department',
						value: 'CO-AMA',
					},
					{
						name: 'American Samoa',
						value: 'AS',
					},
					{
						name: 'Amhara',
						value: 'ET-AM',
					},
					{
						name: 'Amman Governorate',
						value: 'JO-AM',
					},
					{
						name: 'Amnat Charoen',
						value: 'TH-37',
					},
					{
						name: 'Amur Oblast',
						value: 'RU-AMU',
					},
					{
						name: 'An Giang Province',
						value: 'VN-44',
					},
					{
						name: 'An Nuqat al Khams',
						value: 'LY-NQ',
					},
					{
						name: 'An-Najaf',
						value: 'IQ-NA',
					},
					{
						name: 'Anabar',
						value: 'NR-02',
					},
					{
						name: 'Anambra',
						value: 'NG-AN',
					},
					{
						name: 'Ancash',
						value: 'PE-ANC',
					},
					{
						name: 'Anchorage AK',
						value: '743',
					},
					{
						name: 'Andalusia',
						value: 'ES-AN',
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
						name: 'Andijan Province',
						value: 'UZ-AN',
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
						name: 'Andrijevica',
						value: 'ME-01',
					},
					{
						name: 'Anenii Noi',
						value: 'MD-AN',
					},
					{
						name: 'Anetan',
						value: 'NR-03',
					},
					{
						name: 'Ang Thong',
						value: 'TH-15',
					},
					{
						name: 'Angaur',
						value: 'PW-010',
					},
					{
						name: 'Angola',
						value: 'AO',
					},
					{
						name: 'Anguilla',
						value: 'AI',
					},
					{
						name: 'Anhui',
						value: 'CN-34',
					},
					{
						name: 'Anibare',
						value: 'NR-04',
					},
					{
						name: 'Ankara',
						value: 'TR-06',
					},
					{
						name: 'Annaba Province',
						value: 'DZ-23',
					},
					{
						name: 'Annobón',
						value: 'GQ-AN',
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
						name: 'Anse La Raye',
						value: 'LC-01',
					},
					{
						name: 'Anse Royale',
						value: 'SC-05',
					},
					{
						name: 'Anseba',
						value: 'ER-AN',
					},
					{
						name: 'Antalya',
						value: 'TR-07',
					},
					{
						name: 'Antananarivo',
						value: 'MG-T',
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
						name: 'Antioquia',
						value: 'CO-ANT',
					},
					{
						name: 'Antofagasta Region',
						value: 'CL-AN',
					},
					{
						name: 'Antsiranana',
						value: 'MG-D',
					},
					{
						name: 'Anzoategui',
						value: 'VE-B',
					},
					{
						name: 'Aomori Prefecture',
						value: 'JP-02',
					},
					{
						name: 'Aosta',
						value: 'IT-23',
					},
					{
						name: 'Ape Municipality',
						value: 'LV-009',
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
						name: 'Apulia',
						value: 'IT-75',
					},
					{
						name: 'Apure',
						value: 'VE-C',
					},
					{
						name: 'Apurimac',
						value: 'PE-APU',
					},
					{
						name: 'Aqaba Governorate',
						value: 'JO-AQ',
					},
					{
						name: 'Aquitaine',
						value: 'FR-B',
					},
					{
						name: 'Ar-Raqqah Governorate',
						value: 'SY-RA',
					},
					{
						name: 'Arad County',
						value: 'RO-AR',
					},
					{
						name: 'Aragatsotn Province',
						value: 'AM-AG',
					},
					{
						name: 'Aragon',
						value: 'ES-AR',
					},
					{
						name: 'Aragua',
						value: 'VE-D',
					},
					{
						name: 'Ararat Province',
						value: 'AM-AR',
					},
					{
						name: 'Arauca',
						value: 'CO-ARA',
					},
					{
						name: 'Araucania',
						value: 'CL-AR',
					},
					{
						name: 'Ardabil',
						value: 'IR-03',
					},
					{
						name: 'Ardahan Province',
						value: 'TR-75',
					},
					{
						name: 'Arequipa',
						value: 'PE-ARE',
					},
					{
						name: 'Argentina',
						value: 'AR',
					},
					{
						name: 'Argeș County',
						value: 'RO-AG',
					},
					{
						name: 'Ariana',
						value: 'TN-12',
					},
					{
						name: 'Arica y Parinacota Region',
						value: 'CL-AP',
					},
					{
						name: 'Arima',
						value: 'TT-ARI',
					},
					{
						name: 'Arizona',
						value: 'US-AZ',
					},
					{
						name: 'Arkansas',
						value: 'US-AR',
					},
					{
						name: 'Arkhangai',
						value: 'MN-073',
					},
					{
						name: 'Arkhangelsk Oblast',
						value: 'RU-ARK',
					},
					{
						name: 'Armavir Province',
						value: 'AM-AV',
					},
					{
						name: 'Armenia',
						value: 'AM',
					},
					{
						name: 'Arno Atoll',
						value: 'MH-ARN',
					},
					{
						name: 'Arta',
						value: 'DJ-AR',
					},
					{
						name: 'Artemisa Province',
						value: 'CU-15',
					},
					{
						name: 'Artibonite',
						value: 'HT-AR',
					},
					{
						name: 'Artigas Department',
						value: 'UY-AR',
					},
					{
						name: 'Artvin',
						value: 'TR-08',
					},
					{
						name: 'Aruba',
						value: 'AW',
					},
					{
						name: 'Arunachal Pradesh',
						value: 'IN-AR',
					},
					{
						name: 'Arusha',
						value: 'TZ-01',
					},
					{
						name: 'As-Suwayda Governorate',
						value: 'SY-SU',
					},
					{
						name: 'Ascension',
						value: 'SH-AC',
					},
					{
						name: 'Aseer Province',
						value: 'SA-14',
					},
					{
						name: 'Ash Sharqia Governorate',
						value: 'EG-SHR',
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
						name: 'Ashanti Region',
						value: 'GH-AH',
					},
					{
						name: 'Ashgabat',
						value: 'TM-S',
					},
					{
						name: 'Assaba',
						value: 'MR-03',
					},
					{
						name: 'Assam',
						value: 'IN-AS',
					},
					{
						name: 'Assiut Governorate',
						value: 'EG-AST',
					},
					{
						name: 'Astrakhan Oblast',
						value: 'RU-AST',
					},
					{
						name: 'Asturias',
						value: 'ES-AS',
					},
					{
						name: 'Asunción',
						value: 'PY-ASU',
					},
					{
						name: 'Aswan Governorate',
						value: 'EG-ASN',
					},
					{
						name: 'Atacama Region',
						value: 'CL-AT',
					},
					{
						name: 'Atakora',
						value: 'BJ-AK',
					},
					{
						name: 'Atlanta GA',
						value: '524',
					},
					{
						name: 'Atlantico',
						value: 'CO-ATL',
					},
					{
						name: 'Atlantida',
						value: 'HN-AT',
					},
					{
						name: 'Atlantique',
						value: 'BJ-AQ',
					},
					{
						name: 'Attapeu',
						value: 'LA-AT',
					},
					{
						name: 'Atua',
						value: 'WS-AT',
					},
					{
						name: 'Atyrau Province',
						value: 'KZ-ATY',
					},
					{
						name: 'Au Cap',
						value: 'SC-04',
					},
					{
						name: 'Auce Municipality',
						value: 'LV-010',
					},
					{
						name: 'Auckland',
						value: 'NZ-AUK',
					},
					{
						name: 'Augusta GA',
						value: '520',
					},
					{
						name: 'Aur Atoll',
						value: 'MH-AUR',
					},
					{
						name: 'Aust-Agder',
						value: 'NO-09',
					},
					{
						name: 'Austin TX',
						value: '635',
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
						name: 'Austria',
						value: 'AT',
					},
					{
						name: 'Autonomous City of Buenos Aires',
						value: 'AR-C',
					},
					{
						name: 'Autonomous Region in Muslim Mindanao',
						value: 'PH-14',
					},
					{
						name: 'Autonomous Region of Bougainville',
						value: 'PG-NSB',
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
						name: 'Auvergne',
						value: 'FR-C',
					},
					{
						name: 'Aveiro District',
						value: 'PT-01',
					},
					{
						name: 'Awdal',
						value: 'SO-AW',
					},
					{
						name: 'Ayacucho',
						value: 'PE-AYA',
					},
					{
						name: 'Aydın Province',
						value: 'TR-09',
					},
					{
						name: 'Ayeyarwady',
						value: 'MM-07',
					},
					{
						name: 'Az Zawiyah',
						value: 'LY-ZA',
					},
					{
						name: 'Azad Jammu and Kashmir',
						value: 'PK-JK',
					},
					{
						name: 'Azerbaijan',
						value: 'AZ',
					},
					{
						name: 'Azores',
						value: 'PT-20',
					},
					{
						name: 'Azua Province',
						value: 'DO-02',
					},
					{
						name: 'Azuay',
						value: 'EC-A',
					},
					{
						name: 'Ba Ria - Vung Tau',
						value: 'VN-43',
					},
					{
						name: 'Babil',
						value: 'IQ-BB',
					},
					{
						name: 'Babīte Municipality',
						value: 'LV-012',
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
						name: 'Bacău County',
						value: 'RO-BC',
					},
					{
						name: 'Bács-Kiskun',
						value: 'HU-BK',
					},
					{
						name: 'Badakhshan',
						value: 'AF-BDS',
					},
					{
						name: 'Baden-Württemberg',
						value: 'DE-BW',
					},
					{
						name: 'Badghis',
						value: 'AF-BDG',
					},
					{
						name: 'Bafata',
						value: 'GW-BA',
					},
					{
						name: 'Bafing',
						value: 'CI-17',
					},
					{
						name: 'Baghdad',
						value: 'IQ-BG',
					},
					{
						name: 'Baghlan',
						value: 'AF-BGL',
					},
					{
						name: 'Bago Region',
						value: 'MM-02',
					},
					{
						name: 'Bahamas',
						value: 'BS',
					},
					{
						name: 'Bahr El Gazel',
						value: 'TD-BG',
					},
					{
						name: 'Bahrain',
						value: 'BH',
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
						name: 'Baiti',
						value: 'NR-05',
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
						name: 'Baja Verapaz Department',
						value: 'GT-BV',
					},
					{
						name: 'Bakersfield CA',
						value: '800',
					},
					{
						name: 'Bakool',
						value: 'SO-BK',
					},
					{
						name: 'Baldone Municipality',
						value: 'LV-013',
					},
					{
						name: 'Balearic Islands',
						value: 'ES-IB',
					},
					{
						name: 'Bali',
						value: 'ID-BA',
					},
					{
						name: 'Balıkesir Province',
						value: 'TR-10',
					},
					{
						name: 'Balkan',
						value: 'TM-B',
					},
					{
						name: 'Balkh',
						value: 'AF-BAL',
					},
					{
						name: 'Balochistan',
						value: 'PK-BA',
					},
					{
						name: 'Balqa Governorate',
						value: 'JO-BA',
					},
					{
						name: 'Balti',
						value: 'MD-BA',
					},
					{
						name: 'Baltimore MD',
						value: '512',
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
						name: 'Balzers',
						value: 'LI-01',
					},
					{
						name: 'Bamako',
						value: 'ML-BKO',
					},
					{
						name: 'Bamingui-Bangoran',
						value: 'CF-BB',
					},
					{
						name: 'Bamiyan',
						value: 'AF-BAM',
					},
					{
						name: 'Banaadir',
						value: 'SO-BN',
					},
					{
						name: 'Bandundu',
						value: 'CD-BN',
					},
					{
						name: 'Banghazi',
						value: 'LY-BA',
					},
					{
						name: 'Bangka Belitung Islands',
						value: 'ID-BB',
					},
					{
						name: 'Bangkok',
						value: 'TH-10',
					},
					{
						name: 'Bangladesh',
						value: 'BD',
					},
					{
						name: 'Bangor ME',
						value: '537',
					},
					{
						name: 'Bangui',
						value: 'CF-BGF',
					},
					{
						name: 'Banjul',
						value: 'GM-B',
					},
					{
						name: 'Banská Bystrica Region',
						value: 'SK-BC',
					},
					{
						name: 'Banteay Meanchey',
						value: 'KH-1',
					},
					{
						name: 'Banten',
						value: 'ID-BT',
					},
					{
						name: 'Baoruco Province',
						value: 'DO-03',
					},
					{
						name: 'Bar',
						value: 'ME-02',
					},
					{
						name: 'Barahona Province',
						value: 'DO-04',
					},
					{
						name: 'Baranya',
						value: 'HU-BA',
					},
					{
						name: 'Barbados',
						value: 'BB',
					},
					{
						name: 'Barbuda',
						value: 'AG-10',
					},
					{
						name: 'Bari',
						value: 'SO-BR',
					},
					{
						name: 'Barima-Waini',
						value: 'GY-BA',
					},
					{
						name: 'Barinas',
						value: 'VE-E',
					},
					{
						name: 'Barisal Division',
						value: 'BD-A',
					},
					{
						name: 'Bartın Province',
						value: 'TR-74',
					},
					{
						name: 'Bas Congo',
						value: 'CD-BC',
					},
					{
						name: 'Bas-Sassandra',
						value: 'CI-09',
					},
					{
						name: 'Basarabeasca District',
						value: 'MD-BS',
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
						name: 'Basilicata',
						value: 'IT-77',
					},
					{
						name: 'Basque Country',
						value: 'ES-PV',
					},
					{
						name: 'Basrah',
						value: 'IQ-BA',
					},
					{
						name: 'Basse-Kotto',
						value: 'CF-BK',
					},
					{
						name: 'Batha',
						value: 'TD-BA',
					},
					{
						name: 'Batken Province',
						value: 'KG-B',
					},
					{
						name: 'Batman',
						value: 'TR-72',
					},
					{
						name: 'Batna Province',
						value: 'DZ-05',
					},
					{
						name: 'Baton Rouge LA',
						value: '716',
					},
					{
						name: 'Battambang',
						value: 'KH-2',
					},
					{
						name: 'Baucau',
						value: 'TL-BA',
					},
					{
						name: 'Bauchi',
						value: 'NG-BA',
					},
					{
						name: 'Bauska Municipality',
						value: 'LV-016',
					},
					{
						name: 'Bavaria',
						value: 'DE-BY',
					},
					{
						name: 'Bay',
						value: 'SO-BY',
					},
					{
						name: 'Bay Islands',
						value: 'HN-IB',
					},
					{
						name: 'Bay Of Plenty',
						value: 'NZ-BOP',
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
						name: 'Bayburt',
						value: 'TR-69',
					},
					{
						name: 'Bayelsa',
						value: 'NG-BY',
					},
					{
						name: 'Beau Vallon',
						value: 'SC-08',
					},
					{
						name: 'Beaumont-Port Arthur TX',
						value: '692',
					},
					{
						name: 'Béchar',
						value: 'DZ-08',
					},
					{
						name: 'Beijing',
						value: 'CN-11',
					},
					{
						name: 'Beirut',
						value: 'LB-BA',
					},
					{
						name: 'Beja',
						value: 'TN-31',
					},
					{
						name: 'Beja District',
						value: 'PT-02',
					},
					{
						name: 'Béjaïa',
						value: 'DZ-06',
					},
					{
						name: 'Békés County',
						value: 'HU-BE',
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
						name: 'Belait',
						value: 'BN-BE',
					},
					{
						name: 'Belarus',
						value: 'BY',
					},
					{
						name: 'Belgium',
						value: 'BE',
					},
					{
						name: 'Belgorod Oblast',
						value: 'RU-BEL',
					},
					{
						name: 'Belize',
						value: 'BZ',
					},
					{
						name: 'Ben Arous',
						value: 'TN-13',
					},
					{
						name: 'Ben Tre',
						value: 'VN-50',
					},
					{
						name: 'Bend OR',
						value: '821',
					},
					{
						name: 'Bender',
						value: 'MD-BD',
					},
					{
						name: 'Bengkulu',
						value: 'ID-BE',
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
						name: 'Beni Department',
						value: 'BO-B',
					},
					{
						name: 'Beni Suef Governorate',
						value: 'EG-BNS',
					},
					{
						name: 'Benin',
						value: 'BJ',
					},
					{
						name: 'Benishangul-Gumuz',
						value: 'ET-BE',
					},
					{
						name: 'Benue',
						value: 'NG-BE',
					},
					{
						name: 'Beqaa',
						value: 'LB-BI',
					},
					{
						name: 'Berane',
						value: 'ME-03',
					},
					{
						name: 'Berat',
						value: 'AL-01',
					},
					{
						name: 'Berea',
						value: 'LS-D',
					},
					{
						name: 'Berlin',
						value: 'DE-BE',
					},
					{
						name: 'Bermuda',
						value: 'BM',
					},
					{
						name: 'Berry Islands',
						value: 'BS-BY',
					},
					{
						name: 'Beverīna Municipality',
						value: 'LV-017',
					},
					{
						name: 'Bhutan',
						value: 'BT',
					},
					{
						name: 'Bicol',
						value: 'PH-05',
					},
					{
						name: 'Bié Province',
						value: 'AO-BIE',
					},
					{
						name: 'Bihar',
						value: 'IN-BR',
					},
					{
						name: 'Bihor County',
						value: 'RO-BH',
					},
					{
						name: 'Bijelo Polje',
						value: 'ME-04',
					},
					{
						name: 'Bilecik',
						value: 'TR-11',
					},
					{
						name: 'Billings, MT',
						value: '756',
					},
					{
						name: 'Biloxi-Gulfport MS',
						value: '746',
					},
					{
						name: 'Bimini',
						value: 'BS-BI',
					},
					{
						name: 'Binghamton NY',
						value: '502',
					},
					{
						name: 'Bingöl Province',
						value: 'TR-12',
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
						name: 'Bío Bío Region',
						value: 'CL-BI',
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
						name: 'Biombo',
						value: 'GW-BM',
					},
					{
						name: 'Birmingham AL',
						value: '630',
					},
					{
						name: 'Biskra',
						value: 'DZ-07',
					},
					{
						name: 'Bissau',
						value: 'GW-BS',
					},
					{
						name: 'Bistrița-Năsăud County',
						value: 'RO-BN',
					},
					{
						name: 'Bitlis',
						value: 'TR-13',
					},
					{
						name: 'Bizerte',
						value: 'TN-23',
					},
					{
						name: 'Bjelovar-Bilogora County',
						value: 'HR-07',
					},
					{
						name: 'Black Point',
						value: 'BS-BP',
					},
					{
						name: 'Black River',
						value: 'MU-BL',
					},
					{
						name: 'Blagoevgrad Province',
						value: 'BG-01',
					},
					{
						name: 'Blekinge County',
						value: 'SE-K',
					},
					{
						name: 'Blida Province',
						value: 'DZ-09',
					},
					{
						name: 'Blue Nile',
						value: 'SD-NB',
					},
					{
						name: 'Bluefield-Beckley-Oak Hill WV',
						value: '559',
					},
					{
						name: 'Boa Vista',
						value: 'CV-BV',
					},
					{
						name: 'Boaco',
						value: 'NI-BO',
					},
					{
						name: 'Bobonaro',
						value: 'TL-BO',
					},
					{
						name: 'Bocas del Toro Province',
						value: 'PA-1',
					},
					{
						name: 'Boe',
						value: 'NR-06',
					},
					{
						name: 'Bogota',
						value: 'CO-DC',
					},
					{
						name: 'Boise ID',
						value: '757',
					},
					{
						name: 'Boké',
						value: 'GN-B',
					},
					{
						name: 'Bokeo',
						value: 'LA-BK',
					},
					{
						name: 'Bolama',
						value: 'GW-BL',
					},
					{
						name: 'Bolikhamsai',
						value: 'LA-BL',
					},
					{
						name: 'Bolivar',
						value: 'CO-BOL',
					},
					{
						name: 'Bolívar',
						value: 'VE-F',
					},
					{
						name: 'Bolívar Province',
						value: 'EC-B',
					},
					{
						name: 'Bolivia',
						value: 'BO',
					},
					{
						name: 'Bolu',
						value: 'TR-14',
					},
					{
						name: 'Bomi',
						value: 'LR-BM',
					},
					{
						name: 'Bonaire',
						value: 'BQ-BO',
					},
					{
						name: 'Bong',
						value: 'LR-BG',
					},
					{
						name: 'Boqueron',
						value: 'PY-19',
					},
					{
						name: 'Bordj Bou Arreridj',
						value: 'DZ-34',
					},
					{
						name: 'Borgo Maggiore',
						value: 'SM-06',
					},
					{
						name: 'Borgou',
						value: 'BJ-BO',
					},
					{
						name: 'Borkou',
						value: 'TD-BO',
					},
					{
						name: 'Borno',
						value: 'NG-BO',
					},
					{
						name: 'Borsod-Abaúj-Zemplén',
						value: 'HU-BZ',
					},
					{
						name: 'Bosilovo',
						value: 'MK-07',
					},
					{
						name: 'Bosnia & Herzegovina',
						value: 'BA',
					},
					{
						name: 'Boston MA-Manchester NH',
						value: '506',
					},
					{
						name: 'Botoșani County',
						value: 'RO-BT',
					},
					{
						name: 'Botswana',
						value: 'BW',
					},
					{
						name: 'Boucle du Mouhoun',
						value: 'BF-01',
					},
					{
						name: 'Bouenza',
						value: 'CG-11',
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
						name: 'Bouvet Island',
						value: 'BV',
					},
					{
						name: 'Bowling Green KY',
						value: '736',
					},
					{
						name: 'Boyaca',
						value: 'CO-BOY',
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
						name: 'Brăila County',
						value: 'RO-BR',
					},
					{
						name: 'Brakna',
						value: 'MR-05',
					},
					{
						name: 'Brandenburg',
						value: 'DE-BB',
					},
					{
						name: 'Brașov County',
						value: 'RO-BV',
					},
					{
						name: 'Bratislava Region',
						value: 'SK-BL',
					},
					{
						name: 'Brava',
						value: 'CV-BR',
					},
					{
						name: 'Brazil',
						value: 'BR',
					},
					{
						name: 'Brazzaville',
						value: 'CG-BZV',
					},
					{
						name: 'Brčko Distrikt',
						value: 'BA-BRC',
					},
					{
						name: 'Bremen',
						value: 'DE-HB',
					},
					{
						name: 'Brest Region',
						value: 'BY-BR',
					},
					{
						name: 'Briceni',
						value: 'MD-BR',
					},
					{
						name: 'British Columbia',
						value: 'CA-BC',
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
						name: 'Brittany',
						value: 'FR-E',
					},
					{
						name: 'Brocēni Municipality',
						value: 'LV-018',
					},
					{
						name: 'Brod-Posavina County',
						value: 'HR-12',
					},
					{
						name: 'Brokopondo',
						value: 'SR-BR',
					},
					{
						name: 'Brong-Ahafo Region',
						value: 'GH-BA',
					},
					{
						name: 'Brunei',
						value: 'BN',
					},
					{
						name: 'Brunei-Muara',
						value: 'BN-BM',
					},
					{
						name: 'Brussels',
						value: 'BE-BRU',
					},
					{
						name: 'Brvenitsa',
						value: 'MK-08',
					},
					{
						name: 'Bryansk Oblast',
						value: 'RU-BRY',
					},
					{
						name: 'Buada',
						value: 'NR-07',
					},
					{
						name: 'Bubanza',
						value: 'BI-BB',
					},
					{
						name: 'Bucharest',
						value: 'RO-B',
					},
					{
						name: 'Budapest',
						value: 'HU-BU',
					},
					{
						name: 'Budva',
						value: 'ME-05',
					},
					{
						name: 'Bueng Kan',
						value: 'TH-38',
					},
					{
						name: 'Buenos Aires Province',
						value: 'AR-B',
					},
					{
						name: 'Buffalo NY',
						value: '514',
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
						name: 'Bukhara Province',
						value: 'UZ-BU',
					},
					{
						name: 'Bulawayo',
						value: 'ZW-BU',
					},
					{
						name: 'Bulgan',
						value: 'MN-067',
					},
					{
						name: 'Bulgaria',
						value: 'BG',
					},
					{
						name: 'Bumthang',
						value: 'BT-33',
					},
					{
						name: 'Burdur Province',
						value: 'TR-15',
					},
					{
						name: 'Burgas',
						value: 'BG-02',
					},
					{
						name: 'Burgenland',
						value: 'AT-1',
					},
					{
						name: 'Burgundy',
						value: 'FR-D',
					},
					{
						name: 'Buri Ram',
						value: 'TH-31',
					},
					{
						name: 'Burkina Faso',
						value: 'BF',
					},
					{
						name: 'Burlington VT-Plattsburgh NY',
						value: '523',
					},
					{
						name: 'Bursa',
						value: 'TR-16',
					},
					{
						name: 'Burtnieki Municipality',
						value: 'LV-019',
					},
					{
						name: 'Burundi',
						value: 'BI',
					},
					{
						name: 'Bururi',
						value: 'BI-BR',
					},
					{
						name: 'Buryatia',
						value: 'RU-BU',
					},
					{
						name: 'Busan',
						value: 'KR-26',
					},
					{
						name: 'Bushehr',
						value: 'IR-06',
					},
					{
						name: 'Buskerud',
						value: 'NO-06',
					},
					{
						name: 'Butha-Buthe',
						value: 'LS-B',
					},
					{
						name: 'Butte-Bozeman MT',
						value: '754',
					},
					{
						name: 'Buzău County',
						value: 'RO-BZ',
					},
					{
						name: 'Ca Mau',
						value: 'VN-59',
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
						name: 'Cabanas',
						value: 'SV-CA',
					},
					{
						name: 'Cabinda Province',
						value: 'AO-CAB',
					},
					{
						name: 'Cabo Delgado Province',
						value: 'MZ-P',
					},
					{
						name: 'Cacheu',
						value: 'GW-CA',
					},
					{
						name: 'Cagayan Valley',
						value: 'PH-02',
					},
					{
						name: 'Cahul',
						value: 'MD-CA',
					},
					{
						name: 'Cairo Governorate',
						value: 'EG-C',
					},
					{
						name: 'Cajamarca',
						value: 'PE-CAJ',
					},
					{
						name: 'Calabarzon',
						value: 'PH-40',
					},
					{
						name: 'Calabria',
						value: 'IT-78',
					},
					{
						name: 'Calarasi',
						value: 'MD-CL',
					},
					{
						name: 'Călărași County',
						value: 'RO-CL',
					},
					{
						name: 'Caldas',
						value: 'CO-CAL',
					},
					{
						name: 'California',
						value: 'US-CA',
					},
					{
						name: 'Callao',
						value: 'PE-CAL',
					},
					{
						name: 'Camaguey',
						value: 'CU-09',
					},
					{
						name: 'Cambodia',
						value: 'KH',
					},
					{
						name: 'Cameroon',
						value: 'CM',
					},
					{
						name: 'Campania',
						value: 'IT-72',
					},
					{
						name: 'Campeche',
						value: 'MX-CAM',
					},
					{
						name: 'Can Tho',
						value: 'VN-CT',
					},
					{
						name: 'Canada',
						value: 'CA',
					},
					{
						name: 'Çanakkale Province',
						value: 'TR-17',
					},
					{
						name: 'Cañar Province',
						value: 'EC-F',
					},
					{
						name: 'Canary Islands',
						value: 'ES-CN',
					},
					{
						name: 'Canelones Department',
						value: 'UY-CA',
					},
					{
						name: 'Canillo',
						value: 'AD-02',
					},
					{
						name: 'Canindeyu',
						value: 'PY-14',
					},
					{
						name: 'Çankırı',
						value: 'TR-18',
					},
					{
						name: 'Cankuzo',
						value: 'BI-CA',
					},
					{
						name: 'Cantabria',
						value: 'ES-CB',
					},
					{
						name: 'Cantemir',
						value: 'MD-CT',
					},
					{
						name: 'Canterbury',
						value: 'NZ-CAN',
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
						name: 'Cao Bang',
						value: 'VN-04',
					},
					{
						name: 'Cape Verde',
						value: 'CV',
					},
					{
						name: 'Capital District',
						value: 'VE-A',
					},
					{
						name: 'Capital Governorate',
						value: 'BH-13',
					},
					{
						name: 'Capital Region',
						value: 'IS-1',
					},
					{
						name: 'Capital Region of Denmark',
						value: 'DK-84',
					},
					{
						name: 'Capital Territory',
						value: 'SB-CT',
					},
					{
						name: 'Caquetá',
						value: 'CO-CAQ',
					},
					{
						name: 'Carabobo',
						value: 'VE-G',
					},
					{
						name: 'Caraga',
						value: 'PH-13',
					},
					{
						name: 'Caraș-Severin County',
						value: 'RO-CS',
					},
					{
						name: 'Carazo',
						value: 'NI-CA',
					},
					{
						name: 'Carchi Province',
						value: 'EC-C',
					},
					{
						name: 'Cargados Carajos',
						value: 'MU-CC',
					},
					{
						name: 'Caribbean Netherlands',
						value: 'BQ',
					},
					{
						name: 'Carinthia',
						value: 'AT-2',
					},
					{
						name: 'Carnikava Municipality',
						value: 'LV-020',
					},
					{
						name: 'Carriacou and Petite Martinique',
						value: 'GD-10',
					},
					{
						name: 'Casanare',
						value: 'CO-CAS',
					},
					{
						name: 'Cascade',
						value: 'SC-11',
					},
					{
						name: 'Cascades',
						value: 'BF-02',
					},
					{
						name: 'Casper-Riverton WY',
						value: '767',
					},
					{
						name: 'Castelo Branco District',
						value: 'PT-05',
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
						name: 'Castries',
						value: 'LC-02',
					},
					{
						name: 'Cat Island',
						value: 'BS-CI',
					},
					{
						name: 'Catalonia',
						value: 'ES-CT',
					},
					{
						name: 'Catamarca Province',
						value: 'AR-K',
					},
					{
						name: 'Cauca Department',
						value: 'CO-CAU',
					},
					{
						name: 'Causeni',
						value: 'MD-CS',
					},
					{
						name: 'Cayman Islands',
						value: 'KY',
					},
					{
						name: 'Cayo',
						value: 'BZ-CY',
					},
					{
						name: 'Cedar Rapids-Waterloo-Iowa City & Dubuque IA',
						value: '637',
					},
					{
						name: 'Centar Zhupa',
						value: 'MK-78',
					},
					{
						name: 'Center District',
						value: 'IL-M',
					},
					{
						name: 'Central (BW-CE)',
						value: 'BW-CE',
					},
					{
						name: 'Central (ER-MA)',
						value: 'ER-MA',
					},
					{
						name: 'Central (GH-CP)',
						value: 'GH-CP',
					},
					{
						name: 'Central (PY-11)',
						value: 'PY-11',
					},
					{
						name: 'Central (ZM-02)',
						value: 'ZM-02',
					},
					{
						name: 'Central Abaco',
						value: 'BS-CO',
					},
					{
						name: 'Central African Republic',
						value: 'CF',
					},
					{
						name: 'Central Andros',
						value: 'BS-CS',
					},
					{
						name: 'Central Bohemian Region',
						value: 'CZ-ST',
					},
					{
						name: 'Central Denmark Region',
						value: 'DK-82',
					},
					{
						name: 'Central Division',
						value: 'FJ-C',
					},
					{
						name: 'Central Eleuthera',
						value: 'BS-CE',
					},
					{
						name: 'Central Equatoria',
						value: 'SS-EC',
					},
					{
						name: 'Central Finland',
						value: 'FI-08',
					},
					{
						name: 'Central Governorate',
						value: 'BH-16',
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
						name: 'Central Luzon',
						value: 'PH-03',
					},
					{
						name: 'Central Ostrobothnia',
						value: 'FI-07',
					},
					{
						name: 'Central Province (LK-2)',
						value: 'LK-2',
					},
					{
						name: 'Central Province (MV-CE)',
						value: 'MV-CE',
					},
					{
						name: 'Central Province (PG-CPM)',
						value: 'PG-CPM',
					},
					{
						name: 'Central Province (SB-CE)',
						value: 'SB-CE',
					},
					{
						name: 'Central Region (MW-C)',
						value: 'MW-C',
					},
					{
						name: 'Central Region (NP-1)',
						value: 'NP-1',
					},
					{
						name: 'Central Region (UG-C)',
						value: 'UG-C',
					},
					{
						name: 'Central River',
						value: 'GM-M',
					},
					{
						name: 'Central Sulawesi',
						value: 'ID-ST',
					},
					{
						name: 'Central Visayas',
						value: 'PH-07',
					},
					{
						name: 'Centrale',
						value: 'TG-C',
					},
					{
						name: 'Centre (BF-03)',
						value: 'BF-03',
					},
					{
						name: 'Centre (HT-CE)',
						value: 'HT-CE',
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
						name: 'Centre-Val de Loire',
						value: 'FR-F',
					},
					{
						name: 'Centro Sur',
						value: 'GQ-CS',
					},
					{
						name: 'Cerro Largo Department',
						value: 'UY-CL',
					},
					{
						name: 'Cesar',
						value: 'CO-CES',
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
						name: 'Cetinje',
						value: 'ME-06',
					},
					{
						name: 'Ceuta',
						value: 'ES-CE',
					},
					{
						name: 'Chachoengsao',
						value: 'TH-24',
					},
					{
						name: 'Chaco Province',
						value: 'AR-H',
					},
					{
						name: 'Chad',
						value: 'TD',
					},
					{
						name: 'Chagang',
						value: 'KP-04',
					},
					{
						name: 'Chaguanas',
						value: 'TT-CHA',
					},
					{
						name: 'Chaharmahal and Bakhtiari',
						value: 'IR-08',
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
						name: 'Chalatenango',
						value: 'SV-CH',
					},
					{
						name: 'Champagne-Ardenne',
						value: 'FR-G',
					},
					{
						name: 'Champaign & Springfield-Decatur IL',
						value: '648',
					},
					{
						name: 'Champasak',
						value: 'LA-CH',
					},
					{
						name: 'Chandigarh',
						value: 'IN-CH',
					},
					{
						name: 'Chanthaburi',
						value: 'TH-22',
					},
					{
						name: 'Chaouia-Ouardigha',
						value: 'MA-09',
					},
					{
						name: 'Chari-Baguirmi',
						value: 'TD-CB',
					},
					{
						name: 'Charleston SC',
						value: '519',
					},
					{
						name: 'Charleston-Huntington WV',
						value: '564',
					},
					{
						name: 'Charlotte',
						value: 'VC-01',
					},
					{
						name: 'Charlotte NC',
						value: '517',
					},
					{
						name: 'Charlottesville VA',
						value: '584',
					},
					{
						name: 'Chashka',
						value: 'MK-80',
					},
					{
						name: 'Chatham Islands',
						value: 'NZ-CIT',
					},
					{
						name: 'Chattanooga TN',
						value: '575',
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
						name: 'Cheyenne WY-Scottsbluff NE',
						value: '759',
					},
					{
						name: 'Chhattisgarh',
						value: 'IN-CT',
					},
					{
						name: 'Chhukha',
						value: 'BT-12',
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
						name: 'Chiapas',
						value: 'MX-CHP',
					},
					{
						name: 'Chiba Prefecture',
						value: 'JP-12',
					},
					{
						name: 'Chicago IL',
						value: '602',
					},
					{
						name: 'Chico-Redding CA',
						value: '868',
					},
					{
						name: 'Chiesanuova',
						value: 'SM-02',
					},
					{
						name: 'Chihuahua',
						value: 'MX-CHH',
					},
					{
						name: 'Chile',
						value: 'CL',
					},
					{
						name: 'Chimaltenango Department',
						value: 'GT-CM',
					},
					{
						name: 'Chimborazo Province',
						value: 'EC-H',
					},
					{
						name: 'Chimbu Province',
						value: 'PG-CPK',
					},
					{
						name: 'Chin State',
						value: 'MM-14',
					},
					{
						name: 'China',
						value: 'CN',
					},
					{
						name: 'Chinandega',
						value: 'NI-CI',
					},
					{
						name: 'Chiquimula Department',
						value: 'GT-CQ',
					},
					{
						name: 'Chiriquí Province',
						value: 'PA-4',
					},
					{
						name: 'Chisinau',
						value: 'MD-CU',
					},
					{
						name: 'Chittagong Division',
						value: 'BD-B',
					},
					{
						name: 'Chlef Province',
						value: 'DZ-02',
					},
					{
						name: 'Choco',
						value: 'CO-CHO',
					},
					{
						name: 'Choiseul',
						value: 'LC-03',
					},
					{
						name: 'Choiseul Province',
						value: 'SB-CH',
					},
					{
						name: 'Choluteca',
						value: 'HN-CH',
					},
					{
						name: 'Chon Buri',
						value: 'TH-20',
					},
					{
						name: 'Chongqing',
						value: 'CN-50',
					},
					{
						name: 'Chontales',
						value: 'NI-CO',
					},
					{
						name: 'Christ Church',
						value: 'BB-01',
					},
					{
						name: 'Christ Church Nichola Town Parish',
						value: 'KN-01',
					},
					{
						name: 'Christmas Island',
						value: 'CX',
					},
					{
						name: 'Chubut Province',
						value: 'AR-U',
					},
					{
						name: 'Chukotka Autonomous Okrug',
						value: 'RU-CHU',
					},
					{
						name: 'Chumphon',
						value: 'TH-86',
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
						name: 'Chuquisaca Department',
						value: 'BO-H',
					},
					{
						name: 'Chuuk',
						value: 'FM-TRK',
					},
					{
						name: 'Chuvashia Republic',
						value: 'RU-CU',
					},
					{
						name: 'Chuy Province',
						value: 'KG-C',
					},
					{
						name: 'Cibitoke',
						value: 'BI-CI',
					},
					{
						name: 'Cibla Municipality',
						value: 'LV-023',
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
						name: 'Cimișlia',
						value: 'MD-CM',
					},
					{
						name: 'Cincinnati OH',
						value: '515',
					},
					{
						name: 'City of Zagreb',
						value: 'HR-21',
					},
					{
						name: 'Clarendon Parish',
						value: 'JM-13',
					},
					{
						name: 'Clarksburg-Weston WV',
						value: '598',
					},
					{
						name: 'Cleveland-Akron (Canton) OH',
						value: '510',
					},
					{
						name: 'Cluj County',
						value: 'RO-CJ',
					},
					{
						name: 'Coahuila',
						value: 'MX-COA',
					},
					{
						name: 'Cochabamba Department',
						value: 'BO-C',
					},
					{
						name: 'Coclé Province',
						value: 'PA-2',
					},
					{
						name: 'Cocos (Keeling) Islands',
						value: 'CC',
					},
					{
						name: 'Coimbra District',
						value: 'PT-06',
					},
					{
						name: 'Cojedes',
						value: 'VE-H',
					},
					{
						name: 'Colima',
						value: 'MX-COL',
					},
					{
						name: 'Collines',
						value: 'BJ-CO',
					},
					{
						name: 'Colombia',
						value: 'CO',
					},
					{
						name: 'Colon',
						value: 'HN-CL',
					},
					{
						name: 'Colón Province',
						value: 'PA-3',
					},
					{
						name: 'Colonia',
						value: 'UY-CO',
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
						name: 'Columbia SC',
						value: '546',
					},
					{
						name: 'Columbia-Jefferson City MO',
						value: '604',
					},
					{
						name: 'Columbus GA',
						value: '522',
					},
					{
						name: 'Columbus OH',
						value: '535',
					},
					{
						name: 'Columbus-Tupelo-West Point MS',
						value: '673',
					},
					{
						name: 'Comayagua',
						value: 'HN-CM',
					},
					{
						name: 'Commewijne',
						value: 'SR-CM',
					},
					{
						name: 'Community of Madrid',
						value: 'ES-MD',
					},
					{
						name: 'Comoros',
						value: 'KM',
					},
					{
						name: 'Conakry',
						value: 'GN-C',
					},
					{
						name: 'Concepcion',
						value: 'PY-1',
					},
					{
						name: 'Congo - Brazzaville',
						value: 'CG',
					},
					{
						name: 'Congo - Kinshasa',
						value: 'CD',
					},
					{
						name: 'Connecticut',
						value: 'US-CT',
					},
					{
						name: 'Constanța County',
						value: 'RO-CT',
					},
					{
						name: 'Constantine',
						value: 'DZ-25',
					},
					{
						name: 'Cook Islands',
						value: 'CK',
					},
					{
						name: 'Copan',
						value: 'HN-CP',
					},
					{
						name: 'Copperbelt',
						value: 'ZM-08',
					},
					{
						name: 'Coquimbo Region',
						value: 'CL-CO',
					},
					{
						name: 'Cordillera',
						value: 'PY-3',
					},
					{
						name: 'Cordillera Administrative Region',
						value: 'PH-15',
					},
					{
						name: 'Cordoba',
						value: 'AR-X',
					},
					{
						name: 'Coronie',
						value: 'SR-CR',
					},
					{
						name: 'Corozal',
						value: 'BZ-CZL',
					},
					{
						name: 'Corpus Christi TX',
						value: '600',
					},
					{
						name: 'Corrientes Province',
						value: 'AR-W',
					},
					{
						name: 'Corsica',
						value: 'FR-H',
					},
					{
						name: 'Cortés',
						value: 'HN-CR',
					},
					{
						name: 'Çorum Province',
						value: 'TR-19',
					},
					{
						name: 'Costa Rica',
						value: 'CR',
					},
					{
						name: 'Côte d’Ivoire',
						value: 'CI',
					},
					{
						name: 'Cotopaxi Province',
						value: 'EC-X',
					},
					{
						name: 'Couva-Tabaquite-Talparo',
						value: 'TT-CTT',
					},
					{
						name: 'Cova-Lima',
						value: 'TL-CO',
					},
					{
						name: 'Covasna County',
						value: 'RO-CV',
					},
					{
						name: 'Crimea',
						value: 'UA-43',
					},
					{
						name: 'Criuleni',
						value: 'MD-CR',
					},
					{
						name: 'Croatia',
						value: 'HR',
					},
					{
						name: 'Crooked Island and Long Cay',
						value: 'BS-CK',
					},
					{
						name: 'Cross River',
						value: 'NG-CR',
					},
					{
						name: 'Csongrád',
						value: 'HU-CS',
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
						name: 'Cuba',
						value: 'CU',
					},
					{
						name: 'Cundinamarca',
						value: 'CO-CUN',
					},
					{
						name: 'Cunene',
						value: 'AO-CNN',
					},
					{
						name: 'Curaçao',
						value: 'CW',
					},
					{
						name: 'Cuscatlan',
						value: 'SV-CU',
					},
					{
						name: 'Cusco',
						value: 'PE-CUS',
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
						name: 'Cuyuni-Mazaruni',
						value: 'GY-CU',
					},
					{
						name: 'Cyprus',
						value: 'CY',
					},
					{
						name: 'Czechia',
						value: 'CZ',
					},
					{
						name: 'Da Nang',
						value: 'VN-DN',
					},
					{
						name: 'Dadra and Nagar Haveli',
						value: 'IN-DN',
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
						name: 'Dagana',
						value: 'BT-22',
					},
					{
						name: 'Dagdas novads',
						value: 'LV-024',
					},
					{
						name: 'Dagestan Republic',
						value: 'RU-DA',
					},
					{
						name: 'Dajabón Province',
						value: 'DO-05',
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
						name: 'Dakahlia Governorate',
						value: 'EG-DK',
					},
					{
						name: 'Dakar',
						value: 'SN-DK',
					},
					{
						name: 'Dakhlet Nouadhibou',
						value: 'MR-08',
					},
					{
						name: 'Dalarna County',
						value: 'SE-W',
					},
					{
						name: 'Dallas-Ft. Worth TX',
						value: '623',
					},
					{
						name: 'Daman and Diu',
						value: 'IN-DD',
					},
					{
						name: 'Damascus Governorate',
						value: 'SY-DI',
					},
					{
						name: 'Dâmbovița County',
						value: 'RO-DB',
					},
					{
						name: 'Damietta Governorate',
						value: 'EG-DT',
					},
					{
						name: 'Danilovgrad',
						value: 'ME-07',
					},
					{
						name: 'Daraa Governorate',
						value: 'SY-DR',
					},
					{
						name: 'Darién Province',
						value: 'PA-5',
					},
					{
						name: 'Darkhan-Uul',
						value: 'MN-037',
					},
					{
						name: 'Darnah',
						value: 'LY-DR',
					},
					{
						name: 'Dashoguz Province',
						value: 'TM-D',
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
						name: 'Dauphin',
						value: 'LC-04',
					},
					{
						name: 'Davao Region',
						value: 'PH-11',
					},
					{
						name: 'Davenport IA-Rock Island-Moline IL',
						value: '682',
					},
					{
						name: 'Daykundi',
						value: 'AF-DAY',
					},
					{
						name: 'Dayton OH',
						value: '542',
					},
					{
						name: 'Deir Ez-Zor Governorate',
						value: 'SY-DY',
					},
					{
						name: 'Delaware',
						value: 'US-DE',
					},
					{
						name: 'Delchevo',
						value: 'MK-23',
					},
					{
						name: 'Delhi',
						value: 'IN-DL',
					},
					{
						name: 'Delta',
						value: 'NG-DE',
					},
					{
						name: 'Delta Amacuro',
						value: 'VE-Y',
					},
					{
						name: 'Demerara-Mahaica',
						value: 'GY-DE',
					},
					{
						name: 'Denguele',
						value: 'CI-10',
					},
					{
						name: 'Denigomodu',
						value: 'NR-08',
					},
					{
						name: 'Denizli',
						value: 'TR-20',
					},
					{
						name: 'Denmark',
						value: 'DK',
					},
					{
						name: 'Dennery',
						value: 'LC-05',
					},
					{
						name: 'Denver CO',
						value: '751',
					},
					{
						name: 'Des Moines-Ames IA',
						value: '679',
					},
					{
						name: 'Detroit MI',
						value: '505',
					},
					{
						name: 'Dhaka Division',
						value: 'BD-C',
					},
					{
						name: 'Dhamar',
						value: 'YE-DH',
					},
					{
						name: 'Dhi Qar',
						value: 'IQ-DQ',
					},
					{
						name: 'Dhofar Governorate',
						value: 'OM-ZU',
					},
					{
						name: 'Dibër County',
						value: 'AL-09',
					},
					{
						name: 'Diego Martin',
						value: 'TT-DMN',
					},
					{
						name: 'Diekirch',
						value: 'LU-D',
					},
					{
						name: 'Dien Bien',
						value: 'VN-71',
					},
					{
						name: 'Diffa',
						value: 'NE-2',
					},
					{
						name: 'Dikhil',
						value: 'DJ-DI',
					},
					{
						name: 'Dili',
						value: 'TL-DI',
					},
					{
						name: 'Diourbel Region',
						value: 'SN-DB',
					},
					{
						name: 'Dire Dawa',
						value: 'ET-DD',
					},
					{
						name: 'District of Columbia',
						value: 'US-DC',
					},
					{
						name: 'Districts of Republican Subordination',
						value: 'TJ-RR',
					},
					{
						name: 'Distrito Nacional',
						value: 'DO-01',
					},
					{
						name: 'Dix-Huit Montagnes',
						value: 'CI-06',
					},
					{
						name: 'Diyala',
						value: 'IQ-DI',
					},
					{
						name: 'Diyarbakır',
						value: 'TR-21',
					},
					{
						name: 'Djelfa Province',
						value: 'DZ-17',
					},
					{
						name: 'Djibouti',
						value: 'DJ',
					},
					{
						name: 'Dnipropetrovsk Oblast',
						value: 'UA-12',
					},
					{
						name: 'Dobele Municipality',
						value: 'LV-026',
					},
					{
						name: 'Dobrich Province',
						value: 'BG-08',
					},
					{
						name: 'Dodoma',
						value: 'TZ-03',
					},
					{
						name: 'Doha',
						value: 'QA-DA',
					},
					{
						name: 'Dojran',
						value: 'MK-26',
					},
					{
						name: 'Dolj County',
						value: 'RO-DJ',
					},
					{
						name: 'Domagnano',
						value: 'SM-03',
					},
					{
						name: 'Dominica',
						value: 'DM',
					},
					{
						name: 'Dominican Republic',
						value: 'DO',
					},
					{
						name: 'Donduseni',
						value: 'MD-DO',
					},
					{
						name: 'Donetsk Oblast',
						value: 'UA-14',
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
						name: 'Donga',
						value: 'BJ-DO',
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
						name: 'Dosso',
						value: 'NE-3',
					},
					{
						name: 'Dothan AL',
						value: '606',
					},
					{
						name: 'Doukkala-Abda',
						value: 'MA-10',
					},
					{
						name: 'Drenthe',
						value: 'NL-DR',
					},
					{
						name: 'Drochia',
						value: 'MD-DR',
					},
					{
						name: 'Duarte Province',
						value: 'DO-06',
					},
					{
						name: 'Dubai',
						value: 'AE-DU',
					},
					{
						name: 'Dubasari',
						value: 'MD-DU',
					},
					{
						name: 'Dubrovnik-Neretva County',
						value: 'HR-19',
					},
					{
						name: 'Duhok',
						value: 'IQ-DA',
					},
					{
						name: 'Duluth MN-Superior WI',
						value: '676',
					},
					{
						name: 'Dundaga Municipality',
						value: 'LV-027',
					},
					{
						name: 'Dundgovi',
						value: 'MN-059',
					},
					{
						name: 'Durango',
						value: 'MX-DUR',
					},
					{
						name: 'Durazno Department',
						value: 'UY-DU',
					},
					{
						name: 'Durbe Municipality',
						value: 'LV-028',
					},
					{
						name: 'Durrës',
						value: 'AL-02',
					},
					{
						name: 'Düzce Province',
						value: 'TR-81',
					},
					{
						name: 'Dzhalal-Abadskaya',
						value: 'KG-J',
					},
					{
						name: 'East',
						value: 'CM-ES',
					},
					{
						name: 'East Azerbaijan',
						value: 'IR-01',
					},
					{
						name: 'East Berbice-Corentyne',
						value: 'GY-EB',
					},
					{
						name: 'East Grand Bahama',
						value: 'BS-EG',
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
						name: 'East Kazakhstan Region',
						value: 'KZ-VOS',
					},
					{
						name: 'East New Britain Province',
						value: 'PG-EBR',
					},
					{
						name: 'East Nusa Tenggara',
						value: 'ID-NT',
					},
					{
						name: 'East Sepik Province',
						value: 'PG-ESW',
					},
					{
						name: 'Eastern',
						value: 'ZM-03',
					},
					{
						name: 'Eastern Cape',
						value: 'ZA-EC',
					},
					{
						name: 'Eastern Division',
						value: 'FJ-E',
					},
					{
						name: 'Eastern Equatoria',
						value: 'SS-EE',
					},
					{
						name: 'Eastern Highlands Province',
						value: 'PG-EHG',
					},
					{
						name: 'Eastern Province (LK-5)',
						value: 'LK-5',
					},
					{
						name: 'Eastern Province (RW-02)',
						value: 'RW-02',
					},
					{
						name: 'Eastern Province (SA-04)',
						value: 'SA-04',
					},
					{
						name: 'Eastern Province (SL-E)',
						value: 'SL-E',
					},
					{
						name: 'Eastern Region',
						value: 'GH-EP',
					},
					{
						name: 'Eastern Region (IS-7)',
						value: 'IS-7',
					},
					{
						name: 'Eastern Region (NP-4)',
						value: 'NP-4',
					},
					{
						name: 'Eastern Region (UG-E)',
						value: 'UG-E',
					},
					{
						name: 'Eastern Tobago',
						value: 'TT-ETO',
					},
					{
						name: 'Eastern Visayas',
						value: 'PH-08',
					},
					{
						name: 'Ebon',
						value: 'MH-EBO',
					},
					{
						name: 'Ebonyi',
						value: 'NG-EB',
					},
					{
						name: 'Ecuador',
						value: 'EC',
					},
					{
						name: 'Edineţ District',
						value: 'MD-ED',
					},
					{
						name: 'Edirne',
						value: 'TR-22',
					},
					{
						name: 'Edo',
						value: 'NG-ED',
					},
					{
						name: 'Egypt',
						value: 'EG',
					},
					{
						name: 'Ehime Prefecture',
						value: 'JP-38',
					},
					{
						name: 'Ekiti',
						value: 'NG-EK',
					},
					{
						name: 'El Bayadh Province',
						value: 'DZ-32',
					},
					{
						name: 'El Beheira Governorate',
						value: 'EG-BH',
					},
					{
						name: 'El Oro',
						value: 'EC-O',
					},
					{
						name: 'El Oued Province',
						value: 'DZ-39',
					},
					{
						name: 'El Paraiso',
						value: 'HN-EP',
					},
					{
						name: 'El Paso TX',
						value: '765',
					},
					{
						name: 'El Progreso Department',
						value: 'GT-PR',
					},
					{
						name: 'El Salvador',
						value: 'SV',
					},
					{
						name: 'El Seibo Province',
						value: 'DO-08',
					},
					{
						name: 'El Taref Province',
						value: 'DZ-36',
					},
					{
						name: 'Elazığ',
						value: 'TR-23',
					},
					{
						name: 'Elbasan',
						value: 'AL-03',
					},
					{
						name: 'Elías Piña Province',
						value: 'DO-07',
					},
					{
						name: 'Elmira NY',
						value: '565',
					},
					{
						name: 'Emberá-Wounaan Comarca',
						value: 'PA-EM',
					},
					{
						name: 'Emilia-Romagna',
						value: 'IT-45',
					},
					{
						name: 'Encamp',
						value: 'AD-03',
					},
					{
						name: 'Enewetak Atoll',
						value: 'MH-ENI',
					},
					{
						name: 'Enga Province',
						value: 'PG-EPW',
					},
					{
						name: 'England',
						value: 'GB-ENG',
					},
					{
						name: 'Engure Municipality',
						value: 'LV-029',
					},
					{
						name: 'Ennedi',
						value: 'TD-EN',
					},
					{
						name: 'Entre Rios',
						value: 'AR-E',
					},
					{
						name: 'Enugu',
						value: 'NG-EN',
					},
					{
						name: 'Equator',
						value: 'CD-EQ',
					},
					{
						name: 'Equatorial Guinea',
						value: 'GQ',
					},
					{
						name: 'Erbil',
						value: 'IQ-AR',
					},
					{
						name: 'Ērgļi Municipality',
						value: 'LV-030',
					},
					{
						name: 'Erie PA',
						value: '516',
					},
					{
						name: 'Eritrea',
						value: 'ER',
					},
					{
						name: 'Ermera',
						value: 'TL-ER',
					},
					{
						name: 'Erongo',
						value: 'NA-ER',
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
						name: 'Escaldes-Engordany',
						value: 'AD-08',
					},
					{
						name: 'Eschen',
						value: 'LI-02',
					},
					{
						name: 'Escuintla',
						value: 'GT-ES',
					},
					{
						name: 'Eskişehir Province',
						value: 'TR-26',
					},
					{
						name: 'Esmeraldas Province',
						value: 'EC-E',
					},
					{
						name: 'Espaillat Province',
						value: 'DO-09',
					},
					{
						name: 'Essequibo Islands-West Demerara',
						value: 'GY-ES',
					},
					{
						name: 'Est',
						value: 'BF-08',
					},
					{
						name: 'Esteli',
						value: 'NI-ES',
					},
					{
						name: 'Estonia',
						value: 'EE',
					},
					{
						name: 'Estuaire',
						value: 'GA-1',
					},
					{
						name: 'Eswatini',
						value: 'SZ',
					},
					{
						name: 'Ethiopia',
						value: 'ET',
					},
					{
						name: 'Eugene OR',
						value: '801',
					},
					{
						name: 'Eureka CA',
						value: '802',
					},
					{
						name: 'Evansville IN',
						value: '649',
					},
					{
						name: 'Évora District',
						value: 'PT-07',
					},
					{
						name: 'Ewa',
						value: 'NR-09',
					},
					{
						name: 'Extremadura',
						value: 'ES-EX',
					},
					{
						name: 'Extreme North',
						value: 'CM-EN',
					},
					{
						name: 'Exuma',
						value: 'BS-EX',
					},
					{
						name: "Fa'asaleleaga",
						value: 'WS-FA',
					},
					{
						name: 'Faetano',
						value: 'SM-04',
					},
					{
						name: 'Fairbanks AK',
						value: '745',
					},
					{
						name: 'Faiyum Governorate',
						value: 'EG-FYM',
					},
					{
						name: 'Falcón',
						value: 'VE-I',
					},
					{
						name: 'Falesti',
						value: 'MD-FA',
					},
					{
						name: 'Falkland Islands (Islas Malvinas)',
						value: 'FK',
					},
					{
						name: 'Famagusta',
						value: 'CY-04',
					},
					{
						name: 'Far-Western Region',
						value: 'NP-5',
					},
					{
						name: 'Farah',
						value: 'AF-FRA',
					},
					{
						name: 'Faranah',
						value: 'GN-F',
					},
					{
						name: 'Fargo-Valley City ND',
						value: '724',
					},
					{
						name: 'Faro District',
						value: 'PT-08',
					},
					{
						name: 'Faroe Islands',
						value: 'FO',
					},
					{
						name: 'Fars',
						value: 'IR-14',
					},
					{
						name: 'Faryab',
						value: 'AF-FYB',
					},
					{
						name: 'Fatick Region',
						value: 'SN-FK',
					},
					{
						name: 'Federal Capital Territory',
						value: 'NG-FC',
					},
					{
						name: 'Federal Dependencies',
						value: 'VE-W',
					},
					{
						name: 'Federal District',
						value: 'BR-DF',
					},
					{
						name: 'Federal Territory of Kuala Lumpur',
						value: 'MY-14',
					},
					{
						name: 'Federally Administered Tribal Areas',
						value: 'PK-TA',
					},
					{
						name: 'Federation of Bosnia and Herzegovina',
						value: 'BA-BIH',
					},
					{
						name: 'Fejér',
						value: 'HU-FE',
					},
					{
						name: 'Ferghana Province',
						value: 'UZ-FA',
					},
					{
						name: 'Fes-Boulemane',
						value: 'MA-05',
					},
					{
						name: 'Fianarantsoa',
						value: 'MG-F',
					},
					{
						name: 'Fier',
						value: 'AL-04',
					},
					{
						name: 'Fiji',
						value: 'FJ',
					},
					{
						name: 'Finland',
						value: 'FI',
					},
					{
						name: 'Finnmark',
						value: 'NO-20',
					},
					{
						name: 'Fiorentino',
						value: 'SM-05',
					},
					{
						name: 'Flacq',
						value: 'MU-FL',
					},
					{
						name: 'Flanders',
						value: 'BE-VLG',
					},
					{
						name: 'Flevoland',
						value: 'NL-FL',
					},
					{
						name: 'Flint-Saginaw-Bay City MI',
						value: '513',
					},
					{
						name: 'Florence-Myrtle Beach SC',
						value: '570',
					},
					{
						name: 'Flores Department',
						value: 'UY-FS',
					},
					{
						name: 'Floresti',
						value: 'MD-FL',
					},
					{
						name: 'Florida',
						value: 'US-FL',
					},
					{
						name: 'Florida Department',
						value: 'UY-FD',
					},
					{
						name: 'Formosa Province',
						value: 'AR-P',
					},
					{
						name: 'France',
						value: 'FR',
					},
					{
						name: 'Franche-Comté',
						value: 'FR-I',
					},
					{
						name: 'Francisco Morazan',
						value: 'HN-FM',
					},
					{
						name: 'Free State',
						value: 'ZA-FS',
					},
					{
						name: 'Freeport',
						value: 'BS-FP',
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
						name: 'Fresno-Visalia CA',
						value: '866',
					},
					{
						name: 'Friesland',
						value: 'NL-FR',
					},
					{
						name: 'Friuli-Venezia Giulia',
						value: 'IT-36',
					},
					{
						name: 'Fromager',
						value: 'CI-18',
					},
					{
						name: 'Ft. Myers-Naples FL',
						value: '571',
					},
					{
						name: 'Ft. Smith-Fayetteville-Springdale-Rogers AR',
						value: '670',
					},
					{
						name: 'Ft. Wayne IN',
						value: '509',
					},
					{
						name: 'Fujairah',
						value: 'AE-FU',
					},
					{
						name: 'Fujian',
						value: 'CN-35',
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
						name: 'Funafuti',
						value: 'TV-FUN',
					},
					{
						name: 'Gabes',
						value: 'TN-81',
					},
					{
						name: 'Gabon',
						value: 'GA',
					},
					{
						name: 'Gabrovo',
						value: 'BG-07',
					},
					{
						name: 'Gabu',
						value: 'GW-GA',
					},
					{
						name: 'Gafsa',
						value: 'TN-71',
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
						name: 'Gagauzia',
						value: 'MD-GA',
					},
					{
						name: 'Gainesville FL',
						value: '592',
					},
					{
						name: 'Galápagos Islands',
						value: 'EC-W',
					},
					{
						name: 'Galați',
						value: 'RO-GL',
					},
					{
						name: 'Galguduud',
						value: 'SO-GA',
					},
					{
						name: 'Galicia',
						value: 'ES-GA',
					},
					{
						name: 'Gambella',
						value: 'ET-GA',
					},
					{
						name: 'Gambia',
						value: 'GM',
					},
					{
						name: 'Gamprin',
						value: 'LI-03',
					},
					{
						name: 'Gangwon-do',
						value: 'KR-42',
					},
					{
						name: 'Gansu',
						value: 'CN-62',
					},
					{
						name: 'Gao',
						value: 'ML-7',
					},
					{
						name: 'Garkalne Municipality',
						value: 'LV-031',
					},
					{
						name: 'Gasa',
						value: 'BT-GA',
					},
					{
						name: 'Gash-Barka',
						value: 'ER-GB',
					},
					{
						name: 'Gauteng',
						value: 'ZA-GT',
					},
					{
						name: 'Gavleborg County',
						value: 'SE-X',
					},
					{
						name: 'Gaza Province',
						value: 'MZ-G',
					},
					{
						name: 'Gaziantep',
						value: 'TR-27',
					},
					{
						name: 'Gbarpolu',
						value: 'LR-GP',
					},
					{
						name: 'Gedo',
						value: 'SO-GE',
					},
					{
						name: 'Gegharkunik Province',
						value: 'AM-GR',
					},
					{
						name: 'Gelderland',
						value: 'NL-GE',
					},
					{
						name: 'Geneva',
						value: 'CH-GE',
					},
					{
						name: 'Georgia',
						value: 'GE',
					},
					{
						name: 'Georgia (US)',
						value: 'US-GA',
					},
					{
						name: 'Germany',
						value: 'DE',
					},
					{
						name: 'Ghana',
						value: 'GH',
					},
					{
						name: 'Ghanzi',
						value: 'BW-GH',
					},
					{
						name: 'Gharb Darfur',
						value: 'SD-DW',
					},
					{
						name: 'Gharb-Chrarda-Beni Hssen',
						value: 'MA-02',
					},
					{
						name: 'Gharbia Governorate',
						value: 'EG-GH',
					},
					{
						name: 'Ghardaia Province',
						value: 'DZ-47',
					},
					{
						name: 'Ghat',
						value: 'LY-GT',
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
						name: 'Gia Lai Province',
						value: 'VN-30',
					},
					{
						name: 'Gibraltar',
						value: 'GI',
					},
					{
						name: 'Gifu Prefecture',
						value: 'JP-21',
					},
					{
						name: 'Gilan',
						value: 'IR-19',
					},
					{
						name: 'Gilbert Islands',
						value: 'KI-G',
					},
					{
						name: 'Gilgit-Baltistan',
						value: 'PK-GB',
					},
					{
						name: 'Giresun',
						value: 'TR-28',
					},
					{
						name: 'Girne',
						value: 'CY-06',
					},
					{
						name: 'Gisborne',
						value: 'NZ-GIS',
					},
					{
						name: 'Gitega',
						value: 'BI-GI',
					},
					{
						name: 'Giurgiu County',
						value: 'RO-GR',
					},
					{
						name: 'Giza Governorate',
						value: 'EG-GZ',
					},
					{
						name: 'Gjirokastra',
						value: 'AL-05',
					},
					{
						name: 'Glacis',
						value: 'SC-12',
					},
					{
						name: 'Glendive MT',
						value: '798',
					},
					{
						name: 'Glodeni',
						value: 'MD-GL',
					},
					{
						name: 'Goa',
						value: 'IN-GA',
					},
					{
						name: 'Golestan',
						value: 'IR-27',
					},
					{
						name: 'Gombe',
						value: 'NG-GO',
					},
					{
						name: 'Gomel Region',
						value: 'BY-HO',
					},
					{
						name: 'Gorgol',
						value: 'MR-04',
					},
					{
						name: 'Gorj County',
						value: 'RO-GJ',
					},
					{
						name: 'Gorno-Badakhshan Autonomous Province',
						value: 'TJ-GB',
					},
					{
						name: 'Gorontalo',
						value: 'ID-GO',
					},
					{
						name: 'Gostivar',
						value: 'MK-19',
					},
					{
						name: 'Gotland County',
						value: 'SE-I',
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
						name: 'Gracias a Dios',
						value: 'HN-GD',
					},
					{
						name: 'Granada',
						value: 'NI-GR',
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
						name: 'Grand Bassa',
						value: 'LR-GB',
					},
					{
						name: 'Grand Cape Mount',
						value: 'LR-CM',
					},
					{
						name: 'Grand Casablanca',
						value: 'MA-08',
					},
					{
						name: 'Grand Cay',
						value: 'BS-GC',
					},
					{
						name: 'Grand Gedeh',
						value: 'LR-GG',
					},
					{
						name: 'Grand Junction-Montrose CO',
						value: '773',
					},
					{
						name: 'Grand Kru',
						value: 'LR-GK',
					},
					{
						name: 'Grand Port',
						value: 'MU-GP',
					},
					{
						name: 'Grand Rapids-Kalamazoo-Battle Creek MI',
						value: '563',
					},
					{
						name: "Grand'Anse",
						value: 'HT-GA',
					},
					{
						name: 'Granma',
						value: 'CU-12',
					},
					{
						name: 'Great Falls MT',
						value: '755',
					},
					{
						name: 'Greater Accra Region',
						value: 'GH-AA',
					},
					{
						name: 'Greater Poland Voivodeship',
						value: 'PL-WP',
					},
					{
						name: 'Greece',
						value: 'GR',
					},
					{
						name: 'Green Bay-Appleton WI',
						value: '658',
					},
					{
						name: 'Greenland',
						value: 'GL',
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
						name: 'Greenwood-Greenville MS',
						value: '647',
					},
					{
						name: 'Grenada',
						value: 'GD',
					},
					{
						name: 'Grenadines',
						value: 'VC-06',
					},
					{
						name: 'Grevenmacher',
						value: 'LU-G',
					},
					{
						name: 'Grisons',
						value: 'CH-GR',
					},
					{
						name: 'Grobiņa Municipality',
						value: 'LV-032',
					},
					{
						name: 'Groningen',
						value: 'NL-GR',
					},
					{
						name: 'Gros Islet',
						value: 'LC-06',
					},
					{
						name: 'Guadalcanal Province',
						value: 'SB-GU',
					},
					{
						name: 'Guadeloupe',
						value: 'GP',
					},
					{
						name: 'Guainia',
						value: 'CO-GUA',
					},
					{
						name: 'Guaira',
						value: 'PY-4',
					},
					{
						name: 'Guam',
						value: 'GU',
					},
					{
						name: 'Guanacaste Province',
						value: 'CR-G',
					},
					{
						name: 'Guanajuato',
						value: 'MX-GUA',
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
						name: 'Guantanamo',
						value: 'CU-14',
					},
					{
						name: 'Guarda District',
						value: 'PT-09',
					},
					{
						name: 'Guárico',
						value: 'VE-J',
					},
					{
						name: 'Guatemala',
						value: 'GT',
					},
					{
						name: 'Guatemala Department',
						value: 'GT-GU',
					},
					{
						name: 'Guaviare',
						value: 'CO-GUV',
					},
					{
						name: 'Guayas',
						value: 'EC-G',
					},
					{
						name: 'Guelma Province',
						value: 'DZ-24',
					},
					{
						name: 'Guelmim-Es Semara',
						value: 'MA-14',
					},
					{
						name: 'Guera',
						value: 'TD-GR',
					},
					{
						name: 'Guernsey',
						value: 'GG',
					},
					{
						name: 'Guerrero',
						value: 'MX-GRO',
					},
					{
						name: 'Guidimaka',
						value: 'MR-10',
					},
					{
						name: 'Guinea',
						value: 'GN',
					},
					{
						name: 'Guinea-Bissau',
						value: 'GW',
					},
					{
						name: 'Guizhou',
						value: 'CN-52',
					},
					{
						name: 'Gujarat',
						value: 'IN-GJ',
					},
					{
						name: 'Gulbene Municipality',
						value: 'LV-033',
					},
					{
						name: 'Gulf Province',
						value: 'PG-GPK',
					},
					{
						name: 'Gümüşhane',
						value: 'TR-29',
					},
					{
						name: 'Guna Yala',
						value: 'PA-KY',
					},
					{
						name: 'Gunma Prefecture',
						value: 'JP-10',
					},
					{
						name: 'Guria',
						value: 'GE-GU',
					},
					{
						name: 'Guyana',
						value: 'GY',
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
						name: 'Gyor-Moson-Sopron',
						value: 'HU-GS',
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
						name: "Ha'apai",
						value: 'TO-02',
					},
					{
						name: 'Haa',
						value: 'BT-13',
					},
					{
						name: 'Hadjer-Lamis',
						value: 'TD-HL',
					},
					{
						name: 'Hadramaut',
						value: 'YE-HD',
					},
					{
						name: 'Hai Duong',
						value: 'VN-61',
					},
					{
						name: 'Haifa District',
						value: 'IL-HA',
					},
					{
						name: 'Hail Province',
						value: 'SA-06',
					},
					{
						name: 'Hainan',
						value: 'CN-46',
					},
					{
						name: 'Haiphong',
						value: 'VN-HP',
					},
					{
						name: 'Haiti',
						value: 'HT',
					},
					{
						name: 'Hajdú-Bihar',
						value: 'HU-HB',
					},
					{
						name: 'Hajjah',
						value: 'YE-HJ',
					},
					{
						name: 'Hakkâri',
						value: 'TR-30',
					},
					{
						name: 'Halland County',
						value: 'SE-N',
					},
					{
						name: 'Hama Governorate',
						value: 'SY-HM',
					},
					{
						name: 'Hamadan',
						value: 'IR-24',
					},
					{
						name: 'Hamburg',
						value: 'DE-HH',
					},
					{
						name: 'Hanoi',
						value: 'VN-HN',
					},
					{
						name: 'Hanover Parish',
						value: 'JM-09',
					},
					{
						name: 'Harare',
						value: 'ZW-HA',
					},
					{
						name: 'Harari',
						value: 'ET-HA',
					},
					{
						name: 'Harbour Island',
						value: 'BS-HI',
					},
					{
						name: 'Hardap Region',
						value: 'NA-HA',
					},
					{
						name: 'Harghita County',
						value: 'RO-HR',
					},
					{
						name: 'Harju County',
						value: 'EE-37',
					},
					{
						name: 'Harlingen-Weslaco-Brownsville-McAllen TX',
						value: '636',
					},
					{
						name: 'Harrisburg-Lancaster-Lebanon-York PA',
						value: '566',
					},
					{
						name: 'Harrisonburg VA',
						value: '569',
					},
					{
						name: 'Hartford & New Haven CT',
						value: '533',
					},
					{
						name: 'Haryana',
						value: 'IN-HR',
					},
					{
						name: 'Haskovo Province',
						value: 'BG-26',
					},
					{
						name: 'Hatay',
						value: 'TR-31',
					},
					{
						name: 'Hato Mayor Province',
						value: 'DO-30',
					},
					{
						name: 'Hatohobei',
						value: 'PW-050',
					},
					{
						name: 'Hattiesburg-Laurel MS',
						value: '710',
					},
					{
						name: 'Hau Giang',
						value: 'VN-73',
					},
					{
						name: 'Haut-Mbomou',
						value: 'CF-HM',
					},
					{
						name: 'Haut-Ogooue',
						value: 'GA-2',
					},
					{
						name: 'Haut-Sassandra',
						value: 'CI-02',
					},
					{
						name: 'Haute-Kotto',
						value: 'CF-HK',
					},
					{
						name: 'Hauts-Bassins',
						value: 'BF-09',
					},
					{
						name: 'Havana',
						value: 'CU-03',
					},
					{
						name: 'Hawaii',
						value: 'US-HI',
					},
					{
						name: 'Hawalli Governorate',
						value: 'KW-HA',
					},
					{
						name: "Hawke's Bay",
						value: 'NZ-HKB',
					},
					{
						name: 'Heard & McDonald Islands',
						value: 'HM',
					},
					{
						name: 'Hebei',
						value: 'CN-13',
					},
					{
						name: 'Hedmark',
						value: 'NO-04',
					},
					{
						name: 'Heilongjiang',
						value: 'CN-23',
					},
					{
						name: 'Helena MT',
						value: '766',
					},
					{
						name: 'Helmand',
						value: 'AF-HEL',
					},
					{
						name: 'Henan',
						value: 'CN-41',
					},
					{
						name: 'Herat',
						value: 'AF-HER',
					},
					{
						name: 'Herceg Novi',
						value: 'ME-08',
					},
					{
						name: 'Heredia Province',
						value: 'CR-H',
					},
					{
						name: 'Hermanas Mirabal Province',
						value: 'DO-19',
					},
					{
						name: 'Herrera Province',
						value: 'PA-6',
					},
					{
						name: 'Hesse',
						value: 'DE-HE',
					},
					{
						name: 'Heves County',
						value: 'HU-HE',
					},
					{
						name: 'Hhohho',
						value: 'SZ-HH',
					},
					{
						name: 'Hidalgo',
						value: 'MX-HID',
					},
					{
						name: 'Hiiu County',
						value: 'EE-39',
					},
					{
						name: 'Himachal Pradesh',
						value: 'IN-HP',
					},
					{
						name: 'Hincesti',
						value: 'MD-HI',
					},
					{
						name: 'Hiran',
						value: 'SO-HI',
					},
					{
						name: 'Hiroshima Prefecture',
						value: 'JP-34',
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
						name: 'Hodh Ech Chargui',
						value: 'MR-01',
					},
					{
						name: 'Hodh El Gharbi',
						value: 'MR-02',
					},
					{
						name: 'Hokkaido Prefecture',
						value: 'JP-01',
					},
					{
						name: 'Holguin',
						value: 'CU-11',
					},
					{
						name: 'Homs Governorate',
						value: 'SY-HI',
					},
					{
						name: 'Honduras',
						value: 'HN',
					},
					{
						name: 'Hong Kong',
						value: 'HK',
					},
					{
						name: 'Honolulu HI',
						value: '744',
					},
					{
						name: 'Hope Town',
						value: 'BS-HT',
					},
					{
						name: 'Hordaland',
						value: 'NO-12',
					},
					{
						name: 'Hormozgan',
						value: 'IR-23',
					},
					{
						name: 'Houaphan',
						value: 'LA-HO',
					},
					{
						name: 'Houston TX',
						value: '618',
					},
					{
						name: 'Hradec Králové Region',
						value: 'CZ-KR',
					},
					{
						name: 'Hrodna Region',
						value: 'BY-HR',
					},
					{
						name: 'Huambo Province',
						value: 'AO-HUA',
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
						name: 'Hubei',
						value: 'CN-42',
					},
					{
						name: 'Huehuetenango Department',
						value: 'GT-HU',
					},
					{
						name: 'Huila',
						value: 'CO-HUI',
					},
					{
						name: 'Huila Province',
						value: 'AO-HUI',
					},
					{
						name: 'Hunan',
						value: 'CN-43',
					},
					{
						name: 'Hunedoara County',
						value: 'RO-HD',
					},
					{
						name: 'Hung Yen Province',
						value: 'VN-66',
					},
					{
						name: 'Hungary',
						value: 'HU',
					},
					{
						name: 'Huntsville-Decatur (Florence) AL',
						value: '691',
					},
					{
						name: 'Hyogo Prefecture',
						value: 'JP-28',
					},
					{
						name: 'Ialomița County',
						value: 'RO-IL',
					},
					{
						name: 'Ialoveni',
						value: 'MD-IA',
					},
					{
						name: 'Iași County',
						value: 'RO-IS',
					},
					{
						name: 'Ibaraki Prefecture',
						value: 'JP-08',
					},
					{
						name: 'Ibb',
						value: 'YE-IB',
					},
					{
						name: 'Ica',
						value: 'PE-ICA',
					},
					{
						name: 'Iceland',
						value: 'IS',
					},
					{
						name: 'Ida-Viru County',
						value: 'EE-44',
					},
					{
						name: 'Idaho',
						value: 'US-ID',
					},
					{
						name: 'Idaho Falls-Pocatello ID',
						value: '758',
					},
					{
						name: 'Idlib Governorate',
						value: 'SY-ID',
					},
					{
						name: 'Iecava Municipality',
						value: 'LV-034',
					},
					{
						name: 'Iğdır',
						value: 'TR-76',
					},
					{
						name: 'Ijuw',
						value: 'NR-10',
					},
					{
						name: 'Ikšķile Municipality',
						value: 'LV-035',
					},
					{
						name: 'Ilam',
						value: 'IR-05',
					},
					{
						name: 'Île-de-France',
						value: 'FR-J',
					},
					{
						name: 'Ilfov County',
						value: 'RO-IF',
					},
					{
						name: 'Illinois',
						value: 'US-IL',
					},
					{
						name: 'Illizi Province',
						value: 'DZ-33',
					},
					{
						name: 'Ilocos Region',
						value: 'PH-01',
					},
					{
						name: 'Ilūkste Municipality',
						value: 'LV-036',
					},
					{
						name: 'Imbabura Province',
						value: 'EC-I',
					},
					{
						name: 'Imereti',
						value: 'GE-IM',
					},
					{
						name: 'Imo',
						value: 'NG-IM',
					},
					{
						name: 'Inagua',
						value: 'BS-IN',
					},
					{
						name: 'Incheon',
						value: 'KR-28',
					},
					{
						name: 'Inchiri',
						value: 'MR-12',
					},
					{
						name: 'Inčukalna novads',
						value: 'LV-037',
					},
					{
						name: 'Independencia Province',
						value: 'DO-10',
					},
					{
						name: 'India',
						value: 'IN',
					},
					{
						name: 'Indiana',
						value: 'US-IN',
					},
					{
						name: 'Indianapolis IN',
						value: '527',
					},
					{
						name: 'Indonesia',
						value: 'ID',
					},
					{
						name: 'Ingushetia',
						value: 'RU-IN',
					},
					{
						name: 'Inhambane Province',
						value: 'MZ-I',
					},
					{
						name: 'Inner Mongolia',
						value: 'CN-15',
					},
					{
						name: 'Intibuca',
						value: 'HN-IN',
					},
					{
						name: 'Iowa',
						value: 'US-IA',
					},
					{
						name: 'Iran',
						value: 'IR',
					},
					{
						name: 'Iraq',
						value: 'IQ',
					},
					{
						name: 'Irbid Governorate',
						value: 'JO-IR',
					},
					{
						name: 'Ireland',
						value: 'IE',
					},
					{
						name: 'Iringa',
						value: 'TZ-04',
					},
					{
						name: 'Irkutsk Oblast',
						value: 'RU-IRK',
					},
					{
						name: 'Isabel Province',
						value: 'SB-IS',
					},
					{
						name: 'Isfahan',
						value: 'IR-04',
					},
					{
						name: 'Ishikawa Prefecture',
						value: 'JP-17',
					},
					{
						name: 'Isla de la Juventud',
						value: 'CU-99',
					},
					{
						name: 'Islamabad Capital Territory',
						value: 'PK-IS',
					},
					{
						name: 'Isle of Man',
						value: 'IM',
					},
					{
						name: 'Ismailia Governorate',
						value: 'EG-IS',
					},
					{
						name: 'Isparta Province',
						value: 'TR-32',
					},
					{
						name: 'Israel',
						value: 'IL',
					},
					{
						name: 'İstanbul',
						value: 'TR-34',
					},
					{
						name: 'Istria County',
						value: 'HR-18',
					},
					{
						name: 'Italy',
						value: 'IT',
					},
					{
						name: 'Itapua',
						value: 'PY-7',
					},
					{
						name: "Ivano-Frankivs'ka oblast",
						value: 'UA-26',
					},
					{
						name: 'Ivanovo Oblast',
						value: 'RU-IVA',
					},
					{
						name: 'Iwate Prefecture',
						value: 'JP-03',
					},
					{
						name: 'Izabal Department',
						value: 'GT-IZ',
					},
					{
						name: 'İzmir',
						value: 'TR-35',
					},
					{
						name: 'Jabat Island',
						value: 'MH-JAB',
					},
					{
						name: 'Jackson MS',
						value: '718',
					},
					{
						name: 'Jackson TN',
						value: '639',
					},
					{
						name: 'Jacksonville FL',
						value: '561',
					},
					{
						name: 'Jalapa Department',
						value: 'GT-JA',
					},
					{
						name: 'Jalisco',
						value: 'MX-JAL',
					},
					{
						name: 'Jaluit Atoll',
						value: 'MH-JAL',
					},
					{
						name: 'Jamaica',
						value: 'JM',
					},
					{
						name: 'Jambi',
						value: 'ID-JA',
					},
					{
						name: 'Jambol',
						value: 'BG-28',
					},
					{
						name: 'Jambyl Province',
						value: 'KZ-ZHA',
					},
					{
						name: 'Jammu and Kashmir',
						value: 'IN-JK',
					},
					{
						name: 'Jamtland County',
						value: 'SE-Z',
					},
					{
						name: 'Janub Darfur',
						value: 'SD-DS',
					},
					{
						name: 'Japan',
						value: 'JP',
					},
					{
						name: 'Järva County',
						value: 'EE-51',
					},
					{
						name: 'Jász-Nagykun-Szolnok',
						value: 'HU-JN',
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
						name: 'Jazan',
						value: 'SA-09',
					},
					{
						name: 'Jeju-do',
						value: 'KR-49',
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
						name: 'Jendouba',
						value: 'TN-32',
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
						name: 'Jerash Governorate',
						value: 'JO-JA',
					},
					{
						name: 'Jersey',
						value: 'JE',
					},
					{
						name: 'Jerusalem District',
						value: 'IL-JM',
					},
					{
						name: 'Jewish Autonomous Oblast',
						value: 'RU-YEV',
					},
					{
						name: 'Jharkhand',
						value: 'IN-JH',
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
						name: 'Jigawa',
						value: 'NG-JI',
					},
					{
						name: 'Jijel Province',
						value: 'DZ-18',
					},
					{
						name: 'Jilin',
						value: 'CN-22',
					},
					{
						name: 'Jinotega',
						value: 'NI-JI',
					},
					{
						name: 'Jiwaka Province',
						value: 'PG-JWK',
					},
					{
						name: 'Jizzakh Province',
						value: 'UZ-JI',
					},
					{
						name: 'Jõgeva County',
						value: 'EE-49',
					},
					{
						name: 'Johnstown-Altoona PA',
						value: '574',
					},
					{
						name: 'Johor',
						value: 'MY-01',
					},
					{
						name: 'Jonesboro AR',
						value: '734',
					},
					{
						name: 'Jonglei',
						value: 'SS-JG',
					},
					{
						name: 'Jonkoping County',
						value: 'SE-F',
					},
					{
						name: 'Joplin MO-Pittsburg KS',
						value: '603',
					},
					{
						name: 'Jordan',
						value: 'JO',
					},
					{
						name: 'Jowzjan',
						value: 'AF-JOW',
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
						name: 'Jujuy',
						value: 'AR-Y',
					},
					{
						name: 'Juneau AK',
						value: '747',
					},
					{
						name: 'Junin',
						value: 'PE-JUN',
					},
					{
						name: 'Jūrmala',
						value: 'LV-JUR',
					},
					{
						name: 'Jutiapa Department',
						value: 'GT-JU',
					},
					{
						name: 'Kabardino-Balkaria',
						value: 'RU-KB',
					},
					{
						name: 'Kabul',
						value: 'AF-KAB',
					},
					{
						name: 'Kachin',
						value: 'MM-11',
					},
					{
						name: 'Kaduna',
						value: 'NG-KD',
					},
					{
						name: 'Kaffrine Region',
						value: 'SN-KA',
					},
					{
						name: 'Kafr El Sheikh Governorate',
						value: 'EG-KFS',
					},
					{
						name: 'Kagawa Prefecture',
						value: 'JP-37',
					},
					{
						name: 'Kagera',
						value: 'TZ-05',
					},
					{
						name: 'Kagoshima Prefecture',
						value: 'JP-46',
					},
					{
						name: 'Kahramanmaraş Province',
						value: 'TR-46',
					},
					{
						name: 'Kainuu',
						value: 'FI-05',
					},
					{
						name: 'Kairouan',
						value: 'TN-41',
					},
					{
						name: 'Kakheti',
						value: 'GE-KA',
					},
					{
						name: 'Kalasin',
						value: 'TH-46',
					},
					{
						name: 'Kaliningrad Oblast',
						value: 'RU-KGD',
					},
					{
						name: 'Kalmar County',
						value: 'SE-H',
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
						name: 'Kamphaeng Phet',
						value: 'TH-62',
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
						name: 'Kanagawa Prefecture',
						value: 'JP-14',
					},
					{
						name: 'Kanchanaburi',
						value: 'TH-71',
					},
					{
						name: 'Kandahar',
						value: 'AF-KAN',
					},
					{
						name: 'Kandal',
						value: 'KH-8',
					},
					{
						name: 'Kandava Municipality',
						value: 'LV-043',
					},
					{
						name: 'Kanem',
						value: 'TD-KA',
					},
					{
						name: 'Kangwon',
						value: 'KP-07',
					},
					{
						name: 'Kankan',
						value: 'GN-K',
					},
					{
						name: 'Kano',
						value: 'NG-KN',
					},
					{
						name: 'Kansas',
						value: 'US-KS',
					},
					{
						name: 'Kansas City MO',
						value: '616',
					},
					{
						name: 'Kaohsiung City',
						value: 'TW-KHH',
					},
					{
						name: 'Kaolack Region',
						value: 'SN-KL',
					},
					{
						name: 'Kapisa',
						value: 'AF-KAP',
					},
					{
						name: 'Kara',
						value: 'TG-K',
					},
					{
						name: 'Karabük',
						value: 'TR-78',
					},
					{
						name: 'Karachay-Cherkessia',
						value: 'RU-KC',
					},
					{
						name: 'Karagandy Region',
						value: 'KZ-KAR',
					},
					{
						name: 'Karak Governorate',
						value: 'JO-KA',
					},
					{
						name: 'Karaman',
						value: 'TR-70',
					},
					{
						name: 'Karas Region',
						value: 'NA-KA',
					},
					{
						name: 'Karbala',
						value: 'IQ-KA',
					},
					{
						name: 'Kardzhali Province',
						value: 'BG-09',
					},
					{
						name: 'Karlovac County',
						value: 'HR-04',
					},
					{
						name: 'Karlovy Vary Region',
						value: 'CZ-KA',
					},
					{
						name: 'Karnataka',
						value: 'IN-KA',
					},
					{
						name: 'Kars',
						value: 'TR-36',
					},
					{
						name: 'Kārsava Municipality',
						value: 'LV-044',
					},
					{
						name: 'Karuzi',
						value: 'BI-KR',
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
						name: 'Kashkadarya Province',
						value: 'UZ-QA',
					},
					{
						name: 'Kassala',
						value: 'SD-KA',
					},
					{
						name: 'Kasserine',
						value: 'TN-42',
					},
					{
						name: 'Kastamonu',
						value: 'TR-37',
					},
					{
						name: 'Katanga',
						value: 'CD-KA',
					},
					{
						name: 'Katsina',
						value: 'NG-KT',
					},
					{
						name: 'Kaunas County',
						value: 'LT-KU',
					},
					{
						name: 'Kavango Region',
						value: 'NA-OK',
					},
					{
						name: 'Kayah',
						value: 'MM-12',
					},
					{
						name: 'Kayangel',
						value: 'PW-100',
					},
					{
						name: 'Kayanza',
						value: 'BI-KY',
					},
					{
						name: 'Kayes',
						value: 'ML-1',
					},
					{
						name: 'Kayin State',
						value: 'MM-13',
					},
					{
						name: 'Kayseri Province',
						value: 'TR-38',
					},
					{
						name: 'Kazakhstan',
						value: 'KZ',
					},
					{
						name: 'Kebbi',
						value: 'NG-KE',
					},
					{
						name: 'Kebili',
						value: 'TN-73',
					},
					{
						name: 'Kedah',
						value: 'MY-02',
					},
					{
						name: 'Kédougou Region',
						value: 'SN-KE',
					},
					{
						name: 'Kef',
						value: 'TN-33',
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
						name: 'Kelantan',
						value: 'MY-03',
					},
					{
						name: 'Kemerovo Oblast',
						value: 'RU-KEM',
					},
					{
						name: 'Kemo',
						value: 'CF-KG',
					},
					{
						name: 'Kentucky',
						value: 'US-KY',
					},
					{
						name: 'Kenya',
						value: 'KE',
					},
					{
						name: 'Kep',
						value: 'KH-23',
					},
					{
						name: 'Kerala',
						value: 'IN-KL',
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
						name: 'Kgalagadi',
						value: 'BW-KG',
					},
					{
						name: 'Kgatleng',
						value: 'BW-KL',
					},
					{
						name: 'Khabarovsk Krai',
						value: 'RU-KHA',
					},
					{
						name: 'Khammouane',
						value: 'LA-KH',
					},
					{
						name: 'Khanh Hoa Province',
						value: 'VN-34',
					},
					{
						name: 'Khanty-Mansi Autonomous Okrug',
						value: 'RU-KHM',
					},
					{
						name: 'Kharkiv Oblast',
						value: 'UA-63',
					},
					{
						name: 'Khartoum',
						value: 'SD-KH',
					},
					{
						name: 'Khatlon',
						value: 'TJ-KT',
					},
					{
						name: 'Khenchela Province',
						value: 'DZ-40',
					},
					{
						name: 'Khentii',
						value: 'MN-039',
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
						name: 'Khomas Region',
						value: 'NA-KH',
					},
					{
						name: 'Khon Kaen',
						value: 'TH-40',
					},
					{
						name: 'Khorasan Razavi',
						value: 'IR-30',
					},
					{
						name: 'Khorezm Province',
						value: 'UZ-XO',
					},
					{
						name: 'Khost',
						value: 'AF-KHO',
					},
					{
						name: 'Khovd',
						value: 'MN-043',
					},
					{
						name: 'Khulna Division',
						value: 'BD-D',
					},
					{
						name: 'Khuvsgul',
						value: 'MN-041',
					},
					{
						name: 'Khuzestan',
						value: 'IR-10',
					},
					{
						name: 'Khyber Pakhtunkhwa',
						value: 'PK-KP',
					},
					{
						name: 'Kidal',
						value: 'ML-8',
					},
					{
						name: 'Kie-Ntem',
						value: 'GQ-KN',
					},
					{
						name: 'Kien Giang',
						value: 'VN-47',
					},
					{
						name: 'Kigali',
						value: 'RW-01',
					},
					{
						name: 'Kigoma',
						value: 'TZ-08',
					},
					{
						name: 'Kili Island',
						value: 'MH-KIL',
					},
					{
						name: 'Kilimanjaro',
						value: 'TZ-09',
					},
					{
						name: 'Kilis',
						value: 'TR-79',
					},
					{
						name: 'Kindia',
						value: 'GN-D',
					},
					{
						name: 'Kingston Parish',
						value: 'JM-01',
					},
					{
						name: 'Kinshasa',
						value: 'CD-KN',
					},
					{
						name: 'Kiribati',
						value: 'KI',
					},
					{
						name: 'Kirkuk',
						value: 'IQ-TS',
					},
					{
						name: 'Kirov Oblast',
						value: 'RU-KIR',
					},
					{
						name: "Kirovohrads'ka oblast",
						value: 'UA-35',
					},
					{
						name: 'Kirundo',
						value: 'BI-KI',
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
						name: 'Klaipėda County',
						value: 'LT-KL',
					},
					{
						name: 'Knoxville TN',
						value: '557',
					},
					{
						name: 'Kocaeli',
						value: 'TR-41',
					},
					{
						name: 'Kocēni Municipality',
						value: 'LV-045',
					},
					{
						name: 'Kochi Prefecture',
						value: 'JP-39',
					},
					{
						name: 'Kogi',
						value: 'NG-KO',
					},
					{
						name: 'Koh Kong',
						value: 'KH-9',
					},
					{
						name: 'Kohgiluyeh Va Boyer Ahmad',
						value: 'IR-18',
					},
					{
						name: 'Koknese Municipality',
						value: 'LV-046',
					},
					{
						name: 'Kolasin',
						value: 'ME-09',
					},
					{
						name: 'Kolda Region',
						value: 'SN-KD',
					},
					{
						name: 'Komárom-Esztergom',
						value: 'HU-KE',
					},
					{
						name: 'Komi Republic',
						value: 'RU-KO',
					},
					{
						name: 'Kon Tum Province',
						value: 'VN-28',
					},
					{
						name: 'Konya',
						value: 'TR-42',
					},
					{
						name: 'Koprivnica-Križevci County',
						value: 'HR-06',
					},
					{
						name: 'Korca',
						value: 'AL-06',
					},
					{
						name: 'Koror',
						value: 'PW-150',
					},
					{
						name: 'Košice Region',
						value: 'SK-KI',
					},
					{
						name: 'Kosovo',
						value: 'XK',
					},
					{
						name: 'Kosrae',
						value: 'FM-KSA',
					},
					{
						name: 'Kostanay Region',
						value: 'KZ-KUS',
					},
					{
						name: 'Kostroma Oblast',
						value: 'RU-KOS',
					},
					{
						name: 'Kotayk Province',
						value: 'AM-KT',
					},
					{
						name: 'Kotor',
						value: 'ME-10',
					},
					{
						name: 'Kouffo',
						value: 'BJ-KO',
					},
					{
						name: 'Kouilou',
						value: 'CG-5',
					},
					{
						name: 'Koulikoro',
						value: 'ML-2',
					},
					{
						name: 'Krabi',
						value: 'TH-81',
					},
					{
						name: 'Krapina-Zagorje County',
						value: 'HR-02',
					},
					{
						name: 'Krāslava Municipality',
						value: 'LV-047',
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
						name: 'Kratie',
						value: 'KH-10',
					},
					{
						name: 'Krimulda Municipality',
						value: 'LV-048',
					},
					{
						name: 'Kronoberg County',
						value: 'SE-G',
					},
					{
						name: 'Krustpils Municipality',
						value: 'LV-049',
					},
					{
						name: 'Kujalleq',
						value: 'GL-KU',
					},
					{
						name: 'Kukës County',
						value: 'AL-07',
					},
					{
						name: 'Kuldīga Municipality',
						value: 'LV-050',
					},
					{
						name: 'Kumamoto Prefecture',
						value: 'JP-43',
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
						name: 'Kunene Region',
						value: 'NA-KU',
					},
					{
						name: 'Kurdistan',
						value: 'IR-16',
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
						name: 'Kütahya',
						value: 'TR-43',
					},
					{
						name: 'Kuwait',
						value: 'KW',
					},
					{
						name: 'Kuyavian-Pomeranian Voivodeship',
						value: 'PL-KP',
					},
					{
						name: 'Kvemo Kartli',
						value: 'GE-KK',
					},
					{
						name: 'Kwajalein Atoll',
						value: 'MH-KWA',
					},
					{
						name: 'Kwara',
						value: 'NG-KW',
					},
					{
						name: 'KwaZulu-Natal',
						value: 'ZA-NL',
					},
					{
						name: 'Kweneng',
						value: 'BW-KW',
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
						name: 'Kymenlaakso',
						value: 'FI-09',
					},
					{
						name: 'Kyoto Prefecture',
						value: 'JP-26',
					},
					{
						name: 'Kyrgyzstan',
						value: 'KG',
					},
					{
						name: 'Kyustendil Province',
						value: 'BG-10',
					},
					{
						name: 'Kyzylorda Province',
						value: 'KZ-KZY',
					},
					{
						name: 'La Altagracia Province',
						value: 'DO-11',
					},
					{
						name: 'La Crosse-Eau Claire WI',
						value: '702',
					},
					{
						name: 'La Digue',
						value: 'SC-15',
					},
					{
						name: 'La Guajira',
						value: 'CO-LAG',
					},
					{
						name: 'La Libertad (PE-LAL)',
						value: 'PE-LAL',
					},
					{
						name: 'La Libertad (SV-LI)',
						value: 'SV-LI',
					},
					{
						name: 'La Manouba',
						value: 'TN-14',
					},
					{
						name: 'La Massana',
						value: 'AD-04',
					},
					{
						name: 'La Pampa Province',
						value: 'AR-L',
					},
					{
						name: 'La Paz (HN-LP)',
						value: 'HN-LP',
					},
					{
						name: 'La Paz (SV-PA)',
						value: 'SV-PA',
					},
					{
						name: 'La Paz Department',
						value: 'BO-L',
					},
					{
						name: 'La Rioja',
						value: 'ES-RI',
					},
					{
						name: 'La Rioja Province',
						value: 'AR-F',
					},
					{
						name: 'La Riviere Anglaise',
						value: 'SC-16',
					},
					{
						name: 'La Romana Province',
						value: 'DO-12',
					},
					{
						name: 'La Union',
						value: 'SV-UN',
					},
					{
						name: 'La Vega Province',
						value: 'DO-13',
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
						name: 'Laayoune-Boujdour-Sakia El Hamra',
						value: 'MA-15',
					},
					{
						name: 'Labé',
						value: 'GN-L',
					},
					{
						name: 'Laborie',
						value: 'LC-07',
					},
					{
						name: 'Labuan Federal Territory',
						value: 'MY-15',
					},
					{
						name: 'Lac',
						value: 'TD-LC',
					},
					{
						name: 'Lacs',
						value: 'CI-07',
					},
					{
						name: 'Lae Atoll',
						value: 'MH-LAE',
					},
					{
						name: 'Lafayette IN',
						value: '582',
					},
					{
						name: 'Lafayette LA',
						value: '642',
					},
					{
						name: 'Laghman',
						value: 'AF-LAG',
					},
					{
						name: 'Laghouat Province',
						value: 'DZ-03',
					},
					{
						name: 'Lagos',
						value: 'NG-LA',
					},
					{
						name: 'Lagunes',
						value: 'CI-01',
					},
					{
						name: 'Lahij',
						value: 'YE-LA',
					},
					{
						name: 'Lai Chau',
						value: 'VN-01',
					},
					{
						name: 'Lake Charles LA',
						value: '643',
					},
					{
						name: 'Lakshadweep',
						value: 'IN-LD',
					},
					{
						name: 'Lâm Đồng',
						value: 'VN-35',
					},
					{
						name: 'Lambayeque',
						value: 'PE-LAM',
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
						name: 'Lampung',
						value: 'ID-LA',
					},
					{
						name: 'Lang Son Province',
						value: 'VN-09',
					},
					{
						name: 'Languedoc-Roussillon',
						value: 'FR-K',
					},
					{
						name: 'Lansing MI',
						value: '551',
					},
					{
						name: 'Lao Cai',
						value: 'VN-02',
					},
					{
						name: 'Laos',
						value: 'LA',
					},
					{
						name: 'Lapland',
						value: 'FI-10',
					},
					{
						name: 'Lara',
						value: 'VE-K',
					},
					{
						name: 'Laredo TX',
						value: '749',
					},
					{
						name: 'Larnaca',
						value: 'CY-03',
					},
					{
						name: 'Las Tunas',
						value: 'CU-10',
					},
					{
						name: 'Las Vegas NV',
						value: '839',
					},
					{
						name: 'Latakia Governorate',
						value: 'SY-LA',
					},
					{
						name: 'Latvia',
						value: 'LV',
					},
					{
						name: 'Lautem',
						value: 'TL-LA',
					},
					{
						name: 'Lavalleja Department',
						value: 'UY-LA',
					},
					{
						name: 'Lazio',
						value: 'IT-62',
					},
					{
						name: 'Lebanon',
						value: 'LB',
					},
					{
						name: 'Lebap',
						value: 'TM-L',
					},
					{
						name: 'Leiria District',
						value: 'PT-10',
					},
					{
						name: 'Lekoumou',
						value: 'CG-2',
					},
					{
						name: 'Lempira',
						value: 'HN-LE',
					},
					{
						name: 'Leningrad Oblast',
						value: 'RU-LEN',
					},
					{
						name: 'Leon',
						value: 'NI-LE',
					},
					{
						name: 'Leova',
						value: 'MD-LE',
					},
					{
						name: 'Leribe',
						value: 'LS-C',
					},
					{
						name: 'Les Mamelles',
						value: 'SC-24',
					},
					{
						name: 'Lesotho',
						value: 'LS',
					},
					{
						name: 'Lesser Poland Voivodeship',
						value: 'PL-MA',
					},
					{
						name: 'Lexington KY',
						value: '541',
					},
					{
						name: 'Lezhë County',
						value: 'AL-08',
					},
					{
						name: 'Lhuntse',
						value: 'BT-44',
					},
					{
						name: 'Liaoning',
						value: 'CN-21',
					},
					{
						name: 'Lib Island',
						value: 'MH-LIB',
					},
					{
						name: 'Liberec Region',
						value: 'CZ-LI',
					},
					{
						name: 'Liberia',
						value: 'LR',
					},
					{
						name: 'Libya',
						value: 'LY',
					},
					{
						name: 'Liechtenstein',
						value: 'LI',
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
						name: 'Liguria',
						value: 'IT-42',
					},
					{
						name: 'Lika-Senj County',
						value: 'HR-09',
					},
					{
						name: 'Likiep Atoll',
						value: 'MH-LIK',
					},
					{
						name: 'Likouala',
						value: 'CG-7',
					},
					{
						name: 'Lima OH',
						value: '558',
					},
					{
						name: 'Lima Region',
						value: 'PE-LIM',
					},
					{
						name: 'Limassol',
						value: 'CY-02',
					},
					{
						name: 'Limbaži Municipality',
						value: 'LV-054',
					},
					{
						name: 'Limburg',
						value: 'NL-LI',
					},
					{
						name: 'Limón Province',
						value: 'CR-L',
					},
					{
						name: 'Limousin',
						value: 'FR-L',
					},
					{
						name: 'Limpopo',
						value: 'ZA-LP',
					},
					{
						name: 'Lincoln & Hastings-Kearney NE',
						value: '722',
					},
					{
						name: 'Lindi',
						value: 'TZ-12',
					},
					{
						name: 'Line Islands',
						value: 'KI-L',
					},
					{
						name: 'Lipetsk Oblast',
						value: 'RU-LIP',
					},
					{
						name: 'Liquica',
						value: 'TL-LI',
					},
					{
						name: 'Lisbon',
						value: 'PT-11',
					},
					{
						name: 'Lithuania',
						value: 'LT',
					},
					{
						name: 'Litoral',
						value: 'GQ-LI',
					},
					{
						name: 'Little Rock-Pine Bluff AR',
						value: '693',
					},
					{
						name: 'Littoral',
						value: 'BJ-LI',
					},
					{
						name: 'Līvāni Municipality',
						value: 'LV-056',
					},
					{
						name: 'Lobaye',
						value: 'CF-LB',
					},
					{
						name: 'Łódź Voivodeship',
						value: 'PL-LD',
					},
					{
						name: 'Loei',
						value: 'TH-42',
					},
					{
						name: 'Lofa',
						value: 'LR-LO',
					},
					{
						name: 'Logar',
						value: 'AF-LOG',
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
						name: 'Loja',
						value: 'EC-L',
					},
					{
						name: 'Lombardy',
						value: 'IT-25',
					},
					{
						name: 'Long An Province',
						value: 'VN-41',
					},
					{
						name: 'Long Island',
						value: 'BS-LI',
					},
					{
						name: 'Lopburi',
						value: 'TH-16',
					},
					{
						name: 'Lorestan',
						value: 'IR-20',
					},
					{
						name: 'Loreto',
						value: 'PE-LOR',
					},
					{
						name: 'Lori Province',
						value: 'AM-LO',
					},
					{
						name: 'Lorraine',
						value: 'FR-M',
					},
					{
						name: 'Los Angeles CA',
						value: '803',
					},
					{
						name: 'Los Lagos Region',
						value: 'CL-LL',
					},
					{
						name: 'Los Ríos Province',
						value: 'EC-R',
					},
					{
						name: 'Los Ríos Region',
						value: 'CL-LR',
					},
					{
						name: 'Los Santos Province',
						value: 'PA-7',
					},
					{
						name: 'Louangphabang',
						value: 'LA-LP',
					},
					{
						name: 'Louga Region',
						value: 'SN-LG',
					},
					{
						name: 'Louisiana',
						value: 'US-LA',
					},
					{
						name: 'Louisville KY',
						value: '529',
					},
					{
						name: 'Lovec',
						value: 'BG-11',
					},
					{
						name: 'Lower Austria',
						value: 'AT-3',
					},
					{
						name: 'Lower Normandy',
						value: 'FR-P',
					},
					{
						name: 'Lower River',
						value: 'GM-L',
					},
					{
						name: 'Lower Saxony',
						value: 'DE-NI',
					},
					{
						name: 'Lower Silesian Voivodeship',
						value: 'PL-DS',
					},
					{
						name: 'Luanda Province',
						value: 'AO-LUA',
					},
					{
						name: 'Luang Namtha',
						value: 'LA-LM',
					},
					{
						name: 'Luapula',
						value: 'ZM-04',
					},
					{
						name: 'Lubāna Municipality',
						value: 'LV-057',
					},
					{
						name: 'Lubbock TX',
						value: '651',
					},
					{
						name: 'Lublin Voivodeship',
						value: 'PL-LU',
					},
					{
						name: 'Lubombo',
						value: 'SZ-LU',
					},
					{
						name: 'Lubusz Voivodeship',
						value: 'PL-LB',
					},
					{
						name: 'Lucerne',
						value: 'CH-LU',
					},
					{
						name: 'Ludza Municipality',
						value: 'LV-058',
					},
					{
						name: "Luhans'ka oblast",
						value: 'UA-09',
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
						name: 'Lusaka',
						value: 'ZM-09',
					},
					{
						name: 'Luxembourg',
						value: 'LU',
					},
					{
						name: 'Luxembourg District',
						value: 'LU-L',
					},
					{
						name: 'Luxor Governorate',
						value: 'EG-LX',
					},
					{
						name: 'Lviv Oblast',
						value: 'UA-46',
					},
					{
						name: "M'Sila Province",
						value: 'DZ-28',
					},
					{
						name: "Ma'an Governorate",
						value: 'JO-MN',
					},
					{
						name: "Ma'rib",
						value: 'YE-MA',
					},
					{
						name: 'Macao',
						value: 'MO',
					},
					{
						name: 'Macon GA',
						value: '503',
					},
					{
						name: 'Madaba Governorate',
						value: 'JO-MD',
					},
					{
						name: 'Madagascar',
						value: 'MG',
					},
					{
						name: 'Madang Province',
						value: 'PG-MPM',
					},
					{
						name: 'Madeira',
						value: 'PT-30',
					},
					{
						name: 'Madhya Pradesh',
						value: 'IN-MP',
					},
					{
						name: 'Madinat ash Shamal',
						value: 'QA-MS',
					},
					{
						name: 'Madison WI',
						value: '669',
					},
					{
						name: 'Madona Municipality',
						value: 'LV-059',
					},
					{
						name: 'Madre de Dios',
						value: 'PE-MDD',
					},
					{
						name: 'Madriz',
						value: 'NI-MD',
					},
					{
						name: 'Mae Hong Son',
						value: 'TH-58',
					},
					{
						name: 'Mafeteng',
						value: 'LS-E',
					},
					{
						name: 'Mafraq Governorate',
						value: 'JO-MA',
					},
					{
						name: 'Magadan Oblast',
						value: 'RU-MAG',
					},
					{
						name: 'Magallanes y la Antártica Chilena Region',
						value: 'CL-MA',
					},
					{
						name: 'Magdalena',
						value: 'CO-MAG',
					},
					{
						name: 'Magway Region',
						value: 'MM-03',
					},
					{
						name: 'Maha Sarakham',
						value: 'TH-44',
					},
					{
						name: 'Mahaica-Berbice',
						value: 'GY-MA',
					},
					{
						name: 'Mahajanga',
						value: 'MG-M',
					},
					{
						name: 'Maharashtra',
						value: 'IN-MH',
					},
					{
						name: 'Mahdia',
						value: 'TN-53',
					},
					{
						name: 'Maine',
						value: 'US-ME',
					},
					{
						name: 'Maio',
						value: 'CV-MA',
					},
					{
						name: 'Majuro Atoll',
						value: 'MH-MAJ',
					},
					{
						name: 'Makamba',
						value: 'BI-MA',
					},
					{
						name: 'Makedonska Kamenitsa',
						value: 'MK-51',
					},
					{
						name: 'Makira-Ulawa',
						value: 'SB-MK',
					},
					{
						name: 'Makkah Province',
						value: 'SA-02',
					},
					{
						name: 'Malacca',
						value: 'MY-04',
					},
					{
						name: 'Malaita Province',
						value: 'SB-ML',
					},
					{
						name: 'Malampa Province',
						value: 'VU-MAP',
					},
					{
						name: 'Malanje Province',
						value: 'AO-MAL',
					},
					{
						name: 'Malatya',
						value: 'TR-44',
					},
					{
						name: 'Malawi',
						value: 'MW',
					},
					{
						name: 'Malaysia',
						value: 'MY',
					},
					{
						name: 'Maldives',
						value: 'MV',
					},
					{
						name: 'Maldonado Department',
						value: 'UY-MA',
					},
					{
						name: 'Male',
						value: 'MV-MLE',
					},
					{
						name: 'Mali',
						value: 'ML',
					},
					{
						name: 'Maloelap Atoll',
						value: 'MH-MAL',
					},
					{
						name: 'Mālpils Municipality',
						value: 'LV-061',
					},
					{
						name: 'Malta',
						value: 'MT',
					},
					{
						name: 'Maluku',
						value: 'ID-MA',
					},
					{
						name: 'Mambere-Kadei',
						value: 'CF-HS',
					},
					{
						name: 'Mamou',
						value: 'GN-M',
					},
					{
						name: 'Manabí Province',
						value: 'EC-M',
					},
					{
						name: 'Managua',
						value: 'NI-MN',
					},
					{
						name: 'Manatuto',
						value: 'TL-MT',
					},
					{
						name: 'Manawatu-Wanganui',
						value: 'NZ-MWT',
					},
					{
						name: 'Manchester Parish',
						value: 'JM-12',
					},
					{
						name: 'Mandalay Region',
						value: 'MM-04',
					},
					{
						name: 'Mandoul',
						value: 'TD-MA',
					},
					{
						name: 'Mangrove Cay',
						value: 'BS-MC',
					},
					{
						name: 'Mangystau Region',
						value: 'KZ-MAN',
					},
					{
						name: 'Manica Province',
						value: 'MZ-B',
					},
					{
						name: 'Manicaland',
						value: 'ZW-MA',
					},
					{
						name: 'Maniema',
						value: 'CD-MA',
					},
					{
						name: 'Manipur',
						value: 'IN-MN',
					},
					{
						name: 'Manisa',
						value: 'TR-45',
					},
					{
						name: 'Manitoba',
						value: 'CA-MB',
					},
					{
						name: 'Mankato MN',
						value: '737',
					},
					{
						name: 'Manufahi',
						value: 'TL-MF',
					},
					{
						name: 'Manus Province',
						value: 'PG-MRL',
					},
					{
						name: 'Manyara',
						value: 'TZ-26',
					},
					{
						name: 'Manzini',
						value: 'SZ-MA',
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
						name: 'Mara',
						value: 'TZ-13',
					},
					{
						name: 'Maradi',
						value: 'NE-4',
					},
					{
						name: 'Marahoue',
						value: 'CI-12',
					},
					{
						name: 'Maramureș County',
						value: 'RO-MM',
					},
					{
						name: 'Marche',
						value: 'IT-57',
					},
					{
						name: 'Mardin',
						value: 'TR-47',
					},
					{
						name: 'Margibi',
						value: 'LR-MG',
					},
					{
						name: 'Mari El Republic',
						value: 'RU-ME',
					},
					{
						name: 'María Trinidad Sánchez Province',
						value: 'DO-14',
					},
					{
						name: 'Marijampolė County',
						value: 'LT-MR',
					},
					{
						name: 'Maritime',
						value: 'TG-M',
					},
					{
						name: 'Markazi',
						value: 'IR-22',
					},
					{
						name: 'Marlborough',
						value: 'NZ-MBH',
					},
					{
						name: 'Marowijne',
						value: 'SR-MA',
					},
					{
						name: 'Marquette MI',
						value: '553',
					},
					{
						name: 'Marrakesh-Tensift-El Haouz',
						value: 'MA-11',
					},
					{
						name: 'Marshall Islands',
						value: 'MH',
					},
					{
						name: 'Martinique',
						value: 'MQ',
					},
					{
						name: 'Mārupe Municipality',
						value: 'LV-062',
					},
					{
						name: 'Mary',
						value: 'TM-M',
					},
					{
						name: 'Maryland (LR)',
						value: 'LR-MY',
					},
					{
						name: 'Maryland (US)',
						value: 'US-MD',
					},
					{
						name: 'Masaya',
						value: 'NI-MS',
					},
					{
						name: 'Mascara Province',
						value: 'DZ-29',
					},
					{
						name: 'Maseru',
						value: 'LS-A',
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
						name: 'Masovian Voivodeship',
						value: 'PL-MZ',
					},
					{
						name: 'Massachusetts',
						value: 'US-MA',
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
						name: 'Matagalpa',
						value: 'NI-MT',
					},
					{
						name: 'Matam Region',
						value: 'SN-MT',
					},
					{
						name: 'Matanzas',
						value: 'CU-04',
					},
					{
						name: 'Matrouh Governorate',
						value: 'EG-MT',
					},
					{
						name: 'Maule Region',
						value: 'CL-ML',
					},
					{
						name: 'Mauren',
						value: 'LI-04',
					},
					{
						name: 'Mauritania',
						value: 'MR',
					},
					{
						name: 'Mauritius',
						value: 'MU',
					},
					{
						name: 'Mayabeque',
						value: 'CU-16',
					},
					{
						name: 'Mayaguana',
						value: 'BS-MG',
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
						name: 'Mayotte',
						value: 'YT',
					},
					{
						name: 'Maysan',
						value: 'IQ-MA',
					},
					{
						name: 'Mazandaran',
						value: 'IR-21',
					},
					{
						name: 'Mazsalaca Municipality',
						value: 'LV-060',
					},
					{
						name: 'Mbeya',
						value: 'TZ-14',
					},
					{
						name: 'Mbomou',
						value: 'CF-MB',
					},
					{
						name: 'Mecklenburg-Vorpommern',
						value: 'DE-MV',
					},
					{
						name: 'Médéa Province',
						value: 'DZ-26',
					},
					{
						name: 'Medenine',
						value: 'TN-82',
					},
					{
						name: 'Medford-Klamath Falls OR',
						value: '813',
					},
					{
						name: 'Međimurje County',
						value: 'HR-20',
					},
					{
						name: 'Meghalaya',
						value: 'IN-ML',
					},
					{
						name: 'Mehedinți County',
						value: 'RO-MH',
					},
					{
						name: 'Mejit Island',
						value: 'MH-MEJ',
					},
					{
						name: 'Meknes-Tafilalet',
						value: 'MA-06',
					},
					{
						name: 'Melekeok',
						value: 'PW-212',
					},
					{
						name: 'Melilla',
						value: 'ES-ML',
					},
					{
						name: 'Memphis TN',
						value: '640',
					},
					{
						name: 'Mendoza Province',
						value: 'AR-M',
					},
					{
						name: 'Meneng',
						value: 'NR-11',
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
						name: 'Mérida',
						value: 'VE-L',
					},
					{
						name: 'Meridian MS',
						value: '711',
					},
					{
						name: 'Mersin Province',
						value: 'TR-33',
					},
					{
						name: 'Mērsrags Municipality',
						value: 'LV-063',
					},
					{
						name: 'Meta',
						value: 'CO-MET',
					},
					{
						name: 'Metro Manila',
						value: 'PH-00',
					},
					{
						name: 'Mexico',
						value: 'MX',
					},
					{
						name: 'Mexico City',
						value: 'MX-DIF',
					},
					{
						name: 'Miami-Ft. Lauderdale FL',
						value: '528',
					},
					{
						name: 'Michigan',
						value: 'US-MI',
					},
					{
						name: 'Michoacán',
						value: 'MX-MIC',
					},
					{
						name: 'Micoud',
						value: 'LC-08',
					},
					{
						name: 'Micronesia',
						value: 'FM',
					},
					{
						name: 'Mid-Western Region',
						value: 'NP-2',
					},
					{
						name: 'Midi-Pyrénées',
						value: 'FR-N',
					},
					{
						name: 'Midlands',
						value: 'ZW-MI',
					},
					{
						name: 'Mie Prefecture',
						value: 'JP-24',
					},
					{
						name: 'Mila Province',
						value: 'DZ-43',
					},
					{
						name: 'Mili Atoll',
						value: 'MH-MIL',
					},
					{
						name: 'Milne Bay Province',
						value: 'PG-MBA',
					},
					{
						name: 'Milwaukee WI',
						value: '617',
					},
					{
						name: 'MIMAROPA',
						value: 'PH-41',
					},
					{
						name: 'Minneapolis-St. Paul MN',
						value: '613',
					},
					{
						name: 'Minnesota',
						value: 'US-MN',
					},
					{
						name: 'Minot-Bismarck-Dickinson(Williston) ND',
						value: '687',
					},
					{
						name: 'Minsk Region',
						value: 'BY-MI',
					},
					{
						name: 'Miranda',
						value: 'VE-M',
					},
					{
						name: 'Misiones',
						value: 'PY-8',
					},
					{
						name: 'Misiones Province',
						value: 'AR-N',
					},
					{
						name: 'Misratah',
						value: 'LY-MI',
					},
					{
						name: 'Mississippi',
						value: 'US-MS',
					},
					{
						name: 'Missoula MT',
						value: '762',
					},
					{
						name: 'Missouri',
						value: 'US-MO',
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
						name: 'Mizoram',
						value: 'IN-MZ',
					},
					{
						name: 'Mobile AL-Pensacola (Ft. Walton Beach) FL',
						value: '686',
					},
					{
						name: 'Mogila',
						value: 'MK-53',
					},
					{
						name: 'Mogilev Region',
						value: 'BY-MA',
					},
					{
						name: "Mohale's Hoek",
						value: 'LS-F',
					},
					{
						name: 'Mojkovac',
						value: 'ME-11',
					},
					{
						name: 'Moka',
						value: 'MU-MO',
					},
					{
						name: 'Mokhotlong',
						value: 'LS-J',
					},
					{
						name: 'Moldova',
						value: 'MD',
					},
					{
						name: 'Molise',
						value: 'IT-67',
					},
					{
						name: 'Mon State',
						value: 'MM-15',
					},
					{
						name: 'Monaco',
						value: 'MC',
					},
					{
						name: 'Monagas',
						value: 'VE-N',
					},
					{
						name: 'Monastir',
						value: 'TN-52',
					},
					{
						name: 'Mondulkiri',
						value: 'KH-11',
					},
					{
						name: 'Mongar',
						value: 'BT-42',
					},
					{
						name: 'Mongolia',
						value: 'MN',
					},
					{
						name: 'Mono',
						value: 'BJ-MO',
					},
					{
						name: 'Monroe LA-El Dorado AR',
						value: '628',
					},
					{
						name: 'Monseñor Nouel Province',
						value: 'DO-28',
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
						name: 'Montana',
						value: 'US-MT',
					},
					{
						name: 'Montana Province',
						value: 'BG-12',
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
						name: 'Montegiardino',
						value: 'SM-08',
					},
					{
						name: 'Montenegro',
						value: 'ME',
					},
					{
						name: 'Monterey-Salinas CA',
						value: '828',
					},
					{
						name: 'Montevideo Department',
						value: 'UY-MO',
					},
					{
						name: 'Montgomery (Selma) AL',
						value: '698',
					},
					{
						name: 'Montserrado',
						value: 'LR-MO',
					},
					{
						name: 'Montserrat',
						value: 'MS',
					},
					{
						name: "Moore's Island",
						value: 'BS-MI',
					},
					{
						name: 'Mopti',
						value: 'ML-5',
					},
					{
						name: 'Moquegua',
						value: 'PE-MOQ',
					},
					{
						name: 'Moravian-Silesian Region',
						value: 'CZ-MO',
					},
					{
						name: 'Morazan',
						value: 'SV-MO',
					},
					{
						name: 'Mordovia',
						value: 'RU-MO',
					},
					{
						name: 'Møre og Romsdal',
						value: 'NO-15',
					},
					{
						name: 'Morelos',
						value: 'MX-MOR',
					},
					{
						name: 'Morobe Province',
						value: 'PG-MPL',
					},
					{
						name: 'Morocco',
						value: 'MA',
					},
					{
						name: 'Morogoro',
						value: 'TZ-16',
					},
					{
						name: 'Morona-Santiago Province',
						value: 'EC-S',
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
						name: 'Mostaganem Province',
						value: 'DZ-27',
					},
					{
						name: 'Mosteiros',
						value: 'CV-MO',
					},
					{
						name: 'Mount Lebanon',
						value: 'LB-JL',
					},
					{
						name: 'Moxico Province',
						value: 'AO-MOX',
					},
					{
						name: 'Moyen-Cavally',
						value: 'CI-19',
					},
					{
						name: 'Moyen-Chari',
						value: 'TD-MC',
					},
					{
						name: 'Moyen-Comoe',
						value: 'CI-05',
					},
					{
						name: 'Moyen-Ogooue',
						value: 'GA-3',
					},
					{
						name: 'Mozambique',
						value: 'MZ',
					},
					{
						name: 'Mpumalanga',
						value: 'ZA-MP',
					},
					{
						name: 'Mtskheta-Mtianeti',
						value: 'GE-MM',
					},
					{
						name: 'Mtwara',
						value: 'TZ-17',
					},
					{
						name: 'Mubarak Al-Kabeer Governorate',
						value: 'KW-MU',
					},
					{
						name: 'Mudug',
						value: 'SO-MU',
					},
					{
						name: 'Muğla Province',
						value: 'TR-48',
					},
					{
						name: 'Muharraq Governorate',
						value: 'BH-15',
					},
					{
						name: 'Mukdahan',
						value: 'TH-49',
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
						name: 'Muramvya',
						value: 'BI-MU',
					},
					{
						name: 'Mureș County',
						value: 'RO-MS',
					},
					{
						name: 'Murmansk Oblast',
						value: 'RU-MUR',
					},
					{
						name: 'Murzuq',
						value: 'LY-MQ',
					},
					{
						name: 'Muş',
						value: 'TR-49',
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
						name: 'Muyinga',
						value: 'BI-MY',
					},
					{
						name: 'Mwali',
						value: 'KM-M',
					},
					{
						name: 'Mwanza',
						value: 'TZ-18',
					},
					{
						name: 'Mwaro',
						value: 'BI-MW',
					},
					{
						name: 'Myanmar (Burma)',
						value: 'MM',
					},
					{
						name: "Mykolaivs'ka oblast",
						value: 'UA-48',
					},
					{
						name: "N'Djamena",
						value: 'TD-ND',
					},
					{
						name: 'Naâma Province',
						value: 'DZ-45',
					},
					{
						name: 'Nabatiyeh',
						value: 'LB-NA',
					},
					{
						name: 'Nabeul',
						value: 'TN-21',
					},
					{
						name: 'Nagaland',
						value: 'IN-NL',
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
						name: 'Najran',
						value: 'SA-10',
					},
					{
						name: 'Nakhchivan Autonomous Republic',
						value: 'AZ-NX',
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
						name: 'Nalut',
						value: 'LY-NL',
					},
					{
						name: 'Nam Dinh',
						value: 'VN-67',
					},
					{
						name: 'Namangan Province',
						value: 'UZ-NG',
					},
					{
						name: 'Namibe Province',
						value: 'AO-NAM',
					},
					{
						name: 'Namibia',
						value: 'NA',
					},
					{
						name: 'Namorik Atoll',
						value: 'MH-NMK',
					},
					{
						name: 'Nampula Province',
						value: 'MZ-N',
					},
					{
						name: 'Namu Atoll',
						value: 'MH-NMU',
					},
					{
						name: 'Nan',
						value: 'TH-55',
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
						name: 'Nangarhar',
						value: 'AF-NAN',
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
						name: 'Nara Prefecture',
						value: 'JP-29',
					},
					{
						name: 'Narathiwat',
						value: 'TH-96',
					},
					{
						name: 'Narino',
						value: 'CO-NAR',
					},
					{
						name: 'Naryn Province',
						value: 'KG-N',
					},
					{
						name: 'Nasarawa',
						value: 'NG-NA',
					},
					{
						name: 'Nashville TN',
						value: '659',
					},
					{
						name: 'National Capital District',
						value: 'PG-NCD',
					},
					{
						name: 'Naukšēni Municipality',
						value: 'LV-064',
					},
					{
						name: 'Nauru',
						value: 'NR',
					},
					{
						name: 'Navarre',
						value: 'ES-NC',
					},
					{
						name: 'Navoiy Province',
						value: 'UZ-NW',
					},
					{
						name: 'Nayarit',
						value: 'MX-NAY',
					},
					{
						name: 'Naypyidaw Union Territory',
						value: 'MM-18',
					},
					{
						name: 'Neamț County',
						value: 'RO-NT',
					},
					{
						name: 'Nebraska',
						value: 'US-NE',
					},
					{
						name: 'Neembucu',
						value: 'PY-12',
					},
					{
						name: 'Negeri Sembilan',
						value: 'MY-05',
					},
					{
						name: 'Nelson',
						value: 'NZ-NSN',
					},
					{
						name: 'Nenets Autonomous Okrug',
						value: 'RU-NEN',
					},
					{
						name: 'Nepal',
						value: 'NP',
					},
					{
						name: 'Nereta Municipality',
						value: 'LV-065',
					},
					{
						name: 'Netherlands',
						value: 'NL',
					},
					{
						name: 'Neuquen',
						value: 'AR-Q',
					},
					{
						name: 'Nevada',
						value: 'US-NV',
					},
					{
						name: 'Nevşehir',
						value: 'TR-50',
					},
					{
						name: 'New Brunswick',
						value: 'CA-NB',
					},
					{
						name: 'New Caledonia',
						value: 'NC',
					},
					{
						name: 'New Hampshire',
						value: 'US-NH',
					},
					{
						name: 'New Ireland Province',
						value: 'PG-NIK',
					},
					{
						name: 'New Jersey',
						value: 'US-NJ',
					},
					{
						name: 'New Mexico',
						value: 'US-NM',
					},
					{
						name: 'New Orleans LA',
						value: '622',
					},
					{
						name: 'New South Wales',
						value: 'AU-NSW',
					},
					{
						name: 'New Taipei City',
						value: 'TW-TPQ',
					},
					{
						name: 'New Valley Governorate',
						value: 'EG-WAD',
					},
					{
						name: 'New York',
						value: 'US-NY',
					},
					{
						name: 'New York NY',
						value: '501',
					},
					{
						name: 'New Zealand',
						value: 'NZ',
					},
					{
						name: 'Newfoundland and Labrador',
						value: 'CA-NL',
					},
					{
						name: 'Ngäbe-Buglé Comarca',
						value: 'PA-NB',
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
						name: 'Ngazidja',
						value: 'KM-G',
					},
					{
						name: 'Ngchesar',
						value: 'PW-226',
					},
					{
						name: 'Nghe An',
						value: 'VN-22',
					},
					{
						name: 'Ngiwal',
						value: 'PW-228',
					},
					{
						name: 'Ngounie',
						value: 'GA-4',
					},
					{
						name: 'Ngozi',
						value: 'BI-NG',
					},
					{
						name: 'Niamey',
						value: 'NE-8',
					},
					{
						name: 'Niari',
						value: 'CG-9',
					},
					{
						name: 'Niassa Province',
						value: 'MZ-A',
					},
					{
						name: 'Nibok',
						value: 'NR-12',
					},
					{
						name: 'Nīca Municipality',
						value: 'LV-066',
					},
					{
						name: 'Nicaragua',
						value: 'NI',
					},
					{
						name: 'Nickerie District',
						value: 'SR-NI',
					},
					{
						name: 'Nicosia District',
						value: 'CY-01',
					},
					{
						name: 'Nidwalden',
						value: 'CH-NW',
					},
					{
						name: 'Niğde',
						value: 'TR-51',
					},
					{
						name: 'Niger (NE)',
						value: 'NE',
					},
					{
						name: 'Niger (NG-NI)',
						value: 'NG-NI',
					},
					{
						name: 'Nigeria',
						value: 'NG',
					},
					{
						name: 'Niigata Prefecture',
						value: 'JP-15',
					},
					{
						name: 'Niksic',
						value: 'ME-12',
					},
					{
						name: 'Nimba',
						value: 'LR-NI',
					},
					{
						name: 'Nimruz',
						value: 'AF-NIM',
					},
					{
						name: 'Ninawa',
						value: 'IQ-NI',
					},
					{
						name: 'Ningxia',
						value: 'CN-64',
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
						name: 'Nippes',
						value: 'HT-NI',
					},
					{
						name: 'Nisporeni',
						value: 'MD-NI',
					},
					{
						name: 'Nitra Region',
						value: 'SK-NI',
					},
					{
						name: 'Niuas',
						value: 'TO-03',
					},
					{
						name: 'Niue',
						value: 'NU',
					},
					{
						name: 'Niutao',
						value: 'TV-NIT',
					},
					{
						name: 'Nizhny Novgorod Oblast',
						value: 'RU-NIZ',
					},
					{
						name: 'Nógrád County',
						value: 'HU-NO',
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
						name: 'Nord (BF)',
						value: 'BF-10',
					},
					{
						name: 'Nord (HT)',
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
						name: 'Nord-Pas-de-Calais',
						value: 'FR-O',
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
						name: 'Norfolk Island',
						value: 'NF',
					},
					{
						name: 'Norfolk-Portsmouth-Newport News VA',
						value: '544',
					},
					{
						name: 'Norrbotten County',
						value: 'SE-BD',
					},
					{
						name: 'North (CM)',
						value: 'CM-NO',
					},
					{
						name: 'North (LB)',
						value: 'LB-AS',
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
						name: 'North Bank Division',
						value: 'GM-N',
					},
					{
						name: 'North Brabant',
						value: 'NL-NB',
					},
					{
						name: 'North Carolina',
						value: 'US-NC',
					},
					{
						name: 'North Central Province (LK)',
						value: 'LK-7',
					},
					{
						name: 'North Central Province (MV)',
						value: 'MV-NC',
					},
					{
						name: 'North Dakota',
						value: 'US-ND',
					},
					{
						name: 'North Denmark Region',
						value: 'DK-81',
					},
					{
						name: 'North District',
						value: 'IL-Z',
					},
					{
						name: 'North Eleuthera',
						value: 'BS-NE',
					},
					{
						name: 'North Hamgyong',
						value: 'KP-09',
					},
					{
						name: 'North Holland',
						value: 'NL-NH',
					},
					{
						name: 'North Hwanghae',
						value: 'KP-06',
					},
					{
						name: 'North Kalimantan',
						value: 'ID-KU',
					},
					{
						name: 'North Karelia',
						value: 'FI-13',
					},
					{
						name: 'North Kazakhstan Province',
						value: 'KZ-SEV',
					},
					{
						name: 'North Khorasan',
						value: 'IR-31',
					},
					{
						name: 'North Korea',
						value: 'KP',
					},
					{
						name: 'North Kurdufan',
						value: 'SD-KN',
					},
					{
						name: 'North Macedonia',
						value: 'MK',
					},
					{
						name: 'North Maluku',
						value: 'ID-MU',
					},
					{
						name: 'North Ossetia–Alania',
						value: 'RU-SE',
					},
					{
						name: 'North Platte NE',
						value: '740',
					},
					{
						name: 'North Province',
						value: 'MV-NO',
					},
					{
						name: 'North Pyongan',
						value: 'KP-03',
					},
					{
						name: 'North Rhine-Westphalia',
						value: 'DE-NW',
					},
					{
						name: 'North Santander',
						value: 'CO-NSA',
					},
					{
						name: 'North Sinai Governorate',
						value: 'EG-SIN',
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
						name: 'North West',
						value: 'BW-NW',
					},
					{
						name: 'North West (ZA)',
						value: 'ZA-NW',
					},
					{
						name: 'North Western Province',
						value: 'LK-6',
					},
					{
						name: 'North-East',
						value: 'BW-NE',
					},
					{
						name: 'North-Kivu',
						value: 'CD-NK',
					},
					{
						name: 'North-Western',
						value: 'ZM-06',
					},
					{
						name: 'Northeast',
						value: 'IS-6',
					},
					{
						name: 'Northern',
						value: 'SD-NO',
					},
					{
						name: 'Northern (ZM)',
						value: 'ZM-05',
					},
					{
						name: 'Northern Bahr el Ghazal',
						value: 'SS-BN',
					},
					{
						name: 'Northern Borders Province',
						value: 'SA-08',
					},
					{
						name: 'Northern Cape',
						value: 'ZA-NC',
					},
					{
						name: 'Northern Division',
						value: 'FJ-N',
					},
					{
						name: 'Northern Governorate',
						value: 'BH-17',
					},
					{
						name: 'Northern Ireland',
						value: 'GB-NIR',
					},
					{
						name: 'Northern Mariana Islands',
						value: 'MP',
					},
					{
						name: 'Northern Mindanao',
						value: 'PH-10',
					},
					{
						name: 'Northern Ostrobothnia',
						value: 'FI-14',
					},
					{
						name: 'Northern Province (LK)',
						value: 'LK-4',
					},
					{
						name: 'Northern Province (PG)',
						value: 'PG-NPP',
					},
					{
						name: 'Northern Province (RW)',
						value: 'RW-03',
					},
					{
						name: 'Northern Province (SL)',
						value: 'SL-N',
					},
					{
						name: 'Northern Red Sea',
						value: 'ER-SK',
					},
					{
						name: 'Northern Region (GH)',
						value: 'GH-NP',
					},
					{
						name: 'Northern Region (MW)',
						value: 'MW-N',
					},
					{
						name: 'Northern Region (UG)',
						value: 'UG-N',
					},
					{
						name: 'Northern Savonia',
						value: 'FI-15',
					},
					{
						name: 'Northern Territory',
						value: 'AU-NT',
					},
					{
						name: 'Northland',
						value: 'NZ-NTL',
					},
					{
						name: 'Northwest',
						value: 'CM-NW',
					},
					{
						name: 'Northwest Territories',
						value: 'CA-NT',
					},
					{
						name: 'Northwestern Region',
						value: 'IS-5',
					},
					{
						name: 'Norway',
						value: 'NO',
					},
					{
						name: 'Nouakchott',
						value: 'MR-NKC',
					},
					{
						name: 'Nova Scotia',
						value: 'CA-NS',
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
						name: 'Nueva Esparta',
						value: 'VE-O',
					},
					{
						name: 'Nueva Segovia',
						value: 'NI-NS',
					},
					{
						name: 'Nuevo Leon',
						value: 'MX-NLE',
					},
					{
						name: 'Nugaal',
						value: 'SO-NU',
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
						name: 'Nunavut',
						value: 'CA-NU',
					},
					{
						name: 'Nuristan',
						value: 'AF-NUR',
					},
					{
						name: 'Nyanga',
						value: 'GA-5',
					},
					{
						name: 'Nzérékoré',
						value: 'GN-N',
					},
					{
						name: 'Nzi-Comoe',
						value: 'CI-11',
					},
					{
						name: 'Nzwani',
						value: 'KM-A',
					},
					{
						name: "O'Higgins Region",
						value: 'CL-LI',
					},
					{
						name: 'Oaxaca',
						value: 'MX-OAX',
					},
					{
						name: 'Obock',
						value: 'DJ-OB',
					},
					{
						name: 'Ocnita',
						value: 'MD-OC',
					},
					{
						name: 'Ocotepeque',
						value: 'HN-OC',
					},
					{
						name: 'Oddar Meancheay',
						value: 'KH-22',
					},
					{
						name: 'Odessa Oblast',
						value: 'UA-51',
					},
					{
						name: 'Odessa-Midland TX',
						value: '633',
					},
					{
						name: 'Odisha',
						value: 'IN-OR',
					},
					{
						name: 'Oecussi-Ambeno',
						value: 'TL-OE',
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
						name: 'Ogre Municipality',
						value: 'LV-067',
					},
					{
						name: 'Ogun State',
						value: 'NG-OG',
					},
					{
						name: 'Ohangwena',
						value: 'NA-OW',
					},
					{
						name: 'Ohio',
						value: 'US-OH',
					},
					{
						name: 'Ohrid',
						value: 'MK-58',
					},
					{
						name: 'Oio',
						value: 'GW-OI',
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
						name: 'Oklahoma',
						value: 'US-OK',
					},
					{
						name: 'Oklahoma City OK',
						value: '650',
					},
					{
						name: 'Olaines novads',
						value: 'LV-068',
					},
					{
						name: 'Olancho',
						value: 'HN-OL',
					},
					{
						name: 'Olomouc Region',
						value: 'CZ-OL',
					},
					{
						name: 'Olt County',
						value: 'RO-OT',
					},
					{
						name: 'Omaha NE',
						value: '652',
					},
					{
						name: 'Omaheke Region',
						value: 'NA-OH',
					},
					{
						name: 'Oman',
						value: 'OM',
					},
					{
						name: "Ombella-M'Poko",
						value: 'CF-MP',
					},
					{
						name: 'Omsk Oblast',
						value: 'RU-OMS',
					},
					{
						name: 'Omusati Region',
						value: 'NA-OS',
					},
					{
						name: 'Ondo',
						value: 'NG-ON',
					},
					{
						name: 'Ontario',
						value: 'CA-ON',
					},
					{
						name: 'Opole Voivodeship',
						value: 'PL-OP',
					},
					{
						name: 'Oppland',
						value: 'NO-05',
					},
					{
						name: 'Oran Province',
						value: 'DZ-31',
					},
					{
						name: 'Orange Walk',
						value: 'BZ-OW',
					},
					{
						name: 'Ordino',
						value: 'AD-05',
					},
					{
						name: 'Ordu',
						value: 'TR-52',
					},
					{
						name: 'Örebro County',
						value: 'SE-T',
					},
					{
						name: 'Oregon',
						value: 'US-OR',
					},
					{
						name: 'Orellana Province',
						value: 'EC-D',
					},
					{
						name: 'Orenburg Oblast',
						value: 'RU-ORE',
					},
					{
						name: 'Orhei',
						value: 'MD-OR',
					},
					{
						name: 'Oriental',
						value: 'MA-04',
					},
					{
						name: 'Orientale',
						value: 'CD-OR',
					},
					{
						name: 'Orkhon',
						value: 'MN-035',
					},
					{
						name: 'Orlando-Daytona Beach-Melbourne FL',
						value: '534',
					},
					{
						name: 'Oromia',
						value: 'ET-OR',
					},
					{
						name: 'Oruro Department',
						value: 'BO-O',
					},
					{
						name: 'Oruzgan',
						value: 'AF-URU',
					},
					{
						name: 'Oryol Oblast',
						value: 'RU-ORL',
					},
					{
						name: 'Osaka Prefecture',
						value: 'JP-27',
					},
					{
						name: 'Osh Province',
						value: 'KG-O',
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
						name: 'Osijek-Baranja County',
						value: 'HR-14',
					},
					{
						name: 'Oslo',
						value: 'NO-03',
					},
					{
						name: 'Osmaniye',
						value: 'TR-80',
					},
					{
						name: 'Östergötland County',
						value: 'SE-E',
					},
					{
						name: 'Ostfold',
						value: 'NO-01',
					},
					{
						name: 'Ostrobothnia',
						value: 'FI-12',
					},
					{
						name: 'Osun',
						value: 'NG-OS',
					},
					{
						name: 'Otago',
						value: 'NZ-OTA',
					},
					{
						name: 'Otjozondjupa Region',
						value: 'NA-OD',
					},
					{
						name: 'Ottumwa IA-Kirksville MO',
						value: '631',
					},
					{
						name: 'Ouaddai',
						value: 'TD-OD',
					},
					{
						name: 'Ouaka',
						value: 'CF-UK',
					},
					{
						name: 'Ouargla Province',
						value: 'DZ-30',
					},
					{
						name: 'Oudomxay',
						value: 'LA-OU',
					},
					{
						name: 'Oueme',
						value: 'BJ-OU',
					},
					{
						name: 'Ouest',
						value: 'HT-OU',
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
						name: 'Oum El Bouaghi Province',
						value: 'DZ-04',
					},
					{
						name: 'Overijssel',
						value: 'NL-OV',
					},
					{
						name: 'Oyo',
						value: 'NG-OY',
					},
					{
						name: 'Ozolnieki Municipality',
						value: 'LV-069',
					},
					{
						name: 'Paducah KY-Cape Girardeau MO-Harrisburg-Mount Vernon IL',
						value: '632',
					},
					{
						name: 'Pahang',
						value: 'MY-06',
					},
					{
						name: 'Päijänne Tavastia',
						value: 'FI-16',
					},
					{
						name: 'Pailin',
						value: 'KH-24',
					},
					{
						name: 'Pakistan',
						value: 'PK',
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
						name: 'Palau',
						value: 'PW',
					},
					{
						name: 'Palauli',
						value: 'WS-PA',
					},
					{
						name: 'Palestine',
						value: 'PS',
					},
					{
						name: 'Palm Springs CA',
						value: '804',
					},
					{
						name: 'Pamplemousses',
						value: 'MU-PA',
					},
					{
						name: 'Panama',
						value: 'PA',
					},
					{
						name: 'Panama (PA)',
						value: 'PA-8',
					},
					{
						name: 'Panama City FL',
						value: '656',
					},
					{
						name: 'Pando Department',
						value: 'BO-N',
					},
					{
						name: 'Panevėžys County',
						value: 'LT-PN',
					},
					{
						name: 'Panjshir',
						value: 'AF-PAN',
					},
					{
						name: 'Paphos',
						value: 'CY-05',
					},
					{
						name: 'Papua',
						value: 'ID-PA',
					},
					{
						name: 'Papua New Guinea',
						value: 'PG',
					},
					{
						name: 'Para',
						value: 'SR-PR',
					},
					{
						name: 'Paraguari',
						value: 'PY-9',
					},
					{
						name: 'Paraguay',
						value: 'PY',
					},
					{
						name: 'Paramaribo District',
						value: 'SR-PM',
					},
					{
						name: 'Pardubice Region',
						value: 'CZ-PA',
					},
					{
						name: 'Pārgauja Municipality',
						value: 'LV-070',
					},
					{
						name: 'Parkersburg WV',
						value: '597',
					},
					{
						name: 'Pärnu County',
						value: 'EE-67',
					},
					{
						name: 'Paro',
						value: 'BT-11',
					},
					{
						name: 'Parvan',
						value: 'AF-PAR',
					},
					{
						name: 'Pasco',
						value: 'PE-PAS',
					},
					{
						name: 'Pastaza Province',
						value: 'EC-Y',
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
						name: 'Paul',
						value: 'CV-PA',
					},
					{
						name: 'Pāvilosta Municipality',
						value: 'LV-071',
					},
					{
						name: 'Pavlodar Province',
						value: 'KZ-PAV',
					},
					{
						name: 'Pays de la Loire',
						value: 'FR-R',
					},
					{
						name: 'Paysandú Department',
						value: 'UY-PA',
					},
					{
						name: 'Pazardzik',
						value: 'BG-13',
					},
					{
						name: 'Pedernales Province',
						value: 'DO-16',
					},
					{
						name: 'Peleliu',
						value: 'PW-350',
					},
					{
						name: 'Pemagatshel',
						value: 'BT-43',
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
						name: 'Penal-Debe',
						value: 'TT-PED',
					},
					{
						name: 'Penama Province',
						value: 'VU-PAM',
					},
					{
						name: 'Penang',
						value: 'MY-07',
					},
					{
						name: 'Pennsylvania',
						value: 'US-PA',
					},
					{
						name: 'Penza Oblast',
						value: 'RU-PNZ',
					},
					{
						name: 'Peoria-Bloomington IL',
						value: '675',
					},
					{
						name: 'Perak',
						value: 'MY-08',
					},
					{
						name: 'Peravia Province',
						value: 'DO-17',
					},
					{
						name: 'Perlis',
						value: 'MY-09',
					},
					{
						name: 'Perm Krai',
						value: 'RU-PER',
					},
					{
						name: 'Pernik',
						value: 'BG-14',
					},
					{
						name: 'Peru',
						value: 'PE',
					},
					{
						name: 'Pest County',
						value: 'HU-PE',
					},
					{
						name: 'Petén Department',
						value: 'GT-PE',
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
						name: 'Philadelphia PA',
						value: '504',
					},
					{
						name: 'Philippines',
						value: 'PH',
					},
					{
						name: 'Phitsanulok',
						value: 'TH-65',
					},
					{
						name: 'Phnom Penh',
						value: 'KH-12',
					},
					{
						name: 'Phoenix AZ',
						value: '753',
					},
					{
						name: 'Phoenix Islands',
						value: 'KI-P',
					},
					{
						name: 'Phongsaly',
						value: 'LA-PH',
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
						name: 'Phu Tho Province',
						value: 'VN-68',
					},
					{
						name: 'Phú Yên Province',
						value: 'VN-32',
					},
					{
						name: 'Phuket',
						value: 'TH-83',
					},
					{
						name: 'Picardy',
						value: 'FR-S',
					},
					{
						name: 'Pichincha',
						value: 'EC-P',
					},
					{
						name: 'Piedmont',
						value: 'IT-21',
					},
					{
						name: 'Pinar del Rio',
						value: 'CU-01',
					},
					{
						name: 'Pirkanmaa',
						value: 'FI-11',
					},
					{
						name: 'Pitcairn Islands',
						value: 'PN',
					},
					{
						name: 'Pittsburgh PA',
						value: '508',
					},
					{
						name: 'Piura',
						value: 'PE-PIU',
					},
					{
						name: 'Plaines Wilhems',
						value: 'MU-PW',
					},
					{
						name: 'Plaisance',
						value: 'SC-19',
					},
					{
						name: 'Planken',
						value: 'LI-05',
					},
					{
						name: 'Plateau (BJ)',
						value: 'BJ-PL',
					},
					{
						name: 'Plateau (NG)',
						value: 'NG-PL',
					},
					{
						name: 'Plateau-Central Region',
						value: 'BF-11',
					},
					{
						name: 'Plateaux (CG)',
						value: 'CG-14',
					},
					{
						name: 'Plateaux (TG)',
						value: 'TG-P',
					},
					{
						name: 'Plav',
						value: 'ME-13',
					},
					{
						name: 'Pļaviņas Municipality',
						value: 'LV-072',
					},
					{
						name: 'Pleven Province',
						value: 'BG-15',
					},
					{
						name: 'Pljevlja',
						value: 'ME-14',
					},
					{
						name: 'Plovdiv Province',
						value: 'BG-16',
					},
					{
						name: 'Pluzine',
						value: 'ME-15',
					},
					{
						name: 'Plzeň Region',
						value: 'CZ-PL',
					},
					{
						name: 'Podgorica',
						value: 'ME-16',
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
						name: 'Pohnpei',
						value: 'FM-PNI',
					},
					{
						name: 'Point Fortin',
						value: 'TT-PTF',
					},
					{
						name: 'Pointe La Rue',
						value: 'SC-20',
					},
					{
						name: 'Pointe Noire',
						value: 'CG-16',
					},
					{
						name: 'Poitou-Charentes',
						value: 'FR-T',
					},
					{
						name: 'Poland',
						value: 'PL',
					},
					{
						name: "Poltavs'ka oblast",
						value: 'UA-53',
					},
					{
						name: 'Põlva County',
						value: 'EE-65',
					},
					{
						name: 'Pomeranian Voivodeship',
						value: 'PL-PM',
					},
					{
						name: 'Pomeroon-Supenaam',
						value: 'GY-PM',
					},
					{
						name: 'Pool',
						value: 'CG-12',
					},
					{
						name: 'Port Glaud',
						value: 'SC-21',
					},
					{
						name: 'Port Louis',
						value: 'MU-PL',
					},
					{
						name: 'Port of Spain',
						value: 'TT-POS',
					},
					{
						name: 'Port Said Governorate',
						value: 'EG-PTS',
					},
					{
						name: 'Portalegre District',
						value: 'PT-12',
					},
					{
						name: 'Portland OR',
						value: '820',
					},
					{
						name: 'Portland Parish',
						value: 'JM-04',
					},
					{
						name: 'Portland-Auburn ME',
						value: '500',
					},
					{
						name: 'Porto District',
						value: 'PT-13',
					},
					{
						name: 'Porto Novo',
						value: 'CV-PN',
					},
					{
						name: 'Portugal',
						value: 'PT',
					},
					{
						name: 'Portuguesa',
						value: 'VE-P',
					},
					{
						name: 'Potaro-Siparuni',
						value: 'GY-PT',
					},
					{
						name: 'Potosi Department',
						value: 'BO-P',
					},
					{
						name: 'Požega-Slavonia County',
						value: 'HR-11',
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
						name: 'Prague',
						value: 'CZ-PR',
					},
					{
						name: 'Prahova',
						value: 'RO-PH',
					},
					{
						name: 'Praia',
						value: 'CV-PR',
					},
					{
						name: 'Praslin',
						value: 'LC-09',
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
						name: 'Preiļi Municipality',
						value: 'LV-073',
					},
					{
						name: 'Presidente Hayes Department',
						value: 'PY-15',
					},
					{
						name: 'Prešov Region',
						value: 'SK-PV',
					},
					{
						name: 'Presque Isle ME',
						value: '552',
					},
					{
						name: 'Prey Veng',
						value: 'KH-14',
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
						name: 'Primorje-Gorski Kotar County',
						value: 'HR-08',
					},
					{
						name: 'Primorsky Krai',
						value: 'RU-PRI',
					},
					{
						name: 'Prince Edward Island',
						value: 'CA-PE',
					},
					{
						name: 'Princes Town',
						value: 'TT-PRT',
					},
					{
						name: 'Principe',
						value: 'ST-P',
					},
					{
						name: 'Probishtip',
						value: 'MK-63',
					},
					{
						name: "Provence-Alpes-Côte d'Azur",
						value: 'FR-U',
					},
					{
						name: 'Providence RI-New Bedford MA',
						value: '521',
					},
					{
						name: 'Province of Tamanrasset',
						value: 'DZ-11',
					},
					{
						name: 'Provincia de Cartago',
						value: 'CR-C',
					},
					{
						name: 'Provincia de Napo',
						value: 'EC-N',
					},
					{
						name: 'Pskov Oblast',
						value: 'RU-PSK',
					},
					{
						name: 'Puducherry',
						value: 'IN-PY',
					},
					{
						name: 'Puebla',
						value: 'MX-PUE',
					},
					{
						name: 'Puerto Plata Province',
						value: 'DO-18',
					},
					{
						name: 'Puerto Rico',
						value: 'PR',
					},
					{
						name: 'Punakha',
						value: 'BT-23',
					},
					{
						name: 'Punjab (IN)',
						value: 'IN-PB',
					},
					{
						name: 'Punjab (PK)',
						value: 'PK-PB',
					},
					{
						name: 'Puno',
						value: 'PE-PUN',
					},
					{
						name: 'Puntarenas Province',
						value: 'CR-P',
					},
					{
						name: 'Pursat',
						value: 'KH-15',
					},
					{
						name: 'Putrajaya',
						value: 'MY-16',
					},
					{
						name: 'Putumayo',
						value: 'CO-PUT',
					},
					{
						name: 'Pwani',
						value: 'TZ-19',
					},
					{
						name: 'Pyongyang',
						value: 'KP-01',
					},
					{
						name: 'Qaasuitsup',
						value: 'GL-QA',
					},
					{
						name: "Qacha's Nek",
						value: 'LS-H',
					},
					{
						name: 'Qatar',
						value: 'QA',
					},
					{
						name: 'Qazvin',
						value: 'IR-28',
					},
					{
						name: 'Qena Governorate',
						value: 'EG-KN',
					},
					{
						name: 'Qeqqata',
						value: 'GL-QE',
					},
					{
						name: 'Qinghai',
						value: 'CN-63',
					},
					{
						name: 'Qom',
						value: 'IR-26',
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
						name: 'Québec',
						value: 'CA-QC',
					},
					{
						name: 'Queensland',
						value: 'AU-QLD',
					},
					{
						name: 'Querétaro',
						value: 'MX-QUE',
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
						name: 'Quinara',
						value: 'GW-QU',
					},
					{
						name: 'Quincy IL-Hannibal MO-Keokuk IA',
						value: '717',
					},
					{
						name: 'Quindio',
						value: 'CO-QUI',
					},
					{
						name: 'Quintana Roo',
						value: 'MX-ROO',
					},
					{
						name: 'Quneitra Governorate',
						value: 'SY-QU',
					},
					{
						name: 'Quthing',
						value: 'LS-G',
					},
					{
						name: 'Rabat-Sale-Zemmour-Zaer',
						value: 'MA-07',
					},
					{
						name: 'Racha-Lechkhumi and Lower Svaneti',
						value: 'GE-RL',
					},
					{
						name: 'Radovish',
						value: 'MK-64',
					},
					{
						name: 'Ragged Island',
						value: 'BS-RI',
					},
					{
						name: 'Rajasthan',
						value: 'IN-RJ',
					},
					{
						name: 'Rajshahi Division',
						value: 'BD-E',
					},
					{
						name: 'Rakhine',
						value: 'MM-16',
					},
					{
						name: 'Raleigh-Durham (Fayetteville) NC',
						value: '560',
					},
					{
						name: 'Rangpur Division',
						value: 'BD-F',
					},
					{
						name: 'Ranong',
						value: 'TH-85',
					},
					{
						name: 'Rapid City SD',
						value: '764',
					},
					{
						name: 'Rapla County',
						value: 'EE-70',
					},
					{
						name: 'Ras al Khaimah',
						value: 'AE-RK',
					},
					{
						name: 'Rason',
						value: 'KP-13',
					},
					{
						name: 'Ratanakiri',
						value: 'KH-16',
					},
					{
						name: 'Ratchaburi',
						value: 'TH-70',
					},
					{
						name: 'Rauna Municipality',
						value: 'LV-076',
					},
					{
						name: 'Raymah',
						value: 'YE-RA',
					},
					{
						name: 'Rayong',
						value: 'TH-21',
					},
					{
						name: 'Razgrad',
						value: 'BG-17',
					},
					{
						name: 'Red Sea',
						value: 'SD-RS',
					},
					{
						name: 'Red Sea Governorate',
						value: 'EG-BA',
					},
					{
						name: 'Redonda',
						value: 'AG-11',
					},
					{
						name: 'Region of Murcia',
						value: 'ES-MC',
					},
					{
						name: 'Region Syddanmark',
						value: 'DK-83',
					},
					{
						name: 'Region XII',
						value: 'PH-12',
					},
					{
						name: 'Region Zealand',
						value: 'DK-85',
					},
					{
						name: 'Relizane Province',
						value: 'DZ-48',
					},
					{
						name: 'Rennell and Bellona Province',
						value: 'SB-RB',
					},
					{
						name: 'Reno NV',
						value: '811',
					},
					{
						name: 'Republic of Bashkortostan',
						value: 'RU-BA',
					},
					{
						name: 'Republic of Karakalpakstan',
						value: 'UZ-QR',
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
						name: 'Republika Srpska',
						value: 'BA-SRP',
					},
					{
						name: 'Retalhuleu Department',
						value: 'GT-RE',
					},
					{
						name: 'Réunion',
						value: 'RE',
					},
					{
						name: 'Rēzekne Municipality',
						value: 'LV-077',
					},
					{
						name: 'Rēzekne Municipality (LV-REZ)',
						value: 'LV-REZ',
					},
					{
						name: 'Rezina',
						value: 'MD-RE',
					},
					{
						name: 'Rhineland-Palatinate',
						value: 'DE-RP',
					},
					{
						name: 'Rhode Island',
						value: 'US-RI',
					},
					{
						name: 'Rhone-Alpes',
						value: 'FR-V',
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
						name: 'Richmond-Petersburg VA',
						value: '556',
					},
					{
						name: 'Riebiņi Municipality',
						value: 'LV-078',
					},
					{
						name: 'Rif-Dimashq Governorate',
						value: 'SY-RD',
					},
					{
						name: 'Riga',
						value: 'LV-RIX',
					},
					{
						name: 'Rio Claro-Mayaro',
						value: 'TT-RCM',
					},
					{
						name: 'Río Negro',
						value: 'AR-R',
					},
					{
						name: 'Río Negro Department',
						value: 'UY-RN',
					},
					{
						name: 'Rio San Juan',
						value: 'NI-SJ',
					},
					{
						name: 'Risaralda',
						value: 'CO-RIS',
					},
					{
						name: 'Riscani',
						value: 'MD-RI',
					},
					{
						name: 'Rivas',
						value: 'NI-RI',
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
						name: 'River Nile',
						value: 'SD-NR',
					},
					{
						name: 'Rivera Department',
						value: 'UY-RV',
					},
					{
						name: 'Rivers',
						value: 'NG-RI',
					},
					{
						name: 'Rivière du Rempart',
						value: 'MU-RR',
					},
					{
						name: "Rivnens'ka oblast",
						value: 'UA-56',
					},
					{
						name: 'Riyadh Province',
						value: 'SA-01',
					},
					{
						name: 'Rize',
						value: 'TR-53',
					},
					{
						name: 'Roanoke-Lynchburg VA',
						value: '573',
					},
					{
						name: 'Rocha Department',
						value: 'UY-RO',
					},
					{
						name: 'Roche Caiman',
						value: 'SC-25',
					},
					{
						name: 'Rochester MN-Mason City IA-Austin MN',
						value: '611',
					},
					{
						name: 'Rochester NY',
						value: '538',
					},
					{
						name: 'Rockford IL',
						value: '610',
					},
					{
						name: 'Rodrigues',
						value: 'MU-RO',
					},
					{
						name: 'Rogaland',
						value: 'NO-11',
					},
					{
						name: 'Roi Et',
						value: 'TH-45',
					},
					{
						name: 'Roja Municipality',
						value: 'LV-079',
					},
					{
						name: 'Romania',
						value: 'RO',
					},
					{
						name: 'Rongelap Atoll',
						value: 'MH-RON',
					},
					{
						name: 'Ropaži Municipality',
						value: 'LV-080',
					},
					{
						name: 'Rostov Oblast',
						value: 'RU-ROS',
					},
					{
						name: 'Rotuma',
						value: 'FJ-R',
					},
					{
						name: 'Rozaje',
						value: 'ME-17',
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
						name: 'Ruggell',
						value: 'LI-06',
					},
					{
						name: 'Rūjiena Municipality',
						value: 'LV-084',
					},
					{
						name: 'Rukwa',
						value: 'TZ-20',
					},
					{
						name: 'Rum Cay',
						value: 'BS-RC',
					},
					{
						name: 'Rundāle Municipality',
						value: 'LV-083',
					},
					{
						name: 'Ruse',
						value: 'BG-18',
					},
					{
						name: 'Russia',
						value: 'RU',
					},
					{
						name: 'Rutana',
						value: 'BI-RT',
					},
					{
						name: 'Ruvuma',
						value: 'TZ-21',
					},
					{
						name: 'Ruyigi',
						value: 'BI-RY',
					},
					{
						name: 'Rwanda',
						value: 'RW',
					},
					{
						name: 'Ryanggang',
						value: 'KP-10',
					},
					{
						name: 'Ryazan Oblast',
						value: 'RU-RYA',
					},
					{
						name: 'Sa Kaeo',
						value: 'TH-27',
					},
					{
						name: "Sa'dah",
						value: 'YE-SD',
					},
					{
						name: 'Saare County',
						value: 'EE-74',
					},
					{
						name: 'Saarland',
						value: 'DE-SL',
					},
					{
						name: 'Saba',
						value: 'BQ-SA',
					},
					{
						name: 'Sabah',
						value: 'MY-12',
					},
					{
						name: 'Sabaragamuwa Province',
						value: 'LK-9',
					},
					{
						name: 'Sabha',
						value: 'LY-SB',
					},
					{
						name: 'Sacatepequez',
						value: 'GT-SA',
					},
					{
						name: 'Sacramento-Stockton-Modesto CA',
						value: '862',
					},
					{
						name: 'Saga Prefecture',
						value: 'JP-41',
					},
					{
						name: 'Sagaing Region',
						value: 'MM-01',
					},
					{
						name: 'Sahel',
						value: 'BF-12',
					},
					{
						name: 'Saïda Province',
						value: 'DZ-20',
					},
					{
						name: 'Saint Andrew (BB)',
						value: 'BB-02',
					},
					{
						name: 'Saint Andrew (GD)',
						value: 'GD-01',
					},
					{
						name: 'Saint Andrew (VC)',
						value: 'VC-02',
					},
					{
						name: 'Saint Andrew Parish (DM)',
						value: 'DM-02',
					},
					{
						name: 'Saint Andrew Parish (JM)',
						value: 'JM-02',
					},
					{
						name: 'Saint Ann Parish',
						value: 'JM-06',
					},
					{
						name: 'Saint Anne Sandy Point Parish',
						value: 'KN-02',
					},
					{
						name: 'Saint Catherine Parish',
						value: 'JM-14',
					},
					{
						name: 'Saint David (GD)',
						value: 'GD-02',
					},
					{
						name: 'Saint David (VC)',
						value: 'VC-03',
					},
					{
						name: 'Saint David Parish',
						value: 'DM-03',
					},
					{
						name: 'Saint Elizabeth Parish',
						value: 'JM-11',
					},
					{
						name: 'Saint George (AG)',
						value: 'AG-03',
					},
					{
						name: 'Saint George (GD)',
						value: 'GD-03',
					},
					{
						name: 'Saint George (VC)',
						value: 'VC-04',
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
						name: 'Saint George Parish',
						value: 'DM-04',
					},
					{
						name: 'Saint Helena',
						value: 'SH-HL',
					},
					{
						name: 'Saint James',
						value: 'BB-04',
					},
					{
						name: 'Saint James Parish',
						value: 'JM-08',
					},
					{
						name: 'Saint James Windward Parish',
						value: 'KN-05',
					},
					{
						name: 'Saint John (AG)',
						value: 'AG-04',
					},
					{
						name: 'Saint John (GD)',
						value: 'GD-04',
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
						name: 'Saint John Parish',
						value: 'DM-05',
					},
					{
						name: 'Saint Joseph',
						value: 'BB-06',
					},
					{
						name: 'Saint Joseph Parish',
						value: 'DM-06',
					},
					{
						name: 'Saint Louis',
						value: 'SC-22',
					},
					{
						name: 'Saint Lucy',
						value: 'BB-07',
					},
					{
						name: 'Saint Luke Parish',
						value: 'DM-07',
					},
					{
						name: 'Saint Mark',
						value: 'GD-05',
					},
					{
						name: 'Saint Mark Parish',
						value: 'DM-08',
					},
					{
						name: 'Saint Mary',
						value: 'AG-05',
					},
					{
						name: 'Saint Mary Cayon Parish',
						value: 'KN-08',
					},
					{
						name: 'Saint Mary Parish',
						value: 'JM-05',
					},
					{
						name: 'Saint Michael',
						value: 'BB-08',
					},
					{
						name: 'Saint Patrick (GD)',
						value: 'GD-06',
					},
					{
						name: 'Saint Patrick (VC)',
						value: 'VC-05',
					},
					{
						name: 'Saint Patrick Parish',
						value: 'DM-09',
					},
					{
						name: 'Saint Paul',
						value: 'AG-06',
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
						name: 'Saint Paul Parish',
						value: 'DM-10',
					},
					{
						name: 'Saint Peter',
						value: 'AG-07',
					},
					{
						name: 'Saint Peter Basseterre Parish',
						value: 'KN-11',
					},
					{
						name: 'Saint Peter Parish',
						value: 'DM-11',
					},
					{
						name: 'Saint Petersburg',
						value: 'RU-SPE',
					},
					{
						name: 'Saint Philip',
						value: 'AG-08',
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
						name: 'Saint Thomas Parish (BB)',
						value: 'BB-11',
					},
					{
						name: 'Saint Thomas Parish (JM)',
						value: 'JM-03',
					},
					{
						name: 'Saint-Louis Region',
						value: 'SN-SL',
					},
					{
						name: 'Saitama Prefecture',
						value: 'JP-11',
					},
					{
						name: 'Sakarya',
						value: 'TR-54',
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
						name: 'Sakon Nakhon',
						value: 'TH-47',
					},
					{
						name: 'Sal',
						value: 'CV-SL',
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
						name: 'Salah Al-Din',
						value: 'IQ-SD',
					},
					{
						name: 'Sălaj',
						value: 'RO-SJ',
					},
					{
						name: 'Salaspils Municipality',
						value: 'LV-087',
					},
					{
						name: 'Salavan',
						value: 'LA-SL',
					},
					{
						name: 'Saldus Municipality',
						value: 'LV-088',
					},
					{
						name: 'Salisbury MD',
						value: '576',
					},
					{
						name: 'Salt Lake City UT',
						value: '770',
					},
					{
						name: 'Salta Province',
						value: 'AR-A',
					},
					{
						name: 'Salto',
						value: 'UY-SA',
					},
					{
						name: 'Salzburg',
						value: 'AT-5',
					},
					{
						name: 'Samaná Province',
						value: 'DO-20',
					},
					{
						name: 'Samangan',
						value: 'AF-SAM',
					},
					{
						name: 'Samara Oblast',
						value: 'RU-SAM',
					},
					{
						name: 'Samarkand Province',
						value: 'UZ-SA',
					},
					{
						name: 'Samdrup Jongkhar',
						value: 'BT-45',
					},
					{
						name: 'Samegrelo-Upper Svaneti',
						value: 'GE-SZ',
					},
					{
						name: 'Samoa',
						value: 'WS',
					},
					{
						name: 'Samsun',
						value: 'TR-55',
					},
					{
						name: 'Samtse',
						value: 'BT-14',
					},
					{
						name: 'Samtskhe-Javakheti',
						value: 'GE-SJ',
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
						name: 'San Andrés and Providencia',
						value: 'CO-SAP',
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
						name: 'San Cristóbal Province',
						value: 'DO-21',
					},
					{
						name: 'San Diego CA',
						value: '825',
					},
					{
						name: 'San Fernando',
						value: 'TT-SFO',
					},
					{
						name: 'San Francisco-Oakland-San Jose CA',
						value: '807',
					},
					{
						name: 'San José de Ocoa Province',
						value: 'DO-31',
					},
					{
						name: 'San José Department',
						value: 'UY-SJ',
					},
					{
						name: 'San José Province',
						value: 'CR-SJ',
					},
					{
						name: 'San Juan Province (AR)',
						value: 'AR-J',
					},
					{
						name: 'San Juan Province (DO)',
						value: 'DO-22',
					},
					{
						name: 'San Juan-Laventille',
						value: 'TT-SJL',
					},
					{
						name: 'San Luis Potosi',
						value: 'MX-SLP',
					},
					{
						name: 'San Luis Province',
						value: 'AR-D',
					},
					{
						name: 'San Marcos Department',
						value: 'GT-SM',
					},
					{
						name: 'San Marino',
						value: 'SM',
					},
					{
						name: 'San Marino (SM-07_',
						value: 'SM-07',
					},
					{
						name: 'San Martin',
						value: 'PE-SAM',
					},
					{
						name: 'San Miguel',
						value: 'SV-SM',
					},
					{
						name: 'San Pedro',
						value: 'PY-2',
					},
					{
						name: 'San Pedro de Macorís Province',
						value: 'DO-23',
					},
					{
						name: 'San Salvador (BS)',
						value: 'BS-SS',
					},
					{
						name: 'San Salvador (SV)',
						value: 'SV-SS',
					},
					{
						name: 'San Vicente',
						value: 'SV-SV',
					},
					{
						name: "Sana'a",
						value: 'YE-SN',
					},
					{
						name: 'Sanaag',
						value: 'SO-SA',
					},
					{
						name: 'Sánchez Ramírez Province',
						value: 'DO-24',
					},
					{
						name: 'Sancti Spiritus',
						value: 'CU-07',
					},
					{
						name: 'Sangha',
						value: 'CG-13',
					},
					{
						name: 'Sangha-Mbare',
						value: 'CF-SE',
					},
					{
						name: 'Sangre Grande',
						value: 'TT-SGE',
					},
					{
						name: 'Şanlıurfa Province',
						value: 'TR-63',
					},
					{
						name: 'Sanma Province',
						value: 'VU-SAM',
					},
					{
						name: 'Sant Julià de Lòria',
						value: 'AD-06',
					},
					{
						name: 'Santa Ana',
						value: 'SV-SA',
					},
					{
						name: 'Santa Barbara',
						value: 'HN-SB',
					},
					{
						name: 'Santa Barbara-Santa Maria-San Luis Obispo CA',
						value: '855',
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
						name: 'Santa Cruz',
						value: 'BO-S',
					},
					{
						name: 'Santa Cruz Province',
						value: 'AR-Z',
					},
					{
						name: 'Santa Elena Province',
						value: 'EC-SE',
					},
					{
						name: 'Santa Fe Province',
						value: 'AR-S',
					},
					{
						name: 'Santa Rosa Department',
						value: 'GT-SR',
					},
					{
						name: 'Santander Department',
						value: 'CO-SAN',
					},
					{
						name: 'Santarém District',
						value: 'PT-14',
					},
					{
						name: 'Santiago de Cuba',
						value: 'CU-13',
					},
					{
						name: 'Santiago del Estero Province',
						value: 'AR-G',
					},
					{
						name: 'Santiago Metropolitan Region',
						value: 'CL-RM',
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
						name: 'Santo Domingo de los Tsáchilas Province',
						value: 'EC-SD',
					},
					{
						name: 'Santo Domingo Province',
						value: 'DO-32',
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
						name: 'Sao Tome',
						value: 'ST-S',
					},
					{
						name: 'São Tomé & Príncipe',
						value: 'ST',
					},
					{
						name: 'Sao Vicente',
						value: 'CV-SV',
					},
					{
						name: 'Saraburi',
						value: 'TH-19',
					},
					{
						name: 'Saramacca',
						value: 'SR-SA',
					},
					{
						name: 'Saratov Oblast',
						value: 'RU-SAR',
					},
					{
						name: 'Sarawak',
						value: 'MY-13',
					},
					{
						name: 'Sardinia',
						value: 'IT-88',
					},
					{
						name: 'Sare Pol',
						value: 'AF-SAR',
					},
					{
						name: 'Sarpang',
						value: 'BT-31',
					},
					{
						name: 'Saskatchewan',
						value: 'CA-SK',
					},
					{
						name: 'Satakunta',
						value: 'FI-17',
					},
					{
						name: 'Satu Mare County',
						value: 'RO-SM',
					},
					{
						name: 'Satun',
						value: 'TH-91',
					},
					{
						name: "Satupa'itea",
						value: 'WS-SA',
					},
					{
						name: 'Saudi Arabia',
						value: 'SA',
					},
					{
						name: 'Saulkrasti Municipality',
						value: 'LV-089',
					},
					{
						name: 'Savanes (CI)',
						value: 'CI-03',
					},
					{
						name: 'Savanes (TG)',
						value: 'TG-S',
					},
					{
						name: 'Savannah GA',
						value: '507',
					},
					{
						name: 'Savannakhet',
						value: 'LA-SV',
					},
					{
						name: 'Savanne',
						value: 'MU-SA',
					},
					{
						name: 'Savnik',
						value: 'ME-18',
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
						name: 'Sayabouly',
						value: 'LA-XA',
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
						name: 'Schleswig-Holstein',
						value: 'DE-SH',
					},
					{
						name: 'Scotland',
						value: 'GB-SCT',
					},
					{
						name: 'Seattle-Tacoma WA',
						value: '819',
					},
					{
						name: 'Sédhiou Region',
						value: 'SN-SE',
					},
					{
						name: 'Segou',
						value: 'ML-4',
					},
					{
						name: 'Sēja Municipality',
						value: 'LV-090',
					},
					{
						name: 'Selangor',
						value: 'MY-10',
					},
					{
						name: 'Selenge',
						value: 'MN-049',
					},
					{
						name: 'Semnan',
						value: 'IR-12',
					},
					{
						name: 'Senegal',
						value: 'SN',
					},
					{
						name: 'Sennar',
						value: 'SD-SI',
					},
					{
						name: 'Seoul',
						value: 'KR-11',
					},
					{
						name: 'Serbia',
						value: 'RS',
					},
					{
						name: 'Sermersooq',
						value: 'GL-SM',
					},
					{
						name: 'Serravalle',
						value: 'SM-09',
					},
					{
						name: 'Setif',
						value: 'DZ-19',
					},
					{
						name: 'Setubal',
						value: 'PT-15',
					},
					{
						name: "Sevastopol' city",
						value: 'UA-40',
					},
					{
						name: 'Seychelles',
						value: 'SC',
					},
					{
						name: 'Sfax',
						value: 'TN-61',
					},
					{
						name: 'Shaanxi',
						value: 'CN-61',
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
						name: 'Shabwah',
						value: 'YE-SH',
					},
					{
						name: 'Shamal Darfur',
						value: 'SD-DN',
					},
					{
						name: 'Shan',
						value: 'MM-17',
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
						name: 'Sharjah',
						value: 'AE-SH',
					},
					{
						name: 'Shefa Province',
						value: 'VU-SEE',
					},
					{
						name: 'Sherman TX-Ada OK',
						value: '657',
					},
					{
						name: 'Shida Kartli',
						value: 'GE-SK',
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
						name: 'Shinyanga',
						value: 'TZ-22',
					},
					{
						name: 'Shirak Province',
						value: 'AM-SH',
					},
					{
						name: 'Shiselweni',
						value: 'SZ-SH',
					},
					{
						name: 'Shizuoka Prefecture',
						value: 'JP-22',
					},
					{
						name: 'Shkodër County',
						value: 'AL-10',
					},
					{
						name: 'Shreveport LA',
						value: '612',
					},
					{
						name: 'Shumen Province',
						value: 'BG-27',
					},
					{
						name: 'Si Sa Ket',
						value: 'TH-33',
					},
					{
						name: 'Šiauliai County',
						value: 'LT-SA',
					},
					{
						name: 'Šibenik-Knin County',
						value: 'HR-15',
					},
					{
						name: 'Sibiu',
						value: 'RO-SB',
					},
					{
						name: 'Sichuan',
						value: 'CN-51',
					},
					{
						name: 'Sicily',
						value: 'IT-82',
					},
					{
						name: 'Sidi Bou Zid',
						value: 'TN-43',
					},
					{
						name: 'Sidi-Bel-Abbes',
						value: 'DZ-22',
					},
					{
						name: 'Siem Reap',
						value: 'KH-17',
					},
					{
						name: 'Sierra Leone',
						value: 'SL',
					},
					{
						name: 'Sigulda Municipality',
						value: 'LV-091',
					},
					{
						name: 'Siirt Province',
						value: 'TR-56',
					},
					{
						name: 'Sikasso',
						value: 'ML-3',
					},
					{
						name: 'Sikkim',
						value: 'IN-SK',
					},
					{
						name: 'Sila',
						value: 'TD-SI',
					},
					{
						name: 'Silesian Voivodeship',
						value: 'PL-SL',
					},
					{
						name: 'Siliana',
						value: 'TN-34',
					},
					{
						name: 'Silistra',
						value: 'BG-19',
					},
					{
						name: 'Sinaloa',
						value: 'MX-SIN',
					},
					{
						name: 'Sindh',
						value: 'PK-SD',
					},
					{
						name: 'Sing Buri',
						value: 'TH-17',
					},
					{
						name: 'Singapore',
						value: 'SG',
					},
					{
						name: 'Singerei',
						value: 'MD-SI',
					},
					{
						name: 'Singida',
						value: 'TZ-23',
					},
					{
						name: 'Sinoe',
						value: 'LR-SI',
					},
					{
						name: 'Sinop Province',
						value: 'TR-57',
					},
					{
						name: 'Sint Eustatius',
						value: 'BQ-SE',
					},
					{
						name: 'Sint Maarten',
						value: 'SX',
					},
					{
						name: 'Sioux City IA',
						value: '624',
					},
					{
						name: 'Sioux Falls(Mitchell) SD',
						value: '725',
					},
					{
						name: 'Sipaliwini',
						value: 'SR-SI',
					},
					{
						name: 'Siparia',
						value: 'TT-SIP',
					},
					{
						name: 'Sirdarya Province',
						value: 'UZ-SI',
					},
					{
						name: 'Sisak-Moslavina County',
						value: 'HR-03',
					},
					{
						name: 'Sistan and Baluchestan',
						value: 'IR-13',
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
						name: 'Skåne County',
						value: 'SE-M',
					},
					{
						name: 'Skikda Province',
						value: 'DZ-21',
					},
					{
						name: 'Skopje',
						value: 'MK-85',
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
						name: 'Sliven Province',
						value: 'BG-20',
					},
					{
						name: 'Slovakia',
						value: 'SK',
					},
					{
						name: 'Slovenia',
						value: 'SI',
					},
					{
						name: 'Smiltene Municipality',
						value: 'LV-094',
					},
					{
						name: 'Smolensk Oblast',
						value: 'RU-SMO',
					},
					{
						name: 'Smoljan',
						value: 'BG-21',
					},
					{
						name: 'Soc Trang',
						value: 'VN-52',
					},
					{
						name: 'Södermanland County',
						value: 'SE-D',
					},
					{
						name: 'Sofala Province',
						value: 'MZ-S',
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
						name: 'Sogn og Fjordane',
						value: 'NO-14',
					},
					{
						name: 'Sohag Governorate',
						value: 'EG-SHG',
					},
					{
						name: 'Sokoto',
						value: 'NG-SO',
					},
					{
						name: 'Soldanesti',
						value: 'MD-SD',
					},
					{
						name: 'Sololá Department',
						value: 'GT-SO',
					},
					{
						name: 'Solomon Islands',
						value: 'SB',
					},
					{
						name: 'Somali',
						value: 'ET-SO',
					},
					{
						name: 'Somalia',
						value: 'SO',
					},
					{
						name: 'Somogy County',
						value: 'HU-SO',
					},
					{
						name: 'Son La',
						value: 'VN-05',
					},
					{
						name: 'Songkhla',
						value: 'TH-90',
					},
					{
						name: 'Sonora',
						value: 'MX-SON',
					},
					{
						name: 'Sonsonate',
						value: 'SV-SO',
					},
					{
						name: 'Sonsorol',
						value: 'PW-370',
					},
					{
						name: 'Sool',
						value: 'SO-SO',
					},
					{
						name: 'Sor-Trondelag',
						value: 'NO-16',
					},
					{
						name: 'Soriano Department',
						value: 'UY-SO',
					},
					{
						name: 'Soroca',
						value: 'MD-SO',
					},
					{
						name: 'Soufriere',
						value: 'LC-10',
					},
					{
						name: 'Souk Ahras Province',
						value: 'DZ-41',
					},
					{
						name: 'Souss-Massa-Draa',
						value: 'MA-13',
					},
					{
						name: 'Sousse',
						value: 'TN-51',
					},
					{
						name: 'South (CM)',
						value: 'CM-SU',
					},
					{
						name: 'South (IS)',
						value: 'IS-8',
					},
					{
						name: 'South (LB)',
						value: 'LB-JA',
					},
					{
						name: 'South Abaco',
						value: 'BS-SO',
					},
					{
						name: 'South Africa',
						value: 'ZA',
					},
					{
						name: 'South Andros',
						value: 'BS-SA',
					},
					{
						name: 'South Australia',
						value: 'AU-SA',
					},
					{
						name: 'South Bend-Elkhart IN',
						value: '588',
					},
					{
						name: 'South Bohemian Region',
						value: 'CZ-JC',
					},
					{
						name: 'South Carolina',
						value: 'US-SC',
					},
					{
						name: 'South Central Province',
						value: 'MV-SC',
					},
					{
						name: 'South Dakota',
						value: 'US-SD',
					},
					{
						name: 'South District',
						value: 'IL-D',
					},
					{
						name: 'South East Sulawesi',
						value: 'ID-SG',
					},
					{
						name: 'South Eleuthera',
						value: 'BS-SE',
					},
					{
						name: 'South Georgia & South Sandwich Islands',
						value: 'GS',
					},
					{
						name: 'South Hamgyong',
						value: 'KP-08',
					},
					{
						name: 'South Holland',
						value: 'NL-ZH',
					},
					{
						name: 'South Hwanghae',
						value: 'KP-05',
					},
					{
						name: 'South Kalimantan',
						value: 'ID-KS',
					},
					{
						name: 'South Karelia',
						value: 'FI-02',
					},
					{
						name: 'South Kazakhstan Region',
						value: 'KZ-YUZ',
					},
					{
						name: 'South Khorasan',
						value: 'IR-29',
					},
					{
						name: 'South Kordofan',
						value: 'SD-KS',
					},
					{
						name: 'South Korea',
						value: 'KR',
					},
					{
						name: 'South Moravian Region',
						value: 'CZ-JM',
					},
					{
						name: 'South Province',
						value: 'MV-SU',
					},
					{
						name: 'South Pyongan',
						value: 'KP-02',
					},
					{
						name: 'South Sinai Governorate',
						value: 'EG-JS',
					},
					{
						name: 'South Sudan',
						value: 'SS',
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
						name: 'South-East',
						value: 'BW-SE',
					},
					{
						name: 'South-Kivu',
						value: 'CD-SK',
					},
					{
						name: 'Southern (BW)',
						value: 'BW-SO',
					},
					{
						name: 'Southern (ER)',
						value: 'ER-DU',
					},
					{
						name: 'Southern (ZM)',
						value: 'ZM-07',
					},
					{
						name: 'Southern Governorate',
						value: 'BH-14',
					},
					{
						name: 'Southern Highlands Province',
						value: 'PG-SHM',
					},
					{
						name: "Southern Nations, Nationalities, and People's Region",
						value: 'ET-SN',
					},
					{
						name: 'Southern Ostrobothnia',
						value: 'FI-03',
					},
					{
						name: 'Southern Peninsula Region',
						value: 'IS-2',
					},
					{
						name: 'Southern Province (LK)',
						value: 'LK-3',
					},
					{
						name: 'Southern Province (RW)',
						value: 'RW-05',
					},
					{
						name: 'Southern Province (SL)',
						value: 'SL-S',
					},
					{
						name: 'Southern Red Sea',
						value: 'ER-DK',
					},
					{
						name: 'Southern Region',
						value: 'MW-S',
					},
					{
						name: 'Southern Savonia',
						value: 'FI-04',
					},
					{
						name: 'Southland',
						value: 'NZ-STL',
					},
					{
						name: 'Southwest',
						value: 'CM-SW',
					},
					{
						name: 'Southwest Finland',
						value: 'FI-19',
					},
					{
						name: 'Spain',
						value: 'ES',
					},
					{
						name: 'Spanish Wells',
						value: 'BS-SW',
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
						name: 'Split-Dalmatia County',
						value: 'HR-17',
					},
					{
						name: 'Spokane WA',
						value: '881',
					},
					{
						name: 'Springfield MO',
						value: '619',
					},
					{
						name: 'Springfield-Holyoke MA',
						value: '543',
					},
					{
						name: 'Sri Lanka',
						value: 'LK',
					},
					{
						name: 'St. Barthélemy',
						value: 'BL',
					},
					{
						name: 'St. Gallen',
						value: 'CH-SG',
					},
					{
						name: 'St. Helena',
						value: 'SH',
					},
					{
						name: 'St. Joseph MO',
						value: '638',
					},
					{
						name: 'St. Kitts & Nevis',
						value: 'KN',
					},
					{
						name: 'St. Louis MO',
						value: '609',
					},
					{
						name: 'St. Lucia',
						value: 'LC',
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
						name: 'Stann Creek',
						value: 'BZ-SC',
					},
					{
						name: 'Stara Zagora',
						value: 'BG-24',
					},
					{
						name: 'Staro Nagorichane',
						value: 'MK-71',
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
						name: 'State of Mexico',
						value: 'MX-MEX',
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
						name: 'Stavropol Krai',
						value: 'RU-STA',
					},
					{
						name: 'Stefan Voda',
						value: 'MD-SV',
					},
					{
						name: 'Stockholm County',
						value: 'SE-AB',
					},
					{
						name: 'Stopiņi Municipality',
						value: 'LV-095',
					},
					{
						name: 'Straseni',
						value: 'MD-ST',
					},
					{
						name: 'Strenči Municipality',
						value: 'LV-096',
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
						name: 'Stung Treng',
						value: 'KH-19',
					},
					{
						name: 'Styria',
						value: 'AT-6',
					},
					{
						name: 'Suceava County',
						value: 'RO-SV',
					},
					{
						name: 'Suchitepequez',
						value: 'GT-SU',
					},
					{
						name: 'Sucre (CO)',
						value: 'CO-SUC',
					},
					{
						name: 'Sucre (VE)',
						value: 'VE-R',
					},
					{
						name: 'Sucumbíos Province',
						value: 'EC-U',
					},
					{
						name: 'Sud',
						value: 'HT-SD',
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
						name: 'Sud-Est',
						value: 'HT-SE',
					},
					{
						name: 'Sud-Ouest',
						value: 'BF-13',
					},
					{
						name: 'Sudan',
						value: 'SD',
					},
					{
						name: 'Suez Governorate',
						value: 'EG-SUZ',
					},
					{
						name: 'Sughd Province',
						value: 'TJ-SU',
					},
					{
						name: 'Sukhbaatar',
						value: 'MN-051',
					},
					{
						name: 'Sukhothai',
						value: 'TH-64',
					},
					{
						name: 'Sulaymaniyah',
						value: 'IQ-SU',
					},
					{
						name: "Sums'ka oblast",
						value: 'UA-59',
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
						name: 'Suriname',
						value: 'SR',
					},
					{
						name: 'Surkhandarya Province',
						value: 'UZ-SU',
					},
					{
						name: 'Surt',
						value: 'LY-SR',
					},
					{
						name: 'Svalbard & Jan Mayen',
						value: 'SJ',
					},
					{
						name: 'Svay Rieng',
						value: 'KH-20',
					},
					{
						name: 'Sverdlovsk Oblast',
						value: 'RU-SVE',
					},
					{
						name: 'Sveti Nikole',
						value: 'MK-69',
					},
					{
						name: 'Sweden',
						value: 'SE',
					},
					{
						name: 'Swietokrzyskie',
						value: 'PL-SK',
					},
					{
						name: 'Switzerland',
						value: 'CH',
					},
					{
						name: 'Sylhet Division',
						value: 'BD-G',
					},
					{
						name: 'Syracuse NY',
						value: '555',
					},
					{
						name: 'Syria',
						value: 'SY',
					},
					{
						name: 'Syunik Province',
						value: 'AM-SU',
					},
					{
						name: 'Szabolcs-Szatmár-Bereg',
						value: 'HU-SZ',
					},
					{
						name: "Ta'izz",
						value: 'YE-TA',
					},
					{
						name: 'Tabasco',
						value: 'MX-TAB',
					},
					{
						name: 'Tabora',
						value: 'TZ-24',
					},
					{
						name: 'Tabuk Province',
						value: 'SA-07',
					},
					{
						name: 'Táchira',
						value: 'VE-S',
					},
					{
						name: 'Tacna',
						value: 'PE-TAC',
					},
					{
						name: 'Tacuarembó Department',
						value: 'UY-TA',
					},
					{
						name: 'Tadjourah',
						value: 'DJ-TA',
					},
					{
						name: 'Tadla-Azilal',
						value: 'MA-12',
					},
					{
						name: 'Tafea Province',
						value: 'VU-TAE',
					},
					{
						name: 'Tafilah Governorate',
						value: 'JO-AT',
					},
					{
						name: 'Tagant',
						value: 'MR-09',
					},
					{
						name: 'Tahoua',
						value: 'NE-5',
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
						name: 'Taiwan',
						value: 'TW',
					},
					{
						name: 'Tajikistan',
						value: 'TJ',
					},
					{
						name: 'Tak',
						value: 'TH-63',
					},
					{
						name: 'Takamaka',
						value: 'SC-23',
					},
					{
						name: 'Takeo',
						value: 'KH-21',
					},
					{
						name: 'Takhar',
						value: 'AF-TAK',
					},
					{
						name: 'Talas',
						value: 'KG-T',
					},
					{
						name: 'Tallahassee FL-Thomasville GA',
						value: '530',
					},
					{
						name: 'Talsi Municipality',
						value: 'LV-097',
					},
					{
						name: 'Tamaulipas',
						value: 'MX-TAM',
					},
					{
						name: 'Tambacounda Region',
						value: 'SN-TC',
					},
					{
						name: 'Tambov Oblast',
						value: 'RU-TAM',
					},
					{
						name: 'Tamil Nadu',
						value: 'IN-TN',
					},
					{
						name: 'Tampa-St. Petersburg (Sarasota) FL',
						value: '539',
					},
					{
						name: 'Tandjile',
						value: 'TD-TA',
					},
					{
						name: 'Tanga',
						value: 'TZ-25',
					},
					{
						name: 'Tangier-Tetouan',
						value: 'MA-01',
					},
					{
						name: 'Tanintharyi Region',
						value: 'MM-05',
					},
					{
						name: 'Tanzania',
						value: 'TZ',
					},
					{
						name: 'Taoyuan City',
						value: 'TW-TAO',
					},
					{
						name: 'Taraba',
						value: 'NG-TA',
					},
					{
						name: 'Taraclia',
						value: 'MD-TA',
					},
					{
						name: 'Taranaki',
						value: 'NZ-TKI',
					},
					{
						name: 'Tarapacá Region',
						value: 'CL-TA',
					},
					{
						name: 'Targovishte Province',
						value: 'BG-25',
					},
					{
						name: 'Tarija Department',
						value: 'BO-T',
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
						name: 'Tartu County',
						value: 'EE-78',
					},
					{
						name: 'Tartus Governorate',
						value: 'SY-TA',
					},
					{
						name: 'Tashkent Province',
						value: 'UZ-TO',
					},
					{
						name: 'Tasman',
						value: 'NZ-TAS',
					},
					{
						name: 'Tasmania',
						value: 'AU-TAS',
					},
					{
						name: 'Tataouine',
						value: 'TN-83',
					},
					{
						name: 'Tatarstan',
						value: 'RU-TA',
					},
					{
						name: 'Tauragė County',
						value: 'LT-TA',
					},
					{
						name: 'Tavastia Proper',
						value: 'FI-06',
					},
					{
						name: 'Tavush Province',
						value: 'AM-TV',
					},
					{
						name: 'Tây Ninh Province',
						value: 'VN-37',
					},
					{
						name: 'Taza-Al Hoceima-Taounate',
						value: 'MA-03',
					},
					{
						name: 'Tbilisi',
						value: 'GE-TB',
					},
					{
						name: 'Tbong Khmum',
						value: 'KH-25',
					},
					{
						name: 'Tearce',
						value: 'MK-75',
					},
					{
						name: 'Tebessa',
						value: 'DZ-12',
					},
					{
						name: 'Tehran',
						value: 'IR-07',
					},
					{
						name: 'Tekirdağ',
						value: 'TR-59',
					},
					{
						name: 'Tel Aviv District',
						value: 'IL-TA',
					},
					{
						name: 'Telangana',
						value: 'IN-TG',
					},
					{
						name: 'Telemark',
						value: 'NO-08',
					},
					{
						name: 'Telenești District',
						value: 'MD-TE',
					},
					{
						name: 'Teleorman County',
						value: 'RO-TR',
					},
					{
						name: 'Telšiai County',
						value: 'LT-TE',
					},
					{
						name: 'Temburong',
						value: 'BN-TE',
					},
					{
						name: 'Temotu Province',
						value: 'SB-TE',
					},
					{
						name: 'Tennessee',
						value: 'US-TN',
					},
					{
						name: 'Terengganu',
						value: 'MY-11',
					},
					{
						name: "Ternopil's'ka oblast",
						value: 'UA-61',
					},
					{
						name: 'Terre Haute IN',
						value: '581',
					},
					{
						name: 'Tērvete Municipality',
						value: 'LV-098',
					},
					{
						name: 'Tete Province',
						value: 'MZ-T',
					},
					{
						name: 'Tetovo',
						value: 'MK-76',
					},
					{
						name: 'Texas',
						value: 'US-TX',
					},
					{
						name: 'Thaba-Tseka',
						value: 'LS-K',
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
						name: 'Thailand',
						value: 'TH',
					},
					{
						name: 'Thanh Hoa',
						value: 'VN-21',
					},
					{
						name: 'Thiès Region',
						value: 'SN-TH',
					},
					{
						name: 'Thimphu',
						value: 'BT-15',
					},
					{
						name: 'Thua Thien Hue',
						value: 'VN-26',
					},
					{
						name: 'Thurgau',
						value: 'CH-TG',
					},
					{
						name: 'Thuringia',
						value: 'DE-TH',
					},
					{
						name: 'Tianjin',
						value: 'CN-12',
					},
					{
						name: 'Tiaret Province',
						value: 'DZ-14',
					},
					{
						name: 'Tibesti',
						value: 'TD-TI',
					},
					{
						name: 'Tibet',
						value: 'CN-54',
					},
					{
						name: 'Ticino',
						value: 'CH-TI',
					},
					{
						name: 'Tien Giang',
						value: 'VN-46',
					},
					{
						name: 'Tierra del Fuego Province',
						value: 'AR-V',
					},
					{
						name: 'Tigray',
						value: 'ET-TI',
					},
					{
						name: 'Tillaberi',
						value: 'NE-6',
					},
					{
						name: 'Timiș County',
						value: 'RO-TM',
					},
					{
						name: 'Timor-Leste',
						value: 'TL',
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
						name: 'Tirana',
						value: 'AL-11',
					},
					{
						name: 'Tiris Zemmour',
						value: 'MR-11',
					},
					{
						name: 'Tissemsilt',
						value: 'DZ-38',
					},
					{
						name: 'Tivat',
						value: 'ME-19',
					},
					{
						name: 'Tizi Ouzou Province',
						value: 'DZ-15',
					},
					{
						name: 'Tlaxcala',
						value: 'MX-TLA',
					},
					{
						name: 'Tlemcen Province',
						value: 'DZ-13',
					},
					{
						name: 'Toamasina',
						value: 'MG-A',
					},
					{
						name: 'Tochigi Prefecture',
						value: 'JP-09',
					},
					{
						name: 'Togdheer',
						value: 'SO-TO',
					},
					{
						name: 'Togo',
						value: 'TG',
					},
					{
						name: 'Toi',
						value: 'NU-TOI',
					},
					{
						name: 'Tokat',
						value: 'TR-60',
					},
					{
						name: 'Tokelau',
						value: 'TK',
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
						name: 'Toledo',
						value: 'BZ-TOL',
					},
					{
						name: 'Toledo OH',
						value: '547',
					},
					{
						name: 'Toliara',
						value: 'MG-U',
					},
					{
						name: 'Tolima',
						value: 'CO-TOL',
					},
					{
						name: 'Tolna County',
						value: 'HU-TO',
					},
					{
						name: 'Tombali Region',
						value: 'GW-TO',
					},
					{
						name: 'Tombouctou',
						value: 'ML-6',
					},
					{
						name: 'Tomsk Oblast',
						value: 'RU-TOM',
					},
					{
						name: 'Tonga',
						value: 'TO',
					},
					{
						name: 'Tongatapu',
						value: 'TO-04',
					},
					{
						name: 'Topeka KS',
						value: '605',
					},
					{
						name: 'Torba Province',
						value: 'VU-TOB',
					},
					{
						name: 'Totonicapán Department',
						value: 'GT-TO',
					},
					{
						name: 'Tottori Prefecture',
						value: 'JP-31',
					},
					{
						name: 'Tov',
						value: 'MN-047',
					},
					{
						name: 'Toyama Prefecture',
						value: 'JP-16',
					},
					{
						name: 'Tozeur',
						value: 'TN-72',
					},
					{
						name: 'Tra Vinh',
						value: 'VN-51',
					},
					{
						name: 'Trabzon',
						value: 'TR-61',
					},
					{
						name: 'Trang',
						value: 'TH-92',
					},
					{
						name: 'Transnistria',
						value: 'MD-SN',
					},
					{
						name: 'Trarza',
						value: 'MR-06',
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
						name: 'Trat',
						value: 'TH-23',
					},
					{
						name: 'Traverse City-Cadillac MI',
						value: '540',
					},
					{
						name: 'Treinta y Tres Department',
						value: 'UY-TT',
					},
					{
						name: 'Trelawny Parish',
						value: 'JM-07',
					},
					{
						name: 'Trenčín Region',
						value: 'SK-TC',
					},
					{
						name: 'Trentino-Alto Adige/South Tyrol',
						value: 'IT-32',
					},
					{
						name: 'Tri-Cities TN-VA',
						value: '531',
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
						name: 'Trinidad & Tobago',
						value: 'TT',
					},
					{
						name: 'Trinity Palmetto Point Parish',
						value: 'KN-15',
					},
					{
						name: 'Tripoli',
						value: 'LY-TB',
					},
					{
						name: 'Tripura',
						value: 'IN-TR',
					},
					{
						name: 'Tristan da Cunha',
						value: 'SH-TA',
					},
					{
						name: 'Trnava Region',
						value: 'SK-TA',
					},
					{
						name: 'Troms',
						value: 'NO-19',
					},
					{
						name: 'Trongsa',
						value: 'BT-32',
					},
					{
						name: 'Trujillo',
						value: 'VE-T',
					},
					{
						name: 'Tsirang',
						value: 'BT-21',
					},
					{
						name: 'Tuamasaga',
						value: 'WS-TU',
					},
					{
						name: 'Tucson (Sierra Vista) AZ',
						value: '789',
					},
					{
						name: 'Tucumán',
						value: 'AR-T',
					},
					{
						name: 'Tukums Municipality',
						value: 'LV-099',
					},
					{
						name: 'Tula Oblast',
						value: 'RU-TUL',
					},
					{
						name: 'Tulcea County',
						value: 'RO-TL',
					},
					{
						name: 'Tulsa OK',
						value: '671',
					},
					{
						name: 'Tumbes',
						value: 'PE-TUM',
					},
					{
						name: 'Tunapuna-Piarco',
						value: 'TT-TUP',
					},
					{
						name: 'Tunceli',
						value: 'TR-62',
					},
					{
						name: 'Tungurahua',
						value: 'EC-T',
					},
					{
						name: 'Tunis',
						value: 'TN-11',
					},
					{
						name: 'Tunisia',
						value: 'TN',
					},
					{
						name: 'Türkiye',
						value: 'TR',
					},
					{
						name: 'Turkmenistan',
						value: 'TM',
					},
					{
						name: 'Turks & Caicos Islands',
						value: 'TC',
					},
					{
						name: 'Tuscany',
						value: 'IT-52',
					},
					{
						name: 'Tutong',
						value: 'BN-TU',
					},
					{
						name: 'Tuva',
						value: 'RU-TY',
					},
					{
						name: 'Tuvalu',
						value: 'TV',
					},
					{
						name: 'Tuyên Quang Province',
						value: 'VN-07',
					},
					{
						name: 'Tver Oblast',
						value: 'RU-TVE',
					},
					{
						name: 'Twin Falls ID',
						value: '760',
					},
					{
						name: 'Tyler-Longview(Lufkin & Nacogdoches) TX',
						value: '709',
					},
					{
						name: 'Tyrol',
						value: 'AT-7',
					},
					{
						name: 'Tyumen Oblast',
						value: 'RU-TYU',
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
						name: 'Uaboe',
						value: 'NR-13',
					},
					{
						name: 'Ubon Ratchathani',
						value: 'TH-34',
					},
					{
						name: 'Ucayali',
						value: 'PE-UCA',
					},
					{
						name: 'Udmurt Republic',
						value: 'RU-UD',
					},
					{
						name: 'Udon Thani',
						value: 'TH-41',
					},
					{
						name: 'Uganda',
						value: 'UG',
					},
					{
						name: 'Uíge Province',
						value: 'AO-UIG',
					},
					{
						name: 'Ujae Atoll',
						value: 'MH-UJA',
					},
					{
						name: 'Ukraine',
						value: 'UA',
					},
					{
						name: 'Ulaanbaatar',
						value: 'MN-1',
					},
					{
						name: 'Ulcinj',
						value: 'ME-20',
					},
					{
						name: 'Ulsan',
						value: 'KR-31',
					},
					{
						name: 'Ulyanovsk Oblast',
						value: 'RU-ULY',
					},
					{
						name: 'Umbria',
						value: 'IT-55',
					},
					{
						name: 'Umm Al Quwain',
						value: 'AE-UQ',
					},
					{
						name: 'Umm Salal Municipality',
						value: 'QA-US',
					},
					{
						name: 'Umnugovi',
						value: 'MN-053',
					},
					{
						name: 'Ungheni',
						value: 'MD-UN',
					},
					{
						name: 'United Arab Emirates',
						value: 'AE',
					},
					{
						name: 'United Kingdom',
						value: 'GB',
					},
					{
						name: 'United States',
						value: 'US',
					},
					{
						name: 'Upper Austria',
						value: 'AT-4',
					},
					{
						name: 'Upper Demerara-Berbice',
						value: 'GY-UD',
					},
					{
						name: 'Upper East Region',
						value: 'GH-UE',
					},
					{
						name: 'Upper Nile',
						value: 'SS-NU',
					},
					{
						name: 'Upper Normandy',
						value: 'FR-Q',
					},
					{
						name: 'Upper North Province',
						value: 'MV-UN',
					},
					{
						name: 'Upper River',
						value: 'GM-U',
					},
					{
						name: 'Upper South Province',
						value: 'MV-US',
					},
					{
						name: 'Upper Takutu-Upper Essequibo',
						value: 'GY-UT',
					},
					{
						name: 'Upper West Region',
						value: 'GH-UW',
					},
					{
						name: 'Uppsala County',
						value: 'SE-C',
					},
					{
						name: 'Uruguay',
						value: 'UY',
					},
					{
						name: 'Uşak',
						value: 'TR-64',
					},
					{
						name: 'Ústí nad Labem Region',
						value: 'CZ-US',
					},
					{
						name: 'Usulutan',
						value: 'SV-US',
					},
					{
						name: 'Utah',
						value: 'US-UT',
					},
					{
						name: 'Utena County',
						value: 'LT-UT',
					},
					{
						name: 'Uthai Thani',
						value: 'TH-61',
					},
					{
						name: 'Utica NY',
						value: '526',
					},
					{
						name: 'Utirik Atoll',
						value: 'MH-UTI',
					},
					{
						name: 'Utrecht',
						value: 'NL-UT',
					},
					{
						name: 'Uttar Pradesh',
						value: 'IN-UP',
					},
					{
						name: 'Uttaradit',
						value: 'TH-53',
					},
					{
						name: 'Uttarakhand',
						value: 'IN-UT',
					},
					{
						name: 'Uusimaa',
						value: 'FI-18',
					},
					{
						name: 'Uva Province',
						value: 'LK-8',
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
						name: 'Uzbekistan',
						value: 'UZ',
					},
					{
						name: "Va'a-o-Fonoti",
						value: 'WS-VF',
					},
					{
						name: 'Vaduz',
						value: 'LI-11',
					},
					{
						name: 'Vaiņode Municipality',
						value: 'LV-100',
					},
					{
						name: 'Vaisigano',
						value: 'WS-VS',
					},
					{
						name: 'Vaitupu',
						value: 'TV-VAI',
					},
					{
						name: 'Vakaga',
						value: 'CF-VK',
					},
					{
						name: 'Valais',
						value: 'CH-VS',
					},
					{
						name: 'Valandovo',
						value: 'MK-10',
					},
					{
						name: 'Vâlcea County',
						value: 'RO-VL',
					},
					{
						name: 'Valencian Community',
						value: 'ES-VC',
					},
					{
						name: 'Valga County',
						value: 'EE-82',
					},
					{
						name: 'Valka Municipality',
						value: 'LV-101',
					},
					{
						name: 'Valle',
						value: 'HN-VA',
					},
					{
						name: 'Valle del Cauca',
						value: 'CO-VAC',
					},
					{
						name: 'Vallee du Bandama',
						value: 'CI-04',
					},
					{
						name: 'Valmiera',
						value: 'LV-VMR',
					},
					{
						name: 'Valparaiso Region',
						value: 'CL-VS',
					},
					{
						name: 'Valverde Province',
						value: 'DO-27',
					},
					{
						name: 'Van',
						value: 'TR-65',
					},
					{
						name: 'Vanuatu',
						value: 'VU',
					},
					{
						name: 'Varakļāni Municipality',
						value: 'LV-102',
					},
					{
						name: 'Varaždin County',
						value: 'HR-05',
					},
					{
						name: 'Vargas',
						value: 'VE-X',
					},
					{
						name: 'Vārkava Municipality',
						value: 'LV-103',
					},
					{
						name: 'Varmland County',
						value: 'SE-S',
					},
					{
						name: 'Varna',
						value: 'BG-03',
					},
					{
						name: 'Vas County',
						value: 'HU-VA',
					},
					{
						name: 'Vaslui County',
						value: 'RO-VS',
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
						name: 'Vatican City',
						value: 'VA',
					},
					{
						name: 'Vaud',
						value: 'CH-VD',
					},
					{
						name: 'Vaupes',
						value: 'CO-VAU',
					},
					{
						name: "Vava'u",
						value: 'TO-05',
					},
					{
						name: 'Vayots Dzor Province',
						value: 'AM-VD',
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
						name: 'Veliko Tarnovo Province',
						value: 'BG-04',
					},
					{
						name: 'Veneto',
						value: 'IT-34',
					},
					{
						name: 'Venezuela',
						value: 'VE',
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
						name: 'Veracruz',
						value: 'MX-VER',
					},
					{
						name: 'Veraguas Province',
						value: 'PA-9',
					},
					{
						name: 'Vermont',
						value: 'US-VT',
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
						name: 'Veszprém',
						value: 'HU-VE',
					},
					{
						name: 'Viana do Castelo District',
						value: 'PT-16',
					},
					{
						name: 'Vichada',
						value: 'CO-VID',
					},
					{
						name: 'Victoria',
						value: 'AU-VIC',
					},
					{
						name: 'Victoria TX',
						value: '626',
					},
					{
						name: 'Vidin',
						value: 'BG-05',
					},
					{
						name: 'Vienna',
						value: 'AT-9',
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
						name: 'Viesīte Municipality',
						value: 'LV-107',
					},
					{
						name: 'Vietnam',
						value: 'VN',
					},
					{
						name: 'Vieux Fort',
						value: 'LC-11',
					},
					{
						name: 'Vila Real District',
						value: 'PT-17',
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
						name: 'Viljandi County',
						value: 'EE-84',
					},
					{
						name: 'Villa Clara',
						value: 'CU-05',
					},
					{
						name: 'Vilnius County',
						value: 'LT-VL',
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
						name: "Vinnyts'ka oblast",
						value: 'UA-05',
					},
					{
						name: 'Viqueque',
						value: 'TL-VI',
					},
					{
						name: 'Virginia',
						value: 'US-VA',
					},
					{
						name: 'Virovitica-Podravina County',
						value: 'HR-10',
					},
					{
						name: 'Viseu District',
						value: 'PT-18',
					},
					{
						name: 'Vitebsk Region',
						value: 'BY-VI',
					},
					{
						name: 'Vladimir Oblast',
						value: 'RU-VLA',
					},
					{
						name: 'Vlora',
						value: 'AL-12',
					},
					{
						name: 'Vojvodina',
						value: 'RS-VO',
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
						name: 'Volta Region',
						value: 'GH-TV',
					},
					{
						name: "Volyns'ka oblast",
						value: 'UA-07',
					},
					{
						name: 'Vorarlberg',
						value: 'AT-8',
					},
					{
						name: 'Voronezh Oblast',
						value: 'RU-VOR',
					},
					{
						name: 'Võru County',
						value: 'EE-86',
					},
					{
						name: 'Vraca',
						value: 'BG-06',
					},
					{
						name: 'Vrancea County',
						value: 'RO-VN',
					},
					{
						name: 'Vrapchishte',
						value: 'MK-16',
					},
					{
						name: 'Vukovar-Srijem County',
						value: 'HR-16',
					},
					{
						name: 'Vysocina Region',
						value: 'CZ-VY',
					},
					{
						name: 'Waco-Temple-Bryan TX',
						value: '625',
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
						name: 'Wadi Fira',
						value: 'TD-WF',
					},
					{
						name: 'Waikato',
						value: 'NZ-WKO',
					},
					{
						name: 'Wakayama Prefecture',
						value: 'JP-30',
					},
					{
						name: 'Wales',
						value: 'GB-WLS',
					},
					{
						name: 'Wallis & Futuna',
						value: 'WF',
					},
					{
						name: 'Walloon Region',
						value: 'BE-WAL',
					},
					{
						name: 'Wangdue Phodrang',
						value: 'BT-24',
					},
					{
						name: 'Wanica',
						value: 'SR-WA',
					},
					{
						name: 'Wardak',
						value: 'AF-WAR',
					},
					{
						name: 'Warmian-Masurian Voivodeship',
						value: 'PL-WN',
					},
					{
						name: 'Warrap',
						value: 'SS-WR',
					},
					{
						name: 'Washington',
						value: 'US-WA',
					},
					{
						name: 'Washington DC (Hagerstown MD)',
						value: '511',
					},
					{
						name: 'Wasit',
						value: 'IQ-WA',
					},
					{
						name: 'Watertown NY',
						value: '549',
					},
					{
						name: 'Wausau-Rhinelander WI',
						value: '705',
					},
					{
						name: 'Wele-Nzas',
						value: 'GQ-WN',
					},
					{
						name: 'Wellington',
						value: 'NZ-WGN',
					},
					{
						name: 'West',
						value: 'CM-OU',
					},
					{
						name: 'West Azerbaijan',
						value: 'IR-02',
					},
					{
						name: 'West Bengal',
						value: 'IN-WB',
					},
					{
						name: 'West Coast',
						value: 'NZ-WTC',
					},
					{
						name: 'West Coast Region',
						value: 'GM-W',
					},
					{
						name: 'West Grand Bahama',
						value: 'BS-WG',
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
						name: 'West Kazakhstan Province',
						value: 'KZ-ZAP',
					},
					{
						name: 'West New Britain Province',
						value: 'PG-WBK',
					},
					{
						name: 'West Nusa Tenggara',
						value: 'ID-NB',
					},
					{
						name: 'West Palm Beach-Ft. Pierce FL',
						value: '548',
					},
					{
						name: 'West Papua',
						value: 'ID-PB',
					},
					{
						name: 'West Pomeranian Voivodeship',
						value: 'PL-ZP',
					},
					{
						name: 'West Sepik Province',
						value: 'PG-SAN',
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
						name: 'West Virginia',
						value: 'US-WV',
					},
					{
						name: 'Western',
						value: 'ZM-01',
					},
					{
						name: 'Western Area',
						value: 'SL-W',
					},
					{
						name: 'Western Australia',
						value: 'AU-WA',
					},
					{
						name: 'Western Bahr el Ghazal',
						value: 'SS-BW',
					},
					{
						name: 'Western Cape',
						value: 'ZA-WC',
					},
					{
						name: 'Western Division',
						value: 'FJ-W',
					},
					{
						name: 'Western Equatoria',
						value: 'SS-EW',
					},
					{
						name: 'Western Highlands Province',
						value: 'PG-WHM',
					},
					{
						name: 'Western Province (LK)',
						value: 'LK-1',
					},
					{
						name: 'Western Province (PG)',
						value: 'PG-WPD',
					},
					{
						name: 'Western Province (RW)',
						value: 'RW-04',
					},
					{
						name: 'Western Province (SB)',
						value: 'SB-WE',
					},
					{
						name: 'Western Region (GP)',
						value: 'GH-WP',
					},
					{
						name: 'Western Region (IS)',
						value: 'IS-3',
					},
					{
						name: 'Western Region (NP)',
						value: 'NP-3',
					},
					{
						name: 'Western Region (UG)',
						value: 'UG-W',
					},
					{
						name: 'Western Sahara',
						value: 'EH',
					},
					{
						name: 'Western Tobago',
						value: 'TT-WTO',
					},
					{
						name: 'Western Visayas',
						value: 'PH-06',
					},
					{
						name: 'Westfjords Region',
						value: 'IS-4',
					},
					{
						name: 'Westmoreland Parish',
						value: 'JM-10',
					},
					{
						name: 'Wheeling WV-Steubenville OH',
						value: '554',
					},
					{
						name: 'White Nile',
						value: 'SD-NW',
					},
					{
						name: 'Wichita Falls TX & Lawton OK',
						value: '627',
					},
					{
						name: 'Wichita-Hutchinson KS',
						value: '678',
					},
					{
						name: 'Wilkes Barre-Scranton PA',
						value: '577',
					},
					{
						name: 'Wilmington NC',
						value: '550',
					},
					{
						name: 'Wisconsin',
						value: 'US-WI',
					},
					{
						name: 'Woleu-Ntem',
						value: 'GA-9',
					},
					{
						name: 'Woqooyi Galbeed',
						value: 'SO-WO',
					},
					{
						name: 'Worldwide',
						value: '',
					},
					{
						name: 'Worodougou',
						value: 'CI-14',
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
						name: 'Wyoming',
						value: 'US-WY',
					},
					{
						name: 'Xekong',
						value: 'LA-XE',
					},
					{
						name: 'XI Región',
						value: 'CL-AI',
					},
					{
						name: 'Xiangkhouang',
						value: 'LA-XI',
					},
					{
						name: 'Xinjiang',
						value: 'CN-65',
					},
					{
						name: 'Yakima-Pasco-Richland-Kennewick WA',
						value: '810',
					},
					{
						name: 'Yala',
						value: 'TH-95',
					},
					{
						name: 'Yalova Province',
						value: 'TR-77',
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
						name: 'Yamalo-Nenets Autonomous Okrug',
						value: 'RU-YAN',
					},
					{
						name: 'Yamanashi Prefecture',
						value: 'JP-19',
					},
					{
						name: 'Yangon Region',
						value: 'MM-06',
					},
					{
						name: 'Yap',
						value: 'FM-YAP',
					},
					{
						name: 'Yaracuy',
						value: 'VE-U',
					},
					{
						name: 'Yaren',
						value: 'NR-14',
					},
					{
						name: 'Yaroslavl Oblast',
						value: 'RU-YAR',
					},
					{
						name: 'Yasothon',
						value: 'TH-35',
					},
					{
						name: 'Yazd',
						value: 'IR-25',
					},
					{
						name: 'Yemen',
						value: 'YE',
					},
					{
						name: 'Yen Bai Province',
						value: 'VN-06',
					},
					{
						name: 'Yerevan',
						value: 'AM-ER',
					},
					{
						name: 'Yobe',
						value: 'NG-YO',
					},
					{
						name: 'Yoro',
						value: 'HN-YO',
					},
					{
						name: 'Youngstown OH',
						value: '536',
					},
					{
						name: 'Yozgat',
						value: 'TR-66',
					},
					{
						name: 'Ysyk Kol Province',
						value: 'KG-Y',
					},
					{
						name: 'Yucatan',
						value: 'MX-YUC',
					},
					{
						name: 'Yukon Territory',
						value: 'CA-YT',
					},
					{
						name: 'Yuma AZ-El Centro CA',
						value: '771',
					},
					{
						name: 'Yunnan',
						value: 'CN-53',
					},
					{
						name: 'Zabaykalsky Krai',
						value: 'RU-ZAB',
					},
					{
						name: 'Zabljak',
						value: 'ME-21',
					},
					{
						name: 'Zabul',
						value: 'AF-ZAB',
					},
					{
						name: 'Zacapa Department',
						value: 'GT-ZA',
					},
					{
						name: 'Zacatecas',
						value: 'MX-ZAC',
					},
					{
						name: 'Zadar County',
						value: 'HR-13',
					},
					{
						name: 'Zaghouan',
						value: 'TN-22',
					},
					{
						name: 'Zagreb County',
						value: 'HR-01',
					},
					{
						name: 'Zaire Province',
						value: 'AO-ZAI',
					},
					{
						name: "Zakarpats'ka oblast",
						value: 'UA-21',
					},
					{
						name: 'Zala County',
						value: 'HU-ZA',
					},
					{
						name: 'Zambezi Region',
						value: 'NA-CA',
					},
					{
						name: 'Zambezia Province',
						value: 'MZ-Q',
					},
					{
						name: 'Zambia',
						value: 'ZM',
					},
					{
						name: 'Zamboanga Peninsula',
						value: 'PH-09',
					},
					{
						name: 'Zamfara',
						value: 'NG-ZA',
					},
					{
						name: 'Zamora-Chinchipe Province',
						value: 'EC-Z',
					},
					{
						name: 'Zanesville OH',
						value: '596',
					},
					{
						name: 'Zanjan',
						value: 'IR-11',
					},
					{
						name: 'Zanzan',
						value: 'CI-08',
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
						name: "Zaporiz'ka oblast",
						value: 'UA-23',
					},
					{
						name: 'Zarqa Governorate',
						value: 'JO-AZ',
					},
					{
						name: 'Zavkhan',
						value: 'MN-057',
					},
					{
						name: 'Zeeland',
						value: 'NL-ZE',
					},
					{
						name: 'Zelenikovo',
						value: 'MK-32',
					},
					{
						name: 'Zhejiang',
						value: 'CN-33',
					},
					{
						name: 'Zhemgang',
						value: 'BT-34',
					},
					{
						name: "Zhytomyrs'ka oblast",
						value: 'UA-18',
					},
					{
						name: 'Ziguinchor',
						value: 'SN-ZG',
					},
					{
						name: 'Žilina Region',
						value: 'SK-ZI',
					},
					{
						name: 'Zilupe Municipality',
						value: 'LV-110',
					},
					{
						name: 'Zimbabwe',
						value: 'ZW',
					},
					{
						name: 'Zinder',
						value: 'NE-7',
					},
					{
						name: 'Zlin Region',
						value: 'CZ-ZL',
					},
					{
						name: 'Zonguldak',
						value: 'TR-67',
					},
					{
						name: 'Zou',
						value: 'BJ-ZO',
					},
					{
						name: 'Zulia',
						value: 'VE-V',
					},
					{
						name: 'Zurich',
						value: 'CH-ZH',
					},
					{
						name: 'سلمات',
						value: 'TD-SA',
					},
				],
			},
			{
				displayName: 'Region (region)',
				name: 'region',
				description:
					'Parameter is used for getting more specific results when using "Compared breakdown by region" and "Interest by region" data_type charts. Other data_type charts do not accept region parameter. The default value depends on the geo location that is set. Not all region options will return results for every geo location.',
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
				displayName: 'Data type (data_type)',
				name: 'data_type',
				description:
					'Parameter defines the type of search you want to do. Available options: Interest over time (default) - Accepts both single and multiple queries per search. Compared breakdown by region - Accepts only multiple queries per search. Interest by region - Accepts only single query per search. Related topics - Accepts only single query per search. Related queries - Accepts only single query per search.',
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
					{ name: 'Compared breakdown by region', value: 'GEO_MAP' },
					{ name: 'Interest by region', value: 'GEO_MAP_0' },
					{ name: 'Interest over time', value: 'TIMESERIES' },
					{ name: 'Related queries', value: 'RELATED_QUERIES' },
					{ name: 'Related topics', value: 'RELATED_TOPICS' },
				],
			},
			{
				displayName: 'Time Zone (tz)',
				name: 'tz',
				description:
					'Parameter is used to define a time zone offset. The default value is set to 420 (Pacific Day Time(PDT): -07:00). See docs for more information: https://serpapi.com/google-trends-api#api-parameters-advanced-google-trends-parameters-tz',
				default: 420,
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
				displayName: 'Category (cat)',
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
				displayName: 'Property (gprop)',
				name: 'gprop',
				description: 'Parameter is used for sorting results by property',
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
					{ name: 'Google Shopping', value: 'froogle' },
					{ name: 'Image Search', value: 'images' },
					{ name: 'News Search', value: 'news' },
					{ name: 'Web Search', value: '' },
					{ name: 'YouTube Search', value: 'youtube' },
				],
			},
			{
				displayName: 'Date (date)',
				name: 'date',
				description:
					'Parameter is used to define a date. See docs for available options: https://serpapi.com/google-trends-api#api-parameters-advanced-google-trends-parameters-date.',
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
				displayName: 'Show CSV (csv)',
				name: 'csv',
				description: 'Whether to retrieve the CSV results',
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
				displayName: 'Include Low Search Volume Regions (include_low_search_volume)',
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
