(function(){
    const methods = document.querySelector(".methods");
    const numsList = document.querySelector(".nums-list");
    const result = document.querySelector(".result");
    const showNumsList = () =>{
        let data = numsList.value.split(" "),
            dataForOutput = "",
            negNums = [],
            newData = [];
        if(methods.value){
            if(methods.value == "forEach"){
                data.forEach((currentNum, index) => {
                    dataForOutput += `#${index}: <strong>${currentNum}</strong>; `
                    

                });
            }
            else if(methods.value == "filter"){
                negNums = data.filter((currentNum) =>{
                    return currentNum < 0;
                });
                dataForOutput = negNums.join(", ");
            }
            else if(methods.value == "map"){
                newData = data.map((currentNum) => {
                    return currentNum**2
                });
                dataForOutput = newData.join(", ");
            }
            else if(methods.value == "reduce"){
                dataForOutput = data.reduce((sum, currentNum) => {
                    return ( + sum) + ( + currentNum);
                }, 0);
            }

            result.innerHTML = dataForOutput;
        }
    }
    methods.onchange = showNumsList;
}())