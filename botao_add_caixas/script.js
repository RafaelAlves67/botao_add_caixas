let botao = document.querySelector('#btn')
let input = document.querySelector('#texto')
let botao2 = document.querySelector('#btn2')


botao.addEventListener('click', () => {
        for(let i = 0; i < input.value; i++){
       let div = document.createElement('section')
        div.classList.add('caixa')
        document.querySelector('section').appendChild(div)
        input.focus()
        }
        input.value = ''
})

botao2.addEventListener('click', () => {   
        document.querySelector('section').innerHTML = ''

        if(input.value !== ''){
                input.value = ''
                input.focus()
        }
})

