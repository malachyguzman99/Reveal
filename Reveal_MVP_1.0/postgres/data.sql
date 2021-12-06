--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bcorp; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bcorp (
    id integer,
    status integer
);


--
-- Name: bills; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bills (
    id integer,
    bills text
);


--
-- Name: climate; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.climate (
    id integer,
    status integer
);


--
-- Name: companies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.companies (
    id integer,
    name text,
    parent text,
    pratio text,
    oslobbying text,
    ranking text,
    indranking text
);


--
-- Name: connector; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.connector (
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
    mscore_id integer
);


--
-- Name: gcompact; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gcompact (
    id integer,
    status integer
);


--
-- Name: industries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries (
    id integer,
    industry text
);


--
-- Name: leaning; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leaning (
    id integer,
    party text
);


--
-- Name: lgbtq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lgbtq (
    id integer,
    status text
);


--
-- Name: lobbying; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lobbying (
    id integer,
    contribution text
);


--
-- Name: mscore; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.mscore (
    id integer,
    status text
);


--
-- Name: sovscore; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sovscore (
    id integer,
    status text
);


--
-- Data for Name: bcorp; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.bcorp (id, status) FROM stdin;
1	0
2	1
1	0
2	1
\.


--
-- Data for Name: bills; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.bills (id, bills) FROM stdin;
1	
2	H.R.397: Rehabilitation for Multiemployer Pensions Act of 2019
3	H.R.748: Relief for Workers Affected by Coronavirus Act
4	unknown
5	S.337: Preserving the MotorCities Heritage Act
6	S.2941: Recycling Enhancements to Collection and Yield through Consumer Learning and Education Act of 2019
7	none
8	H.Res.904: Second Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020
9	H.R.1406: APEX Act
10	H.R.5: Equality Act
11	H.R.6800: Worker Health Coverage Protection Act
12	H.R.3055: United States Victims of State Sponsored Terrorism Fund Clarification Act
13	S.3398: Eliminating Abusive and Rampant Neglect of Interactive Technologies Act of 2020
14	H.R.2968: Department of Defense Appropriations Act, 2020
15	H.R.269: Over-the-Counter Monograph User Fee Act of 2019
16	H.R.269: Over-the-Counter Monograph User Fee Act of 2020
17	S.1396: Protect America's Paper for Recycling Act
\.


--
-- Data for Name: climate; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.climate (id, status) FROM stdin;
1	0
2	1
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.companies (id, name, parent, pratio, oslobbying, ranking, indranking) FROM stdin;
1	jellycat		unavailable	no contributions. no data		
2	ettitude 		unavailable	no contributions/ no data 		
3	nestle		unavailable	contributions: $345,257 (mixed) - Lobbying $1,435,000 - most lobbied bill H.R.397: Rehabilitation for Multiemployer Pensions Act of 2019	59 out of 596 (food products group)	5572 out of 14979 companies total
4	hydroflask 	Helen of Troy Limited	140:1	no contributions/no data		
5	Dell		14:1	Contributions: 4,001,642 (mixed) - Lobbying:$4,530,000 - Most lobbied bill: H.R.748: Relief for Workers Affected by Coronavirus Act	163 out of 600 (technology hardware group)	1621 out of 14979 companies total
6	Thrive market 	Whole Foods	unavailable	Lobbying: $180,000 (2009)	459 out of 467 (retailing)	8919 out of 14979 companies total
7	Krave Beauty		unavailable	no contributions/ no data 		
8	Patagonia 	Yvon Chouinard	unavailable	Contributions:$680,566 (mostly democratic) - Lobbying: $40,000 - most lobbied bill S.337: Preserving the MotorCities Heritage Act		
9	Ben and Jerry's 	Unilever	unavailable	Lobbying: $136,854 - Contributions: $11,460,000 (mixed, leaning democratic) - most lobbied bill S.2941: Recycling Enhancements to Collection and Yield through Consumer Learning and Education Act of 2019	8 out of 104 (household products)	4135 out of 14979 companies total
10	Malt O Meal 	Post	193:1	no contributions/ no data	468 out of 596 (food products)	13982 out of 14979 companies total
11	Aldi 	Albrecht Discounts	unavailable	Little data- leans republican		
12	Cub foods	SuperValu	unavailable	Contributions: $17,428 (mixed, leaning democratic) 	15 out of 202 (food retailers)	1858 out of 14979 companies total
13	Almond Joy	Hershey	630:1	Contributions: $109,254 (mixed, leaning republican)-  Lobbying: $695,000 - most lobbied bill: H.Res.904: Second Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020	75 out of 596 (food products)	6453 out of 14979 companies total
14	Doritos 	Pepsi	462:1	Contributions: $875,809 (mixed) - Lobbying: $3,690,000 - Most lobbied Bill H.R.1406: APEX Act	5 out of 596 (food products)	1590 out of 14979 companies total
15	Nature Valley 	General Mills	205:1	Contributions: $456,520 (mixed) - Lobbying: $620,000 - Most Lobbied bill: H.R.5: Equality Act	34 out of 596 (food products)	4155 out of 14979 companies total
16	Snyder's of Hanover 	Snyder's-Lance	unavailable	Contributions: $8,962 (mixed, leaning republican)	40 out of 596 (food products)	4597 out of 14979 companies total
17	JIF (peanut butter) 	The J.M. Smucker Company	136:1	Contributions: $507,047 (mostly republican) - Lobbying: $330,000- Most lobbied bill: H.R.6800: Worker Health Coverage Protection Act	175 out of 596 (food products)	9417 out of 14979 companies total
18	Silk (soymilk)	Danone	unavailable	Contributions: $5,975 (mostly democratic) - Lobbying: $770,000 - Most lobbied bill: H.R.3055: United States Victims of State Sponsored Terrorism Fund Clarification Act	21 out of 596 (food products)	3262 out of 14979 companies total
19	Timex		unavailable	Contributions: $1,017 (mixed- leaning democratic)		
20	Beats	Apple	256:1	Contributions: $8,726,449 (mixed) - Lobbying: $6,650,000  - Most lobbied bill: S.3398: Eliminating Abusive and Rampant Neglect of Interactive Technologies Act of 2020	167 out of 600 (technology hardware)	1677 out of 14979 companies total
21	Sony		unavailable	Contributions: $2,025,009 (mixed, leading democratic) - Lobbying: $2,386,078 - Most lobbied bill: H.R.6800: Worker Health Coverage Protection Act	23 out of 222 (consumer durables)	937 out of 14979 companies total
22	Apple		256:1	Contributions: $8,726,449 (mixed) - Lobbying: $6,650,000  - Most lobbied bill: S.3398: Eliminating Abusive and Rampant Neglect of Interactive Technologies Act of 2020	167 out of 600 (technology hardware)	1677 out of 14979 companies total
23	Neutrogena 	johnson & Johnson	365:1	Contributions: $2,138,687 (mixed) - Lobbying: $5,570,000 - most lobbied bill: H.R.748: Relief for Workers Affected by Coronavirus Act	137 out of 1027 (pharmaceuticals)	7215 out of 14979 companies total
24	Revlon	MacAndrews & Forbes	unavailable	Contributions: $1,000,014 (mixed) - Lobbying ($1,270,000)- Most lobbied Bill: H.R.2968: Department of Defense Appropriations Act, 2020		
25	Burt's Bees 	clorox	165:1	Contributions: $473,252 (mixed)	11 out of 104 (household products)	4338 out of 14979 companies total
26	Downy 	Procter & Gamble	333:1	Contributions: $1,186,012 (Mixed, leaning republican) - Lobbying: $3,284,028 - most lobbied Bill : H.R.269: Over-the-Counter Monograph User Fee Act of 2019	35 out of 104 (household products)	7142 out of 14979 companies total
27	Tide 	Procter & Gamble	333:1	Contributions: $1,186,012 (Mixed, leaning republican) - Lobbying: $3,284,028 - most lobbied Bill : H.R.269: Over-the-Counter Monograph User Fee Act of 2019	35 out of 104 (household products)	7142 out of 14979 companies total
28	Société Bic S.A.,		unavailable	no contributions/No data 	20 out of 104 (household products)	5555 out of 14979 companies total
29	Mead 	westrock	190:1	Contributions: $1,476,853 (mostly republican) - Lobbying: $225,304 - most lobbied bill: S.1396: Protect America's Paper for Recycling Act	46 out of 98 (containers and packaging)	2434 out of 14979 companies total
\.


--
-- Data for Name: connector; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.connector (company_id, industry_id, bcorp_id, climate_id, gcompact_id, leaning_id, lobbying_id, bills_id, lgbtq_id, sovscore_id, mscore_id) FROM stdin;
1	1	1	1	1	1	1	1	1	1	1
2	2	1	2	1	1	1	1	1	1	2
3	3	1	1	1	2	2	2	1	2	1
4	4	1	1	1	1	1	1	1	1	1
5	5	1	1	1	2	3	3	2	3	1
6	6	2	1	1	3	4	4	1	4	2
7	7	1	2	1	1	1	1	1	1	2
8	8	2	1	1	4	5	5	2	1	2
9	3	2	1	1	5	6	6	1	5	2
10	3	1	1	1	1	1	1	1	6	1
11	3	1	1	1	6	7	4	1	1	1
12	3	1	1	1	5	8	7	3	7	1
13	3	1	1	1	7	9	8	1	8	1
14	3	1	1	1	2	10	9	1	9	1
15	3	1	1	1	2	11	10	2	10	1
16	3	1	1	1	7	8	7	1	11	1
17	3	1	1	1	8	12	11	2	12	1
18	3	1	1	1	9	13	12	1	13	1
19	5	1	1	1	5	8	7	1	1	1
20	5	1	1	1	2	14	13	1	14	1
21	5	1	1	2	5	15	11	2	15	2
22	5	1	1	1	2	14	13	2	16	1
23	7	1	1	1	2	16	3	1	17	1
24	7	1	1	1	2	17	14	1	1	1
25	7	1	1	1	2	8	7	2	18	1
26	2	1	1	1	7	18	15	2	19	1
27	2	1	1	1	7	18	16	2	19	1
28	2	1	1	1	1	1	1	1	20	1
29	9	1	1	1	8	19	17	1	21	1
\.


--
-- Data for Name: gcompact; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.gcompact (id, status) FROM stdin;
1	0
2	1
\.


--
-- Data for Name: industries; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.industries (id, industry) FROM stdin;
1	Miscellaneous
2	Household products
3	Food Products
4	Miscellaneous 
5	Technology hardwear
6	Food and Beverage Stores
7	Pharmaceuticals 
8	Apparel
9	containers and packaging
\.


--
-- Data for Name: leaning; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.leaning (id, party) FROM stdin;
1	
2	mixed
3	n/a
4	mostly democratic
5	mixed, leaning democrat
6	leaning republican
7	mixed, leaning republican
8	mostly republican
9	mostly democrat
\.


--
-- Data for Name: lgbtq; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.lgbtq (id, status) FROM stdin;
1	unavailable
2	100
3	40
\.


--
-- Data for Name: lobbying; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.lobbying (id, contribution) FROM stdin;
1	
2	1435000
3	4530000
4	180000
5	40000
6	136854
7	unknown
8	0
9	695000
10	3690000
11	620000
12	330000
13	770000
14	6650000
15	2386078
16	5570000
17	1270000
18	3284028
19	225304
\.


--
-- Data for Name: mscore; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.mscore (id, status) FROM stdin;
1	0
2	1
\.


--
-- Data for Name: sovscore; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sovscore (id, status) FROM stdin;
1	n/a
2	Nestle S.A. (Switzerland): 24.2, medium risk
3	16.1, low risk
4	Amazon: 30, high risk
5	Unilever: 21.6, medium
6	Post: 44.7, severe
7	United Natural Foods: 16.7, low
8	Hershey: 25.7, medium
9	Pepsico: 16, low
10	General Mills: 21.7, medium
11	Campbell Soup: 22.4, medium
12	J.M. Smucker: 31, high
13	owned by Danone North America (a B-corp), but Danone S.A., the broader company based in France, is the one rated: 19.9, low
14	Apple: 16.2, low
15	13.9, low
16	16.2, low
17	27.1, medium
18	Clorox: 22, medium
19	Procter & Gamble: 27, medium
20	Societe BIC SA: 24.2, medium
21	WestRock: 18, low
\.


--
-- PostgreSQL database dump complete
--

