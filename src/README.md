# |  DOCS - CAREZILLA REST APIs
### Welcome to Carezilla Development team!


##### Here you'll get all the information related to the REST APIs



## | Index: 

1. Auth Routes - `api/auth`
2. Caretaker Routes - `api/caretakers`
3. Caregiver Routes - `api/caregivers`
---



## 1. Authentication Routes


1.1. **LOGIN CARETAKER**
      
`POST` - `api/auth/login-caretaker` and on the request body pass `email` & `password` as the **JSON** Object.


1.2. **LOGIN CAREGIVER**
      
`POST` - `api/auth/login-caregiver` and on the request body pass `email` & `password` as the **JSON** Object.


---



## 2. caretaker Routes


2.1. **FETCHES ALL THE CARETAKERS**
     
`GET` - `api/caretakers/`- no need to pass anything with request body.


2.2. **SIGN UP AS A NEW CARETAKER**
     
`POST` - `api/caretakers/signup`- and on the request body pass `full_name`, `email` & `password` as the **JSON** Object.


2.3. **FETCH ONLY ONE CARETAKER**
     
`GET` - `api/caretakers/:caretaker_id` - no need to pass anything with request body.


2.4. **UPDATE A PARTICULAR CARETAKER**
     
`PUT` - `api/caretakers/update` and on the request body pass `caretaker_id`(compulsory) and other specific fields which you want to update as the **JSON** Object.


2.5. **GET RECOMMENDED CAREGIVERS**
     
`GET` - `api/caretakers/get-recommendation/:caretaker_id` and it will fetch the matching `looking_for` property from the `caretaker` and `looking_to_give` property from a particular `caregiver` document Schema and give us the filtered results.


2.6. **ADD A CAREGIVER TO MATCH WITH / SEND PROPOSAL TO CAREGIVER**
     
`PUT` - `api/caretakers/send-proposal/:caretaker_id` and on the request body pass `sent_proposals_to` property as the array of **JSON** Objects having `_id` as the **caregiver_id**.

     Example -
     {	
	   "sent_proposals_to":[{
		   "_id":"5c38e3466fcf1d054458530d"
		
	     }]
     }


2.7. **MATCH WITH A CAREGIVER / ACCEPT A PROPOSAL**
     
`PUT` - `api/caretakers/match/:caretaker_id` and on the request body pass `connections` property as the array of **JSON** Objects having  `_id` as the **caregiver_id**.

     Example - 
     {	
	    "connections":[{
		    "_id":"5c38e3466fcf1d054458530d"
		
	     }]
     }


2.8. **UPDATE CARETAKER's PROFILE PICTURE**
     
`PUT` - `api/caretakers/updateImage` and on the request body pass `caretaker_id`(compulsory) and `fileName` property as the image file **JSON** Object.


---


## 3. caregiver Routes


3.1. **FETCHES ALL THE CAREGIVERS**
     
`GET` - `api/caregivers/`- no need to pass anything with request body.


3.2. **SIGN UP AS A NEW CAREGIVER**
     
`POST` - `api/caregivers/signup`- and on the request body pass `full_name`, `email` & `password` as the **JSON** Object.


3.3. **FETCH ONLY ONE CAREGIVER**
     
`GET` - `api/caregivers/:caregiver_id` - no need to pass anything with request body.


3.4. **UPDATE A PARTICULAR CAREGIVER**
     
`PUT` - `api/caregivers/update` and on the request body pass `caregiver_id`(compulsory) and other specific fields which you want to update as the **JSON** Object.


3.5. **GET RECOMMENDED CARETAKERS**
     
`GET` - `api/caregivers/get-recommendation/:caregiver_id` and it will fetch the matching `looking_to_give` property from the `caregiver` and `looking_for` property from the `caretaker` document Schema and give us the filtered results.


3.6. **ADD A CARETAKER TO MATCH WITH / SEND PROPOSAL TO CARETAKER**
     
`PUT` - `api/caregivers/send-proposal/:caregiver_id` and on the request body pass `sent_proposals_to` property as the array of **JSON** Objects having `_id` as the **caregiver_id**.

     Example -
     {	
	   "sent_proposals_to":[{
		   "_id":"5c38e3466fcf1d054458530d"
		
	     }]
     }


3.7. **MATCH WITH A CARETAKER / ACCEPT A PROPOSAL**
     
`PUT` - `api/caregivers/match/:caregiver_id` and on the request body pass `connections` property as the array of **JSON** Objects having  `_id` as the **caretaker_id**.

     Example - 
     {	
	    "connections":[{
		    "_id":"5c38e3466fcf1d054458530d"
		
	     }]
     }


3.8. **UPDATE CAREGIVER's PROFILE PICTURE**
     
`PUT` - `api/caregivers/updateImage` and on the request body pass `caregiver_id`(compulsory) and `fileName` property as the image file **JSON** Object.


---

