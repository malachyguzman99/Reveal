Author: A.J. Ristino


This document serves as a plan of action.

28 rows consisting of 28 different corporations.
Columns are as follow:

0 - Brand name (STR) (COMPANY TABLE)
1 - Parent company (STR) (COMPANY TABLE)
2 - Industry (STR) (OWN TABLE)
3 - B - corp (INT) 1 or 0 (OWN TABLE)
4 - Climate Neutral certified (INT) 1 or 0 (OWN TABLE)
5 - Pay ratio (STR) (COMPANY TABLE) 
6 - UN GLobal Compact (INT) 1 or 0 (OWN TABLE)
7 - Open Secrets (Contributions + lobbying) (STR) (COMPANY TABLE)
8 - Open Secrets (Contribution Leanings) (STR) (OWN TABLE)
9 - Open Secrets (Lobbying) (STR) (OWN TABLE) 
    NOTE: #9 as a column contains 'unknowns'. I don't want to list these as
           '0' because that wouldn't be accurate, so I'm making it a string 
            instead of an integer.
10 - Open Secrets (Supported Bill) (STR) (OWN TABLE)
11 - LGBTQ+ (STR) (OWN TABLE)
12 - Sustainalytics (Overall Score) (STR) (OWN TABLE)
13 - Sustainalytics (ranking within industry group) (STR) (COMPANY TABLE)
14 - Sustainalytics (ranking within all companies analyzed) (STR) (COMPANY TABLE)
15 - 3 - metric score (INT) (OWN TABLE)

TABLES:

1. COMPANIES:
INTEGER ID, 0, 1, 5, 7, 13, 14

2. INDUSTRY:
INTEGER ID, 2

3. B-CORP:
INTEGER ID, 3

4. CLIMATE:
INTEGER ID, 4

5. GCOMPACT:
INTEGER ID, 6

6. LEANING:
INTEGER ID, 8

7. LOBBYING:
INTEGER ID, 9

8. BILLS:
INTEGER ID, 10

9. LGBTQ:
INTEGER ID, 11

10. SOVSCORE: (Sustainalytics Overall Score)
INTEGER ID, 12 

11. MSCORE: (Metric Score)
INTEGER ID, 15 


