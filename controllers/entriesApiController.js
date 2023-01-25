const entry = require('../models/entries'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}


// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const deleteEntry = async(req,res)=>{
    const deletEntry = req.body;// {title}
    const response = await entry.deleteEntry(deletEntry);
    res.status(201).json({
        'message': `Se ha borrado la entry ${req.body.title} de noticias`,
        'item_deleted':response,
        data: deletEntry

    });
}

const updateEntry = async(req,res)=>{
    const updatEntry =req.body;
    const {title}= req.params.title
    const response = await entry.updateEntry(updatEntry,title);
    res.status(200).json({
        'item_updated':response,
        data:updatEntry
    })
}



module.exports = {
    getEntries,
    createEntry,
    deleteEntry, 
    updateEntry 
}