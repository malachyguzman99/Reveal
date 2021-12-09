tables-schema.sql

Author:

    A.J. Ristino

Order of Schema:

    I. Companies table

    II. Industry table

    III. B-corp table

    IV. Climate table

    V. Gcompact table

    VI. Leaning table

    VII. Lobbying table

    VIII. Bills table

    IX. LGBTQ table

    X. Sovscore table

    XI. Mscore table

    XII. Connector table

++++ TABLE CONSTRUCTORS ++++

I:

CREATE TABLE companies(
id integer,
name text,
parent text,
pratio text,
oslobbying text,
ranking text,
indranking text);

\copy companies  FROM 'companies.csv' DELIMITER ',' CSV NULL AS 'NULL'

II:

CREATE TABLE industries(
id integer,
industry text);

\copy industries  FROM 'industry.csv' DELIMITER ',' CSV NULL AS 'NULL'

III:

CREATE TABLE bcorp(
id integer,
status integer);

\copy bcorp  FROM 'bcorp.csv' DELIMITER ',' CSV NULL AS 'NULL'

IV:

CREATE TABLE climate(
id integer,
status integer);

\copy climate  FROM 'climate.csv' DELIMITER ',' CSV NULL AS 'NULL'

V:

CREATE TABLE gcompact(
id integer,
status integer);

\copy gcompact FROM 'gcompact.csv' DELIMITER ',' CSV NULL AS 'NULL'

VI:

CREATE TABLE leaning(
id integer,
party text);

\copy leaning FROM 'leaning.csv' DELIMITER ',' CSV NULL AS 'NULL'

VII:

CREATE TABLE lobbying(
id integer,
contribution text);

\copy lobbying FROM 'lobbying.csv' DELIMITER ',' CSV NULL AS 'NULL'

VIII:

CREATE TABLE bills(
id integer,
bills text);

\copy bills FROM 'bills.csv' DELIMITER ',' CSV NULL AS 'NULL'

IX:

CREATE TABLE lgbtq(
id integer,
status text);

\copy lgbtq FROM 'lgbtq.csv' DELIMITER ',' CSV NULL AS 'NULL'

X:

CREATE TABLE sovscore(
id integer,
status text);

\copy sovscore FROM 'sovscore.csv' DELIMITER ',' CSV NULL AS 'NULL'

XI:

CREATE TABLE mscore(
id integer,
status text);

\copy mscore FROM 'mscore.csv' DELIMITER ',' CSV NULL AS 'NULL'

XII:

CREATE TABLE connector(
company_id integer,
industry_id integer,
bcorp_id integer,
climate_id integer,
gcompact_id integer,
leaning_id integer,
lobbying_id integer,
bills_id integer,
lgbtq_id integer,
sovscore_id integer,
mscore_id integer);

\copy connector from 'connector.csv' DELIMITER ',' CSV NULL AS 'NULL'
