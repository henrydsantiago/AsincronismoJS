const hacerAlgoAsincrono = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? resolve('Haciendo algo asíncrono')
            : reject(new Error('Hubo un error'))
    })
}

const hacerAlgo = async() => {
    const algo = await hacerAlgoAsincrono()
    console.log(algo)
}

console.log('Antes')
hacerAlgo()
console.log('Despues')

const otraFuncion = async () => {
    try {
        setTimeout(()=>{
            console.log('Esto es del Timeout')
        },0)
        const algo = await hacerAlgoAsincrono()
        console.log(algo)
        console.log('Esto debe ser lo útimo')
    } catch (error) {
        console.error(error)
    }
}

console.log('Antes 2')
otraFuncion()
console.log('Despues 2')
