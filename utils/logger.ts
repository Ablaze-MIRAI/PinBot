const Log = ({ type, content }: {type: string, content: string}): void =>{
    switch(type){
        case "info":
            console.log(`[INFO] ${content}`);
            break;
        case "error":
            console.log(`[ERROR] ${content}`);
            break;
    }
}

export { Log };