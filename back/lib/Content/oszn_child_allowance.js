const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_oszn_child_allowance:

    function () {

		return path.join (__dirname, '..', 'Static/oszn_child_allowance_root.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_oszn_child_allowance:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_oszn_child_allowance:

    function () {

//    	const {rq: {data}} = this
    
    	return {
  "OsznChildAllowanceResponse": {
    "recipient": {
      "lastName": "a",
      "firstName": "a",
      "birthDate": "1957-08-13",
      "snils": "12345678901",
      "documentTypeCode": "21",
      "documentSeriesAndNumber": "1234 123456"
    },
    "child": {
      "lastName": "a",
      "firstName": "a",
      "birthDate": "1957-08-13",
      "documentSeries": "1234",
      "documentNumber": "123456"
    },
    "periodStart": "2017-01-01",
    "periodEnd": "2017-06-01",
    "received": "true",
    "months": "6"
  }
}

    },
        
}