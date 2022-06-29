const { readFileSync } = require("fs");

const callback = (err, data) => {

    if (err) throw new Error(err);
    else return data;
}

const readCSV = async () => {

    try {
        const data = readFileSync('iris.csv', 'utf8');
        return callback(null, data);
    } catch (err) {
        return callback(err, null);
    }
}

readCSV()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
