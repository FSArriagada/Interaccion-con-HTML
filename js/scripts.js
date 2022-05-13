class Telefono{
    constructor(id,marca, modelo, precio){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
}   

class Carro {
    constructor(total){
        this.telefonos = []
        this.total = total
    }
    agregarAlCarro (celular){
        this.telefonos.push(celular)
        this.total += celular.precio
    }
    
    MostrarCarro(){
        this.telefonos.forEach(listado => {
            console.log(listado);
        });
    }
    MostrarTotal(){
        console.log(`Total: ${this.total}`)
    }
}

const celular1 = new Telefono("1","Samsung","A32",41999)
const celular2 = new Telefono("2","Samsung","A52",52999)
const celular3 = new Telefono("3","Samsung","A72",64999)
const celular4 = new Telefono("4","Apple","iPhone SE",109999)
const celular5 = new Telefono("5","Apple","iPhone 11",142999)
const celular6 = new Telefono("6","Apple","iPhone 12",189999)
const celular7 = new Telefono("7","Xiaomi","Redmi Note 10",59999)
const celular8 = new Telefono("8","Xiaomi","Redmi Note 11",66999)
const celular9 = new Telefono("9","Xiaomi","Poco M3",69999)
const carro = new Carro(0);


let celulares = [celular1,celular2,celular3,celular4,celular5,celular6,celular7,celular8,celular9]

let divCelulares = document.getElementById('divCelulares')

celulares.forEach(celular => {
    divCelulares.innerHTML += `
        <div class="card mb-4" id="Celular${celular.id}" style="width: 18rem;">
            <img src="/img/Celular${celular.id}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${celular.marca} ${celular.modelo}</h5>
                <p class="card-text">$ ${celular.precio}</p>
                <button id="boton${celular.id}" class="btn btn-success">Comprar</button>
            </div>
        </div>`
})

boton1.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular1)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton2.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular2)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton3.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular3)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton4.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular4)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton5.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular5)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton6.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular6)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton7.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular7)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton8.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular8)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton9.addEventListener('click', ()=> {
    carro.agregarAlCarro(celular9)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})



