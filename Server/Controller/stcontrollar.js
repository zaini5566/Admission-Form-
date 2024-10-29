import Student from "../Model/stmodel.js"; 

export const create = async (req, res) =>{
    try{
       const stdata = new Student(req.body)
       if(!stdata){
        return res.status(404).json({msg:"Student not found"})
       }
       const saveData = await stdata.save(); 
       res.status(200).json(saveData); 
    }
    catch (error){
          res.status(500).json({error:error})
    }
}


export const getAll = async (req, res) =>{
    try{
       const stdata = await Student.find(); 
       if(!stdata){
        return res.status(404).json({msg:"Student not fount"}),
        console.log("Db COnnected")
       }
       res.status(200).json(stdata);
    } catch (error){
        res.status(500).json({error: error}); 
        console.log("Db Not Conected")
    }
}

export const getOne = async (req, res) =>{
    const id = req.params.id
    try{
       const stdata = await Student.findById(id); 
       if(!stdata){
        return res.status(404).json({msg:"Student not fount"})
       }
       res.status(200).json(stdata);
    } catch (error){
        res.status(500).json({error: error}); 
    }
}