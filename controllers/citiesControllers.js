const Cities = require("../models/cities.js");

const citiesController = {
  obtenerCities: async (req, res) => {
    let cities;
    let error = null;

    try {
      cities = await Cities.find();
    } catch (err) {
      error = err;
      console.log(err);
    }
    res.json({
      response: error ? "ERROR" : { cities },
      success: error ? false : true,
      error: error,
    });
  },
  cargarCities: async (req, res) => {
    console.log(req.body);
    const [name, description, img] = req.body.dataInput;
    new Cities({
      name: name,
      description: description,
      img: img,
    })
      .save()
      .then((respuesta) => res.json({ respuesta }));
  },
  borrarCities: async (req, res) => {
    const id = req.params.id;
    await Cities.findOneAndDelete({ _id: id });
  },
  modificarCities: async (req, res) => {
    const id = req.params.id;
    const city = req.body.dataInput;
    let citym = await Cities.findOneAndUpdate({ _id: id }, city, { new: true });
    console.log(citym);
  },
  getOneCity: async (req, res) => {
    const id = req.params.id;
    let city;
    let error = null;

    try {
      city = await Cities.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : city,
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = citiesController;
