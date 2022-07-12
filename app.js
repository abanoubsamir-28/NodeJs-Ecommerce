const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const __projectPath = require('./utils/path')
const products = []
// make public folder to be accessed 
app.use(express.static(path.join(__projectPath , 'public')))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/add-product' , (req,res,next)=>{
    res.send(form)
    res.end()
})
app.post('/add-product' , (req,res,next)=>{
    products.push(req.body.product)
    res.redirect('/')
})


app.get('/' , (req,res,next)=>{
    if(products.length!==0 ) {
        res.send(listProducrs(products))
    } else {
        res.write('<h1>No Products yet</h1>')
    }
    res.end()
})

app.listen(9000)





const form = `
<form action='/add-product' method="POST">

<input type="text" name="product">
<button type="submit"> send product</button>

</form>

`

function listProducrs(list) {
    return `
      <div>
        ${list.map((elem, i) => `
        <h1>
          ${elem}
        </h1>
      `).join('')}
      </div>
    `;
  }