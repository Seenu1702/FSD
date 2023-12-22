const express = require('express')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const { format } = require('date-fns')

const app = express();
const PORT = process.env.PORT || 8000



app.get('/', (req, res) => {
    res.status(200).send(`<h1>NodeJs - DAY: 1 Task</h1>`)
})


app.get('/create', (req, res) => {
    const fileName = `${format(new Date(), 'ddMMyyyy_HHmmss')}`
    const DateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm:ss')}`
    console.log(DateTime)
    fs.writeFile(path.join(__dirname, 'Output_Files', fileName), DateTime, (err, data) => {
        if (err) console.log("Error:", err)
        else res.status(200).send(`New File has been created \n FILE NAME: ${fileName}`)
    })
})

app.get('/readFolder', (req, res) => {
    fs.readdir('output_files', (err, files) => {
        if (err) console.log("Error:", err)
        else {
            let fileList = []
            files.forEach(file => {
                fileList.push(file)
            });
            res.send(`Available Files: ${fileList.length},
            File Names:  ${fileList.join(',')}`)
        }
    });
})


app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`)
})

