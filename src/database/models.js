var db = require('./index.js')

module.exports = {
	todos : {
		addToDo: (payload) => {
			console.log('is this payload what we think it is?', payload)
			queryString = `INSERT INTO todos(text, userid) VALUES('${payload.text}', ${payload.user});`
			console.log(queryString, typeof queryString)
			db.query(queryString , (err, results) => {
				if (err) throw err;
				else console.log('added Todo', results)
			})
		}
	}

}