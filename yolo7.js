let hp = 10

switch (hp) {
    case 100:
        console.log('You are full hp');
        break;
    case 80:
        console.log('You are 80 hp');
        break;
    case 60:
        console.log('You are 60 hp');
        break;
    case 40:
        console.log('You are 40 hp');
        break;
    case 20,10: 
        console.log('You are about to die');
        break;
    case 0:
        console.log('You are dead');
        break;
    default:
        console.log('Invalid hp');
        break;
}