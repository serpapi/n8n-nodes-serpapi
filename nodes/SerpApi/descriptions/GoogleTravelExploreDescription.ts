import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleTravelExploreFields: INodeProperties[] = [
  {
    displayName: 'Departure airport code / location kgmid (departure_id)',
    name: 'departure_id',
    description: 'Parameter defines the departure airport code or city location kgmid. An airport code is an uppercase 3-letter code such as \'AUS\'.',
    default: 'AUS',
    routing: {
      request: {
        qs: {
          departure_id: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: [
          'google_travel_explore'
        ]
      }
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
        operation: [
          'google_travel_explore'
        ]
      }
    },
    options: [
      {
        displayName: 'Country (gl)',
        name: 'gl',
        description: 'Parameter defines the country to use for the Google Flights search',
        default: 'us',
        routing: {
          request: {
            qs: {
              gl: '={{$value}}',
            },
          },
        },
        type: 'options',
        options: CountryOptions,
      },
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
        displayName: 'Currency (currency)',
        name: 'currency',
        description: 'Parameter defines the currency of the returned prices. Defaults to USD.',
        default: 'USD',
        routing: {
          request: {
            qs: {
              currency: '={{$value}}',
            },
          },
        },
        type: 'options',
        options: [
          { name: 'Albanian Lek - ALL', value: 'ALL' },
          { name: 'Algerian Dinar - DZD', value: 'DZD' },
          { name: 'Argentine Peso - ARS', value: 'ARS' },
          { name: 'Armenian Dram - AMD', value: 'AMD' },
          { name: 'Aruban Florin - AWG', value: 'AWG' },
          { name: 'Australian Dollar - AUD', value: 'AUD' },
          { name: 'Azerbaijani Manat - AZN', value: 'AZN' },
          { name: 'Bahamian Dollar - BSD', value: 'BSD' },
          { name: 'Bahraini Dinar - BHD', value: 'BHD' },
          { name: 'Belarusian Ruble - BYN', value: 'BYN' },
          { name: 'Bermudan Dollar - BMD', value: 'BMD' },
          { name: 'Bosnia-Herzegovina Convertible Mark - BAM', value: 'BAM' },
          { name: 'Brazilian Real - BRL', value: 'BRL' },
          { name: 'British Pound - GBP', value: 'GBP' },
          { name: 'Bulgarian Lev - BGN', value: 'BGN' },
          { name: 'Canadian Dollar - CAD', value: 'CAD' },
          { name: 'CFP Franc - XPF', value: 'XPF' },
          { name: 'Chilean Peso - CLP', value: 'CLP' },
          { name: 'Chinese Yuan - CNY', value: 'CNY' },
          { name: 'Colombian Peso - COP', value: 'COP' },
          { name: 'Costa Rican Colón - CRC', value: 'CRC' },
          { name: 'Cuban Peso - CUP', value: 'CUP' },
          { name: 'Czech Koruna - CZK', value: 'CZK' },
          { name: 'Danish Krone - DKK', value: 'DKK' },
          { name: 'Dominican Peso - DOP', value: 'DOP' },
          { name: 'Egyptian Pound - EGP', value: 'EGP' },
          { name: 'Euro - EUR', value: 'EUR' },
          { name: 'Georgian Lari - GEL', value: 'GEL' },
          { name: 'Hong Kong Dollar - HKD', value: 'HKD' },
          { name: 'Hungarian Forint - HUF', value: 'HUF' },
          { name: 'Icelandic Króna - ISK', value: 'ISK' },
          { name: 'Indian Rupee - INR', value: 'INR' },
          { name: 'Indonesian Rupiah - IDR', value: 'IDR' },
          { name: 'Iranian Rial - IRR', value: 'IRR' },
          { name: 'Israeli New Shekel - ILS', value: 'ILS' },
          { name: 'Jamaican Dollar - JMD', value: 'JMD' },
          { name: 'Japanese Yen - JPY', value: 'JPY' },
          { name: 'Jordanian Dinar - JOD', value: 'JOD' },
          { name: 'Kazakhstani Tenge - KZT', value: 'KZT' },
          { name: 'Kuwaiti Dinar - KWD', value: 'KWD' },
          { name: 'Lebanese Pound - LBP', value: 'LBP' },
          { name: 'Macedonian Denar - MKD', value: 'MKD' },
          { name: 'Malaysian Ringgit - MYR', value: 'MYR' },
          { name: 'Mexican Peso - MXN', value: 'MXN' },
          { name: 'Moldovan Leu - MDL', value: 'MDL' },
          { name: 'Moroccan Dirham - MAD', value: 'MAD' },
          { name: 'New Taiwan Dollar - TWD', value: 'TWD' },
          { name: 'New Zealand Dollar - NZD', value: 'NZD' },
          { name: 'Norwegian Krone - NOK', value: 'NOK' },
          { name: 'Omani Rial - OMR', value: 'OMR' },
          { name: 'Pakistani Rupee - PKR', value: 'PKR' },
          { name: 'Panamanian Balboa - PAB', value: 'PAB' },
          { name: 'Peruvian Sol - PEN', value: 'PEN' },
          { name: 'Philippine Peso - PHP', value: 'PHP' },
          { name: 'Polish Zloty - PLN', value: 'PLN' },
          { name: 'Qatari Riyal - QAR', value: 'QAR' },
          { name: 'Romanian Leu - RON', value: 'RON' },
          { name: 'Russian Ruble - RUB', value: 'RUB' },
          { name: 'Saudi Riyal - SAR', value: 'SAR' },
          { name: 'Serbian Dinar - RSD', value: 'RSD' },
          { name: 'Singapore Dollar - SGD', value: 'SGD' },
          { name: 'South African Rand - ZAR', value: 'ZAR' },
          { name: 'South Korean Won - KRW', value: 'KRW' },
          { name: 'Swedish Krona - SEK', value: 'SEK' },
          { name: 'Swiss Franc - CHF', value: 'CHF' },
          { name: 'Thai Baht - THB', value: 'THB' },
          { name: 'Turkish Lira - TRY', value: 'TRY' },
          { name: 'Ukrainian Hryvnia - UAH', value: 'UAH' },
          { name: 'United Arab Emirates Dirham - AED', value: 'AED' },
          { name: 'US Dollar - USD', value: 'USD' },
          { name: 'Vietnamese Dong - VND', value: 'VND' },
        ],
      },
      {
        displayName: 'Arrival region or country kgmid (arrival_area_id)',
        name: 'arrival_area_id',
        description: 'Parameter defines the arrival region or country as a location kgmid. A location kgmid is a string that starts with /m/. You can search for a region or country on Wikidata and use its "Freebase ID" as the location kgmid.',
        default: '',
        routing: {
          request: {
            qs: {
              arrival_area_id: '={{$value}}'
            }
          }
        },
        type: 'string',
      },
      {
        displayName: 'Arrival airport code / location kgmid (arrival_id)',
        name: 'arrival_id',
        description: 'Parameter defines the arrival airport code or city location kgmid. An airport code is an uppercase 3-letter code such as \'AUS\'.',
        default: '',
        routing: {
          request: {
            qs: {
              arrival_id: '={{$value}}'
            }
          }
        },
        type: 'string',
      },
      {
        displayName: 'Flight Type (type)',
        name: 'type',
        description: 'Parameter defines the flight type',
        default: 1,
        routing: {
          request: {
            qs: {
              type: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          { name: 'Round trip (default) - 1', value: 1 },
          { name: 'One way - 2', value: 2 }
        ],
      },
      {
        displayName: 'Outbound Date (outbound_date)',
        name: 'outbound_date',
        description: 'Parameter defines the outbound date. The format is YYYY-MM-DD. e.g. 2026-11-21',
        default: '',
        routing: {
          request: {
            qs: {
              outbound_date: '={{$value}}'
            }
          }
        },
        type: 'string',
      },
      {
        displayName: 'Return Date (return_date)',
        name: 'return_date',
        description: 'Parameter defines the return date. Parameter is required if type parameter is set to: 1 (Round trip) The format is YYYY-MM-DD. e.g. 2026-11-27',
        default: '',
        routing: {
          request: {
            qs: {
              return_date: '={{$value}}'
            }
          }
        },
        type: 'string',
      },
      {
        displayName: 'Month (month)',
        name: 'month',
        description: 'Parameter defines the month of the trip with flexible travel dates',
        default: 1,
        routing: {
          request: {
            qs: {
              month: '={{$value}}'
            }
          }
        },
        type: 'number',
      },
      {
        displayName: 'Travel Duration (travel_duration)',
        name: 'travel_duration',
        description: 'Parameter defines the duration of the trip',
        default: 2,
        routing: {
          request: {
            qs: {
              travel_duration: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          { name: 'Weekend - 1', value: 1 },
          { name: '1 week (default) - 2', value: 2 },
          { name: '2 weeks - 3', value: 3 }
        ],
      },
      {
        displayName: 'Travel Class (travel_class)',
        name: 'travel_class',
        description: 'Parameter defines the travel class',
        default: 1,
        routing: {
          request: {
            qs: {
              travel_class: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          { name: 'Economy (default) - 1', value: 1 },
          { name: 'Premium economy - 2', value: 2 },
          { name: 'Business - 3', value: 3 },
          { name: 'First - 4', value: 4 }
        ],
      },
      {
        displayName: 'Number of Adults (adults)',
        name: 'adults',
        description: 'Parameter defines the number of adults',
        default: 1,
        routing: {
          request: {
            qs: {
              adults: '={{$value}}'
            }
          }
        },
        type: 'number',
      },
      {
        displayName: 'Number of Children (children)',
        name: 'children',
        description: 'Parameter defines the number of children. Defaults to 0.',
        default: 0,
        routing: {
          request: {
            qs: {
              children: '={{$value}}'
            }
          }
        },
        type: 'number'
      },
      {
        displayName: 'Number of Infants in seat (infants_in_seat)',
        name: 'infants_in_seat',
        description: 'Parameter defines the number of infants in seat. Defaults to 0.',
        default: 0,
        routing: {
          request: {
            qs: {
              infants_in_seat: '={{$value}}'
            }
          }
        },
        type: 'number'
      },
      {
        displayName: 'Number of Infants on lap (infants_on_lap)',
        name: 'infants_on_lap',
        description: 'Parameter defines the number of infants on lap. Defaults to 0.',
        default: 0,
        routing: {
          request: {
            qs: {
              infants_on_lap: '={{$value}}'
            }
          }
        },
        type: 'number'
      },
      {
        displayName: 'Stops (stops)',
        name: 'stops',
        description: 'Parameter defines the number of stops during the flight',
        default: 0,
        routing: {
          request: {
            qs: {
              stops: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Any number of stops (default) - 0',
            value: 0
          },
          {
            name: 'Nonstop only - 1',
            value: 1
          },
          {
            name: '1 stop or fewer - 2',
            value: 2
          },
          {
            name: '2 stops or fewer - 3',
            value: 3
          }
        ]
      },
      {
        displayName: 'Travel Mode (travel_mode)',
        name: 'travel_mode',
        description: 'Parameter defines the travel mode',
        default: '0',
        routing: {
          request: {
            qs: {
              travel_mode: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'All (default) - 0',
            value: '0'
          },
          {
            name: 'Flight only - 1',
            value: '1'
          }
        ]
      },
      {
        displayName: 'Interest (interest)',
        name: 'interest',
        description: 'Parameter defines the interest of the destination',
        default: '0',
        routing: {
          request: {
            qs: {
              interest: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Popular (default)',
            value: '0'
          },
          {
            name: 'Outdoors',
            value: '/g/11bc58l13w'
          },
          {
            name: 'Beaches',
            value: '/m/0b3yr'
          },
          {
            name: 'Museum',
            value: '/m/09cmq'
          },
          {
            name: 'History',
            value: '/m/03g3w'
          },
          {
            name: 'Skiing',
            value: '/m/071k0'
          }
        ]
      },
      {
        displayName: 'Include airlines (include_airlines)',
        name: 'include_airlines',
        description: 'Parameter defines the 2 character IATA airline codes to be included. Split multiple airlines with comma. For exampple \'AA,UA\' for American Airlines and United Airlines.',
        default: '',
        routing: {
          request: {
            qs: {
              include_airlines: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'bags (bags)',
        name: 'bags',
        description: 'Parameter defines the number of carry-on bags. Defaults to 0.',
        default: 0,
        routing: {
          request: {
            qs: {
              bags: '={{$value}}'
            }
          }
        },
        type: 'number'
      },
      {
        displayName: 'Max price (max_price)',
        name: 'max_price',
        description: 'Parameter defines the maximum ticket price. Defaults to unlimited.',
        default: '',
        routing: {
          request: {
            qs: {
              max_price: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Max duration (max_duration)',
        name: 'max_duration',
        description: 'Parameter defines the maximum flight duration, in minutes. For example, specify 300 for 5 hours.',
        default: '',
        routing: {
          request: {
            qs: {
              max_duration: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];