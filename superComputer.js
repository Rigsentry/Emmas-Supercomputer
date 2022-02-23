function twoPluses(input) {
    if(input.length===0) return "input error";
    var inputs = input.split("\n");
    var twoDimension = [];
    for (var i=0; i<inputs.length; i++) {
        twoDimension.push(inputs[i]);
    }
    var numRows = twoDimension[0].length;
    var numCols = twoDimension.length;
    var maxGridCounterArray = [];
    var maxGridCounter, secondMaxGridCounter;
    maxGridCounter = secondMaxGridCounter = Number.MIN_VALUE;
    for (i=0; i<numCols; i++) {
        for (j=0; j<numRows; j++) {
            var countedIndex = {};
            var gridCounter = 0;
            var middle = Math.floor(j/2);
            var upPointer, downPointer, leftPointer, rightPointer;
            upPointer = downPointer = leftPointer = rightPointer = middle;
            if(twoDimension[middle][middle] == "G") {
                gridCounter++;
            }
            while(upPointer>0 && downPointer<=j && leftPointer>0 && rightPointer<=i) {
                    upPointer--;
                    downPointer++;
                    leftPointer--;
                    rightPointer++;
                    if(twoDimension[middle][upPointer]=="G" && twoDimension[middle][downPointer]=="G" && twoDimension[leftPointer][middle] == "G" && twoDimension[rightPointer][middle] == "G") {
                        if(countedIndex[upPointer]!=1 && countedIndex[downPointer]!=1 && countedIndex[rightPointer]!=1 && countedIndex[leftPointer]!=1) {
                            gridCounter+=4;
                            countedIndex[upPointer] = 1;
                            countedIndex[downPointer] = 1;
                            countedIndex[rightPointer] = 1;
                            countedIndex[leftPointer] = 1;
                        }
                    }
            }
            //maxGridCounterArray.push(gridCounter);
            if(gridCounter>=maxGridCounter) {
                secondMaxGridCounter = maxGridCounter;
                maxGridCounter = gridCounter;
            }
        }
    }
    //console.log(maxGridCounterArray);
    return maxGridCounter * secondMaxGridCounter;
}
var input1 = `BGBBGB
GGGGGG
BGBBGB
GGGGGG
BGBBGB
BGBBGB`
var input0 = `GGGGGG
GBBBGB
GGGGGG
GGBBGB
GGGGGG`
console.log(twoPluses(input0));
console.log(twoPluses(input1));