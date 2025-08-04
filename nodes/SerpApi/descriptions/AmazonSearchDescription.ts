import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const amazonSearchFields: INodeProperties[] = [
  {
    displayName: 'Search Query (k)',
    name: 'k',
    description: 'Parameter defines the query you want to search. You can use anything that you would use in a regular Amazon search.',
    default: 'Coffee',
    routing: {
      request: {
        qs: {
          k: '={{$value}}'
        }
      }
    },
    type: 'string'
  },
  {
    displayName: 'Domain (amazon_domain)',
    name: 'amazon_domain',
    description: 'Parameter defines the Amazon domain to use. It defaults to amazon.com.',
    default: 'amazon.com',
    routing: {
      request: {
        qs: {
          amazon_domain: '={{$value}}'
        }
      }
    },
    type: 'options',
    options: [
      {
        name: 'amazon.com.au',
        value: 'amazon.com.au'
      },
      {
        name: 'amazon.com.be',
        value: 'amazon.com.be'
      },
      {
        name: 'amazon.com.br',
        value: 'amazon.com.br'
      },
      {
        name: 'amazon.ca',
        value: 'amazon.ca'
      },
      {
        name: 'amazon.cn',
        value: 'amazon.cn'
      },
      {
        name: 'amazon.eg',
        value: 'amazon.eg'
      },
      {
        name: 'amazon.fr',
        value: 'amazon.fr'
      },
      {
        name: 'amazon.de',
        value: 'amazon.de'
      },
      {
        name: 'amazon.in',
        value: 'amazon.in'
      },
      {
        name: 'amazon.it',
        value: 'amazon.it'
      },
      {
        name: 'amazon.co.jp',
        value: 'amazon.co.jp'
      },
      {
        name: 'amazon.nl',
        value: 'amazon.nl'
      },
      {
        name: 'amazon.pl',
        value: 'amazon.pl'
      },
      {
        name: 'amazon.sa',
        value: 'amazon.sa'
      },
      {
        name: 'amazon.sg',
        value: 'amazon.sg'
      },
      {
        name: 'amazon.es',
        value: 'amazon.es'
      },
      {
        name: 'amazon.se',
        value: 'amazon.se'
      },
      {
        name: 'amazon.com.tr',
        value: 'amazon.com.tr'
      },
      {
        name: 'amazon.ae',
        value: 'amazon.ae'
      },
      {
        name: 'amazon.co.uk',
        value: 'amazon.co.uk'
      },
      {
        name: 'amazon.com',
        value: 'amazon.com'
      },
      {
        name: 'amazon.com.mx',
        value: 'amazon.com.mx'
      }
    ]
  },
  {
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    default: {},
    placeholder: 'Add Field',
    displayOptions: {
      show: {
        operation: [
          'amazon'
        ]
      }
    },
    options: [
      {
        displayName: 'Language (language)',
        name: 'language',
        description: 'Parameter defines the language to use for the Amazon search.',
        default: 'amazon.com|en_US',
        routing: {
          request: {
            qs: {
              language: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'amazon.com.au - English - EN',
            value: 'amazon.com.au|en_AU'
          },
          {
            name: 'amazon.com.be - Nederlands - NL',
            value: 'amazon.com.be|nl_BE'
          },
          {
            name: 'amazon.com.be - français - FR',
            value: 'amazon.com.be|fr_BE'
          },
          {
            name: 'amazon.com.be - English - EN - Translation',
            value: 'amazon.com.be|en_GB'
          },
          {
            name: 'amazon.com.br - português - PT',
            value: 'amazon.com.br|pt_BR'
          },
          {
            name: 'amazon.ca - English - EN',
            value: 'amazon.ca|en_CA'
          },
          {
            name: 'amazon.ca - français - FR',
            value: 'amazon.ca|fr_CA'
          },
          {
            name: 'amazon.cn - 中文 - ZH',
            value: 'amazon.cn|zh_CN'
          },
          {
            name: 'amazon.eg - العربية - AR',
            value: 'amazon.eg|ar_AE'
          },
          {
            name: 'amazon.eg - English - EN - Translation',
            value: 'amazon.eg|en_AE'
          },
          {
            name: 'amazon.fr - français - FR',
            value: 'amazon.fr|fr_FR'
          },
          {
            name: 'amazon.fr - English - EN - Translation',
            value: 'amazon.fr|en_GB'
          },
          {
            name: 'amazon.de - Deutsch - DE',
            value: 'amazon.de|de_DE'
          },
          {
            name: 'amazon.de - English - EN - Translation',
            value: 'amazon.de|en_GB'
          },
          {
            name: 'amazon.de - čeština - CS - Překlad',
            value: 'amazon.de|cs_CZ'
          },
          {
            name: 'amazon.de - Nederlands - NL - Vertaling',
            value: 'amazon.de|nl_NL'
          },
          {
            name: 'amazon.de - polski - PL - Tłumaczenie',
            value: 'amazon.de|pl_PL'
          },
          {
            name: 'amazon.de - Türkçe - TR - Çeviri',
            value: 'amazon.de|tr_TR'
          },
          {
            name: 'amazon.de - dansk - DA - Oversættelse',
            value: 'amazon.de|da_DK'
          },
          {
            name: 'amazon.in - English - EN',
            value: 'amazon.in|en_IN'
          },
          {
            name: 'amazon.in - हिन्दी - HI - अनुवाद',
            value: 'amazon.in|hi_IN'
          },
          {
            name: 'amazon.in - தமிழ் - TA - மொழிபெயர்ப்பு',
            value: 'amazon.in|ta_IN'
          },
          {
            name: 'amazon.in - తెలుగు - TE - అనువాదం',
            value: 'amazon.in|te_IN'
          },
          {
            name: 'amazon.in - ಕನ್ನಡ - KN - ಭಾಷಾಂತರ',
            value: 'amazon.in|kn_IN'
          },
          {
            name: 'amazon.in - മലയാളം - ML - വിവർത്തനം',
            value: 'amazon.in|ml_IN'
          },
          {
            name: 'amazon.in - বাংলা - BN - অনুবাদ',
            value: 'amazon.in|bn_IN'
          },
          {
            name: 'amazon.in - मराठी - MR - भाषांतर',
            value: 'amazon.in|mr_IN'
          },
          {
            name: 'amazon.it - italiano - IT',
            value: 'amazon.it|it_IT'
          },
          {
            name: 'amazon.it - English - EN - Translation',
            value: 'amazon.it|en_GB'
          },
          {
            name: 'amazon.co.jp - 日本語 - JA',
            value: 'amazon.co.jp|ja_JP'
          },
          {
            name: 'amazon.co.jp - English - EN - Translation',
            value: 'amazon.co.jp|en_US'
          },
          {
            name: 'amazon.co.jp - 中文 - ZH - 翻译',
            value: 'amazon.co.jp|zh_CN'
          },
          {
            name: 'amazon.nl - Nederlands - NL',
            value: 'amazon.nl|nl_NL'
          },
          {
            name: 'amazon.nl - English - EN - Translation',
            value: 'amazon.nl|en_GB'
          },
          {
            name: 'amazon.pl - polski - PL',
            value: 'amazon.pl|pl_PL'
          },
          {
            name: 'amazon.sa - العربية - AR',
            value: 'amazon.sa|ar_AE'
          },
          {
            name: 'amazon.sa - English - EN - Translation',
            value: 'amazon.sa|en_AE'
          },
          {
            name: 'amazon.sg - English - EN',
            value: 'amazon.sg|en_SG'
          },
          {
            name: 'amazon.es - español - ES',
            value: 'amazon.es|es_ES'
          },
          {
            name: 'amazon.es - português - PT - Tradução',
            value: 'amazon.es|pt_PT'
          },
          {
            name: 'amazon.es - English - EN - Translation',
            value: 'amazon.es|en_GB'
          },
          {
            name: 'amazon.se - svenska - SV',
            value: 'amazon.se|sv_SE'
          },
          {
            name: 'amazon.se - English - EN - Translation',
            value: 'amazon.se|en_GB'
          },
          {
            name: 'amazon.com.tr - Türkçe - TR',
            value: 'amazon.com.tr|tr_TR'
          },
          {
            name: 'amazon.ae - English - EN',
            value: 'amazon.ae|en_AE'
          },
          {
            name: 'amazon.ae - العربية - AR - الترجمة',
            value: 'amazon.ae|ar_AE'
          },
          {
            name: 'amazon.co.uk - English - EN',
            value: 'amazon.co.uk|en_GB'
          },
          {
            name: 'amazon.com - English - EN',
            value: 'amazon.com|en_US'
          },
          {
            name: 'amazon.com - español - ES - Traducción',
            value: 'amazon.com|es_US'
          },
          {
            name: 'amazon.com.mx - português - PT - Tradução',
            value: 'amazon.com.mx|pt_MX'
          }
        ]
      },
      {
        displayName: 'ZIP Code (delivery_zip)',
        name: 'delivery_zip',
        description: 'ZIP Postal code. To filter the shipping products by a selected area.',
        default: '',
        routing: {
          request: {
            qs: {
              delivery_zip: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Shipping Location (shipping_location)',
        name: 'shipping_location',
        description: 'Shipping country. To filter the shipping products by a selected country.',
        default: 'US',
        routing: {
          request: {
            qs: {
              shipping_location: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Australia',
            value: 'AU'
          },
          {
            name: 'Canada',
            value: 'CA'
          },
          {
            name: 'China',
            value: 'CN'
          },
          {
            name: 'Japan',
            value: 'JP'
          },
          {
            name: 'Mexico',
            value: 'MX'
          },
          {
            name: 'Singapore',
            value: 'SG'
          },
          {
            name: 'United Kingdom',
            value: 'GB'
          },
          {
            name: 'Afghanistan',
            value: 'AF'
          },
          {
            name: 'Aland Islands',
            value: 'AX'
          },
          {
            name: 'Albania',
            value: 'AL'
          },
          {
            name: 'Algeria',
            value: 'DZ'
          },
          {
            name: 'American Samoa',
            value: 'AS'
          },
          {
            name: 'Andorra',
            value: 'AD'
          },
          {
            name: 'Angola',
            value: 'AO'
          },
          {
            name: 'Anguilla',
            value: 'AI'
          },
          {
            name: 'Antigua and Barbuda',
            value: 'AG'
          },
          {
            name: 'Argentina',
            value: 'AR'
          },
          {
            name: 'Armenia',
            value: 'AM'
          },
          {
            name: 'Aruba',
            value: 'AW'
          },
          {
            name: 'Austria',
            value: 'AT'
          },
          {
            name: 'Azerbaijan',
            value: 'AZ'
          },
          {
            name: 'Bahamas, The',
            value: 'BS'
          },
          {
            name: 'Bahrain',
            value: 'BH'
          },
          {
            name: 'Bangladesh',
            value: 'BD'
          },
          {
            name: 'Barbados',
            value: 'BB'
          },
          {
            name: 'Belarus',
            value: 'BY'
          },
          {
            name: 'Belgium',
            value: 'BE'
          },
          {
            name: 'Belize',
            value: 'BZ'
          },
          {
            name: 'Benin',
            value: 'BJ'
          },
          {
            name: 'Bermuda',
            value: 'BM'
          },
          {
            name: 'Bhutan',
            value: 'BT'
          },
          {
            name: 'Bolivia',
            value: 'BO'
          },
          {
            name: 'Bonaire, Saint Eustatius and Saba',
            value: 'BQ'
          },
          {
            name: 'Bosnia and Herzegovina',
            value: 'BA'
          },
          {
            name: 'Botswana',
            value: 'BW'
          },
          {
            name: 'Bouvet Island',
            value: 'BV'
          },
          {
            name: 'Brazil',
            value: 'BR'
          },
          {
            name: 'British Indian Ocean Territory',
            value: 'IO'
          },
          {
            name: 'Brunei Darussalam',
            value: 'BN'
          },
          {
            name: 'Bulgaria',
            value: 'BG'
          },
          {
            name: 'Burkina Faso',
            value: 'BF'
          },
          {
            name: 'Burundi',
            value: 'BI'
          },
          {
            name: 'Cambodia',
            value: 'KH'
          },
          {
            name: 'Cameroon',
            value: 'CM'
          },
          {
            name: 'Cape Verde',
            value: 'CV'
          },
          {
            name: 'Cayman Islands',
            value: 'KY'
          },
          {
            name: 'Central African Republic',
            value: 'CF'
          },
          {
            name: 'Chad',
            value: 'TD'
          },
          {
            name: 'Chile',
            value: 'CL'
          },
          {
            name: 'Christmas Island',
            value: 'CX'
          },
          {
            name: 'Cocos (Keeling) Islands',
            value: 'CC'
          },
          {
            name: 'Colombia',
            value: 'CO'
          },
          {
            name: 'Comoros',
            value: 'KM'
          },
          {
            name: 'Congo',
            value: 'CG'
          },
          {
            name: 'Congo, The Democratic Republic of the',
            value: 'CD'
          },
          {
            name: 'Cook Islands',
            value: 'CK'
          },
          {
            name: 'Costa Rica',
            value: 'CR'
          },
          {
            name: 'Cote D\'ivoire',
            value: 'CI'
          },
          {
            name: 'Croatia',
            value: 'HR'
          },
          {
            name: 'Curaçao',
            value: 'CW'
          },
          {
            name: 'Cyprus',
            value: 'CY'
          },
          {
            name: 'Czech Republic',
            value: 'CZ'
          },
          {
            name: 'Denmark',
            value: 'DK'
          },
          {
            name: 'Djibouti',
            value: 'DJ'
          },
          {
            name: 'Dominica',
            value: 'DM'
          },
          {
            name: 'Dominican Republic',
            value: 'DO'
          },
          {
            name: 'Ecuador',
            value: 'EC'
          },
          {
            name: 'Egypt',
            value: 'EG'
          },
          {
            name: 'El Salvador',
            value: 'SV'
          },
          {
            name: 'Equatorial Guinea',
            value: 'GQ'
          },
          {
            name: 'Eritrea',
            value: 'ER'
          },
          {
            name: 'Estonia',
            value: 'EE'
          },
          {
            name: 'Ethiopia',
            value: 'ET'
          },
          {
            name: 'Falkland Islands (Malvinas)',
            value: 'FK'
          },
          {
            name: 'Faroe Islands',
            value: 'FO'
          },
          {
            name: 'Fiji',
            value: 'FJ'
          },
          {
            name: 'Finland',
            value: 'FI'
          },
          {
            name: 'France',
            value: 'FR'
          },
          {
            name: 'French Guiana',
            value: 'GF'
          },
          {
            name: 'French Polynesia',
            value: 'PF'
          },
          {
            name: 'French Southern Territories',
            value: 'TF'
          },
          {
            name: 'Gabon',
            value: 'GA'
          },
          {
            name: 'Gambia, The',
            value: 'GM'
          },
          {
            name: 'Georgia',
            value: 'GE'
          },
          {
            name: 'Germany',
            value: 'DE'
          },
          {
            name: 'Ghana',
            value: 'GH'
          },
          {
            name: 'Gibraltar',
            value: 'GI'
          },
          {
            name: 'Greece',
            value: 'GR'
          },
          {
            name: 'Greenland',
            value: 'GL'
          },
          {
            name: 'Grenada',
            value: 'GD'
          },
          {
            name: 'Guadeloupe',
            value: 'GP'
          },
          {
            name: 'Guatemala',
            value: 'GT'
          },
          {
            name: 'Guernsey',
            value: 'GG'
          },
          {
            name: 'Guinea',
            value: 'GN'
          },
          {
            name: 'Guinea-Bissau',
            value: 'GW'
          },
          {
            name: 'Guyana',
            value: 'GY'
          },
          {
            name: 'Haiti',
            value: 'HT'
          },
          {
            name: 'Heard Island and the McDonald Islands',
            value: 'HM'
          },
          {
            name: 'Holy See',
            value: 'VA'
          },
          {
            name: 'Honduras',
            value: 'HN'
          },
          {
            name: 'Hong Kong',
            value: 'HK'
          },
          {
            name: 'Hungary',
            value: 'HU'
          },
          {
            name: 'Iceland',
            value: 'IS'
          },
          {
            name: 'India',
            value: 'IN'
          },
          {
            name: 'Indonesia',
            value: 'ID'
          },
          {
            name: 'Iraq',
            value: 'IQ'
          },
          {
            name: 'Ireland',
            value: 'IE'
          },
          {
            name: 'Isle of Man',
            value: 'IM'
          },
          {
            name: 'Israel',
            value: 'IL'
          },
          {
            name: 'Italy',
            value: 'IT'
          },
          {
            name: 'Jamaica',
            value: 'JM'
          },
          {
            name: 'Jersey',
            value: 'JE'
          },
          {
            name: 'Jordan',
            value: 'JO'
          },
          {
            name: 'Kazakhstan',
            value: 'KZ'
          },
          {
            name: 'Kenya',
            value: 'KE'
          },
          {
            name: 'Kiribati',
            value: 'KI'
          },
          {
            name: 'Kosovo',
            value: 'XK'
          },
          {
            name: 'Kuwait',
            value: 'KW'
          },
          {
            name: 'Kyrgyzstan',
            value: 'KG'
          },
          {
            name: 'Lao People\'s Democratic Republic',
            value: 'LA'
          },
          {
            name: 'Latvia',
            value: 'LV'
          },
          {
            name: 'Lebanon',
            value: 'LB'
          },
          {
            name: 'Lesotho',
            value: 'LS'
          },
          {
            name: 'Liberia',
            value: 'LR'
          },
          {
            name: 'Libya',
            value: 'LY'
          },
          {
            name: 'Liechtenstein',
            value: 'LI'
          },
          {
            name: 'Lithuania',
            value: 'LT'
          },
          {
            name: 'Luxembourg',
            value: 'LU'
          },
          {
            name: 'Macao',
            value: 'MO'
          },
          {
            name: 'Macedonia, The Former Yugoslav Republic of',
            value: 'MK'
          },
          {
            name: 'Madagascar',
            value: 'MG'
          },
          {
            name: 'Malawi',
            value: 'MW'
          },
          {
            name: 'Malaysia',
            value: 'MY'
          },
          {
            name: 'Maldives',
            value: 'MV'
          },
          {
            name: 'Mali',
            value: 'ML'
          },
          {
            name: 'Malta',
            value: 'MT'
          },
          {
            name: 'Marshall Islands',
            value: 'MH'
          },
          {
            name: 'Martinique',
            value: 'MQ'
          },
          {
            name: 'Mauritania',
            value: 'MR'
          },
          {
            name: 'Mauritius',
            value: 'MU'
          },
          {
            name: 'Mayotte',
            value: 'YT'
          },
          {
            name: 'Micronesia, Federated States of',
            value: 'FM'
          },
          {
            name: 'Moldova, Republic of',
            value: 'MD'
          },
          {
            name: 'Monaco',
            value: 'MC'
          },
          {
            name: 'Mongolia',
            value: 'MN'
          },
          {
            name: 'Montenegro',
            value: 'ME'
          },
          {
            name: 'Montserrat',
            value: 'MS'
          },
          {
            name: 'Morocco',
            value: 'MA'
          },
          {
            name: 'Mozambique',
            value: 'MZ'
          },
          {
            name: 'Myanmar',
            value: 'MM'
          },
          {
            name: 'Namibia',
            value: 'NA'
          },
          {
            name: 'Nauru',
            value: 'NR'
          },
          {
            name: 'Nepal',
            value: 'NP'
          },
          {
            name: 'Netherlands',
            value: 'NL'
          },
          {
            name: 'Netherlands Antilles',
            value: 'AN'
          },
          {
            name: 'New Caledonia',
            value: 'NC'
          },
          {
            name: 'New Zealand',
            value: 'NZ'
          },
          {
            name: 'Nicaragua',
            value: 'NI'
          },
          {
            name: 'Niger',
            value: 'NE'
          },
          {
            name: 'Nigeria',
            value: 'NG'
          },
          {
            name: 'Niue',
            value: 'NU'
          },
          {
            name: 'Norfolk Island',
            value: 'NF'
          },
          {
            name: 'Norway',
            value: 'NO'
          },
          {
            name: 'Oman',
            value: 'OM'
          },
          {
            name: 'Pakistan',
            value: 'PK'
          },
          {
            name: 'Palau',
            value: 'PW'
          },
          {
            name: 'Palestinian Territories',
            value: 'PS'
          },
          {
            name: 'Panama',
            value: 'PA'
          },
          {
            name: 'Papua New Guinea',
            value: 'PG'
          },
          {
            name: 'Paraguay',
            value: 'PY'
          },
          {
            name: 'Peru',
            value: 'PE'
          },
          {
            name: 'Philippines',
            value: 'PH'
          },
          {
            name: 'Pitcairn',
            value: 'PN'
          },
          {
            name: 'Poland',
            value: 'PL'
          },
          {
            name: 'Portugal',
            value: 'PT'
          },
          {
            name: 'Qatar',
            value: 'QA'
          },
          {
            name: 'Republic of Korea',
            value: 'KR'
          },
          {
            name: 'Reunion',
            value: 'RE'
          },
          {
            name: 'Romania',
            value: 'RO'
          },
          {
            name: 'Russian Federation',
            value: 'RU'
          },
          {
            name: 'Rwanda',
            value: 'RW'
          },
          {
            name: 'Saint Barthelemy',
            value: 'BL'
          },
          {
            name: 'Saint Helena, Ascension and Tristan da Cunha',
            value: 'SH'
          },
          {
            name: 'Saint Kitts and Nevis',
            value: 'KN'
          },
          {
            name: 'Saint Lucia',
            value: 'LC'
          },
          {
            name: 'Saint Martin',
            value: 'MF'
          },
          {
            name: 'Saint Pierre and Miquelon',
            value: 'PM'
          },
          {
            name: 'Saint Vincent and the Grenadines',
            value: 'VC'
          },
          {
            name: 'Samoa',
            value: 'WS'
          },
          {
            name: 'San Marino',
            value: 'SM'
          },
          {
            name: 'Sao Tome and Principe',
            value: 'ST'
          },
          {
            name: 'Saudi Arabia',
            value: 'SA'
          },
          {
            name: 'Senegal',
            value: 'SN'
          },
          {
            name: 'Serbia',
            value: 'RS'
          },
          {
            name: 'Seychelles',
            value: 'SC'
          },
          {
            name: 'Sierra Leone',
            value: 'SL'
          },
          {
            name: 'Sint Maarten',
            value: 'SX'
          },
          {
            name: 'Slovakia',
            value: 'SK'
          },
          {
            name: 'Slovenia',
            value: 'SI'
          },
          {
            name: 'Solomon Islands',
            value: 'SB'
          },
          {
            name: 'Somalia',
            value: 'SO'
          },
          {
            name: 'South Africa',
            value: 'ZA'
          },
          {
            name: 'Spain',
            value: 'ES'
          },
          {
            name: 'Sri Lanka',
            value: 'LK'
          },
          {
            name: 'Suriname',
            value: 'SR'
          },
          {
            name: 'Swaziland',
            value: 'SZ'
          },
          {
            name: 'Sweden',
            value: 'SE'
          },
          {
            name: 'Switzerland',
            value: 'CH'
          },
          {
            name: 'Taiwan',
            value: 'TW'
          },
          {
            name: 'Tajikistan',
            value: 'TJ'
          },
          {
            name: 'Tanzania, United Republic of',
            value: 'TZ'
          },
          {
            name: 'Thailand',
            value: 'TH'
          },
          {
            name: 'Timor-Leste',
            value: 'TL'
          },
          {
            name: 'Togo',
            value: 'TG'
          },
          {
            name: 'Tokelau',
            value: 'TK'
          },
          {
            name: 'Tonga',
            value: 'TO'
          },
          {
            name: 'Trinidad and Tobago',
            value: 'TT'
          },
          {
            name: 'Tunisia',
            value: 'TN'
          },
          {
            name: 'Turkey',
            value: 'TR'
          },
          {
            name: 'Turkmenistan',
            value: 'TM'
          },
          {
            name: 'Turks and Caicos Islands',
            value: 'TC'
          },
          {
            name: 'Tuvalu',
            value: 'TV'
          },
          {
            name: 'Uganda',
            value: 'UG'
          },
          {
            name: 'Ukraine',
            value: 'UA'
          },
          {
            name: 'United Arab Emirates',
            value: 'AE'
          },
          {
            name: 'United States',
            value: 'US'
          },
          {
            name: 'Uruguay',
            value: 'UY'
          },
          {
            name: 'Uzbekistan',
            value: 'UZ'
          },
          {
            name: 'Vanuatu',
            value: 'VU'
          },
          {
            name: 'Venezuela',
            value: 'VE'
          },
          {
            name: 'Vietnam',
            value: 'VN'
          },
          {
            name: 'Virgin Islands, British',
            value: 'VG'
          },
          {
            name: 'Virgin Islands, U.S.',
            value: 'VI'
          },
          {
            name: 'Wallis and Futuna',
            value: 'WF'
          },
          {
            name: 'Western Sahara',
            value: 'EH'
          },
          {
            name: 'Yemen',
            value: 'YE'
          },
          {
            name: 'Zambia',
            value: 'ZM'
          },
          {
            name: 'Zimbabwe',
            value: 'ZW'
          }
        ]
      },
      {
        displayName: 'Sort By (s)',
        name: 's',
        description: 'Parameter is used for sorting results.',
        default: 'relevanceblender',
        routing: {
          request: {
            qs: {
              s: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Featured',
            value: 'relevanceblender'
          },
          {
            name: 'Price: Low to High',
            value: 'price-asc-rank'
          },
          {
            name: 'Price: High to Low',
            value: 'price-desc-rank'
          },
          {
            name: 'Avg. Customer Review',
            value: 'review-rank'
          },
          {
            name: 'Newest Arrivals',
            value: 'date-desc-rank'
          },
          {
            name: 'Best Sellers',
            value: 'exact-aware-popularity-rank'
          }
        ]
      },
      {
        displayName: 'Category (node)',
        name: 'node',
        description: 'Parameter specifies the category for Amazon search results. You can find the appropriate node value by browsing Amazon’s website and accessing a specific category. The node ID is typically included in the URL after the format node=[NODE ID].',
        default: '',
        routing: {
          request: {
            qs: {
              node: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Filters (rh)',
        name: 'rh',
        description: 'Parameter defines items filtering based on their attributes.',
        default: '',
        routing: {
          request: {
            qs: {
              rh: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Exclude Auto-corrected Results (dc)',
        name: 'dc',
        description: 'Activate spelling fix. true (default) includes spelling fix, false searches without spelling fix.',
        default: 'true',
        routing: {
          request: {
            qs: {
              dc: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Page Number (page)',
        name: 'page',
        description: 'Parameter defines the page number. It\'s used for pagination. (e.g., 1 (default) is the first page of results, 2 is the 2nd page of results, 3 is the 3rd page of results, etc.).',
        default: '1',
        routing: {
          request: {
            qs: {
              page: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Device (device)',
        name: 'device',
        description: 'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser (currently using iPhones).',
        default: 'desktop',
        routing: {
          request: {
            qs: {
              device: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];