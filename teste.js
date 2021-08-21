let teste =  '{"nome":"diego", "nas":{"pais":"brasil","estado":"CE"}}'

let string = JSON.parse(teste)
console.log(string.nas.estado)

let api = ''