const router = require("express").Router();
var multer = require('multer')


// to handle uploaded file
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

//

// create a function on the client side that'll break it into an array of []
// "Coffee,33,2,1\nFood,2,2,2,"
// ["Coffee,33,2,1", "Food,2,2,2," ]

function addExpenseToDB(expense) {
  // adds to db
  // call fn inside expenses/add
  // call insided expenses/file (looping through each expense)
}

function formatExpenses(data){
  finalOP=[]

  arr=data.textData.split('\n')
  arr.shift()
  arr.pop()

  arr.forEach(element => {
    x=element.split(',')
    finalOP.push(x)
  });

  // console.log(finalOP)
  return finalOP
}


module.exports = db => {
  router.put("/expenses/add/", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    const { amount, name, type } = request.body;

    db.query(
      `
      INSERT INTO expenses (name, user_id, amount, type, date)
      VALUES
      ($1, 1, $2, $3, current_date)

      `,
      [name, amount, type]
    )
      .then(x => {
        setTimeout(() => {
          response.status(204).json({});
        }, 1000);
      })
      .catch(error => console.log(error));
  });


  router.post('/expenses/file/',function(req, res) {  
    
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
    })

    // console.log(req.body, 'from upload@@!!')

    Promise.all(formatExpenses(req.body).map(element =>{
       return db.query(
        `
        INSERT INTO expenses (name, user_id, amount, type, date)
        VALUES
        ($1, $2, $3, $4, current_date)
  
        `,
        [element[0],element[1], element[2], element[3]]
        //name/userid/amount/type
      )
        
    })).then(x => {
      // console.log(x)
      // setTimeout(() => {
      //   res.status(204).json({});
      // }, 1000);
      res.status(200)
    })
    .catch(error => console.log(error));



  });


  router.get("/expenses/:date", (req, response) => {

    
    date= req.params.date.split('+')
  // console.log(date, 'expenses')
  db.query(
    `
    Select *, to_char( date, 'DD-MON-YYYY') as date from expenses 
    where extract(month from date)=$1 and extract(year from date)=$2;  
    `,
    [date[0], date[1]]
  ).then(({ rows: expenses }) => {
    response.json(expenses);
  });
  
  });

// router.get("/expenses", (request, response) => {
//   db.query(
//     `
//     SELECT * FROM expenses
//   `
//   ).then(({ rows: expenses }) => {
//     response.json(expenses);
//   });
// });

router.get("/expensestotal/:date", (req, response) => {
  date= req.params.date.split('+')
  // console.log(date)

  db.query(
    `
    SELECT type, Sum(amount) FROM expenses 
    where extract(month from date)=$1 and extract(year from date)=$2
    GROUP BY type;
  `,
  [date[0], date[1]]
  ).then(({ rows: totalExpense }) => {
    response.json(totalExpense);
  });
});


  return router;
};
