const spy =()  => 'callback';

const receivesAFunction = (spy) => spy()

const returnsANamedFunction = () => (function logger(){
    return 'This is  Peters function';});


const returnsAnAnonymousFunction = () => (()=>{
    return 'This is another function';})

