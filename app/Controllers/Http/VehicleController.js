'use strict'

const Vehicle = use('App/Models/Vehicle');


class VehicleController {
  async registerVehicle ({ auth, request, response }) {
    const { placa, modelo, marca, color } = request.all()
    const user = await auth.getUser();

    // Register Vehicle
    const vehicle = new Vehicle()
    vehicle.placa = placa
    vehicle.modelo = modelo
    vehicle.marca = marca
    vehicle.color = color
    vehicle.owner = user.id
    await vehicle.save()

    return response.json(vehicle);
  }

  async getVehicles ({ auth, response }) {
    const user = await auth.getUser();

    const vehicles = 
      await Vehicle.query()
        .where('owner', '=', user.id)
        .fetch()

    return response.json(vehicles);
  }

  async getVehicle ({ auth, params, response }) {
    const id = params.id
    const user = await auth.getUser();
    const vehicle =  
      await Vehicle.query()
        .where('owner', '=', user.id)
        .andWhere('id', '=', id)
        .first()
    return response.json(vehicle);
  }
  
  async updateVehicle ({ auth, params, request,response }) {
    const { placa, modelo, marca, color } = request.all()
    const vehicle_id = params.id
    const user = await auth.getUser();
    const vehicle =  
      await Vehicle.query()
        .where('owner', '=', user.id)
        .andWhere('id', '=', vehicle_id)
        .first()
    console.log(vehicle)
    vehicle.placa = placa
    vehicle.modelo = modelo
    vehicle.marca = marca
    vehicle.color = color
    vehicle.owner = user.id
    await vehicle.save()
    return response.json(vehicle);
  }

  async deleteVehicle ({ auth, params, response }) {
    const id = params.id

    const user = await auth.getUser();

    const vehicle =  
      await Vehicle.query()
        .where('owner', '=', user.id)
        .andWhere('id', '=', id)
        .delete()

    return response.json(vehicle);
  }
}

module.exports = VehicleController
