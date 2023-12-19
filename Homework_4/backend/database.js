const Pool = require('pg').Pool;
const fs = require('fs');

const pool = new Pool({
    user: "postgres",
    password: "",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async (query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );
    CREATE TABLE IF NOT EXISTS "posts" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        content VARCHAR(2000) NOT NULL,
        date VARCHAR(200) NOT NULL
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Tables "users" and "posts" created');

        const jsonFile = 'posts.json';

        fs.readFile(jsonFile, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading JSON file: ${err}`);
                return;
            }
        
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        
            // Assuming the JSON data is an array of objects
            try {
                jsonData.forEach((obj) => {
                    const query = {
                        text: 'INSERT INTO posts (content, date) VALUES ($1, $2)',
                        values: [obj.content, obj.date],
                    };
        
                    pool.query(query)
                        .then(() => console.log('Inserted a row into the table'))
                        .catch((err) => console.error(`Error inserting row: ${err}`));
                });
            } catch (error) {
                console.error(error.stack);
            }
        });

    }
});

module.exports = pool;

/*
const jsonFile = 'posts.json';

fs.readFile(jsonFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading JSON file: ${err}`);
        return;
    }

    const jsonData = JSON.parse(data);
    console.log(jsonData);

    // Assuming the JSON data is an array of objects
    try {
        jsonData.forEach((obj) => {
            const query = {
                text: 'INSERT INTO posts (content, date) VALUES ($1, $2)',
                values: [obj.content, obj.date],
            };

            pool.query(query)
                .then(() => console.log('Inserted a row into the table'))
                .catch((err) => console.error(`Error inserting row: ${err}`));
        });
    } catch (error) {
        console.error(error.stack);
    }
});*/