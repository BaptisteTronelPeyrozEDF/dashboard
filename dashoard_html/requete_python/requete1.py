import csv
import datetime

values = [
    "37.227", "14.407", "2.534", "210", "21.906", "54.378", "1.444", "1.002",
    "54.376", "35.475", "7.365", "2.534", "23.222", "12.250", "2.125", "127",
    "18.690", "8.145", "1.957", "1.450", "1.448", "7.979", "2.422", "201",
    "20.227", "17.227", "5.3", "27.4", "54.378", "1.002", "6.580"
]

current_datetime = datetime.datetime.now().strftime("%d/%m/%Y - %H:%M")

file_path = 'requete_python/csv/test_appel.csv'

with open(file_path, mode='w', newline='') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerow([current_datetime] + values)
