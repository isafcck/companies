async function throttePromises(funcs,Max){
    if(!funcs.length) return Promise.resolve();
    const result=[];
    while(funcs.length){
    results.push(...await Promise.all(function.splice(0,Max).map(fun => fun())))
    }
    }