// Imports
const express = require('express')
const app = express()
require('dotenv').config()

// ===== ROUTES =====

// ===== PORT =====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))