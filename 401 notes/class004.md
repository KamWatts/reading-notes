# Data Modeling

## NoSQL vs. SQL

The best type of database for an intensive query environment would have to be a NoSQL database. This type of database is non-relational and the inputs are not reliant on other sets of data. This makes the flow in which you h=keep track of data more flexible, and less structured.

For hierarchal data storage, an SQL database would be a better fit. Hierarchal means there is some type of structured dependency involved and this is what SQL databases are good for due to the type of organization the data has to be in.

SQL databases are vertically scalable and NoSQL databases are horizontally scaled. Horizontal scaling means to add more machines (servers) also known as 'scaling out'. Vertical scaling refers to adding more power (RAM, CPU) also known as 'scaling up'.

SQL databases sync well with multiple-row transactions. NoSQL databases are paired well with unstructured data. Based on the unscructured datasets of NoSQL databases, and the fact that it scaled upwards means that NoSQL databases are more scalable than an SQL database.

## SQL Modeling Techniques

In data tables, there exists a phenomenon with `one-to-many` relationships. This refers to the fact of an entry in a data table being directly related to another entry. A good example of this can be a class roster. A roster of students that are related to a databases of classes and the database of classes are embedded into a database of schools, and the schools are embedded into a database of school districts...and so on.

It can be very beneficial to create a diagram when conducting a relational database. This gives a visual overview of the data model will be structured.

Two important diagrams to keep track of are primary keys and foreign keys. A foreign key is a set of values that match with the primary key of another table. 

Primary keys are general terms for any set of valyes that are unique on the table it exists and are not accessible to other tables.