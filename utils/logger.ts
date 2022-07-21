const Log = ({ type, content }: {type: string, content: string}): void =>{
    switch(type){
        case "info":
            console.log(content);
            break;
        case "error":
            console.log(content);
            break;
    }
}

export { Log };