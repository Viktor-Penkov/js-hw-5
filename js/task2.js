let mood = prompt("Який у Вас настрій ? щасливий, сумний, злий,") ;

let mas 
switch (mood) {
    case "щасливий":
        mas = "🤗"
        
        break;

    case "сумний":
        mas ="😪" 
        
        
    break;
    case "злий":
        mas ="👿" 
        
        
    break;
        

    default:
        alert(`Я не можу зрозуміти Ваш настрій та підібрати емодзі`)
    
        
}
alert(`${mas}`);