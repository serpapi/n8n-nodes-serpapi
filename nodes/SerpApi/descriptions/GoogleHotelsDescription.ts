import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleHotelsFields: INodeProperties[] = [
    {
    displayName: 'Search Query (q)',
    name: 'q',
    description: 'Parameter defines the search query. You can use anything that you would use in a regular Google Hotels search.',
    default: 'Bali Resorts',
    routing: {
      request: {
        qs: {
          q: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_hotels']
      }
    }
  },
  {
    displayName: 'Check-in Date (check_in_date)',
    name: 'check_in_date',
    description: 'Parameter defines the check-in date. The format is YYYY-MM-DD. e.g. 2025-08-05.',
    default: '',
    routing: {
      request: {
        qs: {
          check_in_date: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_hotels']
      }
    }
  },
  {
    displayName: 'Check-out Date (check_out_date)',
    name: 'check_out_date',
    description: 'Parameter defines the check-out date. The format is YYYY-MM-DD. e.g. 2025-08-06.',
    default: '',
    routing: {
      request: {
        qs: {
          check_out_date: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_hotels']
      }
    }
  },
  {
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    default: {},
    placeholder: 'Add Field',
    displayOptions: {
      show: {
        operation: ['google_hotels']
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
        description: 'Parameter defines the currency of the returned prices',
        default: 'USD',
        routing: {
          request: {
            qs: {
              currency: '={{$value}}'
            }
          }
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
        ]
      },
      {
        displayName: 'Number of Adults (adults)',
        name: 'adults',
        description: 'Parameter defines the number of adults. Default to 2.',
        default: '2',
        routing: {
          request: {
            qs: {
              adults: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Number of Children (children)',
        name: 'children',
        description: 'Parameter defines the number of children. Default to 0.',
        default: '0',
        routing: {
          request: {
            qs: {
              children: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Children\'s Ages (children_ages)',
        name: 'children_ages',
        description: 'Parameter defines the ages of children. The number of children\'s ages specified must match the children. The age range is from 1 to 17, with children who haven\'t reached 1 year old being considered as 1. Multiple children separated by comma such as: 5,8,10',
        default: '',
        routing: {
          request: {
            qs: {
              children_ages: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Sort By (sort_by)',
        name: 'sort_by',
        description: 'Parameter is used for sorting the results',
        default: '',
        routing: {
          request: {
            qs: {
              sort_by: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Lowest price - 3',
            value: '3'
          },
          {
            name: 'Highest rating - 8',
            value: '8'
          },
          {
            name: 'Most reviewed - 13',
            value: '13'
          }
        ]
      },
      {
        displayName: 'Min. Price (min_price)',
        name: 'min_price',
        description: 'Parameter defines the lower bound of price range',
        default: '',
        routing: {
          request: {
            qs: {
              min_price: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Max. Price (max_price)',
        name: 'max_price',
        description: 'Parameter defines the upper bound of price range',
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
        displayName: 'Property Types (property_types)',
        name: 'property_types',
        description: 'Parameter defines to include only certain type of property in the results. Multiple property types supported by comma separation such as: 10,12,20.',
        default: '',
        routing: {
          request: {
            qs: {
              property_types: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Amenities (amenities)',
        name: 'amenities',
        description: 'Parameter defines to include only results that offer specified amenities. Multiple amenities supported by comma separation such as: 5,13,21.',
        default: '',
        routing: {
          request: {
            qs: {
              amenities: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Guest Rating (rating)',
        name: 'rating',
        description: 'Parameter is used for filtering the results to certain rating',
        default: '',
        routing: {
          request: {
            qs: {
              rating: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: '3.5+ - 7',
            value: '7'
          },
          {
            name: '4.0+ - 8',
            value: '8'
          },
          {
            name: '4.5+ - 9',
            value: '9'
          }
        ]
      },
      {
        displayName: 'Brands (brands)',
        name: 'brands',
        description: 'Parameter defines the brands where you want your search to be concentrated. This parameter isn\'t available for Vacation Rentals. ID values are accessible inside brands array, located in our JSON output. Multiple brands supported by comma separation such as: 33,67,101.',
        default: '',
        routing: {
          request: {
            qs: {
              brands: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Hotel Class (hotel_class)',
        name: 'hotel_class',
        description: 'Parameter defines to include only certain hotel class in the results. This parameter isn\'t available for Vacation Rentals. Enter 2 for 2-star, 3 for 3-star, and so on. Multiple hotel classes supported by comma separation such as: 2,3,4.',
        default: '',
        routing: {
          request: {
            qs: {
              hotel_class: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Free Cancellation (free_cancellation)',
        name: 'free_cancellation',
        description: 'Parameter defines to show results that offer free cancellation. This parameter isn\'t available for Vacation Rentals.',
        default: false,
        routing: {
          request: {
            qs: {
              free_cancellation: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Special Offers (special_offers)',
        name: 'special_offers',
        description: 'Parameter defines to show results that have special offers. This parameter isn\'t available for Vacation Rentals.',
        default: false,
        routing: {
          request: {
            qs: {
              special_offers: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Eco Certified (eco_certified)',
        name: 'eco_certified',
        description: 'Parameter defines to show results that are eco certified. This parameter isn\'t available for Vacation Rentals.',
        default: false,
        routing: {
          request: {
            qs: {
              eco_certified: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Vacation Rentals (vacation_rentals)',
        name: 'vacation_rentals',
        description: 'Parameter defines to search for Vacation Rentals results. Default search is for Hotels.',
        default: false,
        routing: {
          request: {
            qs: {
              vacation_rentals: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Min. bedrooms (bedrooms)',
        name: 'bedrooms',
        description: 'Parameter defines the minimum number of bedrooms. Default to 0.This parameter only available for Vacation Rentals.',
        default: '0',
        routing: {
          request: {
            qs: {
              bedrooms: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Min. bathrooms (bathrooms)',
        name: 'bathrooms',
        description: 'Parameter defines the minimum number of bathrooms. Default to 0.This parameter only available for Vacation Rentals.',
        default: '0',
        routing: {
          request: {
            qs: {
              bathrooms: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Next Page Token (next_page_token)',
        name: 'next_page_token',
        description: 'Parameter defines the next page token. It is used for retrieving the next page results.',
        default: '',
        routing: {
          request: {
            qs: {
              next_page_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Property Token (property_token)',
        name: 'property_token',
        description: 'Parameter is used to get property details which consists of name, address, phone, prices, nearby places, and etc. You can find property_token from Google Hotels Properties API.',
        default: '',
        routing: {
          request: {
            qs: {
              property_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'JSON Restrictor (json_restrictor)',
        name: 'json_restrictor',
        description: 'Parameter defines the fields you want to restrict in the response. For example, setting it to organic_results[].{title,snippet} will only return the title and snippet of the organic results. See JSON Restrictor for more details.',
        default: '',
        routing: {
          request: {
            qs: {
              json_restrictor: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];