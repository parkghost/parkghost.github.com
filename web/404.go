package web

import (
	"fmt"
	"net/http"
)

func init() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, page404)
	})
}

var page404 = `
<html>
<head>
	<title>404 file not found</title>
</head>
<body>
	<pre>
        _    _     ___     _    _        _       _
       |:|  |:|   /:::\   |:|  |:|      |_ | |  |_
       |:|  |:|  /:/'\:\  |:|  |:|      |  | |_ |_
       |:|__|:| |:|   |:| |:|__|:|           _  ___
       |::::::| |:|   |:| |::::::|     |\ | / \  |
       '""""|:| |:|   |:| '""""|:|     | \| \_/  |
            |:| |:|   |:|      |:|   _  _            _
            |:| |:\   |:|      |:|  |_ / \ | | |\ | | \
            |:|  \:\_/:/       |:|  |  \_/ \_/ | \| |_/
            |:|   \:::/        |:|
            '"'    '"'         '"'
	</pre>
</body>
</html>
`
