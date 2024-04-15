DROP TABLE IF EXISTS cancer CASCADE;
DROP TABLE IF EXISTS copd CASCADE;
DROP TABLE IF EXISTS current_asthma CASCADE;
DROP TABLE IF EXISTS coronary_heart_disease CASCADE;

-- ON COLUMN Data_Value_Footnote_Symbol 'No data in this column'
-- Data_Value_Footnote 'No data in this column'
-- TractFIPS 'No data in this column'
CREATE TABLE cancer (
	Year INT,
	StateAbbr VARCHAR(30),
	StateDesc VARCHAR(30),
	CityName VARCHAR(30) NOT NULL,
	GeographicLevel VARCHAR(30) NOT NULL,
	DataSource VARCHAR(30) NOT NULL,
	Category VARCHAR(30) NOT NULL,
	UniqueID INT NOT NULL PRIMARY KEY,
	Measure VARCHAR(100) NOT NULL,
	Data_Value_Unit VARCHAR(30) NOT NULL,
	DataValueTypeID VARCHAR(30) NOT NULL,
	Data_Value_Type VARCHAR(30) NOT NULL,
	Data_Value VARCHAR (10) NOT NULL,
	Low_Confidence_Limit VARCHAR (10) NOT NULL,
	High_Confidence_Limit VARCHAR (10) NOT NULL,
	Data_Value_Footnote_Symbol VARCHAR(30) NOT NULL,
	Data_Value_Footnote VARCHAR(30) NOT NULL,
	PopulationCount INT NOT NULL,
	GeoLocation VARCHAR (50) NOT NULL,
	CategoryIDData_Value_Type VARCHAR(30) NOT NULL,
	MeasureId VARCHAR(30) NOT NULL,
	CityFIPS VARCHAR(30) NOT NULL,
	TractFIPS VARCHAR(30) NOT NULL,
	Short_Question_Text VARCHAR(100) NOT NULL	
);

-- ON COLUMN Data_Value_Footnote_Symbol 'No data in this column'
-- Data_Value_Footnote 'No data in this column'
-- TractFIPS 'No data in this column'
CREATE TABLE copd (
	Year INT,
	StateAbbr VARCHAR(30),
	StateDesc VARCHAR(30),
	CityName VARCHAR(30) NOT NULL,
	GeographicLevel VARCHAR(30) NOT NULL,
	DataSource VARCHAR(30) NOT NULL,
	Category VARCHAR(30) NOT NULL,
	UniqueID INT NOT NULL PRIMARY KEY,
	Measure VARCHAR(100) NOT NULL,
	Data_Value_Unit VARCHAR(30) NOT NULL,
	DataValueTypeID VARCHAR(30) NOT NULL,
	Data_Value_Type VARCHAR(30) NOT NULL,
	Data_Value VARCHAR (10) NOT NULL,
	Low_Confidence_Limit VARCHAR (10) NOT NULL,
	High_Confidence_Limit VARCHAR (10) NOT NULL,
	Data_Value_Footnote_Symbol VARCHAR(30) NOT NULL,
	Data_Value_Footnote VARCHAR(30) NOT NULL,
	PopulationCount INT NOT NULL,
	GeoLocation VARCHAR (50) NOT NULL,
	CategoryIDData_Value_Type VARCHAR(30) NOT NULL,
	MeasureId VARCHAR(30) NOT NULL,
	CityFIPS VARCHAR(30) NOT NULL,
	TractFIPS VARCHAR(30) NOT NULL,
	Short_Question_Text VARCHAR(100) NOT NULL	
);
-- ON COLUMN Data_Value_Footnote_Symbol 'No data in this column'
-- Data_Value_Footnote 'No data in this column'
-- TractFIPS 'No data in this column'

CREATE TABLE current_asthma (
	Year INT,
	StateAbbr VARCHAR(30),
	StateDesc VARCHAR(30),
	CityName VARCHAR(30) NOT NULL,
	GeographicLevel VARCHAR(30) NOT NULL,
	DataSource VARCHAR(30) NOT NULL,
	Category VARCHAR(30) NOT NULL,
	UniqueID INT NOT NULL,
	Measure VARCHAR(100) NOT NULL,
	Data_Value_Unit VARCHAR(30) NOT NULL,
	DataValueTypeID VARCHAR(30) NOT NULL,
	Data_Value_Type VARCHAR(30) NOT NULL,
	Data_Value VARCHAR (10) NOT NULL,
	Low_Confidence_Limit VARCHAR (10) NOT NULL,
	High_Confidence_Limit VARCHAR (10) NOT NULL,
	Data_Value_Footnote_Symbol VARCHAR(30) NOT NULL,
	Data_Value_Footnote VARCHAR(30) NOT NULL,
	PopulationCount INT NOT NULL,
	GeoLocation VARCHAR (50) NOT NULL PRIMARY KEY,
	CategoryIDData_Value_Type VARCHAR(30) NOT NULL,
	MeasureId VARCHAR(30) NOT NULL,
	CityFIPS VARCHAR(30) NOT NULL,
	TractFIPS VARCHAR(30) NOT NULL,
	Short_Question_Text VARCHAR(100) NOT NULL	
);
-- ON COLUMN Data_Value_Footnote_Symbol 'No data in this column'
-- Data_Value_Footnote 'No data in this column'
-- TractFIPS 'No data in this column'

CREATE TABLE coronary_heart_disease (
	Year INT,
	StateAbbr VARCHAR(30),
	StateDesc VARCHAR(30),
	CityName VARCHAR(30) NOT NULL,
	GeographicLevel VARCHAR(30) NOT NULL,
	DataSource VARCHAR(30) NOT NULL,
	Category VARCHAR(30) NOT NULL,
	UniqueID INT NOT NULL,
	Measure VARCHAR(100) NOT NULL,
	Data_Value_Unit VARCHAR(30) NOT NULL,
	DataValueTypeID VARCHAR(30) NOT NULL,
	Data_Value_Type VARCHAR(30) NOT NULL,
	Data_Value VARCHAR (10) NOT NULL,
	Low_Confidence_Limit VARCHAR (10) NOT NULL,
	High_Confidence_Limit VARCHAR (10) NOT NULL,
	Data_Value_Footnote_Symbol VARCHAR(30) NOT NULL,
	Data_Value_Footnote VARCHAR(30) NOT NULL,
	PopulationCount INT NOT NULL,
	GeoLocation VARCHAR (50) NOT NULL PRIMARY KEY,
	CategoryIDData_Value_Type VARCHAR(30) NOT NULL,
	MeasureId VARCHAR(30) NOT NULL,
	CityFIPS VARCHAR(30) NOT NULL,
	TractFIPS VARCHAR(30) NOT NULL,
	Short_Question_Text VARCHAR(100) NOT NULL	
-- 	FOREIGN KEY (CityNAME) REFERENCES cancer(CityName),
-- 	FOREIGN KEY (Low_Confidence_limit) REFERENCES copd (Low_Confidence_limit),
-- 	FOREIGN Key (MeasureId) REFERENCES current_asthma (MeasureId)
);


SELECT * FROM cancer;
SELECT * FROM copd;
SELECT * FROM current_asthma;
SELECT * FROM coronary_heart_disease;