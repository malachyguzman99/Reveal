'''connector.py'''

import csv

with open("companies.csv") as companies:
    companies_dict = {}
    file = csv.reader(companies)
    for line in file:
        if line[1] not in companies_dict.keys():
            companies_dict[line[1]] = line[0]


with open("industry.csv") as industries:
    industries_dict = {}
    file = csv.reader(industries)
    for line in file:
        if line[1] not in industries_dict.keys():
            industries_dict[line[1]] = line[0]

with open("bcorp.csv") as bcorp:
    bcorp_dict = {}
    file = csv.reader(bcorp)
    for line in file:
        if line[1] not in bcorp_dict.keys():
            bcorp_dict[line[1]] = line[0]

with open("climate.csv") as climate:
    climate_dict = {}
    file = csv.reader(climate)
    for line in file:
        if line[1] not in climate_dict.keys():
            climate_dict[line[1]] = line[0]

with open("gcompact.csv") as gcompact:
    gcompact_dict = {}
    file = csv.reader(gcompact)
    for line in file:
        if line[1] not in gcompact_dict.keys():
            gcompact_dict[line[1]] = line[0]

with open("leaning.csv") as leaning:
    leaning_dict = {}
    file = csv.reader(leaning)
    for line in file:
        if line[1] not in leaning_dict.keys():
            leaning_dict[line[1]] = line[0]

with open("lobbying.csv") as lobbying:
    lobbying_dict = {}
    file = csv.reader(lobbying)
    for line in file:
        if line[1] not in lobbying_dict.keys():
            lobbying_dict[line[1]] = line[0]

with open("bills.csv") as bills:
    bills_dict = {}
    file = csv.reader(bills)
    for line in file:
        if line[1] not in bills_dict.keys():
            bills_dict[line[1]] = line[0]

with open("lgbtq.csv") as lgbtq:
    lgbtq_dict = {}
    file = csv.reader(lgbtq)
    for line in file:
        if line[1] not in lgbtq_dict.keys():
            lgbtq_dict[line[1]] = line[0]

with open("sovscore.csv") as sovscore:
    sovscore_dict = {}
    file = csv.reader(sovscore)
    for line in file:
        if line[1] not in sovscore_dict.keys():
            sovscore_dict[line[1]] = line[0]

with open("mscore.csv") as mscore:
    mscore_dict = {}
    file = csv.reader(mscore)
    for line in file:
        if line[1] not in mscore_dict.keys():
            mscore_dict[line[1]] = line[0]

with open("../data.csv") as source, open("connector.csv", 'w') as connector:
    writer = csv.writer(connector)
    reader = csv.reader(source)
    for line in reader:
        company_id = companies_dict[line[0]]
        industry_id = industries_dict[line[2]]
        bcorp_id = bcorp_dict[line[3]]
        climate_id = climate_dict[line[4]]
        gcompact_id = gcompact_dict[line[6]]
        leaning_id = leaning_dict[line[8]]
        lobbying_id = lobbying_dict[line[9]]
        bills_id = bills_dict[line[10]]
        lgbtq_id = lgbtq_dict[line[11]]
        sovscore_id = sovscore_dict[line[12]]
        mscore_id = mscore_dict[line[15]]
        writer.writerow([company_id, industry_id, bcorp_id, climate_id,
                         gcompact_id, leaning_id, lobbying_id, bills_id, lgbtq_id,
                         sovscore_id, mscore_id])

