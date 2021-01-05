const plantItem = require('./plantItemModel');

function readPlantItems(req, res, options=[]){
    const {id, yearAdded, itemdescription} = req.query;
    let filter = {};
    if(id){
        filter.title={$regex: '[A-Z]\\d\\d\\d[A-Z]', $options: 'i' };
    }
    if(yearAdded){
        filter.yearAdded = yearAdded
    }
    if(itemdescription){
        filter.itemdescription = itemdescription
    }

    plantItem.find(filter)
        .then((result) => {
            res.json(result)
        })
        .catch((error) =>
            res.status(500).json({ error: 'An error' + error }))


}


function readPlantItem(req, res) {
    const id = req.params.id;
    plantItem.findById(id)
        .then((result) => {
            console.log('result' + result.uri);

            res.json(result)
        })
        .catch((error) =>
            res.status(404).json({ error: 'not found' }))
}


function createPlantItem(req, res) {
    let plantItem1 = new plantItem(req.body);
    plantItem1.save()
        .then((result) => {
            console.log('Plant Item Saved');
            res.location(result.uri)
                .status(201)
                .json({ id: result._id, uri: result.uri })
        })
        .catch((error) => {
            res.status(412).json({ status: 'fail', message: 'not created' + error })
        });
    console.log('Promising to save');
}

function updatePlantItem(req, res) {
    const id = req.params.id;

    console.log('updating plant item' + id)

    plantItem.findByIdAndUpdate({_id: id}, {...req.body}).
    then((result) => {
        if (result) {
            res.status(200).send({ message: 'updated' })
        }
        else {
            res.status(404).send({ message: 'not found' })
        }
    })
        .catch((error) =>
            res.status(404).send({ message: 'not found' + error }));

}

function deletePlantItem(req, res) {
    const id = req.params.id;

    plantItem.findByIdAndDelete(id).
    then((result) => {
        if (result) {
            res.status(203).send({ message: 'deleted' })
        }
        else {
            res.status(404).send({ message: 'not found' })
        }
    })
        .catch((error) =>
            res.status(404).send({ message: 'not found' + error }));
}

//export default {readPlantItems, createPlantItem, updatePlantItem, readPlantItem, deletePlantItem}

module.exports = {
    readPlantItem,
    readPlantItems,
    createPlantItem,
    updatePlantItem,
    deletePlantItem
}