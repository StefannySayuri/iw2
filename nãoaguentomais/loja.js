function produtos(prod){
    let n = parseInt(prod)

    switch(n){
        case 1: let prec1 = parseFloat(document.querySelect("#preco1").value)
                let qtd1 = parseInt(document.querySelect("#qtd1").value)
                let total1 = prec1 * qtd1
                alert(n)
        break
        case 2: let prec2 = parseFloat(document.querySelect("#preco2").value)
                let qtd2 = parseInt(document.querySelect("#qtd2").value)
                let total2 = prec2 * 2
                alert(n)
        break
        case 3: let prec3 = parseFloat(document.querySelect("#preco3").value)
                let qtd3 = parseInt(document.querySelect("#3").value)
                let total3 = prec2 * 2
                alert(n)
    }

    
}