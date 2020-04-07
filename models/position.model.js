

const cassandra = require('cassandra-driver');

const Uuid = require("cassandra-driver").types.Uuid;
const TimeUuid = require("cassandra-driver").types.TimeUuid;

const client = new cassandra.Client({
	contactPoints: ['127.0.0.1:9042'],
	localDataCenter: 'datacenter1',
	keyspace: 'covid'
});





class GestionPositions {

	static async register(data) {



		const query = `
		INSERT INTO positionsusager (codePosition, dateEnregistrement, codeUsagerPos, longitude, latitude,)
		VALUES (?, ?, ?, ?, ?)
		`;




		var codePosition = Uuid.random()



		var params = [codePosition, data.date_register, data.codeUsager, data.longitude, data.latitute]



		try {

			client.execute(
				query,
				params,
				{ prepare: true }
			)
				.then( result => console.log("Enregistrement réussi") );


		} catch (error) {

			console.error("une erreur est survenue : ", error);

		}

	}


}

module.exports = GestionPositions;