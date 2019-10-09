# Instructions
Run the following commands to import this sample movie data:

```bash
cd imports
mongoimport --db=movies --collection=movies ./movies.json
mongoimport --db=movies --collection=people ./people.json
```