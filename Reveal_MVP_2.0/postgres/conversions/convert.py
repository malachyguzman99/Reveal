'''convert.py'''

'''Author: A.J. Ristino'''

import csv

'''Converting companies.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[0] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[0],line[1],line[5],line[7],line[13],line[14]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[0])
            id += 1

with open("companies.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting industry.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[2] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[2]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[2])
            id += 1

with open("industry.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting bcorp.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[3] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[3]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[3])
            id += 1

with open("bcorp.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting climate.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[4] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[4]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[4])
            id += 1

with open("climate.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting gcompact.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[6] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[6]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[6])
            id += 1

with open("gcompact.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting leaning.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[8] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[8]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[8])
            id += 1

with open("leaning.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting lobbying.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[9] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[9]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[9])
            id += 1

with open("lobbying.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting bills.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[10] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[10]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[10])
            id += 1

with open("bills.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting lgbtq.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[11] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[11]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[11])
            id += 1

with open("lgbtq.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting sovscore.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[12] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[12]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[12])
            id += 1

with open("sovscore.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

'''Converting mscore.csv'''

with open("data.csv") as csv_file:
    file = csv.reader(csv_file)
    targets_found = set()
    desired_rows = []
    id = 1
    for line in file:
        if line[15] not in targets_found:#If the desired quality  isn't in the 'found' list . . .
            desired_rows.append([id,line[15]])#Add desired fields to 'desired' list . . .
            #Add the target quality into the 'found' list . . .
            targets_found.add(line[15])
            id += 1

with open("mscore.csv", 'w') as new_file:
    writer = csv.writer(new_file)
    for row in desired_rows:
        writer.writerow(row)

