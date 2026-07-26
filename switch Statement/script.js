let num=Number(prompt("Enter any number to select a days in a week"));
switch(num){
    case 1:
        document.write("Today is sunday");
        break;
        case 2:
            document.write("Today is Monday");
            break;
            case 3:
                document.write("Today is Tuesday");
                break;
                case 4:
                    document.write("Today is Wednesday");
                    break;
                    case 5:
                        document.write("Today is Thursday");
                        break;
                        case 6:
                            document.write("Today is is Friday");
                            break;
                            case 7:
                                document.write("Today is saturday");
                                break;
                            default:
                                document.write("Invalid choice please choose the number between (1-7)");
}