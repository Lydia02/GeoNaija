
# GEONAIJA
Locale is an advanced developer tool offering extensive geographical information on Nigeria. Locale, a cutting-edge developer tool, provides developers with precise and up-to-date information on regions, states, and local government areas (L.G.A.s). If you create applications, websites, or services catering to Nigeria's sizable population of over 200 million individuals, Locale is a reliable resource to enhance your projects with precise geographical insights.
Geonaija provides developers with a seamless way to integrate geographical data into their applications and services. By utilizing straightforward API requests, you can retrieve specific details about regions and states, simplifying the process of building location-based functionalities.

# Built With
- TypeScript
- Node.js
- Express
- MongoDB
- Redis

# Table of Contents
- Data Information
- Usage
- Base URL
- Getting Started
    - Prerequisites
    - API installation
    - Testing the server
    - API Endpoints
    - API Usuage
- Conclusion
- Contribution
- Author



## Data Information

Geonaija  includes the following information for each region, state, and LGA:

- **Name**: The name of the region, state, or LGA.
- **Slogan**: A slogan associated with the region, state, or LGA, representing its unique characteristics or identity.
- **Landmass**: The land area covered by the region, state, or LGA, typically measured in square kilometers or square miles.
- **Population**: The total number of inhabitants residing in the region, state, or LGA.
- **Dialect**: The primary language or dialect spoken by the people in the region, state, or LGA.
- **Other Relevant Information**: Additional details that are pertinent to the specific region, state, or LGA, which may include cultural aspects, historical significance, or notable landmarks.

## Usage
Geonaija serves as a valuable resource for various purposes, including:

- Research: The dataset can be used for research purposes, such as analyzing population distribution, studying linguistic diversity, or exploring cultural aspects of different regions.
- Administrative Planning: The data can assist in administrative planning, such as resource allocation, infrastructure development, or electoral processes at the state or LGA level.
- Cultural Studies: Researchers interested in Nigerian culture can utilize this dataset to understand the linguistic diversity and cultural nuances across different regions and states.
- General Information: The dataset provides a comprehensive overview of Nigeria's geographical entities, allowing users to access information about regions, states, and LGAs in a structured manner.

## Base URL
locahost.process.env.PORT || [GeoNaija](https://geonaija.onrender.com/)


## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine. [Install](https://nodejs.org/en/download/)
- MongoDB installed on your local machine. [Install](https://docs.mongodb.com/manual/installation/)
- Redis installed on your local machine. [this link](https://redis.io/docs/getting-started/) for guideline



### API Installation

1. Clone the repository: git clone [here](https://github.com/Lydia02/GeoNaija.git)
2. Install the dependencies: npm install
3. Start the development server: run `npm start` to start the server
4. Configure the environment variables: Create a .env file in the root directory of the project and add the following environment variables. Use the sample.env for reference


### Testing the server 

1. Review API Documentation that provides detailed information about the available endpoints, request parameters, and response formats: Visit our website at [Postman Doc](https://documenter.getpostman.com/view/14148992/2s93z5A59G) 
Read API Documentation here [Swagger Doc](https://geonaija.onrender.com/api-docs) 

### API Endpoints
-------------

The Locale API offers the following endpoints for integrating geographical data:

1. Get Regions: `/regions`

   This endpoint allows you to fetch the data of a specific region or retrieve information about all regions if no region name is provided. You can also include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

2. Get States: `/states`

   Use this endpoint to retrieve the data of a specific state or obtain information about all states if no state name is provided. By setting the `lga` query parameter to `true`, you can include Local Government Areas (LGAs) in the response.

3. Get Local Government: `/lgas`

   This endpoint enables you to fetch the data of a specific Local Government Area (LGA) or retrieve information about all LGAs.


---.

### API Usage

To test the API on your local machine with Swagger, use the following URL:

[here](localhost:3000/api-docs)

The API requires bearer token authorization. Include your API key in the Authorization header as follows:



Here is an example of how to use the API:
### **Signup
- Route /auth/signup
- Method: POST
- Body:
```
{
    "email": "enteryouremail@gmail.com",
    "password": "*****",
    "firstname":"Your First Name",
    "lastname": "Your Last Name",
    "retype_password": "*****"
}
```
- Response
```
{
    "message": "Signup successful. Welcome",
    "user": {
        "email": "your@gmail11.com",
        "firstname": "Joe",
        "lastname": "Thomas"
    },
    "API_key": "YOUR_API_KEY"
}
```
##Get State with LGA

**Request:**
- Route /location/state?state_name=oyo&lga=afijio
- Method: GET
- Header: Authorization: your_api_key
**Response**
```
{
    "states": [
        {
            "_id": "64937d9fca300c346a4fc846",
            "state": "Oyo",
            "capital": "Ibadan",
            "region": "Southwest",
            "slogan": "Pace Setter",
            "senatorial_districts": [
                "Oyo Central",
                "Oyo North",
                "Oyo South"
            ],
            "landmass": "28,454 km2 (10,986 sq mi)",
            "population": "5,580,894",
            "dialect": "Ibadan",
            "latitude": "7.2500",
            "longitude": "5.2000",
            "created_date": "1976-02-02T22:00:00.000Z",
            "borders": [
                "Ogun",
                "Osun",
                "Kwara",
                "Ogun",
                "Osun",
                "Kwara"
            ],
            "known_for": [
                "Ibadan",
                "Ibadan"
            ]
        }
    ]
}
```
##Get Region with LGA

**Request:**
- Route //location/region?region_name=southsouth&lga=tai
- Method: GET
- Header: Authorization: your_api_key
**Response**
```
{
    "regions": [
        {
            "_id": "64937d9fca300c346a4fc82a",
            "state": "Akwa Ibom",
            "capital": "Uyo",
            "region": "Southsouth",
            "slogan": "Land of Promise",
            "senatorial_districts": [
                "Akwa Ibom North East",
                "Akwa Ibom North West",
                "Akwa Ibom South"
            ],
            "landmass": "7,081 km2 (2,735 sq mi)",
            "population": "5,450,758",
            "dialect": "Ibibio",
            "latitude": "4.9833",
            "longitude": "7.9167",
            "created_date": "1987-09-22T22:00:00.000Z",
            "borders": [
                "Cross River",
                "Abia",
                "Rivers",
                "Bayelsa"
            ],
            "known_for": [
                "Bridge of No Return, Ikot Abasi",
                "Amalgamtion House",
                "Ibibio Museu and State Park",
                "National Museum of Colonial History"
            ]
        },
        {
            "_id": "64937d9fca300c346a4fc848",
            "state": "Rivers",
            "capital": "Port Harcourt",
            "region": "Southsouth",
            "slogan": "Treasure Base of the Nation",
            "senatorial_districts": [
                "Rivers East",
                "Rivers South East",
                "Rivers West"
            ],
            "landmass": "11,077 km2 (4,276 sq mi)",
            "population": "5,198,716",
            "dialect": "Port Harcourt",
            "latitude": "7.2500",
            "longitude": "5.2000",
            "created_date": "1967-05-26T22:00:00.000Z",
            "borders": [
                "Abia",
                "Akwa Ibom",
                "Bayelsa",
                "Imo",
                "Abia",
                "Akwa Ibom",
                "Bayelsa",
                "Imo"
            ],
            "known_for": [
                "Port Harcourt",
                "Port Harcourt"
            ]
        },
        {
            "_id": "64937d9fca300c346a4fc82f",
            "state": "Bayelsa",
            "capital": "Yenagoa",
            "region": "Southsouth",
            "slogan": "Glory of all Lands",
            "senatorial_districts": [
                "Bayelsa Central",
                "Bayelsa East",
                "Bayelsa West"
            ],
            "landmass": "10,773 km2 (4,158 sq mi)",
            "population": "1,704,515",
            "dialect": "Ijaw",
            "latitude": "4.9267",
            "longitude": "6.2676",
            "created_date": "1996-09-30T22:00:00.000Z",
            "borders": [
                "Rivers",
                "Delta"
            ],
            "known_for": [
                "The Ox-Bow Lake, Yenagoa",
                "Oloibiri Oil Museum, Oloibiri",
                "Isaac Boro Garden Park, Yenagoa",
                "Peace Park, Yenagoa",
                "Akassa Wildlife Forest, Akassa",
                "Ogboinbiri Oil Well, Ogboinbiri"
            ]
        }
    ]
}
```
##Get Region with state

**Request:**
- Route /location/region?region_name=southsouth&state=rivers
- Method: GET
- Header: Authorization: your_api_key
**Response*

```
{
    "regions": [
        {
            "_id": "64937d9fca300c346a4fc82a",
            "state": "Akwa Ibom",
            "capital": "Uyo",
            "region": "Southsouth",
            "slogan": "Land of Promise",
            "senatorial_districts": [
                "Akwa Ibom North East",
                "Akwa Ibom North West",
                "Akwa Ibom South"
            ],
            "landmass": "7,081 km2 (2,735 sq mi)",
            "population": "5,450,758",
            "dialect": "Ibibio",
            "latitude": "4.9833",
            "longitude": "7.9167",
            "created_date": "1987-09-22T22:00:00.000Z",
            "borders": [
                "Cross River",
                "Abia",
                "Rivers",
                "Bayelsa"
            ],
            "known_for": [
                "Bridge of No Return, Ikot Abasi",
                "Amalgamtion House",
                "Ibibio Museu and State Park",
                "National Museum of Colonial History"
            ]
        },
        {
            "_id": "64937d9fca300c346a4fc848",
            "state": "Rivers",
            "capital": "Port Harcourt",
            "region": "Southsouth",
            "slogan": "Treasure Base of the Nation",
            "senatorial_districts": [
                "Rivers East",
                "Rivers South East",
                "Rivers West"
            ],
            "landmass": "11,077 km2 (4,276 sq mi)",
            "population": "5,198,716",
            "dialect": "Port Harcourt",
            "latitude": "7.2500",
            "longitude": "5.2000",
            "created_date": "1967-05-26T22:00:00.000Z",
            "borders": [
                "Abia",
                "Akwa Ibom",
                "Bayelsa",
                "Imo",
                "Abia",
                "Akwa Ibom",
                "Bayelsa",
                "Imo"
            ],
            "known_for": [
                "Port Harcourt",
                "Port Harcourt"
            ]
        },
        {
            "_id": "64937d9fca300c346a4fc82f",
            "state": "Bayelsa",
            "capital": "Yenagoa",
            "region": "Southsouth",
            "slogan": "Glory of all Lands",
            "senatorial_districts": [
                "Bayelsa Central",
                "Bayelsa East",
                "Bayelsa West"
            ],
            "landmass": "10,773 km2 (4,158 sq mi)",
            "population": "1,704,515",
            "dialect": "Ijaw",
            "latitude": "4.9267",
            "longitude": "6.2676",
            "created_date": "1996-09-30T22:00:00.000Z",
            "borders": [
                "Rivers",
                "Delta"
            ],
            "known_for": [
                "The Ox-Bow Lake, Yenagoa",
                "Oloibiri Oil Museum, Oloibiri",
                "Isaac Boro Garden Park, Yenagoa",
                "Peace Park, Yenagoa",
                "Akassa Wildlife Forest, Akassa",
                "Ogboinbiri Oil Well, Ogboinbiri"
            ]
        }
    ]
}
```


## Conclusion
In conclusion, the Locale API provides developers with seamless access to accurate and up-to-date geographical information about Nigeria's regions, states, and Local Government Areas (LGAs), simplifying the development of location-based functionalities for businesses targeting Nigeria's diverse population. By integrating the Locale API, developers can leverage comprehensive data to create customized solutions that cater to specific regions, states, and LGAs, whether it's mapping applications, location-based services, or geographical analysis. With the power of Locale, developers can unlock new possibilities and deliver enhanced experiences to users by incorporating precise geographical data into their applications and services. For assistance and seamless integration of the Locale API, reach out to our support team at [email protected], and start leveraging the full potential of accurate and comprehensive geographical data for Nigeria's regions, states, and LGAs.



## Contribution
If you would like to contribute to this project, please feel free to fork the repository, create a feature branch, and open a Pull Request!

---

## Author
[Lydia Ojoawo](https://github.com/Lydia02)