const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const pool = require('./dbconn')

// 1
/* 
// get 
app.get('/db', async (req, response) => {
    // res.send('Hello World!')
    let res = await pool.query('SELECT * FROM employee')
    console.log(res)
    response.json({info: res})
    

})
*/


// generic function for post or parse the body
//app.use(bodyParser.json())
//app.use(
//  bodyParser.urlencoded({
//       extended: true,
//  })
//)

// 2

// post 
app.post('/db/create', async (req, res) => {
    // res.send('Hello World!')
    let result = await pool.query(`INSERT INTO public.employee (id, name, age, address, salary) VALUES ($1, $2, $3, $4, $5)`,
        [req.body.id, req.body.name, req.body.age, req.body.address, req.body.salary])
    // [2, 'umair', 30, 'azure', 100])
    console.log(result)
    res.end('created')

    res.json({
        "status": "task created"

    })

    task

    res.send(result)
    response.json({info: res})


})


// 3
// put 

/*
    app.put('/db/update', async (req, res) => {
        res.send('Hello World!')
        let result = await pool.query(`UPDATE public.employee SET task=$1 where id =$2`,
            [req.body.age, req.body.id])

        console.log(result)
        res.end('updated')

        res.json({

            "status": "task created"

        })


*/
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

        
/// code umer
/*
const { json } = require('body-parser')
const bodyParser = require('body-parser')
const { response, application } = require('express')
const express = require('express')
const app = express()
const port = 3001
const pool = require('./dbconn')


app.get('/', (request, response) => {
  response.json({info : 'Node.js,Express, and Postgres API'})
})

app.get('/db', async(request, response) => {
    let res = await pool.query('select * from public.todoList')
    console.log(res.rows);
    response.json({info : res.rows})
})


app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  }
  )
)

app.post('/db/create', async(req,res)=> {
  let result = await pool.query('INSERT INTO public.todoList (task,done,description) VALUES($1,$2,$3) ', [req.body.task, req.body.done, req.body.description])
  
  res.send('Created')
})

app.put('/db/update', async(req,res)=> {
  let result = await pool.query('Update public.todoList SET task = $1, done = $2 where id = $3', [req.body.task, req.body.done, req.body.id])
  
  res.send('Updated')
})

app.put('/db/updatedesc', async(req,res)=> {
  let result = await pool.query('Update public.todoList SET description = $1 where id = $2', [req.body.description, req.body.id])
  
  res.send('Updated')
})


app.delete('/db/delete', async(req,res) => {
  let result = await pool.query('delete from public.todolist where task = $1', [req.body.task])
  res.send('Deleted')
})

app.get('/db/pending', async(request,response) => {

  //let allfalse = await pool.query('SELECT count(done), task FROM public.todolist where done = false GROUP BY task ORDER BY COUNT(done) DESC;')
  let sum = await pool.query('select count(nullif(done, false)), count(nullif(done, true)), count(done) from public.todolist')
  let truer = await pool.query('select count(done) from public.todolist where done = true')
  let falser = await pool.query('select count(done) from public.todolist where done = false')

 //response.json({info : allfalse.rows})
  //response.json({info : total.rows})
  response.json({ total: sum.rows, done: truer.rows, pending: falser.rows})

  //var arr = [ sum.rows, truer.rows, falser.rows]

  let string = sum.rows
  let stringt = truer.rows
  let stringthree = falser.rows
  console.log(string)
  console.log(stringt)

  //var arrayLength = arr.length;
  //for (var i = 0; i < arrayLength; i++) {
    //console.log(`${JSON.stringify(arr[i], '', 2)}`);

    //Do something
})

app.get('/db/count', async (req,res)=>{
  let sum = await pool.query(`select count(*) as total,
   count(done) filter (where done = 'true') as Done,
   count(done) filter (where done = 'false') as Pending
   from public.todolist `)
  //res.json({todo: result.rows})
  //res.parse(result.rows)

  response.json({ total: sum.rows})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/