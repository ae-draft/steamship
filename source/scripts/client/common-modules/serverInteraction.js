var Request = {
	host: "http://localhost:1337",
	send: function (url, data, options) {
    let requestDefaults = {
  		method: "POST",
  		async: true,
  		dataType: "json",
  		contentType: "application/json",
  		scriptCharset: "UTF8",
  		cache: true,
  		processData: true
  	};

		options = _.assign(requestDefaults, options, {url: this.host + url, data: data});
		return $.ajax(options);
	}
}

module.exports = Request;
