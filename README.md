                                **air-pollution-project-nw**

**Project Description:**

Our project focuses on a major problem that challenges our climate, that of air pollution. From potential lung damage to acid rain, air pollution has a negative impact on not only our health but also our environments. In order to better understand how air pollution impacts us all, it is best to present the data through mapping and creating visualizations to explain our results more clearly.

In this project we will attempt to visualize data from several sources. We will be mapping out the primary sources of air pollution in the United States, visualizing data related to respiratory/cardiovascular diseases with regards to air pollution quantity, and mapping acid deposition amounts to see if there is a correlation between air pollution and acid rain. 
    
**Research Questions:**

1. What are the primary sources of air pollution in urban, industrial, and  rural areas, and how do they   
   vary spatially and temporally?

2. How does air pollution contribute to the incidence and severity of respiratory diseases (e.g., asthma, 
   chronic obstructive pulmonary disease) and cardiovascular diseases (e.g., heart attacks, strokes)?

3. Extra Credit: Does a higher prevalence in air pollution correlate to an increase in acid rain pollution  
   (We could look at urban vs. rural areas)?

Datasets Used: 
    * Weather and Climate Data (This link has a lot of good resources for meteorological data and climate (2024))

    * Openweather API for extracting data about specific molecules per each lat and long point. Could pull data for the top 500 cities in US

    * National Atmospheric Deposition Program Has good resources regarding acid rain deposition (SO4 + NO3 deposits)

    * CDC 500 Cities Dataset Has 800k rows of data about top 500 US cities and various respiratory/cardiovascular diseases/disorders using age-adjusted, city geographical level filters

        * Diseases of interest:

            * COPD

            * Current asthma 

            * Coronary heart disease

            * Cancer (except skin)

            * (Additional diseases as evaluated)

**Task Breakdown:**
**Paulette** 

**Data used**

    * 500 Cities Dataset from CDC: Using age-adjusted, city geographical level filters to eliminate extraneous data + keep relevance

    * Acid Rain Dataset from National Atmospheric Deposition Program (NADP) to review SO4 + NO3 deposits

    * Air Pollution Data from Open Weather API

        * to capture the latitude and longitude data and merge with the 500 Cities Dataset breaking out into cancer, current Asthma, 
          coronary heart disease and COPD.
          
        * also using latitude and longitude data and merge with the NADP data to review the S04 and N03 deposits. 
    
    
**Steps taken for 500 Cities Dataset **

    * Use age-adjusted, city geographical level filters to eliminate extraneous data + keep relevance

    * Read relevant csv files and import API keys

    * Clean data and make sure relevant latitude/longitude data is present

    * Pull OpenWeatherAPI data and merge it with the 500 City data based on the latitude and longitude

    * Create Pandas DataFrames for:

        * Cancer

        * Current Asthma

        * Coronary Heart Disease

        * COPD


**Step taken for National Atmospheric Deposition Program (NADP)**

    * Merge raw CSV files to create the ntn_data DataFrame

    * Read relevant csv files and import API keys

    * Clean data and make sure latitude and longitude data is present

    * Pull OpenWeatherAPI data and merge with the NADP data base don the latitude and longitude

    * Create a Pandas DataFrame for:

        * acid_rain_ap_df

**Create a SQL database for both CDC 500 Cities and NADP Acid Rain data**



**Lauren**

**Question 1:**
s
        * Select data for visualization (air pollution)
        
        * Data must include pollutants and lat long for mapping

        * Map of US via lat + long data with colors indicating pollutant concentration amounts

            * Get dataset from: Openweather API

            * Extract data on types of air pollutants (AQI)

            * Use Plotly to create bubble map type based on the 500 cities based on AQI

**Lauren**

**Question 2:**

        * Select data for visualization: air pollution pollutants from openweather API + incidence (using model estimates of data_values) 
          of respiratory/cardiovascular diseases/disorders from 500 Cities Dataset


        * 1 visualization idea:

            * Make list of 500 top city names from CDC csv (make column into list)

            * Convert city name to lat/lon using geocoding API (dict look like this: { "name": "New York", "lat": 40.7128, "lng": -74.0060})

            * Append all the data values for each respiratory/cardiovascular diseases of interest ({ "name": "New York", "lat": 40.7128, "lng": -74.0060, "copd_data_value": 10, “coronary_data_value: 20, etc. })

            * Use Leaflet to make each city point a bigger circle (or some other measure) based on if the data_value (using age-adjusted, city geographical level filters) is higher or lower

            * Make layers for each molecule from the open weather API

                    * Make list: (city, lat, lng, co2: value, no2: value) - make each circle bigger or smaller based on if higher or lower for each pollutant value

            * Use overlay object feature to select all layers at once to compare how air pollutants are correlated with asthma by looking 
              at opacity of the cities i.e. cities with more opacity show a higher correlation

    * Can also create bar plots comparing levels of air pollution to health issues

**Rachel**

**Question 3:**

    * Select data for visualization (acid rain deposition)

    * Visualize via scatter plot or choropleth mapbox

        * Get dataset from: National Atmospheric Deposition Program

        * Extract data for both Sulfur and Nitrogen deposits

        * Use Plotly to create colored points based on the region represented in the NADP dataset (SO4 + NO3 deposits)

    * Ideally, this would be included as a layer like that of question 1


**Ethical Consideration**
The data collected originates from publicly available sources, including the CDC, OpenWeatherMap API, and the National Atmospheric Deposition Program. This comprehensive dataset encompasses various parameters, such as air quality indices, weather patterns, and atmospheric deposition of sulfur and nitrogen. Our analysis aims to not only investigate the correlation between air pollution levels and disease occurrences across different cities but also to explore the relationship between air pollution and acid rain. It's important to note that this data is strictly utilized for educational purposes and is not intended for commercial use. Furthermore, it's securely stored and won't be shared with any third parties.

This data serves as the foundation for creating insightful visualizations and conducting in-depth analyses to comprehend the impact of air pollution on both human health and environmental phenomena such as acid rain. These findings will be incorporated into educational presentations, reports, and dashboards. It's imperative to emphasize that the data's sole purpose remains educational and won't be repurposed for any other use.




