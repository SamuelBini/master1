

const cassandra = require('cassandra-driver');

const Uuid = require("cassandra-driver").types.Uuid;
const TimeUuid = require("cassandra-driver").types.TimeUuid;

const client = new cassandra.Client({
	contactPoints: ['127.0.0.1:9042'],
	localDataCenter: 'datacenter1',
	keyspace: 'covid'
});





class GestionUsagers {





	static async getCodeByTelephoneAndApi(telephone, api_key) {

		const query = `
		SELECT codeusager FROM usagers WHERE telephone = ? AND api_key = ? ALLOW FILTERING;
		`;


		var params = [ telephone, api_key ]

		const queryResult = await client.execute(
			query,
			params,
			{ prepare: true }
		);


		console.log(queryResult.rows)


		if (queryResult.rowLength == 0) {
			let result = {
				status : 0
			}
			return result
		}
		else {
			let result = {
				status : 1,
				codeindividu : queryResult.first().codeusager
			}

			return result
		}



	}






}



module.exports = GestionUsagers;