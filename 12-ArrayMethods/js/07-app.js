const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre','Octubre'];

const meses3 = ['Noviembre','Diciembre'];

const meses4= meses.concat(meses2,meses3,'Otro Mes')
console.table(meses4)

// spread operator
const mesesAlo = [...meses,...meses2,...meses3,'Otro Mes']

console.table(mesesAlo)


