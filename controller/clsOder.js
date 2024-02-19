const data_model = require('../model/oder')

const order = async(req,res)=>{
    try{
        const { id, product, Brand, price, Quantity } = req.body;
        const newData = new data_model({
            id,
            product,
            Brand,
            price,
            age
        })
        await newData.save();

    }catch (errorbp ){
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'An error occurred while creating data' });

    }
}
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
                    _id: '$Brand', // Group by the Brand field
                    averageAge: { $avg: '$age' } // Calculate the average age for each Brand
                }
            },
            {
                $sort: { averageAge: 1 } // Sort by averageAge in ascending order
            }
        ];

        // Execute the aggregation pipeline
        const aggregatedData = await DataModel.aggregate(pipeline);

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