import csv
import datetime

values = [
    "99,99", "99,99", "99,99", "99,99", "99,99",
    "99,99", "99,99", "99,99", "10,5", "10,5",
    "10,5", "10,5", "10,5", "10,5", "10,5"
]

current_datetime = datetime.datetime.now().strftime("%d/%m/%Y - %H:%M")

file_path = 'requete_python/csv/test_appel2.csv'

with open(file_path, mode='w', newline='') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerow([current_datetime] + values)
