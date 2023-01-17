# Data usage tracker app

Your community school wants to enroll a data consumption tracker algorythm to help track the usage of data accross all apps that the students are using. 

You are asked to help them create the web application; Each student is sent 500mb of data per month, the students can top-up if they have run out of data. There's is a usage sting for all the apps e.g `("YouTube, Sportify, Zoom, Slack, Khan Academy")` Apps got data usage per minute. 


`Calculate the total usage based on the Apps and minutes entered.`

### Note: 
Create a code for a user. 	
User got a data balance starts at 500mb
User also has airtime balance which they can top up and use the buy data	
Create a list of apps and the data usage per minute for the app
Calculate total usage - Submit usage - user_code with app_id and usage in minutes


## Factory Function 

Create a factory function called `DataUsageTracker`

Method name | Description
------------------------ | ---------------
`userCode` | Create a code for a user. 	
`totalCostPerUser` |Total usage per user -> cost/minutes/ mb
`totalUsage` |  Total usage across apps
`availableData` |  Show how much data is still available for use.
`highestProjectedMin` |  User with highest projected minutes / mb / cost
`sendDataToAnotherUser` |  Send another user data

If you send a user data you earn points - which will give you more data upon top-up

## Table structure

* Create 3 tables: learner, application & learner_application table
The data cost per mb is R0.09 or 9 cents per mb for all students.


### The learner_application table has these fields: 

`Id,`
`leaner_id,`
`app_id,`
`minutes`

### The application table has these fields:
 
`id,` 
`name,`
`usage_per_minute`











