/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import {
	googleFlightsFields,
	googleJobsFields,
	googleLensFields,
	googleLightFields,
	googleLocalFields,
	googleMapsFields,
	googleMapsReviewsFields,
	googleSearchFields,
	googleProductFields,
	googleShoppingFields,
	googleTrendsFields,
	googleVideosFields,
	googleAutocompleteFields,
	googleImagesFields,
	googleScholarFields,
	googleNewsFields,
	bingImagesFields,
	bingSearchFields,
	ebaySearchFields,
	duckDuckGoSearchFields,
	googleMapsDirectionsFields,
	baiduSearchFields,
	amazonSearchFields,
	googleHotelsFields,
	youtubeSearchFields,
	googleFinanceFields,
} from './descriptions';

const inputs = [NodeConnectionType.Main];
const outputs = [NodeConnectionType.Main];

export class SerpApi implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'SerpApi Official',
		name: 'serpApi',
		icon: 'file:serpapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: "Get live Google Search data and more from SerpApi's official node",
		defaults: {
			name: 'SerpApi',
		},
		usableAsTool: true,
		inputs,
		outputs,
		credentials: [
			{
				name: 'serpApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://serpapi.com/search.json',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Search',
						value: 'search',
					}
				],
				default: 'search',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Amazon Search',
						value: 'amazon',
						action: 'Search Amazon',
						routing: {
							request: {
								qs: {
									engine: 'amazon',
								},
							},
						},
					},
					{
						name: 'Baidu Search',
						value: 'baidu',
						action: 'Search Baidu',
						routing: {
							request: {
								qs: {
									engine: 'baidu',
								},
							},
						},
					},
					{
						name: 'Bing Images',
						value: 'bing_images',
						action: 'Search Bing Images',
						routing: {
							request: {
								qs: {
									engine: 'bing_images',
								},
							},
						},
					},
					{
						name: 'Bing Search',
						value: 'bing',
						action: 'Search Bing',
						routing: {
							request: {
								qs: {
									engine: 'bing',
								},
							},
						},
					},
					{
						name: 'DuckDuckGo Search',
						value: 'duckduckgo',
						action: 'Search DuckDuckGo',
						routing: {
							request: {
								qs: {
									engine: 'duckduckgo',
								},
							},
						},
					},
					{
						name: 'eBay Search',
						value: 'ebay',
						action: 'Search eBay',
						routing: {
							request: {
								qs: {
									engine: 'ebay',
								},
							},
						},
					},
					{
						name: 'Google Autocomplete',
						value: 'google_autocomplete',
						action: 'Search Google Autocomplete',
						routing: {
							request: {
								qs: {
									engine: 'google_autocomplete',
								},
							},
						},
					},
					{
						name: 'Google Finance',
						value: 'google_finance',
						action: 'Search Google Finance',
						routing: {
							request: {
								qs: {
									engine: 'google_finance',
								},
							},
						},
					},
					{
						name: 'Google Flights',
						value: 'google_flights',
						action: 'Search Google Flights',
						routing: {
							request: {
								qs: {
									engine: 'google_flights',
								},
							},
						},
					},
					{
						name: 'Google Hotels',
						value: 'google_hotels',
						action: 'Search Google Hotels',
						routing: {
							request: {
								qs: {
									engine: 'google_hotels',
								},
							},
						},
					},
					{
						name: 'Google Images',
						value: 'google_images',
						action: 'Search Google Images',
						routing: {
							request: {
								qs: {
									engine: 'google_images',
								},
							},
						},
					},
					{
						name: 'Google Jobs',
						value: 'google_jobs',
						action: 'Search Google Jobs',
						routing: {
							request: {
								qs: {
									engine: 'google_jobs',
								},
							},
						},
					},
					{
						name: 'Google Lens',
						value: 'google_lens',
						action: 'Search Google Lens',
						routing: {
							request: {
								qs: {
									engine: 'google_lens',
								},
							},
						},
					},
					{
						name: 'Google Light',
						value: 'google_light',
						action: 'Search Google Light',
						routing: {
							request: {
								qs: {
									engine: 'google_light',
								},
							},
						},
					},
					{
						name: 'Google Local',
						value: 'google_local',
						action: 'Search Google Local',
						routing: {
							request: {
								qs: {
									engine: 'google_local',
								},
							},
						},
					},
					{
						name: 'Google Maps',
						value: 'google_maps',
						action: 'Search Google Maps',
						routing: {
							request: {
								qs: {
									engine: 'google_maps',
								},
							},
						},
					},
					{
						name: 'Google Maps Directions',
						value: 'google_maps_directions',
						action: 'Search Google Maps Directions',
						routing: {
							request: {
								qs: {
									engine: 'google_maps_directions',
								},
							},
						},
					},
					{
						name: 'Google Maps Reviews',
						value: 'google_maps_reviews',
						action: 'Search Google Maps Reviews',
						routing: {
							request: {
								qs: {
									engine: 'google_maps_reviews',
								},
							},
						},
					},
					{
						name: 'Google News',
						value: 'google_news',
						action: 'Search Google News',
						routing: {
							request: {
								qs: {
									engine: 'google_news',
								},
							},
						},
					},
					{
						name: 'Google Product',
						value: 'google_product',
						action: 'Search Google Product',
						routing: {
							request: {
								qs: {
									engine: 'google_product',
								},
							},
						},
					},
					{
						name: 'Google Scholar',
						value: 'google_scholar',
						action: 'Search Google Scholar',
						routing: {
							request: {
								qs: {
									engine: 'google_scholar',
								},
							},
						},
					},
					{
						name: 'Google Search',
						value: 'google',
						action: 'Search Google',
						routing: {
							request: {
								qs: {
									engine: 'google',
								},
							},
						},
					},
					{
						name: 'Google Shopping',
						value: 'google_shopping',
						action: 'Search Google Shopping',
						routing: {
							request: {
								qs: {
									engine: 'google_shopping',
								},
							},
						},
					},
					{
						name: 'Google Trends',
						value: 'google_trends',
						action: 'Search Google Trends',
						routing: {
							request: {
								qs: {
									engine: 'google_trends',
								},
							},
						},
					},
					{
						name: 'Google Videos',
						value: 'google_videos',
						action: 'Search Google Videos',
						routing: {
							request: {
								qs: {
									engine: 'google_videos',
								},
							},
						},
					},
					{
						name: 'YouTube Search',
						value: 'youtube',
						action: 'Search YouTube',
						routing: {
							request: {
								qs: {
									engine: 'youtube',
								},
							},
						},
					},
				],
				default: 'google',
			},
			...googleFlightsFields,
			...googleJobsFields,
			...googleLensFields,
			...googleLightFields,
			...googleLocalFields,
			...googleMapsFields,
			...googleMapsReviewsFields,
			...googleNewsFields,
			...googleSearchFields,
			...googleProductFields,
			...googleShoppingFields,
			...googleTrendsFields,
			...googleAutocompleteFields,
			...googleImagesFields,
			...googleScholarFields,
			...googleVideosFields,
			...bingImagesFields,
			...bingSearchFields,
			...ebaySearchFields,
			...duckDuckGoSearchFields,
			...googleMapsDirectionsFields,
			...baiduSearchFields,
			...amazonSearchFields,
			...googleHotelsFields,
			...youtubeSearchFields,
			...googleFinanceFields,

		],
	};
}
