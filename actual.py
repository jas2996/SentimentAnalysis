#this python script makes the request to the api 
#then it opens the csv file to parse it 
#selects the 3rd coloumn with the tweet and loops through it 
#makes the get reuqest and is resurned with the info stored in variable json_data
#finally writes to a json formatted file 

import requests
import csv
import json

main_api = 'https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text='
token = '/APIs&token=d0acc7074d2c43719e7f468a3739d80e'

with open("data_edit1.csv", "r") as dataFile:
	dataFileReader = csv.reader(dataFile)
	tweetList = []
	result = []
	for col in dataFileReader:
			if len (col) !=0:
				tweetList = tweetList + [col]
				#print(tweetList)
				final = col[2].replace('#','')
				#print(col[2])
				url = main_api + final + token
				#print(url + "\n") 
				#json_data = requests.get(url).json()
				json_data = (requests.get(url)).json()
				#print(json_data)
				#if 'sentiment' in json_data:
				#	s = json_data['lang']['sentiment']
				result.append(json_data)
#print(result)
dataFile.close()

with open ("data_edit.JSON", "w") as dataFileJson:
	json.dump(result, dataFileJson, sort_keys=True, indent=4  )

dataFileJson.close()