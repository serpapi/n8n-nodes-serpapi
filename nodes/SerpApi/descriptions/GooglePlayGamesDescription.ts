import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googlePlayGamesFields: INodeProperties[] = [
  {
    displayName: 'Search Query (q)',
    name: 'q',
    description: 'Parameter defines the query you want to search in Google Play Games Store',
    default: '',
    routing: {
      request: {
        qs: {
          q: '={{$value}}'
        }
      }
    },
    type: 'string',
    displayOptions: {
      show: {
        operation: ['google_play_games']
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
        operation: ['google_play_games']
      }
    },
    options: [
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
        displayName: 'Games Category (games_category)',
        name: 'games_category',
        description: 'Parameter defines the games store category',
        default: 'GAME',
        routing: {
          request: {
            qs: {
              games_category: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Games',
            value: 'GAME'
          },
          {
            name: 'Games - Action',
            value: 'GAME_ACTION'
          },
          {
            name: 'Games - Adventure',
            value: 'GAME_ADVENTURE'
          },
          {
            name: 'Games - Arcade',
            value: 'GAME_ARCADE'
          },
          {
            name: 'Games - Board',
            value: 'GAME_BOARD'
          },
          {
            name: 'Games - Card',
            value: 'GAME_CARD'
          },
          {
            name: 'Games - Casino',
            value: 'GAME_CASINO'
          },
          {
            name: 'Games - Casual',
            value: 'GAME_CASUAL'
          },
          {
            name: 'Games - Educational',
            value: 'GAME_EDUCATIONAL'
          },
          {
            name: 'Games - Music',
            value: 'GAME_MUSIC'
          },
          {
            name: 'Games - Puzzle',
            value: 'GAME_PUZZLE'
          },
          {
            name: 'Games - Racing',
            value: 'GAME_RACING'
          },
          {
            name: 'Games - Role Playing',
            value: 'GAME_ROLE_PLAYING'
          },
          {
            name: 'Games - Simulation',
            value: 'GAME_SIMULATION'
          },
          {
            name: 'Games - Sports',
            value: 'GAME_SPORTS'
          },
          {
            name: 'Games - Strategy',
            value: 'GAME_STRATEGY'
          },
          {
            name: 'Games - Trivia',
            value: 'GAME_TRIVIA'
          },
          {
            name: 'Games - Word',
            value: 'GAME_WORD'
          }
        ]
      },
      {
        displayName: 'Device (store_device)',
        name: 'store_device',
        description: 'Parameter defines the device for sorting results',
        default: 'phone',
        routing: {
          request: {
            qs: {
              store_device: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          { name: 'Chromebook', value: 'chromebook' },
          { name: 'Phone', value: 'phone' },
          { name: 'Tablet', value: 'tablet' },
          { name: 'TV', value: 'tv' },
          { name: 'Watch', value: 'watch' },
          { name: 'Windows', value: 'windows' }
        ]
      },
      {
        displayName: 'Next Page Token (next_page_token)',
        name: 'next_page_token',
        description: 'Parameter defines the next page token. It is used for retrieving the next page results. It shouldn\'t be used with the section_page_token, see_more_token, and chart parameters.',
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
        displayName: 'Section Page Token (section_page_token)',
        name: 'section_page_token',
        description: 'Parameter defines the section page token used for retrieving the pagination results from individual sections. This parameter is a safer version of see_more_token, and is found in every row you can paginate into. It shouldn\'t be used with the next_page_token, see_more_token, and chart parameters.',
        default: '',
        routing: {
          request: {
            qs: {
              section_page_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Chart (chart)',
        name: 'chart',
        description: 'Parameter is used for showing top charts. Each store contains different charts which require different values for retrieving results. To get the value of a specific chart you can use our Google Play Games Store API JSON output: chart_options[index].value (e.g. chart=topselling_free). It shouldn\'t be used with the section_page_token, see_more_token, and next_page_token parameters.',
        default: '',
        routing: {
          request: {
            qs: {
              chart: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'See more token (see_more_token)',
        name: 'see_more_token',
        description: 'Parameter defines the see more token used for retrieving the pagination results from individual sections. It is usually found in next page results. It shouldn\'t be used with the section_page_token, next_page_token, and chart, parameters.',
        default: '',
        routing: {
          request: {
            qs: {
              see_more_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];