DROP TABLE IF EXISTS acid_rain_ap CASCADE;


CREATE TABLE acid_rain_ap(
	network VARCHAR(30) NOT NULL, 
	siteID VARCHAR(30) NOT NULL PRIMARY KEY,
	siteName VARCHAR(100) NOT NULL,
	status VARCHAR(30) NOT NULL,
	startDate_x DATE NOT NULL,
	stopDate VARCHAR(30) NOT NULL,
	county VARCHAR(30) NOT NULL,
	state VARCHAR(30) NOT NULL,
	latitude VARCHAR(30) NOT NULL,
	longitude VARCHAR(30) NOT NULL,
	elevation VARCHAR(30) NOT NULL,
	stateName VARCHAR(30) NOT NULL,
	siteClass VARCHAR(30) NOT NULL,
	seas VARCHAR(30) NOT NULL,
	yr VARCHAR(30) NOT NULL,
	Criteria1 VARCHAR(30) NOT NULL,
	Criteria2 VARCHAR(30) NOT NULL,
	Criteria3 VARCHAR(30) NOT NULL,
	CA VARCHAR(30) NOT NULL,
	Mg VARCHAR(30) NOT NULL,
	K VARCHAR(30) NOT NULL,
	Na VARCHAR(30) NOT NULL,
	NH4 VARCHAR(30) NOT NULL,
	NO3 VARCHAR(30) NOT NULL,
	Cl VARCHAR(30) NOT NULL,
	SO4	VARCHAR(30) NOT NULL,
	H VARCHAR(30) NOT NULL,	
	Conduc VARCHAR(30) NOT NULL,	
	svol VARCHAR(30) NOT NULL,	
	ppt VARCHAR(30) NOT NULL,
	fullChemLab	VARCHAR(30) NOT NULL,
	daysSample VARCHAR(30) NOT NULL,	
	startDate_y VARCHAR(30) NOT NULL,	
	lastDate VARCHAR(30) NOT NULL,
	ap_Latitude VARCHAR(30) NOT NULL,
	ap_Longitude VARCHAR(30) NOT NULL,
	CO VARCHAR(30) NOT NULL,
	NO VARCHAR(30) NOT NULL,
	NO2 VARCHAR(30) NOT NULL,
	O3 VARCHAR(30) NOT NULL,
	SO2 VARCHAR(30) NOT NULL,
	PM2_5 VARCHAR(30) NOT NULL,
	PM10 VARCHAR(30) NOT NULL,
	NH3 VARCHAR(30) NOT NULL
);

Select * From acid_rain_ap