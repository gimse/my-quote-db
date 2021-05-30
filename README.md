# My Quote Db
I offline program that contains a quote database from [Kaggle](https://www.kaggle.com/akmittal/quotes-dataset). Example data:
```json
{
    "Quote": "Don't cry because it's over, smile because it happened.",
    "Author": "Dr. Seuss",
    "Tags": [
      "attributed-no-source",
      "cry",
      "crying",
      "experience",
      "happiness",
      "joy",
      "life",
      "misattributed-dr-seuss",
      "optimism",
      "sadness",
      "smile",
      "smiling "
    ],
    "Popularity": 0.15566615566615566,
    "Category": "life"
}
```
## Setup (Locally)
- ``git clone ...``
- ``cd my-quote-db``
- Install [npm](https://nodejs.org/en/download/)
- ``npm install``
- ``npm install.js``or ``node index.js``

## Setup Docker (Locally)
- Install [Docker](https://www.docker.com/products/docker-desktop)
- ``build -t my-quote-db . ``
- ``run -p 43444:43444 my-quote-db``
- Test: http://0.0.0.0:43444/api/v1/random_quote?category=life 
## Exmaple calls
http://localhost:43444/api/v1/random_quote?category=life
```json
{"Quote":"In everyone's life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being. We should all be thankful for those people who rekindle the inner spirit.","Author":"Albert Schweitzer","Popularity":0.000153000153000153,"Category":"life"}
```
http://localhost:43444/api/v1/categories
```json
["life","happiness","love","truth","inspiration","humor","philosophy","science","","soul","books","wisdom","knowledge","education","poetry","hope","friendship","writing","religion","death","romance","success","arts","relationship","motivation","faith","mind","god","funny","quotes","positive","purpose"]
```
http://localhost:43444/api/v1/random_quote?category=life&max_length=40
```json
{"Quote":"Beware the barrenness of a busy life.","Author":"Socrates","Popularity":0.01150901150901151,"Category":"life"}
```
## Packages
- ``npm install express --save``
- ``npm install --save random``
- ``npm install nodemon --save``