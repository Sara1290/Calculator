module.exports = {

  sum: async (req, res) => {
    //we're sending a number in so it should be req.body.. there's a body coming in, two integers
 
    let firstINT = parseInt(req.body.firstINT);
    let secondINT = parseInt(req.body.secondINT);

    //add the two integers together
    let solution = Number(firstINT + secondINT);
    console.log(result)

    //send back the result
    res.status(200).send(Number(solution));
  }

}