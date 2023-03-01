let countryDelivery = prompt("В яку країну відправити доставку ?")
countryDelivery = countryDelivery.toUpperCase()

let message
switch (countryDelivery) {
    case "КИТАЙ":
        message = "Китай - 100 кредитів"
        
        break;
    case "ЧИЛІ":
        message = "Чилі - 250 кредитів"
        
        break;
    case "АВСТРАЛІЯ":
        message = "Австралія - 170 кредитів"
        
        break;
    case "ІНДІЯ":
        message = "Індія - 80 кредитів"
        
        break;
    case "ЯМАЙКА":
        message = "Ямайка - 120 кредитів"
        
        break;    
    
    default:
        message = "В вашу країну немає доставки "
        
      
}
alert(`${message}`)

