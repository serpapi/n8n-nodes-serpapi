import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleNewsLightFields: INodeProperties[] = [
  {
    displayName: 'Search Query (q)',
    name: 'q',
    description: 'Parameter defines the query you want to search. You can use anything that you would use in a regular Google search. e.g. inurl:, site:, intitle:.',
    default: 'Coffee',
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
        operation: ['google_news_light']
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
        operation: ['google_news_light']
      }
    },
    options: [
      {
        displayName: 'Location (location)',
        name: 'location',
        description: 'Parameter defines from where you want the search to originate. See docs for supported locations: https://serpapi.com/locations-api.',
        default: '',
        routing: {
          request: {
            qs: {
              location: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Encoded Location (uule)',
        name: 'uule',
        description: 'Parameter is the Google encoded location you want to use for the search. uule and location parameters can\'t be used together.',
        default: '',
        routing: {
          request: {
            qs: {
              uule: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Domain (google_domain)',
        name: 'google_domain',
        description: 'Parameter defines the Google domain to use',
        default: 'google.com',
        routing: {
          request: {
            qs: {
              google_domain: '={{$value}}',
            },
          },
        },
        type: 'options',
        options: DomainOptions,
      },
      {
        displayName: 'Country (gl)',
        name: 'gl',
        description: 'Parameter defines the country to use for the Google search',
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
        displayName: 'Set Multiple Languages (lr)',
        name: 'lr',
        description: 'Parameter defines one or multiple countries to limit the search to. It uses country{two-letter upper-case country code} to specify countries and | as a delimiter.',
        default: '',
        routing: {
          request: {
            qs: {
              lr: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Include/Exclude Site (as_dt)',
        name: 'as_dt',
        description: 'Parameter controls whether to include or exclude results from the site named in the as_sitesearch parameter',
        default: '',
        routing: {
          request: {
            qs: {
              as_dt: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Required Phrase (as_epq)',
        name: 'as_epq',
        description: 'Parameter identifies a phrase that all documents in the search results must contain. You can also use the phrase search query term to search for a phrase.',
        default: '',
        routing: {
          request: {
            qs: {
              as_epq: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Excluded Word/Phrase (as_eq)',
        name: 'as_eq',
        description: 'Parameter identifies a word or phrase that should not appear in any documents in the search results. You can also use the exclude query term to ensure that a particular word or phrase will not appear in the documents in a set of search results.',
        default: '',
        routing: {
          request: {
            qs: {
              as_eq: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Link to URL (as_lq)',
        name: 'as_lq',
        description: 'Parameter specifies that all search results should contain a link to a particular URL. You can also use the link: query term for this type of query.',
        default: '',
        routing: {
          request: {
            qs: {
              as_lq: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Search Range Start (as_nlo)',
        name: 'as_nlo',
        description: 'Parameter specifies the starting value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
        default: '',
        routing: {
          request: {
            qs: {
              as_nlo: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Search Range End (as_nhi)',
        name: 'as_nhi',
        description: 'Parameter specifies the ending value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
        default: '',
        routing: {
          request: {
            qs: {
              as_nhi: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Additional Search Terms (as_oq)',
        name: 'as_oq',
        description: 'Parameter provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the Boolean OR query term for this type of query.',
        default: '',
        routing: {
          request: {
            qs: {
              as_oq: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Search Terms (as_q)',
        name: 'as_q',
        description: 'Parameter provides search terms to check for in a document. This parameter is also commonly used to allow users to specify additional terms to search for within a set of search results.',
        default: '',
        routing: {
          request: {
            qs: {
              as_q: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Time Period (as_qdr)',
        name: 'as_qdr',
        description: 'Parameter requests search results from a specified time period (quick date range). See docs for more information: https://serpapi.com/advanced-google-query-parameters#api-parameters-advanced-search-query-parameters-as-qdr.',
        default: '',
        routing: {
          request: {
            qs: {
              as_qdr: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Related URL (as_rq)',
        name: 'as_rq',
        description: 'Parameter specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. You can also use the related: query term for this type of query.',
        default: '',
        routing: {
          request: {
            qs: {
              as_rq: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Site Search (as_sitesearch)',
        name: 'as_sitesearch',
        description: 'Parameter allows you to specify that all search results should be pages from a given site. By setting the as_dt parameter, you can also use it to exclude pages from a given site from your search results.',
        default: '',
        routing: {
          request: {
            qs: {
              as_sitesearch: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Adult Content Filtering (safe)',
        name: 'safe',
        description: 'Parameter defines the level of filtering for adult content. It can be set to active or off, by default Google will blur explicit content.',
        default: '',
        routing: {
          request: {
            qs: {
              safe: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Active',
            value: 'active'
          },
          {
            name: 'Off',
            value: 'off'
          }
        ]
      },
      {
        displayName: 'Exclude Auto-corrected Results (nfpr)',
        name: 'nfpr',
        description: 'Parameter defines the exclusion of results from an auto-corrected query when the original query is spelled wrong. It can be set to 1 to exclude these results, or 0 to include them (default).',
        default: '',
        routing: {
          request: {
            qs: {
              nfpr: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Results Filtering (filter)',
        name: 'filter',
        description: 'Parameter defines if the filters for \'Similar Results\' and \'Omitted Results\' are on or off. It can be set to 1 (default) to enable these filters, or 0 to disable these filters.',
        default: '',
        routing: {
          request: {
            qs: {
              filter: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Result Offset (start)',
        name: 'start',
        description: 'Parameter defines the result offset. It skips the given number of results.',
        default: '',
        routing: {
          request: {
            qs: {
              start: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Number of Results (num)',
        name: 'num',
        description: 'Parameter defines the maximum number of results to return',
        default: '',
        routing: {
          request: {
            qs: {
              num: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Device (device)',
        name: 'device',
        description: 'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser (currently using iPhones).',
        default: '',
        routing: {
          request: {
            qs: {
              device: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields
    ]
  }
];