const data_model = require('../model/oder')

const order = async (req, res) => {
    try {
        const { id, product, Brand, price, Quantity } = req.body;
        const newData = new data_model({
            id,
            product,
            Brand,
            price,
            Quantity
        });

        // Use a different variable name for the result of newData.save()
        const savedData = await newData.save();

        // Return the savedData in the response instead of reusing res
        return res.status(200).json(savedData);
    } catch (error) {
        console.error('Error creating data:', error);
        return res.status(500).json({ error: 'An error occurred while creating data' });
    }
};

 const showOder = async (req,res) =>{
    try{
        const allData = await order.find();
        res.satus(200).json(allData);


    }catch (error) {
        res.satus(500).json({messaage: error.messaage});

    }
 }


// Define a route handler for the aggregation endpoint
const aggreApi = async (req, res) => {
    try {
        // Define the aggregation pipeline
        const pipeline = [
            {
                $group: {
                    _id: "$Brand",
                    totalQuantity: { $sum: "$Quantity" },
                    totalPrice: { $sum: "$price" },
                },
            },
            {
                $sort: { averageAge: 1 } // Sort by averageAge in ascending order
            }
        ];

        // Execute the aggregation pipeline
        const aggregatedData = await data_model.aggregate(pipeline);

        // Send the aggregated results as a response
        res.json(aggregatedData);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Error aggregating data', error: error.message });
    }
};


 module.exports={
    order,
    showOder,
    aggreApi
 }