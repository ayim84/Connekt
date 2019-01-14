var objectArray = 
[
    {
        id: 1,
        topLeftX: 830,
        topLeftY: 123,
        height: 50,
        width: 40
    },
    {
        id: 2,
        topLeftX: 98,
        topLeftY: 3,
        height: 78,
        width: 12
    },
    {
        id: 3,
        topLeftX: 56,
        topLeftY: 28,
        height: 83,
        width: 75
    }
];

function sortArray(array)
{
    var topToBottomArray = [...array].sort(function(a,b)
    {
        if(a.topLeftY > b.topLeftY)
        {
            return -1;
        }
        
        if(a.topLeftY < b.topLeftY)
        {
            return 1;
        }
    });

    console.log("Top to Bottom", topToBottomArray);

    var leftToRightArray = [...array].sort(function(a,b)
    {
        if(a.topLeftX > b.topLeftX)
        {
            return 1;
        }
        
        if(a.topLeftX < b.topLeftX)
        {
            return -1;
        }
    });

    console.log("Left to Right", leftToRightArray);

    for (var i = 0; i < array.length; i++)
    {
        array[i].size = array[i].height * array[i].width;
    }

    var sizeArray = [...array];

    for (var i = 0; i < sizeArray.length; i++)
    {
        sizeArray[i].size = sizeArray[i].height * sizeArray[i].width;
    }

    sizeArray.sort(function(a,b)
    {
        if(a.size > b.size)
        {
            return -1;
        }
        
        if(a.size < b.size)
        {
            return 1;
        }
    });

    console.log("Big to Small", sizeArray);
}

sortArray(objectArray);

/*******************************************************
Alternate method with separate functions for each sort
*******************************************************/

/*******************************************************
function topToBottomSort(array)
{
    var topToBottomArray = [...array].sort(function(a,b)
    {
        if(a.topLeftY > b.topLeftY)
        {
            return -1;
        }
        
        if(a.topLeftY < b.topLeftY)
        {
            return 1;
        }
    });

    console.log("Top to Bottom", topToBottomArray);
}

function leftToRightSort(array)
{
    var leftToRightArray = [...array].sort(function(a,b)
    {
        if(a.topLeftX > b.topLeftX)
        {
            return 1;
        }
        
        if(a.topLeftX < b.topLeftX)
        {
            return -1;
        }
    });

    console.log("Left to Right", leftToRightArray);
}

function sizeSort(array)
{
    var sizeArray = [...array];

    for (var i = 0; i < sizeArray.length; i++)
    {
        sizeArray[i].size = sizeArray[i].height * sizeArray[i].width;
    }

    sizeArray.sort(function(a,b)
    {
        if(a.size > b.size)
        {
            return -1;
        }
        
        if(a.size < b.size)
        {
            return 1;
        }
    });

    console.log("Big to Small", sizeArray);
}

topToBottomSort(objectArray);
leftToRightSort(objectArray);
sizeSort(objectArray);
*******************************************************/