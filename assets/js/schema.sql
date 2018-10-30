DROP DATABASE IF EXISTS topSongs_DB;
CREATE DATABASE topSongs_DB;

USE topSongs_DB;

CREATE TABLE top5000(
  position INT NOT NULL,
  artist VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  year INT NULL,
  raw_total DECIMAL(10, 4) NOT NULL,
  raw_usa DECIMAL (10, 4) NOT NULL,
  raw_uk DECIMAL (10, 4) NOT NULL,
  raw_eur DECIMAL (10, 4) NOT NULL,
  raw_row DECIMAL (10, 4) NOT NULL,
  PRIMARY KEY (position)
  
  
  
  
);

SELECT * FROM top5000