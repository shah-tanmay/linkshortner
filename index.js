const express = require("express")
const app = express()
app.use(require('cors')())
const connection = require('./config/db.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json({
    extended: false
})) 
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))