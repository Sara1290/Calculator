module.exports = {

  sum: async (req, res) => {
    //we're sending a number in so it should be req.body.. there's a body coming in, two integers
 
    let firstINT = parseInt(req.body.firstInt);
    let secondINT = parseInt(req.body.secondInt);

    // let firstInt = 22;
    // let secondInt = 44;

    //add the two integers together
    let result = Number(firstINT + secondINT);
    console.log(result)

    //send back the result
    res.status(200).send(Number(result));
  }

}